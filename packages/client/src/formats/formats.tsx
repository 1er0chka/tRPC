export const formatPrice = (number: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(number);
};

export const formatPriceString = (number: string) => {
    return formatPrice(parseFloat(number))
};