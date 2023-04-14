## Validação de Contas

Sistema de validação de contas verifica diversas informações de uma conta e o tipo de operação que esta sendo realizado

        {
        _id: "123456",
        acount_Id: "56a4f3564",
        action: "10",

        }


A validação funciona em duas etapas, primeiro identifica de onde ela veio e a quem pertence a validação.

## Descrição
        _id:
Identificador único gerado automaticamente pelo banco de dados.

        account_id:
Identificador da conta que está sendo validada.

        action:
Tipo de ação que está sendo executada, podendo ser:

- `"10"`: Transação

- `"20"`: Histórico

- `"30"`: Swap FIAT

- `"40"`: Pagamento


A validação é feita em duas etapas. Na primeira, é identificado de onde a solicitação veio e a quem pertence a validação. Na segunda, as informações do documento são utilizadas para validar dar continudade a operação solicidade ou gerar uma nova estrutura de erro.


Quando um erro ocorrer, a estrutura anterior sera copiada e sera inserido uma nova chave e valor que corresponde ao tipo de erro ocorrido, ex:

    
    
        error_Handler: "3",
    


## Descrição 

    Error_Handler

Esse nova chave vai ter os seguintes valores de acordo com cada erro identificado.


- `"1"`: Erro de validação
  
   Este tipo de erro ocorre quando a transação não satisfaz uma ou mais regras de validação definidas no sistema. Por exemplo, se uma transação tentar transferir mais dinheiro do que o saldo disponível em uma conta, isso pode resultar em um erro de validação.
  
- `"2"`: Erro de integridade de dados
  
   Este tipo de erro ocorre quando a transação causa uma violação na integridade dos dados em um sistema. Por exemplo, se uma transação tentar inserir um registro duplicado em um banco de dados, isso pode resultar em um erro de integridade de dados.

- `"3"`: Erro de concorrência

    Este tipo de erro ocorre quando duas ou mais transações estão tentando acessar e/ou modificar os mesmos dados simultaneamente. Por exemplo, se duas transações estiverem tentando atualizar o saldo de uma conta ao mesmo tempo, pode ocorrer um erro de concorrência.

- `"4"`: Erro de comunicação
  
  Este tipo de erro ocorre quando há um problema de comunicação entre os sistemas envolvidos na transação. Por exemplo, se uma transação não puder ser concluída porque a conexão com o banco de dados foi perdida, isso pode resultar em um erro de comunicação.

- `"5"`: Erro de segurança
    Este tipo de erro ocorre quando a transação é afetada por uma violação de segurança. Por exemplo, se um usuario X tentar acessar as credenciais de um usuário Y e executar uma transação não autorizada, isso pode resultar em um erro de segurança.

    