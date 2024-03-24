class FootballMatch {
  players: Players;
  field: Field;
  ball: Ball;
  officials: Officials;

  constructor(
    players: Players,
    field: Field,
    ball: Ball,
    officials: Officials
  ) {
    this.players = players;
    this.field = field;
    this.ball = ball;
    this.officials = officials;
  }
}

class Players {
  number: number = 11;
}

class Field {
  size = 100;
}

class Ball {
  size = 5;
}

class Officials {
  numberOfOccicials = 5;
}
function constructor() {
  throw new Error("Function not implemented.");
}

const players = new Players();
const ball = new Ball();
const officials = new Officials();
const field = new Field();

const footballMatch = new FootballMatch(players, field, ball, officials);
