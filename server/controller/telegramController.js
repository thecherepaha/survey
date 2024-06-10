const { sendMessage } = require("../integration/telegram")

const formatEducation = (educations) => {
  return educations
    .map(
      (edu, index) => `
*Образование ${index + 1}:*
- *Название Учебного Заведения:* ${edu.name ?? "---"}
- *Дата выпуска:* ${new Date(edu.graduated_at).toLocaleDateString()}
- *Кваливикация по диплому:* ${edu.degree ?? "---"}
`
    )
    .join("\n")
}

const formatExperience = (experience) => {
  return experience
    .map(
      (exp, index) => `
*${index + 1}:*
- *поступление:* ${exp.in ?? "---"}
- *уход:* ${exp.out ?? "---"}
- *Позиция:* ${exp.position ?? "---"}
- *Адрес:* ${exp.address ?? "---"}
`
    )
    .join("\n")
}

const formatLanguages = (languages) => {
  return languages.length > 0 ? languages.map((l) => l.label).join(", ") : "---"
}

const formatSkills = (skills) => {
  return `
- *Навыки ПК:* ${skills.pc ?? "---"}
- *Проф навыки:* ${skills.hard ?? "---"}
`
}

const formatPassport = (passport) => {
  return `
*Паспортные данные:*
- *ФИО:* ${passport.full_name ?? "---"}
- *Дата рождения:* ${new Date(passport.birthday ?? "---").toLocaleDateString()}
- *Место рождения:* ${passport.place_of_birth ?? "---"}
- *Адрес проживания:* ${passport.address ?? "---"}
- *Номер телефона:* ${passport.phone ?? "---"}
- *Серия паспорта:* ${passport.series ?? "---"}
- *Номер паспорта:* ${passport.number ?? "---"}
- *Выдан:* ${passport.organ ?? "---"}
- *Дата выдачи:* ${new Date(passport.delivery_date).toLocaleDateString()}
`
}

const formatMessage = (data) => {
  return `
${formatPassport(data.passport)}
${formatEducation(data.educations)}
*Языки:* ${formatLanguages(data.languages)}
*Навыки:* ${formatSkills(data.skills)}
${formatExperience(data.experience)}
  `
}

exports.send = async function (req, res) {
  const formattedMessage = formatMessage(req.body)
  await sendMessage(formattedMessage)
  res.status(200).send({ message: "Сообщение успешно отправлено!" })
}

exports.respond = async function (req, res) {
  await sendMessage("<strong>Hello</strong>")
  res.send("hello, bor")
}
