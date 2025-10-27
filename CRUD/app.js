
let datos = [];
let editando = -1;

function guardar() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const ciudad = document.getElementById('ciudad').value;

  if (editando === -1) {
    datos.push({ nombre, correo, ciudad });
  } else {
    datos[editando] = { nombre, correo, ciudad };
    editando = -1;
  }

  limpiarFormulario();
  renderTabla();
}

function editar(index) {
  const cliente = datos[index];
  document.getElementById('nombre').value = cliente.nombre;
  document.getElementById('correo').value = cliente.correo;
  document.getElementById('ciudad').value = cliente.ciudad;
  editando = index;
}

function eliminar(index) {
  datos.splice(index, 1);
  renderTabla();
}

function renderTabla() {
  const tbody = document.getElementById('tablaClientes');
  tbody.innerHTML = '';
  datos.forEach((cliente, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${cliente.nombre}</td>
        <td>${cliente.correo}</td>
        <td>${cliente.ciudad}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editar(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('ciudad').value = '';
}