module.exports = {
  apps: [
    {
      name: 'foodee-backend',
      script: 'server.js',
      cwd: './server',
      env_file: './server/.env', // Load .env file
      env: {
        PORT: 4444,
        NODE_ENV: 'production'
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G'
    },
    {
      name: 'foodee-frontend', 
      script: 'npm',
      args: 'start',
      cwd: './client',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M'
    }
  ]
};