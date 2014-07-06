// Saves options to chrome.storage
function save_options() {
  console.log(document.getElementById('dph'));
  var dph = document.getElementById('dph').value;
  chrome.storage.sync.set({
    dph: dph,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    dph: '10',
  }, function(items) {
    document.getElementById('dph').value = items.dph;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
    
console.log("options.js");