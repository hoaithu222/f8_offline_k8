
import { App } from './src/App';
import router from './src/Utils/router';

document.querySelector('#app').innerHTML = App();
router.resolve(); 