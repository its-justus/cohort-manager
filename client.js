let cohort = [
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

function setup() {
    clearTable();
}

$('document').ready(setup)