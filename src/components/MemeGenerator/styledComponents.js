// Style your components here
import styled from 'styled-components'

export const Home = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Body = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans';
`
export const Div1 = styled.div`
  width: 40%;
`
export const Div2 = styled.div`
  width: 35%;
  height: 260px;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`

export const MainHeading = styled.h1`
  color: #0b69ff;
  font-family: Roboto;
`

export const SubHeading = styled.p`
  color: grey;
`
export const InputBox = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 33px;
  outline: none;
`
export const MemePara = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`

export const SubmitButton = styled.button`
  width: 40%;
  height: 33px;
  background-color: #0b69ff;
  color: white;
  margin-top: 20px;
  border-radius: 4px;
  border: 0px;
  font-size: 16px;
  cursor: pointer;
`
