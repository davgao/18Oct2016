var callback = function(event){
  document.querySelector('#js-stuff').textContent = 'hello';
}


document.addEventListener("DOMContentLoaded", callback);

// factor out callback
