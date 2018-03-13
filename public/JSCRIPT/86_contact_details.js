$(document).ready(function(){
	$(".i_image_arrow_down").click(function(){
		alert($(this).src);
	});
	function company_contact(company_name, street, street_number, post_code, town, management, description, domain, connection, contact_persons, images, conversations){
		var self=this;
		self.company_name=company_name;
		self.street=street;
		self.street_number=street_number;
		self.post_code=post_code;
		self.town=town;
		self.adress=ko.computed(function(){
			var street=self.street;
			var street_number=self.street_number;
			var post_code=self.post_code;
			var town=self.town;
			return street+" "+street_number+", "+post_code+" "+town;
		});
		self.management=management;
		self.description=description;
		self.domain=domain;
		self.connection=connection;
		self.contact_persons=ko.observableArray([
			new contact_person("Du", "Adsf Street", "29d", "4456", "Townasdf", "asdf@asdf.com", "165198516", "interests in", "linkedin.com" ),
			new contact_person("Sie", "Adsasdff Street", "29d", "4456", "Townasdf", "asdf@asdf.com", "165198516", "interests in", "linkedin.com" )	
		]) ;
		/*self.contact_persons=contact_persons;*/
		self.images=images;
		self.conversations=ko.observableArray([
			new company_conversation("12.12.1234","Tien Aoadnf c","Tisa sadfo s", "osadhfoahdsgohafdocxjgoieadjogDCfa" ),
			new company_conversation("13.12.1234","Tien Aoadnf c","Tisa sadfo s", "osadhfoahdsgohafdocxjgoieadjogDCfa" ),
		]);
		/*self.conversations=conversations;*/
	}
	function contact_person(salutation, street, street_number, post_code, town, email, phone_number, interests, job_history){
		self.salutation=salutation;
		self.street=street;
		self.street_number=street_number;
		self.post_code=post_code;
		self.town=town;
		self.email=email;
		self.phone_number=phone_number;
		self.interests=interests;
		self.job_history=job_history;
	}
	function company_conversation(time_added, person_company, person_school, conversation_content){
		self.time_added=time_added;
		self. person_company=person_company;
		self.person_school=person_school;
		self.conversation_content=conversation_content;
	}
	function contact_details_view_model(){
		var self =this;
		self.company_contact=new company_contact("company asdf", "Street asdf", "59", "43958", "Town ser", "Tim Manager", "sdofhaodsgojdoahgoajdk asofihsao dfojsdxoifj ", "Medizininformaik", "Diplomarbeit", null, null, null);
	}
	ko.applyBindings(new contact_details_view_model());
});