import { Leafer, Rect, RectData, registerUI, dataProcessor, boundsType } from 'leafer-ui'


export class Custom extends Rect {
    get __tag() { return 'Custom' }
}

export class CustomData extends RectData {

}

Custom.registerUI()
 Custom.registerData(CustomData)

// 1. 添加属性，并指定属性处理器  // [!code hl:2]
Custom.addAttr('left', 0, boundsType) 


const leafer = new Leafer({ view: window })
const custom = new Custom({ left: 50, width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

console.log(custom.toJSON()) // 导出json {tag: 'Custom',left: 50, width: 200, height: 50, fill: 'blue', draggable: true }