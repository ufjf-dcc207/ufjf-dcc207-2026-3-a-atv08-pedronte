import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'

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
  return (
    <section>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        {data.map(e => <Pacote pacote={e} key={e.id}/>)}
      </div>
    </section>
  )
}

export default App
