const getElementsByClassName = (className, element = document.body) => {
  let targetElements = [];

  if (element.classList && element.classList.contains(className))
    targetElements.push(element);

  for (const child of element.childNodes) {
    targetElements = [
      ...targetElements,
      ...getElementsByClassName(className, child),
    ];
  }

  return targetElements;
};
