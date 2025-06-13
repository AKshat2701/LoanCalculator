function calculateLoan() {
  const loanAmountValue = parseFloat(
    document.getElementById("loan-amount").value
  );
  const interestRateValue = parseFloat(
    document.getElementById("Instrest-rate").value
  );
  const monthsToPayValue = parseFloat(
    document.getElementById("months-to-pay").value
  );

  const interest =
    (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  const monthlyPayment = loanAmountValue / monthsToPayValue + interest;

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
