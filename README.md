"# first-cells" 


# Serving in dev mode an App
cells app:serve -c dev.js

# If you want to build in production mode and serve the app, you must execute:
cells app:serve -c dev.js -b


# Creating a new LitElement component
cells lit-component:create -i <name> <namespace>
eje: cells lit-component:create -i my-custom-element @cells-components
cells lit-component:create ui-nombre-apellido @cells-training
cells lit-component:create dm-nombre-apellido @cells-training

# Build and Serve a Lit Element? as dm-rigoberto-rios
cells lit-component:serve