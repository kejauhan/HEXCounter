var button = document.getElementById('changeButton')
var text = document.getElementById('changeColour')
var home = document.getElementById('change1')

var generator = function(){
    randomColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    //console.log(newColour.length);
    if(randomColor.length < 7){
        generator();
    }
}
button.addEventListener('click', function(){ //Untuk Menjalankan Generator HEX
    generator();

    document.body.style.background = randomColor;
    button.style.color = randomColor;
    text.innerText = randomColor;
});

home.addEventListener('click', function(){
    window.location.href = "../index.html";  //untuk kembali ke HOME
})

