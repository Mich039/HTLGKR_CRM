$(document).ready(function () {

    function appointment(appointmentName, invitedMembers, startDate, endDate, location, description, details) {
        self = this
        self.appointmentName = appointmentName;
        self.invitedMembers = invitedMembers;
        self.startDate = startDate;
        self.endDate = endDate;
        self.location = location;
        self.description = description;
        self.details = details;
    }

    function AddAppointmentModel() {

        function addAppointmentClicked() {
            alert($("#add_appointment_title").text);
            //var appointment = appointment();
            //var jsonString = ko.toJSON();
        }
    }

    ko.applyBindings(new AddAppointmentModel());
})