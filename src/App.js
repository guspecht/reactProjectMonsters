import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  // OPTIMIZATION
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {
          searchField
        }
      }
    )
  };

  // IT ONLY HAPPENS ONCE
  componentDidMount(){
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => {
              return {
                monsters: users,
              }
            },
      () => { 
              console.log(this.state)
            }
     )
    );
  }

  render() {
    console.log('render');

    // OPTIMIZATION
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>;
  }
}

export default App;
