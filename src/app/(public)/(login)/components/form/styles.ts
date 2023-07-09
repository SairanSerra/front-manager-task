import styled from 'styled-components'

export const ContainerMaster = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 7%;
`
export const ContainerButtonAndDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  margin-bottom: 20px;
`

export const ContainerPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin-top: 5%;
`

export const ContainerRememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  margin-bottom: 4%;
`

export const LabelCheckbox = styled.p`
  color: #727280;
  font-size: small;
`

export const TextNewAccount = styled.p`
  @media (max-width: 700px) {
    font-size: small;
  }
`

export const LinkRegisterAccount = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: #004aad;
  font-weight: 400;
  @media (max-width: 700px) {
    font-size: small;
  }
  &:hover {
    color: #003071;
    transform: scale(2);
  }
`
