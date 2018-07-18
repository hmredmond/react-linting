import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const styles = {
  root: {
    flexGrow: 1,
  },
};


class App extends React.Component {

  timer = null;

  state = {
    completed: 0,
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
    const {classes} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><div>Welcome to React</div></h1>
        </header>


          <span className="App-intro"  >
          <div>something here</div>
          To get started, edit <code>src/App.js</code> and save to reload.
          <img src="sdlksd.jpg" alt="this must be present"/>
          <Button>Something here</Button>
        </span>

        <div className={classes.root}>
          <LinearProgress variant="determinate" value={this.state.completed} />
        </div>
      
      </div>
      );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

