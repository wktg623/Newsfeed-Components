/* This is the data we will be using, study it but don't
 change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const createMenu = arr =>{
  const div = document.createElement('div');
  div.classList.add('menu');

  const ul = document.createElement('ul');

  

 
  const list = [];
  
  for(let i = 0; i< arr.length; i++){
   let li = document.createElement('li');
    li.textContent = arr[i];
    list.push(li);
  }
list.forEach(listItem => ul.appendChild(listItem));
div.appendChild(ul);
  return div;

}
const menu = createMenu(menuItems);

document.querySelector('.header').append(menu);

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', (el)=> {
  el.preventDefault();
  menu.classList.toggle('menu--open')
})


/* 

  Step 1: Write a function that will create a menu
   component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array
   creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button 
  (the element with a class of 'menu-button') currently
   on the DOM.

  Step 4: add a click event listener to the menu button. 
  When clicked it should toggle the class 'menu--open' o
  n the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
