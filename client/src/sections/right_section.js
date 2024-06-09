import React, { useContext } from "react"
import { ProgressBar, QuestionBlock } from "../blocks"
import { Button } from "../components/Button"
import { ApplicationContext } from "../context"

export function RightSection({ active, setActive, tabs }) {
  const { privacy, submit } = useContext(ApplicationContext)

  return (
    <div className="flex flex-col px-2 pt-8 sm:pt-0">
      <ProgressBar tabs={tabs} active={active} />

      <QuestionBlock active={active} />

      <div className="flex items-center gap-4">
        <Button
          text="Назад"
          action={() => setActive((prev) => Math.max(prev - 1, 1))}
        />
        <Button
          disabled={!privacy && active === tabs.length}
          action={() => {
            if (active === tabs.length) return submit()
            setActive((prev) => Math.min(prev + 1, tabs.length))
          }}
          text={active === tabs.length ? "Отправить" : "Вперед"}
        />
      </div>
    </div>
  )
}
