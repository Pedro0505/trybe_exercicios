const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

sendMarsTemperature = (temp, time) => {
  setTimeout(() => console.log(`Mars temperature is: ${temp} degree Celsius`) ,time )
} 

sendMarsTemperature(getMarsTemperature(), messageDelay())
