function yesClicked() {
    // Redirige a la página "thanks.html"
    window.location.href = "thanks.html";
}

function moveButton() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const newLeft = Math.random() * (containerWidth - buttonWidth);
    const newTop = Math.random() * (containerHeight - buttonHeight);

    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}
