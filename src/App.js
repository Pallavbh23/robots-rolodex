import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

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
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
        {/* {this.state.authentics.map((authentic) => (
          <h1 key={authentic.id}>{authentic.name}</h1>
        ))} */}
      </div>
    );
  }
}

export default App;
