module.exports = {
  apps: [{
    script: './server/server.js',
    watch: './server'
  }],

  deploy: {
    production: {
      'pre-deploy-local': '',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
