export default function Task(task) {
    let isSelected = false;
    const li = document.createElement('li');
    const itemTaskElement = document.createElement('div');
    itemTaskElement.classList.add('item-element');
    const checkBoxContainer = document.createElement('div');
    checkBoxContainer.classList.add('checkbox-container');
    const label = document.createElement('label');
    const iconMenu = document.createElement('div');
    iconMenu.classList.add('icon-menu-container');
    const iconDelete = document.createElement('div');
    iconDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
   
    iconMenu.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    const checkBox = document.createElement('input');
    
    checkBox.type = 'checkbox';
    checkBox.id = `check${task.index}`;
    label.htmlFor = `check${task.index}`;
    label.innerText = task.description;
  
    label.addEventListener('click', () => {
      isSelected = !isSelected;
      if (isSelected === true) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });
  
    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });
  
    checkBoxContainer.append(checkBox, label);
    itemTaskElement.append(checkBoxContainer, iconMenu);
    li.appendChild(itemTaskElement);
    return li;
}