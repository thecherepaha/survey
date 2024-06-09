import React, { useContext } from "react"
import { Button, CheckBox, TextInput } from "../components/lib"
import { ApplicationContext } from "../context"

export function Languages() {
  const { languages, setLanguages } = useContext(ApplicationContext)

  const handleCreate = () => {
    setLanguages([
      ...languages,
      {
        label: "",
        value: true,
      },
    ])
  }

  const handleLanguageChange = (index, field, value) => {
    const newLanguages = [...languages]
    newLanguages[index][field] = value
    setLanguages(newLanguages)
  }

  return (
    <div className="flex flex-col gap-3 my-8">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-black">Языки</p>
        <Button text="+" className={"!px-2 py-0"} action={handleCreate} />
      </div>
      {languages.map((l, index) => (
        <CheckBox
          checked={l.value}
          label={
            <TextInput
              value={l.label}
              placeholder="Введите язык..."
              onChange={(value) => handleLanguageChange(index, "label", value)}
            />
          }
          onChange={(value) => handleLanguageChange(index, "value", value)}
        />
      ))}
    </div>
  )
}
