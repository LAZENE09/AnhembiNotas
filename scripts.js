         const materiasContainer = document.getElementById('materiasContainer');
        const adicionarMateriaBtn = document.getElementById('adicionarMateriaBtn');

         materiasContainer.addEventListener('click', (event) => {
            if (event.target && event.target.classList.contains('calcularMediaBtn')) {
                const form = event.target.closest('form');
                const notaP1 = parseFloat(form.querySelector('[name="notaP1"]').value);
                const pesoP1 = parseFloat(form.querySelector('[name="pesoP1"]').value);
                const trab1 = parseFloat(form.querySelector('[name="trab1"]').value);
                const pesoTrabP1 = parseFloat(form.querySelector('[name="pesoTrabalhoP1"]').value);
                const notaP2 = parseFloat(form.querySelector('[name="notaProva"]').value);
                const pesoP2 = parseFloat(form.querySelector('[name="pesoP2"]').value);
                const trab2 = parseFloat(form.querySelector('[name="trab2"]').value);
                const pesoTrabP2 = parseFloat(form.querySelector('[name="pesoTrabalhoP2"]').value);

                const media = (
                    (notaP1 * pesoP1) +
                    (trab1 * pesoTrabP1) +
                    (notaP2 * pesoP2) +
                    (trab2 * pesoTrabP2)
                ) / (pesoP1 + pesoTrabP1 + pesoP2 + pesoTrabP2);

                alert(`A média da matéria é: ${media.toFixed(2)}`);

            }
        });

        adicionarMateriaBtn.addEventListener('click', () => {
            const novaMateria = document.createElement('form');
            novaMateria.classList.add('notaForm');
            novaMateria.innerHTML = `
                <label for="materia">Matéria:</label>
                <input type="text" id="Aula" name="materia" required> <br><br>              
                <label for="notaP1">Nota P1:</label>
                <input type="number" id="notaP1" name="notaP1" step="1" min="0" max="10" required>
                <label for="pesoP1">Peso:</label>
                <input type="number" id="PesoP1" name="pesoP1" step="0.01" min="0.01" max="0.60" required>
                <label for="trabalhoP1">PP1:</label>
                <input type="number" id="TrabalhoP1" name="trab1" step="1" min="0" max="10" required>
                <label for="pesoTrabalhoP1">Peso:</label>
                <input type="number" id="PesoTrabP1" name="pesoTrabalhoP1" step="0.01" min="0.01" max="0.60" required>
                <br><br>
                <label for="notaP2">Nota P2:</label>
                <input type="number" id="notaP2" name="notaProva" step="1" min="0" max="10" required>
                <label for="pesoP2">Peso:</label>
                <input type="number" id="PesoP2" name="pesoP2" step="0.01" min="0.01" max="0.60" required>
                <label for="trabalhoP2">PP2:</label>
                <input type="number" id="TrabalhoP2" name="trab2" step="1" min="0" max="10" required>
                <label for="pesoTrabalhoP2">Peso:</label>
                <input type="number" id="PesoTrabP2" name="pesoTrabalhoP2" step="0.01" min="0.01" max="0.60" required>
                <br><br>
                <button type="button" class="calcularMediaBtn">Calcular Média</button> <br></br>
            `;
            materiasContainer.appendChild(novaMateria);
        });

       