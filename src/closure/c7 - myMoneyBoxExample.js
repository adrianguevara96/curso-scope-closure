// function moneyBox(coins) {
//     let saveCoins = 0;

//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);


function moneyBoxClosure() {
    let saveCoins = 1;

    function countCoins(coins){
        // console.log(saveCoins, coins)
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    // console.log("countCoins: ", countCoins);

    return countCoins;
}

const myMoneyBox = moneyBoxClosure();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBoxClosure();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);
