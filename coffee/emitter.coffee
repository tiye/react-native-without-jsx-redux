EventEmitter = require 'EventEmitter'
Immutable = require 'immutable'

globalEmitter = new EventEmitter

register = (fn) ->
  globalEmitter.addListener 'bus', fn

unregisterAll = ->
  globalEmitter.removeAllListeners 'bus'

dispatch = (action, data) ->
  globalEmitter.emit 'bus', Immutable.fromJS([action, data])

exports.register = register
exports.unregisterAll = unregisterAll
exports.dispatch = dispatch
