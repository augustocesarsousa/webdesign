function calculateAverage(){

    var total = 0;
    var amount = arguments.length;
    var x = 0;

    while(typeof arguments[x] === "number"){
        total += arguments[x];
        x++;
    }

    return (total / amount).toFixed(2);
}