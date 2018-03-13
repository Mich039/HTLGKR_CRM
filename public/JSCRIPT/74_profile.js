$(document).ready(function () {
    var testDaten = '{"firstname": "Pascal", "lastname":"Windhager","role": "Teamleiter", "address": "hidden", "phoneNumber": "private", "emailAddress": "pascalwindhager@gmx.at", "profilePicture": "1234", "website": "http://www.htl-grieskirchen.net/index.php?id=4"}';
    function profile(firstname, lastname, role, address, phoneNumber, emailAddress, profilePicture, website) {
        self = this;
        self.firstname = firstname;
        self.lastname = lastname;
        self.role = role;
        self.address = address;
        self.phoneNumber = phoneNumber;
        self.emailAddress = emailAddress;
        self.profilePicture = profilePicture;
        self.website = website;

        self.fullName = firstname + " " + lastname;
    }

    function appointmentOverviewModel() {
        self = this;
        var json = JSON.parse(testDaten);
        self.myProfile = new profile(json.firstname, json.lastname, json.role, json.address, json.phoneNumber, json.emailAddress, json.profilePicture, json.website);
    }
    
    ko.applyBindings(new appointmentOverviewModel());
})