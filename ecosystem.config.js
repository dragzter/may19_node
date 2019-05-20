module.exports = {
    apps: [{
      name: 'tutorial-2',
      script: '/server/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-35-153-199-70.compute-1.amazonaws.com',
        key: '~/.ssh/may_19_2019.pem',
        ref: 'origin/master',
        repo: 'git@github.com:dragzter/may19_node.git',
        path: '/home/ubuntu/test',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }