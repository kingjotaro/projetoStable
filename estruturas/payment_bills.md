# Payment Bills


This structure is similar to the one used in billing, but the difference is that we're now processing a payment. As a result, the payment bill includes an additional identification field to be used during validation.

    {
        _id: "123456",
        receiver_id: "56a4f3564",
        holder: "João Silva 123",
        sender_id: "13j1fj13",
        is_stable: True,
        value: "500"
        action: "30"!,
        date: "16/04/2023",
        time: "07:00",
    }


## Description



    _id:
The ID of the payment.

    receiver_id:
The ID of the account that will receive the payment.

    holder:
The name and/or identification of the account holder.

    sender_id:
The ID of the account that are paying this bill.

    is_stable:
A boolean value indicating if the payment is made in Stable cryptocurrency.

    value:
The value of the payment in the specified currency.

    action:
Type of action being executed, it will always be a fixed value to be identified during validation.

    date 
Transaction date.

    time 
Transaction time.

_______
This structure interacts directly with the following structures.

## - [Account Validation System](./acc_valitadion.md)

## - [Stable Account](./acc_Stable.md)
