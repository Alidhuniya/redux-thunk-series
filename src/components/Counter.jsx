import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { increment, decrement, reset } from './../redux/actions/counterAction';

 class Counter extends Component {
    render() {
        // const {x, increment, decrement, reset} = this.props;
        return (
            <Fragment>
            <div>
            <h3>Counter: {this.props.counter}</h3>
           {console.log(this.props.counter)} 
            <br />
            <button onClick = {()=> {
              this.props.increment();
            }}>INCREMENT</button>
             <button onClick = {()=> {
              this.props.decrement();
            }}>DECREMENT</button>
            <button onClick = {()=> {
              this.props.reset();
            }}>RESET</button>
             
          </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.x
    }
}

const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps  )(Counter);



