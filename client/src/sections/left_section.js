import React from "react"

export function LeftSection() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="font-bold text-2xl text-center sm:text-4xl">
        Форма заполнения анкеты
      </h1>
      <p className="text-center">
        Мы хотели бы узнать побольше о вас, для этого заполните все поля.
      </p>
      <img
        src="https://res.cloudinary.com/alexandracaulea/image/upload/v1585333913/illustration_x46ict.svg"
        alt="hero"
      />
    </div>
  )
}
