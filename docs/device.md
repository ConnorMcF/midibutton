# Device

```js
const MIDIButton = require('midibutton')
let pad = MIDIButton(0)
```

# Properties

### .input
`NodeMidiInput` - MIDI input

### .name
`String` - Device name

### .port
`Integer` - Device port

### .discovery
`Boolean` - `true` - Enable key/knob discovery

### .keys
`Object` - `Key` - Object of key instances

### .knobs
`Object` - `Knob` - Object of knob instances

# Methods

### Constructor(port)
Creates new MIDI Device input.
- `port` - `Integer` - Device port

Returns `Device`

### .key(id)
Initialises key.
- `id` - `Integer` - Key MIDI ID

Returns `Key`

### .knob(id)
Initialises knob.
- `id` - `Integer` - Knob MIDI ID

Returns `Knob`

# Events

### keyDown
Emitted when a key is pressed down.
- `Key` - Key which was pressed down

### keyUp
Emitted when a key is released.
- `Key` - Key which was released

### knobChange
Emitted when a knob is twisted.
- `Knob` - Knob which was twisted

### discoverKey
Emitted when a a key is discovered.
- `Key` - Key which was discovered

### discoverKnob
Emitted when a a knob is discovered.
- `Knob` - Knob which was discovered