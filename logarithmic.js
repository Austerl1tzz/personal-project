const ctx = document.getElementById('logGraphCanvas').getContext('2d');

const logGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 100 }, (_, i) => (i + 1) * 0.1), 
        datasets: [{
            label: 'Logarithmic Function (log10)',
            data: Array.from({ length: 100 }, (_, i) => Math.log10((i + 1) * 0.1)), 
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 1,
                    callback: function (value) {
                        return value.toFixed(1); 
                    }
                }
            },
            y: {
                ticks: {
                    callback: function (value) {
                        return value.toFixed(2); 
                    }
                }
            }
        }
    }
});

function showSolution(questionNumber) {
    let solutionContent = '';

    switch (questionNumber) {
        case 1:
            solutionContent = `
                <h4>Solution:</h4>
                <p><strong>Step 1:</strong> Rewrite the logarithmic equation as an exponential equation: <em>log<sub>10</sub>(x) = 3</em> becomes <em>x = 10<sup>3</sup></em>.</p>
                <p><strong>Step 2:</strong> Simplify: <em>x = 1000</em>.</p>
                <p><strong>Answer:</strong> x = 1000</p>
            `;
            break;
        case 2:
            solutionContent = `
                <h4>Solution:</h4>
                <p><strong>Step 1:</strong> Recall that <em>log<sub>5</sub>(25)</em> means "the exponent to which <em>5</em> must be raised to get <em>25</em>".</p>
                <p><strong>Step 2:</strong> Since <em>5<sup>2</sup> = 25</em>, we have <em>log<sub>5</sub>(25) = 2</em>.</p>
                <p><strong>Answer:</strong> log<sub>5</sub>(25) = 2</p>
            `;
            break;
        case 3:
            solutionContent = `
                <h4>Solution:</h4>
                <p><strong>Step 1:</strong> Rewrite the logarithmic equation as an exponential equation: <em>log<sub>4</sub>(x) = 3</em> becomes <em>x = 4<sup>3</sup></em>.</p>
                <p><strong>Step 2:</strong> Simplify: <em>x = 64</em>.</p>
                <p><strong>Answer:</strong> x = 64</p>
            `;
            break;
    }

    document.getElementById('solutionContent').innerHTML = solutionContent;
    const solutionModal = new bootstrap.Modal(document.getElementById('solutionModal'));
    solutionModal.show();
}
