/* Ser autenticavel significa um metodo autenticar */

export class SistemaAutenticacao {
    static login (autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}