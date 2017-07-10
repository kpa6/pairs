import React from 'react';

class Timer extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { timer: 0 };
	}
	componentDidMount() {
		this.timer = setInterval(()=>{
			this.setState({
				timer: this.state.timer + 1
			})
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
  	render() {
	  	return (
		    <div className="timer">
		    	{
		    		new Date(1000 * this.state.timer).toISOString().substr(14, 5)
		    	}
		    </div>
		)
	}
}

export default Timer;
