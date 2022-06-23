const empty = (element) => {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

export default empty;