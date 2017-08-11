# Key

```js
let button = pad.key(36)

button.on('down', () => {
	console.log('key down')
})
button.on('up', () => {
	console.log('key up')
})
```

# Properties

### .id
`Integer` - Key MIDI ID

### .state
`Boolean` - True if key is down, false if up

# Events

### down
Emitted when the key is pressed down.

### up
Emitted when the key is released.