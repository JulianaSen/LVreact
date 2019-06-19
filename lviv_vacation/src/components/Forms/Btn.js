import React, {Component} from 'react';

class Btn extends Component{
    render() {
        const prop = this.props;
        return (
            <>
                {/* <form class={prop.csform}> */}
                    <div className={prop.csdiv}>
                        <input id ={prop.idt} type={prop.tp} value={prop.vl} />
                    </div>
                {/* </form> */}
            </>
        )
    }
}

export default Btn;