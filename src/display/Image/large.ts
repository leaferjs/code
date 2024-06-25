import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

for (let i = 1; i < 14; i++) {
    const image = new Image({  // [!code hl:3]
        x: (i - 1) * 4000,
        y: 300,
        url: `/large/${i}.jpg`,
        draggable: true
    })

    leafer.add(image)
}


for (let i = 1; i < 300; i++) {
    const image = new Image({  // [!code hl:3]
        x: (i - 1) * 200,
        url: `/tree.svg`,
        draggable: true
    })

    leafer.add(image)
}

leafer.on('layout', () => { console.log('layout.start') })