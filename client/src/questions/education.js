import React, { useContext, useEffect } from "react"
import { TextInput } from "../components/TextInput"
import { DatePicker } from "../components/DatePicker"
import { Button } from "../components/Button"
import { ApplicationContext } from "../context"

export function Education() {
  const { educations, setEducations } = useContext(ApplicationContext)

  const handleEducation = (index, value, field) => {
    educations[index][field] = value
    setEducations([...educations])
  }

  const handleCreate = () => {
    const education = {
      name: "",
      graduated_at: new Date(),
      degree: "",
    }
    educations.push(education)
    setEducations([...educations])
  }

  const handleDelete = (index) => {
    educations.splice(index, 1)
    setEducations([...educations])
  }

  useEffect(() => {
    console.log(educations)
  }, [educations])

  return (
    <div className="flex flex-col gap-3 my-8">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-black">Образование</p>
        <Button text="+" className={"!px-2 py-0"} action={handleCreate} />
      </div>

      {educations.map((e, index) => (
        <div
          key={index}
          className="grid gap-2 bg-lightblue p-2 rounded-sm relative"
        >
          {index !== 0 && (
            <span
              className="absolute right-2 top-1.5 px-2 py-0 rounded-full bg-red-400 text-white justify-center"
              onClick={() => handleDelete(index)}
            >
              x
            </span>
          )}

          <TextInput
            value={e?.name}
            required
            label="Учебное заведение"
            placeholder="Введите название..."
            onChange={(value) => handleEducation(index, value, "name")}
          />

          <DatePicker
            value={e?.graduated_at}
            required
            label="Дата выпуска"
            onChange={(value) => handleEducation(index, value, "graduated_at")}
          />

          <TextInput
            value={e?.degree}
            required
            label="Квалификация по диплому"
            placeholder="Введите..."
            onChange={(value) => handleEducation(index, value, "degree")}
          />
        </div>
      ))}
    </div>
  )
}
