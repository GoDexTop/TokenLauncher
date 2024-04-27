const provider = new ethers.providers.Web3Provider(window.ethereum);

// Function to launch the contract
async function launch(contractAddress) {
    try {
        // Show loading spinner
        document.getElementById('loadingSpinner').style.display = 'block';

        const abi = [
            {
                "anonymous": false,
                "inputs": [],
                "name": "launch",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]; // You need to provide the ABI here
        const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());

        // Call the 'launch' function
        const tx = await contract.launch();

        // Wait for transaction to be mined
        await tx.wait();

        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';

        console.log('Contract launched successfully!');
    } catch (error) {
        // Hide loading spinner in case of error
        document.getElementById('loadingSpinner').style.display = 'none';

        console.error('Error launching contract:', error);
    }
}

// Function to call the setPair function
async function setPair(contractAddress, pairAddress, value) {
    try {
        // Show loading spinner
        document.getElementById('loadingSpinner').style.display = 'block';

        const abi = [
            {
		"inputs": [
			{
				"internalType": "address",
				"name": "pair",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "setPair",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
        ]; // You need to provide the ABI here
        const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());

        // Call the 'setPair' function
        const tx = await contract.setPair(pairAddress, value);

        // Wait for transaction to be mined
        await tx.wait();

        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';

        console.log('Pair set successfully!');
    } catch (error) {
        // Hide loading spinner in case of error
        document.getElementById('loadingSpinner').style.display = 'none';

        console.error('Error setting pair:', error);
    }
}

// Event listener for DOMContentLoaded
window.addEventListener('DOMContentLoaded', async () => {
    // Function to connect to MetaMask
    async function connectToMetaMask() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request access to MetaMask accounts
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Show launch button
                document.getElementById('launchButton').style.display = 'block';
                console.log('Connected to MetaMask successfully!');
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            console.error('MetaMask is not installed.');
        }
    }

    // Add event listener to connect button
    const connectButton = document.getElementById('connectButton');
    if (connectButton) {
        connectButton.addEventListener('click', connectToMetaMask);
    } else {
        console.error('Could not find connectButton element.');
    }

    // Add event listener to launch button
    const launchButton = document.getElementById('launchButton');
    if (launchButton) {
        launchButton.addEventListener('click', async () => {
            // Get contract address from input field
            const contractAddress = document.getElementById('contractAddressInput').value;

            // Call launch function with the provided contract address
            await launch(contractAddress);
        });
    } else {
        console.error('Could not find launchButton element.');
    }

    // Add event listener to setPair button
    const setPairButton = document.getElementById('setPairButton');
    if (setPairButton) {
        setPairButton.addEventListener('click', async () => {
            // Get pair address and value from input fields
            const pairAddress = document.getElementById('pairAddressInput').value;
            const valueSelect = document.getElementById('valueSelect');
            const value = valueSelect.options[valueSelect.selectedIndex].value;

            // Get contract address from input field
            const contractAddress = document.getElementById('contractAddressInput').value;

            // Call setPair function with the provided contract address, pair address, and value
            await setPair(contractAddress, pairAddress, value);
        });
    } else {
        console.error('Could not find setPairButton element.');
    }
});
