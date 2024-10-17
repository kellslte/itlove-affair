
export const formatMoney = (number: any = 0) => {
    // const rr = &#8358;
    const money = parseFloat(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return <span>&#8358;{money}</span>;
  };