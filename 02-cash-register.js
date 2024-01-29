const checkCashRegister = (price, cash, cid) => {
  const currency = [
    { name: "ONE HUNDRED", value: 100.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "TEN", value: 10.0 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 },
  ];

  let change = cash - price;

  const register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  if (register.total === change) {
    return { status: "CLOSED", change: cid };
  }

  if (register.total < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  const change_arr = currency.reduce((acc, curr) => {
    let value = 0;

    while (register[curr.name] > 0 && change >= curr.value) {
      change -= curr.value;
      register[curr.name] -= curr.value;
      value += curr.value;

      change = Math.round(change * 100) / 100;
    }

    if (value > 0) {
      acc.push([curr.name, value]);
    }

    return acc;
  }, []);

  if (change_arr.length < 1 || change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change_arr };
};
