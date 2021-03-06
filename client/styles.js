import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  // MAP SCREEN STYLES
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  userLocMarker: {
    backgroundColor: 'blue',
    borderColor: 'lightblue',
    borderWidth: 2,
    padding: 3,
    borderRadius: 100
  },
  huntLocMarker: {
    height: 20,
    width: 20
  },
  scoreBlock: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    top: '5%',
    left: '5%'
  },
  redBoxText: {
    color: 'goldenrod',
    fontSize: 20
  },
  textWindow: {
    position: 'absolute',
    top: '80%',
    alignItems: 'center',
    backgroundColor: 'rgb(153, 204, 255)',
    borderColor: 'rgb(0, 102, 255)',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    margin: 5
  },
  winMessage: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    position: 'absolute',
    top: '30%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  //LOGIN SCREEN STYLES
  errorMessageText: {
    color: 'red'
  },
  aboveError: {
    margin: 7
  },
  buttonRow: {flexDirection: 'row', justifyContent: 'space-evenly'},
  //HEADER STYLES
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
    alignSelf: 'center',
    fontFamily: 'monospace',
    textShadowColor: 'black',
    textShadowRadius: 1
  },
  aboveHeader: {
    margin: 30
  },
  //FORM STYLES
  form: {
    backgroundColor: 'rgb(153, 204, 255)',
    borderColor: 'rgb(0, 102, 255)',
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    margin: 10
  },
  formInput: {
    backgroundColor: 'rgb(230, 242, 255)',
    borderColor: 'rgb(220,220,220)',
    borderWidth: 2,
    borderRadius: 15
  }
})
