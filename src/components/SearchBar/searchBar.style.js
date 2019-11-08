import styled from 'styled-components'
import baseStyle from '../../base.style'

const InputStyle = styled.input`
    font-size: 16px;
    flex: 1;
    display: flex;
    border-radius: 10px;
    transition: all .2s ease;
    border-radius: 10em;
    padding: 10px 20px;
    opacity: 0.5;
    border: 1px solid ${baseStyle.primary};
    color: ${baseStyle.primary}
    &:hover, &:active, &:focus {
        background-color: #fff;
        transition: all .2s ease;
        opacity: 1
    }
    
`

export default InputStyle
