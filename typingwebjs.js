const setOfWords = [
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     "Vivamus ut massa lacinia, interdum arcu in, condimentum ligula.",
     "Morbi in tortor vitae mi accumsan faucibus.",
     "Integer vel magna tincidunt, auctor libero sed, lobortis ipsum.",
     "Vestibulum porttitor dolor posuere risus imperdiet, at tincidunt ipsum ultrices.",
     "Aenean imperdiet lacus nec lectus bibendum, ac tempor mauris blandit.",
     "Phasellus consectetur ex sit amet nibh varius vulputate.",
     "Curabitur vitae lorem gravida, iaculis erat eget, tempus lectus.",
     "Etiam facilisis eros consectetur rutrum ornare.",
     "In vel dui accumsan, consectetur mauris ut, eleifend mauris.",
     "Pellentesque in felis vitae arcu aliquet ultricies.",
     "Praesent rutrum velit sit amet semper consequat.",
     "In eu velit quis nunc aliquam maximus non eget ante.", 
     "Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
   ];

const msg = document.getElementById('msg');  //target the id msg
const typeWords = document.getElementById('mywords');   //target the id myWords 
const btn = document.getElementById('btn');    //target the id btn
let startTime, endTime; 

//Function Define 
const playGame = () => {
	let randomnumber = Math.floor(Math.random()*(setOfWords.length));  //show random string on the screen
	msg.innerText = setOfWords[randomnumber];     
	let date = new Date();
	startTime = date.getTime();   //get the start time of words
	btn.innerText = "Done";       
}

const endplay = () =>{
      let date = new Date();
	  endTime = date.getTime();    // get end time of word writing
	  let Totaltime = ((startTime-endTime)/1000);    //calculate the total time in writing the string.

	  let totalStr = typeWords.value;           //store value of string in totalstr variable.
	  let wordCount = wordCounter(totalStr);    //call a function by passing an argument in it.

	  let speed = Math.round((wordCount/Totaltime)*60);          //calaculate speed of word per min 
	  let finalMsg = "You typed total at"+speed + "words per minutes" + " ";  
	  finalMsg += compareWords(msg.innerText,totalStr);
	  msg.innerText = finalMsg;
}

const compareWords = (str1,str2) =>{
   let words1 = str1.split(" ");
   let words2 = str2.split(" ");
   let cnt = 0;

words1.forEach(function(item, index){
      if(item == words2[index]){
      	cnt++;
      }
})

 let errorWords = (words1.length-cnt);
 return (cnt + "Correct out of " + words1.length + "words and the total number of error are " + errorWords +"." );
}
//counter funstion define : which counts the nunber of string without spaces
const wordCounter = (str) =>{
	let response = str.split(" ").length;         //this line splite/avoid the spaces and not count them as string
	return response;
}

// this create the event as on click on start btn the dummy string displayed.
btn.addEventListener('click',function() {
	if(this.innerText == "Start"){
		typeWords.disabled = false;
	    playGame();
	 }else if(this.innerText == "Done"){
         typeWords.disabled = true;
         btn.innerText = "Start";
         endplay();
	 }
});






