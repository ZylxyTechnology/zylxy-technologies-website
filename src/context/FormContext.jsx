"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import countryList from "react-select-country-list";

const FormContext = createContext(null);

export function FormProvider({
  children,
  initialOrgType = "",
  defaultTargets = [],
}) {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const dropdownRef = useRef(null);
  const formRef = useRef(null);
  const stateRef = useRef({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orgName: "",
    orgType: initialOrgType,
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState({
    value: "IN",
    label: "India",
  });
  const [showCountries, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [activeTargets, setActiveTargets] = useState(defaultTargets);
  const [consentComm, setConsentComm] = useState(false);
  const [consentProc, setConsentProc] = useState(false);

  const [errors, setErrors] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    stateRef.current = {
      formData,
      selectedCountry,
      activeTargets,
      consentComm,
      consentProc,
    };
  });

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTargetToggle = (target) => {
    setActiveTargets((prev) =>
      prev.includes(target)
        ? prev.filter((item) => item !== target)
        : [...prev, target],
    );
  };

  const clearFormState = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      orgName: "",
      orgType: initialOrgType,
      message: "",
    });
    setActiveTargets(defaultTargets);
    setConsentComm(false);
    setConsentProc(false);
    setErrors({});
    setIsSuccess(false);
  };

  const value = {
    formData,
    setFormData,
    selectedCountry,
    setSelectedCountry,
    showCountries,
    setShowCountryDropdown,
    countrySearch,
    setCountrySearch,
    activeTargets,
    setActiveTargets,
    consentComm,
    setConsentComm,
    consentProc,
    setConsentProc,
    errors,
    setErrors,
    isPending,
    setIsPending,
    isSuccess,
    setIsSuccess,
    countryOptions,
    dropdownRef,
    formRef,
    stateRef,
    handleInputChange,
    handleTargetToggle,
    clearFormState,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
