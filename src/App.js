import React, { Component } from 'react';
import './style.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 5 },
      { id: 4, value: 2 },
      { id: 5, value: 2 }
    ],
  };

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0 ? counters[index].value-- : counters[index].value;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log('Event Handler Called!', counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters }); // this.setState({counters});
  };

  handleAdd= () => {
    const tmp1 = this.state.counters;
    const tmp2 = [{ id: tmp1[tmp1.length-1]+1, value: 0 }]
    const counters = tmp1.concat(tmp2);
    this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalItems={this.state.counters.reduce((a,v) =>  a = a + v.value , 0 )}
          uniqueItems={this.state.counters.filter(c => c.value>0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
