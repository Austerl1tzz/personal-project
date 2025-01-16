document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const current = parseFloat(document.getElementById('current').value);
    const turns = parseFloat(document.getElementById('turns').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(current) || isNaN(turns) || isNaN(length)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    const mu0 = 4 * Math.PI * 1e-7; 
    const magneticField = mu0 * turns * current;

    document.getElementById('result').innerHTML = `The magnetic field strength inside the solenoid is <strong>${magneticField.toFixed(6)} T</strong>.`;
});

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

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const current = parseFloat(document.getElementById('current').value);
    const turns = parseFloat(document.getElementById('turns').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(current) || isNaN(turns) || isNaN(length)) {
        document.getElementById('result').textContent = 'Please provide valid numbers for all fields.';
        return;
    }

    const mu_0 = 4 * Math.PI * Math.pow(10, -7);
    const magneticField = mu_0 * turns * current;

    document.getElementById('result').textContent = `The magnetic field strength is ${magneticField.toFixed(6)} Tesla.`;
});

function showSolution(questionNumber) {
    let solutionText = '';

    switch (questionNumber) {
        case 1:
            solutionText = `
                <h5>Solution for Question 1:</h5>
                <p>To derive the magnetic field for a toroid using Ampere's Law, follow these steps:</p>
                <ol>
                    <li>Consider a circular Amperian loop around the toroid.</li>
                    <li>Apply Ampere's Law: <em>∮ B · dl = μ₀ * I<sub>enc</sub></em>.</li>
                    <li>For a toroid, the magnetic field is tangential and its magnitude is constant along the loop.</li>
                    <li>Integrate along the loop to obtain the field strength: <em>B = μ₀ * N * I / (2πr)</em>, where N is the number of turns and r is the radius.</li>
                </ol>
            `;
            break;
        case 2:
            solutionText = `
                <h5>Solution for Question 2:</h5>
                <p>To calculate the magnetic field inside a wire of uniform current density, apply Ampere's Law:</p>
                <ol>
                    <li>Consider a cylindrical Amperian loop inside the wire.</li>
                    <li>Apply Ampere's Law: <em>∮ B · dl = μ₀ * I<sub>enc</sub></em>.</li>
                    <li>Since the current is uniformly distributed, the enclosed current is proportional to the area of the loop.</li>
                    <li>The field inside the wire is <em>B = μ₀ * J * r / 2</em>, where J is the current density and r is the radial distance from the wire's center.</li>
                </ol>
            `;
            break;
        case 3:
            solutionText = `
                <h5>Solution for Question 3:</h5>
                <p>The permeability constant (μ₀) is a fundamental physical constant that represents the ability of a vacuum to support the formation of magnetic fields. It is defined as:</p>
                <p>μ₀ = 4π × 10⁻⁷ T·m/A.</p>
                <p>It is used in Ampere's Law and is essential for calculating the magnetic field strength in various systems.</p>
            `;
            break;
        default:
            solutionText = 'Solution not available.';
    }

    document.getElementById('solutionContent').innerHTML = solutionText;
    var myModal = new bootstrap.Modal(document.getElementById('solutionModal'), {
        keyboard: false
    });
    myModal.show();
}


