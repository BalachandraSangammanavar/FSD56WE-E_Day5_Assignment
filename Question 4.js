// Question 4: write a class to calculate the uber price.

class UberPriceCalculator {
    baseFare: number;
    costPerKilometer: number;
    costPerMinute: number;
    bookingFee: number;

    constructor(baseFare: number, costPerKilometer: number, costPerMinute: number, bookingFee: number) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInKilometers: number, durationInMinutes: number): number {
        const distanceCost = this.costPerKilometer * distanceInKilometers;
        const durationCost = this.costPerMinute * durationInMinutes;

        const totalPrice = this.baseFare + distanceCost + durationCost + this.bookingFee;
        return totalPrice;
    }
}

// Example usage
const uberCalculator = new UberPriceCalculator(5, 1.5, 0.2, 2);
const distance = 10; // in kilometers
const duration = 20; // in minutes

const totalPrice = uberCalculator.calculatePrice(distance, duration);
console.log("Total Uber Price: $" + totalPrice.toFixed(2));
