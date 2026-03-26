const ctx = document.getElementById('myChart');

async function getData() {
    const response = await fetch('ice-cream-data.json');
    const data = await response.json();

    displayChart(data);
}

getData();

function displayChart(data) {
    console.log(data);

    const iceCreamLabels = data.map(function(item) {
        return item.flavor;
    })

    console.log(iceCreamLabels)

    const iceCreamVotes = data.map(function(item) {
        return item.votes;
    });
    
    console.log(iceCreamVotes)

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: iceCreamLabels,
            datasets: [{
                label: '# of Votes',
                data: iceCreamVotes,
                borderWidth: 1,
                borderColor: '#000000',
                backgroundColor: [
                    'white',
                    'blue',
                    'yellow',
                    'green',
                    'purple',
                    'orange',
                ],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Favorite colors'
                }
            }
        }
    });
}