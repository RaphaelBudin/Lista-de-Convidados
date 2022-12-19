import { useEffect, useState } from "react";
import { GroupInput, LabelInput, Input } from "../../Components";
import ListaPresentesAdicionados from "./ListaPresentesAdicionados";

export default function FormPresente({
  listaOpcoesPresentes,
  presentesEscolhidos,
  traraPresente,
  setTraraPresente,
  sequencialPresente,
  addPresente,
}) {
  const [localSequencialPresente, setLocalSequencialPresente] = useState();
  const [localPresenteID, setLocalPresenteID] = useState();
  const [localNomePresente, setLocalNomePresente] = useState();
  const [localQuantidadePresente, setLocalQuantidadePresente] = useState();

  function localAddPresente(evento) {
    evento.preventDefault();
    if (!localPresenteID) {
      alert("Nenhum presente escolhido");
      return;
    }
    if (!localQuantidadePresente) {
      alert("Quantidade deve ser >= 1");
      return;
    }

    let nomePresente = [...listaOpcoesPresentes].filter(
      item => item.id == localPresenteID
    ).map(item => item.nome);
    setLocalNomePresente(nomePresente);
    
    addPresente(localPresenteID, nomePresente, localQuantidadePresente);
    limpaInputs();
  }

  function limpaInputs() {
    setLocalPresenteID("");
    setLocalQuantidadePresente(0);
  }

  useEffect(() => {
    setLocalSequencialPresente(sequencialPresente);
  }, []);

  return (
    <GroupInput>
      <LabelInput> Trará Presente? </LabelInput>
      <Input
        type="checkbox"
        value={traraPresente}
        onChange={() => setTraraPresente(() => !traraPresente)}
      />
      <GroupInput
        style={{ display: traraPresente ? GroupInput.display : "none" }}
      >
        <LabelInput> Presente {localSequencialPresente} </LabelInput>
        <select
          value={localPresenteID}
          size="12"
          onChange={(evento) => setLocalPresenteID(() => evento.target.value)}
        >
          {listaOpcoesPresentes &&
            listaOpcoesPresentes.map((item) => (
              <option value={item.id} key={item.id}>
                {item.nome}
              </option>
            ))}
        </select>
        <LabelInput> Quantidade </LabelInput>
        <Input
          type="number"
          min="1"
          step="1"
          value={localQuantidadePresente}
          onChange={(evento) =>
            setLocalQuantidadePresente(() => evento.target.value)
          }
        />
        <button value="Salvar Presente" onClick={localAddPresente}>
          Salvar Presente
        </button>
        <ListaPresentesAdicionados presentesEscolhidos={presentesEscolhidos} />
      </GroupInput>
    </GroupInput>
  );
}
