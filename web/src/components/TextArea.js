import React from 'react';

function TextArea({ value }) { 
    
    return (
        <div className="textarea">
            <textarea className="text" id="text" placeholder="Digite o texto aqui..." rows="10" value={ value }></textarea>
        </div>
    );

}

export default TextArea;