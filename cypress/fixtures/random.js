//function used to generate a random 4 digit number needed for each test registration
export function generateRandomNumber(){
    return Math.floor(Math.random() * 9000 + 1000);
}
        