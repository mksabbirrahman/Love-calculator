function calculateLove() {
  let name1 = document.getElementById("name1").value.trim().toLowerCase();
  let name2 = document.getElementById("name2").value.trim().toLowerCase();

  if (name1 === "" || name2 === "") {
    document.getElementById("result").innerText = "Please enter both names 💔";
    return;
  }

  const sabbirNames = ["sabbir"];
  const elmyraNames = ["mahmuda jannat", "jannat", "mahmuda", "elmyra"];

  let isTrueLove =
    (sabbirNames.includes(name1) && elmyraNames.includes(name2)) ||
    (sabbirNames.includes(name2) && elmyraNames.includes(name1));

  let resultText = "";

  if (isTrueLove) {
    resultText = "Sabbir ❤️ Elmyra = 100% Love 💯✨";
  } else {
    let lowScore = Math.floor(Math.random() * 50); // 0–49%
    resultText = "Love Score = " + lowScore + "% 💔";
  }

  document.getElementById("result").innerText = resultText;
}
