// FETCHING ELEMENTS

let calc_btns = document.getElementsByClassName("pushable");
let container = document.getElementsByClassName("container")[0];
let calc_screen = document.getElementById("num_input");
let answer = document.getElementById("equals_to")
let clear = document.getElementById("clear")
let back_space = document.getElementById("back_space")
let d_mode = document.getElementById("dark_mode")
let d_icon = document.getElementsByClassName("dark_icon")[0]
page = document.getElementsByTagName("body")[0]

// AC FUNCTION
clear.addEventListener("click", (e)=>{
  calc_screen.value = ""
})
// BACKSPACE FUNCTION
back_space.addEventListener("click", (e)=>{
  calc_screen.value = calc_screen.value.slice(0,-1)
})

//FETCHING AUDIO FILE 
let audio_files = [];
for (let i = 1; i <= 2; i++) {
  audio_files.push(new Audio(`s${i}.mp3`));
}

//GETTING ANSWER ON PRESSING =
answer.addEventListener("click",(e)=>{
  operation = calc_screen.value.replace(/X/g,"*")
  let final_answer = eval(operation)
  calc_screen.value = final_answer.toString()

})

//ADDING NUMBERS TO SCREEN USING BUTTONS
Array.from(calc_btns).forEach(btn => {
  btn.addEventListener("click", async (e) => {
    calc_screen.value = calc_screen.value + btn.getAttribute('data-value')
    if(btn.id==="equals_to"){
      audio_files[0].play();
    }
    else{
      audio_files[1].play();
    }
  });
});

//SETTING LIGHT AND DARK THEME
let dark_emoji = 	"\u263d";
let light_emoji = 	"\u26ed"
d_icon.innerHTML = dark_emoji;

d_mode.addEventListener("click",(e)=>{
  container.classList.toggle('cont_dark')
  calc_screen.classList.toggle('inp_dark')
  page.classList.toggle('page_dark')
  if(d_icon.innerHTML === dark_emoji){
    d_icon.innerHTML = light_emoji;
  }
  else{
    d_icon.innerHTML = dark_emoji;
  }
})
