import React, {Component} from 'react';
import { connect } from 'react-redux';


class MainContent extends Component {
    
    render() {
        return (
            <div className="choice">
                <span className="textBudget"> 
                    {this.props.enter}
                </span> 
                <div className="bdg-ipt">
                    <form className="budget_form">
                        <input className="input_budget" type="text" name="Budget" placeholder="100$" />
                        <button className="btn" >
                            {this.props.submit}
                        </button>
                    </form>
                </div>
                <br />
                <span className="textAct"> 
                    {this.props.activity}
                </span>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return{
//         loading: state.data.loading
//     };
//   };

// const mapDispatchToProps = dispatch => {
//     return{
//         handleLoading: (evt) => {
//             evt.preventDefault();
//             dispatch({type: 'FETCH_DATA_BEGIN', loading: true})
//         }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
export default MainContent;