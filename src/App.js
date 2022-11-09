// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';



const App = () => {
  const [searchField, setSeachField] = useState(''); //[value,setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

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

  const onTitleChange = (event) => {
    console.log('onSearchChange function')
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }

  console.log(filteredMonsters);


  return (
    <div className="App">
      <h1 className='app-title'> Monsters - {title} </h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeHolder='Search Monsters' 
        className='monsters-search-box'
      />
      <SearchBox 
      onChangeHandler={onTitleChange} 
      placeHolder='Title Change' 
      className='title-search-box'
    />
      <CardList 
        monsters={filteredMonsters}
      />
  </div>
  
  )
}

export default App;
