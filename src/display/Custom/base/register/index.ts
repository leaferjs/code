// #自定义元素 [注册元素]
import { Leafer, Rect, UI, registerUI } from 'leafer-ui'


@registerUI()  // 1. 注册元素  // [!code hl:6]
class Custom extends Rect {

    public get __tag() { return 'Custom' } // 2. 定义全局唯一的 tag 名称

}


const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

const json = custom.toJSON()
console.log(json) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }

json.y = 300
leafer.add(UI.one(json)) // 通过json创建自定义元素