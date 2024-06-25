import { Leafer, Image, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image()
leafer.add(image)

const list: number[] = []

for (let i = 1; i < 14; i++) {
    list.push(i)
}

function exportImage(i: number): void {

    image.url = `/large/${i}.jpg`
    image.once(ImageEvent.LOADED, () => {
        leafer.export(i + '.jpg').finally(() => {
            i = list.pop()
            if (i) exportImage(i)
        })
    })
}

exportImage(list.pop())






// for (let i = 1; i < 300; i++) {
//     const image = new Image({  // [!code hl:3]
//         x: (i - 1) * 200,
//         url: `/tree.svg`,
//         draggable: true
//     })

//     leafer.add(image)
// }