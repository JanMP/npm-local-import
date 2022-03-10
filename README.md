
# repro: in cordova code imported from /imports behaves differently from same code imported from node_modules

Initially this looked like a problem with uniforms-unstyled. The recommended way to customize uniforms is to copy the source of uniforms-unstyled into your project and work with that. This really works fine in web apps but breaks in cordova with `TypeError: Cannot call a class constructor without new`

At first I thought this was a problem with TS transpilation, but the problem also occured with the js, produced by the same build settings used to build the uniforms npm packages. As it turned out the same code that works fine when imported from node_modules breaks on cordova when imported from /imports.

All the code relevant for this issue can be found in /imports/ui/App.jsx

