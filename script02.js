const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const circle = {
    x: 0,
    y: 0,
    amplitude: 2,
    angle: 0,
    phase: 0,
    diam: 0.4,
};

const circle2 = {
    x: 0,
    y: 100,
    amplitude: circle.amplitude + 1,
    angle: 0,
    phase: 0,
    diam: 0.4,
};

const circle3 = {
    x: 0,
    y: 100,
    amplitude: circle2.amplitude + 2,
    angle: 0,
    phase: 0,
    diam: 0.4,
};

function Circ1() {
    ctx.fillStyle = "blue";
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle.x = circle.x + 0.3;  // Movendo o círculo para a direita

    // Atualizando a posição y do círculo com uma onda senoidal
    circle.y = 135 + circle.amplitude * Math.sin(circle.angle + circle.phase);
    circle.angle += 0.05;

    // Desenhando o círculo
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.diam, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //Quadrado
    ctx.beginPath();
    ctx.rect(circle.x - (circle.diam), circle.y, circle.diam * 2, canvas.height);
    ctx.fill();

    // Verificar se o círculo ultrapassou o limite direito do canvas
    if (circle.x > canvas.width + circle.diam) {
        circle.x = 0;  // Mover o círculo de volta para o início
    }

    requestAnimationFrame(Circ1);
}

function Circ2() {
    ctx.fillStyle = "red";
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle2.x = circle.x + 0.3;  // Movendo o círculo para a direita

    // Atualizando a posição y do círculo com uma onda senoidal
    circle2.y = circle.y - 20 + circle2.amplitude * Math.sin(circle2.angle + circle2.phase);
    circle2.angle += 0.05;

    // Desenhando o círculo
    ctx.beginPath();
    ctx.arc(circle2.x, circle2.y, circle2.diam, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //Quadrado
    ctx.beginPath();
    ctx.rect(circle2.x - (circle2.diam), circle2.y, circle2.diam * 2, circle.y - circle2.y);
    ctx.fill();

    // Verificar se o círculo ultrapassou o limite direito do canvas
    if (circle2.x > canvas.width + circle2.diam) {
        circle2.x = 0;  // Mover o círculo de volta para o início
    }

    requestAnimationFrame(Circ2);
}

function Circ3() {
    ctx.fillStyle = "green";
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle3.x = circle2.x + 0.3;  // Movendo o círculo para a direita

    // Atualizando a posição y do círculo com uma onda senoidal
    circle3.y = circle2.y - 20 + circle3.amplitude * Math.sin(circle3.angle + circle3.phase);
    circle3.angle += 0.05;

    // Desenhando o círculo
    ctx.beginPath();
    ctx.arc(circle3.x, circle3.y, circle3.diam, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //Quadrado
    ctx.beginPath();
    ctx.rect(circle3.x - (circle3.diam), circle3.y, circle3.diam * 2, circle2.y - circle3.y);
    ctx.fill();

    // Verificar se o círculo ultrapassou o limite direito do canvas
    if (circle3.x > canvas.width + circle3.diam) {
        circle3.x = 0;  // Mover o círculo de volta para o início
    }

    requestAnimationFrame(Circ3);
}

// Iniciando a animação
Circ1();
Circ2();
Circ3();
