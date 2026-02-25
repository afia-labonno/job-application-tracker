## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getEementByID : use when the element is unique. only use on 'id' attribute.
- getElementsByClassName : use when there are same class names. e.g., calss = 'cards' for 8jobs. getElementsBycalssName('cards') ; only use on 'calss' attribute.
- querySelector : use to match the very first element within a same class name. e.g., querySelector('.cards') it will return the very first card of 8jobs.
- querySelectorAll: use to get all matching elements under the same class name. e.g., querySelectorAll('.cards') it will return all the cards under this class.

## 2. How do you create and insert a new element into the DOM?
- by using 'createElement()' we can create a new html element in the dom dynamically. e.g., document.createElement('div) ;
  then after creating the element if we append the element with the help of 'appendChild()' then the innerHtml will be inserted.

## 3. What is Event Bubbling? And how does it work?
- Event Bubbling: when an event happend on a child element it go through the parent, grandparent , grandGrandParent... bubbles upon inner to outer.

## 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation: When an event happend on a common parent element and then target the child element whrere the event exactly happend - this is called event delegation.
- Event Delegation is usefull because, it reduce redundancy of events. A single Listener on a parent element can handle multiple child elements. It saves the memory
  and improve performance. There is no need to aadded new event listener even when elements are dynamically added. Mainly Event Delegation works through Event Bubbling.
  
## 5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() : it prevents the default browser behavior of an event. e.g., click on a Link but it will not nevigate; click on 'submit' button but form will not submitted. the Event Delegation and the Event Bubbling never effected by this method.
- stopPropagatio() : this method prevents the  event bubbling, which means the event will not reach the parent element.
  

   
