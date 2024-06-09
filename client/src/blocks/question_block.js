import React from "react"
import {
  Education,
  Experience,
  Languages,
  Passport,
  Skills,
} from "../questions"

export function QuestionBlock({ active }) {
  return (
    <div className="flex flex-col gap-2">
      {active === 1 && <Passport />}
      {active === 2 && <Education />}
      {active === 3 && <Languages />}
      {active === 4 && <Skills />}
      {active === 5 && <Experience />}
    </div>
  )
}
