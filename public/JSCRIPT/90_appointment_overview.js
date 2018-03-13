$(document).ready(function () {
    var testDaten = '[{"appointmentID": "1", "appointmentName":"Termin Name","invitedMembers": "name1, name2, name3", "acceptedMembersCount": "20", "declinedMembersCount": "10", "startDate": "10.10.2018", "endDate": "11.10.2018", "location": "HTL", "description": "Das ist eine kurze Beschreibung." }]';
    function appointment(appointmentID, appointmentName, invitedMembers, acceptedMembersCount, declinedMembersCount, startDate, endDate, location, description) {
        self = this;
        self.appointmentID = appointmentID;
        self.appointmentName = appointmentName;
        self.invitedMembers = invitedMembers;
        self.acceptedMembersCount = acceptedMembersCount;
        self.declinedMembersCount = declinedMembersCount;
        self.startDate = startDate;
        self.endDate = endDate;
        self.location = location;
        self.description = description;
    }
    
    function appointmentOverviewModel() {
        self = this;
        self.appointments = init();
    }

    function init() {
        POJOArray = JSON.parse(testDaten);
        KoArray = ko.observableArray();
        POJOArray.forEach(function (entry) {
            x = new appointment(entry.appointmentID,entry.appointmentName, entry.invitedMembers, entry.acceptedMembersCount, entry.declinedMembersCount, entry.startDate, entry.endDate, entry.location, entry.description);
            KoArray.push(x);
        })
        return KoArray;
    }
    ko.applyBindings(new appointmentOverviewModel());
})