import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Component is mounting...',
      prevNumber: props.number
    };
    console.log('Constructor: Component is being constructed');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted');
    this.setState({ message: 'Component has mounted!' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      console.log(`componentDidUpdate: Number changed from ${prevProps.number} to ${this.props.number}`);
      this.setState({ message: `Component updated! New number is ${this.props.number}` });
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to unmount');
    alert('Component is unmounting!');
  }

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h2>{this.state.message}</h2>
        <p>Current number: {this.props.number}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
