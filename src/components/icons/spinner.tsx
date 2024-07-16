export const Spinner: React.FC = () => {
  const array = Array.from({ length: 4 }, (_, i) => i)

  return (
    <div className="h-4 w-4 relative">
      {array.map((_, i) => (
        <div
          key={i}
          className={`h-[calc(0.8*1rem)] w-[calc(0.8*1rem)] border-transparent border-t-current border-[1.5px] m-0.5 rounded-full absolute animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite]`}
          style={{
            animationDelay: `-${((array.length - 1 - i) * 0.15).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  )
}
