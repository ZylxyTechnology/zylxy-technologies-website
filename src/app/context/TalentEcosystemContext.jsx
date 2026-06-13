"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TalentEcosystemContext = createContext(null);

export function TalentEcosystemProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const syncActiveEngagements = async () => {
    try {
      const res = await fetch("/api/talent");
      const result = await res.json();
      if (result.success) {
        setJobs(result.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    syncActiveEngagements();
  }, []);

  const dispatchFormSubmission = async (formType, data) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/talent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...data }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            formType === "corporate"
              ? "Job mandate submitted successfully to the live Explore opportunities active pipeline matrix!"
              : "Your profile has been recorded successfully inside our talent repository.",
        });
        await syncActiveEngagements();
        return true;
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TalentEcosystemContext.Provider
      value={{
        jobs,
        loadingJobs,
        status,
        setStatus,
        isSubmitting,
        dispatchFormSubmission,
      }}
    >
      {children}
    </TalentEcosystemContext.Provider>
  );
}

export const useTalentEcosystem = () => useContext(TalentEcosystemContext);
