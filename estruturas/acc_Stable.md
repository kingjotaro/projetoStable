# **Stable Account**

The Stable account structure is responsible for holding the balance of customers, it is our strongbox in the system where we keep all the necessary information about a customer's account.

    {
    _id: "56a4f3564",
    fiat_Id: "123456"
    holder: "João Silva 123",
    balance: 5000,
    }

__________________

## Description

    _id:
This is the unique identifier created by us to identify our customers, and all search, credit, and debit transactions will be performed using this ID.

    fiat_Id

This ID will serve as the identifier for our customers' FIAT account. As all customers already have an account with the bank, we will utilize this ID for all transactions originating from outside the Stable system or leaving it.

    holder
Client name.

    balance

This is responsible for storing the customer's account balance.

____


**I believe there are additional pieces of information that an account should store. However, since we are dealing with the expansion of an already-existing account, I will focus on the bare minimum necessary in this aspect. Only the essential information needed to perform operations will be included.**

___
This structure interacts directly with the following structures.

## - [Swap Stable for FIAT](./swap_FIAT.md)

## - [Check Stable Account Balance](./CSAB.md)

## - [Billing](./billing.md)

## - [Transfers](./transfer.md)

## - [Balance Update](./balance_Update.md)


  