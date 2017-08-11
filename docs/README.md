# MIDI Buttons

## [Device](https://github.com/ConnorMcF/midibutton/blob/master/docs/midibutton.md)
```js
const MIDIButton = require('midibutton')
let pad = MIDIButton(0)
```

## [Key](https://github.com/ConnorMcF/midibutton/blob/master/docs/key.md)
```js
let button = pad.key(36)

button.on('down', () => {
	console.log('key down')
})
button.on('up', () => {
	console.log('key up')
})
```

## [Knob](https://github.com/ConnorMcF/midibutton/blob/master/docs/knob.md)
```js
let knob = pad.knob(15)

knob.on('change', val => {
	console.log('knob change', val)
})
```