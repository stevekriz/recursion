// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//Without helper function
const getElementsByClassName = (className, element = document.body) => {
  let targetElements = [];

  if (element.classList && _.contains(element.classList, className)) {
    targetElements.push(element);
  }

  _.each(element.childNodes, child => {
    targetElements = targetElements.concat(getElementsByClassName(className, child));
  });

  return targetElements;
};

// //With helper function
// const getElementsByClassName = className => {
//   const targetElements = [];

//   const searchNodes = element => {
//     if (element.classList && _.contains(element.classList, className)) {
//       targetElements.push(element);
//     }
//     _.each(element.childNodes, child => {
//       searchNodes(child);
//     });
//   };

//   searchNodes(document.body);

//   return targetElements;
// };