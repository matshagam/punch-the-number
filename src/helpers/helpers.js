import { AsyncStorage } from 'react-native';

export async function setAsync(key, value) {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
}

export function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
