## React Roulette Game
React Beauty Game is a plugin for whom want to have roulette game in project
[DEMO](https://event.hearst.com.tw/uiuxstoredemo/roulettegame/)


## How to install
1. go to your terminal and type the following:
```bash
yarn add react-roulette-game
```

## How to use:
```js
import Roulette from 'react-roulette-game'

const DemoComp = () => (
  <div className='game-box'>  //  STEP1. draw the width of your roulette and adjust its position
    <Roulette {...roulette_props} /> //  STEP2. add Roulette component and give the props you want
  </div>
)

const roulette_props = {
  roulette_img_under_highlight,
  roulette_img_on_highlight,
  highlight_img,
  pointer_img,
  prize_arr: [
    'Baseball',
    'Rugby',
    'Tennis',
    'Soccer',
    'Badminton',
    'Basketball',
  ],
}

import highlight_img from './images/hightlight.png'
import pointer_img from './images/pointer.png'
import roulette_img_under_highlight from './images/rou_under_high.png'
import roulette_img_on_highlight from './images/rou_on_high.png'
```

## Common Props        

### roulette_img_under_highlight         
type: string    
default: ''    
usage: roulette's body image, its zIndex is smaller than highlight;      
HIGHLY RECOMMENDED: the ratio of this image should be square


### roulette_img_on_highlight               
type: string        
default: ''      
usage: roulette's body image, its zIndex is bigger than highlight;      
HIGHLY RECOMMENDED: the ratio of this image should be square

#### PS: you can put your roulette's body image on one of them or both; just due to different design, something will be under the highlight and something will be on the highlight, so let you have more option to combine your roulette



### highlight_img
type: string        
default: ''      
usage: when roulette rotate over, hightlight will bling bling, its purpose is to highlight the prize user get;      
HIGHLY RECOMMENDED: the ratio of this image should be square



### pointer_img
type: string        
default: ''      
usage: to point which prize you win, always point on the top of roulette;       
HIGHLY RECOMMENDED: the ratio of this image should be square



### prize_arr
type: array       
default: []      
usage: how many prize in your roulette, then there should be how many item in this props; the order is counter-clockwise to your roulette



### start_text
type: string      
default: Start            
usage: text in start button



### reset_text
type: string      
default: Reset      
usage: text in reset button


## Advanced Props    

### has_reset
type: boolean      
default: true      
usage: if true, there will be reset button

### reset_callback
type: function      
default: () => {}      
parameter: none           
usage: when you click reset button, reset_callback will be triggered

### start_callback
type: function      
default: () => {}      
parameter: none             
usage: when you click start button, start_callback will be triggered

### on_complete
type: function      
default: () => {}    
parameter: (prize) => {}          
usage: it will be triggered when roulette rotate over, and it will return a prize which is recorded in your prize_arr and it is prize at this round


## Thank You for Your Use
It's welcome to report me any issue or bug, thanks a lot!

## Author
[WreewanMorhee](https://github.com/WreewanMorhee)
