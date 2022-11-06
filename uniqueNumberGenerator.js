let allUniqueCard = [];
let customerInfo = [
    { name: 'Mr Rashed', birthYear: 1999, currentYear: 2022, district: 'Dhaka', postNo: 1200, priority: 2 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 21 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 111 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 11 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 12 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 66 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 100 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 10 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 7 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 5 },
    { name: 'Mr Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 3 },
];

function createGiftObject(cardNumber, gift, priority) {
    return {
        cardNumber: cardNumber,
        gift: gift,
        priority: priority
    }
}

// adding padding 0 and serial in last position
function addSerialInLastPositon(uniqueNumber, cardSerial) {
    let returnString = '';
    let lastIndex = 15;
    let serial = cardSerial.toString();
    for (let j = 0; j < serial.length; j++) {
        uniqueNumber[lastIndex--] = serial[j];
    }
    for (let i = 10; i < uniqueNumber.length; i++) {
        if (typeof uniqueNumber[i] == 'undefined') {
            uniqueNumber[i] = 0;
        }
    }
    for (let i = 0; i < uniqueNumber.length; i++) {
        returnString += uniqueNumber[i];
    }
    return returnString;
}

function isEven(cardNum) {
    let lastDegit = cardNum[15];
    if ((lastDegit % 2) == 0) {
        return 'R'
    } else {
        return 'W'
    }
}

function cardDistribution(info) {
    let uniqueNumber = new Array(16);
    let uniqueStringNum = '';
    var cardSerial = 0;//to track serial
    let arrayObjectWithGift = [];

    for (const x of info) {
        let cYear = (x.currentYear.toString());
        cYear = cYear[2] + cYear[3];

        let dis = (x.district[0] + x.district[1]).toUpperCase();

        let pNo = (x.postNo.toString());
        pNo = pNo[0] + pNo[1];

        let birYear = x.birthYear.toString();

        uniqueStringNum = dis + cYear + pNo + birYear;
        for (let i = 0; i < uniqueStringNum.length; i++) {
            uniqueNumber[i] = uniqueStringNum[i];
        }
        cardSerial++;
        let cardNumber = addSerialInLastPositon(uniqueNumber, cardSerial)
        let giftObj = createGiftObject(cardNumber, isEven(cardNumber), x.priority);
        arrayObjectWithGift.push(giftObj);
    }

    //sorting objectWithGift with the priority

    for (let i = 0; i < arrayObjectWithGift.length - 1; i++) {
        let iPriority = arrayObjectWithGift[i].priority;
        let count = i;
        for (let j = i + 1; j < arrayObjectWithGift.length; j++) {
            if (iPriority > arrayObjectWithGift[j].priority) {
                iPriority = arrayObjectWithGift[j].priority;
                count = j;
            }
        }
        let temp = arrayObjectWithGift[i];
        arrayObjectWithGift[i] = arrayObjectWithGift[count];
        arrayObjectWithGift[count] = temp;
    }




    return arrayObjectWithGift;

}
console.log(cardDistribution(customerInfo));