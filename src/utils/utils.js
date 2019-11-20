export const getLabelValueFrom = (labelKey, valueKey) => (obj = {}) => {
  if (typeof obj === "object" && obj !== null) {
    const safeValueKey = valueKey || labelKey;

    return {
      label: obj[labelKey] || "",
      value: obj[safeValueKey] || ""
    };
  }

  return { label: "", value: "" };
};
