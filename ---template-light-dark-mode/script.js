let switcher = document.getElementById('switcher');
let toggleText = document.getElementById("toggle-text")
const nav = document.getElementById("nav");
const toggleIcon =document.getElementById("toggle-icon")
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const txtBox = document.getElementById("text-box");



//other methode to devlope if you wante

// switcher.onclick = function (){
//     document.body.classList.toggle("dark-mode");
//     if(document.body.classList.contains("dark-mode")){
//         toggleText.innerHTML=`<span class="toggle-text" id="toggle-text">Dark Mode</span>
//         <i class="fa-solid fa-moon"></i>
//     </span>`;
//     }else {
//         toggleText.innerHTML=`<span class="toggle-text" id="toggle-text">Light Mode</span>
//         <i class="fa-solid fa-sun"></i>
//     </span>`;

//     }

// }
//function to change theme every click
function toggleTheme(isDark ){
    nav.style.backgroundColor= isDark ? "rgba(0,0,0,0.55)":"rgba(255,255,255,0.55)";
    txtBox.style.backgroundColor=isDark  ? "rgba(255,255,255,0.55)": "rgba(0,0,0,0.55)";
    toggleIcon.children[0].textContent = isDark? "Dark Mode":"Light Mode";
   isDark? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon"):toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    isDark? imgMode("dark") : imgMode("light");
    
     
    
}
// function to define img color
function imgMode(color){
img1.src = `img/undraw_feeling_proud_${color}.svg`;
img2.src = `img/undraw_conceptual_idea_${color}.svg`;
img3.src = `img/undraw_proud_coder_${color}.svg`;

}

// get linked with localstorage + toggle theme
function switchTheme(e) {
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme","dark");
        localStorage.setItem("theme", "dark");
        toggleTheme(true )
    }else{
        document.documentElement.setAttribute("data-theme","light");
        localStorage.setItem("theme", "light");
        toggleTheme(false )  
}
}
    switcher.addEventListener("change", switchTheme)
    const currentTheme =localStorage.getItem("theme");
    if(currentTheme){
        document.documentElement.setAttribute("data-theme",currentTheme);
if(currentTheme=== "dark"){
    switcher.checked=true;
    darkMode();
    }
}