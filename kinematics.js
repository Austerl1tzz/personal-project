document.getElementById('calculate').addEventListener('click', function() {
    let velocity = parseFloat(document.getElementById('velocity').value);
    let angle = parseFloat(document.getElementById('angle').value);

    if (isNaN(velocity) || isNaN(angle) || angle < 0 || angle > 90) {
        document.getElementById('resultDisplay').innerHTML = "<div class='alert alert-danger'>Please enter valid values for both fields.</div>";
        return;
    }

    let angleInRadians = angle * (Math.PI / 180);

    let g = 9.8; 
    let timeOfFlight = (2 * velocity * Math.sin(angleInRadians)) / g;

    let range = (Math.pow(velocity, 2) * Math.sin(2 * angleInRadians)) / g;

    let maxHeight = (Math.pow(velocity, 2) * Math.pow(Math.sin(angleInRadians), 2)) / (2 * g);

    let resultHTML = `
        <h4>Calculation Results:</h4>
        <div class="alert alert-info">
            <p><strong>Time of Flight:</strong> ${timeOfFlight.toFixed(2)} seconds</p>
            <p><strong>Range:</strong> ${range.toFixed(2)} meters</p>
            <p><strong>Maximum Height:</strong> ${maxHeight.toFixed(2)} meters</p>
        </div>
    `;
    document.getElementById('resultDisplay').innerHTML = resultHTML;
});

function showSolution(questionNumber) {
    let solutionContent = '';

    switch (questionNumber) {
        case 1:
            solutionContent = `
                <h5>Solution:</h5>
                <p><strong>Given:</strong> Initial velocity = 25 m/s, Launch angle = 45°</p>
                <p><strong>Step 1:</strong> Time of flight: <em>t = (2 * u * sin(θ)) / g = (2 * 25 * sin(45°)) / 9.8</em> → <strong>t = 5.10 seconds</strong></p>
                <p><strong>Step 2:</strong> Range: <em>R = u * cos(θ) * t = 25 * cos(45°) * 5.10</em> → <strong>R = 88.99 meters</strong></p>
            `;
            break;
        case 2:
            solutionContent = `
                <h5>Solution:</h5>
                <p><strong>Given:</strong> Initial velocity = 10 m/s (vertical), Acceleration due to gravity = 9.8 m/s²</p>
                <p><strong>Step 1:</strong> Maximum height: <em>H = (V<sub>y</sub>)² / (2 * g) = (10)² / (2 * 9.8)</em> → <strong>H = 5.10 meters</strong></p>
            `;
            break;
        case 3:
            solutionContent = `
                <h5>Solution:</h5>
                <p><strong>Given:</strong> Initial velocity = 40 m/s, Launch angle = 60°</p>
                <p><strong>Step 1:</strong> Time to reach max height: <em>t = (u * sin(θ)) / g = (40 * sin(60°)) / 9.8</em> → <strong>t = 2.04 seconds</strong></p>
            `;
            break;
        default:
            solutionContent = '<p>No solution available for this question.</p>';
    }

    document.getElementById('solutionContent').innerHTML = solutionContent;
    const solutionModal = new bootstrap.Modal(document.getElementById('solutionModal'));
    solutionModal.show();
}
