import styled, { css } from 'styled-components'

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`{
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }`}
`

export const Item = styled.li`
  padding: 0 8px;
`
