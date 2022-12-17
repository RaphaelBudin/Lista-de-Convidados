import { DisplayUsuarioComponent, ViewIdadeComponent, ViewNomeComponent } from "../../Components";
import BotaoExcluirUsuario from "../buttons/BotaoExcluirUsuario";

export default function DisplayUsuario({ usuario, excluirUsuario }) {
  return (
    <DisplayUsuarioComponent>
      <ViewNomeComponent>{usuario.nome}</ViewNomeComponent>
      <ViewIdadeComponent>{usuario.idade}</ViewIdadeComponent>
      <BotaoExcluirUsuario usuario={usuario} excluirUsuario={excluirUsuario}/>
    </DisplayUsuarioComponent>
  );
}
