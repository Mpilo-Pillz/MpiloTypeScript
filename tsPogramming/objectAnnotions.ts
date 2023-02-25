const profile = {
    name: 'Mpilo',
    age: 6,
    coords: {
        lng: 0,
        lat: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}

const {age}: {age: number} = profile;

const {coords: {lat, lng} } = profile