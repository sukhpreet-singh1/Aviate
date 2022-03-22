import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  homepage: {
       padding:'80px',
       fontSize:'16px',
       textAlign:'left',
       fontWeight:'lighter',
       fontFamily:'sans-serif',
       backgroundColor:'#14161a',
     },
    container:{
        backgroundColor:'white',
    },
    image:{
        maxWidth:'100%',
        height:'auto',
    }
});

const Homepage=() => {
    const classes=useStyles();
    return (
        <div className={classes.container}>
        <div className={classes.homepage}>
            <h3>What Is a Blockchain? </h3>
            <br/>
            <p> 
                A blockchain is a distributed database that is shared among the nodes of a computer 
                network. As a database, a blockchain stores information electronically in digital 
                format. Blockchains are best known for their crucial role in cryptocurrency systems,
                such as Bitcoin, for maintaining a secure and decentralized record of transactions. 
                The innovation with a blockchain is that it guarantees the fidelity and security of 
                a record of data and generates trust without the need for a trusted third party.
            </p>
            <br/>
            <p>
                One key difference between a typical database and a blockchain is how the data is 
                structured. A blockchain collects information together in groups, known as blocks, 
                that hold sets of information. Blocks have certain storage capacities and, when 
                filled, are closed and linked to the previously filled block, forming a chain of 
                data known as the blockchain. All new information that follows that freshly added 
                block is compiled into a newly formed block that will then also be added to the 
                chain once filled.
            </p>
            <br/>
            <p>
                A database usually structures its data into tables, whereas a blockchain, like its
                name implies, structures its data into chunks (blocks) that are strung together. 
                This data structure inherently makes an irreversible time line of data when 
                implemented in a decentralized nature. When a block is filled, it is set in stone 
                and becomes a part of this time line. Each block in the chain is given an exact time 
                stamp when it is added to the chain. 
            </p>    
            <br/>
            <h3>How does blockchain work?</h3>
            <br/>
            <p> The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).
                <br/>
                First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts.</p>
            <br/>
            <h3>Transaction process</h3>
            <br/>
            <img className={classes.image} src='https://www.investopedia.com/thmb/DgmKuK6aoY6Jw3P4eox-oMEMvh0=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg'/>
            <br/>
            <br/>
            <h3>Attributes of Cryptocurrency </h3>
            <br/>
            <img className={classes.image} src='https://www.investopedia.com/thmb/hZuXjD7RtdrEZQcM8uU67CJSjOk=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-02-d8258ab814a34756bf51f1f95c78dc63.jpg'/>
            <br/>
            <br/>
            <h3>Bitcoin vs. Blockchain </h3>
            <br/>
            <p> Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two researchers who wanted to implement a system where document time stamps could not be tampered with. But it wasn’t until almost two decades later, with the launch of Bitcoin in January 2009, that blockchain had its first real-world application.The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party.”2
                <br/>
                The key thing to understand here is that Bitcoin merely uses blockchain as a means to transparently record a ledger of payments, but blockchain can, in theory, be used to immutably record any number of data points. As discussed above, this could be in the form of transactions, votes in an election, product inventories, state identifications, deeds to homes, and much more. 
                <br/>
                Currently, tens of thousands of projects are looking to implement blockchains in a variety of ways to help society other than just recording transactions—for example, as a way to vote securely in democratic elections. The nature of blockchain’s immutability means that fraudulent voting would become far more difficult to occur. For example, a voting system could work such that each citizen of a country would be issued a single cryptocurrency or token. Each candidate would then be given a specific wallet address, and the voters would send their token or crypto to the address of whichever candidate for whom they wish to vote. The transparent and traceable nature of blockchain would eliminate both the need for human vote counting and the ability of bad actors to tamper with physical ballots.
            </p>
        </div>
        </div>
    )
}

export default Homepage