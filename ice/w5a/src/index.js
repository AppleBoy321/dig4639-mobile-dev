function runOnLoad()
{
    // Create a container for us
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);

    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
}
function onClick() {
    console.log("clicked!");
}

window.addEventListener("DOMContentLoaded", runOnLoad);