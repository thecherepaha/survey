import { useState } from "react"
import "./index.css"
import { LeftSection, RightSection } from "./sections"
import { ApplicationProvider } from "./context"
import axios from "axios"
const Settings = require("./settings.json")
const TABS = [
  {
    label: "passport",
    value: 1,
  },
  {
    label: "education",
    value: 2,
  },
  {
    label: "languages",
    value: 3,
  },
  {
    label: "skills",
    value: 4,
  },
  {
    label: "experience",
    value: 5,
  },
]
const styles = {
  wrapper: "grid grid-cols-1 min-h-screen px-2 py-10 sm:grid-cols-2",
}

export default function App() {
  const [active, setActive] = useState(1)
  axios.defaults.baseURL = Settings[process.env.NODE_ENV].server_url

  return (
    <ApplicationProvider>
      <div className={styles.wrapper}>
        <LeftSection />
        <RightSection active={active} setActive={setActive} tabs={TABS} />
      </div>
    </ApplicationProvider>
  )
}
