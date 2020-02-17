import React, { useState } from 'react';

// Css
import './global.css';
import './Header.css';
import './Main.css';
import './Footer.css';
import './FooterResp.css';

// components
import TextArea from './components/TextArea';
import Logo from './components/Logo';

function App() {

    const [ valueText, setValueText ] = useState();

    function changeBold() {
        let text = document.getElementById('text').style.fontWeight = 'bold';
            text = document.getElementById('text').value;

        setValueText( text );
    }

    function changeItalic() {
        let text = document.getElementById('text').style.fontStyle = 'italic';
            text = document.getElementById('text').value;


        setValueText( text );
    }

    function changeUnder() {
        let text = document.getElementById('text').style.textDecoration = 'underline';
            text = document.getElementById('text').value;

        setValueText( text );
    }

    function changeLeft() {
        let text = document.getElementById('text').style.textAlign = 'left';
            text = document.getElementById('text').value;

        setValueText( text );
    }

    function changeCenter() {
        let text = document.getElementById('text').style.textAlign = 'center';
            text = document.getElementById('text').value;

        setValueText( text );
    }

    function changeRigth() {
        let text = document.getElementById('text').style.textAlign = 'right';
            text = document.getElementById('text').value;

        setValueText( text );
    }

    function reloadPag() {
        window.history.go();
    }

    return (
        <div className="container">
            <header>
                <Logo />
            </header>
            <main>
                <TextArea value={valueText} />
            </main>
            <footer>
                <div className="menu">
                    <div className="options">
                        <button onClick={changeBold} ><i className="fas fa-bold"></i></button>
                        <button onClick={changeItalic} ><i className="fas fa-italic"></i></button>
                        <button onClick={changeUnder} ><i className="fas fa-underline"></i></button>
                        <button onClick={changeLeft} ><i className="fas fa-align-left"></i></button>
                        <button onClick={changeCenter} ><i className="fas fa-align-center"></i></button>
                        <button onClick={changeRigth}><i className="fas fa-align-right"></i></button>
                        <button onClick={reloadPag} ><i className="fas fa-history"></i></button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
