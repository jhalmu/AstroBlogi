module.exports = {
  apps: [
    {
      name: "astro-build",
      script: "pm2 flush && npm",
      args: "run build",
      watch: ["src/content/blog"],
      ignore_watch: ["node_modules", ".astro", "dist"],
      autorestart: false,  // Estää automaattisen uudelleenkäynnistyksen
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
