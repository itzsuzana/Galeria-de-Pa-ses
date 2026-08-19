function mostrarBrasil() {

    const imagem = document.getElementById("img-pais");
    const nome = document.getElementById("nome-pais");
    const informacao = document.getElementById("informacao");

    imagem.src = "img/brasil.png";

    imagem.alt = "Bandeira do Brasil";

    nome.textContent = "🇧🇷 Brasil";

    informacao.textContent =
        "O Brasil é o maior país da América do Sul e possui uma das maiores biodiversidades do mundo.";
}


function mostrarEspanha() {

    const imagem = document.getElementById("img-pais");
    const nome = document.getElementById("nome-pais");
    const informacao = document.getElementById("informacao");

    imagem.src = "img/espanha.jpg";

    imagem.alt = "Bandeira da Espanha";

    nome.textContent = "🇪🇸 Espanha";

    informacao.textContent =
        "A Espanha está localizada na Península Ibérica, no sudoeste da Europa.";
}