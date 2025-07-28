const fs = require("fs");
const path = require("path");


function baseToDecimal(valueStr, base) {
    return BigInt(parseInt(valueStr, base));
}


function lagrangeInterpolationAtZero(points, k) {
    let result = 0n;

    for (let j = 0; j < k; j++) {
        let xj = BigInt(points[j].x);
        let yj = BigInt(points[j].y);

        let numerator = 1n;
        let denominator = 1n;

        for (let m = 0; m < k; m++) {
            if (m !== j) {
                let xm = BigInt(points[m].x);
                numerator *= -xm;
                denominator *= xj - xm;
            }
        }

        
        let term = yj * numerator / denominator;
        result += term;
    }

    return result;
}

function processTestCase(filePath) {
    const raw = fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
    const data = JSON.parse(raw);

    const n = data.keys.n;
    const k = data.keys.k;

    const points = [];

    for (const key in data) {
        if (key === "keys") continue;

        const x = parseInt(key);
        const base = parseInt(data[key].base);
        const valueStr = data[key].value;

        const y = baseToDecimal(valueStr, base);
        points.push({ x, y });
    }

    
    points.sort((a, b) => a.x - b.x);
    const selected = points.slice(0, k);

    const secret = lagrangeInterpolationAtZero(selected, k);
    return secret;
}


const secret1 = processTestCase("testcase1.json");
const secret2 = processTestCase("testcase2.json");

console.log("Secret for testcase1.json:", secret1.toString());
console.log("Secret for testcase2.json:", secret2.toString());
