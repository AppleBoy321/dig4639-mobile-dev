import Component from "./Component.js";
import Task from "./task.js";
function runOnLoad()
{
    console.log("New change");
    let element = document.createElement("div");
    element.id = "Test";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    console.log("Hello World truly");
    let myTask = new Task(
        {
            content: "Finish Ice Exercise",
            done: false
        }
    );
    var container = document.getElementById("tasklist");
    var newtask = document.createElement("div");
    newtask.innerHTML = myTask.render();
    container.appendChild(newtask);
    console.log(myTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);