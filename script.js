let count = 0;

const button = document.getElementById("countButton");

button.addEventListener("click", function () {
    count++;
    button.textContent = "Count: " + count;
});
