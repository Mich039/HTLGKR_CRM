function appointment(appointmentID, invitedMembers, acceptedMembersCount, declinedMembersCount, startDate, endDate, location, description) {
	self = this
	self.appointmentID = appointmentID
	self.invitedMembers = invitedMembers
	self.acceptedMembersCount = acceptedMembersCount
	self.declinedMembersCount = declinedMembersCount
	self.startDate = startDate
	self.endDate = endDate
	self.location = location
	self.description = description
}

$("btn_details").click(function () {
	//$.get("demo_test.asp", function (data, status) {
	//	alert("Data: " + data + "\nStatus: " + status);
	//});
	alert("Hallo");
});