import React from 'react';
import Router from 'next/router'
import PropTypes from 'prop-types';
import context from '../../../context'


class Modal extends React.PureComponent {
  static contextType = context

  close() {
		this.props.closeModal();
		Router.push('/');
  }

  render() {
    const className = this.props.show ? 'modal open' : 'modal';
    return (
      <div className={className}>
        <div className="results">
          <i className="fa fa-times modal-close" onClick={this.close.bind(this)} aria-hidden="true"></i>
          <div className="title">Congrats!</div>
          <div className="text">Your score:</div>
          <div className="score-block">
            <div className="elapsedTime">Elapsed time: <span>{ new Date(1000 * this.context.time).toISOString().substr(14, 5) }</span></div>
            <div className="clicks">Clicks: <span>{this.props.clicks}</span></div>
          </div>
          <img className="results-logo" src="/static/images/animals_logo.png" />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	clicks: PropTypes.number.isRequired
};

export default Modal;
