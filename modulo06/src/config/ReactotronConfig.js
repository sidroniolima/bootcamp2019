import Reacotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reacotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
