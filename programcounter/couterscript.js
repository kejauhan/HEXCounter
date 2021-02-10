function add(){
result += 1;
counter();
}

function minus(){
result -= 1;
counter();
}

let result = 0;

function counter(){
    if(result >= 0 && result <= 5){
        document.getElementById("counterResult").innerHTML = result;
        document.querySelector(".counterResult").style.backgroundColor = "grey";
    }
    else if(result > 5){
        document.getElementById("counterResult").innerHTML = result;
        document.querySelector(".counterResult").style.backgroundColor = "green";
    }
    else if(result >= -5 && result < 0){
        document.getElementById("counterResult").innerHTML = result;
        document.querySelector(".counterResult").style.backgroundColor = "yellow";
    }
    else if(result > -10 && result < -5){
        document.getElementById("counterResult").innerHTML = result;
        document.querySelector(".counterResult").style.backgroundColor = "purple";
    }
    else if (result = 10){
        alert("Back to home again!");
        document.getElementById("counterResult").innerHTML = result;
        window.location.href = '../index.html';
    }
}
