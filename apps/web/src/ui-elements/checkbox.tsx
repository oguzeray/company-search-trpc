import { InputHTMLAttributes } from "react";

interface CheckboxUIProps {
  label: string;
}
const CheckboxUI = ({
  label,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & CheckboxUIProps) => {
  return (
    <div className="flex items-center p-2">
      <input
        id={`${label}-checkbox`}
        type="checkbox"
        className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
        {...inputProps}
      />
      <label
        htmlFor={`${label}-checkbox`}
        className="ml-2 text-base font-medium text-gray-200 "
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxUI;
