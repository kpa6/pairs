import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
  	let src = `static/images/types/${this.props.cardType}.png`,
  		className = `card ${this.props.opened ? 'openedCard' : 'closedCard' } ${this.props.hidden ? 'hiddenCard' : ''}`;

	return (
		<div onClick={ this.props.onClick } className={ className } data-cardType={ this.props.cardType }>
			<img className="front" src="static/images/types/backlogo.png"/>
			<img className="back" src={src}/>
		</div>
	);
  }
}

Card.propTypes = {
	cardType: PropTypes.string.isRequired,
	opened: PropTypes.bool.isRequired,
	hidden: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Card;

