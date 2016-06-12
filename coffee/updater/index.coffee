{add} = require './demo'

updater = (store, action, data, actionId, actionTime) ->
  switch action
    when 'add' then add store, data, actionId, actionTime
    else store

exports.updater = updater
