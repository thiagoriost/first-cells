"# first-cells" 


# Serving in dev mode
cells app:serve -c dev.js

# If you want to build in production mode and serve the app, you must execute:
cells app:serve -c dev.js -b


# Creating a new LitElement component
cells lit-component:create -i <name> <namespace>
eje: cells lit-component:create -i my-custom-element @cells-components

# Build and Serve a Lit Element?
cells lit-component:serve