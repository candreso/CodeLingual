module.exports = {
  apps: [{
    script: './server/server.js',
    watch: './server',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
