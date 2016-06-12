React = require 'react'
hsl = require 'hsl'
{View, Text, TouchableHighlight, StyleSheet} = require 'react-native'
{register, dispatch, unregisterAll} = require './emitter'
{store} = require './schema'
{updater} = require './updater/index'

$ = React.createElement

class Container extends React.Component
  constructor: (props) ->
    super props
    @state =
      store: store

  componentDidMount: ->
    register (pair) =>
      [action, data] = pair
      @setState store: updater(@state.store, action, data, null, null)

  componentWillUnmount: ->
    unregisterAll()

  onPress: ->
    dispatch 'add', null

  render: ->
    $ View, style: style.container,
      $ Text, {}, (JSON.stringify @state.store)
      $ TouchableHighlight, style: style.button, onPress: @onPress.bind(@),
        $ Text, {}, 'Add'

style = StyleSheet.create
  container:
    paddingTop: 20
  button:
    backgroundColor: hsl(0,0,80)
    width: 100

module.exports = Container
