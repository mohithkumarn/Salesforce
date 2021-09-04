public with sharing class extendClass extends extendClass {
    public extendClass() {
        System.debug('extended class');
    }
    public static String polymorphism(String a){
        return a;
    }
    public static String polymorphism(String a, String b){
        return a,b;
    }
    Account acct = new Account(Name = ‘Test Account’, …); or
■ Account acct = new Account();
acct.Name = ‘Test Account’;
insert (acct);
Account acct = [select id, name from Account where name = ‘Test Account’ limit 1];
acct.name = ‘Updated Name’;
update (acct);  
}
