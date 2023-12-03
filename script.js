const bandasPrecargadas = [
  {
    nombre: "Sombrero de Paja",
    bandera: "https://static.wikia.nocookie.net/onepiece/images/5/53/Piratas_de_Sombrero_de_Paja.png/revision/latest?cb=20180418132004&path-prefix=es",
    lider: "Monkey D. Luffy",
    recompensaLider: 1500000000,
    nombreBarco: "Thousand Sunny",
    numMiembros: 10,
    contramaestre: "Roronoa Zoro",
    miembrosImportantes: ["Nami", "Usopp", "Sanji", "Tony Tony Chopper", "Nico Robin"],
    bandaActiva: true,
    piratas: [
      { nombre: "Monkey D. Luffy", procedencia: "East Blue", recompensa: 1500000000 },
      { nombre: "Roronoa Zoro", procedencia: "East Blue", recompensa: 320000000 },
      { nombre: "Nami", procedencia: "East Blue", recompensa: 66000000 },
      { nombre: "Usopp", procedencia: "East Blue", recompensa: 200000000 },
      { nombre: "Sanji", procedencia: "North Blue", recompensa: 330000000 },
    ],
  },
  {
    nombre: "Baroque Works",
    bandera: "https://static.wikia.nocookie.net/onepiece/images/a/a8/Baroque_Works.png/revision/latest?cb=20111226223333&path-prefix=es",
    lider: "Crocodile",
    recompensaLider: 81000000,
    nombreBarco: "Miss Love Duck",
    numMiembros: 2000,
    contramaestre: "Mr. 1",
    miembrosImportantes: ["Miss All Sunday", "Mr. 2 Bon Kurei", "Mr. 3", "Mr. 4", "Mr. 5"],
    bandaActiva: false,
    piratas: [
      { nombre: "Crocodile", procedencia: "Grand Line", recompensa: 81000000 },
      { nombre: "Miss All Sunday", procedencia: "Grand Line", recompensa: 79000000 },
      { nombre: "Mr. 1", procedencia: "Grand Line", recompensa: 72000000 },
      { nombre: "Mr. 2 Bon Kurei", procedencia: "Grand Line", recompensa: 32000000 },
      { nombre: "Mr. 3", procedencia: "Grand Line", recompensa: 38000000 },
    ],
  },
  {
    nombre: "Red-Haired Pirates",
    bandera: "https://static.wikia.nocookie.net/onepiece/images/c/cf/Bandera_za%C5%82ogi_Rudow%C5%82osego.png/revision/latest?cb=20201225141851&path-prefix=pl",
    lider: "Shanks",
    recompensaLider: 4000000000,
    nombreBarco: "Red Force",
    numMiembros: 10,
    contramaestre: "Benn Beckman",
    miembrosImportantes: ["Yasopp", "Lucky Roo"],
    bandaActiva: true,
    piratas: [
      { nombre: "Shanks", procedencia: "New World", recompensa: 4000000000 },
      { nombre: "Benn Beckman", procedencia: "New World", recompensa: 500000000 },
      { nombre: "Yasopp", procedencia: "New World", recompensa: 180000000 },
      { nombre: "Lucky Roo", procedencia: "New World", recompensa: 150000000 },
    ],
  },
  {
    nombre: "Donquixote Pirates",
    bandera: "https://static.wikia.nocookie.net/onepiece/images/3/3a/Piratas_Donquixote_portrait.png/revision/latest?cb=20150822111213&path-prefix=es",
    lider: "Donquixote Doflamingo",
    recompensaLider: 3400000000,
    nombreBarco: "Numancia Le Feste",
    numMiembros: 2000,
    contramaestre: "Dellinger",
    miembrosImportantes: ["Trebol", "Diamante", "Pica", "Vergo", "Sugar"],
    bandaActiva: false,
    piratas: [
      { nombre: "Donquixote Doflamingo", procedencia: "New World", recompensa: 3400000000 },
      { nombre: "Dellinger", procedencia: "New World", recompensa: 30000000 },
      { nombre: "Trebol", procedencia: "New World", recompensa: 200000000 },
      { nombre: "Diamante", procedencia: "New World", recompensa: 300000000 },
      { nombre: "Pica", procedencia: "New World", recompensa: 330000000 },
    ],
  },
  {
    nombre: "Big Mom Pirates",
    bandera: "https://static.wikia.nocookie.net/onepiece/images/5/5b/Piratas_de_Big_Mom_Jolly_Roger.png/revision/latest?cb=20200401114646&path-prefix=es",
    lider: "Big Mom",
    recompensaLider: 4500000000,
    nombreBarco: "Queen Mama Chanter",
    numMiembros: 85,
    contramaestre: "Charlotte Katakuri",
    miembrosImportantes: ["Charlotte Smoothie", "Charlotte Cracker", "Charlotte Perospero", "Charlotte Compote", "Charlotte Pudding"],
    bandaActiva: true,
    piratas: [
      { nombre: "Big Mom", procedencia: "New World", recompensa: 4500000000 },
      { nombre: "Charlotte Katakuri", procedencia: "New World", recompensa: 1057000000 },
      { nombre: "Charlotte Smoothie", procedencia: "New World", recompensa: 932000000 },
      { nombre: "Charlotte Cracker", procedencia: "New World", recompensa: 860000000 },
      { nombre: "Charlotte Perospero", procedencia: "New World", recompensa: 700000000 },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const bandasList = document.getElementById("bandasList");
  const agregarBandaBtn = document.getElementById("agregarBandaBtn");
  const agregarPirataBtn = document.getElementById("agregarPirataBtn");
  const formularioBanda = document.getElementById("formularioBanda");
  const formularioPirata = document.getElementById("formularioPirata");
  
  

  // Cargar bandas precargadas en LocalStorage si aún no existen
  if (!localStorage.getItem("bandas")) {
    localStorage.setItem("bandas", JSON.stringify(bandasPrecargadas));
  }

  // Obtener y mostrar las bandas desde LocalStorage
  const bandas = JSON.parse(localStorage.getItem("bandas"));
  mostrarBandas(bandas);

  // Evento para mostrar el formulario de agregar nueva banda
  agregarBandaBtn.addEventListener("click", function () {
    formularioBanda.style.display = "block";
  });

  document.getElementById("bandasList").addEventListener("click", function (event) {
    const target = event.target.closest(".banda-card");
    if (target) {
      const bandaNombre = target.querySelector("h3").textContent;
      mostrarDetallesBanda(bandaNombre);
    }
  });

 
  document.getElementById('mostrarTodasBandasBtn').addEventListener('click', function () {
    const bandas = JSON.parse(localStorage.getItem("bandas"));
    mostrarBandas(bandas);
    ordenarBandasSelect.selectedIndex = 0;
});


  // Evento para mostrar el formulario de agregar nuevo pirata
  agregarPirataBtn.addEventListener("click", function () {
    cargarBandasEnSelect();
    formularioPirata.style.display = "block";
  });

  // Evento para cerrar el formulario de nueva banda
  document.getElementById("cerrarFormularioBanda").addEventListener("click", function () {
    formularioBanda.style.display = "none";
  });

  // Evento para cerrar el formulario de nuevo pirata
  document.getElementById("cerrarFormularioPirata").addEventListener("click", function () {
    formularioPirata.style.display = "none";
  });

  // Evento para agregar nueva banda
  document.getElementById("nuevaBandaForm").addEventListener("submit", function (event) {
    event.preventDefault();
    agregarNuevaBanda();
  });

 

  // Evento para agregar nuevo pirata
  document.getElementById("nuevoPirataForm").addEventListener("submit", function (event) {
    event.preventDefault();
    agregarNuevoPirata();
  });
  document.getElementById("cancelarAgregarBanda").addEventListener("click", function () {
    document.getElementById("formularioBanda").style.display = "none";
});

document.getElementById("cancelarAgregarPirata").addEventListener("click", function () {
    document.getElementById("formularioPirata").style.display = "none";
});


agregarBandaBtn.addEventListener("click", function () {
  formularioBanda.style.display = "block";
});

var ordenarBandasSelect = document.getElementById('ordenarBandas');
ordenarBandasSelect.addEventListener('change', ordenarBandasSeleccionado);



function ordenarBandasSeleccionado() {
  // Obtener el valor seleccionado
  var opcionSeleccionada = ordenarBandasSelect.value;

  // Obtener las bandas desde el LocalStorage
  var bandas = JSON.parse(localStorage.getItem("bandas"));

  // Filtrar solo las bandas activas
  var bandasActivas = bandas.filter(function (banda) {
      return banda.bandaActiva;
  });

  // Realizar acciones según la opción seleccionada
  switch (opcionSeleccionada) {
      case 'recompensaLider':
          bandasActivas.sort(function (a, b) {
              return b.recompensaLider - a.recompensaLider;
          });
          break;
      case 'numMiembros':
          bandasActivas.sort(function (a, b) {
              return b.numMiembros - a.numMiembros;
          });
          break;
      case 'nombre':
          bandasActivas.sort(function (a, b) {
              return a.nombre.localeCompare(b.nombre);
          });
          break;
      default:
        
          break;
  }

  // Actualizar las bandas ordenadas en el LocalStorage
  localStorage.setItem("bandas", JSON.stringify(bandas));

  // Mostrar las bandas ordenadas en el HTML
  mostrarBandas(bandasActivas);
}



  // Función para mostrar las bandas en el HTML
  function mostrarBandas(bandas) {
    bandasList.innerHTML = "";
    bandas.forEach((banda) => {
      const bandaCard = document.createElement("div");
      bandaCard.classList.add("banda-card");

      const img = document.createElement("img");
      img.src = banda.bandera;
      img.alt = `${banda.nombre} Bandera`;
      bandaCard.appendChild(img);

      const h3 = document.createElement("h3");
      h3.textContent = banda.nombre;
      bandaCard.appendChild(h3);

      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.textContent = `Líder: ${banda.lider}`;
      ul.appendChild(li1);

      const li2 = document.createElement("li");
      li2.textContent = `Recompensa Líder: ${banda.recompensaLider}`;
      ul.appendChild(li2);

      const li3 = document.createElement("li");
      li3.textContent = `Miembros: ${banda.numMiembros}`;
      ul.appendChild(li3);

      bandaCard.appendChild(ul);

      bandasList.appendChild(bandaCard);
    });
  }

  function mostrarSoloBandasActivas() {
    const bandas = JSON.parse(localStorage.getItem("bandas"));
    const bandasActivas = bandas.filter((banda) => banda.bandaActiva);

    // Ordenar por recompensa del líder de mayor a menor
    bandasActivas.sort((a, b) => b.recompensaLider - a.recompensaLider);



    mostrarBandas(bandasActivas);
  }
  // Función para agregar una nueva banda
  function agregarNuevaBanda() {
    const nombreBanda = document.getElementById("nombre").value;
    const banderaUrl = document.getElementById("bandera").value;
    const liderBanda = document.getElementById("lider").value;
    const recompensaLider = parseInt(document.getElementById("recompensaLider").value);
    const nombreBarco = document.getElementById("nombreBarco").value;
    const numMiembros = parseInt(document.getElementById("numMiembros").value);
    const contramaestre = document.getElementById("contramaestre").value;
    const bandaActiva = document.getElementById("bandaActiva").value === "true";

    // Validar el nombre de la banda (solo caracteres alfabéticos y máximo 50 caracteres)
    const nombreBandaRegex = /^[A-Za-z\s]{1,50}$/;
    if (!nombreBandaRegex.test(nombreBanda)) {
      alert("Error: Nombre de la banda no válido. Debe contener solo caracteres alfabéticos y tener máximo 50 caracteres.");
      return;
    }

    // Validar la URL de la bandera
    const banderaUrlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!banderaUrlRegex.test(banderaUrl)) {
      alert("Error: URL de la bandera no válida. Asegúrate de que tenga un formato URL correcto.");
      return;
    }

    // Validar el líder de la banda (solo caracteres alfabéticos y máximo 50 caracteres)
    const liderBandaRegex = /^[A-Za-z\s]{1,50}$/;
    if (!liderBandaRegex.test(liderBanda)) {
      alert("Error: Líder de la banda no válido. Debe contener solo caracteres alfabéticos y tener máximo 50 caracteres.");
      return;
    }

    // Validar el nombre del barco (solo caracteres alfabéticos y máximo 50 caracteres)
    const nombreBarcoRegex = /^[A-Za-z\s]{1,50}$/;
    if (!nombreBarcoRegex.test(nombreBarco)) {
      alert("Error: Nombre del barco no válido. Debe contener solo caracteres alfabéticos y tener máximo 50 caracteres.");
      return;
    }

     // Validar el contramaestre (solo caracteres alfabéticos y máximo 50 caracteres)
  const contramaestreRegex = /^[A-Za-z\s]{1,50}$/;
  if (!contramaestreRegex.test(contramaestre)) {
    alert("Error: Contramaestre no válido. Debe contener solo caracteres alfabéticos y tener máximo 50 caracteres.");
    return;
  }

    // Agregar la nueva banda
    const nuevaBanda = {
      nombre: nombreBanda,
      bandera: banderaUrl,
      lider: liderBanda,
      recompensaLider: recompensaLider,
      nombreBarco: nombreBarco,
      numMiembros: numMiembros,
      contramaestre: contramaestre,
      bandaActiva: bandaActiva,
      miembrosImportantes: [],
      piratas: [],
    };

    const bandas = JSON.parse(localStorage.getItem("bandas"));
    bandas.push(nuevaBanda);
    localStorage.setItem("bandas", JSON.stringify(bandas));

    mostrarBandas(bandas);
    document.getElementById("nuevaBandaForm").reset();

    formularioBanda.style.display = "none";
  }

  // Función para cargar las bandas en el select del formulario de nuevo pirata
  function cargarBandasEnSelect() {
    const selectBanda = document.getElementById("bandaPirata");
    selectBanda.innerHTML = '<option value="" selected>Seleccionar Banda</option>';

    const bandas = JSON.parse(localStorage.getItem("bandas"));
    bandas.forEach((banda) => {
      const option = document.createElement("option");
      option.value = banda.nombre;
      option.textContent = banda.nombre;
      selectBanda.appendChild(option);
    });
  }

  // Función para agregar un nuevo pirata
  function agregarNuevoPirata() {
    const nombrePirata = document.getElementById("nombrePirata").value;
    const procedenciaPirata = document.getElementById("procedenciaPirata").value;
    const recompensaPirata = document.getElementById("recompensaPirata").value
      ? parseInt(document.getElementById("recompensaPirata").value)
      : null;
    const bandaPirata = document.getElementById("bandaPirata").value;
    const importantePirata = document.getElementById("importantePirata").checked;

    // Obtener la banda seleccionada
    const bandas = JSON.parse(localStorage.getItem("bandas"));
    const bandaSeleccionada = bandas.find((banda) => banda.nombre === bandaPirata);

      // Validar el nombre del pirata (solo caracteres alfabéticos y máximo 50 caracteres)
  const nombrePirataRegex = /^[A-Za-z\s]{1,50}$/;
  if (!nombrePirataRegex.test(nombrePirata)) {
    alert("Error: Nombre del pirata no válido. Debe contener solo caracteres alfabéticos y tener máximo 50 caracteres.");
    return;
  }

  // Validar la procedencia del pirata (solo caracteres alfabéticos y máximo 50 caracteres)
  const procedenciaPirataRegex = /^[A-Za-z\s]{1,50}$/;
  if (!procedenciaPirataRegex.test(procedenciaPirata)) {
    alert("Error: Procedencia del pirata no válida. Debe contener solo caracteres alfabéticos y tener máximo 50 caracteres.");
    return;
  }
  
    // Crear el nuevo pirata
    const nuevoPirata = {
      nombre: nombrePirata,
      procedencia: procedenciaPirata,
      recompensa: recompensaPirata,
    };

    // Aumentar el número de piratas en la banda
    bandaSeleccionada.numMiembros++;

    // Verificar si es importante y si la banda tiene menos de 5 piratas importantes
    if (importantePirata && bandaSeleccionada.miembrosImportantes.length < 5) {
      // Agregar el pirata a la banda seleccionada
      bandaSeleccionada.piratas.push(nuevoPirata);

      // Agregar el pirata a la lista de miembros importantes
      bandaSeleccionada.miembrosImportantes.push(nombrePirata);
    } else if (importantePirata) {
      // Mostrar un alert indicando que ya existen 5 piratas importantes en la banda
      alert("Ya existen 5 piratas importantes en esta banda. No se puede agregar más.");
    } else {
      // Agregar el pirata a la banda seleccionada
      bandaSeleccionada.piratas.push(nuevoPirata);
    }

    // Actualizar la información en LocalStorage
    localStorage.setItem("bandas", JSON.stringify(bandas));

    // Actualizar la lista de bandas en el HTML
    mostrarBandas(bandas);
    document.getElementById("nuevoPirataForm").reset();

    // Cerrar el formulario
    formularioPirata.style.display = "none";
  }


  function mostrarDetallesBanda(nombreBanda) {
    const bandas = JSON.parse(localStorage.getItem("bandas"));
    const bandaSeleccionada = bandas.find((banda) => banda.nombre === nombreBanda);

    if (bandaSeleccionada) {
      alert(`
        Detalles de la Banda:
        Nombre: ${bandaSeleccionada.nombre}
        Nombre del Barco: ${bandaSeleccionada.nombreBarco}
        Contramaestre: ${bandaSeleccionada.contramaestre}
        Miembros Importantes: ${bandaSeleccionada.miembrosImportantes.join(", ")}
      `);
    }
  }
  
});
