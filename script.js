// Canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Definir tamanho do canvas
canvas.width = 600;
canvas.height = 800;

// Variáveis para rastrear movimento do mouse
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Event listener para rastrear movimento do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Função para desenhar a Mona Lisa
function drawMonaLisa() {
    // Limpar canvas
    ctx.fillStyle = '#faf8f3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar fundo (paisagem)
    drawBackground();

    // Desenhar corpo
    drawBody();

    // Desenhar braços
    drawArms();

    // Desenhar mãos
    drawHands();

    // Desenhar pescoço
    drawNeck();

    // Desenhar cabeça
    drawHead();

    // Desenhar cabelo
    drawHair();

    // Desenhar rosto
    drawFace();

    // Desenhar olhos (com interação do mouse)
    drawEyes();

    // Desenhar nariz
    drawNose();

    // Desenhar boca (sorriso característico)
    drawMouth();
}

// Desenhar fundo com paisagem
function drawBackground() {
    // Céu
    const skyGradient = ctx.createLinearGradient(0, 0, 0, 300);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(1, '#E0F6FF');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, 300);

    // Montanhas ao fundo (esquerda)
    ctx.fillStyle = '#4a5d3d';
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(150, 150);
    ctx.lineTo(300, 300);
    ctx.closePath();
    ctx.fill();

    // Montanhas ao fundo (direita)
    ctx.fillStyle = '#5a6d4d';
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(450, 180);
    ctx.lineTo(600, 300);
    ctx.closePath();
    ctx.fill();

    // Rio/água
    ctx.fillStyle = '#6BB6D6';
    ctx.fillRect(0, 300, canvas.width, 200);

    // Detalhes da água (ondas)
    ctx.strokeStyle = '#5AA5C5';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(150 + i * 100, 350 + Math.sin(Date.now() / 500 + i) * 10, 30, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Terra
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, 500, canvas.width, canvas.height - 500);
}

// Desenhar corpo
function drawBody() {
    ctx.fillStyle = '#1a0f0f';
    ctx.beginPath();
    ctx.ellipse(300, 450, 80, 120, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar braços
function drawArms() {
    // Braço esquerdo
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.ellipse(240, 450, 30, 90, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Braço direito
    ctx.beginPath();
    ctx.ellipse(360, 450, 30, 90, 0.3, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar mãos
function drawHands() {
    // Mão esquerda
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.arc(220, 560, 25, 0, Math.PI * 2);
    ctx.fill();

    // Mão direita
    ctx.beginPath();
    ctx.arc(380, 560, 25, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar pescoço
function drawNeck() {
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.ellipse(300, 320, 35, 50, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar cabeça
function drawHead() {
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.ellipse(300, 200, 90, 110, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar cabelo
function drawHair() {
    ctx.fillStyle = '#3d2817';

    // Cabelo da frente (esquerdo)
    ctx.beginPath();
    ctx.moveTo(220, 130);
    ctx.quadraticCurveTo(180, 160, 185, 220);
    ctx.quadraticCurveTo(210, 200, 240, 180);
    ctx.closePath();
    ctx.fill();

    // Cabelo da frente (direito)
    ctx.beginPath();
    ctx.moveTo(380, 130);
    ctx.quadraticCurveTo(420, 160, 415, 220);
    ctx.quadraticCurveTo(390, 200, 360, 180);
    ctx.closePath();
    ctx.fill();

    // Topo da cabeça (cabelo)
    ctx.beginPath();
    ctx.ellipse(300, 100, 85, 60, 0, 0, Math.PI);
    ctx.fill();

    // Detalhe de cabelo - tranças/ondas
    ctx.strokeStyle = '#2a1810';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.quadraticCurveTo(240 + i * 30, 100, 260 + i * 30, 160);
        ctx.stroke();
    }
}

// Desenhar rosto
function drawFace() {
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.ellipse(300, 200, 80, 100, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar olhos com seguimento do mouse
function drawEyes() {
    // Posição dos olhos
    const leftEyeX = 270;
    const leftEyeY = 170;
    const rightEyeX = 330;
    const rightEyeY = 170;
    const eyeRadius = 15;
    const pupilRadius = 8;

    // Função auxiliar para desenhar um olho
    function drawEye(eyeX, eyeY) {
        // Branco do olho
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, eyeRadius, eyeRadius + 3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Sombra do olho
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Calcular posição da pupila baseada no mouse
        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const distance = Math.min(eyeRadius - pupilRadius - 2, 6);
        const pupilX = eyeX + Math.cos(angle) * distance;
        const pupilY = eyeY + Math.sin(angle) * distance;

        // Desenhar pupila
        ctx.fillStyle = '#3d2817';
        ctx.beginPath();
        ctx.arc(pupilX, pupilY, pupilRadius, 0, Math.PI * 2);
        ctx.fill();

        // Brilho nos olhos (destaque)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(pupilX - 3, pupilY - 3, 3, 0, Math.PI * 2);
        ctx.fill();
    }

    // Desenhar ambos os olhos
    drawEye(leftEyeX, leftEyeY);
    drawEye(rightEyeX, rightEyeY);

    // Pálpebras
    ctx.strokeStyle = '#3d2817';
    ctx.lineWidth = 1.5;

    // Pálpebra superior esquerda
    ctx.beginPath();
    ctx.ellipse(leftEyeX, leftEyeY - 8, eyeRadius, 5, 0, 0, Math.PI);
    ctx.stroke();

    // Pálpebra superior direita
    ctx.beginPath();
    ctx.ellipse(rightEyeX, rightEyeY - 8, eyeRadius, 5, 0, 0, Math.PI);
    ctx.stroke();
}

// Desenhar nariz
function drawNose() {
    ctx.fillStyle = '#c89968';

    // Forma do nariz
    ctx.beginPath();
    ctx.moveTo(300, 190);
    ctx.lineTo(295, 230);
    ctx.lineTo(305, 230);
    ctx.closePath();
    ctx.fill();

    // Detalhes das narinas
    ctx.fillStyle = '#a67c52';
    ctx.beginPath();
    ctx.ellipse(297, 235, 2, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(303, 235, 2, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar boca (sorriso característico da Mona Lisa)
function drawMouth() {
    ctx.strokeStyle = '#8B4545';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // Sorriso principal
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 265, 320, 270);
    ctx.stroke();

    ctx.beginPath();
    ctx.quadraticCurveTo(300, 265, 280, 270);
    ctx.stroke();

    // Preenchimento leve da boca
    ctx.fillStyle = '#d4956f';
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 260, 320, 270);
    ctx.quadraticCurveTo(300, 275, 280, 270);
    ctx.quadraticCurveTo(300, 260, 300, 260);
    ctx.fill();

    // Sobrancelhas
    ctx.strokeStyle = '#3d2817';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';

    // Sobrancelha esquerda
    ctx.beginPath();
    ctx.quadraticCurveTo(270, 145, 285, 155);
    ctx.stroke();

    // Sobrancelha direita
    ctx.beginPath();
    ctx.quadraticCurveTo(330, 145, 315, 155);
    ctx.stroke();
}

// Função de animação
function animate() {
    drawMonaLisa();
    requestAnimationFrame(animate);
}

// Iniciar animação
animate();