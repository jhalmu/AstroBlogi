export const apps = [
    {
        name: 'astroblogi',
        script: 'npm',
        args: 'start',
        env: {
            NODE_ENV: 'production'
        }
    },
    {
        name: 'build-watcher',
        script: './build-watcher.js'
    }
];