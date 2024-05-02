import * as React from 'react';
import 'react-native-gesture-handler';
import { Drawer } from './src/navigation/Drawer';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Drawer></Drawer>
    </Provider>
  );
}