# MIDI Button

MIDI Button is a simple way to interface with MIDI Controllers.

### Installation

```sh
$ npm install midibutton -S
```

### Usage
```js
const MIDIButton = require('midibutton')
let pad = new MIDIButton(0)

pad.on('discoverKey', key => {
	key.on('down', () => {
		console.log('Key down', key)
	})
})

pad.on('discoverKnob', knob => {
	knob.on('change', () => {
		console.log('Knob change', knob)
	})
})

```
Further documentation can be found in the [documentation directory](https://github.com/ConnorMcF/midibutton/tree/master/docs) in the repo.

License
----

MIT