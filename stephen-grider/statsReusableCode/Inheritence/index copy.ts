import { MatchReader } from "./MatchReader";
import { MatchResult } from "../src/matchResult";

// const reader = new CsvFileReader("football.csv");
const reader = new MatchReader("football.csv");
reader.read();

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`ManUnited won ${manUnitedWins} games`);

// const reader = new CsvFileReader("football.csv");
// const reader = new MatchReader("football.csv");
// reader.read();

// Create an object that satisfies the 'dataReader' inderface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the data reader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`ManUnited won ${manUnitedWins} games`);
