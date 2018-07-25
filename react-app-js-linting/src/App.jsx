import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core/LinearProgress';
import { Button } from '@material-ui/core/Button';
import logo from './logo.svg';

const styles = {
  root: {
    flexGrow: 1
  }
};

/*
 * Main App class
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

  /**
   *
   * Component did mount
   * @memberof App
   */
  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  /**
   * Component will unmount
   *
   * @memberof App
   */
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  /**
   *
   * progress
   * @memberof App
   */
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
  /**
   * Component will unmount
   *
   * @memberof App
   */
  render() {
    return (
      <div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">
						<div>Welcome to React</div>
					</h1>
				</header>

				<span className="App-intro">
					<div>something here</div>
					To get started, edit <code>src/App.js</code> and save to reload.
					<img src="sdlksd.jpg" alt="this must be present" />
					<Button>Something here</Button>
				</span>

				<div className={this.props.classes.root}>
					<LinearProgress variant="determinate" value={this.state.completed} />
				</div>
			</div>
      );
  }
}

App.propTypes = {
  /**
   * An isRequired prop that should not be visible in the documentation.
   *
   * @ignore
   */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
