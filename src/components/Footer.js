import styled from "styled-components";

export default function Footer() {
    return (
        <ContainerConcluidos>
            <ContainerBotoes>
                <button style={{ backgroundColor: "red" }}>Não lembrei</button>
                <button style={{ backgroundColor: "#FF922E" }}>Quase não lembrei</button>
                <button style={{ backgroundColor: "#2FBE34" }}>Zap</button>
            </ContainerBotoes>
            <Concluidos>
                0/8 CONCLUÍDOS
            </Concluidos>
        </ContainerConcluidos>
    )
}

const ContainerConcluidos = styled.div`
   width: 100%;
   min-height: 50px;
   background-color: #FFFFFF;
   position: fixed;
   bottom: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-family: 'Recursive';
   font-weight: 400;
   font-size: 18px;
   color: #333333;
   padding: 10px;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
        button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        border-radius: 5px;
        border: none;
        padding: 5px;
        }
`

const Concluidos = styled.div`
font-family: 'Recursive';
font-size: 20px;
`
