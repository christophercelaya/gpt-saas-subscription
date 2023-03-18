# Install and check dependancies
node -v
npm -v
python -v

# Make sure you run the following if you get any errors.
nvm use v14.17.6

# Try running yarn if installation is unsuccessful (this should work)
yarn

# Start the frontend after yarn
npm start 

# Node-sass might give an error
npm chache clean --force

#  
npm i --unsafe-perm node-sass

# run frontend by using 
npm run api
# make sure node v14.17.6 is actively installed