# Conversional Test Task
### done by Luka Defar

## About
Simple project that takes a JSON configuration for a component tree,
and renders it to the screen. The basic functionality is pretty self-explanatory.

## Additional requirements
The additional requirements from the task ( the configurable modal triggering by other components)
is enabled by adding a ```modRef``` prop with an unique string to the ```ModalComponent``` props structure
to register it as triggerable.

On ```ButtonComponent``` or ```LinkComponent``` a prop named ```modRefTrigger``` needs to be set
with the string matching the ```modRef``` value of the wanted ```ModalComponent```

The Components having these props are decorated to enable the click on button or link to open the modal.
After that the regular onClick handler for the button/link is applied if exists.

In the case the ```modRef``` prop doesn't appear in the ```ModalComponents's``` configuration,
it keeps it's internal state for opening and closing.


### In more detail

The handlers functions to change the state of the decorated modal are registered in the ```RefTriggers```
class which is made available and shared through the Context API.

The button/link the triggers the function registered for an identifier using the same ```RefTriggers``` object


### Running
``` yarn install && yarn start``` should do the trick

## What's missing
1. No tests due to the fact that it's a interview question, but all the parts should be pretty testable
2. Error handling isn't the best
3. I'm not sure should this have been rendered on serverside? It should also be trivial to transfer to a server.
4. Components are all defined in one file, due to them being examples, in a real situation they would be in their own files.

Hopefully the project shows a decent enough architecture, and clean coding style.
