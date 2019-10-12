const Roullette = ({
  reset_callback = () => {},
  trigger_callback = () => {},
  has_reset = true,
  ...props
}) => {
  const [start, set_start] = useState(false)
  const [show_reset, set_show_reset] = useState(false)
  const clickToReset = () => {
    set_start(false)
    reset_callback()
    set_show_reset(false)
  }
  const clickToTrigger = () => {
    set_start(true)
    trigger_callback()
  }

  return (
    <RoulletteContainer className="roulette-container">
      <RoulletteBody start={start} {...props} set_show_reset={set_show_reset} />
      <RoulleteBtn
        onClick={clickToTrigger}
        className="start-btn"
      >
        Start!
      </RoulleteBtn>

      {(has_reset && show_reset) && (
        <RoulleteBtn
          onClick={clickToReset}
          className="reset-btn"
        >
          Reset
        </RoulleteBtn>
      )}
    </RoulletteContainer>
  )
}



const RoulletteBody = ({
  roullette_img_under_highlight,
  roullette_img_on_highlight,
  highlight_img,
  pointer_img,
  box_size,
  start,
  prize_arr,
  align_line,
  set_show_reset,
  on_complete = () => {}
}) => {
  const UBoardRef = useRef(null)
  const OBoardRef = useRef(null)
  const HighlightRef = useRef(null)
  const prize_num = generate_random_number(0, prize_arr.length - 1)

  useEffect(() => {
    if (start) {
      TweenLite.to([UBoardRef.current, OBoardRef.current], 3, {
        rotation: 360 * 10,
        ease: Power2.easeIn,
        onComplete: () => {
          TweenLite.to([UBoardRef.current, OBoardRef.current], 3, {
            rotation: 360 * 15 + (360 * prize_num) / prize_arr.length,
            ease: Power2.easeOut,
            onComplete: () => {
              TweenMax.to(HighlightRef.current, 0.5, {
                alpha: 1,
                yoyo: true,
                repeat: -1
              })
              set_show_reset(true)
              on_complete(prize_arr[prize_num])
            }
          })
        }
      })
    } else {
      TweenLite.to([UBoardRef.current, OBoardRef.current], 1, {
        rotation: 0,
        ease: Power2.easeIn,
      })
      TweenMax.to(HighlightRef.current, 0.5, {
        opacity: 0,
      })
    }
  }, [start])

  return (
    <ThemeProvider theme={Object.assign({}, general_theme)}>
      <RoulletteBox
        box_size={box_size}
        className="roullette-box"
      >
        <RoulletteBoard
          ref={UBoardRef}
          roullette_img={roullette_img_under_highlight}
          className="roullette-board-u"
        />
        <HighLightArea
          ref={HighlightRef}
          highlight_img={highlight_img}
          className="highlight-area"
        />
        <RoulletteBoard
          ref={OBoardRef}
          roullette_img={roullette_img_on_highlight}
          className="roullette-board-o"
        />
        <Pointer pointer_img={pointer_img} className="pointer" />
      </RoulletteBox>
    </ThemeProvider>
  )
}





const generate_random_number = (start = 1, end = 10) => (
  Math.floor(Math.random() * end) + start
)


import React, { useRef, useEffect, useState } from "react"
import {
  RoulletteBox,
  RoulletteBoard,
  HighLightArea,
  Pointer,
  RoulleteBtn,
  RoulletteContainer,
  general_theme
} from "./styleComp"
import { TweenLite, TweenMax, Power2 } from 'gsap'
import { ThemeProvider } from 'styled-components'
export default Roullette
