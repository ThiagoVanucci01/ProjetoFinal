import React, { useState } from "react";
import { useNavigate } from "react-router"; // Importar de 'react-router-dom'
import HeaderSimples from "../components/header/HeaderSimples"; // Importar o cabeçalho simples
// --- Fim do Placeholder ---

function Registrar() {
  // Estados para armazenar os valores dos campos do formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  // Estado para a mensagem de sucesso ou erro geral
  const [mensagem, setMensagem] = useState("");
  // Estado para armazenar erros de validação específicos de cada campo
  const [erros, setErros] = useState({});

  // Hook para navegação programática
  const navigate = useNavigate();

  /**
   * Função para lidar com o envio do formulário de registro.
   * Realiza validações no frontend e envia os dados para a API.
   * @param {Event} e - O evento de submissão do formulário.
   */
  const handleRegister = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    let errosTemp = {}; // Objeto temporário para armazenar erros de validação

    // Validações de frontend:
    if (!email) {
      errosTemp.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Validação de formato de e-mail básico
      errosTemp.email = "E-mail inválido";
    }
    if (!senha) {
      errosTemp.senha = "Senha é obrigatória";
    } else if (senha.length < 6) { // Exemplo: senha mínima de 6 caracteres
      errosTemp.senha = "A senha deve ter pelo menos 6 caracteres";
    }
    if (senha !== confirmarSenha) {
      errosTemp.confirmarSenha = "As senhas não coincidem";
    }
    setErros(errosTemp); // Atualiza o estado de erros

    // Se houver erros de validação no frontend, interrompe a execução
    if (Object.keys(errosTemp).length > 0) {
      setMensagem(""); // Limpa a mensagem geral se houver erros de campo
      return;
    }

    setMensagem("Processando registro..."); // Mensagem de feedback enquanto a requisição é feita

    try {
      const response = await fetch(
        "https://www.tppinturas.somee.com/Users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password: senha }),
        }
      );

      if (!response.ok) {
        // Se a resposta não for OK (status 4xx ou 5xx), tenta extrair a mensagem de erro
        const errorData = await response.json();
        let errorMessage = "Erro desconhecido ao registrar.";

        // Lógica aprimorada para extrair a mensagem de erro da API:
        // Prioriza 'message', depois 'error', e por último tenta 'errors'
        if (errorData.message) {
          errorMessage = errorData.message;
        } else if (errorData.error) {
          errorMessage = errorData.error;
        } else if (errorData.errors) {
          // Se 'errors' for um objeto, tenta pegar o primeiro erro de qualquer campo
          if (typeof errorData.errors === 'object' && !Array.isArray(errorData.errors)) {
            const firstErrorKey = Object.keys(errorData.errors)[0];
            if (firstErrorKey && Array.isArray(errorData.errors[firstErrorKey]) && errorData.errors[firstErrorKey].length > 0) {
              errorMessage = errorData.errors[firstErrorKey][0];
            }
          } else if (Array.isArray(errorData.errors) && errorData.errors.length > 0) {
            // Se 'errors' for um array de strings
            errorMessage = errorData.errors[0];
          }
        }
        throw new Error(errorMessage); // Lança o erro com a mensagem extraída
      }

      // Se a resposta for OK (status 2xx)
      // Não é necessário await response.json() aqui se você não for usar o retorno.
      // const successData = await response.json();
      setMensagem("Registro feito com sucesso!");

      // Redireciona para a página de login após 2 segundos
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Captura erros da requisição fetch ou erros lançados manualmente
      setMensagem("Falha no registro: " + error.message);
      console.error("Erro no registro:", error); // Log para depuração
    }
  };

  return (
    <>
      <HeaderSimples /> {/* Renderiza o cabeçalho simples */}
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gray-100"> {/* Adicionado bg-gray-100 para o fundo */}
        <div className="card border-3 border-black p-4 col-12 col-sm-8 col-md-6 col-lg-4 shadow-lg rounded-lg bg-white"> {/* Adicionado shadow e rounded classes */}
          <form onSubmit={handleRegister}>
            <h1 className="text-center mb-4 text-2xl font-bold">Registrar</h1> {/* Estilo de texto */}

            <div className="mb-3">
              <label htmlFor="frmEmail" className="form-label block text-gray-700 text-sm font-bold mb-2"> {/* Estilo para label */}
                E-mail:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // Correção da sintaxe do className para template literal
                className={`form-control bg-transparent border-black ${erros.email ? "is-invalid" : ""}`}
                type="email"
                id="frmEmail"
              />
              {erros.email && (
                <div className="text-red-500 mt-1 text-sm">{erros.email}</div> // Estilo para erro
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="frmSenha" className="form-label block text-gray-700 text-sm font-bold mb-2"> {/* Estilo para label */}
                Senha:
              </label>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                // Correção da sintaxe do className para template literal
                className={`form-control bg-transparent border-black ${erros.senha ? "is-invalid" : ""}`}
                type="password"
                id="frmSenha"
              />
              {erros.senha && (
                <div className="text-red-500 mt-1 text-sm">{erros.senha}</div> // Estilo para erro
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="frmConfirmarSenha" className="form-label block text-gray-700 text-sm font-bold mb-2"> {/* Estilo para label */}
                Confirmar Senha:
              </label>
              <input
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                // Correção da sintaxe do className para template literal
                className={`form-control bg-transparent border-black ${erros.confirmarSenha ? "is-invalid" : ""}`}
                type="password"
                id="frmConfirmarSenha"
              />
              {erros.confirmarSenha && (
                <div className="text-red-500 mt-1 text-sm">{erros.confirmarSenha}</div> // Estilo para erro
              )}
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary w-50 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" // Estilos para botão
                type="submit" // Adicionado type="submit" explicitamente
              >
                Registrar
              </button>
            </div>
            {mensagem && <div className="text-center mt-3 text-sm font-medium text-gray-700">{mensagem}</div>} {/* Estilo para mensagem geral */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Registrar;
