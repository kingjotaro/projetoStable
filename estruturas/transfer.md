# Transfer

The transaction is generated based on the information provided by the client and their own account information. In this transaction example, we have a transfer that will be executed within the Stable system, from one Stable account to another, with a value of 500 Stables.

            {
    _id: "123456",
    acount_Id: "56a4f3564",
    is_Stable: True,
    destiny: "13j1fj13",
    action: "10"!,
    value: 500,
    date: "16/04/2023",
    time: "07:00",
    
    }

## Description

    _id: 
Transaction ID.

    account_Id
ID of the account that will perform the transaction.

    is_Stable
Key that defines whether the transaction will be in Stable or FIAT currency.

    destiny
Destination to which the transaction will be made, either in FIAT or Stable currency.

    value
Transaction amount.

    action
Type of action being executed, in the case of transactions, it will always be a fixed value to be identified during validation.
    date 
Transaction date.

    time 
Transaction time.
____
This structure interacts directly with the following structures.

## - [Account Validation System](./acc_valitadion.md)