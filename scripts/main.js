const titulo =  document.querySelector('title');
titulo.textContent = 'PVC del Caribe...';

function msgGuardar() {
    alert('Tratando de enviar al servidor, espere...');
}

function calcularCeramica() {
    let venta = document.querySelector('#vendidos').value;
    let caja = document.querySelector('#caja').value;
    let r1 = parseInt(venta / caja);//Obtiene parte entera para saber numero de cajas
    let r2 = (venta / caja) - r1;//Obtiene parte decimal
    let r3 = parseInt(r2 * document.querySelector('#unidades').value);//unidades a entregar
    document.querySelector('#entrega').value = r1+" Cajas - "+r3+" Unds";
    //alert('entregar: '+ r1);
}


function limpiarForm() {
    document.querySelector('#form1').reset();
    document.querySelector('#vendidos').focus();
}