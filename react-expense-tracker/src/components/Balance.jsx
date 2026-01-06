import React from "react";

const Balance = ({ transactions }) => {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((amt) => amt < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Balance: ${total}</h2>
      <div className="flex justify-center gap-6 text-lg">
        <span className="text-green-600">Income: ${income}</span>
        <span className="text-red-600">Expense: ${expense}</span>
      </div>
    </div>
  );
};

export default Balance;
