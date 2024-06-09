import React from "react"
import { TextInput } from "../TextInput"
import { Button } from "../Button"

const styles = {
  box_td_th: "border border-black px-2 py-1",
}
export function EmploymentTable({ experience, handleChange, handleDeleteRow }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-darkBlue whitespace-nowrap text-xs text-darkBlue">
        <thead className="bg-lightblue">
          <tr>
            <th className={styles.box_td_th} colSpan="2">
              Месяц и год
            </th>
            <th className={styles.box_td_th} rowSpan="2">
              Должность с указанием организации
            </th>
            <th className={styles.box_td_th} rowSpan="2">
              Адрес организации (в т. ч. за границей)
            </th>
            <th rowSpan="2"></th>
          </tr>
          <tr>
            <th className={styles.box_td_th}>Поступления</th>
            <th className={styles.box_td_th}>Ухода</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((e, index) => (
            <tr key={index}>
              <td className={styles.box_td_th}>
                <TextInput
                  value={e?.in}
                  onChange={(value) => handleChange(value, index, "in")}
                />
              </td>
              <td className={styles.box_td_th}>
                <TextInput
                  value={e?.out}
                  onChange={(value) => handleChange(value, index, "out")}
                />
              </td>
              <td className={styles.box_td_th}>
                <TextInput
                  value={e?.position}
                  onChange={(value) => handleChange(value, index, "position")}
                />
              </td>
              <td className={styles.box_td_th}>
                <TextInput
                  value={e?.address}
                  onChange={(value) => handleChange(value, index, "address")}
                />
              </td>
              <td className={styles.box_td_th}>
                <Button
                  text="X"
                  className={"bg-red-400 !px-2 py-1"}
                  action={() => handleDeleteRow(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
