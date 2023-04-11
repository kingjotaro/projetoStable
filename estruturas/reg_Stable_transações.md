# Registro de Transações na Stable

Essa estrutura é responsavel por registrar as transações feitas no sistema Stable, tanto saida como entrada de valores pelo tesouro também serão registradas aqui, porem difentemente do tesouro que registra montantes agrupados para geração de Stable, aqui fica os registros individuais das transações dos clientes, em resumo:

- Transações de contas Stable para Stable
- Transações de dentro do sistema Stable para fora com PIX
- Transações de fora do sistema Stable para dentro recebendo PIX 
- Transações que envolvam conta do cliente "entesouramente e desentesouramento"
- Pagamentos PIX/Stable
  
      {
       _id: "131414",
       sender_id: "56a4f3564",
       receiver_id: "13j1fj13",
       status: 3,
       is_stable: True,
       is_charge: False,
       amount: 50,
       date: "11/04/2023",
       date_exp: {},
       fee: 0.01,
       interest: 0.10,
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

        fee 
Taxa cobrada na transação, 1 = 100% 

        interest
Taxa de juros que talvez deva ser utilizada na cobrança, ainda não esta decidido este formato de cobrança, place_holder sexo2

        date_exp

Caso seja uma cobrança, pode ter data de vencimento, juros e tempo de experiração da cobrança e outra demais coisas que ainda não desenvolvi bem, place_holder sexo







