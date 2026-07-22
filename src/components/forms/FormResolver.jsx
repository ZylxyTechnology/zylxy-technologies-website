"use client";

import { formRegistry } from "@/data/forms/formRegistry";
import { getServiceConfig } from "@/data/services/serviceRegistry";
import React, { useMemo } from "react";

/**
 * Enterprise Form Component Resolver
 * Resolves serviceKey → formRegistry → Dynamic React Form Component with zero state leakage.
 */
export default function FormResolver({
  serviceKey,
  serviceSlug,
  fallback = null,
  ...passThroughProps
}) {
  const isEmbedded = passThroughProps.isEmbedded;
  delete passThroughProps.isEmbedded;
  const resolvedServiceConfig = useMemo(() => {
    return getServiceConfig(serviceKey || serviceSlug);
  }, [serviceKey, serviceSlug]);

  const Component = useMemo(() => {
    const key =
      serviceKey ||
      serviceSlug ||
      resolvedServiceConfig?.serviceKey ||
      resolvedServiceConfig?.serviceSlug;
    if (!key) return null;

    return formRegistry[key] || null;
  }, [serviceKey, serviceSlug, resolvedServiceConfig]);

  if (!Component) {
    return fallback;
  }

  return <Component key={resolvedServiceConfig?.serviceKey || serviceKey} isEmbedded={isEmbedded} {...passThroughProps} />;
}
