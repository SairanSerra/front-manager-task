import styled from 'styled-components'

export const ContainerMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`

export const Card = styled.div`
  background-color: #ffff;
  width: 40%;
  height: auto;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    width: 60%;
  }
  @media (max-width: 445px) {
    width: 80%;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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
  margin-bottom: 5%;
  @media (max-width: 700px) {
    font-size: large;
  }
`

export const TextDescription = styled.p`
  color: #727280;
  margin-bottom: 5%;
  @media (max-width: 700px) {
    font-size: medium;
  }
`
