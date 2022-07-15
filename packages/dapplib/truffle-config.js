require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remind concert grace lonely bone thumb'; 
let testAccounts = [
"0x924ec2a263b5935395d88a6bd7ffd7ff30037090ce1f9e657f203e1263f8343f",
"0xb3e8e567ad6edc74999223b1ed8ec638b5a6e041f36f03a26b51b17e6a5fc405",
"0x41575070df8cd2480044d190be6dfaee9a041539db7490a45fc837aa0b1d2c92",
"0xa48f273e475a1afcb518bcb5c987cd7ca30f97cfc5eb418bb64ef0febd8fbab5",
"0x9b3a0f174db0d26e2e516f7f679aa4794d594d4c97fdab2729617ee53bd97336",
"0xd7c845ea17530a21567ba8ddc36ffeb7715452997fd8981e5b1212764f7501ed",
"0xdfdc6571a5d1d5d6cc3c23f905cd9310df5b045c8dd51b47e7ce9c8cecb6e80a",
"0xd577b179aaff8b8ff02bb6ddfa6c33062d79beeecea8decea2b0f30daa9ef17e",
"0xbbf9d7fea77b92e1ad45c1d3e9a9de57af814c8bc6b1014d6fb58b831d2f1178",
"0x56ea6aa03e4f63dc1fb56b1ad5ebc8cd9fff05da8f8dc4c4c8b3af594e3e50c7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


