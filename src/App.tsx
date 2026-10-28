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
  }
]

function App() {
  return (
    <section>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        <Pacote pacote={data[0]}/>

      </div>
    </section>
  )
}

export default App
