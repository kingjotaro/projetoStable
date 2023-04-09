# Definição da estrutura da URV digital

[Exemplo de arquitetura](https://excalidraw.com/#json=yp-SGKAN9I4vTXxsJS5v4,Hnmd9_6KqSEyysv6Fymhew)

Legendas

<span style="color:lightblue"> Azul: Lembretes.</span>

<span style="color:orange">Laranja: Atividades externas do sistema exercida pela estrutura já existente.</span>

<span style="color:green">Verde: Implementação do Front e Backend.</span>

<span style="color:purple">Roxo : Backend com interface para adminsitração.</span>

<span style="color:gray">Cinza: Backend.</span>


Setas indicam um fluxo de dados a ser seguido, mas não necessariamente apenas de uma unica via.

# Estrutura

## Lastro 

A primeira estrutura é o lasto estesourado, tudo começa aqui quando pegamos os titulos adquiridos pela nosso banco digital e criamos nossa Stable com base nos valores desse titulo, então esse é o primeiro documento que você deveria checar, [Lastro](./estruturas/Lastro.md)

## Registro de transações do tesouro

Como segunda estrutura, temos o registro de transações no tesouro, que se encontra logo acima do lastro entesourado no Excali. Essa estrutura de dados tem como objetivo armazenar todas as entradas e saídas do tesouro, funcionando como o livro contábil do lastro.

##  Update de saldo disponivel

Essa é, sem dúvida, uma das estruturas mais importantes para o funcionamento do nosso projeto. É ela que atualiza todos os saldos das contas Stable, realizando as operações de débito e crédito de maneira similar ao funcionamento de uma conta bancária convencional. É importante destacar que essa estrutura é crucial para o correto funcionamento do sistema, garantindo a precisão das informações e o correto registro de todas as transações realizadas.

## Registro de transações da Stable

Além de funcionar como um livro contábil, o registro de transações nas contas Stable também pode ser utilizado para realizar checagens e gerar históricos dos clientes. Com esse registro, é possível verificar o histórico de depósitos e saques realizados por cada cliente, bem como a movimentação de suas Stablecoins ao longo do tempo. Isso permite que sejam identificados possíveis erros ou fraudes e que sejam tomadas medidas para corrigi-los ou evitá-los. Além disso, os históricos dos clientes podem ser usados para análises e estatísticas sobre o uso das contas Stable, o que pode ser útil para aprimorar o serviço oferecido aos usuários.

## Conta Stable

No que diz respeito ao sistema de contas, há a possibilidade de adotar uma estrutura semelhante à utilizada pelo sistema bancario atual ou criar algo completamente novo. Nesse caso, optei por seguir a estrutura já existente, com o intuito de tornar mais fácil a integração com outras operações financeiras. Entretanto, é importante lembrar que ainda não é possível afirmar com certeza se essa decisão será correta, pois depende de diversos fatores e pode ser necessário realizar alguns ajustes.


## A seguir operações menores que irão pertencer a conta Stable














