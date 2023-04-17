## **Client History**

The client's history is a structure responsible for accessing all of the client's transactions in the stable transaction record. The information is organized in the record, making it easy to retrieve when needed.

        {
            _id: "56a4f3564",
            holder: "João Silva 123",
            action: "history",
        }



# Description

    _id:
Client ID.

  holder 
Client name.

    action
Type of action being executed.

___

This structure interacts directly with the following structures.

## - [Check Status](./status.md)

## - [Stable Account](./acc_Stable.md)