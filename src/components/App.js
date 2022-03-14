import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  //for NewTaskForm
  const [taskList, setTaskList] = useState([...TASKS]);
  const [taskCategory, setTaskCategory] = useState("Code");
  const [itemText, setItemText] = useState("");

  const [categories, setCategories] = useState([...CATEGORIES]);
  
  //for CategoryFilter
  const [selectedCategory, setSelectedCategory] = useState("All")
 
  //sets the category for adding a task 
  function handleNewFormChangeCat(event){
    setTaskCategory(event.target.value);
  }

  //sets the text for adding a task
  function handleItemText(event){
    setItemText(event.target.value);
  }

  //Adding a new item to task list
  function handleSubmit(event){
    event.preventDefault();
    const newTask = {key: taskList.size, text: itemText, category: taskCategory};
    setTaskList([...taskList, newTask]);
    setItemText("");
    setTaskCategory("Code");
  }

  //set the filter to display tasks 
  function handleCategoryChange(event){
    setSelectedCategory(event.target.textContent)
    event.target.className = "selected";
  }

  //deletes a task from the list
  function topLevelDelete(taskToFilter){
    //console.log(taskToFilter);
    setTaskList([...taskToFilter]);
  }

//filters list if a filter is chosen
  const tasksToDisplay = taskList.filter(task => {
    if(selectedCategory === "All") return true;
    else return task.category === selectedCategory;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter 
      categories={categories} 
      handleCategoryChange={handleCategoryChange}
      />

      <NewTaskForm categories={categories} 
      itemText={itemText} 
      handleItemText={handleItemText}
      handleNewFormChangeCat={handleNewFormChangeCat}
      onTaskFormSubmit={handleSubmit}
      />

      <TaskList 
      tasks={tasksToDisplay}
      topLevelDelete={topLevelDelete}
      />
    </div>
  );
}

export default App;
