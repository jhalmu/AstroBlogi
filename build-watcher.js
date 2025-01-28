// build-watcher.js
const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch('src/content/blog', {
    ignored: /(^|[\/\\])\../, // Ohita piilotiedostot
    persistent: true
});

function runBuild()
{
    console.log('Tiedostomuutos havaittu, aloitetaan build...');
    exec('npm run build', (error, stdout, stderr) =>
    {
        if (error)
        {
            console.error(`Build-virhe: ${error}`);
            return;
        }
        console.log(`Build valmis: ${stdout}`);
    });
}

watcher
    .on('add', runBuild)
    .on('change', runBuild)
    .on('unlink', runBuild);