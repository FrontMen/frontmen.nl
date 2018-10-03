# Frontmen.nl

[ ![Codeship Status for FrontMen/frontmen.nl](https://app.codeship.com/projects/37868110-a3af-0136-97b3-528378174b28/status?branch=master)](https://app.codeship.com/projects/307487)

Company website [frontmen.nl](https://www.frontmen.nl).


## Build
Generates the entire site.

`npm run build`

## Serve
Runs local server with watchers for development.

`npm run start`

## Publish staging version
[ ![Codeship Status for FrontMen/frontmen.nl](https://app.codeship.com/projects/37868110-a3af-0136-97b3-528378174b28/status?branch=dev)](https://app.codeship.com/projects/307487)

Generates the entire site and commits it to the gh-pages branch.

`npm run publish`

# Deploy hooks
`master` branch deploys to production environment.

`dev` branch deploys to staging environment (gh-pages branch)

