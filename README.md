# DoDidDone

# Setup

1. Fork and set up repo on your local machine
1. Run `npm install`
1. Install webpack and webpack-dev-server globally with: `npm install -g webpack` and `npm install -g webpack-dev-server`
1. Add the heroku remote for production `git remote add heroku https://git.heroku.com/dodonedid.git`
1. Install Mongo

# Setting up MongoDB
1. `brew install mongodb`
1. `sudo mkdir -p /data/db`
1. `sudo chown \`id -u\` /data/db`

# Running server locally

1. Run `mongod` in command line and leave it running
1. Run `npm start` from the root directory of the app in another terminal tab
1. Navigate to `localhost:3000` to view your local environment

# Deploying to Heroku

1. Commit your code
1. Deploy to Heroku with `git push heroku master`

# Running tests
1. Run `npm test`

#  Adding tests
1. If adding a new feature, create a test that addresses it, even if it's only finding that a <div> created by that component exists.
1. If altering a new feature, run `npm test` and ensure the test that addresses said feature still works; if not, please update.
1. Add .skip to a test or delete entirely if obsolete. Do not comment them out, per Mocha style.
