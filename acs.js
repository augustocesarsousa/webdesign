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

function raffleNumber(n){
    var number = n || 1;
    var raffle = Math.random();

    raffle = raffle * number;
    raffle = Math.floor(raffle);
    return raffle;
}