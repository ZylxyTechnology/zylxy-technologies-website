import { headers, cookies } from "next/headers";

/**
 * Checks whether an IP address is a local/loopback address
 */
function isLoopbackIp(ip) {
  if (!ip) return true;
  const clean = String(ip).trim().toLowerCase();
  return (
    clean === "127.0.0.1" ||
    clean === "::1" ||
    clean === "localhost" ||
    clean === "0.0.0.0" ||
    clean.startsWith("127.")
  );
}

/**
 * Safely extracts the real client IP address from request headers or NextRequest.
 */
export function getClientIp(request = null, fallbackIp = null) {
  let reqHeaders = null;

  if (request && request.headers) {
    reqHeaders = request.headers;
  } else {
    try {
      reqHeaders = headers();
    } catch (e) {
      reqHeaders = null;
    }
  }

  if (reqHeaders) {
    // 1. x-forwarded-for (standard proxy header, comma separated)
    const xForwardedFor = reqHeaders.get
      ? reqHeaders.get("x-forwarded-for")
      : reqHeaders["x-forwarded-for"];
    if (xForwardedFor) {
      const firstIp = String(xForwardedFor).split(",")[0].trim();
      if (firstIp && !isLoopbackIp(firstIp)) {
        return firstIp;
      }
    }

    // 2. x-real-ip (Nginx / Hostinger / Apache proxy)
    const xRealIp = reqHeaders.get
      ? reqHeaders.get("x-real-ip")
      : reqHeaders["x-real-ip"];
    if (xRealIp && !isLoopbackIp(xRealIp)) {
      return String(xRealIp).trim();
    }

    // 3. cf-connecting-ip (Cloudflare)
    const cfConnectingIp = reqHeaders.get
      ? reqHeaders.get("cf-connecting-ip")
      : reqHeaders["cf-connecting-ip"];
    if (cfConnectingIp && !isLoopbackIp(cfConnectingIp)) {
      return String(cfConnectingIp).trim();
    }

    // 4. x-client-ip
    const xClientIp = reqHeaders.get
      ? reqHeaders.get("x-client-ip")
      : reqHeaders["x-client-ip"];
    if (xClientIp && !isLoopbackIp(xClientIp)) {
      return String(xClientIp).trim();
    }
  }

  // 5. NextRequest request.ip property
  if (request && request.ip && !isLoopbackIp(request.ip)) {
    return request.ip;
  }

  // 6. Client payload fallback (if passed in request body from ipify)
  if (fallbackIp && !isLoopbackIp(fallbackIp)) {
    return String(fallbackIp).trim();
  }

  return undefined;
}

/**
 * Extracts hubspotutk cookie if present
 */
export function getHubspotUtk(request = null) {
  if (request && request.cookies) {
    const token = request.cookies.get
      ? request.cookies.get("hubspotutk")?.value
      : request.cookies.hubspotutk;
    if (token) return token;
  }

  try {
    const cookieStore = cookies();
    const token = cookieStore.get("hubspotutk")?.value;
    if (token) return token;
  } catch (e) {
    // Ignore cookie store errors in unsupported environments
  }

  return undefined;
}

/**
 * Builds the standard context object required by HubSpot Submit Form API v3.
 */
export function getHubspotContext(
  request = null,
  pageUri = "https://zylxytech.com",
  pageName = "Zylxy Lead Intake Canvas",
  fallbackIp = null,
) {
  const ipAddress = getClientIp(request, fallbackIp);
  const hutk = getHubspotUtk(request);

  const context = {
    pageUri: pageUri || "https://zylxytech.com",
    pageName: pageName || "Zylxy Lead Intake Canvas",
  };

  if (ipAddress) {
    context.ipAddress = ipAddress;
  }

  if (hutk) {
    context.hutk = hutk;
  }

  return context;
}
