function greet(name: string, birthYear: number) : string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age : number) : boolean {
  return age >= 35;
}

function countOdd(arr:number[] ): number {
  return arr.filter(num => num % 2 !== 0).length;
}

function sumEven (arr:number[]) : number {
  return arr.filter(num => (num % 2===0))
  .reduce((sum, curr) => sum + curr, 0);

}

const optionallyAdd = (num1:number, num2:number, num3:number,num4?:number,num5?:number) => {
  return num1 + num2 +num3;
}



export {
  greet,
  isOld,
  countOdd,
  sumEven
};
