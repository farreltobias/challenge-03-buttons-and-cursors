type Props = {
  Icon: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
}

export const IconCell: React.FC<Props> = ({ Icon }) => {
  return (
    <td className="text-center p-4 group-first:pt-8 group-last:pb-8 [&:nth-child(2)]:pl-8 last:pr-4 group-first:last:rounded-tr-sm group-last:last:rounded-br-sm">
      <Icon className="w-6 mx-auto" />
    </td>
  )
}
