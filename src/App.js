import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import fetchData from './components/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className={styles.container}>
        <header className="App-header">
          <h1>Hello World</h1>
        </header>
        <Cards data={data} />
        <Chart data={data} />
        <CountryPicker data={data} />
      </div>
    );
  }
}
export default App;
