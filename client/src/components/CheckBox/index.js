import React from "react"

export function CheckBox({ className, checked, label, onChange, labelStyle }) {
  return (
    <div className="flex items-center gap-2">
      <input
        checked={checked || false}
        type="checkbox"
        className={`w-5 h-5 text-blue-6  00 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 ${className}`}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label && <label className={labelStyle ?? ""}>{label}</label>}
    </div>
  )
}
