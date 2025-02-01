
import { KeyEvent, Leafer } from 'leafer-ui'
import { Robot } from '@leafer-in/robot'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const actions = { // 预设游戏动作
    down: 0,
    left: 4,
    right: 8,
    up: 12,
    walkDown: [0, 1, 2, 3],
    walkLeft: [4, 5, 6, 7],
    walkRight: [8, 9, 10, 11],
    walkUp: [12, 13, 14, 15]
}

const robat = new Robot({
    robot: [
        { mode: 'clip', url: '/image/game.webp', size: { width: 300 / 4, height: 450 / 4 }, total: 8 },
        { mode: 'clip', url: '/image/game.webp', offset: { x: 0, y: 450 / 2 }, size: { width: 300 / 4, height: 450 / 4 }, total: 8 }
    ],
    actions,
    pixelRatio: 2, // 可以适配高清屏
    states: {
        test: { keyframes: [{ offsetX: 100 }], direction: 'alternate' }
    },
    action: 'walkRight',
    //state: 'test'
})
leafer.add(robat)


let total = 5


// const animation = {
//     keyframes: [{}, {}],
//     duration: 2000,
//     easing: 'string',
//     loop: true, // 可设置数字
//     delay: 500,
//     endDelay: 200,
//     stagger: 100, // 多个动画的间隔
//     direction: 'alternate', // 交替进行
// }

// const keyframes = {
//     style: { opacity: 1 },
//     duration: 2000
// } // 或者直接style

// // 定义状态
// const states = {
//     click: { fill: 'white' },
//     walk: { from: {}, to: {}, duration: 2000, loop: true },
//     fly: { keyframes: [{}, 2] },
// }

// leafer.state = 'click'

// // leafer.do('click')

// leafer.animate()

leafer.on(KeyEvent.DOWN, (e: KeyEvent) => {

    total++

    switch (e.code) {
        case 'ArrowUp':
            robat.action = 'walkUp'
            robat.y -= total
            break
        case 'ArrowDown':
            robat.action = 'walkDown'
            // robat.state = 'test'
            robat.y += total
            break
        case 'ArrowLeft':
            robat.action = 'walkLeft'
            robat.x -= total
            break
        case 'ArrowRight':
            robat.action = 'walkRight'
            robat.x += total
            break
    }
})

leafer.on(KeyEvent.UP, (e: KeyEvent) => {
    total = 5
    switch (e.code) {
        case 'ArrowUp':
            robat.action = 'up'
            break
        case 'ArrowDown':
            robat.action = 'down'
            break
        case 'ArrowLeft':
            robat.action = 'left'
            break
        case 'ArrowRight':
            robat.action = 'right'
            break
    }
})



// function clipBounds(bounds: IBoundsData, width: number, height: number, total?: number): IBoundsData[] {
//     let x = bounds.x, y = bounds.y
//     const list: IBoundsData[] = []

//     while (y + height <= bounds.height) {

//         list.push({ x, y, width, height })

//         if (x + width < bounds.width) {
//             x += width
//         } else {
//             x = bounds.x
//             y += height
//         }

//         if (total && list.length === total) break

//     }

//     return list
// }

//robot.frames = [{ url: '' }, { url: '' }, { url: '' }, { url: '' }, { url: '' }]
// robot.frames = { mode: 'clip', url: '', x2: '', x3: '', width: 20, height: 20 }


// gif.js
// // 创建一个GIF对象
// var gif = new GIF({
//     workers: 2, // 使用多少个web worker来处理GIF解码
//     workerUrl: 'path/to/gif.worker.js' // worker脚本的路径
// })

// // 加载GIF
// gif.load('path/to/your/gif/file.gif', function (error, gif) {
//     if (error) {
//         console.error(error)
//         return
//     }

//     // 遍历GIF的每一帧
//     gif.frames.forEach(function (frame, index) {
//         // 每个frame都是一个Canvas对象
//         var canvas = frame.getImage()

//         // 你现在可以处理这个canvas对象，例如将其渲染到页面上
//         // document.body.appendChild(canvas);

//         // 或者你可以将其转换为图片数据
//         var img = new Image()
//         img.src = canvas.toDataURL()
//         document.body.appendChild(img)
//     })
// })