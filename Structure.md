# **Definition of the digital URV Structure**

## [Example of architecture](https://excalidraw.com/#json=VElGD3qf-RGIhR9d-QPqP,wsg1A8Jst_LJIJOq2Clh0A)


<span style="color:lightblue"> Blue: Reminders.</span>

<span style="color:orange">Orange: External activities of the system carried out by the existing structure.</span>

<span style="color:green">Green: Implementation of Front and Backend.</span>

<span style="color:purple">Purple: Backend with interface for administration.</span>

<span style="color:gray">Gray: Backend.</span>

Arrows indicate a flow of data to be followed, but not necessarily in a single way.

# **Structures**

## - [Treasury](./estruturas/treasury.md)

This structure represents the underlying asset, which is where everything starts when we take the titles acquired by our digital bank and create our Stable based on the values of that title. So this is the first document you should check. 
__________________
## - [Treasury Transaction Register](./estruturas/TTR.md)

This structure represents the register of transactions in the treasury, which is located just above the underlying asset in Excali. The purpose of this data structure is to store all treasury inflows and outflows, functioning as the ledger of the underlying asset.

__________________
## - [Balance Update](./estruturas/balance_Update.md)

This is undoubtedly one of the most important structures for the functioning of our project. It updates all Stable account balances, performing debit and credit operations similar to the functioning of a conventional bank account. It is important to highlight that this structure is crucial for the correct functioning of the system, ensuring the accuracy of information and the correct registration of all transactions carried out.
__________________
## - [Stablecoin Transaction Register](./estruturas/STR.md)

In addition to functioning as an accounting ledger, the register of transactions in Stable accounts can also be used to perform checks and generate customer histories. With this register, it is possible to verify the history of deposits and withdrawals made by each customer, as well as the movement of their Stablecoins over time. This allows possible errors or frauds to be identified and measures to correct or avoid them to be taken. In addition, customer histories can be used for analyses and statistics on the use of Stable accounts, which can be useful for improving the service offered to users.
__________________
## - [Stable Account](./estruturas/acc_Stable.md)

With regard to the account system, there is the possibility of adopting a structure similar to that used by the current banking system or creating something completely new. In this case, I chose to follow the existing structure, in order to make integration with other financial operations easier. However, it is important to remember that it is still not possible to say for sure whether this decision will be correct, as it depends on several factors and adjustments may be necessary.
__________________
## - [Swap Stable for FIAT](./estruturas/swap_FIAT.md)

Perform the conversion of Stablecoins to Fiat currencies through the front/back structure.

__________________
## - [Check Stable Account Balance](./estruturas/CSAB.md)

Check the available balance in the Stablecoin account.

__________________
## - [Billing](./estruturas/billing.md)

 Generate and pay bills, using both Fiat currencies and Stablecoins.

__________________
## - [Transfers](./estruturas/transfer.md)

Perform transfers of Stablecoins to accounts within or outside the system, or transfers via PIX.

__________________
## - [Check Status](./estruturas/status.md)

Check the status of a transaction made to obtain information about its processing.
__________________
## - [Check Transaction History](./estruturas/client_history.md)

Check the personal transaction history made on the platform to keep track of the financial flow.
__________________
## - [Account Validation System](./estruturas/acc_valitadion.md)

System that will verify the balance, ID, and other client information.
__________________
## - [Stable Transfer System](./estruturas/STS.md)

System that will transfer Stable between accounts within the Stable system.
__________________
## - [Stable to FIAT Transfer System via Pix](./estruturas/transfer_Pix.md)

System that will exchange Stable for FIAT and perform a Pix transfer outside of the Stable system.
__________________













