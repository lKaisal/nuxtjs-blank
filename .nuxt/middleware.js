const middleware = {}

middleware['routerHandler'] = require('..\\middleware\\routerHandler.ts');
middleware['routerHandler'] = middleware['routerHandler'].default || middleware['routerHandler']

export default middleware
