let secondsRemaining = 20;

function pruneImages(){

}

function counter(){
    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining == 0){
       $("#images_form").submit();
    } else {
        $("#counter").html(secondsRemaining);
       setTimeout(counter, 1000);
    }
}

setTimeout(pruneImages, secondsRemaining * 1000);
setTimeout(counter, 1000);


