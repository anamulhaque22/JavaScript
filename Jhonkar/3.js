function deliveryCost(numberOfTshirt) {
    //error messages
    if (typeof numberOfTshirt == 'number' && numberOfTshirt % 1 !== 0) {
        return 'Please enter an Integer value of tshirt';
    }
    //error messeage two
    if (numberOfTshirt < 0) {
        return 'Please enter a positive value of tshirt'
    }

    // code goes here below

    //assign the delevery charges
    const first100DeliveryCharge = 100;
    const second100DeliveryCharge = 80;
    const restDeliveryCharge = 50;
    if (numberOfTshirt <= 100) { // first 100 t-shirt delivery charge
        let first100Charge = numberOfTshirt * first100DeliveryCharge;
        return first100Charge;
    }
    else if (numberOfTshirt <= 200) { // second 100 t-shirt delivery charge
        let first100 = 100 * first100DeliveryCharge;
        let second100 = numberOfTshirt - 100;
        let second100Charge = second100 * second100DeliveryCharge;

        let second100Total = first100 + second100Charge;
        return second100Total;
    }
    else { // rest t-shirt delivery charge
        let first100 = 100 * first100DeliveryCharge;
        let second100 = 100 * second100DeliveryCharge;
        let restCharge = numberOfTshirt - 200;
        let rest = restCharge * restDeliveryCharge;

        let restTotalCharge = first100 + second100 + rest;
        return restTotalCharge;
    }
}
deliveryCost();