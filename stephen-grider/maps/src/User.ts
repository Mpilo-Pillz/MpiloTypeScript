import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    color: string = "Pink";
    name: string;
    location: {
        lat: number;
        lng: number
    }

    constructor() {
        this.name = faker.person.firstName();
        // console.log("Prints undefined cos object is not initialised-->", this.location);
        // console.log("undefined bcuase location is undefined not null -->", this.location);
        // this.location.lng = 34;
        
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
    markerContent(): string {
        return `User Name: ${this.name}`
    }
}