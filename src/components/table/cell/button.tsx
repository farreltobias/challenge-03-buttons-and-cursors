import { Button, ButtonProps } from '../../ui/button'

type Props = {
  state: ButtonProps['state']
  variant: ButtonProps['variant']
  label: string
}

export const ButtonCell: React.FC<Props> = ({ label, state, variant }) => {
  return (
    <td className="text-center p-4 group-first:pt-8 group-last:pb-8 [&:nth-child(2)]:pl-8 group-first:first-of-type:rounded-tl-sm group-last:first-of-type:rounded-bl-sm">
      <Button state={state} variant={variant}>
        {label}
      </Button>
    </td>
  )
}
