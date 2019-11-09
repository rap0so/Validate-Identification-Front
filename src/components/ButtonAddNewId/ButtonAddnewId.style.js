import styled from 'styled-components'
import baseStyle from '../../base.style'

const bodyButton = `
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
`

export default styled.button`
    ${bodyButton}
    span {
        color: #fff;
    }
    &:focus, &:active, &:hover {
        input {
            transition: all .3s ease;
            padding: 0px 11px;
            width: 300%;
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
export { bodyButton }
