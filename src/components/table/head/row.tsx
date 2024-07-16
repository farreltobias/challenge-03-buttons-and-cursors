type Props = {
  label: string
}

export const ColumnRow: React.FC<Props> = ({ label }) => {
  return (
    <th
      scope="row"
      className="bg-background-tertiary px-6 uppercase text-xs font-normal"
    >
      {label}
    </th>
  )
}
