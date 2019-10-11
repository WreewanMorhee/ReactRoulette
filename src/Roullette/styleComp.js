export const RoulletteContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const RoulletteBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`

export const RoulletteBoard = styled.div`
  ${({theme}) => theme}
  background-image: url(${({roullette_img}) => roullette_img});
`

export const HighLightArea = styled.div`
  ${({theme}) => theme}
  background-image: url(${({highlight_img}) => highlight_img});
  opacity: 0;
`

export const Pointer = styled.div`
  ${({theme}) => theme}
  background-image: url(${({pointer_img}) => pointer_img});
`

export const RoulleteBtn = styled.div`
  width: 45%;
  padding-bottom: 17.1%;
  background: black;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 12%;
`


export const general_theme = {
  width: '100%',
  paddingBottom: '100%',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
}

import styled, { createGlobalStyle,css } from 'styled-components'
