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
    //nameT = input, setitem - main.html
    //nameTT = getitem - resumepage.html
    //name = var

  //  console.log("insdie generate");
    //let jobT = document.getElementById("jobT");

  // Name 
    let name = document.getElementById("nameT").value;
    localStorage.setItem('nameTT', name);


  // Jobtitle 
    let job = document.getElementById("jobT").value;
    localStorage.setItem('jobTT', job);

  //Intro
    let intro = document.getElementById("introT").value;
    localStorage.setItem('introTT', intro);

  //Experience 1
    let exp = document.getElementById("expT").value;
    localStorage.setItem('expTT', exp);

  //Experience 2
  //Activities 1
  //Activities 2
  //Education 1
  //Education 2
  //Awards




    //locate it to resume after clicking "submit"
    window.location.href = "./resumepage.html";

    //console.log("test");

    //  let jobT1 = document.getElementById("jobT").value;
    //  jobT1.innerHTML = jobT;
  
    // let jobT1 = localStorage.getitem('jobT');
    // document.getElementById('jobT').textContent = jobT1;
  
    //let nameField = document.getElementById("jobT").Value;
    // let jobT = document.getElementById("jobT1");
    
    // document.getElementById("jobT1").innerHTML = jobT; 
    // document.getElementById('click').innerHTML
    // document.getElementById('nameField').value ;
  }






  