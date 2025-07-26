public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccount(string accname){
        string searchacc = '%' + accname + '%';
        return [select id, Name, Rating, Type from Account WHERE Name LIKE :searchacc ORDER BY Name LIMIT 100];
    }
}