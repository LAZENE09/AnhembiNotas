import { RepositoryAlunos } from "./Repository";    

const repo = new RepositoryAlunos();

function exibirAlunos() {
    const listaElement = document.getElementById('listaAlunos');
    listaElement.innerHTML = ''; // Limpa a lista antes de exibir os alunos

    const alunos = repo.getAlunos();
    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = `${aluno.nome} - Média: ${aluno.media.toFixed(2)}`;
        listaElement.appendChild(li);
    })

}

window.addEventListener ('load', () => {
    exibirAlunos();
});