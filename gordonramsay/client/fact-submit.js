// get the data out of the form

// from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects

const form = document.getElementById("new-fact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
// send a fetch request (POST) with the data

  const response = await fetch("http://127.0.0.1:8080/fact/new", {
    method: "POST",
    body: formData,
  });
// deal with the response?
// TODO

});
