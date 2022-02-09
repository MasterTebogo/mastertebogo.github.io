const sumArray = function(array) {
  let sum = 0;
  array.forEach(function(number) {
    sum += number;
    const div = document.createElement('div');
    div.innerHTML = sum;
    div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');
div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the div's background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white" // ok in a string
div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div
div.innerHTML = '<span>Hello World!</span>';                   
// renders the HTML inside div  
div.append(body);
    
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
    
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
    
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction)
    
btn.addEventListener('click', function (e) {
  console.log(e);
});
    
    btn.addEventListener('click', function (e) {
  console.log(e.target);
});
    
  btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
    
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
}); 
  });
  return sum;
};

sumArray([2, 2, 2]);



