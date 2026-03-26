async function getData() {
    const response = await fetch('friends.json');
    const data = await response.json();
    console.log(data)
    displayGraph(data);
}

getData();

function displayGraph(data) {
    const peopleList = data.people.map(function(item) {
        return {
            data: {
                id: item.id,
            }
        }
    });

    console.log(peopleList);

    const friendshipsList = data.friendships.map(function(item){
        return {
            data: {
                id: item.source + item.target,
                source: item.source,
                target: item.target,
            }
        }
    })
    var cy = cytoscape({

        container: document.getElementById('cy'), // container to render in

        elements: peopleList.concat(friendshipsList),

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': '#ff0000',
                    'label': 'data(id)'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ff00',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                }
            }
        ],

        layout: {
            name: 'grid',
            rows: 1
        }

    });
}

