function calculateLove() {
  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    document.getElementById("result").innerText = "Please enter both names 💔";
    return;
  }

  let loveScore = Math.floor(Math.random() * 41) + 60; // 60%–100%

  document.getElementById("result").innerText =
    name1 + " ❤️ " + name2 + " = " + loveScore + "% Love";
}