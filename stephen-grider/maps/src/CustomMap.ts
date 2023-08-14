import {Company} from "./Company"
import {User} from "./User"
// TypeScript classes can be used to create Objects or as Types

export interface Mappable {
    color: string
    location: {
        lat: number
        lng: number
    }
    markerContent(): string
}

// We created this class to restrict usages of the map, eg restrict other engeneers form setting
// the map height to 0
export class CustomMap {
    // can only be used by methods and properties inside this custom map
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {lat: 0, lng: 0}
        });
    }

    /**
     * Using Dependency Inversion Of Control Principle
     * the classes that want to use this add marker function must satisfy the interface by 
     * having the correct properties with the correct names and types
     * Instead custom map trying to accommodate all other different classes
     * we say Hey Other Classes you have to accommodate custom map 
    */
    addMarker(mappable: Mappable): void {
       const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        // we dont create the info window until the marker is clicked
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
                // content: 'Eita'
            })

            infoWindow.open(this.googleMap, marker)
        })
    }


    /**
     * Better but not best
     * Typescript limits the number of properties that can be used, removing all the other ones 
     * each might have, so in this case we can only use location
     * cos both User and City have it
     * It works for this use case but it not perfect
     * The problem is a follows
     * If we added CarLots | Park | Cinema etc
     * for every new class with a location we would need to chain it to the or
     * It will get long really fast
     * Invert the Dependency
     * Invert dependence on User, Company, CarLots, PArk, Cinema etc
     * Depend on abstractions or interfaces rather than classes
     * */
    addMarkerBetterThanBelowButNotBest(mappable: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }

    /**
     * BAD code below
     * Code duplication
     * */ 
    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     })
    // }

    // addCompanyMarker(company: Company) {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}