let buttonTextValue = 'Show details';
let details = 'Here are some details after clicking the button.';

const changeButtonTextValue = () => {
    if (buttonTextValue === 'Show details') {
        buttonTextValue = 'Hide details';
    } else {
        buttonTextValue = 'Show details';
    }
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={changeButtonTextValue}>{buttonTextValue}</button>
            <p>{buttonTextValue === 'Hide details' && details}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();