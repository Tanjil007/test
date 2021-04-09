const tweetForm = document.querySelector('#tweetForm');
const list = document.querySelector('#list');
const password = document.querySelector("#password");

tweetForm.addEventListener('submit', function(e) {
	const username = tweetForm.elements.username.value;
	const tweetText = tweetForm.elements.tweetText.value;
	const pass = tweetForm.elements.password.value;
	const newEl = document.createElement('li');
	const bel = document.createElement('b');
	bel.append(username)
	newEl.append(bel);
	newEl.append(`Text: ${tweetText} `);
	newEl.append(`Password: ${pass}`);
	list.append(newEl);

	e.preventDefault();
});

if (typeof(Storage) !== "undefined") {
	// Store
	localStorage.setItem("lastname", "Smith");
	// Retrieve
	document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }


// const delayColorChange = (color, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = color;
// 			resolve();
// 		}, delay)
// 	})
// }
// delayColorChange('red', 1000)
// 	.then(() => delayColorChange('green', 1000))
// 	.then(() => delayColorChange('blue', 1000))
// 	.then(() => delayColorChange('yellow', 1000))
// 	.then(() => delayColorChange('magenta', 1000))

	async function delayColorChange(color, delay) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				document.body.style.backgroundColor = color;
				resolve();
			}, delay)
		})
	}
	async function rainbow() {
		await delayColorChange('oranange', 1000)
		await delayColorChange('yellow', 1000)
		await delayColorChange('pink', 1000)
		await delayColorChange('cyan', 1000)
		await delayColorChange('black', 1000)
		await delayColorChange('olive', 1000)

	}
	rainbow ();

// const login = async (username1, password1) => {
// 	if(!username1 ) throw "please enter username"
// 	if(!password1) throw "please enter password"
// 	if(!username1 || !password1) throw "please enter username and password"
// 	if(password1.length >= 6) return "Welcome!"
// 	throw "invalid password"
// }

// login("tanjil", "tanjil")
// 	.then((msg) => {
// 		console.log('Logged In');
// 		console.log(msg);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})

const cars = {
	name: 'Mercedies',
	model: 'A201VN',
	Year: 2012,
	price: 25478900155
}