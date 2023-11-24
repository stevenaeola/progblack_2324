function setupTagButtons(){
    let tags = await fetch('http://127.0.0.1:8080/tags');
    if(response.ok){
    let facts = await response.json();
    }
    for(let tag in tags){
        alert(tag);
    }
}

let ff = document.getElementById("facts-form")

ff.addEventListener('submit', async function(event){
    event.preventDefault();
    try{
      let tag = document.getElementById("facts-tag").value;
      let response = await fetch('http://127.0.0.1:8080/facts?tag=' + tag);
      if(response.ok){
      let facts = await response.json();
      let html = "<ul>\n";
      for(let fact of facts){
        html += `<li>${fact}</li>\n`;
      }
      html += "</ul>\n";
      document.getElementById('facts-container').innerHTML = html;
    } else{
        alert("Sorry you cannot type you have a 404");
    }
    } catch(e) {
      alert(e);
    }
  });