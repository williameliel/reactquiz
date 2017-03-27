import React from 'react';

import ChoiceItem from './ChoiceItem';

function Choices(props){
   
    if(!props.choices){
      return false;
    }
    /* Map choice items and loop trough them passing props to the ChoiceItem component */
    const choiceItems = props.choices.map((choice, i) => {
        return (
            <ChoiceItem
                key={`${props.questionId}-${i}`}
                questionId={props.questionId}
                onChoiceSelect={props.onChoiceSelect}
                choice={choice} />
                );
    });

    return (
        <div className="col-md-4">
         {choiceItems}
        </div>
    );
};

export default Choices;
