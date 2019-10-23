import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

export default class Submit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={this.props.continue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 10,
  },
});
