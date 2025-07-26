public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Email, Phone
            FROM Contact
            WHERE Name LIKE :key
            ORDER BY Name
            LIMIT 100
        ];
    }
}