import React , {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid';

function App() {
  // [state, the function to change the state]
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  // gets fired off every time dependencies change
  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setLoading(false)
    }

    fetchItems()
  },[query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q)}/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
