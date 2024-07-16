import Arrow from '@/public/arrow.svg?react'
import Loading from '@/public/loading.svg?react'
import Move from '@/public/move.svg?react'
import NotAllowed from '@/public/not-allowed.svg?react'

import { Optional } from '../types/optional'

type Variant = 'default' | 'secondary' | 'ghost'
type State = 'default' | 'hover' | 'focus' | 'disabled' | 'loading' | 'moveable'

type TableRowHeader = {
  column: number
  label: string
  variant: Variant
}

type TableColumnHeader = {
  row: number
  label: string
  state: State
}

type TableData = {
  id: number
  label: string
  variant: Variant
  state: State
}

const buttonRows: TableRowHeader[] = [
  {
    column: 1,
    label: 'Botão Primário',
    variant: 'default',
  },
  {
    column: 2,
    label: 'Botão Secundário',
    variant: 'secondary',
  },
  {
    column: 3,
    label: 'Botão Terciário',
    variant: 'ghost',
  },
]

export const tableRowHeader: Optional<TableRowHeader, 'variant'>[] = [
  ...buttonRows,
  {
    column: 4,
    label: 'Cursor',
  },
]

export const tableColumnHeader: TableColumnHeader[] = [
  {
    row: 1,
    label: 'Default',
    state: 'default',
  },
  {
    row: 2,
    label: 'Hover',
    state: 'hover',
  },
  {
    row: 3,
    label: 'Focus',
    state: 'focus',
  },
  {
    row: 4,
    label: 'Disabled',
    state: 'disabled',
  },
  {
    row: 5,
    label: 'Loading',
    state: 'loading',
  },
  {
    row: 6,
    label: 'Moveable',
    state: 'moveable',
  },
]

export const tableData: TableData[] = [
  {
    id: 1,
    label: 'Default primary',
    variant: 'default',
    state: 'default',
  },
  {
    id: 2,
    label: 'Default secondary',
    variant: 'secondary',
    state: 'default',
  },
  {
    id: 3,
    label: 'Default tertiary',
    variant: 'ghost',
    state: 'default',
  },
  {
    id: 4,
    label: 'Hover primary',
    variant: 'default',
    state: 'hover',
  },
  {
    id: 5,
    label: 'Hover secondary',
    variant: 'secondary',
    state: 'hover',
  },
  {
    id: 6,
    label: 'Hover tertiary',
    variant: 'ghost',
    state: 'hover',
  },
  {
    id: 7,
    label: 'Focus primary',
    variant: 'default',
    state: 'focus',
  },
  {
    id: 8,
    label: 'Focus secondary',
    variant: 'secondary',
    state: 'focus',
  },
  {
    id: 9,
    label: 'Focus tertiary',
    variant: 'ghost',
    state: 'focus',
  },
  {
    id: 10,
    label: 'Disabled primary',
    variant: 'default',
    state: 'disabled',
  },
  {
    id: 11,
    label: 'Disabled secondary',
    variant: 'secondary',
    state: 'disabled',
  },
  {
    id: 12,
    label: 'Disabled tertiary',
    variant: 'ghost',
    state: 'disabled',
  },
  {
    id: 13,
    label: 'Loading primary',
    variant: 'default',
    state: 'loading',
  },
  {
    id: 14,
    label: 'Loading secondary',
    variant: 'secondary',
    state: 'loading',
  },
  {
    id: 15,
    label: 'Loading tertiary',
    variant: 'ghost',
    state: 'loading',
  },
  {
    id: 16,
    label: 'Moveable primary',
    variant: 'default',
    state: 'moveable',
  },
  {
    id: 17,
    label: 'Moveable secondary',
    variant: 'secondary',
    state: 'moveable',
  },
  {
    id: 18,
    label: 'Moveable tertiary',
    variant: 'ghost',
    state: 'moveable',
  },
]

export const cursorsData = [
  {
    id: 1,
    state: 'default',
    Icon: Arrow,
  },
  {
    id: 2,
    state: 'hover',
    Icon: Arrow,
  },
  {
    id: 3,
    state: 'focus',
    Icon: Arrow,
  },
  {
    id: 4,
    state: 'disabled',
    Icon: NotAllowed,
  },
  {
    id: 5,
    state: 'loading',
    Icon: Loading,
  },
  {
    id: 6,
    state: 'moveable',
    Icon: Move,
  },
]
