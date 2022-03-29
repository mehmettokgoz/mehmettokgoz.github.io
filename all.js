let i = 0; 
window.onload = function () {
    let btn = document.getElementById("myBtn");
    let menu = document.getElementById("navbar-menu");

    btn.addEventListener("click", function() {
        i += 1;
        if (i % 2 == 1) {
            menu.style.visibility = "visible";
            menu.style.paddingTop="10px";
            menu.style.paddingBottom="10px";

        } else {
            menu.style.visibility = "hidden";
            menu.style.paddingTop="0px";
            menu.style.paddingBottom="0px";
     
        }
    });
};

function showFunc() {

    var desc = document.getElementById("text");
    var read = document.getElementById("demo");

    if (desc.style.display === "none") {
      desc.style.display = "block";
      demo.textContent = "hide details";
      console.log("içerik gösterildi");

    } else {
      desc.style.display = "none";
      demo.textContent = ">show details<";
      console.log("içerik gizlendi");
    }
}
