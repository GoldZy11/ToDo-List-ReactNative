import * as React from 'react';
import 'react-native-gesture-handler';
import { Drawer } from './Navigator/Drawer';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Drawer></Drawer>
    </Provider>
  );
}