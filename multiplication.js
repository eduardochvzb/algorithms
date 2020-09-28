// Third grade multiplcation Algorithm

function multiplyByDigit(x, d, xSize) {
    let def = `
-------------------------
    d = ${d}`
    console.log(def);

    return x.reduce((acum, s, i) => {

        let t = ((+s) * (+d));
        console.log(`
      s = ${s}
      r = ${acum[1]}
      
      t = s * d + r  ->  t = ${s} * ${d} + ${acum[1]}  ->  t = ${t}`);
        if (acum[1]) {
            t += acum[1];
        }
        if (i == xSize) {
            console.log(`
      ${x.reduce((acum,current)=>current+acum,"")} * ${d} = ${t + acum[0]}`)

            return t + acum[0];
        }
        let r = 0;
        if (t > 9) {
            r = (t - (t % 10)) / 10;
        }
        return [(t % 10) + acum[0], r];
    }, ["", 0]);
}
function addProducts(arr){
    let p = 1, q = 1;

    function currentColumn(){

    }
}
function thirdGradeMultiply(x, y) {
    let def = `-------------------------
Definiciones:
-------------------------
x : "Multiplicando"
y : "Multiplicador" 
r : "Decena acumulada"
s : "Digito de x actual"
d : "Digito de y actual"
    
x = ${x}
y = ${y}`;
    console.log(def);
    
    x = (x + "").split("").reverse();
    y = (y + "").split("").reverse();

    console.table({x,y})

    let xSize = x.length - 1;
    let z = y.reduce((acum, d) => [...acum, multiplyByDigit(x, d, xSize)], [])
    return z;

}

console.log(thirdGradeMultiply(12, 12))