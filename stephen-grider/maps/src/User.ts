import { faker } from "@faker-js/faker";

class User {
    name: string;
    location: {
        lat: number;
        lng: number
    }

    constructor() {
        this.name = faker.person.firstName();
        console.log("Prints undefined cos object is not initialised-->", this.location);
        console.log("undefined bcuase location is null -->", this.location);
        this.location.lng = 34;
        
        
    }
}