import styled from 'styled-components'

export const ContainerMaster = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  @media (max-width: 700px) {
    justify-content: center;
  }
`

export const ContainerDescription = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`

export const ContainerForm = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`
