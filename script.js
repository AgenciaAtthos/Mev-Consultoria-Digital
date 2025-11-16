document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ATUALIZAR O ANO NO RODAPÉ
    // Pega o ano atual e substitui o '2025' que está no HTML
    const currentYearSpan = document.querySelector('#current-year');
    if (currentYearSpan) {
        // Para garantir que o ano esteja sempre atualizado
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // 2. Lógica para o menu mobile (Hamburger Menu)
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#menu');
    
    if (menuToggle && menu) {
        // Fecha o menu quando um item é clicado (útil no mobile)
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });

        // Alterna a classe 'active' para abrir/fechar o menu
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // 3. Lógica para o FAQ (Perguntas Frequentes)
    // Usará as classes .faq-pergunta e .faq-resposta
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const resposta = pergunta.nextElementSibling;
            // Busca o ícone da seta dentro da pergunta
            const icone = pergunta.querySelector('i');
            
            // Alterna a visibilidade da resposta (com CSS)
            resposta.classList.toggle('active');
            
            // Alterna o ícone (fa-chevron-down <-> fa-chevron-up)
            icone.classList.toggle('fa-chevron-down');
            icone.classList.toggle('fa-chevron-up');
        });
    });

    // 4. Lógica para o scroll suave (Links internos como #servicos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Impede o salto padrão da página e ignora links vazios
            if (targetId && targetId !== '#') {
                e.preventDefault(); 
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth' // Rola suavemente
                });
            }
        });
    });
});