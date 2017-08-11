const MIDI = require('midi')

const Key = require('./key')
const Knob = require('./knob')

let State = {
	DOWN: 153,
	UP: 137,
	KNOB: 176,
	PERSIST: 217
}

let Device = function(port) {
	let self = this

	self.input = new MIDI.input()
	self.name = this.input.getPortName(port)
	self.port = port

	self.discovery = true

	self.keys = {}
	self.knobs = {}

	self.input.on('message', (deltaTime, msg) => {
		let state = msg[0]
		let key = msg[1]

		if(state == State.DOWN || state == State.UP) {
			return handleKey(deltaTime, msg)
		}

		if(state == State.KNOB) {
			return handleKnob(deltaTime, msg)
		}

		if(state == State.PERSIST) {
			return
		}
		
	})

	let handleKey = (deltaTime, msg) => {
		let state = msg[0]
		let key = msg[1]

		if(!self.keys[key]) {
			if(!self.discovery) {
				return
			}
			self.keys[key] = new Key(key, state)
			self.emit('discoverKey', self.keys[key])
		}

		key = self.keys[key]

		if(state == State.DOWN) {
			key.state = true
			self.emit('keyDown', key)
			key.emit('down')
		}

		if(state == State.UP) {
			key.state = false
			self.emit('keyUp', key)
			key.emit('up')
		}
	}

	self.key = (key) => {
		if(!self.keys[key]) {
			self.keys[key] = new Key(key)
		}
		return self.keys[key]
	}

	let handleKnob = (deltaTime, msg) => {
		let state = msg[0]
		let knob = msg[1]
		let value = msg[2]

		if(!self.knobs[knob]) {
			if(!self.discovery) {
				return
			}
			self.knobs[knob] = new Knob(knob, value)
			self.emit('discoverKnob', self.knobs[knob])
		}

		knob = self.knobs[knob]
		knob.value = value / 127
		knob.raw = value

		self.emit('knobChange', knob)
		knob.emit('change', knob.value)
	}

	self.knob = (knob) => {
		if(!self.knobs[knob]) {
			self.knobs[knob] = new Knob(knob)
		}
		return self.knobs[knob]
	}

	

	self.input.openPort(self.port)
}

require('util').inherits(Device, require('events').EventEmitter)

module.exports = Device