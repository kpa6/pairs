import React from 'react';
import context from '../../context'


class Timer extends React.Component {
	static contextType = context

  render() {
    return (
      <div className="timer">
        { new Date(1000 * this.context.time).toISOString().substr(14, 5) }
      </div>
		)
	}
}

export default Timer;
