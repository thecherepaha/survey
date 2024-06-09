import React, { useContext } from "react"
import { EmploymentTable } from "../components/EmploymentTable"
import { Button } from "../components/Button"
import { ApplicationContext } from "../context"
import { CheckBox } from "../components/CheckBox"

export function Experience() {
  const { experience, setExperience, privacy, setPrivacy } =
    useContext(ApplicationContext)

  const handleChange = (value, index, field) => {
    experience[index][field] = value
    setExperience([...experience])
  }

  const handleDeleteRow = (index) => {
    experience.splice(index, 1)
    setExperience([...experience])
  }

  return (
    <div className="flex flex-col gap-3 my-8">
      <p className="text-xs font-semibold text-darkBlue tracking-tighter">
        Выполняемая работа с начала трудовой деятельности (включая военную
        службу, работу по совместительству, предпринимательскую деятельность).
      </p>

      <EmploymentTable
        experience={experience}
        setExperience={setExperience}
        handleChange={handleChange}
        handleDeleteRow={handleDeleteRow}
      />
      <Button
        text="+"
        className={"w-fit !px-2 !py-1"}
        action={() =>
          setExperience([
            ...experience,
            {
              in: "",
              out: "",
              position: "",
              address: "",
            },
          ])
        }
      />

      <CheckBox
        checked={privacy}
        label="Я соглашаюсь, на проведение обработки моих персональных данных (в том числе автоматизированную обработку)."
        labelStyle="text-xs text-gray-500 font-light"
        onChange={(v) => setPrivacy(v)}
      />
    </div>
  )
}
