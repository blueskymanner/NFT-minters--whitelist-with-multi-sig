import Box from "../../components/common/Box";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
import Text from "../../components/common/Text";

import React, { useContext, useEffect, useState } from "react";
import Web3 from 'web3';

import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/wallet/connectors";
import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/contracts';
// import { userInfo } from "os";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Hearts } from  'react-loader-spinner';
import axios from 'axios';





let web3, _depoAddress;

interface Param {
    user: string;
    tokenId: number;
    signature: string;
}
const Mint = () => {

    const { active, account, library, chainId, connector, activate, deactivate } = useWeb3React();
    const [mintAmount, setMintAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    let data: Param[] = [];

    useEffect(() => {
        (async () => {
            if (account && chainId && library) {
                web3 = new Web3(library.provider);
            }
        })();
    }, [chainId, library, account])

    function connect() {
        activate(injected, async (error) => {
            console.log(error);
        });
    }

    async function disconnect() {
        try {
            deactivate();
            setLoading(false);
        } catch (ex) {
            console.log(ex)
        }
    }

    async function mint() {
        
        if(mintAmount > 10)
        {
            alert("Max amount over.");
            return;
        }

        if (account && chainId && library) {

            setLoading(true);
            const response = await axios.post(`https://localhost:80/api`, {account});   
            // const response = await axios.post(`https://143.244.183.96:5000/api`, {account});
            // const response = await axios.post(`https://localhost:5000/api`, {account});
            let signature = response.data.message;
            signature = '0x' + signature;

            let metadata1 = CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][4]?.abi;
            let addr1 = CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][4]?.address;


            web3 = new Web3(library.provider);

            let sporeWeb3 = new web3.eth.Contract(metadata1, addr1);

            let position = await sporeWeb3.methods.minted().call();

            try
            {
                let mint_result = await sporeWeb3.methods.mintForOnlyWhitelistUsers(account, mintAmount, signature).send({from: account, value:100000000000000000});
            }
            catch(err)
            {
                console.log(err);
            }

            

            setLoading(false);
        }

        setLoading(false);

    }

    function setAmount(val: string) {
        setMintAmount(Number(val));
    }


    return (
        <Box cssClasses={["section-pad-top", "bg-dark1"]}>
            <Flex
                cssClasses={["container"]}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <h1>Mint</h1>
                <p className="mt-1 text-center">
                    Our collection of unique NFTs that can be bought and sold on our
                    marketplace..
                </p>
                <Box cssClasses={["mt-4", "pt-4"]}>
                    {/* <Button secondary text="Connect Wallet!" /> */}
                    {active ?
                        <Button secondary text={`${account}`} onClick={disconnect} />
                        :
                        <Button secondary text="Connect Wallet" onClick={connect} />
                    }
                </Box>
                {active && !loading &&
                    <div className="mint-container">
                        Amount : &nbsp;<Text cssClasses={["secondary-txt rounded-pill"]} onChange={setAmount} propVal={mintAmount} />  
                        <Button tertiary text="Mint" onClick={mint} />
                    </div>
                }

                {active && loading &&
                    <div className="mint-container">
                        <Hearts color="#00BFFF" height={80} width={80} />
                    </div>
                }


                {!active &&
                    <div className="mint-container"></div>
                }

            </Flex>
        </Box>
    );
};

export default Mint;
