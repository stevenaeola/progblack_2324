async function loadTaggedFacts(tag){
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
}

let ff = document.getElementById("search-fact-form")

ff.addEventListener('submit', async function(event){
    event.preventDefault();
    try{
      let tag = document.getElementById("fact-tag").value;
      loadTaggedFacts(tag);
    } catch(e) {
      alert(e);
    }
  });

  async function setupTagButtons(){
    let response = await fetch('http://127.0.0.1:8080/tags');
    if(response.ok){
      let tags = await response.json();
      let container = document.getElementById("tag-button-container");
      container.innerHTML = '';
      for(let tag of tags){
        container.innerHTML += `<div class="col"><button class="btn btn-secondary tag-button">${tag}</button></div>`;
      }
    }
}

document.addEventListener("DOMContentLoaded", setupTagButtons);