export class RepositoryAlunos {

    _getLocalStorage() {
        const alunos = localStorage.getItem('alunos');
        return alunos ? JSON.parse(alunos) : [];
    }
    
    _setLocalStorage(){
        localStorage.setItem('alunos', JSON.stringify(this.alunos));
    }

    constructor() {
        this.alunos = [];
    }

    addAluno(aluno) {
        this.alunos.push(aluno);
        this._setLocalStorage();
    }

    getAlunos() {
        this.alunos = this._getLocalStorage();
        return this.alunos;
    }
}