const walletData = [
  {
    name: "Keystone",
    image_name: "keystone",
    brand_color: "#ffffff",
    url: "https://keyst.one/",
    wallet_live_date: "Dec 2018",
    active_development_team: "Yes",
    languages_supported: ["en", "zh", "es", "ko"],
    twitter: "https://twitter.com/KeystoneWallet",
    discord: "https://keyst.one/discord",
    telegram: "https://t.me/KeystoneWallet",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: true,
    open_source: true,
    repo_url: "https://github.com/KeystoneHQ",
    non_custodial: true,
    security_audit: [
      "https://github.com/KeystoneHQ/Keystone-developer-hub/tree/main/audit-report",
      "https://keyst.one/bug-bounty-program",
    ],
    spam_protection: false,
    hardware_support: true,
    walletconnect: false,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: false,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: true,
    erc_20_support: false,
    eip_1559_support: true,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    dedicated_support: true,
    onboard_documentation: "https://support.keyst.one/",
    documentation: "",
  },
  {
    name: "Numio",
    image_name: "numio",
    brand_color: "#3F3F3F",
    url: "https://www.numio.one/",
    wallet_live_date: "December 2020",
    active_development_team: "Yes",
    languages_supported: ["en"],
    twitter: "https://twitter.com/GetNumio/",
    discord: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [],
    spam_protection: false,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: false,
    erc_20_support: false,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    dedicated_support: true,
    onboard_documentation: "https://docs.numio.one/",
    documentation: "",
  },
  {
    name: "Coin98",
    image_name: "coin98",
    brand_color: "#ffffff",
    url: "https://coin98.com/wallet",
    wallet_live_date: "2018",
    active_development_team: "Yes",
    languages_supported: [
      "vi",
      "en",
      "zh",
      "jp",
      "ko",
      "tr",
      "th",
      "es",
      "id",
      "el",
      "pt",
      "fr",
    ],
    twitter: "https://twitter.com/coin98_wallet",
    discord: "https://c98.link/discord",
    telegram: "https://t.me/coin98wallet",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: true,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: ["https://coin98.com/audit"],
    spam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    dedicated_support: true,
    onboard_documentation: "https://docs.coin98.com/",
    documentation: "",
  },
  {
    name: "Loopring wallet",
    image_name: "loopring",
    brand_color: "#ffffff",
    url: "https://loopring.io/#/wallet",
    wallet_live_date: "Nov 25, 2020",
    active_development_team: "Yes",
    languages_supported: ["en", "zh"],
    twitter: "https://twitter.com/loopringorg",
    discord: "http://discord.gg/KkYccYp",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [
      "https://solidified.io/work/loopring/",
      "https://github.com/Loopring/protocols/blob/master/packages/hebao_v1/audit_report_solidified_response.md",
      "https://github.com/Loopring/protocols/tree/release_loopring_3.6.3/packages/loopring_v3/security_audit",
    ],
    spam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: false,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: true,
    dedicated_support: true,
    onboard_documentation: "",
    documentation: "",
  },
  {
    name: "AirGap wallet",
    image_name: "airgap",
    brand_color: "#50249F",
    url: "https://airgap.it/",
    wallet_live_date: "July 2017",
    active_development_team: "Yes",
    languages_supported: ["en", "de", "zh"],
    twitter: "https://twitter.com/AirGap_it/",
    discord: "https://discord.gg/gnWqCQsteh",
    telegram: "https://t.me/AirGap",
    ios: true,
    android: true,
    linux: true,
    windows: true,
    macOS: true,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/airgap-it/airgap-wallet",
    non_custodial: true,
    security_audit: [
      "https://github.com/airgap-it/airgap-coin-lib/tree/master/docs/audits",
    ],
    spam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: false,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: false,
    erc_20_support: false,
    eip_1559_support: false,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: true,
    dedicated_support: true,
    onboard_documentation: "https://support.airgap.it/",
    documentation: "",
  },
  {
    name: "Argent",
    image_name: "argent",
    brand_color: "#ffffff",
    url: "https://www.argent.xyz/",
    wallet_live_date: "2018",
    active_development_team: "Yes",
    languages_supported: ["en"],
    twitter: "https://twitter.com/argenthq",
    discord: "https://discord.com/invite/GWSyrHg",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [
      "https://github.com/argentlabs/argent-contracts/tree/develop/audit",
      "https://www.argent.xyz/argent-bug-bounty/",
    ],
    spam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: true,
    social_recovery: true,
    dedicated_support: true,
    onboard_documentation: "https://www.argent.xyz/learn/",
    documentation: "",
  },
  {
    name: "Portis",
    image_name: "portis",
    brand_color: "#ffffff",
    url: "https://portis.io",
    wallet_live_date: "Nov, 2018",
    active_development_team: "Yes",
    languages_supported: ["en"],
    twitter: "https://twitter.com/portis_io",
    discord: "",
    telegram: "https://t.me/PortisHQ",
    ios: false,
    android: false,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [],
    spam_protection: false,
    hardware_support: false,
    walletconnect: false,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: false,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: false,
    erc_20_support: true,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    dedicated_support: true,
    onboard_documentation: "https://docs.portis.io/",
    documentation: "",
  },
  {
    name: "MetaMask",
    image_name: "metamask",
    brand_color: "#ffffff",
    url: "https://metamask.io",
    wallet_live_date: "2016",
    active_development_team: "Yes",
    languages_supported: ["TODO: 30 languages!"],
    twitter: "https://twitter.com/metamask",
    discord: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: true,
    chromium: true,
    hardware: false,
    open_source: false,
    repo_url: "https://github.com/MetaMask",
    non_custodial: true,
    security_audit: [],
    spam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    dedicated_support: true,
    onboard_documentation: "https://support.metamask.io",
    documentation: "",
  },
]

export default walletData