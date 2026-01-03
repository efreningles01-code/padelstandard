<style>
  .reta-wrap{
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif;
    max-width:1200px;
    margin:0 auto;
    padding:16px;
  }

  /* ===== Filters ===== */
  .filters{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(160px,1fr));
    gap:12px;
    padding:14px;
    margin-bottom:14px;
    border:1px solid rgba(0,0,0,.08);
    border-radius:14px;
    background:#fff;
  }

  .filter-group{ display:flex; flex-direction:column; gap:6px; }
  .filter-label{
    font-size:11px;
    font-weight:900;
    text-transform:uppercase;
    letter-spacing:.6px;
    color:#6b7280;
  }
  .filter-input,.filter-select{
    border:1px solid rgba(0,0,0,.10);
    border-radius:10px;
    padding:9px 10px;
    font-size:13px;
    outline:none;
    background:#fff;
    color:#111827;
  }

  /* ===== Table ===== */
  .table-card{
    border:1px solid rgba(0,0,0,.08);
    border-radius:14px;
    overflow:hidden;
    background:#fff;
  }
  table{ width:100%; border-collapse:separate; border-spacing:0; }
  thead th{
    background:#f9fafb;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:.6px;
    color:#6b7280;
    font-weight:900;
    padding:12px;
    border-bottom:1px solid rgba(0,0,0,.06);
    text-align:left;
    white-space:nowrap;
  }
  tbody td{
    padding:12px;
    border-bottom:1px solid rgba(0,0,0,.06);
    font-size:13px;
    color:#111827;
    vertical-align:top;
  }

  .pill{
    display:inline-flex;
    align-items:center;
    gap:6px;
    padding:6px 10px;
    border-radius:999px;
    font-size:12px;
    font-weight:900;
    border:1px solid rgba(0,0,0,.08);
    background:#fff;
    white-space:nowrap;
  }
  .dot{width:8px;height:8px;border-radius:50%;}
  .open .dot{background:#16a34a;}
  .wait .dot{background:#f59e0b;}
  .full .dot{background:#ef4444;}
  .done .dot{background:#6b7280;}

  .players{
    display:flex;
    flex-wrap:wrap;
    gap:6px;
    max-width:360px;
  }
  .tag{
    background:#f3f4f6;
    border-radius:10px;
    padding:6px 8px;
    font-size:12px;
    font-weight:800;
  }

  .muted{ color:#6b7280; font-size:12px; }
  .strong{ font-weight:900; }

  .actions{
    display:flex;
    gap:8px;
    flex-wrap:wrap;
  }
  .mini-btn{
    border:1px solid rgba(0,0,0,.1);
    background:#fff;
    border-radius:10px;
    padding:8px 10px;
    font-size:12px;
    font-weight:900;
    cursor:pointer;
    white-space:nowrap;
  }
  .mini-btn.dark{ background:#111827; color:#fff; border-color:#111827; }
  .mini-btn.ghost{ background:#f9fafb; }

  /* Responsive */
  @media(max-width: 820px){
    .players{ max-width:240px; }
  }
</style>

<div class="reta-wrap">

  <!-- ================= FILTROS (EN VIVO) ================= -->
  <div class="filters">
    <div class="filter-group">
      <div class="filter-label">Estado</div>
      <select class="filter-select">
        <option value="">Todos</option>
        <option>Abierta</option>
        <option>En espera</option>
        <option>Llena</option>
        <option>Finalizada</option>
      </select>
    </div>

    <div class="filter-group">
      <div class="filter-label">Fecha inicio</div>
      <input type="date" class="filter-input">
    </div>

    <div class="filter-group">
      <div class="filter-label">Fecha fin</div>
      <input type="date" class="filter-input">
    </div>

    <div class="filter-group">
      <div class="filter-label">Formato</div>
      <select class="filter-select">
        <option value="">Todos</option>
        <option>Rey de la cancha</option>
        <option>Todos vs Todos</option>
        <option>Americano</option>
      </select>
    </div>

    <div class="filter-group">
      <div class="filter-label">Categoría</div>
      <select class="filter-select">
        <option value="">Todas</option>
        <option>Principiante</option>
        <option>Intermedia</option>
        <option>Avanzada</option>
      </select>
    </div>

    <div class="filter-group">
      <div class="filter-label">Búsqueda</div>
      <input type="text" class="filter-input" placeholder="Jugador, organizador, club…">
    </div>
  </div>

  <!-- ================= TABLA ================= -->
  <div class="table-card">
    <table>
      <thead>
        <tr>
          <th>Estado</th>
          <th>Organizador</th>
          <th>Club</th>
          <th>Formato</th>
          <th>Cupo</th>
          <th>Categoría</th>
          <th>Jugadores</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><span class="pill open"><span class="dot"></span> Abierta</span></td>
          <td>
            <div class="strong">Efrén</div>
            <div class="muted">Sáb 06 Ene · 19:00–21:00</div>
          </td>
          <td>
            <div class="strong">Club Roma</div>
            <div class="muted">Cancha 2</div>
          </td>
          <td>
            <div class="strong">Rey de la cancha</div>
            <div class="muted">rotación</div>
          </td>
          <td>
            <div class="strong">6 / 8</div>
            <div class="muted">2 libres</div>
          </td>
          <td>Intermedia</td>
          <td>
            <div class="players">
              <span class="tag">Efrén</span><span class="tag">Ana</span><span class="tag">Luis</span>
              <span class="tag">Karla</span><span class="tag">Diego</span><span class="tag">Majo</span>
            </div>
          </td>
          <td>
            <div class="actions">
              <button class="mini-btn dark" type="button">Unirme</button>
              <button class="mini-btn" type="button">Ver</button>
              <button class="mini-btn ghost" type="button">Editar</button>
            </div>
          </td>
        </tr>

        <tr>
          <td><span class="pill wait"><span class="dot"></span> En espera</span></td>
          <td>
            <div class="strong">Paco</div>
            <div class="muted">Dom 07 Ene · 09:00–11:00</div>
          </td>
          <td>
            <div class="strong">Club Andares</div>
            <div class="muted">Cancha 1</div>
          </td>
          <td>
            <div class="strong">Todos vs Todos</div>
            <div class="muted">parejas</div>
          </td>
          <td>
            <div class="strong">8 / 8</div>
            <div class="muted">espera: 3</div>
          </td>
          <td>Avanzada</td>
          <td>
            <div class="players">
              <span class="tag">Paco</span><span class="tag">Fer</span><span class="tag">Nico</span><span class="tag">Sofía</span>
              <span class="tag">Raúl</span><span class="tag">Vale</span><span class="tag">Memo</span><span class="tag">Iván</span>
            </div>
          </td>
          <td>
            <div class="actions">
              <button class="mini-btn" type="button">Lista espera</button>
              <button class="mini-btn" type="button">Ver</button>
              <button class="mini-btn ghost" type="button">Editar</button>
            </div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
