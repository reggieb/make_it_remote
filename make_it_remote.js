// Combine with button_to.
//
// Usage:
//
// button_to declaration
//
//   button_to("Click me", thing_path(@thing), :id => 'thing_button')
//
// javascript
//
//   makeButtonRemote('thing_button')
//
// Output id: 'thing_button_output' so output will be inserted into this div:
//
//   <div id="thing_button_output"></div>
//
// Also an item with id 'thing_button_hide' will be hidden if the remote call
// is successful

function makeButtonRemote(buttonId) {

  buttonId = "#" + buttonId;
  var remoteButton = $(buttonId);
  var outputId = buttonId + '_output';
  var elementToHideId = buttonId + '_hide';

  remoteButton.bind('click', function(event) {
    event.preventDefault();
    var targetUrl = remoteButton.closest("form").attr('action');
    outputFromRemote(targetUrl, $(outputId), $(elementToHideId));
  })
}

function outputFromRemote(targetUrl, outputPlace, hideOnSuccess) {

    outputPlace.html('Loading ...');

    $.ajax(
      {
        type: "POST",
        url: targetUrl,
        success: function(data) {
          outputPlace.html(data);
          if (hideOnSuccess) {
            hideOnSuccess.hide('swing');
          }
        },
        error: function(data) {
          outputPlace.html("Sorry. Something went wrong. Please try again");
        }
      }
    );
}