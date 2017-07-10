import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router';


import { openCard as openCardAction } from '../../actions'
import { incrementClicks as incrementClicksAction } from '../../actions'
import { restart as restartAction } from '../../actions'
import { openModal as openModalAction } from '../../actions'
import { enableCards as enableCardsAction } from '../../actions'
import { startLoading as startLoadingAction } from '../../actions'

import Card from '../Card/Card'
import Timer from '../timer/timer'
import ClicksCounter from '../clickscounter/clickscounter'

class Game extends React.Component {
	componentWillMount() {
		this.allowBack = true;
		this.props.cards.types = this.props.cards.types.sort( () => 0.5 - Math.random() )		
		
		this.props.router.listen( pathname => {
			if (pathname == '/' && this.allowBack) this.props.back()
		})
	}
	componentWillUpdate(nextProps, nextState) {
		if (nextProps.cards.isFinished) {
			clearInterval(this.timer.timer);
			nextProps.openModal( this.timer.state.timer );
		}
	}
	componentWillUnmount() {
		this.allowBack = false;
	}
	restart(){
		this.props.restart();
		setTimeout( () => this.timer.setState({ timer: 0 }), 800 )
	}
  	render() {
	  	return (
		    <div className="container game">
		    	<img className="title-logo" src="/static/images/animals_logo.png" />

			    <h1 className="title">Pairs online game</h1>
			    <div className="field">
			    	<div className="menu clearfix">
				    	<Timer ref={ timer => this.timer = timer } />
				    	<div className="restart_game" onClick={ this.restart.bind(this) }>
					    	<i className="fa fa-repeat" aria-hidden="true"></i>
					    	<span>Restart</span>
				    	</div>
				    	<Link to="/" className="back-home">
					    	<i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
				    		<span>Back</span>
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
		)
  	}
}

Game.PropTypes = {
	cards: PropTypes.shape({
		prevCard: PropTypes.string,
		prevIndex: PropTypes.number,
		isFinished: PropTypes.bool.isRequired,
		hide: PropTypes.bool.isRequired,
		types: PropTypes.arrayOf(PropTypes.object).isRequired
	}),
	router: PropTypes.object.isRequired,
	restart: PropTypes.func.isRequired,
	clicks: PropTypes.number.isRequired,
	enableCards: PropTypes.func.isRequired,
	openCards: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		timer: state.timer,
		clicks: state.clicksCounter.value
	}
}
const mapDispatchToProps = (dispatch) => {
  	return {
    	openCard: (key,index) => {
      		dispatch( openCardAction(key,index) )
    		dispatch( incrementClicksAction() )
    	},
    	restart: () => {
      		dispatch( startLoadingAction() ).then( () => {
      			dispatch(restartAction()).then( () => setTimeout(() => dispatch({ type: 'END_LOADING' }), 600) )
      		})
    	},
    	back: () => {
    		dispatch( restartAction() )
    	},
    	openModal: (time) => {
    		dispatch( openModalAction(time) );
    	},
    	enableCards: () => {
    		dispatch( enableCardsAction() )
    	}
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

