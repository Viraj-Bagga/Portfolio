
const $input = document.querySelector("input");

document.querySelectorAll(".new__key").forEach( el => {
    el.onclick = () => $input.value = $input.value !== "0" ? $input.value + el.innerText : el.innerText;
})

const buffer = [];

const opCallback = opName => () => {
    let currentVal = parseFloat($input.value);

    if(opName === "percent"){
        currentVal *= 0.01;
        $input.value = currentVal;
    }
    else{
        if(buffer && buffer.lenght) {
            buffer.push({value: currentVal});

            const result = evaluate(buffer);

            buffer.push({value: result});
            buffer.push({value: opName});

            $input.value = "";
        }
        else{
            buffer.push({ value: currentVal});
            buffer.push({value: opName});

            $input.value = "";
        }
    }
}

const evaluate = buffer => {
    const secondOperand = buffer.pop().value;
    const operator = buffer.pop().value;
    const firstOperand = buffer.pop().value;

    switch(operator) {
        case "add":
            return firstOperand + secondOperand;
            break;
        case "subtract":
            return firstOperand - secondOperand;
            break;
        case "multiply":
            return firstOperand * secondOperand;
            break;
        case "divide":
            return firstOperand / secondOperand;
            break;
    }
}

for (const opName of ["add", "subtract", "multiply", "devide", "percent"]) {
    document.querySelector(`.op__key[op=${opName}]`).onclick = opCallback(opName);
}
