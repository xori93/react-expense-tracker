import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-80">
      <h3 className="text-xl font-semibold mb-3">History</h3>
      <ul>
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-center">No transactions yet.</p>
        ) : (
          transactions.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between items-center p-2 border-b ${
                t.amount > 0 ? "border-green-400" : "border-red-400"
              }`}
            >
              <span>{t.text}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`${
                    t.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {t.amount > 0 ? "+" : ""}
                  {t.amount}
                </span>
                <button
                  onClick={() => onDelete(t.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
