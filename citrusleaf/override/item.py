import frappe
@frappe.whitelist()

def throwing_error(doc, method=None):
    # frappe.throw("hooks is working")
    frappe.msgprint("the hooks fuction is working")
    