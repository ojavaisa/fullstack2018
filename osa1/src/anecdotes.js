import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => {
    return (
        <div>
            {props.anecdotes[props.state.selected]} <br />
            This anecdote has {props.state.votes[props.state.selected]} votes.
        </div>
    )
}

const Best = (props) => {
    const best = Math.max(...props.votes)
    const ind = props.votes.indexOf(best)
    return (
        <div>
            <h1>Anecdote with most wotes:</h1>
            {props.anecdotes[ind]} <br />
            This anecdote has {best} votes.
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: new Array(this.props.anecdotes.length).fill(0)
        }
    }

    randomQuote = () => {
        const len = anecdotes.length
        const rand = Math.floor(Math.random() * len)
        
        this.setState({selected: rand})
    }

    voteSelected = () => {
        const temp = [...this.state.votes]
        temp[this.state.selected] += 1

        this.setState({votes: temp})
    }

    render() {
        return (
            <div>
                <Anecdote anecdotes={this.props.anecdotes} state={this.state} />
                <Button handleClick={this.randomQuote} text="Next anecdote"/>
                <Button handleClick={this.voteSelected} text="Vote this one"/>
                <Best votes={this.state.votes} anecdotes={this.props.anecdotes} />
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)