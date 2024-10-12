import { ChildEvent, Group, Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    y: 100,
    cornerRadius: 50,
    fill: '#32cd79',
    // animation: { // [!code hl:6]
    //     style: { x: 500, cornerRadius: 0 }, 
    //     // options
    //     duration: 1,
    //     direction: 'alternate'
    // },
    animation: {
        keyframes: [{ opacity: 0, offsetX: -100 }, { opacity: 1, offsetX: 0 }],
        duration: 1
    },
    animationOut: {
        keyframes: [{ opacity: 1, offsetX: 0 }, { opacity: 0, offsetX: 100 }],
        duration: 1,
        ending: 'from'
    },
    event: {
        ['child.add']() {
            console.log('add')
        },
        ['child.remove']() {
            console.log('remove')
        },
        created: (e: ChildEvent) => {
            console.log('create')

            e.child.waitLeafer(() => {
                console.log('leafer')
            })
        },
        mounted() {
            console.log('mounted')
        },
        unmounted() {
            console.log('unmounted')
        },
        destroy() {
            console.log('destroy')
        }
    }
})

const group = new Group({ children: [rect] })

leafer.add(group)


rect.waitLeafer(() => {
    console.log('leafer')
})

rect.on(ChildEvent.UNMOUNTED, () => {
    console.log('un')
})

// setTimeout(() => {
//     //group.remove()
//     group.remove(rect, true)
//     //rect.remove(null, true)
// }, 2000)


setTimeout(() => {
    rect.visible = 0

    setTimeout(() => {
        rect.visible = true

    }, 2000)

}, 2000)