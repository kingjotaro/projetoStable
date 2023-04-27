// We create an object representing the data of the first investment
const firstTreasury = {
    _id: "123456",
    bondType: "IPCA+",
    totalBonds: 5000,
    unitPrice: 100,
    maturity: "01/01/2050",
    purchaseDate: "01/01/2025",
    };
    
    // We define the concept of "Stable": it is a unit of value that tracks the value of some currency or underlying asset, to minimize volatility.
    // In our example, we will generate one Stable for each bond purchased, with a value of 1:1 in relation to the bond's value.
    
    // We calculate the total Stable generated from the first investment
    const totalStableGenerated = firstTreasury.totalBonds * firstTreasury.unitPrice;
    
    console.log("Total Stable generated: " + totalStableGenerated);
    
    // Let's say bond prices appreciated by 10% over 6 months
    const actualPriceBond = 110;
    
    // Now, instead of maintaining the 1:1 parity, let's make the value of Stable fluctuate and adapt transactions to the current real value
    const stableValue = (firstTreasury.totalBonds * actualPriceBond) / totalStableGenerated;
    
    console.log("Stable value after fluctuation: " + stableValue);
    
    // We create a new object representing the data of the second investment
    const secondTreasury = {
    _id: "123457",
    bondType: "IPCA+",
    totalBonds: 5000,
    unitPrice: 110,
    maturity: "01/01/2050",
    purchaseDate: "01/06/2025",
    };
    
    // Total Stable generated from the second investment
    const totalStableGenerated2 = secondTreasury.totalBonds * secondTreasury.unitPrice;
    
    // Now we can calculate the total value in bonds for the user, considering both investments
    const totalStableValue = totalStableGenerated2 + (totalStableGenerated * stableValue);
    
    console.log("Updated Stable value of the first investment: " + totalStableGenerated*stableValue)
    
    console.log("Total Stable value of the second investment: "+ totalStableGenerated2);
    console.log("Total value of both investments combined: "+ totalStableValue )
    
    // We calculate the total number of bonds after the second investment
    const totalBondsAfterSecondTreasury = firstTreasury.totalBonds + secondTreasury.totalBonds;
    
    console.log("Total number of bonds after the second investment: " + totalBondsAfterSecondTreasury);
    
    // Without extending further, it very important create processes to generate the functionality of hoarding and liquidation.

