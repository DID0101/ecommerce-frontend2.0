// utils.js

// Display Money in Indian Format
export const displayMoney = (n) => {
    const numFormat = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });

    return numFormat.format(n);
};

// Calculate Discount Percentage
export const calculateDiscount = (discountedPrice, originalPrice) => {
    const discountedPercent = (discountedPrice / originalPrice) * 100;

    return Math.round(discountedPercent);
};

// Calculate Total Amount
export const calculateTotal = (arr) => {
    const total = arr.reduce((accum, val) => accum + val, 0);

    return total;
};
