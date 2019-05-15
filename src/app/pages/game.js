import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from "next/link";
import Router from 'next/router'
import Context from '../context'

import Card from '../components/Card/Card'
import Timer from '../components/timer/timer'
import ClicksCounter from '../components/clickscounter/clickscounter'
import PageTop from '../components/common/pageTop'

import { startOpenCard, restart, openModal, closeModal, enableCards, restartGame }  from '../actions'
import { getPageTopData, getCardsData, getClickedData, getTimerData, getGameStartedData } from '../selectors'


class Game extends React.Component {

  constructor(props) {
		super(props)
    this.props.cards.types = this.props.cards.types.sort( () => 0.5 - Math.random() );
    Router.events.on('routeChangeStart', url => url == '/' && this.props.restart())
  }

  state = { time: 0, setTime: this.setTime }

  setTime(){
		this.setState({ ...this.state, time: this.state.time + 1 })
	}

  clearTime(){
    this.setState({...this.state, time: 0})
  }

	componentDidMount(){
    if (!this.props.gameStarted) Router.push('/error', '/');
    this.timerInstance = setInterval(()=> this.setTime(), 1000);
	}

	getSnapshotBeforeUpdate(prevProps, nextState) {
		if (!prevProps.cards.isFinished && this.props.cards.isFinished) {
			return {
				isFinished: true
			}
		}
		return null
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if (snapshot) {
			clearInterval(this.timerInstance);
			this.props.openModal( this.context.time );
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerInstance);
	}

	restart(){
    this.props.restart()
    this.clearTime()
    clearInterval(this.timerInstance);
		this.timerInstance = setInterval(()=> this.setTime(), 1000);
	}

	render() {
		return (
			<Fragment>
        <Context.Provider value={this.state}>
          <PageTop {...this.props.pageTopProps} closeModal={this.props.closeModal} />
          <div className="container game">
            <img className="title-logo" src="/static/images/animals_logo.png" />

            <h1 className="title">Pairs online game</h1>
            <div className="field">
              <div className="menu clearfix">
                <Timer />
                <div className="restart_game" onClick={ this.restart.bind(this) }>
                  <i className="fa fa-repeat" aria-hidden="true"></i>
                  <span>Restart</span>
                </div>
                <Link href="/">
                  <a className="back-home">
                    <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                    <span>Back</span>
                  </a>
                </Link>

                <ClicksCounter clicks={ this.props.clicks } />
              </div>
              <div className="cards clearfix">
                { this.props.cards.types.map((item,index) => {
                return <Card
                  cardType={ item.name }
                  opened={ item.opened }
                  hidden={ item.hidden }
                  disabled={ item.disabled }
                  enableCards={ this.props.enableCards }
                  onClick={ () => {
                    if ( !item.disabled && !item.hidden && !item.opened )
                      this.props.openCard(item.name,index)
                  }}
                  key={ index } />
                })}
              </div>
            </div>
          </div>
        </Context.Provider>
			</Fragment>
		)
	}
}

Game.propTypes = {
	cards: PropTypes.shape({
		prevCard: PropTypes.string,
		prevIndex: PropTypes.number,
		isFinished: PropTypes.bool.isRequired,
		hide: PropTypes.bool.isRequired,
		types: PropTypes.arrayOf(PropTypes.object).isRequired
	}),
	restart: PropTypes.func.isRequired,
	clicks: PropTypes.number.isRequired,
	enableCards: PropTypes.func.isRequired,
	openCard: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cards: getCardsData(state),
  timer: getTimerData(state),
  clicks: getClickedData(state),
  gameStarted: getGameStartedData(state),
  pageTopProps: getPageTopData(state)
})

const mapDispatchToProps = dispatch => ({
  openCard: (key, index) => dispatch(startOpenCard(key, index)),
  enableCards: () => dispatch( enableCards() ),
  restart: () => dispatch(restartGame()),
  back: () => dispatch(restart()),
  openModal: time => dispatch(openModal(time)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
