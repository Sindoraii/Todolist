//import
const taskComponent = window.TaskComponent;
const listComponent = window.ListComponent;

let body = document.querySelector('body');
let root = document.getElementById('root');
body.appendChild(root);
//test
listComponent.mount(root);
