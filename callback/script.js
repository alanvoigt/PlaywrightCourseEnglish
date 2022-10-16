function newButton(text, callback) {
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $body.insertAdjacentElement("beforeend", $button);

    return $button;
}

newButton("Login", (button) => {
    button.style.cssText = `
    font-size: 40px;
    text-transform: uppercase;
    `;

    button.addEventListener("click", () => {
        console.log("OI");
    });
});


// https://www.youtube.com/watch?v=0haWgdHFuJw