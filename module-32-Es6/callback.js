


function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetNight(name){
    console.log('Good Night', name)
}

function greetEvening(name){
    console.log('Good Evening', name)
}

function greetingHandler(name){
    console.log('Good Morning', name)
}

greeting(greetingHandler, 'shahidul islam shohid')
greeting(greetingHandler, 'Tom brady')
greeting(greetingHandler, 'Tom cruise')


greeting(greetEvening, 'Tom solaiman')
greeting(greetEvening, 'salman')

greeting(greetNight, 'Rasel')


function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)