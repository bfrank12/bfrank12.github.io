document.getElementById("button").addEventListener("click", function () {
    const answer = document.getElementById("answer").value;

    if (answer.toLowerCase() === "time") {
        document.getElementById("form1").style.display = "block";
        document.getElementById("riddle").style.display = "none";
        document.getElementById("keyHint").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("button").style.display = "none";
    }
    else {
        alert("Incorrect answer. Try again.");
    }
});

document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "agentX" && password === "secret") {
        document.getElementById("image").style.display = "block";
        document.getElementById("loginButton");
    }
    else {
        alert("Incorrect credentials.");
    }
});