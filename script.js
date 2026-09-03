const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const texto = botao.querySelector("span");

        if (texto) {
            if (!curtiu) {
                texto.textContent = Number(texto.textContent) + 1;
                curtiu = true;
            } else {
                texto.textContent = Number(texto.textContent) - 1;
                curtiu = false;
            }
        }

    });

});




const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}



const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

if (btnVoltarTopo) {

    btnVoltarTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}