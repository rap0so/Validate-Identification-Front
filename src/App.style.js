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
`

const ButtonStyle = styled.button`
  background-color: ${baseStyle.primary}
  border: 0;
  border-radius: 10em;
  padding: 10px 20px;
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  cursor: pointer
  z-index: 1;
  position: relative;
  span {
    color: #fff;
  }
  &:focus, &:active, &:hover {
    input {
      transition: all .3s ease;
      padding: 0px 11px;
      width: 200%
    }
  }
  input {
    transition: all .3s ease;
    width: 0
    padding: 0
    position: absolute;
    border-radius: 10em;
    border: 2px solid ${baseStyle.primary};
    top: 0;
    bottom: 0;
    height: 32px;
    margin: auto;
    color: #616161;
    font-size: 13px;
    border-left: 50px solid ${baseStyle.primary};
    left: 2px;
    z-index: -1;
  }

`

export {
  ContainerStyle,
  HrStyle,
  PStyle,
  HeaderStyle,
  AppStyle,
  ButtonStyle
}
