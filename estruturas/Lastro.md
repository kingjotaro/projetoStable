# Lastro Entesourado

Nesse documento apresento uma ideia de como poderia ser realizado o lastro entesourado.

## Modelo

    {
        _id: "123456",
        typeBonds: "IPCA+",
        totalBonds: 1000,
        unitPrice: 1000,
        maturity: 2050,
        datePurchase: "01/01/2025",

    }

## _id
O ID seria automaticamente atribuído pelo MongoDB.

## typeBonds
O tipo de título descreve qual título da dívida pública está sendo mantido e seu modelo de rendimento.

## totalBonds
Número total de títulos mantidos.

## unitPrice
O preço unitário do título mantido.

## maturity
Data de vencimento do título mantido.

## datePurchase
A data em que o título foi comprado.

O entesouramento ocorrerá de acordo com a seguinte fórmula:

Quantidade total de títulos * Preço unitário = Entesouramento Inicial

O Entesouramento Inicial gerará 1:1 em unidades de Stable inicialmente, após a flutuação dos titulos Novos entesouramente irão seguir uma regra de 3 simples, onde:

Valor atual do Titulo/Quantidade total de titulos = Valor unitario por Stable
Quantidade de novos titulos * Preço unitário de novos titulos = Novo Entesouramento
O Novo Entesouramento gera uma quantidade de 1:X onde X = Valor unitario por Stable

Veja um exemplo [exemplo](placeholder)

Neste exemplo, também podemos observar como funcionariam possíveis futuros processos de tesouraria e desempenho de funções relacionadas, embora eu não me aprofunde muito nesse assunto, pois o nível de complexidade aumenta significativamente para uma apresentação simples da ideia. É importante ressaltar que este documento é apenas um esboço e tem como objetivo validar a ideia, pois há muitos outros aspectos a serem considerados além do que está aqui.