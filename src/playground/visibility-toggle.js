class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: 'Visibility toggle',
            description: 'Some text here.',
            visibility: false
        }
    }
    handleToggleVisibility() {
        if (this.state.visibility === false) {
            this.setState(() => {
                return {
                    visibility: true
                }
            });
        } else {
            this.setState(() => {
                return {
                    visibility: false
                }
            });
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility && this.state.description}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// let buttonTextValue = 'Show details';
// let details = 'Here are some details after clicking the button.';
//
// const changeButtonTextValue = () => {
//     if (buttonTextValue === 'Show details') {
//         buttonTextValue = 'Hide details';
//     } else {
//         buttonTextValue = 'Show details';
//     }
//     render();
// };
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={changeButtonTextValue}>{buttonTextValue}</button>
//             <p>{buttonTextValue === 'Hide details' && details}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
//
// render();