
App = {
    init: () => {
        console.log('loaded')
        App.loadEthereum()
        App.loadContracts()
    },

    loadEthereum: async () => {
        if (window.ethereum) {
            App.web3Provider = window.ethereum
            await window.ethereum.request({method: 'eth_requestAccounts'})
        } else {
            console.log('no metamask installed')
        }
    },

    loadContracts: async () => {
        const res = await fetch("TasksContract.json")
        const TasksContract = await res.json()
        console.log(TasksContract)
    }
}

App.init()