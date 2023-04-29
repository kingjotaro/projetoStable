# Transaction Record in Stable
This structure is responsible for recording transactions made in the Stable system, both outbound and inbound values by the treasury will also be recorded here. However, unlike the treasury which records aggregated amounts for Stable generation, here are the individual records of customer transactions, in summary:

- Stable-to-Stable account transactions
- Transactions from within the Stable system to outside with PIX
- Transactions from outside the Stable system to inside receiving PIX
- Transactions involving customer account "hoarding and dehoarding"
- PIX/Stable payments
  


      {

       _id: "56a4f3564",
       sender_id: "56a4f3564",
       sender_name
       receiver_id: "13j1fj13",
       action: 10,
       status: 3,
       is_stable: True,
       is_charge: False,
       amount: 50,
       date: "16/04/2023",
       time: "07:00",
      }   

______________

# Descrições 

        _id
O ID da registro da transação que seria automaticamente gerado pelo MongoDB ou similar.

        sender_id
O ID de quem enviou a transação 

        receiver_id
O ID de quem ira receber a transação

        status
Status que representa o atual estado das transações, existem dois tipos de grupo de estados, um para as transações que são cobranças e outro para apenas transações normais

**Status para cobranças**

0, equivale a cobrança em aberto.

1, equivale a cobrança em processamento, foi paga mas ainda esta sendo processada pelo sistema.

2, equivale a cobrana concluida com sucesso.

**Status para pagamentos**
        
3, Pagamento concluido com sucesso.

4, Pagamento 

5, Pagamento não existe ou não encontrado.

        is_stable
Campo que informa se a transação é feita com Stable ou não.

        is_charge

Campos que informa se a transação é uma cobrança.

        amount

Campo que informa o valor total da transação.

        date

Data que foi realizada








