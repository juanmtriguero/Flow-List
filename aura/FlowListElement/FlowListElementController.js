({
    init : function (component) {
        var flow = component.get("v.flow");
        var flowData = component.find("flowData");
        flowData.startFlow(flow.Unique_Name__c);
    },
})