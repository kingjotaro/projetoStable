## Description 

    Error_Handler

This new key will have the following values according to each identified error:

    "1": Validation error

This type of error occurs when the transaction does not satisfy one or more validation rules defined in the system. For example, if a transaction attempts to transfer more money than the available balance in an account, this may result in a validation error.

    "2": Data integrity error

This type of error occurs when the transaction causes a violation of data integrity in a system. For example, if a transaction attempts to insert a duplicate record in a database, this may result in a data integrity error.

    "3": Concurrency error

This type of error occurs when two or more transactions are attempting to access and/or modify the same data simultaneously. For example, if two transactions are attempting to update the balance of an account at the same time, a concurrency error may occur.

    "4": Communication error

This type of error occurs when there is a communication problem between the systems involved in the transaction. For example, if a transaction cannot be completed because the connection to the database was lost, this may result in a communication error.

    "5": Security error

This type of error occurs when the transaction is affected by a security breach. For example, if a user X attempts to access the credentials of a user Y and execute an unauthorized transaction, this may result in a security error.

________

If no error occurs, the operation will proceed to the status check.

____
This documento only pertence to 