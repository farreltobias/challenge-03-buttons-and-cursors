export const Menu: React.FC = () => {
  const array = Array.from({ length: 3 }, (_, i) => i)

  return (
    <div className="h-6 w-6 flex flex-col items-center justify-center gap-[0.09375rem]">
      {array.map((i) => (
        <div key={i} className="flex h-0.5 w-4 rounded-full bg-current" />
      ))}
    </div>
  )
}
