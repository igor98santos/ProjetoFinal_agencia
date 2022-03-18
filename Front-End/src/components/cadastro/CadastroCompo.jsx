import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pessoa from "../../service/PessoaAxios";
function CadastroCompo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const pessoa = { nome, email, senha };

    if (id) {
      Pessoa.putPessoa(id, pessoa).then((response) => {
        navigate("/Cadastro");
      });
    } else {
      Pessoa.postPessoa(pessoa)
        .then((response) => {
          navigate("/Cadastro");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    function getClienteById() {
      if (id) {
        Pessoa.getClienteById(id)
          .then((response) => {
            setNome(response.data.nome);
            setEmail(response.data.email);
            setSenha(response.data.senha);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getClienteById();
  }, [id]);

  return (
    <>
      <div>
        <form>
          <fieldset>
            <legend>
              <h2 className="text-center mt-3">
                {id ? "Editar" : "Crie sua conta"}
              </h2>
              <hr />
            </legend>
            <div className=" d-flex flex-wrap m-4 row">
              <div>
                <label htmlFor="cliente" className="m-2">
                  NOME:
                </label>
                <hr />
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cliente" className="m-2">
                  E-mail:
                </label>
                <hr />
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cliente" className="m-2">
                  SENHA:
                </label>
                <hr />

                <input
                  type="text"
                  id="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary m-4"
              onClick={(e) => criarOuEditarCliente(e)}
            >
              Finalizar
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
export default CadastroCompo;
