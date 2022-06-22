const addActiveClass = (menuLink) => {
  const activeMenu = document.querySelector('#navLink .active');
  if (activeMenu !== null) {
    activeMenu.classList.remove('active');
  }
  menuLink.classList.add('active');
}

export default addActiveClass;