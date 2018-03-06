var testDaten = '[{"name":"Luchsticket","teacher":"LehrerLuchsticket","team":"TeammitgliedLuchsticket","contractor":"AuftraggeberLuchsticket","desc":"BeschreibungLuchsticket"},{"name":"Sterilisationssoftware","teacher":"LehrerSterilisationssoftware","team":"TeammitgliedSterilisationssoftware","contractor":"AuftraggeberSterilisationssoftware","desc":"BeschreibungSterilisationssoftware"},{"name":"Highway2Health","teacher":"LehrerHighway2Health","team":"TeammitgliedHighway2Health","contractor":"AuftraggeberHighway2Health","desc":"BeschreibungHighway2Health"},{"name":"Robotino","teacher":"LehrerRobotino","team":"TeammitgliedRobotino","contractor":"AuftraggeberRobotino","desc":"BeschreibungRobotino"},{"name":"DicomDrucker","teacher":"LehrerDicomDrucker","team":"TeammitgliedDicomDrucker","contractor":"AuftraggeberDicomDrucker","desc":"BeschreibungDicomDrucker"},{"name":"GetTrained","teacher":"LehrerGetTrained","team":"TeammitgliedGetTrained","contractor":"AuftraggeberGetTrained","desc":"BeschreibungGetTrained"},{"name":"LayoutGenerator","teacher":"LehrerLayoutGenerator","team":"TeammitgliedLayoutGenerator","contractor":"AuftraggeberLayoutGenerator","desc":"BeschreibungLayoutGenerator"},{"name":"Wanderapp","teacher":"LehrerWanderapp","team":"TeammitgliedWanderapp","contractor":"AuftraggeberWanderapp","desc":"BeschreibungWanderapp"}]';
$(document).ready(function () {

    function ViewModel() {
        CollDiplArbeit = init();
        x = new obj("", "", "", "", "");
        curr = ko.observable(x);
    }
    function obj(n, te, tm, cnt, des) {
        self = this;
        self.name = ko.observable(n);
        self.teacher = ko.observable(te);
        self.team = ko.observable(tm);
        self.contractor = ko.observable(cnt);
        self.desc = ko.observable(des);
    }
    function init() {
        POJOArray = JSON.parse(testDaten);
        KoArray = ko.observableArray();
        POJOArray.forEach(function (entry) {
            x = new obj(entry.name, entry.teacher, entry.team, entry.contractor, entry.desc)
            KoArray.push(x);
        })
        return KoArray;
    }
    cellClicked = function (e) {
        //console.log(e);
        //console.log("click");
        curr(e);
    }
    addDiplArbeit= function(){
        x = new obj("empty", "empty", "empty", "empty", "empty");
        CollDiplArbeit.push(x);
        curr(x)
    }
    commitChanges = function () {
        $.post()
    }
    ko.applyBindings(new ViewModel());
});