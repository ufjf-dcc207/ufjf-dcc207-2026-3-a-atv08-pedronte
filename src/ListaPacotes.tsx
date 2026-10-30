import { useState } from "react";
import "./ListaPacotes.css";
import Pacote from "./Pacote";
import type { PacoteType } from "./types";

type ListaPacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: string)=> void;
}

export default function ListaPacotes({pacotes, acaoExcluir}: ListaPacotesProps) {
    const [ordenacao, setOrdenacao] = useState("peso");

    function mudarOrdenacao(event: any) {
        setOrdenacao(event.target.value);
    }

    return (
        <div>
            <div>Ordenar por: {ordenacao}
                <select onChange={mudarOrdenacao}>
                    <option value="altura">Altura</option>
                    <option value="largura">Largura</option>
                    <option value="profundidade">Profundidade</option>
                    <option value="peso">Peso</option>
                </select>
            </div>
            <dl>
                {pacotes.map(e => (<Pacote pacote={e} acaoExcluir={acaoExcluir} key={e.id}/>))}
            </dl>
        </div>  
    );
}