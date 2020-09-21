import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchCats } from './../redux/actions/fetchCats';

 class Cats extends Component {
  componentDidMount() {
    this.props.fetchCats();
    
  }
    render() {
        // const {x, increment, decrement, reset} = this.props;
        
        return (
            <Fragment>
           <div>
                {/* <button onClick = {()=> {
              this.props.fetchCats();
            }}>FETCH CATS</button> */}

            {console.log(this.props.cats)}
                <div>
                   
                    { this.props.cats.map = (ca) => {

                      <h1>{ca.id}</h1>

                    } }
                    
                </div>


            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
  cats: state.catsfav
})

const mapDispatchToProps = dispatch => {
    return {
      fetchCats: () => dispatch(fetchCats()),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps )(Cats);



