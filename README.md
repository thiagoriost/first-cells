"# first-cells" 

# to deploy project
cells lit-component:serve

# Serving in dev mode
cells app:serve -c dev.js

# If you want to build in production mode and serve the app, you must execute:
cells app:serve -c dev.js -b
