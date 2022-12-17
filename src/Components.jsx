import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    backdrop-filter: blur(10);
`;

export const CardBranco = styled.div`
    width: 80%;
    max-width: 600px;
    height: auto;
    min-height: 100px;
    padding: 36px 24px 26px 24px;
    background-color: white;
    border-radius: 20px;
    text-align: left;
    margin: 36px auto;
`;

export const GroupInput = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
`;

export const LabelInput = styled.span`
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 12px;
`;

export const Input = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    height: 26px;
    margin-bottom: 12px;
`;

export const BotaoSubmit = styled.input`
    color: white;
    background-color: purple;
    font-weight: bolder;
    padding: 10px;
    /* margin:24px 0px; */
`;

export const DisplayUsuarioComponent = styled.div`
    min-height: 36px;
    height: fit-content;
    width: 100%;
    margin: 2px 0px;
    border: 2px solid gray;
    border-radius: 5px;
    padding-top: auto;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow-wrap: break-word;
    margin-top:16px;
`;

export const ViewNomeComponent = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-left: 12px;
`;

export const ViewIdadeComponent = styled.span`
    /* border: 1px solid yellow; */
`;

export const BotaoExcluirComponent = styled.input`
    width: 45px;
    margin-right: 12px;
    height: 45px;
`;

export const BotaoOrdernar = styled.button`
    color: white;
    background-color: purple;
    font-weight: bolder;
    padding: 10px;
    margin-right:24px;

    &:hover {
        border-color: yellow;
    }
`;

export const PopUpBackground = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const PopUpCaixa = styled.div`
    position: relative;
    width:50%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: 10vh;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1ps solid #999;
    overflow: auto;
`;

export const PopUpFechar = styled.div`
    cursor: pointer;
    position: fixed;
    right: calc(15%-30px);
    top: calc(100vh - 85vh - 20px); //Precisa ser igual ao do PopUpCaixa
    background: #ededed;
    width: 25px;
    height: 25px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
    color: darkred;
    border-radius: 50%;
    border: 1px solid darkred;
`;