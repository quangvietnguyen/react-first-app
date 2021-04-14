import React, { Component, Fragment } from 'react';
import Radium from 'radium';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context'

// const StyleDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         .Person {
//             width: 450px;
//         }
//     }
// `;
class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated);
    }
    render() {
        console.log('[Person.js] rendering...')
        return (
        //<div className="Person" style={style}></div>
        //<StyleDiv>
        //<div className = {classes.Person}>
        //<Aux>
        <Fragment>
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login!</p>}
            {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input 
                type="text"
                ref = {this.inputElementRef}
                //ref={(inputEl) => {this.inputElement = inputEl}}
                onChange={this.props.changed}
                value={this.props.name}
            />
        </Fragment>
        //</Aux>
        //</div>
        //</StyleDiv>
    )
    }
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    // return <p>I'm {this.props.name} and I am {Math.floor(Math.random() * 30)} years old.</p>
    
}

export default withClass(Person, classes.Person);