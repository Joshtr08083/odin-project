// Scripts arent part of html intro (and really neither is css), they are just here for decor

let transitionData
try {
    transitionData = JSON.parse(sessionStorage.getItem("transition"));
} catch {}

const transitionDelay = 500;
const transitionElement = document.getElementById("transition");

if (transitionData && transitionData.bool) {
    // skip transition if origin is same, this is to prevent it running every reload
    if (transitionData.origin !== window.location.href) {
        document.referrer = "";
        transitionElement.classList.add("transitionEnd");
    
        setTimeout(() => {
            transitionElement.classList.remove("transitionEnd")
        }, transitionDelay);
    }
    
    sessionStorage.removeItem("transition");

}


function transition(target) {
    transitionElement.classList.add("transitionStart");
    sessionStorage.setItem("transition", "{\"bool\":true, \"origin\":\"" + window.location.href + "\"}");
    
    setTimeout(() => {
        document.location.replace(target);
    }, transitionDelay);
}