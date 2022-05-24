const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function DiamondAnimation(n, Reverse, speed) {
	if (Reverse) {
		for (let i = 0; i < n; i++) {
			setTimeout(() => {
				console.log(`${" ".repeat(n - i - 1)}${"#".repeat(i + i)}`)
			}, i * speed)
		}
		setTimeout(() => {
			DiamondAnimation(n, false, speed)
		}, speed * n)
	} else {
		for (let i = n - 1; i >= 0; i--) {
			setTimeout(() => {
				try {
					console.log(`${" ".repeat(i + 1)}${"#".repeat(n - i - 3)}${"#".repeat(n - i -1)}`)
					// console.log(`${"#".repeat(i + n)}${" ".repeat(n + 1)}`)
				} catch (e) {}

			}, i * speed)
		}
		setTimeout(() => {
			DiamondAnimation(n, true, speed)
		}, speed * n)
	}

}
// var stairValue = 10
// DiamondAnimation(stairValue, true, (stairValue / stairValue) * 25)


function square(width, height) {
	// console.clear()

	console.log(`${"#".repeat(width)}`)
	for (let i = 0; i < height; i++) {
		console.log(`#${" ".repeat(width - 2)}#`)
	}
	console.log(`${"#".repeat(width)}`)
}
// var squareSize = 20
// var squareHeight = 10
// square(squareSize, squareHeight)


function PyramidSquare(width, height) {
	// console.clear()

	console.log(`${"#".repeat(width * 2)}`)
	for (let i = 1; i < height - 1; i++) {
		console.log(`#${" ".repeat(width - i )}${"@".repeat(i + i - 1)}${" ".repeat(width - i - 1)}#`)
	}
	console.log(`${"#".repeat(width * 2)}\n`)
}
// var squareSize = Math.floor(Math.random() * 50) + 1
// var squareHeight = squareSize / 2
// PyramidSquare(squareSize, squareHeight)


var options = ["PyramidSquare", "Square", "DiamondAnimation"]
let Question = () => {
	console.clear()
	rl.question(`Choose pattern: ${options.join(', ')}\n`, function (pattern) {
		if (!pattern) Question()
		rl.question('Select size: \n', function (size) {
			if (!size) {
				size = 20
			}
			size = Number(size)

			switch (pattern.toLowerCase()) {
				case "pyramidsquare":
					PyramidSquare(size, size / 2)
					break;

				case "square":
					square(size, size / 2)
					break;

				case "diamondanimation":
					DiamondAnimation(size, true, (size / size) * 25)
					break;

				default:
					console.log("Invalid input")
					break;
			}
			rl.close();
		});
	});
}
Question()
