window.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById("contentPanel");
    const editor = document.getElementById("pageEditor");

    var timeout;

    content.addEventListener("mousemove", () => {
        editor.classList.remove("hide")

        clearTimeout(timeout);
        timeout = setTimeout(function() {

            editor.classList.add("hide")
        }, 4000);
    });

});

function toggleFullscreen(elem) {
    elem = elem || document.documentElement;

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function changeFontSize(increaseFactor) {
    sizeRange = 4
    content = document.getElementById("mainContent");

    defaultSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);

    if (currentSize + increaseFactor >= defaultSize - sizeRange && currentSize + increaseFactor <= defaultSize + sizeRange) {
        content.style.fontSize = (currentSize + increaseFactor) + 'px';
    } else {
        content.style.fontSize = style;
    }
}

function resetFontSize() {
    defaultSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    document.getElementById("mainContent").style.fontSize = defaultSize
}