import React from 'react';
import PropTypes from 'prop-types';


class Preloader extends React.Component {
  	render() {
  		let className = this.props.loading ? 'preloader open' : 'preloader';
	  	return (
		    <div className={className}>
		    	<div className="cs-loader">
				  <div className="cs-loader-inner">
				    <label>	●</label>
				    <label>	●</label>
				    <label>	●</label>
				    <label>	●</label>
				    <label>	●</label>
				    <label>	●</label>
				  </div>
				</div>
		    </div>
		)
	}
}

Preloader.propTypes = {
	loading: PropTypes.bool.isRequired
}

export default Preloader;