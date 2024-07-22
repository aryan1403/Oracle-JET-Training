define(['knockout', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojbutton', 'ojs/ojformlayout'],
 function(ko) {
    function AboutViewModel() {
      this.name = ko.observable(null)
      this.lastname = ko.observable(null)
      this.age = ko.observable(null)
      this.agename = ko.observable(null)

      this.isLastNameDisabled = ko.computed(() => this.name() ? false : true)

      this.agename = ko.computed(() => {
        return this.name() + " " + this.lastname()
      });

      this.clicked = (_ => {
        console.log(this.agename())
      })
    }
    return AboutViewModel;
  }
);
