document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === 'ver') {
    const res = await fetch(`/api/v1/clientes/${id}`);
    const cliente = await res.json();
    document.getElementById('ver-id').textContent = cliente._id;
    document.getElementById('ver-nombre').textContent = cliente.nombre;
    document.getElementById('ver-email').textContent = cliente.email;
    document.getElementById('ver-telefono').textContent = cliente.telefono || '-';
    new bootstrap.Modal(document.getElementById('verModal')).show();
  }

  if (action === 'editar') {
    const res = await fetch(`/api/v1/clientes/${id}`);
    const cliente = await res.json();
    document.getElementById('editarForm').action = `/clientes/${id}`;
    document.getElementById('editar-id').value = id;
    document.getElementById('editar-nombre').value = cliente.nombre;
    document.getElementById('editar-email').value = cliente.email;
    document.getElementById('editar-telefono').value = cliente.telefono || '';
    new bootstrap.Modal(document.getElementById('editarModal')).show();
  }

  if (action === 'borrar') {
    document.getElementById('borrarForm').action = `/clientes/${id}`;
    document.getElementById('borrar-id').value = id;
    document.getElementById('borrar-nombre').textContent = btn.dataset.nombre;
    new bootstrap.Modal(document.getElementById('borrarModal')).show();
  }
});
