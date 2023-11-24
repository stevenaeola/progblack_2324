let ff = document.getElementById("facts-form")

ff.addEventListener('submit', async function(event){
    event.preventDefault();
    try{
      let tag = document.getElementById("facts-tag").value;
      let response = await fetch('http://127.0.0.1:8080/facts?tag=' + tag);
      if(response.ok){
      let body = await response.text();
      document.getElementById('facts-container').innerHTML=body;
    } else{
        alert("Sorry you cannot type you have a 404");
    }
    } catch(e) {
      alert(e);
    }
  });