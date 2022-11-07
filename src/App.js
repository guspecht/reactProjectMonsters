// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';



const App = () => {
  const [searchField, setSeachField] = useState(''); //[value,setValue]
  const [monsters, setMonters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonters(users));
    console.log('useEffect');

  }, []);
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    console.log('filtered useeffect')
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    console.log('onSearchChange function')
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSeachField(searchFieldString);
  }


  console.log(filteredMonsters);


  return (
    <div className="App">
    <h1 className='app-title'> Monsters </h1>
    <SearchBox onChangeHandler={onSearchChange} placeHolder='Search Monsters' className='monsters-search-box'/>
    <CardList monsters={filteredMonsters}/>
  </div>
  
  )
}
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     console.log('constructor');
//   }

//   // OPTIMIZATION
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return {
//           searchField
//         }
//       }
//     )
//   };

//   // IT ONLY HAPPENS ONCE
//   componentDidMount(){
//     console.log('componentDidMount');

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(
//       () => {
//               return {
//                 monsters: users,
//               }
//             },
//       () => { 
//               console.log(this.state)
//             }
//      )
//     );
//   }

//   render() {
//     console.log('render');

//     // OPTIMIZATION
//     const { monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 className='app-title'> Monsters </h1>
//       <SearchBox onChangeHandler={onSearchChange} placeHolder='Search Monsters' className='monsters-search-box'/>
//       <CardList monsters={filteredMonsters}/>
//     </div>
//     )
//   }
// }

export default App;
