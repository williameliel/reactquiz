import React from 'react';

function ChoiceItem({ choice, questionId, onChoiceSelect, selected }){

    return (
        <div>
          <label>
            <input 
                value={choice.value}
                onChange={() => onChoiceSelect(choice)}
                type="radio" 
                name={`radio-group-${questionId}`} />
                  {choice.value}
          </label>
      </div>
    );
};

export default ChoiceItem;
