function validateForm() {
    var campoA = document.getElementById("campo-A").value;
    var campoB = document.getElementById("campo-B").value;
    if (campoB > campoA) {
        alert('Formulário válido! O 2º número É maior que o 1º número.')
    } else {
        alert('Formulário inválido! O 2º número não é maior que o 1º número.')
    }
}