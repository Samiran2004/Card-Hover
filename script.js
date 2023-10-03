var elm = document.querySelectorAll(".elmCont");

function hoveringAnimation() {
    elm.forEach(function (val) {
        val.addEventListener("mousemove", function (data) {
            val.childNodes[3].style.left = data.x + "px";
            val.childNodes[3].style.top = data.y + "px";
        });
        val.addEventListener("mouseout", function () {
            val.childNodes[3].style.opacity = 0;
        });
        val.addEventListener("mouseenter", function () {
            val.childNodes[3].style.opacity = 1;
        });
    });
};
hoveringAnimation();