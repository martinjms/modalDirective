angular.module('modal')

.service('modalService', function($timeout) {
    return {
        self: this,
        getModal: function(modal_id){
            return self.modals[modal_id];
        },
        showModal: function(modal_id){
            self.modals[modal_id].visible = true;
            document.body.classList.add('modal-open');
        },
        hideModal: function(modal_id, callback){
            self.modals[modal_id].visible = false;
            document.body.classList.remove('modal-open');
        },
        addModal: function(modal_id, modal_class){
            var modal = {
                id: modal_id,
                class: modal_class,
                visible: false
            };

            if(!self.modals){
                self.modals = {};
            }
            self.modals[modal_id] = modal;
        }
    };
});