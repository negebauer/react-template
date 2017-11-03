import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ContainerRow = styled(Container)`
  flex-direction: row;
`

export const ContainerCenter = styled(Container)`
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export default Container
