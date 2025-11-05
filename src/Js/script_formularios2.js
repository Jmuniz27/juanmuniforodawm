// Devuelve referencias (const) a los controles del formulario
function getFormRefs() {
  const form = document.getElementById('frmDatos');
  const nombre = form.querySelector('#TxtNombre');
  const apellido = form.querySelector('#TxtApellido');
  const pais = form.querySelector('#SltPais');
  const comentarios = form.querySelector('#TxtComentarios');
  const generoChecked = form.querySelector('input[name="RdGenero"]:checked');
  const chkTerms = form.querySelector('#ChkTerms');
  const btnSubmit = form.querySelector('button[type="submit"]');
  const btnReset = form.querySelector('button[type="reset"]');

    // validaUpdacion manual
}