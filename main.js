function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(100,140);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  }
  
  function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
  }

  function gotResult(error, results){
    if (error){
        console.log("error");
    }else{
        if((results[0].confidence > 0.5)&&(previous_result != results[0].label)){
            console.log(results);
            previous_result = results[0].label;
            var synth = window.speechSynthesis;
            speak_data = ("object detected is - "+results[0].label);
            var utterThis = window.SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);

            document.getElementById("result_object_name").innerHTML = results[0].label;
            document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
    }
  }

function modelLoaded(){
    console.log("m0d37 704d3d")
}

