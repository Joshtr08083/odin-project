// Scripts arent part of html intro (and really neither is css), they are just here for decor

let transitionData
try {
    transitionData = JSON.parse(sessionStorage.getItem("transition"));
} catch {}

const transitionDelay = 500;
const transitionStart = document.getElementById("transitionStart");
const transitionEnd = document.getElementById("transitionEnd");

// only applies if transition has been called and page has not been reloaded
if (transitionData && transitionData.bool && transitionData.origin !== window.location.href) {
    // document.referrer = "";
    transitionEnd.classList.add("transitionEndAnimate");
    sessionStorage.removeItem("transition");

} else {
    transitionEnd.classList.add("transitionHide");
}


function transition(target) {
    transitionStart.classList.add("transitionStartAnimate");
    sessionStorage.setItem("transition", "{\"bool\":true, \"origin\":\"" + window.location.href + "\"}");
    
    setTimeout(() => {
        document.location.replace(target);
    }, transitionDelay);
}