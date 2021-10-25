var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var snake = {
	x: canvas.width / 2 - 8, 
	y: canvas.height / 2 - 8,
	dir: 0,
};

window.addEventListener('keydown', (ev) =>
{
	if (snake.dir.length >= 3) return;
	switch (ev.code)
	{
		case 'KeyW':snake.dir = 0; break;
		case 'KeyD':snake.dir = 1; break;
		case 'KeyS':snake.dir = 2; break;
		case 'KeyA':snake.dir = 3; break;
	}
});

let pn = 0;
window.setInterval(() =>
{
	n = Math.floor(Date.now() / 500)
	if (n != pn)
	{
		pn = n;
		switch (snake.dir)
		{
			case 0: snake.y -= 16; break;
			case 1: snake.x += 16; break;
			case 2: snake.y += 16; break;
			case 3: snake.x -= 16; break;
		}
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillRect(snake.x, snake.y, 16, 16);
}, 1);