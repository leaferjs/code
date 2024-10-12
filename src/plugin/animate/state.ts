import { Leafer, Box } from 'leafer-ui'
import '@leafer-in/state'
import '@leafer-in/animate'
import '@leafer-in/color'

const leafer = new Leafer({ view: window, fill: '#ccc' })


const rect = new Box({
    x: 200,
    y: 200,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    origin: 'center',
    // keyframes: [{ style: { x: 100, scale: 0.5 } }, { style: { x: 200, scale: 1.5 }, duration: 2 }, { style: { x: 400, scale: 1 }, duration: 2 }],
    states: {
        show: {
            fill: 'blue',
            scale: 1.5,
            rotation: 60,
            // offsetX: 200,
            // animation: {
            //     keyframes: [{ offsetX: 300 }, { offsetY: 300 }, { offsetX: 500 }],
            //     duration: 3,
            //     // direction: 'reverse',
            //     // loop: 3,
            //     fromNow: true,
            // },
            hoverStyle: { fill: '#32cd79', cornerRadius: [20, 0] },
            pressStyle: { scale: 1, transitionOut: 'bounce-out' },
        }
    },
    // hoverStyle: {
    //     scale: 2,
    // },
    selectedStyle: {
        fill: 'blue',
        //hoverStyle: {},
    },
    disabledStyle: {
        opacity: 0.5
    },
    state: 'show',
    // selected: true,
    button: true,
    //disabled: true,
    animation: {
        keyframes: [{ x: 100, y: 200 }, { x: 300, y: 300, scale: 2 }, { x: 500, y: 100, scale: 3 }, { x: 500, y: 300, scale: 1 }],
    },
    children: [{
        tag: 'Text',
        text: 'hello',
        fontSize: 12,
        hoverStyle: {
            fontSize: 30,
            fill: 'blue'
        },
        pressStyle: { fontSize: 20 },
        disabledStyle: { fill: 'gray' }
    }, {
        tag: 'Rect',
        x: 50,
        y: 50,
        width: 30,
        height: 30,
        fill: 'red',
        hoverStyle: {
            fill: 'blue'
        },
        pressStyle: { fill: 'red' },
        disabledStyle: { fill: 'gray' }
    }]
})

leafer.add(rect)


// setTimeout(() => {
//     rect.hoverStyle.fill = 'yellow'
//     rect.hoverStyle = rect.hoverStyle
// }, 3000)


// setTimeout(() => {
//     rect.state = ''
// }, 5000)


// setTimeout(() => {

//     rect.animate({ x: 500, y: 500 })

//     // rect.scale = 3
//     // rect.disabled = true

//     // const rect2 = new Rect({ x: 0, y: 30, width: 30, height: 30, fill: 'green', disabledStyle: { fill: 'yellow', rotation: 20 } })
//     // rect.add(rect2)
//     //rect2.updateState()
//     // console.log(rect.normalStyle)
//     // console.log(rect.lockNormalStyle)
//     // console.log(rect.normalStyle)
// }, 3000)

// setTimeout(() => {
//     // rect.disabledStyle = { fill: 'blue' }
//     // console.log(rect.normalStyle)
// }, 5000)

// setTimeout(() => {

//     rect.state = 'show'
//     rect.selected = true

//     console.log(rect.toJSON())
// }, 2000)

// setTimeout(() => {

//     rect.state = ''
//     rect.selected = false

//     console.log(rect.toJSON())
// }, 4000)


// setTimeout(() => {

//     // rect.state = ''
//     rect.selected = false
//     rect.disabled = true


// }, 5000)
