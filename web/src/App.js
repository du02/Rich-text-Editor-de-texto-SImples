import React from 'react';

// Img
import logo from './logo.png';

// Css
import './global.css';
import './Header.css';
import './Main.css';
import './Footer.css';

function App() {
  return (
    <div class="container">
        <header>
            <div class="logo">
                <img src={logo} alt="logo" width="150" height="100"/>
            </div>
        </header>
        <main>
            <div class="textarea">
                <textarea class="text" placeholder="Digite o texto aqui..." rows="10"></textarea>
            </div>
        </main>
        <footer>
            <div class="menu">
                <div class="options">
                    <button><i class="fas fa-bold"></i></button>
                    <button><i class="fas fa-italic"></i></button>
                    <button><i class="fas fa-underline"></i></button>
                    <button><i class="fas fa-align-left"></i></button>
                    <button><i class="fas fa-align-center"></i></button>
                    <button><i class="fas fa-align-right"></i></button>
                    <button><i class="fas fa-undo-alt"></i></button>
                    <button><i class="fas fa-redo-alt"></i></button>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
