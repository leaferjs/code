
import { App, Line, Rect } from 'leafer-ui'
import '@leafer-in/editor'

import { points } from './points' // 之前采集的飞行路径坐标点


const app = new App({
    view: window,
    editor: {} // 会自动创建 editor实例、tree层、sky层
})

// 加载龙的飞行路径
const line = new Line({ points })
app.tree.add(line)


// 绘制龙

// 1. 头
const head = new Rect({ width: 30, height: 30, around: 'center', fill: 'black' })
app.tree.add(head)

// 2. 爪子
const claws = [
    new Rect({ width: 20, height: 40, around: 'bottom', fill: 'black' }),
    new Rect({ width: 20, height: 40, around: 'top', fill: 'gray' }),
    new Rect({ width: 20, height: 40, around: 'bottom', fill: 'black' }),
    new Rect({ width: 20, height: 40, around: 'top', fill: 'gray' })
]
app.tree.add(claws)

// 3. 身体，多个活动关节
const body: Rect[] = []
for (let i = 0; i < 20; i++) body.push(new Rect({ width: 20, height: 20, around: 'center', fill: 'rgb(50,205,121)' }))
app.tree.add(body)

// 4. 尾巴
const tail = new Rect({ width: 20, height: 20, around: 'center', fill: 'red' })
app.tree.add(tail) 