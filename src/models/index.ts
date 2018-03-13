const context = require.context('./', true, /\.ts$/);
const keys = context.keys().filter(item => item !== './index.ts');

const models = [];
for (let i = 0; i < keys.length; i += 1) {
    models.push(context(keys[i]).default);
}

export default models;