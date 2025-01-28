// ecosystem.config.cjs
module.exports = {
    apps: [{
        name: "astro-watcher",
        script: "./build-watcher.js",
        env: {
            NODE_ENV: "production"
        }
    }]
}