# **Definição da estrutura da URV digital**

## [Exemplo de arquitetura](https://excalidraw.com/#json=GJEPPgcxL2kYbiLLUDrBM,l6ICW01xHVV5Kjkupa8A_A)

## **Legendas**

<span style="color:lightblue"> Azul: Lembretes.</span>

<span style="color:orange">Laranja: Atividades externas do sistema exercida pela estrutura já existente.</span>

<span style="color:green">Verde: Implementação do Front e Backend.</span>

<span style="color:purple">Roxo : Backend com interface para adminsitração.</span>

<span style="color:gray">Cinza: Backend.</span>


Setas indicam um fluxo de dados a ser seguido, mas não necessariamente apenas de uma unica via.

# **Estruturas**

## - [Lastro](./estruturas/lastro.md)

Esta estrutura representa lasto estesourado, tudo começa aqui quando pegamos os titulos adquiridos pela nosso banco digital e criamos nossa Stable com base nos valores desse titulo, então esse é o primeiro documento que você deveria checar. 
__________________
## - [Registro de Transações do Tesouro](./estruturas/reg_Trans_Tesouro.md)

Esta estrutura representa o registro de transações no tesouro, que se encontra logo acima do lastro entesourado no Excali. Tal estrutura de dados tem como objetivo armazenar todas as entradas e saídas do tesouro, funcionando como o livro contábil do lastro.
__________________
## - [Update de Saldo Disponivel](./estruturas/update_Saldo_Disponivel.md)

Essa é, sem dúvida, uma das estruturas mais importantes para o funcionamento do nosso projeto. É ela que atualiza todos os saldos das contas Stable, realizando as operações de débito e crédito de maneira similar ao funcionamento de uma conta bancária convencional. É importante destacar que essa estrutura é crucial para o correto funcionamento do sistema, garantindo a precisão das informações e o correto registro de todas as transações realizadas.
__________________
## - [Registro de transações da Stable](./estruturas/reg_Trans_Stable.md)

Além de funcionar como um livro contábil, o registro de transações nas contas Stable também pode ser utilizado para realizar checagens e gerar históricos dos clientes. Com esse registro, é possível verificar o histórico de depósitos e saques realizados por cada cliente, bem como a movimentação de suas Stablecoins ao longo do tempo. Isso permite que sejam identificados possíveis erros ou fraudes e que sejam tomadas medidas para corrigi-los ou evitá-los. Além disso, os históricos dos clientes podem ser usados para análises e estatísticas sobre o uso das contas Stable, o que pode ser útil para aprimorar o serviço oferecido aos usuários.
__________________
## - [Conta Stable](./estruturas/conta_Stable.md)

No que diz respeito ao sistema de contas, há a possibilidade de adotar uma estrutura semelhante à utilizada pelo sistema bancario atual ou criar algo completamente novo. Nesse caso, optei por seguir a estrutura já existente, com o intuito de tornar mais fácil a integração com outras operações financeiras. Entretanto, é importante lembrar que ainda não é possível afirmar com certeza se essa decisão será correta, pois depende de diversos fatores e pode ser necessário realizar alguns ajustes.

__________________
## - [Trocar Stable por FIAT](./estruturas/swap_FIAT.md)

Realizar a conversão de Stablecoins para moedas Fiat através da estrutura front/back.

__________________
## - [Consultar saldo na conta Stable](./estruturas/saldo_Disponivel_Stable.md)

Verificar o saldo disponível na conta de Stablecoins.

__________________
## - [Cobranças](./estruturas/cobranças.md)

 Gerar e pagar cobranças, utilizando tanto moedas Fiat como Stablecoins.

__________________
## - [Transferências](./estruturas/transferencias.md)

Realizar transferências de Stablecoins para contas dentro ou fora do sistema, ou transferências via PIX.

__________________
## - [Consultar status](./estruturas/status.md)

Consultar o status de uma transação realizada, para obter informações sobre o processamento da mesma.
__________________
## - [Verificar histórico](./estruturas/histórico_Cliente.md)

Verificar o histórico de transações pessoais realizadas na plataforma para acompanhar o fluxo financeiro.
__________________
## - [Sistema de verificação de conta](./estruturas/validação_Conta.md)

Sistema que ira verificar saldo, id e outro demais dados do cliente.
__________________
## - [Transferencia via stable](./estruturas/transfer_Stable.md)

Sistema que ira transferir Stable entre contas do sistema Stable.
__________________
## - [Transferencia via Pix Stable para fora do sistema Stable](./estruturas/transfer_Pix.md)

Sistema que ira realizar uma troca de Stable por FIAT e realizar um pix para fora do sistema Stable.
__________________













