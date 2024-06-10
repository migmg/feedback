import { ButtonContainer, CardContainer, IconContainer } from "../Styles/Home.styles";

import iconStarImg from "../assets/icon-star.svg"

export  function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src="iconStarImg" alt="icone estrela" />
      </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </ButtonContainer>

      <button>Enviar</button>
    </CardContainer>
  )
}
