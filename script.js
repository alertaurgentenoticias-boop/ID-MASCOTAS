// PDF con jsPDF
document.getElementById("btn-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Carnet de Mascota", 20, 20);
  doc.text("Generado desde Firebase + jsPDF", 20, 40);

  // Acá podés traer datos de Firebase y agregarlos al PDF
  // ej: doc.text(`Nombre: ${nombre}`, 20, 60);

  doc.save("carnet_mascota.pdf");
});

// Mercado Pago: ya está linkeado en el index.html (botón <a>).