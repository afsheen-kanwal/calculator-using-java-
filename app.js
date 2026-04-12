
newOne = document.getElementById("ipp");

function getvalue(e){
newOne.value += e
}

function solution(e){
    newOne.value = eval(newOne.value)
}

function clrOne(e){
    newOne.value = newOne.value.slice(0,-1)
}

function clrAll (e){
    newOne.value = " "
}




