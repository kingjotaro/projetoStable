#  Updated Balance Account

This system is the most important of the project, as it is where all balance updates for Stable accounts will be processed. For explanatory purposes, we will first divide the updates into two types: updates that come from within the Stable system and updates that come from outside of the Stable system.

> 1. Updates that come from within the Stable system are updates that involve transfers and payments within the system itself, without any de-encashment of collateral.


> 2. Updates that come from outside of the Stable system are transactions and payments that will go through the process of encashment/de-encashment. Within these operations, we can further divide into three subgroups:




 * The first involves transactions and payments to outside of the Stable system, which involves a de-encashment process of collateral to generate funds in FIAT and fulfill obligations outside of the system.

 * The second involves transactions and payments that occur from outside of the Stable system to inside of the Stable system. These are encashment operations that will generate Stable for the system and encash FIAT based on our chosen collateral.

 * The third involves balance adjustment operations of the system to ensure maximum liquidity on both sides of the operations, maintaining a minimum level of Stable and FIAT in the system to perform with greater efficiency and agility in transactions.


To transactions within the Stable system.

    {
     _id: "123456",
     acount_Id: "56a4f3564",
     action: "10",
     destiny: "13j1fj13",
     value: 500,
     date: "16/04/2023",
     time: "07:00",

    }