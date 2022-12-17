import { BotaoExcluirComponent } from "../../Components";
import Lixo from "../../public/icon-lixo.webp";

export default function BotaoExcluirUsuario({usuario, excluirUsuario}){
    return(
        <BotaoExcluirComponent 
            type="image"
            src={Lixo}
            onClick={excluirUsuario}
            value={usuario.id}
        />
    );
}