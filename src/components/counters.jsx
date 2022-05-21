import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >Reset</button>
        <span><br/></span>
        {this.props.counters.map(counter => 
          <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement} 
            // value={counter.value} 
            // id={counter.id}
            counter={counter}
            selected={true}/>)}
        <button 
          onClick={this.props.onAdd}
          className="btn btn-info btn-sm m-2"
        >Add-New-Item</button>
      </div>
    );
  }
}
export default Counters;


