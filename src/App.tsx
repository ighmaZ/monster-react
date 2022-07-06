import { useState , useEffect , ChangeEvent} from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import { getData} from './utils/data.utils';
import './index.css';

 export type Monster = {

  id : String;
  name: String;
  email: String;
}

function App() {

  const[search, setSearch] = useState("");
  const[monsters, setMonsters] = useState<Monster[]>([]);  // setState will expect monster array
  const[filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {

    const fetchUsers= async() => {
         const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')  // getData has another component data.util , added monster generic
         setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, search]);
  

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    const searched = event.target.value.toLocaleLowerCase();
    setSearch(searched);
  };

  
  return (
    <div className='app'>
<h1 className='title'>Monster Zone</h1>

<SearchBox
className='monster-search-box' 
onChangeHandler={onSearchChange}
placeholder = 'search monsters'
/>
<CardList monsters={filteredMonsters} />
    </div>
  );
  }

export default App;
