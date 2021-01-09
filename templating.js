const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var autoescape = opts.autoescape || false;
    var noCache = opts.noCache || false;
    var watch = opts.watch || false;
    var throwOnUndefined = opts.throwOnUndefined || false;
    var env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(path || 'views',
            {
                noCache: noCache,
                watch: watch,
            }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
    }
    )
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }

    return env;
}

function templating(path, opts) {
    var env = createEnv(path, opts);

    return async (ctx, next) => {
        ctx.render = function (view, model) {
            ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
            // 设置Content-Type:
            ctx.response.type = 'text/html';
        };

        await next();
    }
}

module.exports = templating;


// var env = createEnv('views', {
//     wathc: true,
//     filters: {
//         hex: function (n) {
//             return '0x' + n.toString(16);
//         }
//     }
// }); 
