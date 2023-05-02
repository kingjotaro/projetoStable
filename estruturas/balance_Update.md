#  Updated Balance Account

This system is the most important of the project, as it is where all balance updates for Stable accounts will be processed. For explanatory purposes, we will first divide the updates into two types: updates that come from within the Stable system and updates that come from outside of the Stable system.

> 1. Updates that come from within the Stable system are updates that involve transfers and payments within the system itself, without any de-encashment of collateral.


> 2. Updates that come from outside of the Stable system are transactions and payments that will go through the process of encashment/de-encashment. Within these operations, we can further divide into three subgroups:




 * The first involves transactions and payments to outside of the Stable system, which involves a de-encashment process of collateral to generate funds in FIAT and fulfill obligations outside of the system.

 * The second involves transactions and payments that occur from outside of the Stable system to inside of the Stable system. These are encashment operations that will generate Stable for the system and encash FIAT based on our chosen collateral.

 * The third involves balance adjustment operations of the system to ensure maximum liquidity on both sides of the operations, maintaining a minimum level of Stable and FIAT in the system to perform with greater efficiency and agility in transactions.


For all transactions that originate from within the Stable system will now be reflected in the Stable Record, the primary Status document that was generated. The document will now have the status of the transaction marked as completed and also contain additional information about the transaction that was performed.

For all transactions coming from outside the Stable system, the pre-existing structure will be responsible for collecting and sending the information along with the Stable issuance order into the Stable system. This can be done in N ways depending on the strategy to be used for transactions and treasuries. For simplification, I will only create a document with an array that will have the information of the Pix received by the external structure attached to the Stable system.

    {
     _id: "123456",
     pix_doc: [ 
                user: "1234567",
                value: "500",
                currency: "BRL",
                etc: "....",     
                ],
     action: "10",
     destiny: "13j1fj13",
     value: 500,
     date: "16/04/2023",
     time: "07:00",

    }

The transaction registry is responsible for transactions within the Stable system. Stable operations that are not registered under an ownership and belong to the system operator are recorded in the  [treasury transaction registry](./STR.md)

______

Next Step

## - [Stablecoin Transaction Register](./estruturas/STR.md)

## - [Stable Account](./estruturas/acc_Stable.md)

Previous

## - [Treasury](./estruturas/treasury.md)





