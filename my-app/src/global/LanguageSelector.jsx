/* import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const languageOptions = [
    { value: "en", label: "English", flag: "🇺🇸" },
    { value: "ar", label: "العربية", flag: "🇸🇦" },
  ];

  const customOptionRenderer = ({ label, flag }) => (
    <div>
      <span role="img" aria-label={label}>
        {flag}
      </span>{" "}
      {label}
    </div>
  );

  return (
    <Select
      options={languageOptions}
      defaultValue={languageOptions.find(
        (option) => option.value === i18n.language
      )}
      formatOptionLabel={customOptionRenderer}
      onChange={changeLanguage}
    />
  );
};

export default LanguageSelector;
 */