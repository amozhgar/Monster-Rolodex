import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState(""); // [Value, SetValue] SetValue is a Function
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFiltered = monsters.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFiltered);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const filtered = monsters.filter((mon) => {
  //   return mon.name.toLocaleLowerCase().includes(searchField);
  // });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        classname="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filtered = monsters.filter((mon) => {
//       return mon.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="Search Monsters"
//           onChange={onSearchChange}
//         /> */}
//         {/* {filtered.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//         })} */}
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monster"
//           classname="search-box"
//         />
//         <CardList monsters={filtered} />
//       </div>
//     );
//   }
// }

export default App;
