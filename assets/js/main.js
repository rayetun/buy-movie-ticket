const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.sold)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//Update total ticket and price
function updateSelectedCount(){
	const selectedSeats = document.querySelectorAll('.row .seat.selected');

	const selectedSeatsCount = selectedSeats.length;

	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;

}
//Movie Select Event
movieSelect.addEventListener('change', e => {
	ticketPrice = +e.target.value;
	updateSelectedCount();
})


// Seat select Event
container.addEventListener('click', e => {
	if(e.target.classList.contains('seat') && !e.target.classList.contains('sold')){
		e.target.classList.toggle('selected');

		updateSelectedCount();
	}
})
