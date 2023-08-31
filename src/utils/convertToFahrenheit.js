export const convertToFahrenheit = (tempF) => {
    const tempC = (tempF - 32) * 5 / 9;
    return Math.round(tempC);
};