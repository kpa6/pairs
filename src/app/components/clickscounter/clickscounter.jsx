import React from 'react';
import PropTypes from 'prop-types';

class ClicksCounter extends React.PureComponent {
  render() {
    return (
      <div className="clicksCounter">
        Clicks: {this.props.clicks}
      </div>
    )
  }
}

ClicksCounter.propTypes = {
	clicks: PropTypes.number.isRequired
}

export default ClicksCounter;

