import dva from 'dva';
// import count from './models/count';
import router from './router';
import models from './models/';
import xx from './models/animalchess'

const app = dva();
models.forEach((m) => {
    app.model(m);
});
app.router(router);
app.start('#app');
