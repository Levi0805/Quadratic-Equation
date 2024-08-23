function Solve() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let delta = b*b - 4*a*c;
    let x = 0;
    let x1 = 0;
    let x2 = 0;
    if (delta<0){
        document.getElementById("result").innerHTML = "No Solution";
    }
    else if (delta == 0){
        x = -b/2*a;
        document.getElementById("result").innerHTML = "The equation has 1 solution is x = " + x;
    }
    else {
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById("result").innerHTML = "The equation has 2 solution" + " x1 = " + x1 + " and  x2 = " + x2 
    } 
}