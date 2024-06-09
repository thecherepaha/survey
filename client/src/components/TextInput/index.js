import React from "react"

export function TextInput({
  value,
  onChange,
  className,
  placeholder,
  label,
  required,
  type,
}) {
  return (
    <div className="grid gap-1">
      {label && (
        <div className="flex items-center gap-2">
          <label className="text-md font-semibold">{label}</label>
          {required && <span className="text-red-500">*</span>}
        </div>
      )}
      <input
        type={type || "text"}
        value={value || ""}
        placeholder={placeholder ?? "Введите..."}
        className={
          "border-[1.5px] p-2 border-lightblue outline-0 focus:border-yellow-200 " +
          className
        }
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  )
}
