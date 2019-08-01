import Reacotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reacotron.configure({ host: '192.168.0.49' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
