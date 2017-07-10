import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeModal as closeModalAction } from '../actions'
import { restart as restartAction } from '../actions'

import Preloader from './common/Preloader/Preloader';
import Modal from './common/Modal/Modal';


class App extends React.Component {
	render(){
		return (
		    <div className="wrapper">
	    		<Modal router={ this.props.router } 
	    			   show={ this.props.showModal } 
	    			   elapsedTime={ this.props.elapsedTime } 
	    			   clicks={ this.props.clicks } 
	    			   closeModal={ this.props.closeModal} />
		    	<Preloader loading={ this.props.preloader.loading }/>
		      	
		      	{this.props.children}
		      	
			</div>
		);
	}
}

App.propTypes = { 
	children: PropTypes.element.isRequired 
};

const mapStateToProps = (state) => {
	return {
		preloader: state.preloader,
		showModal: state.modal.show,
		elapsedTime: state.modal.time,
		clicks: state.clicksCounter.value
	}
}
const mapDispatchToProps = (dispatch) => {
  	return {
    	closeModal: () => {
      		dispatch( closeModalAction() )
      		dispatch( restartAction() )
    	}
  	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
