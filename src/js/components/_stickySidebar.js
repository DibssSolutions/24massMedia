import StickySidebar from '../lib/sticky-sidebar.min';
import { WIN } from '../constants';
window.StickySidebar = StickySidebar;
const stickyOptions = {
  topSpacing: 138,
  bottomSpacing: 0,
  containerSelector: '.js-sidebar-parent',
  innerWrapperSelector: '.js-sidebar-inner',
  resizeSensor: true,
  minWidth: 0
};
const container = '.js-sidebar';
if (document.querySelector(container)) {
  let sidebar = new StickySidebar(container, stickyOptions);

  let timeOut;
  WIN.resize(() => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => { 
      sidebar.destroy();
      sidebar = new StickySidebar(container, stickyOptions);
    }, 100);
  });

}
