import { useState } from "react";
import { CardBranco, Container } from "./Components";
import FormAddUsuario from "./components/forms/FormAddUsuario";
import ListaUsuarios from "./components/lists/ListaUsuarios";

function App() {
  const [contador, setContador] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  function addUsuario(usuarioObject) {
    setUsuarios((prevState) => {
      return [
        ...prevState,
        { id: contador, nome: usuarioObject.inputNomeUsuario, idade: usuarioObject.inputIdade },
      ];
    });
    setContador(contador + 1);
  }

  function excluirUsuario(idExcluir) {
    setUsuarios(() =>
      usuarios.filter((usuario) => usuario.id != idExcluir.target.value)
    );
  }

  return (
    <Container>
      <CardBranco>
        <FormAddUsuario
          addUsuario={addUsuario}
          excluirUsuario={excluirUsuario}
        />
      </CardBranco>
      <CardBranco>
        <ListaUsuarios usuarios={usuarios} excluirUsuario={excluirUsuario} />
      </CardBranco>

    </Container>
  );
}

export default App;