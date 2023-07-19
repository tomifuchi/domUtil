//Short helpers for DOM elements
//DOM elements creation and setting attributes
const c = (elm) => document.createElement(elm); //(c)reate
const tc = (target, val) => {target.textContent = val; return target}; //(t)ext(c)ontent
const sa = (target, attrib, val) => {target.setAttribute(attrib, val); return target}; //(s)et(a)ttribute, here attrib is a string
const ap = (target, ...objs) => {objs.forEach(obj => target.appendChild(obj)); return target};//(ap)pendChild

//(c)reate element with (a)trribute, here attrib is an object with 
//desired attributes values inside here's an example
//{class: "nav-bar", id: "main-nav"}
const cea = (elm, attrib) => {
    const i = c(elm);
    for(prop in attrib) {
        sa(i, prop, attrib[prop]);
    }
    return i;
};

//Clearing child of a DOM elements
//(cl)ear node's (c)hilds
const clc = (node) => {
    if(node.hasChildNodes()){
        [...node.childNodes].forEach((child) => {
             node.removeChild(child)
        });
    }
}

//DOM querying
//Element
const qc = (elm, child) => elm.querySelector(child); //(q)uery element's (c)hild
const qcf = (elm) =>  (child) => elm.querySelector(child); //(q)uery element's (c)hild (f)ixed
//Attributes
const qa = (elm, attrib) => elm.querySelector(attrib); //For multiple different targets, (q)uery (attribute)
const qafe = (elm) => (attrib) => elm.querySelector(attrib); //For fixed querying, (q)uery (a)ttribute (f)ixed (e)lement
const qafa = (attrib) => (elm) => elm.querySelector(attrib); //For fixed querying, (q)uery (a)ttribute (f)ixed (a)ttribute

/*
This is an example on using module for creating a form. Look at the code it should represent code like pug
creating appending, setting attributes.
function createFormElement() {
    const form = ap(cea('form', {action:"", method:"post" ,id:"create-todo-form"}),
        tc(c('h2'), 'todo creation'),
        ap(c('fieldset'),
            tc(c('legend'), 'todo info'),
            ap(c('p'),
                tc(cea('label',{for:"title"}), 'Title:'),
                cea('input', {type:"text", id:"title", name:"todo_title" ,required:''}),
                c('span')),
            ap(c('p'),
                tc(cea('label', {for:"description"}), 'Description:'),
                cea('input', {type:"text", id:"description", name:"todo_description", required: ''}),
                c('span')),
            ap(c('p'),
                tc(cea('label', {for:"content"}), 'Content:'),
                cea('textarea', {rows:"5" ,id:"content", maxlength:"1000", required: ''})),
            ap(c('p'),
                tc(cea('label',{for:"due-date"}), 'Due date:'),
                cea('input',{type:"date" ,id:"due-date", name:"todo_dueDate", required: ''})),
            ap(c('p'), 
                tc(cea('label', {for:"priority"}), 'Priority:'),
                ap(cea('select', {id:"priority"}),
                    tc(cea('option', {value:"normal"}),'Normal'),
                    tc(cea('option', {value:"moderate"}), 'Moderate'),
                    tc(cea('option', {value:"urgent"}), 'Urgent'))),
            ap(c('p'),
                tc(cea('label', {for:"tags"}), 'Tags'),
                tc(c('p'), 'These are space separated, and have syntax of indentifier:topic, example: rockband:guitar, programming:haskell, study:math:'),
                cea('input', {type:"text" ,id:"tags", name:"todo_tags"})),
            ap(c('p'),
                tc(c('p'), 'Status:'),
                tc(cea('label',{for:"finished"}), 'Finished'),
                cea('input', {type:"radio", id:"finished", value:"finished", name:"todo_status"}),
                tc(cea('label',{for:"unfinised"}), 'Unfinished'),
                cea('input', {type:"radio", id:"unfinished", value:"unfinished", name:"todo_status", checked: ''})),
            ap(c('p'),
                tc(cea('button', {type:"button", id:"create-todo-btn"}), 'Add todo'))
        )
    );
    sa(qc(form, '#due-date'), 'min', new Date().toISOString().split("T")[0]);

    return form;
}
*/

module.exports = {
    //Creation
    c, tc, sa, ap, cea,
    //Clearing
    clc,
    //Querying
    qc, qcf, qa, qafe, qafa
}