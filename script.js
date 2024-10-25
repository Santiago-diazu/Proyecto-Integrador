document.getElementById('metodo-de-pago').addEventListener('change', function() {
    const value = this.value;


    document.getElementById('tc').classList.add('hidden');
    document.getElementById('td').classList.add('hidden');
    document.getElementById('pse').classList.add('hidden');


    if (value === 'tarjeta-credito') {
        document.getElementById('tc').classList.remove('hidden');
    } else if (value === 'tarjeta-debito') {
        document.getElementById('td').classList.remove('hidden');
    } else if (value === 'pse') {
        document.getElementById('pse').classList.remove('hidden');
    }
});


document.getElementById('forma-de-pago').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pago realizado con éxito (esto es un mensaje de prueba)');
});
