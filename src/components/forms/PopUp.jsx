import { PopUpBackground, PopUpCaixa, PopUpFechar } from "../../Components";

export default function PopUp({ texto, popUpHandler }) {
  return (
    <PopUpBackground onClick={popUpHandler}>
      <PopUpCaixa>
        <PopUpFechar>x</PopUpFechar>
        <br/>
        {texto}
      </PopUpCaixa>
    </PopUpBackground>
  );
}
