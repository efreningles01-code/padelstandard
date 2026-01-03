(() => {
  const id = 'padel-retas-root';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    document.body.appendChild(el);
  }

  el.innerHTML = `
    <div style="padding:20px;font-family:system-ui">
      <h2>Padel Retas conectado correctamente</h2>
    </div>
  `;
})();
