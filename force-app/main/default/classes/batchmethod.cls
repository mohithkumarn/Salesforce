public with sharing class batchmethod implements Database.Batchable<sObject>, Database.Stateful{
    String query = 'select id, name from Contact';
    Integer executeCount = 0;
    Integer recordCount = 0;
    
    public Database.QueryLocator start(Database.BatchableContext BC) {
        System.debug('Came to start method @ ' + System.now());
        return (Database.getQueryLocator(query));
}
public void execute(Database.BatchableContext BC, List<sObject> scope) {
        System.debug('Came to execute method @ ' + System.now() + '. Number of records: ' + scope.size());
        executeCount++;
        recordCount += scope.size();
        Contact acct = (Contact)scope[0];
        System.debug('Account Name; ' + acct.Name);
    }

    public void finish(Database.BatchableContext BC) {
        System.debug('Came to finish method @ ' + System.now());
        System.debug('execution loop: ' + executeCount);
        System.debug('No of Records Processed: ' + recordCount);
    }
}
