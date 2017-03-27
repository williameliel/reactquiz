import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Start from './components/Start';
import Question from './components/Question';
import Results from './components/Results';

class App extends Component {
    
    constructor(props) {
        
        super(props);

        /* Initialize the state variables */
        this.state = {
            quiz: [],
            current_step: -1,
            score: 0,
            completed: false
        };
        /* Load the quiz info */
        this.loadQuiz();
    }

    /* fetches json file from data folder */
    loadQuiz() {

        fetch("./data/quiz.json")
            .then(response => response.json())
            .then(json =>
                this.setState({
                    quiz: json
                })
            );

    }

    /* Handles the choice selection from the ChoiceItem component */
    handleSelect(choice) {

        this.handleScore(choice);
        this.handleStep();

    }

    /* Tallies score for each question */
    handleScore(choice) {

        if (choice.correct) {

            var new_score = this.state.score + 1;

            this.setState({
                score: new_score
            });

        }

    }

    /* Moves from question to question OR completes the quiz */
    handleStep() {

        if (this.state.current_step === this.state.quiz.questions.length - 1) {

            setTimeout(() => { this.setState({ completed: true }) }, 600);

        } else {

            var next_question = this.state.current_step + 1

            setTimeout(() => { this.setState({ current_step: next_question }) }, 600);

        }

    }

    /* Delivers results to user */
    handleVerdict() {
       
        var verdict = '';

        if (this.state.score <= this.state.quiz.questions.length / 2) {
            return 'SAD!';
        } else {
            return 'You are a pretty cool guy!';
        }

    }

    /* Renders final results */
    renderResults() {

        return (

          <Results 
            score={this.state.score}
            length={this.state.quiz.questions.length}
            verdict={this.handleVerdict()} />

        );

    }

    /* Renders start screen with title and description of quiz */
    renderStart() {

        return (

          <Start 
            title={this.state.quiz.title}
            description ={this.state.quiz.description}
            handleStart={ () => this.setState( {'current_step' : 0} ) } />

        );

    }

    /* Renders the quiz questions */
    renderQuestion() {
        return (
            <Question 
              onChoiceSelect={ (choice) => this.handleSelect(choice) }
              questions={this.state.quiz.questions} 
              current_step={this.state.current_step} />
        );
    }

    render() {
        /* If state has not been updated... */
        if (!this.state.quiz || this.state.quiz === []) {
            return <div>Loading...</div>;
        }
        /* Handle / render the results of the quiz */
        if (this.state.completed) {
            return (
              <div>
                {this.renderResults()}
              </div>
            );
        }
        /* Default render will either show the start screen or the questions */
        return (
            <div> 
              { this.state.current_step < 0 ? this.renderStart() : this.renderQuestion() }
            </div>

        );

    }

}

ReactDOM.render(<App />, document.querySelector('.container'));
