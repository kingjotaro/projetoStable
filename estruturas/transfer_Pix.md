# Transfer System with PIX 

This system will be responsible for converting Stablecoins to Fiat and sending a transfer using PIX. It must be planned and implemented with great care, as the conversion of Stablecoins to FIAT involves a de-escrow process, which can result in variations in value depending on the time of day it is performed. Public bonds are only redeemed during business hours from Monday to Friday, so it is necessary to find an ideal solution that allows transactions to occur even outside of business hours and that these variations do not affect the balance of the Stablecoin. 

Roughly speaking, a transaction order would be sent to the existing structure responsible for FIAT, and this structure would return to the Stable system an order for the retention and settlement of an equivalent value.

    {
     _id: "123456",
     acount_Id: "56a4f3564",
     destiny: "13j1fj13",
     value: 500,
     date: "16/04/2023",
     time: "07:00",
    }

I will only provide the basics of this structure to avoid getting into a rabbit hole.

____

Next

## - [Treasury](./estruturas/treasury.md)

Previous

## - [Check Status](./estruturas/status.md)
