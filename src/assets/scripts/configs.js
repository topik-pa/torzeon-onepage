/* eslint-disable */
var Configs = (function () {
    return {
        locale: function () {
          if (navigator.language === 'it-IT') {
            return 'it'
          } else {
            return 'en'
          }
      }
    }; 
})();

export default Configs