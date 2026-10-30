import "./ListaPacotes.css";
import Pacote from "./Pacote";
import type { PacoteType } from "./types";

type ListaPacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: string)=> void;
}

export default function ListaPacotes({pacotes, acaoExcluir}: ListaPacotesProps) {
    return (
        <div>
            <div>Ordenar por: </div>
            <dl>
                {pacotes.map(e => (<Pacote pacote={e} acaoExcluir={acaoExcluir} key={e.id}/>))}
            </dl>
        </div>  
    );
}