import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  timer = null;

  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const {completed} = this.state;
    if (completed === 100) {
      this.setState({
        completed: 0
      });
    } else {
      const diff = Math.random() * 10;
      this.setState({
        completed: Math.min(completed + diff, 100)
      });
    }
  };

  render() {
    return (
      <div className="App">
				<div className={this.props.classes.root}>
					<LinearProgress variant="determinate" value={this.state.completed} />
				</div>
			</div>
      );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
