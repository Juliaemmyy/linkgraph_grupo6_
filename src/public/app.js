
let users = [];

async function loadUsers(){

const res = await fetch("/users");
users = await res.json();

const from = document.getElementById("from");
const to = document.getElementById("to");
const friends = document.getElementById("friends");

users.forEach(u => {

from.innerHTML += `<option>${u}</option>`;
to.innerHTML += `<option>${u}</option>`;

friends.innerHTML += `
<div class="card">
<strong>${u}</strong>
<span class="online">online</span>
</div>
`;

});

}

async function runDijkstra(){

const from = document.getElementById("from").value;
const to = document.getElementById("to").value;

const res = await fetch(`/route?from=${from}&to=${to}`);
const data = await res.json();

document.getElementById("result").innerHTML = `

<h3>Melhor caminho:</h3>
<p>${data.path.join(" → ")}</p>
<p>Distância: ${data.distance}</p>

`;

}

loadUsers();