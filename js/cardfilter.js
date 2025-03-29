const categoryfilter = document.getElementById("categoryFilter");
const cardRows = document.querySelectorAll(".card");

categoryfilter.addEventListener("change", filtarCategorias);

function filtarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  cardRows.forEach((card) => {
    const categoria = card.getAttribute("data-category");
    if (
      categoriaSeleccionada === "all" ||
      categoria === categoriaSeleccionada
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
