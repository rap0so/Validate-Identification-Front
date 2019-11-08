import styled from 'styled-components'

export default {
  UlStyled: styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0
  `,
  LiStyled: styled.li`
    flex-direction: row;
    display: flex
    flex: 1;
    align-items: center;
    justify-content: flex-end
  `,
  SpanRemoveId: styled.span`
    max-width: 30px;
    cursor: pointer
   `
}
