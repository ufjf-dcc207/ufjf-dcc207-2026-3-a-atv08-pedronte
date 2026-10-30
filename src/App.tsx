import { useState } from 'react'
import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'
import ListaPacotes from './ListaPacotes'

const data: Array<PacoteType> = [
  {
    id: "253b0ea9-19ba-4a6c-b86f-2aece4ce09d3",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id: "5876819a-e3bd-481a-bea7-877dc2e0a694",
    largura: 40.0,
    altura: 10.0,
    profundidade: 15.0,
    peso: 3.14
  }
]

function App() {
  const [pacotes, setPacotes] = useState(data);

  function excluirPacote(id: string) {
    setPacotes(pacotes.filter(e=>e.id!== id));
  }

  return (
    <section>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        <ListaPacotes pacotes={pacotes} acaoExcluir={excluirPacote} />
      </div>
    </section>
  )
}

export default App
