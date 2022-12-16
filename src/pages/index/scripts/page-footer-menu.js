const subMenus = document.querySelectorAll('.submenu');

subMenus.forEach((subMenu) => {
  const onSubMenuClick = (evt) => {
    if (evt.target.closest('.submenu__heading')) {

      if (!subMenu.classList.contains('submenu--active')) {

        subMenus.forEach((item) => {
          item.classList.remove('submenu--active');
        });

        subMenu.classList.add('submenu--active');

      } else {
        subMenu.classList.remove('submenu--active');
      }
    }
  };

  subMenu.addEventListener('click', onSubMenuClick);
});
