import { useState } from 'react'

import { Button } from './ui/button'

export const Aside: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  return (
    <aside className="flex flex-col h-full bg-background-secondary p-8 xl:items-center 2xl:justify-center 2xl:basis-1/4 2xl:h-screen 2xl:px-11 2xl:py-0">
      <div className="max-w-fit space-y-16">
        <header className="space-y-2">
          <h1 className="font-bold text-3xl">Teste os botões</h1>
          <p className="text-lg font-normal opacity-65">
            Interaja com os botões e observe a mudança de aparência e de
            cursores
          </p>
        </header>
        <div className="space-y-8 2xl:h-[35rem]">
          <Button
            className="w-full"
            onClick={handleLoading}
            state={isLoading ? 'loading' : 'default'}
          >
            Interaja comigo
          </Button>
          <Button className="w-full" variant="secondary" disabled>
            Interaja comigo
          </Button>
          <Button className="w-full" variant="ghost" state="moveable">
            Interaja comigo
          </Button>
        </div>
      </div>
    </aside>
  )
}
