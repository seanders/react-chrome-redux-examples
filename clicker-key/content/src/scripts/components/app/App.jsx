import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  onInputChange(evt) {
    console.log('dispatching on input change event', evt.target.value)
    this.props.dispatch({
      type: 'INPUT_CHANGE',
      value: evt.target.value || '',
    });
  }

  render() {
    return (
      <div>
        Count: {this.props.count}
        {/* `value` is undefined even though `store.getState().input` in the background page says its `""`. Not sure what thats about*/}
        <input type='text' value={this.props.value || ''} onChange={this.onInputChange.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    count: state.count,
    value: state.input
  };
};

export default connect(mapStateToProps)(App);
