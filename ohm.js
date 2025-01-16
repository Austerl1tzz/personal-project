const currentSlider = document.getElementById('current');
const resistanceSlider = document.getElementById('resistance');
const currentValueDisplay = document.getElementById('currentValue');
const resistanceValueDisplay = document.getElementById('resistanceValue');
const voltageValueDisplay = document.getElementById('voltageValue');

function updateVoltageCalculator() {
    const current = parseFloat(currentSlider.value);
    const resistance = parseFloat(resistanceSlider.value);
    const voltage = current * resistance;

    currentValueDisplay.textContent = `${current.toFixed(1)} A`;
    resistanceValueDisplay.textContent = `${resistance} Ω`;
    voltageValueDisplay.textContent = `${voltage.toFixed(1)} V`;
}


currentSlider.addEventListener('input', updateVoltageCalculator);
resistanceSlider.addEventListener('input', updateVoltageCalculator);

updateVoltageCalculator();

function showSolution(questionNumber) {
    const solutionContent = document.getElementById('solutionContent');
    let solutionHTML = '';

    switch (questionNumber) {
        case 1:
            solutionHTML = `
                <p><strong>Problem:</strong> Find the current if the voltage is 50V and the resistance is 25Ω.</p>
                <p><strong>Solution:</strong> Using Ohm's Law: <em>I = V / R</em></p>
                <p><strong>Step 1:</strong> Substitute the given values: <em>I = 50V / 25Ω</em></p>
                <p><strong>Step 2:</strong> Simplify: <em>I = 2A</em></p>
                <p><strong>Answer:</strong> I = 2A</p>`;
            break;
        case 2:
            solutionHTML = `
                <p><strong>Problem:</strong> Find the resistance if the voltage is 30V and the current is 6A.</p>
                <p><strong>Solution:</strong> Using Ohm's Law: <em>R = V / I</em></p>
                <p><strong>Step 1:</strong> Substitute the given values: <em>R = 30V / 6A</em></p>
                <p><strong>Step 2:</strong> Simplify: <em>R = 5Ω</em></p>
                <p><strong>Answer:</strong> R = 5Ω</p>`;
            break;
        case 3:
            solutionHTML = `
                <p><strong>Problem:</strong> Find the voltage if the resistance is 10Ω and the current is 0.5A.</p>
                <p><strong>Solution:</strong> Using Ohm's Law: <em>V = I × R</em></p>
                <p><strong>Step 1:</strong> Substitute the given values: <em>V = 0.5A × 10Ω</em></p>
                <p><strong>Step 2:</strong> Simplify: <em>V = 5V</em></p>
                <p><strong>Answer:</strong> V = 5V</p>`;
            break;
        default:
            solutionHTML = '<p>No solution available for this question.</p>';
    }

    solutionContent.innerHTML = solutionHTML;

    const solutionModal = new bootstrap.Modal(document.getElementById('solutionModal'));
    solutionModal.show();
}
