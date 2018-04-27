
module.exports = (app, jwt, express) =>
{
    const apiRoutes = express.Router();

    app.get('/', (req, res) => res.status(200).send(
    {
        message: 'Welcome to SNACK STORE',
    }));

    /* Catch all routes and validates token: */
    app.all('*', function(req, res, next)
    {
        console.error(req.url);
        if (req.url == '/api/v1/users/login' || req.url == '/apidoc')
        {
            return next();
        }
        else
        {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            if (token)
            {
                jwt.verify(token, app.get('jwt_secret'), (err, decoded) =>
                {
                    if (err)
                    {
                        return res.status(403).send(
                        {
                            err,
                        });
                    }
                    else
                    {
                        req.decoded = decoded;
                        next();
                    }
                });
            }
            else
            {
                return res.status(403).send(
                {
                    success: false,
                    message: 'Authentication failed, no token provided.'
                });
            }
        }
    });

    app.use('/api/v1', apiRoutes);

};
