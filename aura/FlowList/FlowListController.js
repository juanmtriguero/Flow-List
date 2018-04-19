({
    init : function (component) {
        var action = component.get("c.getFlows");
        action.setCallback(this, function(a) {
            var flows = a.getReturnValue();
            component.set("v.flows", flows);
            var expanded = new Map();
            for (var i in flows) {
                expanded.set(flows[i].Number__c, "false");
            }
            component.set("v.expanded", expanded);
        });
        $A.enqueueAction(action);
    },
    toggle : function(component, event) {
        var section = event.currentTarget.parentNode.parentNode;
        var content = section.children[1];
        if (section.classList.contains("slds-is-open")) {
        	section.classList.remove("slds-is-open");
            content.setAttribute("aria-hidden", "true");
        } else {
        	section.classList.add("slds-is-open");
            content.setAttribute("aria-hidden", "false");
        }
	},
})