# Transfer

This structure acts with a frontend that receives data for a transaction generated based on information provided by the client and their own account details.

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
Type of action being executed, it will always be a fixed value to be identified during validation.
    date 
Transaction date.

    time 
Transaction time.
____
Next

## - [Account Validation System](./acc_valitadion.md)

Previous

## - [Stable Account](./acc_Stable.md)