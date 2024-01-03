frappe.ui.form.on('Item', {
    refresh(frm){
        // frappe.throw("referesh is working")
        frm.add_custom_button(__('Send Email'), function(){
            frappe.msgprint("Custom button is working");
        }, __("Actions"));
    }

})