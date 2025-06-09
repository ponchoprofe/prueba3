document.getElementById("alarm-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = this.nombre.value;
  const dia = this.dia.value;
  const fecha = this.fecha.value;
  const hora = this.hora.value;
  const comentario = this.comentario.value;

  const tbody = document.querySelector("#alarms-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nombre}</td>
    <td>${dia}</td>
    <td>${fecha}</td>
    <td>${hora}</td>
    <td>${comentario}</td>
    <td class="actions">
      <button onclick="editRow(this)">Editar</button>
      <button onclick="deleteRow(this)">Eliminar</button>
    </td>
  `;
  tbody.appendChild(row);
  this.reset();
});

function editRow(button) {
  const row = button.parentElement.parentElement;
  const cells = row.querySelectorAll("td");
  const form = document.getElementById("alarm-form");
  form.nombre.value = cells[0].textContent;
  form.dia.value = cells[1].textContent;
  form.fecha.value = cells[2].textContent;
  form.hora.value = cells[3].textContent;
  form.comentario.value = cells[4].textContent;
  row.remove();
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("digital-clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();