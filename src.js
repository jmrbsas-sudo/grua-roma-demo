import './style.css';

const $ = (id) => document.getElementById(id);
let currentRequest = null;
let quoteValue = null;

function showTab(tab) {
  document.querySelectorAll('.tab').forEach(button => button.classList.toggle('active', button.dataset.tab === tab));
  $('request-panel').classList.toggle('hidden', tab !== 'request');
  $('status-panel').classList.toggle('hidden', tab !== 'status');
}
document.querySelectorAll('.tab').forEach(button => button.addEventListener('click', () => showTab(button.dataset.tab)));
document.querySelectorAll('input[name="vehicle"]').forEach(input => input.addEventListener('change', () => {
  document.querySelectorAll('.vehicle-option').forEach(label => label.classList.toggle('selected', label.querySelector('input').checked));
}));
$('new-request-empty').addEventListener('click', () => showTab('request'));

$('request-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  currentRequest = {
    customer: String(data.get('customer')).trim(),
    phone: String(data.get('phone')).trim(),
    vehicle: String(data.get('vehicle')),
    problem: String(data.get('problem')),
    pickup: String(data.get('pickup')).trim(),
    destination: String(data.get('destination')).trim(),
    details: String(data.get('details') || '').trim()
  };
  quoteValue = null;
  $('out-customer').textContent = currentRequest.customer;
  $('out-phone').textContent = currentRequest.phone;
  $('out-pickup').textContent = currentRequest.pickup;
  $('out-destination').textContent = currentRequest.destination;
  $('out-vehicle').textContent = currentRequest.vehicle;
  $('out-problem').textContent = currentRequest.problem;
  $('out-details').textContent = currentRequest.details;
  $('quote-input').value = '';
  $('empty-state').classList.add('hidden');
  $('request-details').classList.remove('hidden');
  updateStatus('pending');
  showTab('status');
});

function updateStatus(status) {
  $('quote-box').classList.toggle('hidden', status !== 'pending');
  $('accept-box').classList.toggle('hidden', status !== 'quoted');
  $('confirmed-box').classList.toggle('hidden', status !== 'confirmed');
  const pill = $('status-pill');
  pill.className = 'status-pill';
  if (status === 'pending') {
    $('status-title').textContent = 'Esperando presupuesto';
    pill.textContent = 'Pendiente';
    pill.classList.add('pending');
  } else if (status === 'quoted') {
    $('status-title').textContent = 'Presupuesto recibido';
    pill.textContent = 'Presupuestado';
    pill.classList.add('quoted');
  } else {
    $('status-title').textContent = 'Servicio confirmado';
    pill.textContent = 'Confirmado';
    pill.classList.add('confirmed');
  }
}

$('send-quote').addEventListener('click', () => {
  const amount = Number($('quote-input').value);
  if (!Number.isFinite(amount) || amount <= 0) {
    $('quote-input').setCustomValidity('Ingresá un presupuesto mayor a cero.');
    $('quote-input').reportValidity();
    $('quote-input').setCustomValidity('');
    return;
  }
  quoteValue = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(amount);
  $('quote-amount').textContent = quoteValue;
  updateStatus('quoted');
});
$('accept-quote').addEventListener('click', () => updateStatus('confirmed'));
$('reset').addEventListener('click', () => {
  currentRequest = null;
  quoteValue = null;
  $('request-form').reset();
  document.querySelectorAll('.vehicle-option').forEach(label => label.classList.toggle('selected', label.querySelector('input').checked));
  $('empty-state').classList.remove('hidden');
  $('request-details').classList.add('hidden');
  showTab('request');
});
