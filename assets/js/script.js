let scrollImage = document.querySelector(".scroll-image");

// document.addEventListener('scroll', function(){
//     let scroll = document.documentElement.scrollTop;
//     console.log(scroll)
//     if (scroll >= 400) {

//         if(scroll > 300){
//             scrollImage.style.width = (scroll/12) + '%';
//             scrollImage.style.top = (5 + scroll/6) + '%';
//             scrollImage.style.right = (-50 - scroll/16) + '%';
//         }
//         if(scroll >= 600){
//             scrollImage.style.width = (scroll/6) + '%';
//             scrollImage.style.right = (-70)+ '%';
//         }
//         if(scroll > 650){
//             scrollImage.style.right = (-100)+ '%';
//         }
//     }
// })

//Scroll Show
const animationElements = document.querySelectorAll(".show-on-scroll");

//console.log(animationElements);

function toggleAnimationElementInWindow(element) {
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add("start");
    } else {
        element.classList.remove("start");
    }
}

function checkAnimation() {
    animationElements.forEach(function (callback) {
        toggleAnimationElementInWindow(callback);
    });
}

window.onscroll = checkAnimation;

//Dũng
const a = document.querySelector(".form-login");
const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const offLogin = document.querySelector(".close");
const onlLogin = document.querySelector(".login-btn");
const onlSignUp = document.querySelector(".signUp-btn");

register.addEventListener("click", () => {
    a.classList.add("active");
});

login.addEventListener("click", () => {
    a.classList.remove("active");
});

offLogin.addEventListener("click", () => {
    a.classList.add("active-btn");
});

onlSignUp.addEventListener("click", () => {
    if (a.classList.contains("active-btn") && a.classList.contains("active")) {
        a.classList.remove("active-btn");
    } else if (a.classList.contains("active-btn")) {
        a.classList.remove("active-btn");
        a.classList.add("active");
    } else if (a.classList.contains("active")) {
        a.classList.add("active-btn");
    } else {
        a.classList.toggle("active");
    }
});

onlLogin.addEventListener("click", () => {
    if (a.classList.contains("active") || a.classList.contains("active-btn")) {
        a.classList.remove("active");
        a.classList.remove("active-btn");
    } else {
        a.classList.toggle("active-btn");
    }
});

let yourName = "";

document.querySelector("#dangNhap").onclick = function () {
    yourName = document.querySelector(".yourName").value;
    a.classList.add("active-btn");
    if (yourName != "") {
        setTimeout(function () {
            var typed = new Typed(".line-1", {
                strings: [
                    `${yourName} là một chàng trai đẹp trai vừa vào đại học...`,
                ],
                typeSpeed: 50,
            });
        }, 1000);

        setTimeout(function () {
            var typed = new Typed(".line-2", {
                strings: ["Bạn đối mặt với vô số lựa chọn ở trước mặt..."],
                typeSpeed: 50,
            });
        }, 5000);

        setTimeout(function () {
            var typed = new Typed(".line-3", {
                strings: ["Bạn cảm giác áp lực..."],
                typeSpeed: 50,
            });
        }, 10000);
    }
};
