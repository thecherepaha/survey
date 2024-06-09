import axios from "axios"
import React, { createContext, useState } from "react"

export const ApplicationContext = createContext()

export function ApplicationProvider(props) {
  axios.defaults.baseURL = "https://survey-rzyd.onrender.com"

  // 1st question
  const [passport, setPassport] = useState({
    full_name: "",
    birthday: new Date(),
    place_of_birth: "",
    address: "",
    phone: "",
    series: "",
    number: "",
    organ: "",
    delivery_date: new Date(),
  })
  //2nd question
  const [educations, setEducations] = useState([
    {
      name: "",
      graduated_at: new Date(),
      degree: "",
    },
  ])
  //3rd question
  const [languages, setLanguages] = useState([
    {
      label: "Казахский",
      value: false,
    },
    {
      label: "Русский",
      value: false,
    },
    {
      label: "Английский",
      value: false,
    },
  ])
  //4th question
  const [skills, setSkills] = useState({
    pc: "",
    hard: "",
  })
  //5th question
  const [experience, setExperience] = useState([
    {
      in: "",
      out: "",
      position: "",
      address: "",
    },
  ])
  const [privacy, setPrivacy] = useState(false)

  //submit application
  const submit = async () => {
    if (!window.confirm("Вы уверены ?")) return

    let application = {}
    application.passport = passport
    application.educations = educations
    application.languages = languages.filter((l) => l.value)
    application.skills = skills
    application.experience = experience

    await axios({
      method: "POST",
      url: "/api/application",
      data: application,
    })
      .then(() => {
        window.alert("Ваше анкета отправлена!")
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  const validate = (active) => {
    console.log(active)
    return active
  }

  return (
    <ApplicationContext.Provider
      value={{
        passport: passport,
        setPassport: setPassport,
        educations: educations,
        setEducations: setEducations,
        languages: languages,
        setLanguages: setLanguages,
        skills: skills,
        setSkills: setSkills,
        experience: experience,
        setExperience: setExperience,
        privacy: privacy,
        setPrivacy: setPrivacy,
        submit: submit,
        validate: validate,
      }}
      {...props}
    />
  )
}
