import React from 'react'
import ReactDOM from 'react-dom'

const Title = () => (
    <div>
        <h1>Anna palautetta</h1>
    </div>
)

const Statistics = (props) => {
    const lkm = (props.state.hyva + props.state.huono + props.state.neutraali)*1.0
    const ka = (props.state.hyva*1.0 + props.state.huono*(-1.0)) / lkm
    const pos = (props.state.hyva*1.0 / lkm) * 100.0
    const pos_pros = pos + " %"

    if (lkm > 0) {
        return (
            <div>
                <h1>Statistiikka</h1>
                <table>
                    <tbody>
                        <Statistic text="Hyvä" stat={props.state.hyva} />
                        <Statistic text="Neutraali" stat={props.state.neutraali} />
                        <Statistic text="Huono" stat={props.state.huono} />
                        <Statistic text="Keskiarvo" stat={ka} />
                        <Statistic text="Positiivisia" stat={pos_pros} />
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Statistiikka</h1>
                Ei yhtään palautetta annettu
            </div>
        )
    }
}

const Statistic = ({text, stat}) => (
    <tr><td>{text}</td><td>{stat}</td></tr>
)

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            huono: 0,
            neutraali: 0
        }
    }

    feedbackHandler = (feedback) => {
        return () => {
            // console.log('palaute: ', feedback)
            this.setState({[feedback]: this.state[feedback]+1})
        }
    }

    render(){
        return (
            <div>
                <Title />
                <Button handleClick={this.feedbackHandler("hyva")} text="Hyvä" />
                <Button handleClick={this.feedbackHandler("neutraali")} text="Neutraali" />
                <Button handleClick={this.feedbackHandler("huono")} text="Huono" />
                <Statistics state={this.state} />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)