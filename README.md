# modalDirective
Angular 1.4 modal directive


Directiva simple de modal con angular



Ejemplo de uso 



	<modal modal-id="myModalId" modal-class="myModalClass" config="{overlay:false}">
		//... contenido
	</modal>

	// in controller
		modalService.showModal('myModalId');

		modalService.hideModal('myModalId');