// Retrieve expenses from local storage or set to an empty array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Add event listener to form submit button
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	let name = document.querySelector('#name').value;
	let amount = document.querySelector('#amount').value;
	let date = document.querySelector('#date').value;
	addExpense(name, amount, date);
});

// Add expense to list and save to local storage
function addExpense(name, amount, date) {
	let expense = { name, amount, date };
	expenses.push(expense);
	localStorage.setItem('expenses', JSON.stringify(expenses));
	showExpenses();
}

// Display expenses on the page
function showExpenses() {
	let expenseList = document.querySelector('#expense-list');
	expenseList.innerHTML = '';
	expenses.forEach(function(expense) {
		let li = document.createElement('li');
		li.innerHTML = `<span>${expense.name}</span><span>${expense.amount}</span><span>${expense.date}</span><button data-name="${expense.name}">Delete</button>`;
		expenseList.appendChild(li);
	});
}

// Add event listener to expense delete buttons
document.querySelector('#expense-list').addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		let name = event.target.dataset.name;
		delete
