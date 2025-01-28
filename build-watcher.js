// build-watcher.js
const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch('src/content/blog', {
    ignored: /(^|[\/\\])\../, // Ignore dotfiles
    persistent: true
});

function runBuild()
{
    console.log('New markdown file detected, starting build...');
    exec('npm run build', (error, stdout, stderr) =>
    {
        if (error)
        {
            console.error(`Build error: ${error}`);
            return;
        }
        console.log(`Build completed: ${stdout}`);
    });
}

watcher
    .on('add', runBuild)    // New file
    .on('change', runBuild) // File modified
    .on('unlink', runBuild) // File removed
javascript