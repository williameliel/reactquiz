import React from 'react';

function Results({ score, length, verdict }) {

    const result = `You scored ${score} out of ${length}. ${verdict}`;

    return (
        <h2>
          { result }     
        </h2>
    );
};

export default Results;
