public class FlowListController {
	
    @AuraEnabled
    public static List<Flow__c> getFlows() {
        return [SELECT Name, Unique_Name__c FROM Flow__c];
    }
    
}