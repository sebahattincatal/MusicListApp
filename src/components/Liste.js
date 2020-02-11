import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios'; // http istekleri yaptığımız kütüphane
import Detay from './Detay';
 

class Liste extends Component {

  state = { data: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ data: response.data }));
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  renderData() {
    return this.state.data.map((responseData, Id) =>
      //<Text key={Id}>{responseData.title}</Text>
      <Detay key={Id} data={responseData} />
    );
  }

  render() {
    console.log("gelen data"+this.state);
    return (
      <ScrollView style={{ marginTop: 15 }}>
        {this.renderData()}
      </ScrollView>
    );
  }
}

export default Liste;
