import react from 'react'

class RenderClass extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return(
            <div className="class-container">
                 <h1>{this.props.classTitle}</h1>
                 <p>{this.props.isClass}</p>
            </div>
        )
    }
}

export default RenderClass;