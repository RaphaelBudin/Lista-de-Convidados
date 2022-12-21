import {
  DisplayConvidadoComponent,
  ViewIdadeComponent,
  ViewNomeComponent,
} from "../../Components";
import BotaoExcluirConvidado from "../buttons/BotaoExcluirConvidado";

export default function DisplayConvidado({ convidado, excluirConvidado }) {
  
  return (
    <>
      <DisplayConvidadoComponent>
        <ViewNomeComponent>{convidado.nome}</ViewNomeComponent>
        <ViewIdadeComponent>{convidado.idade}</ViewIdadeComponent>
        <BotaoExcluirConvidado
          convidado={convidado}
          excluirConvidado={excluirConvidado}
        />
      </DisplayConvidadoComponent>
    </>
  );
}
