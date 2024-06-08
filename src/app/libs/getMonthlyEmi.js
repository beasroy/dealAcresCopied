export const getMonthlyEmi = (amount, roi, tenure) => {
    if (!roi || !amount || !tenure) {
        return;
    }
    amount = parseFloat(amount);
    roi = parseFloat(roi) / 12 / 100;
    tenure = parseInt(tenure, 10);
    const emi = (amount * roi * (1 + roi) ** (tenure * 12)) / ((1 + roi) ** (tenure * 12) - 1);
    if (isNaN(emi)) {
        return;
    }
    // const intPay = Math.round(amount * roi * 100 * 12 * tenure) / 100;
    const intPay = emi * 12 * tenure - amount;
    const total = intPay + amount;

    return [Math.round(emi), intPay, total];
};
