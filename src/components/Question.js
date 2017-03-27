import React from 'react';

import Choices from './Choices';

function Question(props){

    if (!props.questions) {
        return false;
    }

    return (

      <div>
         <h2>{props.questions[props.current_step].question}</h2>
         <Choices 
           questionId={props.current_step}
           onChoiceSelect={props.onChoiceSelect}
           choices={props.questions[props.current_step].choices} />
      </div>

    );

}

export default Question;
