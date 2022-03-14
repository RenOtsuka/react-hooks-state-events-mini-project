import React from "react";

function NewTaskForm({categories, itemText, handleItemText, handleNewFormChangeCat, onTaskFormSubmit}) {


  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={itemText} onChange={handleItemText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewFormChangeCat}>
          <option value={categories[1]}>{categories[1]}</option>
          <option value={categories[2]}>{categories[2]}</option>
          <option value={categories[3]}>{categories[3]}</option>
          <option value={categories[4]}>{categories[4]}</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
