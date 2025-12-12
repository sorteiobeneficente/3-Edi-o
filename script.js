function sendWhatsapp(numero) {
    const mensagem = "Olá bom dia! Quero comprar uma rifa.";
    const url = `https://wa.me/55${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}