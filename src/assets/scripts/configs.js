/* eslint-disable */
var Configs = ( () => {
    return {
        locale: () => {
          let locale = navigator.language === 'it-IT' ? 'it' : 'en'
          return locale
      }
    }; 
})();

export default Configs