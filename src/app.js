class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option) {
        var index = this.state.options.indexOf(option);

        if (index > -1) {
            this.setState((prevState) => ({
                options: prevState.options.filter(item => item !== option)
            }));
        }
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

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action hasOptions = {this.state.options.length <= 0} options = {this.handlePick}/>
                <Options
                    options = {this.state.options}
                    deleteAllOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption addOption = {this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.options} disabled={props.hasOptions}>What should I do?</button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option) =>
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />)}
        </div>
    )
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    )
};

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

        this.setState(() => ({error}));
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