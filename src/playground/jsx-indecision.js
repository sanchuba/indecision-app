console.log('Yoepiee, its running!');

const title = {
    title: 'My new app!',
    subtitle: 'Welcome to my new app.',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        title.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

const removeAllOptions = () => {
    title.options = [];
    renderTemplate();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * title.options.length);
    alert(title.options[randomNum]);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{title.title}</h1>
            {title.subtitle && <p>{title.subtitle}</p>}
            <p>{title.options && title.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{title.options.length}</p>
            <button disabled={title.options.length <= 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove all</button>
            <ol>
                {
                    title.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();