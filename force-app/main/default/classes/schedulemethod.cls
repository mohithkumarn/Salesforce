public with sharing class schedulemethod implements Schedulable {
    public void execute(SchedulableContext sc) {
        System.debug('Came into schedulemethod.execute() @ ' + System.now());
    }
}
