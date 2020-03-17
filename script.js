"use strict";

document.addEventListener("DOMContentLoaded", ()=> {
    document
        .querySelectorAll("textarea")
        .forEach(element => {
            element.addEventListener("keydown", function (event) {
                if (event.key === "Tab") {
                    event.preventDefault();
                    let value = "";
                    let nextSelectionStart = this.selectionStart + 4;
                    value += this.value.substring(0, this.selectionStart) + "    " + this.value.substring(this.selectionEnd);
                    this.value = value;
                    this.selectionStart = nextSelectionStart;
                    this.selectionEnd = nextSelectionStart;
                }
            });
            element.addEventListener("keyup", function updateIframe(event) {
                const mountedPoint = document.querySelector("[data-iframe]");
                const html  = document.querySelector(".square-html>textarea").value;
                const css = document.querySelector(".square-css>textarea").value;
                const js = document.querySelector(".square-javascript>textarea").value;
                const page = `${html}<style>${css}</style><script>${js}</script>`;
                const iframe = document.createElement("iframe");
                iframe.src = "data:text/html;charset=utf-8," + page;
                mountedPoint.innerHTML = "";
                mountedPoint.append(iframe);
            })
        });


});



