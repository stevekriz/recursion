/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const getElementsByClassName = (className, element = document.body) => {
  let targetElements = [];

  if (element.classList && _.contains(element.classList, className)) {
    targetElements.push(element);
  }

  _.each(element.childNodes, (child) => {
    targetElements = targetElements.concat(getElementsByClassName(className, child));
  });

  return targetElements;
};
