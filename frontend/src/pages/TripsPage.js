import React from 'react';
import { View, ScrollView, Text } from "react-native";
import LoadingPage from './LoadingScreen';

class TripsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
      };
  }

  render() {
    return (
      <LoadingPage />
    )
  }
}

export default TripsPage
