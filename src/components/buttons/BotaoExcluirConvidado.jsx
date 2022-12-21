import { BotaoExcluirComponent } from "../../Components";
import Lixo from "../../public/icon-lixo.webp";

export default function BotaoExcluirConvidado({convidado, excluirConvidado}){
    return(
        <BotaoExcluirComponent 
            type="image"
            src={Lixo}
            onClick={excluirConvidado}
            value={convidado.id}
        />
    );
}