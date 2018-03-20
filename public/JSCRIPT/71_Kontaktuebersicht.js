/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {


    var testDaten = '{"firstname": "Julia", "lastname":"Eigner","telephone1": "1234567", "telephone2": "5678910", "email": "email@email.com, "adress": "Straße4, 4710 Grieskirchen "}';
    function profile(firstname, lastname, telephone1, telephone2, email, adress) {
        self = this;
        self.firstname = firstname;
        self.lastname = lastname;
        self.telephone1 = telephone1;
        self.telephone2 = telephone2;
        self.email = email;
        self.adress = adress;
        

        self.fullName = firstname + " " + lastname;
    }

    function companiesOverviewModel() {
        self = this;
        var json = JSON.parse(testDaten);
        self.myProfile = new profile(json.firstname, json.lastname, json.telephone1, json.telephone2, json.email, json.adress);
    }
    
    ko.applyBindings(new companiesOverviewModel());
});