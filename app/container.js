import React from 'react';
import hsl from 'hsl';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { register, dispatch, unregisterAll } from './emitter';
import { store } from './schema';
import { updater } from './updater/index';

let $ = React.createElement;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {store};
  }

  componentDidMount() {
    return register(pair => {
      let [action, data] = pair;
      return this.setState({store: updater(this.state.store, action, data, null, null)});
    });
  }

  componentWillUnmount() {
    return unregisterAll();
  }

  onPress() {
    return dispatch('add', null);
  }

  render() {
    return $(View, {style: style.container},
      $(Text, {}, (JSON.stringify(this.state.store))),
      $(TouchableHighlight, {style: style.button, onPress: this.onPress.bind(this)},
        $(Text, {}, 'Add')));
  }
}

var style = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  button: {
    backgroundColor: hsl(0,0,80),
    width: 100
  }
});

export default Container;
