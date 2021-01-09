var koa = require('koa')

var app = new koa();

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating')

app.use(bodyParser());

const isProducting = process.env.NODE_ENV === 'production';

if(!isProducting){
    let staticFiles = require('./static-files')
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(templating('views',{
    noCache: !isProducting,
    watch: !isProducting
}))

app.use(controller());

app.listen(3000);

console.log('app started at port 3000');