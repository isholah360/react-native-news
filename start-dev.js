const { exec } = require('child_process');
const waitOn = require('wait-on');


const startFrontend = exec('npx expo start --port 8081 -c');


waitOn({
  resources: ['http://localhost:8081'],
  delay: 1000,  
}, (err) => {
  if (err) {
    console.error('Error waiting for Metro Bundler:', err);
    return;
  }

 
  const startBackend = exec('npm run start:server', { cwd: './api' });

  startBackend.stdout.on('data', (data) => {
    console.log(`Backend: ${data}`);
  });

  startBackend.stderr.on('data', (data) => {
    console.error(`Backend Error: ${data}`);
  });
});

startFrontend.stdout.on('data', (data) => {
  console.log(`Frontend: ${data}`);
});

startFrontend.stderr.on('data', (data) => {
  console.error(`Frontend Error: ${data}`);
});
