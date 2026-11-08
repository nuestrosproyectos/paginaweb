// Rellena el nombre de marca en la web desde config.js
document.addEventListener("DOMContentLoaded", function () {
  var cfg = window.CONFIG || {};
  document.querySelectorAll("[data-marca], #marca-footer").forEach(function (el) {
    if (cfg.marca) el.textContent = cfg.marca;
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (cfg.email) el.textContent = cfg.email;
  });

  var form = document.getElementById("lead-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var zona = document.getElementById("zona").value.trim();
    var experiencia = document.getElementById("experiencia").value;
    var vehiculo = document.getElementById("vehiculo").value;

    // Mensaje que el técnico envía por WhatsApp
    var texto =
      "Hola, quiero unirme a la red de técnicos de gama blanca.%0A%0A" +
      "👤 Nombre: " + encodeURIComponent(nombre) + "%0A" +
      "📞 Teléfono: " + encodeURIComponent(telefono) + "%0A" +
      "📍 Zona: " + encodeURIComponent(zona) + "%0A" +
      "🔧 Experiencia: " + encodeURIComponent(experiencia) + "%0A" +
      "🚐 Herramienta/vehículo: " + encodeURIComponent(vehiculo);

    var numero = (window.CONFIG && window.CONFIG.whatsapp) || "";
    var url = "https://wa.me/" + numero + "?text=" + texto;

    window.open(url, "_blank");
  });
});
