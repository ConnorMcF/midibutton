const MIDIButton = require('../..')
let pad = new MIDIButton(0)

/* KEY DISCOVERY */

pad.discovery = true // enabled by default, no need to implictly set

pad.on('discoverKey', key => {
	console.log('Registered new key', key)
	key.on('down', () => {
		console.log('Key down', key)
	})
	key.on('up', () => {
		console.log('Key up', key)
	})
})

pad.on('discoverKnob', knob => {
	console.log('Found new knob', knob)
	knob.on('change', () => {
		console.log('Knob change', knob)
	})
})

/* BUTTONS */

let button = pad.key(36)

button.on('down', () => {
	console.log('key down')
})
button.on('up', () => {
	console.log('key up')
})

/* KNOBS */

let knob = pad.knob(15)

knob.on('change', val => {
	console.log('knob change', val)
})
