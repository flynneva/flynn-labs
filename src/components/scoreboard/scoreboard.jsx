import React, { Component } from 'react';

const baseURL = 'casablanca/scoreboard/'
const DEFAULT_QUERY = 'basketball-men/d1/2019/12/23/scoreboard.json'

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };

  }

  componentDidMount() {
    fetch(baseURL + DEFAULT_QUERY, {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify()
      })
      .then(response => response.json())
      .then(data => this.setState({ games: data.games }));
  }
  

  render() {
    const { games } = this.state;

    return (
      <div>
        <p>SCOREBOARD</p>
        { games.map(game =>
          <p>{game.game.title}</p>
        )}
      </div>
    );
  }
}

export default Scoreboard;
