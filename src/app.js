class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOption() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valid value to add option.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action hasOptions = {this.state.options.length <= 0} options = {this.handlePick}/>
                <Options options = {this.state.options} deleteAllOptions = {this.handleDeleteOption}/>
                <AddOption addOption = {this.handleAddOption}/>
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
    render() {
        return (
            <div>
                <button onClick={this.props.options} disabled={this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.deleteAllOptions}>Remove all</button>
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
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        if(option) {
            e.target.elements.option.value = '';
        }

        this.setState(() => {
            return {
                error: error
            }
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));