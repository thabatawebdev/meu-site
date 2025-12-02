<section id="contato">
    <div class="container">
        <h2>Contato</h2>
        <p>Agende seu horário através do telefone (21) 97031-6108 ou pelo Instagram 
            <a href="https://instagram.com/fatimarodrigues077" target="_blank">@fatimarodrigues077</a>
        </p>

        <h3>Agendamento Online</h3>
        <form id="agendamento-form">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <label for="procedimento">Procedimento:</label>
            <select id="procedimento" name="procedimento" required>
                <option value="">Selecione</option>
                <option value="Spa dos Pés">Spa dos Pés</option>
                <option value="Pump">Pump</option>
                <option value="Limpeza de Pele">Limpeza de Pele</option>
                <option value="Massagem Modeladora">Massagem Modeladora</option>
            </select>

            <label for="data">Data:</label>
            <input type="date" id="data" name="data" required>

            <label for="hora">Hora:</label>
            <input type="time" id="hora" name="hora" required>

            <button type="submit">Agendar</button>
        </form>

        <div class="confirmation" id="confirmation"></div>
    </div>
</section>
<script>

    
document.getElementById("agendamento-form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio tradicional

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const procedimento = document.getElementById("procedimento").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const confirmation = document.getElementById("confirmation");

    confirmation.innerHTML = `
        <p>
            💛 <strong>${nome}</strong>, seu agendamento foi registrado! <br><br>
            📌 <strong>Procedimento:</strong> ${procedimento} <br>
            📅 <strong>Data:</strong> ${data} <br>
            🕒 <strong>Hora:</strong> ${hora} <br><br>
            Um e-mail de confirmação será enviado para <strong>${email}</strong>.
        </p>
    `;

    confirmation.style.display = "block";
    confirmation.style.marginTop = "20px";
});
</script>
