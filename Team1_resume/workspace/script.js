function addNewWeField(){
  
    // console.log("Adding new field");
   
     let newNode = document.createElement('textarea');
         newNode.classList.add('form-control');
         newNode.classList.add('weField');
          newNode.classList.add('mt-7');
         newNode.setAttribute("rows", 4);
         newNode.setAttribute("placeholder", "Enter Here");
         //newNode.setAttribute("cols", 10);
    
    let we44 = document.getElementById("we33");
    we11.insertBefore(newNode, we33);

    // weAddButton.prepend(newNode);
   
    //we44.append(newNode);
     //newNode.append(we44);
  }
   
  function addNewAField(){
     let newNode = document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('afield');
     newNode.classList.add('mt-8');
     newNode.setAttribute("rows", 3);
     newNode.setAttribute("placeholder", "Enter Here");
   
     let we88 = document.getElementById("we77");
    // afieldAddButton.prepend(newNode);
     we55.insertBefore(newNode, we77);

   
  }
   
  function sound() {
  var audio = new Audio("sounds/Claps.wav");
  document.onclick = function() {
    audio.play();
  }
}

//resume generate function
//submit --> onsubmit --> submit.onsubmit(resume.page)

  function generate(){
    document.getElementById('click').innerHTML
     = document.getElementById('nameField').value ;
  }






  