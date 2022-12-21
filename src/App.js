import { useState } from "react";
import { CardBranco, Container } from "./Components";
import FormAddConvidado from "./components/forms/FormAddConvidado";
import ListaConvidados from "./components/lists/ListaConvidados";

const listaOpcoesPresentes = [
  {id: 1, nome: "Batedeira", quantidade: 1, convidado: "Raphael"},
  {id: 2, nome: "Furadeira", quantidade: 1, convidado: "Marcelo"},
  {id: 3, nome: "Jogo de Pratos", quantidade: 1, convidado: "Bruno"},
  {id: 4, nome: "Jogo de Copos", quantidade: 1, convidado: "Ricardo"},
  {id: 5, nome: "Lancheira", quantidade: 1, convidado: "Leonardo"},
  {id: 6, nome: "Sanduicheira", quantidade: 1, convidado: "Igor"},
  {id: 7, nome: "Air Fryer", quantidade: 1, convidado: "Giordano"},
  {id: 8, nome: "Panela de Arroz", quantidade: 1, convidado: "Silvio"},
  {id: 9, nome: "Secador de Cabelo", quantidade: 1, convidado: "Agnolia"},
  {id: 10, nome: "Abajur", quantidade: 1, convidado: "Deborah"},
  {id: 11, nome: "Dinheiro", quantidade: 1, convidado: "Carlos"},
  {id: 12, nome: "Kit de Facas", quantidade: 1, convidado: "Thirza"},
];

function App() {
  const [contador, setContador] = useState(0);
  const [convidados, setConvidados] = useState([]);

  function addUsuario(usuarioObject) {
    console.log("Dentro do componente AddUsuario - APP.js");
    console.log(usuarioObject);

    setConvidados((prevState) => {
      return [
        ...prevState,
        { id: contador, nome: usuarioObject.inputNomeUsuario, idade: usuarioObject.inputIdade, presentesEscolhidos: [usuarioObject.presentesEscolhidos] },
      ];
    });
    setContador(contador + 1);
  }

  function excluirConvidado(idExcluir) {
    setConvidados(() =>
      convidados.filter((usuario) => usuario.id != idExcluir.target.value)
    );
  }

  return (
    <Container>
      <CardBranco>
        <FormAddConvidado
          addUsuario={addUsuario}
          excluirConvidado={excluirConvidado}
          listaOpcoesPresentes={listaOpcoesPresentes}
        />
      </CardBranco>
      <CardBranco>
        <ListaConvidados convidados={convidados} excluirConvidado={excluirConvidado} />
      </CardBranco>
    </Container>
  );
}

export default App;