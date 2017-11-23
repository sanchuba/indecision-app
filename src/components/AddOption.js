import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        if(option) {
            e.target.elements.option.value = '';
        }

        this.setState(() => ({error}));
    };
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

export default AddOption;