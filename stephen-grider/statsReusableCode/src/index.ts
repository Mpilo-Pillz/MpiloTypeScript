import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(new WinsAnalysis("West Ham"), new ConsoleReport());
const summary = new Summary(new WinsAnalysis("West Ham"), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
