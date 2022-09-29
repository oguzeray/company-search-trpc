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
        className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
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
