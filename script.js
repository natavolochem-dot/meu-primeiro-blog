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

if (btnTemaEscuro) {

    btnTemaEscuro.addEventListener("click", function () {

        document.body.classList.toggle("tema-escuro");

        // Troca o ícone do botão
        if (document.body.classList.contains("tema-escuro")) {
            btnTemaEscuro.textContent = "☀️";
        } else {
            btnTemaEscuro.textContent = "🌙";
        }

    });

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