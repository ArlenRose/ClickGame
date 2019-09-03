import React from "react";

class app extends React.Component {
  state = {
    scoreBoard: 0,
    topScore: 0,
    currentScore: 0,
    picsArray: [
      {
        id: 1,
        url:
          "https://i.pinimg.com/564x/b7/34/7f/b7347f3ab888c0df00096f4956b934d9.jpg"
      },
      {
        id: 2,
        url:
          "https://i.pinimg.com/564x/a9/71/63/a971636819153ba259739550f8016718.jpg"
      },
      {
        id: 3,
        url:
          "https://i.pinimg.com/564x/78/bf/1c/78bf1c26d54e6c5b363f419321fe2b5f.jpg"
      }
    ],
    guessesSoFar: []
  };

  //The portion that handles the clicks of your images.
  handleClick = id => {
    console.log("you´ve been clicked!");
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    console.log("includes test", this.state.guessesSoFar.includes(id));
    if (this.state.guessesSoFar.includes(id)) {
      alert("you lose!");
      this.setState({
        guessesSoFar: [],
        currentScore: 0
      });
    } else {
      console.log("keep on trying!");
      var oldArray = this.state.picsArray;
      var shuffledArray = shuffle(oldArray);
      var newGuessesSoFar = this.state.guessesSoFar.concat(id);
      var newTopScore = this.state.topScore;
      if (newTopScore <= this.state.currentScore + 1) {
        newTopScore = this.state.currentScore + 1;
      }
      this.setState({
        picsArray: shuffledArray,
        guessesSoFar: newGuessesSoFar,
        topScore: newTopScore,
        currentScore: this.state.currentScore + 1
        //scoreBoard: this.state.scoreBoard + 1
      });
    }
  };

  didYouWin = () => {
    if (this.state.guessesSoFar.length === this.state.picsArray.length) {
      alert("You Win!");
      this.setState({
        guessesSoFar: [],
        currentScore: 0
      });
    }
  };

  render() {
    this.didYouWin();
    console.log(this.state);
    var styles = {
      picStyle: {
        height: "300px"
      }
    };
    var self = this;
    return (
      <div>
        <h1>
          Current Score: {this.state.currentScore} - Top Score:{" "}
          {this.state.topScore}
        </h1>
        {this.state.picsArray.map(function(singlePic) {
          return (
            <img
              src={singlePic.url}
              style={styles.picStyle}
              onClick={() => {
                self.handleClick(singlePic.id);
              }}
            ></img>
          );
        })}
      </div>
    );
  }
}

export default app;
