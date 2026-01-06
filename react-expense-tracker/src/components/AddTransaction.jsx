import React, { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return alert("Please enter both fields");

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    onAdd(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6 w-80"
    >
      <h3 className="text-xl font-semibold mb-3">Add New Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border w-full p-2 mb-3 rounded"
      />
      <input
        type="number"
        placeholder="Amount (negative = expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border w-full p-2 mb-3 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded w-full"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
