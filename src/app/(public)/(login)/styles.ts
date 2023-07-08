import styled from 'styled-components'

export const ContainerMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`

export const Card = styled.div`
  background-color: #ffff;
  width: 40%;
  height: 60%;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  overflow: auto;
  @media (max-width: 700px) {
    width: 60%;
    height: 45%;
  }
  @media (max-width: 445px) {
    width: 80%;
    height: 57%;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10%;
  @media (max-width: 700px) {
    gap: 4%;
  }
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`

export const Title = styled.p`
  text-align: center;
  font-weight: 800;
  font-size: xx-large;
  @media (max-width: 700px) {
    font-size: large;
  }
`

export const TextDescription = styled.p`
  color: #727280;
  @media (max-width: 700px) {
    font-size: medium;
  }
`
