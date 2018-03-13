var image_index=1;
$(document).ready(function(){
	$(".i_image_arrow_down").click(function(){
		alert($(this).src);
	});
	$("#i_image_arrow_left").click(function(){
		plusSlides(-1);
	});
	$("#i_image_arrow_right").click(function(){
		plusSlides(1);
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
			new contact_person("Du","Herr LSS","Tim", "NachTim" ,"Adsf Street", "29d", "4456", "Townasdf", "asdf@asdf.com", "165198516", "interests in", "linkedin.com" ),
			new contact_person("Sie","","tine","tinsten" ,"Adsasdff Street", "29d", "4456", "Townasdf", "asdf@asdf.com", "165198516", "interests in", "linkedin.com" )	
		]) ;
		/*self.contact_persons=contact_persons;*/
		self.images=images;
		var i=new company_conversation("12.12.1234","Tim NachTim","Tisa sadfo s", "osadhfoahdsgohafdocxjgoieadjogDCfa" );
		self.conversations=ko.observableArray([
				new company_conversation("12.12.1234","Tim NachTim","Tisa sadfo s", "osadhfoahdsgohafdocxjgoieadjogDCfa" ),	
				new company_conversation("13.12.1234","Tine Tinsten","Tisa sadfo s", "osadhfoahdsgohafdocxjgoieadjogDCfa" )
		]);
		
		/*self.conversations=conversations;*/
	}
	function contact_person(salutation, additional_salutation,first_name, last_name, street, street_number, post_code, town, email, phone_number, interests, job_history){
		var self=this;
		self.salutation=salutation;
		self.additional_salutation=additional_salutation;
		self.first_name=first_name;
		self.last_name=last_name;
		self.street=street;
		self.street_number=street_number;
		self.post_code=post_code;
		self.town=town;
		self.email=email;
		self.phone_number=phone_number;
		self.interests=interests;
		self.job_history=job_history;
		self.full_name=ko.computed(function(){
			return self.first_name+" "+self.last_name;
		});
		self.adress=ko.computed(function(){
			return self.street+" "+self.street_number+", "+self.post_code+" "+self.town;
		});
	}
	function company_conversation(time_added, person_company, person_school, conversation_content){
		var self=this;
		self.time_added=time_added;
		self. person_company=person_company;
		self.person_school=person_school;
		self.headline=ko.computed(function(){
			return self.person_company+" - "+self.person_school;
		});
		self.conversation_content=conversation_content;
	}
	function contact_details_view_model(){
		var self =this;
		var imgs=["https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/220px-Shiba_inu_taiki.jpg", "https://d266gjuqagjn6e.cloudfront.net/rasseseiten/dackel-charakter.jpg"]
		self.company_contact=new company_contact("company asdf", "Street asdf", "59", "43958", "Town ser", "Tim Manager", "sdofhaodsgojdoahgoajdk asofihsao dfojsdxoifj ", "Medizininformaik", "Diplomarbeit", null, imgs, null);
	}
	ko.applyBindings(new contact_details_view_model());
	
	showSlides(image_index);
});

//Verwaltung der Bilder
function plusSlides(n) {
	showSlides(image_index += n);
}

function currentSlide(n) {
	showSlides(image_index = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("img_image");
	if (n > slides.length) {
		image_index = 1
	}    
	if (n < 1) {
		image_index = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slides[image_index-1].style.display = "block";  
}