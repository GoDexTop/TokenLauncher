let TokenContracts=
 { 
 	"Fix Token":[
    {
    	"name":"Fix Token",
    	"abi": '[ { "inputs": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint256", "name": "totalSupply", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "approver", "type": "address" } ], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" } ], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" } ], "name": "ERC20InvalidSpender", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" } ]', 
    	"bytecode":"608060405234801562000010575f80fd5b5060405162000b8b38038062000b8b83398101604081905262000033916200029d565b8282600362000043838262000397565b50600462000052828262000397565b5050506200006733826200007060201b60201c565b50505062000485565b6001600160a01b0382166200009f5760405163ec442f0560e01b81525f60048201526024015b60405180910390fd5b620000ac5f8383620000b0565b5050565b6001600160a01b038316620000de578060025f828254620000d291906200045f565b90915550620001509050565b6001600160a01b0383165f9081526020819052604090205481811015620001325760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640162000096565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166200016e576002805482900390556200018c565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001d291815260200190565b60405180910390a3505050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000203575f80fd5b81516001600160401b0380821115620002205762000220620001df565b604051601f8301601f19908116603f011681019082821181831017156200024b576200024b620001df565b8160405283815260209250868385880101111562000267575f80fd5b5f91505b838210156200028a57858201830151818301840152908201906200026b565b5f93810190920192909252949350505050565b5f805f60608486031215620002b0575f80fd5b83516001600160401b0380821115620002c7575f80fd5b620002d587838801620001f3565b94506020860151915080821115620002eb575f80fd5b50620002fa86828701620001f3565b925050604084015190509250925092565b600181811c908216806200032057607f821691505b6020821081036200033f57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111562000392575f81815260208120601f850160051c810160208610156200036d5750805b601f850160051c820191505b818110156200038e5782815560010162000379565b5050505b505050565b81516001600160401b03811115620003b357620003b3620001df565b620003cb81620003c484546200030b565b8462000345565b602080601f83116001811462000401575f8415620003e95750858301515b5f19600386901b1c1916600185901b1785556200038e565b5f85815260208120601f198616915b82811015620004315788860151825594840194600190910190840162000410565b50858210156200044f57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200047f57634e487b7160e01b5f52601160045260245ffd5b92915050565b6106f880620004935f395ff3fe608060405234801561000f575f80fd5b5060043610610090575f3560e01c8063313ce56711610063578063313ce567146100fa57806370a082311461010957806395d89b4114610131578063a9059cbb14610139578063dd62ed3e1461014c575f80fd5b806306fdde0314610094578063095ea7b3146100b257806318160ddd146100d557806323b872dd146100e7575b5f80fd5b61009c610184565b6040516100a99190610553565b60405180910390f35b6100c56100c03660046105b9565b610214565b60405190151581526020016100a9565b6002545b6040519081526020016100a9565b6100c56100f53660046105e1565b61022d565b604051601281526020016100a9565b6100d961011736600461061a565b6001600160a01b03165f9081526020819052604090205490565b61009c610250565b6100c56101473660046105b9565b61025f565b6100d961015a36600461063a565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6060600380546101939061066b565b80601f01602080910402602001604051908101604052809291908181526020018280546101bf9061066b565b801561020a5780601f106101e15761010080835404028352916020019161020a565b820191905f5260205f20905b8154815290600101906020018083116101ed57829003601f168201915b5050505050905090565b5f3361022181858561026c565b60019150505b92915050565b5f3361023a85828561027e565b6102458585856102fe565b506001949350505050565b6060600480546101939061066b565b5f336102218185856102fe565b610279838383600161035b565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f1981146102f857818110156102ea57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6102f884848484035f61035b565b50505050565b6001600160a01b03831661032757604051634b637e8f60e11b81525f60048201526024016102e1565b6001600160a01b0382166103505760405163ec442f0560e01b81525f60048201526024016102e1565b61027983838361042d565b6001600160a01b0384166103845760405163e602df0560e01b81525f60048201526024016102e1565b6001600160a01b0383166103ad57604051634a1406b160e11b81525f60048201526024016102e1565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156102f857826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161041f91815260200190565b60405180910390a350505050565b6001600160a01b038316610457578060025f82825461044c91906106a3565b909155506104c79050565b6001600160a01b0383165f90815260208190526040902054818110156104a95760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102e1565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166104e357600280548290039055610501565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161054691815260200190565b60405180910390a3505050565b5f6020808352835180828501525f5b8181101561057e57858101830151858201604001528201610562565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105b4575f80fd5b919050565b5f80604083850312156105ca575f80fd5b6105d38361059e565b946020939093013593505050565b5f805f606084860312156105f3575f80fd5b6105fc8461059e565b925061060a6020850161059e565b9150604084013590509250925092565b5f6020828403121561062a575f80fd5b6106338261059e565b9392505050565b5f806040838503121561064b575f80fd5b6106548361059e565b91506106626020840161059e565b90509250929050565b600181811c9082168061067f57607f821691505b60208210810361069d57634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561022757634e487b7160e01b5f52601160045260245ffdfea2646970667358221220483bc39fc3f4e8d14b83082878e2b5dbd7c2a432375e5161a434185e87c2d48e64736f6c63430008140033"

    }
    ]
    
 }




let deployedContractAddress;


async function deployContract() {
    try {
        // Get the ABI and bytecode from TokenContracts object
        const contractData = TokenContracts["Fix Token"][0];
        const abi = JSON.parse(contractData.abi);
        const bytecode = contractData.bytecode;

        // Get input values
        const name = document.getElementById("name").value;
        const symbol = document.getElementById("symbol").value;
        const totalSupplyInput = document.getElementById("totalSupply").value;
        const totalSupply = ethers.BigNumber.from(totalSupplyInput).mul(ethers.BigNumber.from("10").pow(18));

        // Check if Web3 provider is available
        if (typeof window.ethereum !== 'undefined') {
            // Create a new ethers provider from MetaMask
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Request access to MetaMask accounts
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Get deployer address
            const deployerAddress = accounts[0];

            // Get signer from Metamask provider
            const signer = provider.getSigner();

            // Deploy the contract
            const factory = new ethers.ContractFactory(abi, bytecode, signer);
            const contract = await factory.deploy(name, symbol, totalSupply);

            // Wait for the contract to be deployed
            await contract.deployed();

            // Create HTML elements for contract address and transaction hash
            const addressElement = document.createElement('p');
            const contractAddress = contract.address; // Get contract address from contract object
            addressElement.textContent = `Contract deployed at address: ${contractAddress}`;

            const hashElement = document.createElement('p');
            hashElement.textContent = `Transaction hash: ${contract.deployTransaction.hash}`;

            // Get the card element and append the HTML elements
            const card = document.querySelector('.card');
            card.appendChild(addressElement);
            card.appendChild(hashElement);

            // Call the function to display the verification link
            displayContractLink(contractAddress);
            
            deployedContractAddress = contractAddress;

            // Return the contract address
            return deployedContractAddress;
        } else {
            console.error("Metamask or other Web3 provider not detected.");
        }
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
}



// Function to display the verification link with styling
function displayContractLink(deployedContractAddress) {
    try {
        // Hide the loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';

        const link = document.createElement('a');
        link.href = `https://scan.dextop.pro/#/address/${deployedContractAddress}/`;
        link.textContent = 'VERIFY and PUBLISH';
        link.target = '_blank';

        // Apply inline styles to the link element
        link.style.backgroundColor = '#4CAF50'; // Green background
        link.style.color = 'black'; // Black text
        link.style.padding = '10px 20px'; // Padding
        link.style.borderRadius = '8px'; // Rounded corners
        link.style.textDecoration = 'none'; // Remove underline
        link.style.cursor = 'pointer'; // Cursor style
        link.style.marginTop = 'auto'; // Add margin to the top
        link.style.marginLeft = 'auto'; // Center horizontally
        link.style.marginRight = 'auto'; // Center horizontally
        link.style.display = 'block'; // Make link a block element for centering
        link.style.width = '50%'; // Limit width to 50%
        link.style.textAlign = 'center'; // Center text horizontally
       
        document.getElementById('linkContainer').appendChild(link);
    } catch (error) {
        console.error("Error displaying contract link:", error);
    }
}

// Add event listener for button click
const deployButton = document.getElementById('deployButton');
deployButton.addEventListener('click', async () => {
    try {
        // Show the loading spinner
        document.getElementById('loadingSpinner').style.display = 'block';
        
        // Call deployContract function
        await deployContract();
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
});










 

document.getElementById("linkContainer").addEventListener("click", async () => {
    // Get the contract address from the deployed contract
    const contractAddress = deployedContractAddress; // Use the global variable
    const flattenedCode = `// SPDX-License-Identifier: MIT


/***
 *    ░.......░░........░..░░░░..░........░░......░░.......░░
 *    ▒..▒▒▒▒..▒..▒▒▒▒▒▒▒▒..▒▒..▒▒▒▒▒..▒▒▒▒..▒▒▒▒..▒..▒▒▒▒..▒
 *    ▓..▓▓▓▓..▓......▓▓▓▓▓....▓▓▓▓▓▓..▓▓▓▓..▓▓▓▓..▓.......▓▓
 *    █..████..█..████████..██..█████..████..████..█..███████
 *    █.......██........█..████..████..█████......██..███████
 *    .......................................................
 */


//This token was deployed at DexTop.pro

// File: @openzeppelin/contracts/interfaces/draft-IERC6093.sol

// OpenZeppelin Contracts (last updated v5.0.0) (interfaces/draft-IERC6093.sol)
pragma solidity ^0.8.20;

/**
 * @dev Standard ERC20 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.
 */
interface IERC20Errors {
    /**
     * @dev Indicates an error related to the current balance of a sender. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     */
    error ERC20InsufficientBalance(
        address sender,
        uint256 balance,
        uint256 needed
    );

    /**
     * @dev Indicates a failure with the token sender. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */
    error ERC20InvalidSender(address sender);

    /**
     * @dev Indicates a failure with the token receiver. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */
    error ERC20InvalidReceiver(address receiver);

    /**
     * @dev Indicates a failure with the spenderâ€™s allowance. Used in transfers.
     * @param spender Address that may be allowed to operate on tokens without being their owner.
     * @param allowance Amount of tokens a spender is allowed to operate with.
     * @param needed Minimum amount required to perform a transfer.
     */
    error ERC20InsufficientAllowance(
        address spender,
        uint256 allowance,
        uint256 needed
    );

    /**
     * @dev Indicates a failure with the approver of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */
    error ERC20InvalidApprover(address approver);

    /**
     * @dev Indicates a failure with the spender to be approved. Used in approvals.
     * @param spender Address that may be allowed to operate on tokens without being their owner.
     */
    error ERC20InvalidSpender(address spender);
}

/**
 * @dev Standard ERC721 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.
 */
interface IERC721Errors {
    /**
     * @dev Indicates that an address can't be an owner. For example, address(0) is a forbidden owner in EIP-20.
     * Used in balance queries.
     * @param owner Address of the current owner of a token.
     */
    error ERC721InvalidOwner(address owner);

    /**
     * @dev Indicates a tokenId whose owner is the zero address.
     * @param tokenId Identifier number of a token.
     */
    error ERC721NonexistentToken(uint256 tokenId);

    /**
     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param tokenId Identifier number of a token.
     * @param owner Address of the current owner of a token.
     */
    error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner);

    /**
     * @dev Indicates a failure with the token sender. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */
    error ERC721InvalidSender(address sender);

    /**
     * @dev Indicates a failure with the token receiver. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */
    error ERC721InvalidReceiver(address receiver);

    /**
     * @dev Indicates a failure with the operatorâ€™s approval. Used in transfers.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     * @param tokenId Identifier number of a token.
     */
    error ERC721InsufficientApproval(address operator, uint256 tokenId);

    /**
     * @dev Indicates a failure with the approver of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */
    error ERC721InvalidApprover(address approver);

    /**
     * @dev Indicates a failure with the operator to be approved. Used in approvals.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     */
    error ERC721InvalidOperator(address operator);
}

/**
 * @dev Standard ERC1155 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.
 */
interface IERC1155Errors {
    /**
     * @dev Indicates an error related to the current balance of a sender. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     * @param tokenId Identifier number of a token.
     */
    error ERC1155InsufficientBalance(
        address sender,
        uint256 balance,
        uint256 needed,
        uint256 tokenId
    );

    /**
     * @dev Indicates a failure with the token sender. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */
    error ERC1155InvalidSender(address sender);

    /**
     * @dev Indicates a failure with the token receiver. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */
    error ERC1155InvalidReceiver(address receiver);

    /**
     * @dev Indicates a failure with the operatorâ€™s approval. Used in transfers.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     * @param owner Address of the current owner of a token.
     */
    error ERC1155MissingApprovalForAll(address operator, address owner);

    /**
     * @dev Indicates a failure with the approver of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */
    error ERC1155InvalidApprover(address approver);

    /**
     * @dev Indicates a failure with the operator to be approved. Used in approvals.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     */
    error ERC1155InvalidOperator(address operator);

    /**
     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.
     * Used in batch transfers.
     * @param idsLength Length of the array of token identifiers
     * @param valuesLength Length of the array of token amounts
     */
    error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength);
}

// File: @openzeppelin/contracts/utils/Context.sol

// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)

pragma solidity ^0.8.20;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _contextSuffixLength() internal view virtual returns (uint256) {
        return 0;
    }
}

// File: @openzeppelin/contracts/token/ERC20/IERC20.sol

// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.20;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when value tokens are moved from one account (from) to
     * another (to).
     *
     * Note that value may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a spender for an owner is set by
     * a call to {approve}. value is the new allowance.
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    /**
     * @dev Returns the value of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the value of tokens owned by account.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves a value amount of tokens from the caller's account to to.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 value) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that spender will be
     * allowed to spend on behalf of owner through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    /**
     * @dev Sets a value amount of tokens as the allowance of spender over the
     * caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 value) external returns (bool);

    /**
     * @dev Moves a value amount of tokens from from to to using the
     * allowance mechanism. value is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

// File: @openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol

// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/extensions/IERC20Metadata.sol)

pragma solidity ^0.8.20;

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

// File: @openzeppelin/contracts/token/ERC20/ERC20.sol

// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * The default value of {decimals} is 18. To change this, you should override
 * this function so it returns a different value.
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning false on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 */
abstract contract ERC20 is Context, IERC20, IERC20Metadata, IERC20Errors {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if decimals equals 2, a balance of 505 tokens should
     * be displayed to a user as 5.05 (505 / 10 ** 2).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the default value returned by this function, unless
     * it's overridden.
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - to cannot be the zero address.
     * - the caller must have a balance of at least value.
     */
    function transfer(address to, uint256 value) public virtual returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, value);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender)
        public
        view
        virtual
        returns (uint256)
    {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If value is the maximum uint256, the allowance is not updated on
     * transferFrom. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - spender cannot be the zero address.
     */
    function approve(address spender, uint256 value)
        public
        virtual
        returns (bool)
    {
        address owner = _msgSender();
        _approve(owner, spender, value);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum uint256.
     *
     * Requirements:
     *
     * - from and to cannot be the zero address.
     * - from must have a balance of at least value.
     * - the caller must have allowance for from's tokens of at least
     * value.
     */
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) public virtual returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, value);
        _transfer(from, to, value);
        return true;
    }

    /**
     * @dev Moves a value amount of tokens from from to to.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * NOTE: This function is not virtual, {_update} should be overridden instead.
     */
    function _transfer(
        address from,
        address to,
        uint256 value
    ) internal {
        if (from == address(0)) {
            revert ERC20InvalidSender(address(0));
        }
        if (to == address(0)) {
            revert ERC20InvalidReceiver(address(0));
        }
        _update(from, to, value);
    }

    /**
     * @dev Transfers a value amount of tokens from from to to, or alternatively mints (or burns) if from
     * (or to) is the zero address. All customizations to transfers, mints, and burns should be done by overriding
     * this function.
     *
     * Emits a {Transfer} event.
     */
    function _update(
        address from,
        address to,
        uint256 value
    ) internal virtual {
        if (from == address(0)) {
            // Overflow check required: The rest of the code assumes that totalSupply never overflows
            _totalSupply += value;
        } else {
            uint256 fromBalance = _balances[from];
            if (fromBalance < value) {
                revert ERC20InsufficientBalance(from, fromBalance, value);
            }
            unchecked {
                // Overflow not possible: value <= fromBalance <= totalSupply.
                _balances[from] = fromBalance - value;
            }
        }

        if (to == address(0)) {
            unchecked {
                // Overflow not possible: value <= totalSupply or value <= fromBalance <= totalSupply.
                _totalSupply -= value;
            }
        } else {
            unchecked {
                // Overflow not possible: balance + value is at most totalSupply, which we know fits into a uint256.
                _balances[to] += value;
            }
        }

        emit Transfer(from, to, value);
    }

    /**
     * @dev Creates a value amount of tokens and assigns them to account, by transferring it from address(0).
     * Relies on the _update mechanism
     *
     * Emits a {Transfer} event with from set to the zero address.
     *
     * NOTE: This function is not virtual, {_update} should be overridden instead.
     */
    function _mint(address account, uint256 value) internal {
        if (account == address(0)) {
            revert ERC20InvalidReceiver(address(0));
        }
        _update(address(0), account, value);
    }

    /**
     * @dev Destroys a value amount of tokens from account, lowering the total supply.
     * Relies on the _update mechanism.
     *
     * Emits a {Transfer} event with to set to the zero address.
     *
     * NOTE: This function is not virtual, {_update} should be overridden instead
     */
    function _burn(address account, uint256 value) internal {
        if (account == address(0)) {
            revert ERC20InvalidSender(address(0));
        }
        _update(account, address(0), value);
    }

    /**
     * @dev Sets value as the allowance of spender over the owner s tokens.
     *
     * This internal function is equivalent to approve, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - owner cannot be the zero address.
     * - spender cannot be the zero address.
     *
     * Overrides to this logic should be done to the variant with an additional bool emitEvent argument.
     */
    function _approve(
        address owner,
        address spender,
        uint256 value
    ) internal {
        _approve(owner, spender, value, true);
    }

    /**
     * @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.
     *
     * By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by
     * _spendAllowance during the transferFrom operation set the flag to false. This saves gas by not emitting any
     * Approval event during transferFrom operations.
     *
     * Anyone who wishes to continue emitting Approval events on thetransferFrom operation can force the flag to
     * true using the following override:
     *
     * function _approve(address owner, address spender, uint256 value, bool) internal virtual override {
     *     super._approve(owner, spender, value, true);
     * }
     *
     *
     * Requirements are the same as {_approve}.
     */
    function _approve(
        address owner,
        address spender,
        uint256 value,
        bool emitEvent
    ) internal virtual {
        if (owner == address(0)) {
            revert ERC20InvalidApprover(address(0));
        }
        if (spender == address(0)) {
            revert ERC20InvalidSpender(address(0));
        }
        _allowances[owner][spender] = value;
        if (emitEvent) {
            emit Approval(owner, spender, value);
        }
    }

    /**
     * @dev Updates owner s allowance for spender based on spent value.
     *
     * Does not update the allowance value in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Does not emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 value
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            if (currentAllowance < value) {
                revert ERC20InsufficientAllowance(
                    spender,
                    currentAllowance,
                    value
                );
            }
            unchecked {
                _approve(owner, spender, currentAllowance - value, false);
            }
        }
    }
}

// File: tokescreator.sol

pragma solidity ^0.8.20;

contract DexTopToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, totalSupply);
    }
}
`; 
    await verifyContractWithFlattenedCode(contractAddress, flattenedCode);
});

    

async function verifyContractWithFlattenedCode(contractAddress, flattenedCode) {
    try {
        const url = `https://api.scan.pulsechain.com/api/v2/smart-contracts/${contractAddress}/verification/via/flattened-code`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                autodetect_constructor_args: false,
                compiler_version: "v0.8.20+commit.a1b79de6",
                constructor_args: "",
                evm_version: "default",
                is_optimization_enabled: true,
                is_yul_contract: false,
                optimization_runs: 200,
                source_code: flattenedCode
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Contract verification successful!");
            console.log("Result:", data);
        } else {
            console.error("Contract verification failed:", data);
        }
    } catch (error) {
        console.error("Error verifying contract:", error);
    }
}


    