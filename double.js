const ctx = document.getElementById('doubleAngleGraphCanvas').getContext('2d');

const doubleAngleChart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: [], 
        datasets: [
            {
                label: 'sin(2θ)',
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                data: [],
            },
            {
                label: 'cos(2θ)',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                data: [], 
            },
            {
                label: 'tan(2θ)',
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                data: [], 
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Graph of Double Angle Functions'
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 0.5,
                    min: -2 * Math.PI,
                    max: 2 * Math.PI
                },
                title: {
                    display: true,
                    text: 'θ (in radians)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Function Value'
                }
            }
        }
    }
});

function generateGraphData() {
    const thetaValues = [];
    const sinValues = [];
    const cosValues = [];
    const tanValues = [];

    for (let theta = -2 * Math.PI; theta <= 2 * Math.PI; theta += 0.1) {
        thetaValues.push(theta.toFixed(2)); 
        sinValues.push(Math.sin(2 * theta).toFixed(3));
        cosValues.push(Math.cos(2 * theta).toFixed(3)); 
        tanValues.push(Math.tan(2 * theta).toFixed(3)); 
    }

    doubleAngleChart.data.labels = thetaValues;
    doubleAngleChart.data.datasets[0].data = sinValues;
    doubleAngleChart.data.datasets[1].data = cosValues;
    doubleAngleChart.data.datasets[2].data = tanValues;

    doubleAngleChart.update();
}

generateGraphData();


function showSolution(questionNumber) {
    let solutionContent = '';
    switch (questionNumber) {
        case 1:
            solutionContent = `<strong>Solution:</strong>
                                <p><strong>Step 1:</strong> Use the formula <em>sin(2θ) = 2sin(θ)cos(θ)</em>.</p>
                                <p><strong>Step 2:</strong> Substitute the values of <em>sin(θ) = 5/13</em> and <em>cos(θ) = 12/13</em>: 
                                <em>sin(2θ) = 2(5/13)(12/13) = 120/169</em>.</p>
                                <p><strong>Answer: sin(2θ) = 120/169</strong></p>`;
            break;
        case 2:
            solutionContent = `<strong>Solution:</strong>
                                <p><strong>Step 1:</strong> Use the formula <em>cos(2θ) = cos²(θ) - sin²(θ)</em>.</p>
                                <p><strong>Step 2:</strong> Substitute the values of <em>cos(θ) = 3/5</em> and <em>sin(θ) = 4/5</em>: 
                                <em>cos(2θ) = (3/5)² - (4/5)² = 9/25 - 16/25 = -7/25</em>.</p>
                                <p><strong>Answer: cos(2θ) = -7/25</strong></p>`;
            break;
        case 3:
            solutionContent = `<strong>Solution:</strong>
                                <p><strong>Step 1:</strong> Use the formula <em>tan(2θ) = 2tan(θ) / (1 - tan²(θ))</em>.</p>
                                <p><strong>Step 2:</strong> Substitute the value of <em>tan(θ) = 2</em>: 
                                <em>tan(2θ) = 2(2) / (1 - 2²) = 4 / (1 - 4) = 4 / -3 = -4/3</em>.</p>
                                <p><strong>Answer: tan(2θ) = -4/3</strong></p>`;
            break;
    }
    
    document.getElementById('solutionContent').innerHTML = solutionContent;
    const modal = new bootstrap.Modal(document.getElementById('solutionModal'));
    modal.show();
}
