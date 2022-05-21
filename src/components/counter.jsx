import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   // imageUrl: 'https://picsum.photos/200',
  //   // tags: ["tag1", "tag2", "tag3"]
  // };

  // styles = {
  //   fontSize: "5",
  //   fontWeight: 'bold',
  //   colour: 'green'
  // };


  // renderTags(){
  //   if(this.state.tags.length === 0) return <p>There are no tags!</p>
  //   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  // }

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (product) => {
  //   // console.log("Increment clicked", this);
  //   console.log(product);
  //   this.setState({count: this.state.count + 1});
  // };



  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt=""/> */}

        {/* <span className="badge badge-primary bg-dark m-2"> {this.formatCount()} </span> */}
        <font size="4" face="verdana" color="green"> {this.formatCount()} </font>
        <button 
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-2"
        > 
          +
        </button>

        <button 
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-sm"
        > 
          -
        </button>

        <button 
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        > 
          Delete
        </button>
        <span><br/></span>
      </React.Fragment>
    );
  }
  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? 'Zero' : count;
  }
}
export default Counter;
