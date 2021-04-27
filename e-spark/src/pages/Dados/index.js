import React, { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { HeaderMenu } from "../../components/HeaderMenu/";
import { LeftMenu } from "../../components/LeftMenu/";
import { Footer } from "../../components/Footer/";
import { Cadastro } from "../../components/Cadastro/";
import { Login } from "../../components/Login/";
import "./dados.css";

const Dados = () => {
  const { isLoginActive, isCadastroActive } = useContext(AuthContext);
  return (
    <section className="container-dados">
      <HeaderMenu />
      <LeftMenu />
      <h1 className="container-dados-h1">Alteração de Dados</h1>
      <form class="form-dados">
        <section id="coluna-1">
          <section>
            <label class="label">Nome Completo:</label>
            <section class="break2"></section>
            <input
              type="text"
              class="input"
              id="name"
              placeholder="Ex.: Bruno Silva Gomes"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">Gênero:</label>
            <section class="break2"></section>
            <select id="gender" class="select" required="required">
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
              <option value="nonBinary">Não-binário</option>
              <option value="notAns">Prefiro não responder</option>
            </select>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">Celular:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cel"
              class="input"
              placeholder="Ex.: (00) 00000-0000"
              required="required"
              maxlength="11"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">RG:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="rg"
              class="input"
              placeholder="Ex.: 00.000.000"
              required="required"
              maxlenght="7"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">CPF:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cpf"
              class="input"
              placeholder="Ex.: 000.000.000-00"
              required="required"
              maxlenght="11"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">CNH:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cnh"
              class="input"
              placeholder="Ex.: 00000000000/UF"
              required="required"
              maxlenght="14"
            ></input>
          </section>
          <section class="break"></section>
          <input
            id="button-att"
            type="submit"
            class="submit"
            value="Alterar Dados"
          ></input>
          <input
            id="button-reset"
            type="reset"
            class="reset"
            value="Limpar Campos"
          ></input>
        </section>

        <section id="coluna-2">
          <section>
            <label class="label">E-Mail:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="mail"
              class="input"
              placeholder="Ex.: user@xxxxx.com"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <label class="label">Data de Nascimento:</label>
          <section class="break2"></section>
          <input
            type="date"
            id="dataNasc"
            class="input"
            required="required"
          ></input>
          <section class="break"></section>
          <section>
            <label class="label">Telefone:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="tel"
              class="input"
              placeholder="Ex.: (00) 00000-0000"
              required="required"
              maxlength="11"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">Logradouro, nº:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="streetNumb"
              class="input"
              placeholder="Ex.: Rua dos Bobos, nº0"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">Bairro:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="district"
              class="input"
              placeholder="Ex.: Primeiro de Maio"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label class="label">CEP:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cep"
              class="input"
              placeholder="Ex.: 00.000-000"
              required="required"
              maxlenght="7"
            ></input>
          </section>
          <section class="break"></section>
          <section class="break"></section>
        </section>
      </form>
      {isLoginActive ? <Login /> : null}
      {isCadastroActive ? <Cadastro /> : null}
      <Footer />
    </section>
  );
};

export default Dados;
