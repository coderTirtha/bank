document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit');
    const newDepositString = depositAmount.value;
    const newDeposit = parseFloat(newDepositString);

    const depositContainer = document.getElementById('deposit-amount');
    const prevDepositTotalString = depositContainer.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalString);

    const balanceContainer = document.getElementById('balance-amount');
    const prevBalanceTotalString = balanceContainer.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    if (newDepositString !== '') {
        // summation of new amount and previous amount
        const currentDepositTotal = prevDepositTotal + newDeposit;
        // changing the previous value of deposit section
        depositContainer.innerText = currentDepositTotal;
        const currentBalanceTotal = prevBalanceTotal + newDeposit;
        balanceContainer.innerText = currentBalanceTotal;
    } else {
        alert("Please enter a depository amount");
    }

    depositAmount.value = '';
});

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw');
    const newWithdrawString = withdrawAmount.value;
    const newWithdraw = parseFloat(newWithdrawString);

    const withdrawContainer = document.getElementById('withdraw-amount');
    const prevWithdrawTotalString = withdrawContainer.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

    const balanceContainer = document.getElementById('balance-amount');
    const prevBalanceTotalString = balanceContainer.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    if (newWithdrawString === '') {
        alert("Please enter a withdrawal amount");
    } else if (prevBalanceTotal > newWithdraw) {
        const currentWithdrawTotal = prevWithdrawTotal + newWithdraw;
        withdrawContainer.innerText = currentWithdrawTotal;
        const currentBalanceTotal = prevBalanceTotal - newWithdraw;

        balanceContainer.innerText = currentBalanceTotal;
    } else {
        alert("You have not enough balance to withdraw");
    }

    withdrawAmount.value = '';
});