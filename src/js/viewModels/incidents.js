define(['knockout', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojformlayout'],
 function(ko) {
    function IncidentsViewModel() {
        this.email = ko.observable(null);
        this.pass = ko.observable(null);

        this.login = (_) => {
          fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.email(), pass: this.pass()})})
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
    }
    return IncidentsViewModel;
  }
);
