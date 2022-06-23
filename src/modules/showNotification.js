const showNotification = () => {
  const notificationElem = document.querySelector('.notification');

  notificationElem.innerHTML = '...Comment Added..';
  setTimeout(() => { notificationElem.innerHTML = '';
    
  }, 3000);
}

export default showNotification;