# Swap Stable for FIAT

This is a simple system that will send a settlement order for Stable and transfer the FIAT value to the user's own account outside the Stable system.


    {
        _id: "56a4f3564",
        fiat_Id: "123456"
        holder: "João Silva 123",
        value: 5000,
        action: "20"!,
        date: "16/04/2023",
        time: "07:00",
        
        
        }

## Description 

    _id:
Client ID.


    fiat_Id:
ID FIAT payment.

    holder:
Client name.

    value:
Value of the SWAP.

    date:
Date of the SWAP.

    time:
Time of the SWAP.

    action
Type of action being executed, it will always be a fixed value to be identified during validation.

    date 
Transaction date.

    time 
Transaction time.

____
This structure interacts directly with the following structures.

## - [Account Validation System](./acc_valitadion.md)

## - [Stable Account](./acc_Stable.md)


