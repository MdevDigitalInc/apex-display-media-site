![MDEV Digital](https://mdevcdn.digital/images/githublogo.svg)
# Apex Display Media

This repository contains all of the source files for the Apex Display Media
marketing & sales website. For further instructions see documentation folder.
---

# [ HOW TO USE THIS BOILERPLATE ]

1. Click the big green download button on this repository and download a ZIP of
   the project. This zip will include every single file you need to boot this
   boilerplate up for another project. Make sure you can *see hidden files*
   before proceeding to extract.

2. Create a new repository inside of the MdevDigital corporate Github. Process
   is simple, head on over to [MDEV Digital Git](https://git.mdev.digital "MDEV
   GIT") and click the *new* button.

   Make sure to name the repository with the appropriate name. It starts with
a three letter acronym for the client and then the name of the project separated
by dashes. Something like `mdev-test-project` is quite acceptable.

  Initialize the repository with a README and pick *node* for the gitignore.

3. Now that you have your new repository go ahead and clone it over on to your
   computer using either command line or GUI.

4. Extract the zip you downloaded on step *1* into the repository you just
   cloned. Let it overwrite any existing files (Readme, gitignore usually).

5. Open up `package.json` file and modify the project name accordingly. You
   might wish to do a search for *TODO* on the project to find other
   placeholders that need to be changed to match the project data.

6. Run `npm install` and after it completes run `npm run dev` to make sure
   everything is working as intended.

7. Commit and push your repository! We now have a new project ready to roll and
   collaborate on with the rest of the team.


# [ Black Mesa ] :8ball:

Black Mesa aims to be a ready-to-deploy barebones boilerplate for web applications of small to medium size without any modification. It features: a full webpack 2.0 implementation with *linting, testing, internationalization, browser-caching, state management, authentication (firebase) and .gz compression.*

Support for large traffic or bigger applications can easily be added since the architecture is built on scaleable principles with modular components throughout.

*Powered by Node.js and Vue.js*

**[For More Information Please View The Documents Section](./docs/README.md "Project Documentation")**

---


## :beers:Philosophy
The main philosophy behind this project and why it was born is quite simple. Providing a quick and clean reactive/SPA deployment that can be setup quickly by any individual or team and that will auto-enforce best practices and QA. With the hope that *Fast deployment + Best practices* = less bugs and better quality. And we all know that less bugs = more :beers:

### Jack In A Box - The Good Kind.
BlackMesa can be deployed by cloning this repository and running the dev-environment.sh script in the [Setup Folder](./setup "Setup Bash Script") to install all dependencies, setup Git and run the project.

There is also a Vagrant deployment utilizing Ubuntu as a way to ensure environment consistency in a development team or to easily work with remote teams.

### Ensure Best Practices
Keep the code clean and follow a few best practices and in the long run your team and your business will thank you. One of the main goals of BlackMesa is to reduce technical debt as much as possible by taking a proactive approach to development. Altough the linting programs help, they are no substitue for a *proper review process*.

### Keep It Modular
Everything is a module or a component of some sort and can and *SHOULD* be swapped to fit the project's needs.

### Performance & Mobile First
Lets face it, we all hate slow websites on mobile - so why would we build slow websites ourselves? This project takes performance seriously.

---

## :wrench:The Stack

:small_red_triangle:Node.js
:small_red_triangle:Vue.JS
:small_red_triangle:Vue-X
:small_red_triangle:Webpack
:small_red_triangle:Linting
:small_red_triangle:SASS
:small_red_triangle:MAGIC

---
