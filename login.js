/*
  Created by IntelliJ IDEA.
  User: bintranit
  Date: Tue 04/02/2020
  Time: 5:24 PM
*/
/*
  Created by IntelliJ IDEA.
  User: bintranit
  Date: Tue 04/02/2020
  Time: 9:49 AM
*/

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
export default class login extends PureComponent {
  // static propTypes = {
  //   navigator: PropTypes.object.isRequired,
  // }
  //
  // static defaultProps = {
  //   ...PureComponent.defaultProps,
  // }

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <ScrollView snapToEnd={true} style={styles.container}>
        <View>
          <View>
            <View>
              <Image
                source={require('../app/img/icon-check.png')}
                style={styles.logo}
                resizeMode={'contain'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.txt}>SIGN IN</Text>
              <Text style={styles.txt}>SIGN UP</Text>
            </View>
            <View
              style={{height: 2.5, width: '50%', backgroundColor: '#7d7ce2'}}
            />
            <View style={{marginHorizontal: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../app/img/babel.config.png')}
                  style={{width: 20, height: 20, marginTop: 20}}
                  resizeMode={'contain'}
                />
                <TextInput
                  style={{
                    height: 40,
                    width: '85%',
                    borderColor: 'white',
                    marginTop: 20,
                    borderBottomWidth: 0.5,
                    padding: 10,
                  }}
                  placeholder="Username"
                  placeholderTextColor="#6b6c69"
                  onChangeText={this.handleInputUserName}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../app/img/icon-check.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 20,
                  }}
                />
                <TextInput
                  style={{
                    height: 40,
                    width: '85%',
                    borderColor: 'white',
                    borderBottomWidth: 0.5,
                    marginTop: 20,
                    padding: 10,
                  }}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#6b6c69"
                  onChangeText={this.handleInputUserName}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.containerItemCotin}
            activeOpacity={0.8}>
            <Text style={{color: 'white'}}>{'Coutinue'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerItemForgot}
            activeOpacity={0.8}>
            <Text style={{color: '#46454c'}}>{'Forgot Password'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(41, 36, 36, 0.55)',
  },
  containerView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    marginLeft: 40,
    marginRight: 40,
  },
  txt: {
    marginLeft: 50,
    marginRight: 50,
    fontSize: 20,
    fontWeight: '300',
    color: '#ffffff',
  },
  logo: {
    width: '100%',
    height: '40%',
    marginTop: 100,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
  containerItemCotin: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7d7ce2',
    textAlign: 'center',
  },
  containerItemForgot: {
    marginHorizontal: 20,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
