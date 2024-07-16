import Pointer from '@/public/pointer.svg?react'

import {
  cursorsData,
  tableColumnHeader,
  tableData,
  tableRowHeader,
} from '@/src/data/table'

import { ButtonCell } from './cell/button'
import { IconCell } from './cell/icon'
import { ColumnRow } from './head/row'

export const Body: React.FC = () => {
  return (
    <tbody className="bg-background">
      {tableColumnHeader.map(({ label, row, state }) => (
        <tr key={row} className="group">
          <ColumnRow label={label} />

          {tableRowHeader.map(({ variant }) => {
            const key = `${variant}-${state}`

            const data = tableData.find(
              (data) => data.variant === variant && data.state === state,
            )

            if (data) return <ButtonCell key={key} {...data} />

            const { Icon } = cursorsData.find(
              (cursor) => cursor.state === state,
            ) || { Icon: Pointer }

            return <IconCell key={`cursor-${key}`} Icon={Icon} />
          })}
        </tr>
      ))}
    </tbody>
  )
}
