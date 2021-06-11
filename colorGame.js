var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = colorPick();
var picked = document.getElementById("colorDisplay");
var d = document.querySelector("#message");
var h1 = document.querySelector("h1");
var b = document.querySelector("#reset");

b.addEventListener("click", function()
{
	colors = generateRandomColors(6);

	pickedColor = colorPick();

	picked.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = colors[i];
	}

	b.textContent = "New Colors";

	h1.style.backgroundColor = "#232323";
});

picked.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) 
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() 
	{
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor)
		{
			d.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			b.textContent = "Play Again?!!";
		}	
		else
		{
			this.style.backgroundColor = "#232323";
			d.textContent = "Try Again";
		}
	});
}

function colorPick()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color) 
{
	for (var j = 0; j < squares.length; j++) 
			{
				squares[j].style.backgroundColor = color;
				
			}
}

function generateRandomColors(num) 
{
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}