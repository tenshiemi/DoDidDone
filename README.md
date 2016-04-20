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
1. `sudo chown "id -u" /data/db` [Note: double quotes may need to be ` characters]

# Running server locally

1. Run `npm start` from the root directory of the app in command line
1. Navigate to `localhost:3000` to view your local environment

# Deploying to Heroku

1. Commit your code
1. Deploy to Heroku with `git push heroku master`

# Tests
1. Install `npm install -g karma-cli` globally
