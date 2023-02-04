const calculateSum = (a, b) => {
    return a + b
}


const main = () => {
    const [_cmd, _file, firstNumber, secondNumber] = process.argv
    const res = calculateSum(parseInt(firstNumber), parseInt(secondNumber));
    console.log(res);
}

main()