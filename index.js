//import
const taskComponent = window.TaskComponent;

let body = document.querySelector('body');
let root = document.getElementById('root');
body.appendChild(root);
taskComponent.mount(root);
