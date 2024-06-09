import React, { useContext } from "react"
import { TextInput } from "../components/TextInput"
import { DatePicker } from "../components/DatePicker"
import { ApplicationContext } from "../context"

export function Passport() {
  const { passport, setPassport } = useContext(ApplicationContext)

  return (
    <div className="flex flex-col gap-3 my-8">
      <TextInput
        value={passport?.full_name}
        required
        label="ФИО"
        placeholder="Ваше ФИО..."
        onChange={(value) =>
          setPassport({
            ...passport,
            full_name: value,
          })
        }
      />
      <DatePicker
        value={passport?.birthday}
        required
        label="Дата рождения"
        onChange={(value) => setPassport({ ...passport, birthday: value })}
      />
      <TextInput
        value={passport?.place_of_birth}
        required
        label="Место рождения"
        placeholder="Введите место рождения..."
        onChange={(value) =>
          setPassport({
            ...passport,
            place_of_birth: value,
          })
        }
      />

      <TextInput
        value={passport?.address}
        required
        label="Адрес проживания"
        placeholder="Введите адрес..."
        onChange={(value) =>
          setPassport({
            ...passport,
            address: value,
          })
        }
      />

      <TextInput
        value={passport?.phone}
        required
        label="Номер телефона"
        placeholder="+7(777)-111-22-33"
        onChange={(value) =>
          setPassport({
            ...passport,
            phone: value,
          })
        }
      />

      <TextInput
        value={passport?.series}
        required
        label="Серия паспорта"
        placeholder="Введите..."
        onChange={(value) =>
          setPassport({
            ...passport,
            series: value,
          })
        }
      />

      <TextInput
        value={passport?.number}
        required
        label="Номер паспорта"
        placeholder="Введите..."
        onChange={(value) =>
          setPassport({
            ...passport,
            number: value,
          })
        }
      />

      <TextInput
        value={passport?.organ}
        required
        label="Кем выдан?"
        placeholder="МВД РК"
        onChange={(value) =>
          setPassport({
            ...passport,
            organ: value,
          })
        }
      />

      <DatePicker
        value={passport?.delivery_date}
        required
        label="Дата выдачи"
        onChange={(value) => setPassport({ ...passport, delivery_date: value })}
      />
    </div>
  )
}
