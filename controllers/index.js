

var fn_index = async (ctx, next) => {
    ctx.render('index.html',{});
};

var fn_home = async (ctx , next)=>{
    ctx.render('hello.html',{})
}

var fn_cindex = async(ctx , next)=>
{
    ctx.render('cindex.html',{});
}

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'GET /C': fn_cindex,
    'GET /home':fn_home,
    'POST /signin': fn_signin
};