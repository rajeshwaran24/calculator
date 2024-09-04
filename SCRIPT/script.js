const output = document.getElementById('input')

// to take the value in input feald 
function display(number){
    output.value += number
}
function calculate(){
    try{
        output.value = eval(output.value)
    }
    catch(error){
        alert('Invalid')
    }
}
function clearDisplay(){
    output.value = ''
}
function del(){
    output.value = output.value.slice(0,-1)
}