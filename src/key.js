let Key = function(id, state) {
	let self = this

	self.id = id
	self.state = state == 153 ? true : false
}

require('util').inherits(Key, require('events').EventEmitter)

module.exports = Key