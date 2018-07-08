import { AsyncStorage } from 'react-native';

export function setAsync(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function getAsync(key) {
  return AsyncStorage.getItem(key).then(data => JSON.parse(data));
}
