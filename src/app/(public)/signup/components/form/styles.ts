import styled from 'styled-components'

export const ContainerMaster = styled.div`
  background-color: #ffff;
  border-radius: 20px;
  padding: 30px;
  height: auto;
  width: 80%;
`

export const Title = styled.p`
  font-size: x-large;
  font-weight: 800;
  text-align: center;
  margin-bottom: 5%;
`

export const ContainerTitle = styled.div``

export const TextDescription = styled.p`
  font-size: small;
  color: #727280;
  margin-bottom: 5%;
`

export const ContainerFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  margin-bottom: 3%;
`

export const ContainerSigin = styled.div`
  text-align: center;
  margin-top: 2%;
`

export const TextSigin = styled.p``

export const LinkSigin = styled.span`
  text-decoration: underline;
  margin-left: 0.5vw;
  cursor: pointer;
  color: #004aad;
  font-weight: 400;
  &:hover {
    color: #003071;
    transform: scale(2);
  }
`

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
`
