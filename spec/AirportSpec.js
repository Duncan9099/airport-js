'use strict'; 

describe("Airport", function() {
    let airport;
    let plane; 
    let weather;
    let checkedWeather;

    beforeEach(function() {
        airport = new Airport
        plane = 'plane'

        weather = {
            checkWeather: function(value) {
                checkedWeather = value
            }
        }

        // weather.checkWeather("Sunny")
    })

    describe('land plane', function() {
        it('increases #no of planes in airport by 1', function() {
            expect(airport.occupancy.length).toEqual(0)
            airport.land(plane) 
            expect(airport.occupancy.length).toEqual(1)
        })

        it('returns a landing confirmation message', function() {
            expect(airport.land(plane)).toEqual("Plane has landed")
        })

        it('cannot land plane if airport is full', function() {
            expect(airport.capacity).toEqual(5)
            for (let i = 0; i < airport.capacity; i++) {
                airport.land(plane)
            }
            expect(airport.occupancy.length).toEqual(5)
            expect(airport.land(plane)).toEqual("Landing refused. Airport capacity reached")
            expect(airport.occupancy.length).toEqual(5)
        })

        it('cannot land if weather is stormy', function() {
            weather.checkWeather("Stormy")
            expect(airport.land(plane, weather)).toEqual("Landing refused: Weather issues.")
        })
    })

    describe('take off plane', function() {
        it('decreases #no of planes in airport by 1', function() {
            airport.land(plane)
            expect(airport.occupancy.length).toEqual(1)
            airport.takeoff(plane)
            expect(airport.occupancy.length).toEqual(0)
        })

        it('returns a takeoff confirmation message', function() {
            airport.land(plane)
            expect(airport.takeoff(plane)).toEqual("Plane has left the airport")
        })

        it('cannot take off if no planes', function() {
            expect(airport.occupancy.length).toEqual(0)
            airport.takeoff(plane) 
            expect(airport.occupancy.length).toEqual(0)
            expect(airport.takeoff(plane)).toEqual("No planes to takeoff")
        })
    })

    describe('system designer can change capacity of airport', function() {
        it('can be increased', function() {
            airport.setCapacity(10)
            expect(airport.capacity).toEqual(10)
        })

        it('cannot be decreased below 1', function() {
            expect(airport.setCapacity(-3)).toEqual("Error: capacity cannot be below 1")
        })
    })
})