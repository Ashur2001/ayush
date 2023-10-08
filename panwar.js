let a = document.getElementById("clickme");
a.addEventListener('click',logJSONData)

async function logJSONData() {
  const response = await fetch("panwar.txt");
  const jsonData = await response.text();
  console.log(jsonData);
}