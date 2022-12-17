import { useEffect, useState } from "react";
import { GroupInput, Input, LabelInput, BotaoSubmit } from "../../Components";
import PopUp from "./PopUp";

export default function FormAddUsuario({addUsuario}) {
  const [inputNomeUsuario, setInputNomeUsuario] = useState('');
  const [inputIdade, setInputIdade] = useState('');
  const [popUpAberto, setPopUpAberto] = useState(false);
  const [textoPopUp, setTextoPopUp] = useState('');
  const [nomeUsuarioValido, setNomeUsuarioValido] = useState(true);
  const [idadeValida, setIdadeValida] = useState(true);

  function submitHandler(evento){
    evento.preventDefault();

    if(!validacaoNomeUsuarioHandler() && !validacaoIdadeHandler()) {
      popUpHandler('Preencha todos os campos');
      return;
    }
    if(!validacaoNomeUsuarioHandler()){
      popUpHandler('Nome de Usuário inválido');
      return;
    }
    if(!validacaoIdadeHandler()){
      popUpHandler('A idade precisa estar preenchida e ser maior que 0.');
      return;
    }
    addUsuario({inputNomeUsuario, inputIdade});
    limpaDados();
    popUpHandler('Usuário cadastrado com sucesso!');
  }

  function validacaoNomeUsuarioHandler(){
    if (!inputNomeUsuario.trim() || inputNomeUsuario.trim().length === 0) {
      setNomeUsuarioValido(false);
      return false;
    }
    return true;
  }
  
  function validacaoIdadeHandler() {
    if(!inputIdade.trim() || inputIdade.trim().length === 0 || inputIdade <= 0){
      setIdadeValida(false);
      return false;
    }
    return true;
  }

  function onChangeNomeUsuarioHandler(evento){
    setInputNomeUsuario(()=>evento.target.value.trim());
  }

  function onChangeIdadeHandler(evento){
    setInputIdade(evento.target.value.trim());
  }

  function limpaDados() {
    setInputNomeUsuario(" ");
    setInputIdade(" ");
  }
  
  function popUpHandler(texto){
    setTextoPopUp(texto);
    setPopUpAberto(!popUpAberto);
  }

  useEffect(() => {
    console.log("InputNomeUsuario: ", inputNomeUsuario);
  }, [inputNomeUsuario]);

  useEffect(() => {
    console.log("InputIdade: ", inputIdade);
  }, [inputIdade]);

  return (
    <form onSubmit={submitHandler}>
      <GroupInput>
        <LabelInput>Nome de Usuário</LabelInput>
        <Input
          onChange={onChangeNomeUsuarioHandler}
          type="text"
          value={inputNomeUsuario}
          style={{ borderColor: !nomeUsuarioValido ? "red" : Input.borderColor }}
        />
      </GroupInput>

      <GroupInput>
        <LabelInput>Idade (em anos)</LabelInput>
        <Input
          onChange={onChangeIdadeHandler}
          type="number"
          value={inputIdade}
          min="0"
          style={{ borderColor: !idadeValida ? "red" : Input.borderColor }}
        />
      </GroupInput>

      <BotaoSubmit type="submit" value="Adicionar Usuário"/>

      {popUpAberto === true && <PopUp popUpHandler={popUpHandler} texto={textoPopUp} />}

    </form>
  );
}