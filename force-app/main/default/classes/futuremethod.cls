public with sharing class futuremethod {
    @future
    public static void futureCall1() {
        System.debug('futuremethod.futureCall1() ran at: ' + System.now());
    }

    @future
    public static void futureCall2() {
        System.debug('futuremethod.futureCall2() ran at: ' + System.now());
    }
}
