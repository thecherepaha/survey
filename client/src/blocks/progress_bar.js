import React from "react"

export function ProgressBar({ tabs, active }) {
  return (
    <div className="flex items-center justify-between">
      {tabs.map((t, index) => (
        <div
          key={index}
          className={`flex items-center ${
            t.value === tabs.length ? "w-fit" : "w-full"
          }`}
        >
          <div
            className={`flex items-center justify-center px-2 rounded-full border-[2.5px] transition-colors duration-500 ease-in-out ${
              active >= t.value
                ? "bg-green-300 border-green-400"
                : "bg-white border-gray-300"
            }`}
          >
            <span
              className={`transition-colors duration-500 ease-in-out ${
                active >= t.value ? "text-darkBlue" : "text-gray-500"
              }`}
            >
              {t.value}
            </span>
          </div>
          <div
            className={`flex h-[2px] transition-colors duration-500 ease-in-out ${
              active > t.value ? "bg-green-400" : "bg-gray-300"
            } w-full`}
            style={{
              display: t.value === tabs.length ? "none" : "inline",
            }}
          />
        </div>
      ))}
    </div>
  )
}
