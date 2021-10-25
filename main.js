var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var snake = {
	body: [[canvas.width / 2 - 8, canvas.height / 2 - 8]],
	len: 3,
	dir: -1
};

window.addEventListener('keydown', (ev) =>
{
	if (snake.dir.length >= 3) return;
	switch (ev.code)
	{
		case 'KeyW': snake.dir = 0; break;
		case 'KeyD': snake.dir = 1; break;
		case 'KeyS': snake.dir = 2; break;
		case 'KeyA': snake.dir = 3; break;
	}
});

let pn = 0;

window.setInterval(() =>
{
	n = Math.floor(Date.now() / 1000)
	if (n != pn)
	{
		pn = n;
		switch (snake.dir)
		{
			case 0: snake.body.unshift([snake.body[0][0], snake.body[0][1] - 16]); break;
			case 1: snake.body.unshift([snake.body[0][0] + 16, snake.body[0][1]]); break;
			case 2: snake.body.unshift([snake.body[0][0], snake.body[0][1] + 16]); break;
			case 3: snake.body.unshift([snake.body[0][0] - 16, snake.body[0][1]]); break;
		}
		if (snake.body.length > snake.len) snake.body.pop();
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	snake.body.forEach((part) =>
	{
		ctx.fillRect(part[0], part[1], 16, 16);
	});
}, 1);