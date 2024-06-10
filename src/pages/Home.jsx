import { useState } from "react";
import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "../Styles/Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"

export  function Home() {
const [mostrarResultado, setmostrarResultado] = useState(false)
const [feedbackNote, setfeedbackNote] =  useState(0)

function handlefeedbackButtonClick(event){
  const feedback = Number (event.target.innerText)
  setfeedbackNote(feedback)
}

function handleSubmit(){
  if (feedback === 0) return

  setmostrarResultado(true)
}






  return (
    mostrarResultado === false ? (
    <CardContainer>
      <IconContainer>
        <img src={iconStarImg} alt="" />
      </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button onClick={handlefeedbackButtonClick}>1</button>
        <button onClick={handlefeedbackButtonClick}>2</button>
        <button onClick={handlefeedbackButtonClick}>3</button>
        <button onClick={handlefeedbackButtonClick}>4</button>
        <button onClick={handlefeedbackButtonClick}>5</button>
      </ButtonContainer>

      <button onClick={handleSubmit}>Enviar</button>
    </CardContainer>
    ) :(
      <CardContainer>
      <img src={thankYouImg} alt="" />

      <ResultContainer>
        <p>Você selecionou {feedbackNote} de 5</p>
      </ResultContainer>

      <h1>obrigado</h1>

      <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
    </CardContainer>
    )
  )
}
