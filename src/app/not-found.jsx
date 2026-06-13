import Link from "next/link";

export default function NotFound() {
  return (
    /* Added fixed, inset-0, z-[9999], and overflow-y-auto to take over the whole screen */
    <div className="fixed inset-0 z-[9999] bg-[#202124] flex flex-col items-center pt-[15vh] px-6 font-sans overflow-y-auto">
      <div className="max-w-[600px] w-full flex flex-col items-start">
        {/* Chrome's Sad Document Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#9aa0a6] mb-6"
        >
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
          <circle cx="10" cy="13" r="1" />
          <circle cx="14" cy="13" r="1" />
          <path d="M10 17a3.5 3.5 0 0 0 4 0" />
        </svg>

        <h1 className="text-[#e8eaed] text-[22px] md:text-[24px] font-normal tracking-wide mb-4">
          This page can't be reached
        </h1>

        <p className="text-[#9aa0a6] text-[14px] md:text-[15px] mb-4">
          Check if there is a typo in the URL.
        </p>

        <p className="text-[#9aa0a6] text-[12px] tracking-wide mb-8">
          HTTP_ERROR_404_NOT_FOUND
        </p>

        <Link
          href="/"
          className="px-6 py-2 bg-[#8ab4f8] text-[#202124] text-[13px] md:text-[14px] font-medium rounded-full transition-colors hover:bg-[#9ec1f9]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
