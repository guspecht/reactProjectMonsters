import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  // IT ONLY HAPPENS ONCE
  componentDidMount(){
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => {
              return {monsters: users}
            },
      () => { 
              console.log(this.state)
            }
     )
    );
  }

  render() {
    console.log('render');

    return <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
        const searchWord = event.target.value.toLocaleLowerCase();
        let filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchWord);
        });

        this.setState(
          () => {
            return {monsters: filteredMonsters}
          }
        )
      }}/>
      {
        this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        }) 
      }
    </div>;
  }
}

export default App;
