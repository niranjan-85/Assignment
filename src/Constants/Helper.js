
const idSet = new Set()

const generateId = () => {
    let randomNumber = Math.floor((Math.random() * (10000000 - 50000000)) + 50000000);
    if (idSet.has(randomNumber)) return generateId();
    idSet.add(randomNumber)
    return randomNumber;
}

export { generateId }