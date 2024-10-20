document.addEventListener('DOMContentLoaded', function() {
    fetch('https://randomuser.me/api/?results=3') // Buscando 3 depoimentos
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testemunho-container');
            const depoimentos = [
                "A experiência com a Arvantis foi incrível, desde o primeiro contato até a entrega do serviço!",
                "O suporte e a qualidade dos produtos superaram todas as minhas expectativas. Altamente recomendado!",
                "Fiquei impressionado com o atendimento personalizado e a eficiência no serviço prestado.",
                "Minha experiência com a equipe da Arvantis foi excelente! Certamente voltarei a usar os serviços.",
                "Qualidade e atendimento impecáveis! A Arvantis é a melhor escolha para qualquer serviço automotivo."
            ];
            data.results.forEach((user, index) => {
                const testemunhoDiv = document.createElement('div');
                testemunhoDiv.classList.add('testemunho');
                const depoimentoAleatorio = depoimentos[Math.floor(Math.random() * depoimentos.length)];
                testemunhoDiv.setAttribute('data-aos', 'fade-right');
                testemunhoDiv.setAttribute('data-aos-delay', `${index * 200}`);
                testemunhoDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first}" />
                    <div>
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p>"${depoimentoAleatorio}"</p>
                        <p> - ${user.location.city}, ${user.location.country}</p>
                    </div>
                `;
                container.appendChild(testemunhoDiv);
            });
            AOS.refresh();
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
});