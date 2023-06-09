## Account Validation



The validation works in two steps, first we verify the balance and the type of operation being performed.


    {
     _id: "123456",
     acount_Id: "56a4f3564",
     action: "10",
    }

## Description
    _id:
Unique identifier automatically generated by the database.


    account_id:
Identifier of the account being validated.


    action:
Type of action being executed, which can be:

- `"10"`: Transfer

- `"20"`: Swap FIAT

- `"30"`: Payment

After verifying the balance and type of operation to be performed, we check the recipient of the transaction, as it is necessary to have their name for display on the transaction screen and save to record.
  
If any of the conditions do not match, an error is triggered.

In the event of an error, the existing structure will be duplicated, and a new key-value pair will be added to represent the error type. This modified structure will then be returned.
    
            {
    _id: "123456",
    account_Id: "56a4f3564",
    action: "10",
    error_Handler: "3",
    }
    

I will cover error_Handler on this document [Error type](./error_Handler.md)
____


Next step

## - [Check Status](./estruturas/status.md)

Previous

## - [Transfers](./estruturas/transfer.md)
## - [Swap Stable for FIAT](./estruturas/swap_FIAT.md)
## - [Billing](./estruturas/billing.md)


    