import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: bloco isolado de HMTL, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42550653?s=400&u=8adc5c5d4e1704f60fbf67d09760e3c2bb3c5e80&v=4" alt="Matheus Souza" />
              <div className="user-info">
                <strong>Matheus Souza</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Junior Backend Developer</p>
            <a href="https://github.com/mtnouka">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42550653?s=400&u=8adc5c5d4e1704f60fbf67d09760e3c2bb3c5e80&v=4" alt="Matheus Souza" />
              <div className="user-info">
                <strong>Matheus Souza</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Junior Backend Developer</p>
            <a href="https://github.com/mtnouka">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42550653?s=400&u=8adc5c5d4e1704f60fbf67d09760e3c2bb3c5e80&v=4" alt="Matheus Souza" />
              <div className="user-info">
                <strong>Matheus Souza</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Junior Backend Developer</p>
            <a href="https://github.com/mtnouka">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42550653?s=400&u=8adc5c5d4e1704f60fbf67d09760e3c2bb3c5e80&v=4" alt="Matheus Souza" />
              <div className="user-info">
                <strong>Matheus Souza</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Junior Backend Developer</p>
            <a href="https://github.com/mtnouka">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
