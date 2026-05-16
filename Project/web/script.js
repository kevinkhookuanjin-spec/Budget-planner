const inputIncome = document.querySelector("#income");
const inputSavings = document.querySelector("#savings");
const btnCalculate = document.querySelector("#calculateBtn");

const displayIncome = document.querySelector("#showIncome");
const displaySavings = document.querySelector("#showSavings");
const displaySpendings = document.querySelector("#showSpendings");

const formatRM = (amount) => `RM${amount.toFixed(2)}`;

const calculateBudget = () => {
  const income = Number(inputIncome.value) || 0;
  const savings = Number(inputSavings.value) || 0;
  const spending = income - savings;

  displayIncome.textContent = formatRM(income);
  displaySavings.textContent = formatRM(savings);
  displaySpendings.textContent = formatRM(spending);
};

btnCalculate.addEventListener("click", calculateBudget);
