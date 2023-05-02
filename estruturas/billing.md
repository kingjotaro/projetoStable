# **Billing**


This system is the structure responsible for generating bills.

"I created a new file for Payment bill called [Payment Bills](payment_bills.md).


    {
     _id: "123456",
     receiver_id: "56a4f3564",
     holder: "João Silva 123",
     is_targeted: True,
     target_id: "13j1fj13",
     is_stable: True,
     value: "500"          
    }

## Description


    _id:
Billind ID.

    receiver_id:
ID of the receiver.

    holder:
Client reicever name.

    is_targeted:
Boolean indicating whether the payment is targeted to someone.

target_id:
ID of the target, if payment is targeted.

    is_stable:
Boolean indicating whether the payment is stable.

    value:
Transaction value.

    date 
Transaction date.

    time 
Transaction time.

___
**An important point to highlight here is that charges can be paid in FIAT if the person generating them chooses to do so, creating a conversion process to Stable as soon as they are confirmed within the common banking system.**

____


Next
## - [Payment Bills](payment_bills.md)

Previous

## - [Stable Account](./acc_Stable.md)