import React, {Component} from 'react';


class Input extends Component{
    render() {
        const prop = this.props;
        return (

            <>
                 <form class={prop.csform}>
                    <div class={prop.csdiv}>
                        <input type={prop.tp} name={prop.nm} placeholder={prop.pdr} />
                    </div>
            </form>
            </>
        )
    }
}

export default Input;