'use strict';

class Airport {
    constructor(capacity = 5) {
        this.occupancy = []
        this.capacity = capacity
    }

    land = (vehicle, weather) => {
        if (this.occupancy.length >= this.capacity && weather.checkWeather === "Stormy") {
            return "Landing refused. Airport capacity reached"
        } else {
            this.occupancy.push(vehicle)
            return  "Plane has landed"
        }
    }

    takeoff = (vehicle) => {
        if (this.occupancy.length <= 0) {
            return "No planes to takeoff"
        } else {
            this.occupancy.pop(vehicle)
            return "Plane has left the airport"
        }        
    }

    setCapacity = (capacity) => {
        if (capacity < 1) {
            return "Error: capacity cannot be below 1"
        } else {
            this.capacity = capacity
        }
    }
}