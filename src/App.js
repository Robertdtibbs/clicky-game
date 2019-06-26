import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Instruction from "./components/Instructions"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    gamePlay: "Click a 90's character to begin"
  };

  shuffle = (array) => {
    this.array.sort(() => Math.random() - Math.random())
  }

  scoring = (id) => {
    this.setState({ score: this.state.count + 1 })
    if (this.state.count < this.state.highScore) {
      this.setState({ highScore: this.state.highScore })
    } else {
      this.setState({ highScore: this.state.count + 1 })
    }
  }

  clicked = id => {
    if (this.state.friends[id - 1].clicked === true) {
      var array = Object.assign({}, this.state);
      for (var i = 0; i < this.state.friends.lenght; i++) {
        array.friends[i].clicked = false
      }
      this.setState(array)
      this.setState({ score: 0 })
      this.setState({ status: "Try Again!" })
    } else {
      var action = Object.assign({}, this.state);
      action.friends[id - 1].clicked = true
      this.setState(action)
      this.score();
      let arr = this.state.friends
      this.shuffle(arr)
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title>
          Clicky Game
          <h3>{this.state.score}</h3>
          <h3>{`Highscore: ${this.state.highScore}`}</h3>
        </Title>
        <Instruction>Please click the image to score points!</Instruction>

        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              clicked={this.clicked}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
