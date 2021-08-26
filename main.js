function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DmOrS2yNC/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error)
    {
    console.error(error);       
    }
    else
    {
    console.log(results);
    }

    var dog = 0
    var cat = 0
    var lion = 0

    random_r = Math.floor(Math.random()* 255) +1;
    random_g = Math.floor(Math.random()* 255) +1;
    random_b = Math.floor(Math.random()* 255) +1;
    document.getElementById("result_label").innerHTML = " Detected voice -" +  results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Dectected Dog - '+dog+' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

    img = document.getElementById('animal_image');
     if (results[0].label == "Dog barking") 
    { 
        img.src = 'bark.gif';
         dog = dog+1; 
    } 
    else if (results[0].label == "cat")
    {
         img.src = 'meow.gif'; 
         cat = cat + 1;
    } 
    else if (results[0].label == "Roar")
    { 
    img.src = 'lion.gif'
    lion = lion + 1;
    }
    else 
    {
    img.src = 'sound icon.jpg'
    }
  }

