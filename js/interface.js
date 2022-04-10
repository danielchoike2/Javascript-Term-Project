document.getElementById("textAdventure").addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {                       
    if(xhr.status === 200) {      
      responseObject = JSON.parse(xhr.responseText);
      array=responseObject.textAdventure;
      processItem(array);
    }
  };
  xhr.open('GET', 'textAdventure.json', true);        
  xhr.send(null);                                 
  });
  
  document.getElementById("jigsawPuzzle").addEventListener("click",function(){
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {                       
        if(xhr.status === 200) {      
          responseObject = JSON.parse(xhr.responseText);
          array=responseObject.jigsawPuzzle;
          processItem(array);
        }
      };
      xhr.open('GET', 'jigsawPuzzle.json', true);        
      xhr.send(null);                                 
      });
      
      document.getElementById("platformer").addEventListener("click",function(){
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {                       
            if(xhr.status === 200) {      
              responseObject = JSON.parse(xhr.responseText);
              array=responseObject.platformer;
              processItem(array);
            }
          };
          xhr.open('GET', 'platformer.json', true);        
          xhr.send(null);                                 
          });
          
          document.getElementById("readMe").addEventListener("click",function(){
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {                       
              if(xhr.status === 200) {      
                responseObject = JSON.parse(xhr.responseText);
                array=responseObject.readMe;
                processItem(array);
              }
            };
            xhr.open('GET', 'readMe.json', true);        
            xhr.send(null);                                 
            });
  
  function processItem(array){
    var newContent = '';
     for (var i = 0; i < array.length; i++) { // Loop through object
       newContent += '<p> <strong>' + array[i].title + '</strong> <br>';
       newContent += '' + array[i].description + '</p>';  
     }
 
     // Update the page with the new content
     document.getElementById('content').innerHTML = newContent;
 }