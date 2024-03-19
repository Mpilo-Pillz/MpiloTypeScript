import fs from "fs";
import { dateStringToDate } from "../src/utils";
import { MatchResult } from "../src/matchResult";

// we need to use this class on other projects as well

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
