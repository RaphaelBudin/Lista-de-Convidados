import { useEffect } from "react";
import { GroupInput, Input, LabelInput } from "../../Components";

export default function ListaPresentesAdicionados({ presentesEscolhidos, removePresenteHandler }) {
  useEffect(() => {
    console.log("ListaPresentesAdicionados");
    console.log("Presentes: ", presentesEscolhidos);
    console.log("Presente 0: ", presentesEscolhidos[0]);
  }, []);

  return (
    <GroupInput>
      <LabelInput> Lista de Presentes </LabelInput>
      {presentesEscolhidos &&
        presentesEscolhidos.map((item) => {
          return (
            <div>
              <span key={item.id}>
                {item.nome} {item.quantidade}
              </span>
              <button onClick={removePresenteHandler} value={item.id}> Excluir </button>
            </div>
          );
        })}
    </GroupInput>
  );
}
