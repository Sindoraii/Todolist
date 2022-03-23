//import
const listComponent = window.ListComponent;
const dataSource = window.DataSource;
const formComponent = window.FormComponent;

// init stub data
const stubData = [
    {title: 'header1', description: 'Comment1', status: 'in-progress', id: '111'},
    {title: 'header2', description: 'Comment2', status: 'open', id: '222'},
    {title: 'header3', description: 'Comment3', status: 'complete'}
];

// init SPA
const root = document.getElementById('root');
formComponent.mount(root);
dataSource.subscribe(listComponent.update);
dataSource.update(stubData);
listComponent.mount(root);
