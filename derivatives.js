const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");
const slider = document.getElementById("xValue");
const display = document.getElementById("xValueDisplay");

function f(x) {
    return x * x;
}

function showSolution(questionNumber) {
    const answers = {
        1: "Solution for Question 1:<br> Step 1: Differentiate 5x<sup>3</sup> to get 15x<sup>2</sup>.<br> Step 2: Differentiate -2x to get -2.<br> Final Answer: f'(x) = 15x<sup>2</sup> - 2.",
        2: "Solution for Question 2: [Your answer here]",
        3: "Solution for Question 3: [Your answer here]",
    };

    const solutionContent = document.getElementById("solutionContent");

    solutionContent.innerHTML = answers[questionNumber];

    const modal = new bootstrap.Modal(document.getElementById('solutionModal'));
    modal.show();
}

function drawGraph(tangentX) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    for (let x = -10; x <= 10; x += 0.1) {
        const canvasX = canvas.width / 2 + x * 30;
        const canvasY = canvas.height / 2 - f(x) * 30;
        if (x === -10) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();

    const slope = 2 * tangentX; 
    const tangentY = f(tangentX);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    const xStart = -10;
    const xEnd = 10;
    ctx.moveTo(
        canvas.width / 2 + xStart * 30,
        canvas.height / 2 - (slope * xStart + (tangentY - slope * tangentX)) * 30
    );
    ctx.lineTo(
        canvas.width / 2 + xEnd * 30,
        canvas.height / 2 - (slope * xEnd + (tangentY - slope * tangentX)) * 30
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + tangentX * 30, canvas.height / 2 - tangentY * 30, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}

drawGraph(0);

slider.addEventListener("input", () => {
    const x = parseFloat(slider.value);
    display.textContent = x.toFixed(1);
    drawGraph(x);
});