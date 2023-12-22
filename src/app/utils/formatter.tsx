export const  formatMoney = (number:number) => {
    const parts = number.toFixed(2).toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedMoney = `${integerPart}.${parts[1]}`;
    return formattedMoney;
}