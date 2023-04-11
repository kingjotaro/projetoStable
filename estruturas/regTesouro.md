# Registro de Transações no Tesouro

Neste documento apresento uma ideia de como deveria ser realizado o Registro de Transações no Tesouro.

Primeiro um exemplo de como é feito o entesouramento.

     {
        _id: "123456",
        is_liquid: False,
        bond_type: "IPCA+",
        treasury_date: "08/01/2025",
        maturity_date: "01/01/2050",
        purchase_date: "01/01/2025",
        sold_date: "",
        purchase_value: "1000",
        sold_value: "",


    } 

Tal estrutura é gerada com base no que foi lastreado na estrutura lastro, esse registro contem alguns dados  

