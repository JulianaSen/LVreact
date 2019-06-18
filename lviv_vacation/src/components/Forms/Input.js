import React, {Component} from 'react';


class Input extends Component{
    render() {
        const prop = this.props;
        return (
            <>  
                {/* <form class={prop.csform}> */}
                    <div className={prop.csdiv}>
                        <input type={prop.tp} name={prop.nm} placeholder={prop.pdr} value={prop.vl} />
                    </div>
                {/* </form> */}
            </>
        )
    }
}

export default Input;