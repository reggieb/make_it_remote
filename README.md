make_it_remote
==============

Javascript that allows rails objects to be easily made remote

Currently just button_to ....

Usage:

 button_to declaration

   button_to("Click me", thing_path(@thing), :id => 'thing_button')

 javascript

   makeButtonRemote('thing_button');

 Output id: 'thing_button_output' so output will be inserted into this div:

   <div id="thing_button_output"></div>

 Also an item with id 'thing_button_hide' will be hidden if the remote call
 is successful