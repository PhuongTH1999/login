/*
  Created by IntelliJ IDEA.
  User: bintranit
  Date: Wed 05/02/2020
  Time: 9:38 AM
*/
import React, {Component} from 'react';
import {Animated} from 'react-native';

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    };
  }
  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1, or fully opaque
      },
    ).start(); // Starts the animation
  }
  render() {
    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim, // Bind opacity to animated value
        }}>
        {this.props.children}
      </Animated.View>
    );

    return (
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
    )
   }
  
}
module.exports = FadeInView;
// render() {
//     return (
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//             <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//         </FadeInView>
//     )
//    }
