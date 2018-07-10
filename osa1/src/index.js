import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = () => {
    return (
        <div>
            <h1>Anna palautetta</h1>
        </div>
    )
}

const Statistiikka = (props) => {
    const lkm = (props.state.hyva + props.state.huono + props.state.neutraali)*1.0
    const ka = (props.state.hyva*1.0 + props.state.huono*(-1.0)) / lkm
    const pos = (props.state.hyva*1.0 / lkm) * 100.0
    return (
        <div>
            <h1>Statistiikka</h1>
            Hyvä {props.state.hyva} <br />
            Neutraali {props.state.neutraali} <br />
            Huono {props.state.huono} <br />
            Keskiarvo {ka} <br />
            Positiivisia {pos} %
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            huono: 0,
            neutraali: 0
        }
    }

    hyvaPalaute = () => {
        console.log('hyva palaute')
        this.setState({hyva: this.state.hyva+1})
    }

    neutraaliPalaute = () => {
        console.log('neutraali palaute')
        this.setState({neutraali: this.state.neutraali+1})
    }

    huonoPalaute = () => {
        console.log('huono palaute')
        this.setState({huono: this.state.huono+1})
    }

    render(){
        return (
            <div>
                <Otsikko />
                <button onClick={this.hyvaPalaute}>Hyvä</button>
                <button onClick={this.neutraaliPalaute}>Neutraali</button>
                <button onClick={this.huonoPalaute}>Huono</button>
                <Statistiikka state = {this.state} />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)