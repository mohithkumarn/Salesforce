public with sharing class ContactSearchController {
    @AuraEnabled(Cacheable=true)
    public static Contact[] getAllContacts() {
        return [SELECT Id, Name
            FROM Contact ORDER BY Name LIMIT 10];
    }
    @AuraEnabled(Cacheable=true)
    public static Contact[] searchContacts(String searchTerm) {
        // Return all bears when no search term
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getAllContacts();
        }
        // Prepare query paramters
        searchTerm = '%'+ searchTerm +'%';
        // Execute search query
        return [SELECT Id, Name
            FROM Contact WHERE Name LIKE :searchTerm ORDER BY Name LIMIT 10];
    }
    
    
    
    
    
    
    
    
    
    
    
    }

