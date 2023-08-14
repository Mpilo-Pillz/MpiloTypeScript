import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

/**
 * helping typescript help me
 * we use implements so that typescript takes us to
 *  the class that does not satisfy the contract as opposed to an error where we consume
 * */ 

export class Company implements Mappable {
    color: string = "purple";
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number
    }

    constructor() {
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent(): string {
        return `
        <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `
    }
}