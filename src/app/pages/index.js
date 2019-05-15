import React, { Component } from "react";
import Router from 'next/router';
import { connect } from "react-redux";

import { getPageTopData, getGameStartedData } from '../selectors';
import { closeModal, startGame, gameLoaded } from '../actions/';
import PageTop from '../components/common/pageTop'

class Page extends Component {
  componentDidMount() {
    !this.props.gameStarted && this.props.gameLoaded()
  }

  render() {
    return (
      <React.Fragment>
        <PageTop {...this.props} />
        <div className="container home">
          <img className="logo" src="/../static/images/animals_logo.png" />
          <h1>Pairs online game</h1>
          <span className="start-button" onClick={()=>{
            this.props.startGame()
            Router.push('/game')
          }}>Start game</span>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...getPageTopData(state),
  gameStarted: getGameStartedData(state)
})

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    gameLoaded: () => dispatch(gameLoaded()),
    startGame: () => dispatch(startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
