import { tableRowHeader } from '@/src/data/table'

export const ColumnHead: React.FC = () => {
  return (
    <thead>
      <tr className="uppercase text-xs">
        <td></td>
        {tableRowHeader.map((header) => (
          <th scope="col" className="py-6 px-8 font-normal" key={header.column}>
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}
