// Function to generate two single-digit random numbers and calculate their sum
const generateNumbersAndSum = (): [number, number, number, string] => {
    const num1: number = Math.floor(Math.random() * 10);
    const num2: number = Math.floor(Math.random() * 10);
    const sum: number = num1 + num2;
    const operator: string = '+';
    return [num1, num2, sum, operator];
  };
  
  export default generateNumbersAndSum;
  