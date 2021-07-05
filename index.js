// Add your code here
function submitData(name,email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email
          })
        })
        .then(function(response) {
            return response.json();
            })
        .then(function(object) {
            document.body.append(object.id);
        })
        .catch(function(message) {
            alert(message);
            document.body.append(message);
          });
}

    // fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       },
    //       body: JSON.stringify({
    //         name: name,
    //         email: email
    //       })
    //     })
        