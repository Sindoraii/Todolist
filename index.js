//import
const listComponent = window.ListComponent;
const DataSourse = window.DataSourse;
const TaskComponent = window.TaskComponent;

let body = document.querySelector('body');
let root = document.getElementById('root');
body.appendChild(root);



let task1 = new TaskComponent('header1','success','comment1');
let task2 = new TaskComponent('header2','success','comment2');
let task3 = new TaskComponent('header3','success','comment3');
let task4 = new TaskComponent('header4','success','comment4');

let tasks = [task1,task2,task3,task4,];



DataSourse.subscribe(listComponent.update);
DataSourse.update(tasks);
listComponent.mount(root);
