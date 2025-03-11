// #自动布局 - 布局方向 [沿 Y 轴反向自动布局]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const red = new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', fill: 'white', text: '1', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] })
const yellow = new Box({ fill: '#FEB027', children: [{ tag: 'Text', fill: 'white', text: '2', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] })
const green = new Box({ fill: '#79CB4D', children: [{ tag: 'Text', fill: 'white', text: '3', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] })

const flow = new Flow({ flow: 'y-reverse', children: [red, yellow, green], fill: '#676', width: 100, height: 100 }) // [!code hl] 

leafer.add(flow)