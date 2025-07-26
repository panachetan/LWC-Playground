public With Sharing class AccountTriggerHandler {

    public static void Throwerroronaccount(List<Account> AccountList, Map<id, Account> OldAccountMap){
        
        for(Account ObjAcc :AccountList){
            Account Oldacc = OldAccountMap.get(ObjAcc.Id);
            if(Oldacc.Rating == 'Hot'){
                ObjAcc.adderror('You can not update account because rating is Hot');
            }
        }
    }
}