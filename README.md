# Humanity Testnet Auto-Claimer

An automation bot for claiming THP tokens and rewards on the Humanity Protocol testnet.

### Features
- Automatic THP claiming from faucet
- Automatic reward collection
- Bridge operation execution when conditions are met
- Support for multiple wallets
- Beautiful colored console output
- Automatic retry mechanism
- Error handling and recovery
- Accurate countdown timer

---

## Environment Setup
Ensure Node.js and npm are installed on your system.

## Usage Instructions
First, clone the project repository to your local machine:

```bash
git clone https://github.com/rmndkyl/humanity-auto.git
cd humanity-auto
```

### Install Dependencies
Execute the following command in the project directory to install required dependencies:
```bash
npm install
```

### Configuration

private_keys.txt: Write the private keys of the accounts that need to claim rewards in the private_keys.txt file, one private key per line. For example:

```bash
PRIVATE_KEY_1
PRIVATE_KEY_2
```

### Start the Project
Run the following command in the project root directory to start the automatic reward claiming program:
```bash
node main.js
```

The program will execute the following process:

1. Connect to the blockchain node and check connection status
2. Iterate through each private key address in private_keys.txt and check reward claim status
3. If claiming conditions are met, the program will automatically execute the claim transaction
4. After each claim, there will be a 1-second delay to prevent network congestion from frequent operations

## ☕️ Traktir kopinya & Thanks for Supporting us:

- https://sociabuzz.com/layerairdrop/tribe
- https://saweria.co/LayerAirdrop
- https://trakteer.id/layerairdrop/tip
- **EVM : `0x3E0BD1156172c03E497157838f218CDF77Ab2885`**
- **SOLANA : `4DMvckFnSrm7fymVaPrXULrCq4h1yvfTWq5aHXLpLKsn`**