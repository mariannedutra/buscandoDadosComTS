// 1. O "contrato" que define a forma do nosso objeto de usuário
interface Usuario {
    id: number;
    nome: string;
    email: string;
  }
  
  // 2. Tipamos o retorno da função: ela retorna uma Promise que, quando resolvida,
  // entregará um objeto que segue o contrato "Usuario".
  function buscarUsuario(id: number): Promise<Usuario> {
    console.log("Buscando dados do usuário...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          const usuario: Usuario = { id: 1, nome: "Ada Lovelace", email: "ada@email.com" };
          resolve(usuario);
        } else {
          reject("Usuário não encontrado.");
        }
      }, 2000);
    });
  }
  
  async function main() {
    try {
      console.log("Iniciando a aplicação...");
      // 3. A variável "usuario" agora tem um tipo conhecido!
      const usuario: Usuario = await buscarUsuario(1);
  
      // Tente digitar "usuario." e veja o autocomplete do editor!
      // Tente acessar "usuario.idade" e veja o erro que o TS aponta!
      console.log(`Usuário encontrado: ${usuario.nome} (${usuario.email})`);
      console.log("Aplicação finalizada.");
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  main();