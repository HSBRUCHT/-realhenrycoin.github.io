
const statements = [
  "Freedom begins with ownership of your own value.",
  "Common sense doesn’t go out of style — it gets silenced.",
  "Decentralize control. Centralize truth.",
  "Digital value, rooted in real-world reason.",
  "The future belongs to those who think for themselves."
];

let index = 0;
const statementElement = document.getElementById('statement');

function showNextStatement() {
  index = (index + 1) % statements.length;
  statementElement.style.opacity = 0;
  setTimeout(() => {
    statementElement.textContent = statements[index];
    statementElement.style.opacity = 1;
  }, 500);
}

setInterval(showNextStatement, 30000); // Every 30 seconds
