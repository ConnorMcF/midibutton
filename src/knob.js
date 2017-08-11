let Knob = function(id, val) {
	let self = this

	self.id = id
	self.value = val / 127
	self.raw = val
}

require('util').inherits(Knob, require('events').EventEmitter)

module.exports = Knob