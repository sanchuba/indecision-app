class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['One', 'Two', 'Three'];

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action/>
                <Options options = {options}/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Yooo')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
}
    handleRemoveAll() {
        alert('Heyyy');
}
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            e.target.elements.option.value = '';
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));