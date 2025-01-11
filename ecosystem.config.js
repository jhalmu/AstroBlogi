module.exports = {
    apps: [{
        name: "astro-app",
        script: "./dist/server/entry.mjs",
        instances: "max",
        exec_mode: "cluster",
        watch: false,
        max_memory_restart: "1G",
        env: {
            NODE_ENV: "production",
            PORT: 3000,
            HOST: "0.0.0.0"
        },
        error_file: "logs/err.log",
        out_file: "logs/out.log",
        log_date_format: "YYYY-MM-DD HH:mm:ss",
        merge_logs: true,
        restart_delay: 4000,
        max_restarts: 10,
        autorestart: true
    }]
}