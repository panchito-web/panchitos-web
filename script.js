let registros = JSON.parse(localStorage.getItem("registros")) || [];

function mostrarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  registros.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = "• " + nombre;
    lista.appendChild(li);
  });
}

function registrar() {
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre && !registros.includes(nombre)) {
    registros.push(nombre);
    localStorage.setItem("registros", JSON.stringify(registros));
    mostrarLista();
    document.getElementById("nombre").value = "";
    alert(`¡Listo, ${nombre}! Tu registro se ha guardado.`);
  } else if (registros.includes(nombre)) {
    alert("Ese nombre ya está registrado.");
  } else {
    alert("Por favor ingresa un nombre válido.");
  }
}

mostrarLista();
