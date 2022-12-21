import { useEffect } from "react";
import { useState } from "react";
import { BotaoOrdernar, LabelInput } from "../../Components";
import DisplayConvidado from "../views/DisplayConvidado";

export default function ListaConvidados({convidados, excluirConvidado}){
  const [convidadosOrdenados, setConvidadosOrdenados] = useState(convidados);
  const [ultimaOrdenacao, setUltimaOrdenacao] = useState('');
  
  function ordernarNome(){
    if(ultimaOrdenacao ==='nome-crescente'){
      const novaOrdemInvertida = [...convidadosOrdenados].sort((a,b)=>b.nome.localeCompare(a.nome));
      setConvidadosOrdenados(novaOrdemInvertida);
      setUltimaOrdenacao('nome-decrescente');
      return;
    } 
    const novaOrdem = [...convidadosOrdenados].sort((a,b)=>a.nome.localeCompare(b.nome));
    setConvidadosOrdenados(novaOrdem);
    setUltimaOrdenacao('nome-crescente');
  }

  function ordernarIdade(){
    if(ultimaOrdenacao ==='idade-crescente'){
      const novaOrdemInvertida = [...convidadosOrdenados].sort((a,b)=>b.idade-a.idade);
      setConvidadosOrdenados(novaOrdemInvertida);
      setUltimaOrdenacao('idade-decrescente');
      return;
    }
    const novaOrdem = [...convidadosOrdenados].sort((a,b)=>a.idade-b.idade);
    setConvidadosOrdenados(novaOrdem);
    setUltimaOrdenacao('idade-crescente');
  }

  function ordernarID(){
    setConvidadosOrdenados(convidados);
    setUltimaOrdenacao('id');
  };

  useEffect(()=>{
    setConvidadosOrdenados(convidados.map(user=>user))
  },[convidados]);

  useEffect(()=>{
    setConvidadosOrdenados(convidados.map(user=>user))
  },[]);

  return(
        <div>
          <LabelInput>Convidados Cadastrados</LabelInput>
          {convidados.length > 0 && <div style={{marginTop:25, marginBottom:10, textAlign:'center',}}>
              <BotaoOrdernar onClick={ordernarNome}>Ordenar (Nome) </BotaoOrdernar>
              <BotaoOrdernar onClick={ordernarIdade}>Ordenar (Idade) </BotaoOrdernar>
              <BotaoOrdernar onClick={ordernarID}>Ordenar (ID) </BotaoOrdernar>
          </div>}
          {convidados.length > 0 &&
            convidadosOrdenados.map((convidado) => (
              <DisplayConvidado convidado={convidado} excluirConvidado={excluirConvidado} key={convidado.id} />
            ))}
          {(convidados.length === 0 || convidados === undefined) && (
            <p>Não há convidados cadastrados no momento</p>
          )}
        </div>
    );
}