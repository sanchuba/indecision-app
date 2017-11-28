import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
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
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (option) => {
        let index = this.state.options.indexOf(option);

        if (index > -1) {
            this.setState((prevState) => ({
                options: prevState.options.filter(item => item !== option)
            }));
        }
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    closeModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valid value to add option.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div className="body-background">
                <Header title = {title} subtitle = {subtitle}/>
                <div className="container">
                    <div className="widget">
                        <Action hasOptions = {this.state.options.length <= 0} options = {this.handlePick}/>
                        <Options
                            options = {this.state.options}
                            deleteAllOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption addOption = {this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} closeModal = {this.closeModal}/>
            </div>
        )
    }
}

export default IndecisionApp;