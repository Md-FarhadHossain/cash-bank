// Login button event handler

let submitArea = document.querySelector('.submit-area');
let clickButton = document.getElementById('clearButton');
let transitionArea = document.querySelector('.transition-area');
clickButton.addEventListener('click', function(event){
    submitArea.style.display = "none";
    transitionArea.style.display = "block";

})

// Deposit button event handler

let depositButton = document.querySelector('#deposit-button');
depositButton.addEventListener('click',function(event){

    let depositAmount = document.getElementById('deposit-amount').value;
    let depositNumber = parseFloat(depositAmount);

    let depositDollars = document.getElementById('deposit-dollars').innerText;
    let depositDollarNumber = parseFloat(depositDollars);

    let totalDeposit = depositNumber + depositDollarNumber;

    document.getElementById('deposit-dollars').innerText = totalDeposit;

    let totalBlance = document.getElementById('total-blance').innerText;
    let totalNumber = parseFloat(totalBlance)
    let currentBlance = depositNumber + totalNumber;

    document.getElementById('total-blance').innerText = currentBlance;

    document.getElementById('deposit-amount').value = "";



})

// Withdraw button event handler

let withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function(){

    let withdrawAmount = document.getElementById('withdraw-amount').value;
    let withdrawNumber = parseFloat(withdrawAmount);
    let withdrawTotalBlance = document.getElementById('total-blance').innerText;

    
    let currtentWithdraw = withdrawTotalBlance - withdrawNumber ;
    document.getElementById('total-blance').innerHTML = currtentWithdraw;


    let withdrawBlance = document.getElementById('withdraw-blance').innerText;
    let withdrawBlanceNumber = parseFloat(withdrawBlance)
    let mainwithraw = withdrawNumber + withdrawBlanceNumber;
    document.getElementById('withdraw-blance').innerText = mainwithraw;

    document.getElementById('withdraw-amount').value = "";





})
