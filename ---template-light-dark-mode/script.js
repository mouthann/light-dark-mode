let switcher = document.getElementById('switcher');
let toggleText = document.getElementById("toggle-text")


switcher.onclick = function (){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        toggleText.innerHTML=`<span class="toggle-text" id="toggle-text">Dark Mode</span>
        <i class="fa-solid fa-moon"></i>
    </span>`;
    }else {
        toggleText.innerHTML=`<span class="toggle-text" id="toggle-text">Light Mode</span>
        <i class="fa-solid fa-sun"></i>
    </span>`;

    }

}