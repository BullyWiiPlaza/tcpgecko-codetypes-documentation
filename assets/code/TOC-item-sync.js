window.addEventListener('DOMContentLoaded', () => {
    const TOCItemsContainer = document.getElementById("Content");
    const TOCBar = document.querySelectorAll("#TOC li");
    const TOCItems = document.querySelectorAll("#TOC li a");
    const TOCContentTarget = document.querySelectorAll("#Content a[name]");

    var TOCItemNames = [];
    var TOCContentTargetNames = [];

    var result;
    var oldResult;

    TOCItems.forEach((item, index) => {
        TOCItemNames = [[TOCBar[index], item.getAttribute("href").replace(/#/g, "")]].concat(TOCItemNames);
    });

    TOCContentTarget.forEach(item => {
        TOCContentTargetNames = [[item.getAttribute("name"), item.getBoundingClientRect().top]].concat(TOCContentTargetNames);
    });


    TOCItemsContainer.addEventListener("scroll", () => {
        oldResult = result

        TOCContentTargetNames.every(item => {

            if (TOCItemsContainer.scrollTop >= item[1]) {
                result = item[0]
                return false
            }

            return true
        });

        if (result !== oldResult) {

            TOCItemNames.forEach(item => {

                if (item[1] === result) {
                    item[0].classList.add("focused");
                } else {
                    item[0].classList.remove("focused");
                }

            });

        }

    });

});
