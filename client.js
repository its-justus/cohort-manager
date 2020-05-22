let cohorts = [
    {
        name: 'Alpha',
        status: 'Tier 3',
        count: 10
    },
    {
        name: 'Ada',
        status: 'Tier 2',
        count: 13,
    },
    {
        name: 'Babbage',
        status: 'Recruiting',
        count: 0
    },
    {
        name: 'Cython',
        status: 'Recruiting',
        count: 0
    }
];

function clearTable(){
    $('table tbody').empty();
}

function refreshTable(){
    clearTable();
    let tBody = $('table tbody');
    for(let cohort of cohorts){
        let tRow = $('<tr></tr>');
        for(let key in cohort){
            let tCell = $(`<td>${cohort[key]}</td>`);
            tRow.append(tCell);
        }
        tRow.append($('<button>Delete</button>'));
        tBody.append(tRow);
    }
}

function setup() {
    // set up DOM
    refreshTable();
    $('#buttonClearTable').on('click', function(){
        $('table tbody').empty();
    });
    
}

$('document').ready(setup)