// ecosystem.config.js
export default {
    apps: [
        {
            name: "astro-app",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production"
            }
        },
        {
            name: "build-watcher",
            script: "./build-watcher.js",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
}