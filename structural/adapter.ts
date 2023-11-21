//Adapter Interface
interface TemperatureAdapter {
    getCelsiusTemperature(): number;
    getFahrenheitTemperature(): number;
}

//Adaptee
class CelsiusTemperature {
    private temperature: number;
    constructor(temperature: number) {
        this.temperature = temperature;
    }
    getTemperature() {
        return this.temperature
    }
}

//Adapter Class
class CelsiusToFahrenheitAdapter implements TemperatureAdapter {
    celsiusTemperature: CelsiusTemperature;

    constructor(celsiusTemperature: CelsiusTemperature) {
        this.celsiusTemperature = celsiusTemperature;
    }
    getCelsiusTemperature() {
        return this.celsiusTemperature.getTemperature();
    }
    getFahrenheitTemperature() {
        return this.celsiusTemperature.getTemperature() + 75;
    }
}

//Client Code
const celsiusTemperature = new CelsiusTemperature(25);
const adapter = new CelsiusToFahrenheitAdapter(celsiusTemperature);

console.log("Temperature in Celsius:", adapter.getCelsiusTemperature());
console.log("Temperature in Fahrenheit:", adapter.getFahrenheitTemperature());
