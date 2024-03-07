import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./matchResult";
import { DataReader } from "./MatchReader";

// we need to use this class on other projects as well

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
