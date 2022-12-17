import { useEffect } from "react";
import { useState } from "react";
import { BotaoOrdernar, LabelInput } from "../../Components";
import DisplayUsuario from "../views/DisplayUsuario";

export default function ListaUsuarios({usuarios,excluirUsuario}){
  const [usuariosOrdenados, setUsuariosOrdenados] = useState(usuarios);
  const [ultimaOrdenacao, setUltimaOrdenacao] = useState('');
  
  function ordernarNome(){
    if(ultimaOrdenacao ==='nome-crescente'){
      const novaOrdemInvertida = [...usuariosOrdenados].sort((a,b)=>b.nome.localeCompare(a.nome));
      setUsuariosOrdenados(novaOrdemInvertida);
      setUltimaOrdenacao('nome-decrescente');
      return;
    } 
    const novaOrdem = [...usuariosOrdenados].sort((a,b)=>a.nome.localeCompare(b.nome));
    setUsuariosOrdenados(novaOrdem);
    setUltimaOrdenacao('nome-crescente');
  }

  function ordernarIdade(){
    if(ultimaOrdenacao ==='idade-crescente'){
      const novaOrdemInvertida = [...usuariosOrdenados].sort((a,b)=>b.idade-a.idade);
      setUsuariosOrdenados(novaOrdemInvertida);
      setUltimaOrdenacao('idade-decrescente');
      return;
    }
    const novaOrdem = [...usuariosOrdenados].sort((a,b)=>a.idade-b.idade);
    setUsuariosOrdenados(novaOrdem);
    setUltimaOrdenacao('idade-crescente');
  }

  function ordernarID(){
    setUsuariosOrdenados(usuarios);
    setUltimaOrdenacao('id');
  };

  useEffect(()=>{
    setUsuariosOrdenados(usuarios.map(user=>user))
  },[usuarios]);

  useEffect(()=>{
    setUsuariosOrdenados(usuarios.map(user=>user))
  },[]);

  return(
        <div>
          <LabelInput>Usuários Cadastrados</LabelInput>
          {usuarios.length > 0 && <div style={{marginTop:25, marginBottom:10, textAlign:'center',}}>
              <BotaoOrdernar onClick={ordernarNome}>Ordenar (Nome) </BotaoOrdernar>
              <BotaoOrdernar onClick={ordernarIdade}>Ordenar (Idade) </BotaoOrdernar>
              <BotaoOrdernar onClick={ordernarID}>Ordenar (ID) </BotaoOrdernar>
          </div>}
          {usuarios.length > 0 &&
            usuariosOrdenados.map((usuario) => (
              <DisplayUsuario usuario={usuario} excluirUsuario={excluirUsuario} key={usuario.id} />
            ))}
          {(usuarios.length === 0 || usuarios === undefined) && (
            <p>Não há usuários cadastrados no momento</p>
          )}
        </div>
    );
}