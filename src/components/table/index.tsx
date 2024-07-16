import { ColumnHead } from './head/column'
import { Body } from './body'

export const Table: React.FC = () => {
  return (
    <div className="overflow-x-scroll px-8 2xl:px-0">
      <table className="h-[35rem] border-separate border-spacing-0 box-border bg-background-tertiary border-4 border-background-tertiary rounded-lg">
        <ColumnHead />
        <Body />
      </table>
    </div>
  )
}
