import React, { useContext } from "react"
import { TextAreaInput } from "../components/TextAreaInput"
import { ApplicationContext } from "../context"

export function Skills() {
  const { skills, setSkills } = useContext(ApplicationContext)

  return (
    <div className="flex flex-col gap-3 my-8">
      <p className="text-xl font-semibold text-black">Навыки</p>

      <TextAreaInput
        value={skills?.pc}
        required
        label="Навыки владения ПК"
        placeholder="Excell, word, photoshop итд."
        onChange={(value) => setSkills({ ...skills, pc: value })}
      />

      <TextAreaInput
        value={skills?.hard}
        required
        label="Профессиональные навыки"
        placeholder="python, target, seo итд."
        onChange={(value) => setSkills({ ...skills, hard: value })}
      />
    </div>
  )
}
