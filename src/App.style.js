import styled from 'styled-components'
import baseStyle from './base.style'

const ContainerStyle = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 100px auto 100px;
`

const AppStyle = styled.div`
  background-color: #fdfdfd;
  border-radius: 7px;
  padding: 45px 25px;
  box-shadow: 0 0 6px -2px #bebebe;
  display: flex;
  height: 100%;
  flex-direction: column
`

const HrStyle = styled.hr`
  max-width: 90%;
  margin: 22px auto;
  border: 1px solid #f2f2f2;
  width: 100%;
`

const PStyle = styled.p`
  text-align: center
`

const HeaderStyle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 30px
`
export {
  ContainerStyle,
  HrStyle,
  PStyle,
  HeaderStyle,
  AppStyle
}
