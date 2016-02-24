# modalDirective
pretty simple Angular 1.4 modal directive.
NO JQuery
NO Bootstrap


Use example:

	//Template
	<modal modal-id="myModalId" modal-class="myModalClass" config="{overlay:false}">
		//... your content
	</modal>

	//Controller
		modalService.showModal('myModalId');

		modalService.hideModal('myModalId');
