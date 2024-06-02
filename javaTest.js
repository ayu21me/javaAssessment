// Create a variable to hold your NFT's
let totalNFTs = 0;

//  Create a function to mint NFTs
function mintNFT(clubName, yearFormed, championsLeagueTitles, domesticLeagueTitles) {
    // Create an object to hold metadata
    let nftMetadata = {
        clubName: clubName,
        yearFormed: yearFormed,
        championsLeagueTitles: championsLeagueTitles,
        domesticLeagueTitles: domesticLeagueTitles
    };
    // Increment the total number of NFTs
    totalNFTs++;
    // Return or store the NFT object as needed
    return nftMetadata;
}

// Function to list NFTs metadata
function listNFTs(nftsArray) {
    nftsArray.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Club Name:", nft.clubName);
        console.log("Year Formed:", nft.yearFormed);
        console.log("Champions League Titles:", nft.championsLeagueTitles);
        console.log("Domestic League Titles:", nft.domesticLeagueTitles);
        console.log("------------------------");
    });
}

// Function to get total supply of NFTs
function getTotalSupply() {
    return totalNFTs;
}

let footballClubs = [];

// Mint NFTs for football clubs
footballClubs.push(mintNFT("Real Madrid", 1902, 13, 34));
footballClubs.push(mintNFT("AC Milan", 1899, 7, 18));
footballClubs.push(mintNFT("Liverpool", 1892, 6, 19));
footballClubs.push(mintNFT("FC Bayern Munich", 1900, 6, 31));
footballClubs.push(mintNFT("FC Barcelona", 1899, 5, 26));

// List football clubs with their metadata
listNFTs(footballClubs);

// Get total supply
console.log("Total football clubs NFTs minted:", getTotalSupply());
