import React, { Component } from 'react'

import Keypads from '../../components/keypads/keypads'
import Display from '../../components/Display/Display'
import Switchs from './../../components/keypads/Switchs';


class Calculator extends Component {

    state = {
        result: '',
        calStatus: false
    }

    buttonPressed = buttonName => {
        if (buttonName === '=') {
            this.calculateIt()
        } else if (buttonName === 'C') {
            this.resetIt()
        } else if (buttonName === 'CE') {
            this.backspace()
        } else if (buttonName === 'ON') {
            this.setState({
                calStatus: true
            })
        } else if (buttonName === 'OFF') {
            this.setState({
                calStatus: false
            })
        } else if (buttonName === 'save') {
            this.saveData()
        } else {
            this.setState({
                result: this.state.result + buttonName
            })
        }
    } 
    

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }
     resetIt = () => {
        this.setState({
            result: ''
        })
    }

    calculateIt = () => {
    try{this.setState({
            result: eval(this.state.result)
    })
        } 
    catch (e) {
        this.setState({
            result: 'error'
        })
        }
    }

    render() {

        
        let keyPad = null;
        if (this.state.calStatus) {
            keyPad = (
                <Keypads buttonPressed={this.buttonPressed}/>
            )
        }
        return (
        <div className='root-div'>
            <div className='calulator-body'> 
                <h1 style={{textAlign: 'right', paddingRight: '10px' , marginTop: '5px', color: 'white'}} >Calculator</h1>
                <Display result={this.state.result} />
                <Switchs  buttonPressed={this.buttonPressed} />
                {keyPad}
            </div>
        </div>
    )
  }
}
export default Calculator
