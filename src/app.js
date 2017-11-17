class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        //this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['One', 'Two', 'Three']
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
    // handleAddOption() {
    //     this.setState((prevState) => {
    //         return {
    //             options: prevState.push(option)
    //         }
    //     });
    // }
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action hasOptions = {this.state.options.length <= 0} options = {this.handlePick}/>
                <Options options = {this.state.options} deleteAllOptions = {this.handleDeleteOption}/>
                <AddOption /*addOption = {this.handleAddOption}*//>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            e.target.elements.option.value = '';
            //this.props.addOption;
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