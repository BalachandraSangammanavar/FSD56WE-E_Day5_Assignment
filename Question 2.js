// Question 2: https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


// Convert the UML diagram to Typescript class.- use number for double



class Circle {
    // Properties
    private radius: number;

    // Constructor
    constructor(radius: number) {
        this.radius = radius;
    }

    // Methods
    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getDiameter(): number {
        return this.radius * 2;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}
