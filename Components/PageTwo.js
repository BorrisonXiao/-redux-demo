import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

/**
 * Displays the value of "token".
 * @param {*} props Should contain only a plain object: { token: some_token }.
 */
let PageTwo = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>token: {props.token}</Text>
  </View>
);

/**
 * The first parameter of the "connect" function. It is like the "receiver".
 * It stores a plain object as a prop for the connected component, which will
 * only be affected by the "transmitter's action".
 * @param {*} state The default parameter of this function which comes from
 * the store.
 * @return A plain object designed to be part of the "props" of this component.
 */
const mapStateToProps = state => ({
  token: state.token,
});

export default connect(
  mapStateToProps,
  null,
)(PageTwo);
