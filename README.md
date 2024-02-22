# BrewDOCs

The BEST app for micro-brewers to keep track of their recipes and brews!

## Deployment

[Heroku Deployment](https://brewdocstest-9748decbee50.herokuapp.com/)

## Getting Started

1. In your terminal, navigate to the directory you want to clone the repo into and run the following command:  
   `git clone git@github.com:brewDOCs/BrewDOCs.git`

2. Installing the dependencies:  
   `npm install`

3. Create a .env file in the server directory and add the variable and associated value. The variable and value can be found on the Heroku BrewDOCS app settings page in the Config Vars section.

4. Run the following command to start the server:  
   `npm run start`

## Contributing

1. Go to https://github.com/brewDOCs/BrewDOCs/issues and create a new issue, then assign it to yourself

2. Click the create a branch link under Development and it will create a new branch for you with the issue number and title

3. Copy and paste the code that github provides into your terminal in VS Code

4. Pull from the dev branch before you start working on your issue  
   `git pull origin dev`

5. Make your changes and commit them  
   `git add .`  
   `git commit -m "your commit message"`  
   `git push origin <branch-name>`

THEN

6. Go to https://github.com/brewDOCs/BrewDOCs/pulls to create a pull request to merge your branch into the dev branch

7. Assign it to someone to be reviewed and then merged

8. Once it is merged, delete the branch (the person doing the merge can do this)

9. In VS Code run `git checkout dev` and then `git pull origin dev` to pull the changes from the remote (github) dev branch to your local dev branch

10. Go back to step 1 and repeat
