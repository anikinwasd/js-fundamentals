function burgerBus(input) {
    let numberOfCities = Number(input.shift());
    let profit = 0;
    let totalProfit = 0;
    let specialEvent = true;

    for (let i = 1; i <= numberOfCities; i++) {
        let cityName = input.shift();
        let ownerIncome = Number(input.shift());
        let ownerExpenses = Number(input.shift());

        if (i % 5 === 0) {
            ownerIncome -= (ownerIncome * 0.1);
            specialEvent = false;
        } else {
            specialEvent = true;
        }

        if (specialEvent) {
            if (i % 3 === 0) {
                ownerExpenses += (ownerExpenses * 0.5);
            }
        }


        profit = ownerIncome - ownerExpenses;
        totalProfit += profit;

        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);

    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

// burgerBus(["3",
//     "Sofia",
//     "895.67",
//     "213.50",
//     "Plovdiv",
//     "2563.20",
//     "890.26",
//     "Burgas",
//     "2360.55",
//     "600.00"]);

burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"]);

