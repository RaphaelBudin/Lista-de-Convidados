import { useEffect, useState } from "react";
import { GroupInput, Input, LabelInput, BotaoSubmit } from "../../Components";
import FormPresente from "./FormPresente";
import ListaPresentesAdicionados from "./ListaPresentesAdicionados";
import PopUp from "./PopUp";

export default function FormAddConvidado({ addUsuario, listaOpcoesPresentes }) {
  const [inputNomeUsuario, setInputNomeUsuario] = useState("");
  const [inputIdade, setInputIdade] = useState("");
  const [popUpAberto, setPopUpAberto] = useState(false);
  const [textoPopUp, setTextoPopUp] = useState("");
  const [nomeUsuarioValido, setNomeUsuarioValido] = useState(true);
  const [idadeValida, setIdadeValida] = useState(true);
  const [confirmado, setConfirmado] = useState(false);
  const [horaChegada, setHoraChegada] = useState();
  const [numAcompanhantes, setNumAcompanhantes] = useState(0);
  const [traraPresente, setTraraPresente] = useState(false);
  const [sequencialPresente, setSequencialPresente] = useState(1);
  const [presentesEscolhidos, setPresentesEscolhidos] = useState([]);

  function submitHandler(evento) {
    evento.preventDefault();

    if (!validacaoNomeConvidadoHandler() && !validacaoIdadeHandler()) {
      popUpHandler("Preencha todos os campos");
      return;
    }
    if (!validacaoNomeConvidadoHandler()) {
      popUpHandler("Nome de Usuário inválido");
      return;
    }
    if (!validacaoIdadeHandler()) {
      popUpHandler("A idade precisa estar preenchida e ser maior que 0.");
      return;
    }
    addUsuario({ inputNomeUsuario, inputIdade, confirmado, horaChegada, numAcompanhantes, traraPresente, ListaPresentesAdicionados });
    limpaDados();
    popUpHandler("Usuário cadastrado com sucesso!");
  }

  function validacaoNomeConvidadoHandler() {
    if (!inputNomeUsuario || inputNomeUsuario.length === 0) {
      setNomeUsuarioValido(false);
      return false;
    }
    return true;
  }

  function validacaoIdadeHandler() {
    if (
      !inputIdade ||
      inputIdade.length === 0 ||
      inputIdade <= 0
    ) {
      setIdadeValida(false);
      return false;
    }
    return true;
  }

  function limpaDados() {
    setInputNomeUsuario(" ");
    setInputIdade(" ");
  }

  function popUpHandler(texto) {
    setTextoPopUp(texto);
    setPopUpAberto(!popUpAberto);
  }

  function addPresenteHandler(idPresente, nomePresente, quantidadePresente) {
    setPresentesEscolhidos(prevState => [...prevState, {id: idPresente, nome: nomePresente, quantidade: quantidadePresente}]);
  }

  function removePresenteHandler(idPresenteDeletar){
    presentesEscolhidos.filter(presente => presente.id != idPresenteDeletar).map(presente => presente);
  }

  useEffect(()=>{
    // console.log("Presente adicionado!");
    // console.log("Presentes Escolhidos: ", presentesEscolhidos);
  },[presentesEscolhidos])

  return (
    <form onSubmit={submitHandler}>
      <GroupInput>
        <LabelInput>Nome Completo do Convidado</LabelInput>
        <Input
          onChange={(evento) =>
            setInputNomeUsuario(() => evento.target.value)
          }
          type="text"
          value={inputNomeUsuario}
          style={{
            borderColor: !nomeUsuarioValido ? "red" : Input.borderColor,
          }}
        />
      </GroupInput>

      <GroupInput>
        <LabelInput>Idade (em anos)</LabelInput>
        <Input
          onChange={(evento) => setInputIdade(evento.target.value)}
          type="number"
          value={inputIdade}
          min="0"
          style={{ borderColor: !idadeValida ? "red" : Input.borderColor }}
        />
      </GroupInput>

      <LabelInput> Confirmado? </LabelInput>
      <br />
      <Input
        type="checkbox"
        value={confirmado}
        onChange={() => setConfirmado(!confirmado)}
      />
      <br />

      <GroupInput>
        <LabelInput> Horário Estimado de Chegada </LabelInput>
        <Input type="datetime-local" value={horaChegada} onChange={(evento)=>setHoraChegada(()=>evento.target.value)}/>
      </GroupInput>
      <br />

      <GroupInput>
        <LabelInput> Número de Acompanhantes </LabelInput>
        <Input
          type="number"
          min="0"
          step="1"
          value={numAcompanhantes}
          onChange={(evento) => setNumAcompanhantes(() => evento.target.value)}
        />
      </GroupInput>
      <br />

      <FormPresente
        listaOpcoesPresentes={listaOpcoesPresentes}
        traraPresente={traraPresente}
        setTraraPresente={setTraraPresente}
        sequencialPresente={sequencialPresente}
        addPresente={addPresenteHandler}
        presentesEscolhidos={presentesEscolhidos}
        removePresenteHandler={removePresenteHandler}
      />
      <br />

      <BotaoSubmit type="submit" value="Adicionar Usuário" />

      {popUpAberto === true && (
        <PopUp popUpHandler={popUpHandler} texto={textoPopUp} />
      )}
    </form>
  );
}
