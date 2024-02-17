function sorting(arr) {
    arr = arr.sort((a, b) => a - b);

    let sortedArr = [];

    while (arr.length > 0) {
        let biggestNum = arr.pop();
        sortedArr.push(biggestNum);

        let smallestNum = arr.shift();
        sortedArr.push(smallestNum);
    }

    console.log(sortedArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);