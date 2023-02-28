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

const {coords: {lat, lng} }: {coords: {lat: number, lng: number}} = profile;

const importantDates: (Date | string)[] = [];
importantDates.push('2023-12-16')
importantDates.push(new Date());

const water: [string, boolean, number] = ['clear', false, 0 ];
// drink[0] = 20 throws  type error as it should be a string

// Type Alias
type Drink = [string, boolean, number];
const fizzyBubble: Drink = ["red", true, 40]