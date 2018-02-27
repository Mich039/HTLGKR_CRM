$(document).ready(function () {
    function DiplArbeit(n, te, tm, cnt, des) {
        self = this;
        self.name = ko.observable(n);
        self.teacher = ko.observable(te);
        self.team = ko.observable(tm);
        self.contractor = ko.observable(cnt);
        self.desc = ko.observable(des);
    }
    function ViewModel() {
        self = this;
        self.CollDiplArbeit = ko.observableArray();
        init();
    }

    function init() {
        self.CollDiplArbeit.push(DiplArbeit("Luchsticket", "LehrerLuchsticket", "TeammitgliedLuchsticket", "AuftraggeberLuchsticket", "BeschreibungLuchsticket"));
        self.CollDiplArbeit.push(DiplArbeit("Sterilisationssoftware", "LehrerSterilisationssoftware", "TeammitgliedSterilisationssoftware", "AuftraggeberSterilisationssoftware", "BeschreibungSterilisationssoftware"));
        self.CollDiplArbeit.push(DiplArbeit("Highway2Health", "LehrerHighway2Health", "TeammitgliedHighway2Health", "AuftraggeberHighway2Health", "BeschreibungHighway2Health"));
        self.CollDiplArbeit.push(DiplArbeit("Robotino", "LehrerRobotino", "TeammitgliedRobotino", "AuftraggeberRobotino", "BeschreibungRobotino"));
        self.CollDiplArbeit.push(DiplArbeit("DicomDrucker", "LehrerDicomDrucker", "TeammitgliedDicomDrucker", "AuftraggeberDicomDrucker", "BeschreibungDicomDrucker"));
        self.CollDiplArbeit.push(DiplArbeit("GetTrained", "LehrerGetTrained", "TeammitgliedGetTrained", "AuftraggeberGetTrained", "BeschreibungGetTrained"));
        self.CollDiplArbeit.push(DiplArbeit("LayoutGenerator", "LehrerLayoutGenerator", "TeammitgliedLayoutGenerator", "AuftraggeberLayoutGenerator", "BeschreibungLayoutGenerator"));
        self.CollDiplArbeit.push(DiplArbeit("Wanderapp", "LehrerWanderapp", "TeammitgliedWanderapp", "AuftraggeberWanderapp", "BeschreibungWanderapp"));
    }
    ko.applyBindings(new ViewModel());
});