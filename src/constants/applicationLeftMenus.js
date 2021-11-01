/* Left Menus List */

// Localization
import LOCALIZATION from './services/LocalizationService';

// Application Urls
import URL from './applicationUrls';

const menus = [
  {
    name: LOCALIZATION.HOME,
    icon: 'cicon-home',
    url: URL.DASHBOARD
  },
  {
    name: LOCALIZATION.LOGOUT,
    icon: 'cicon-exit',
    isLogout: true
  }
];

export default menus;