import react from 'react'
import ReactDOM from 'react-dom'
import RenderClass from './RenderClass'
class ClassMaker extends react.Component{
    constructor(props) {
        super(props)
        this.state = {
            classTitle: '',
            isClass: 'class'
        }

        this.handleChange = this.handleChange.bind(this)
        this.isClass = this.isClass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.createNewClass = this.createNewClass.bind(this)
    }

    handleChange(event) {
        this.setState({classTitle: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.createNewClass()
    }

    isClass(event) {
        this.setState({isClass: event.target.value})
        console.log(this.state.isClass)
    }

    createNewClass(){
        ReactDOM.render(<RenderClass classTitle={this.state.classTitle} isClass={this.state.isClass}/>, document.getElementById('container'))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="title"/>
                    <select onChange={this.isClass} value={this.state.isClass}>
                        <option value="class">Class</option>
                        <option value="id">id</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ClassMaker