let fruits = ['grape', 'kiwi', 'orange'];
function printFruit() {
	let favFruit = fruits[2];
	let leastFav = fruits[1];
	console.log(fruits[0]);
	
	function printFavFruit() {
		console.log(favFruit);
	}
	printFavFruit();
	console.log(leastFav);
}
	

printFruit();
myName();
function myName(){
	console.log('David');
}



//Why was the printFavFruit function able to log favFruit? Because the functions are hoisted and favFruit was defined prior to calling the function. 