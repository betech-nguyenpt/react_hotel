import React from "react";
import {
  View,
  StyleSheet,
  BackHandler,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  Animated,
  Alert,
  FlatList,
  TextInput,
  Button
} from "react-native";

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}
