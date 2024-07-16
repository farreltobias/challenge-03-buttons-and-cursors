import { Aside } from './components/aside'
import { Table } from './components/table'

export function App() {
  return (
    <div className="flex flex-col max-w-full h-screen gap-8 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:gap-0">
      <main className="flex flex-col items-center shrink max-w-full 2xl:basis-3/4">
        <div className="w-full xl:w-fit space-y-16 2xl:w-fit">
          <header className="space-y-2 p-8 pb-0 2xl:w-full 2xl:p-0">
            <h1 className="font-bold text-3xl">Tipos de botão</h1>
            <p className="text-lg font-normal opacity-65">
              Dentro de um layout, botões servem para destacar ações importantes
              a serem tomadas.
              <br />
              Acompanhe abaixo um exemplo de tipos e propriedades.
            </p>
          </header>

          <Table />
        </div>
      </main>
      <Aside />
    </div>
  )
}
