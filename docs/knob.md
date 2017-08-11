# Knob

```js
let knob = pad.knob(15)

knob.on('change', val => {
	console.log('knob change', val)
})
```

# Properties

### .id
`Integer` - Key MIDI ID

### .value
`Float` - A decimal value of the knob value

### .raw
`Integer` - The raw of the knob value, this should be between 0-127

# Events

### change
Emitted when the knob is twisted.
