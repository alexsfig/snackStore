module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: 'INSENSE',
            // watch       : true,
            script: 'bin/www.js',
            //args      : '-e logs/error.log -o logs/access.log',
            error_file: 'logs/error.log',
            out_file: 'logs/access.log',

            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'dev'
            }
        },

        // // Second application
        // {
        //   name      : 'WEB',
        //   script    : 'web.js'
        // }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        },
        dev: {
            // user : 'node',
            // host : '212.83.163.1',
            // ref  : 'origin/master',
            // repo : 'git@github.com:repo.git',
            // path : '/var/www/development',
            // 'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
            env: {
                NODE_ENV: 'dev'
            }
        }
    }
};
