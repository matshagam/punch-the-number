import { AsyncStorage, StyleSheet } from 'react-native';

export async function setAsync(key, value) {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getAsync(key) {
  return await AsyncStorage.getItem(key).then(data => JSON.parse(data));
}

export function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 100
  },
  head: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  main: {
    backgroundColor: '#9B9B9B',
    alignSelf: 'center',
    height: 350,
    width: 350,
    borderRadius: 350,
    justifyContent: 'space-between'
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 32,
    marginTop: 16
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center'
  },
  games: {
    height: 130,
    width: 130,
    borderRadius: 130,
    backgroundColor: '#9B9B9B',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  headerCircles: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 5
  },
  circlesText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9B9B9B'
  }
});
