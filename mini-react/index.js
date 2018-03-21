
const React = {
    render: (data, domNode) => domNode.appendChild(data),
    
    createElement: (elem, props, children) => {
    const element = document.createElement(elem);

    if (Array.isArray(children)){
        children.map(item => element.append(item));
    }
    else element.textContent = children;
    
    // Checking if there is an textContent in our props and if props obj is not undefined
    if (props && props.textContent) {
        element.textContent = props.textContent; 
    }
    // Same for backgroundColor
    else if (props && props.style.backgroundColor) {
        element.style.backgroundColor = props.style.backgroundColor;
        }

    return element;
    }

}

const app  = React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
    ]);

React.render(
    app,
    document.getElementById('root'),
)   