import React from "react"

export function Button({ action, className, text, disabled }) {
  return (
    <button
      disabled={disabled ?? false}
      className={
        `${
          disabled
            ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
            : "bg-btnColor hover:bg-btnHover"
        }  text-white px-[25px] py-[10px] rounded-md ` + className
      }
      onClick={() => action && action()}
    >
      {text}
    </button>
  )
}
