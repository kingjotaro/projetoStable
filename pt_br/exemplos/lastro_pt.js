// Representação de como calcular a geração de Stable a partir de um entesouramento em títulos do Tesouro Direto

// Criamos um objeto representando os dados do primeiro entesouramento
const firstTreasury = {
    _id: "123456",
    bondType: "IPCA+",
    totalBonds: 5000,
    unitPrice: 100,
    maturity: "01/01/2050",
    purchaseDate: "01/01/2025",
};

// Definimos o conceito de "Stable": é uma unidade de valor que acompanha o valor de alguma moeda ou ativo subjacente, para minimizar a volatilidade.
// No nosso exemplo, vamos gerar um Stable para cada título comprado, com valor 1:1 em relação ao valor do título.

// Calculamos o total de Stable gerado a partir do primeiro entesouramento
const totalStableGenerated = firstTreasury.totalBonds * firstTreasury.unitPrice;

console.log("Total gerado de Stable: " + totalStableGenerated);

// Digamos que os preços dos títulos se apreciaram em 10% ao longo de 6 meses
const actualPriceBond = 110;



// Agora, em vez de manter a paridade 1:1, vamos fazer o valor da Stable flutuar e adaptar as transações ao valor do real atual
const stableValue = (firstTreasury.totalBonds * actualPriceBond) / totalStableGenerated;



console.log("Valor por Stable após flutuação: " + stableValue);

// Criamos um novo objeto representando os dados do segundo entesouramento
const secondTreasury = {
    _id: "123457",
    bondType: "IPCA+",
    totalBonds: 5000,
    unitPrice: 110,
    maturity: "01/01/2050",
    purchaseDate: "01/06/2025",
};

// Total de Stable gerado a partir do segundo entesouramento
const totalStableGenerated2 =  secondTreasury.totalBonds*secondTreasury.unitPrice;


// Agora podemos calcular o valor total em Titulos usuário, considerando ambos os entesouramentos
const totalStableValue = totalStableGenerated2 + (totalStableGenerated * stableValue);

console.log("Valor atualizado em Stable do primeiro entesouramento: " + totalStableGenerated*stableValue)

console.log("Valor total em Stable do segundo entesouramento: "+ totalStableGenerated2);
console.log("Valor total somado de ambos entesouramentos: "+ totalStableValue )



// Calculamos a quantidade total de títulos após o segundo entesouramento
const totalBondsAfterSecondTreasury = firstTreasury.totalBonds + secondTreasury.totalBonds;

console.log("Quantidade total de títulos após o segundo entesouramento: " + totalBondsAfterSecondTreasury);


// Sem extender mais, é necessario que se crie isso de processos a gerar funcionalidade de entesouramento e desentesouramento.


