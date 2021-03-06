import React from 'react'
import {View, Button, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {withNavigationFocus} from 'react-navigation'
import {styles} from '../styles'
//------------------------------------------------------------------
const NEW_GAME = 'NEW_GAME'
const RESUME_GAME = 'RESUME_GAME'
const GAME_INSTRUCTIONS = 'GAME_INSTRUCTIONS'
//------------------------------------------------------------------
class StartScreen extends React.Component {
  static navigationOptions = {
    headerLeft: null
  }
  constructor() {
    super()
    this.state = {hasNoPreviousGame: true}
    this.handleSelection = this.handleSelection.bind(this)
  }
  async componentDidMount() {
    await this.props.getUser()
    //will enable resume button if the user has a game to resume
    if (this.props.user.huntId) {
      this.setState({hasNoPreviousGame: false})
    }
  }
  async componentDidUpdate(prevProps) {
    //checks if navigation changed from unfocused to focused
    //meaning we have returned to the screen from another screen
    if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused) {
      //if so, get user again and enable/disable resume button
      //based on huntId value
      await this.props.getUser()
      if (this.props.user.huntId === null) {
        this.setState({hasNoPreviousGame: true})
      } else {
        this.setState({hasNoPreviousGame: false})
      }
    }
  }
  //------------------------------------------------------------------
  handleSelection(inSelection) {
    //disable resume button whenever leaving page,
    //so it will never start enabled when returning
    this.setState({hasNoPreviousGame: true})
    if (inSelection === NEW_GAME) {
      this.props.navigate('HuntScreen')
    } else if (inSelection === RESUME_GAME) {
      this.props.navigate('MapScreen')
    } else if (inSelection === GAME_INSTRUCTIONS) {
      this.props.navigate('InstructionScreen')
    }
  }
  //------------------------------------------------------------------
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://cdn.vox-cdn.com/thumbor/JrouYZWSJNcepH5ZAhzVdUA7Muw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/63616039/171109_08_11_37_5DS_0545.0.jpg'
        }}
        style={{width: '100%', height: '100%'}}
        >
        <View>
          <Button
            title="GAME INSTRUCTIONS"
            onPress={() => this.handleSelection(GAME_INSTRUCTIONS)}
          />
        </View>
        <View>
          <Button
            color="#add8e6"
            title="NEW GAME"
            onPress={() => this.handleSelection(NEW_GAME)}
          />
        </View>
        <View>
          <Button
            color="#add8e6"
            disabled={this.state.hasNoPreviousGame}
            title="RESUME"
            onPress={() => this.handleSelection(RESUME_GAME)}
          />
        </View>
      </ImageBackground>
    )
  }
}

//------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    navigate: ownProps.navigation.navigate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(me())
  }
}
//------------------------------------------------------------------

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigationFocus(StartScreen))
