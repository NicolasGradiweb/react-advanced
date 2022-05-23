import styled from 'styled-components'

export const ImgWrapper = styled.figure`
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  margin: 0;
  padding: 56.25% 0 0 0;
  border-radius: 10px;
  overflow: hidden;
  `

export const Img = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
