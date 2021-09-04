public with sharing class queueablemethod {
    String message;

    public MyQueueableClass1(String message) {
        this.message = message;
    }

    public void execute(QueueableContext qc) {
        System.debug('Came into Queueablemethod.execute() @ ' + System.now() + '. message: ' + message);

        MyQueueableClass1 mqc1 = new MyQueueableClass1('Hi Salesforce');
        Id asyncJobId = System.enqueueJob(mqc1);
    }
}
