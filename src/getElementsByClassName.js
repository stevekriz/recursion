// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  const targetElements = [];
  const searchNodes = function(node) {
    if (node.classList && node.classList.contains(className)) {
      targetElements.push(node);
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      searchNodes(node.childNodes[i]);
    }
  };
  searchNodes(document.body);
  return targetElements;
};