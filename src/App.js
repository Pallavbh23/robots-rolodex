import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello, my name is Pallav!</p>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "hi",
      monsters: [],
      searchField: "",
      authentics: [
        {
          name: "Pallav",
          id: "1",
        },
        {
          name: "Puranjay",
          id: "2",
        },
        {
          name: "Sinha",
          id: "3",
        },
      ],
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="Search Robots!"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        /> */}
        <SearchBox
          placeholder="Search Robots!"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* {this.state.authentics.map((authentic) => (
          <h1 key={authentic.id}>{authentic.name}</h1>
        ))} */}
      </div>
    );
  }
}

export default App;
