"use client"; // This is a client component

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<string, FaqItem[]> = {
  "DeFi Users": [
    {
      question:
        "There are a number of collateral types listed when minting $CDT, how are new collateral types added?",
      answer: "New collateral types are added via community Governance.",
    },
    {
      question:
        "When making an Asset Bundle, is there a limit to how many collateral types i can add?",
      answer:
        "No, as long as the assets have been listed by governance and the amount you wish to add is below the asset supply cap, they can be added.",
    },
    {
      question: "How are Asset Bundle parameters calculated?",
      answer:
        "Parameters are taken from collateral assets individually and then used proportionally to calculate a bundle's parameters. Ex: If you have 2 assets at 50%, one with a 50% max LTV & one with a 60% max LTV, your vault's max LTV will be 55%.",
    },
    {
      question: "How do supply/debt caps affect my position?",
      answer:
        "Caps are used to calculate interest rates, if the cap is broken the rates will increase multiplicatively. Withdrawals aren't blocked by supply cap increases but deposits that cause overages will be.",
    },
    {
      question:
        "If collateral value drops, how do liquidations of collateral within the bundle work to ensure full backing of the peg?",
      answer:
        "Collateral within bundles is liquidated at its proportion of the bundle, eg, 10% USDC 90% $OSMO bundle will use 10% $USDC & 90% $OSMO in liquidations to recapitalize. If the value of just one collateral type cascades, the unaffected collateral type plays an increasing role in each subsequent liquidation.",
    },
    {
      question: "Do the liquidation pools have lockup periods?",
      answer:
        "The single asset pools don't, the omni-asset pool has a 1 day unstaking period.",
    },
    {
      question: "Do I need to activate my liquidation bids?",
      answer: "No.",
    },
    {
      question:
        "What is the flow of liquidated assets since there are 2 different pool types?",
      answer:
        "The single asset pools is the first filter, getting first dibs on all assets, while the omni-asset pool gets the remaining based on premium & available TVL of the inital filter.",
    },
    {
      question: "Are both pools first in first out (FIFO)?",
      answer:
        "Only the omni-asset pool is FIFO, so being first is valuable. The single asset pools are pro-rata so the liquidated assets are distributed based on your share of the pool.",
    },
    {
      question: "Does every collateral asset have a single asset pool?",
      answer: "Yes.",
    },
  ],
  "MBRN Holders": [
    {
      question: "What is the inspiration for creating the project?",
      answer:
        "We were a part of Terra's community and believe crypto doesn't exist as alternate rails without uncensorable money and good UX. Crypto will onboard the world with or without decentralized stables but without makes it solely an extension of nation-state systems. Decentralized money is the foundation the space was built upon and there is a dormant fervor waiting to explore this new avenue.",
    },
    {
      question: "What is the team's plan to improve the front-end?",
      answer:
        "Make it intuitive with reduced assumptions & make it more stylish with input from various community members. We can also use site recordings and click heatmaps to see where users are getting stuck & what they're trying to use to iterate over time.",
    },
    {
      question:
        "Does the Membrane Protocol accrue revenues? What is it used for?",
      answer:
        "Yes, via loan interest rates on $CDT borrows and collateral liquidation fees. Protocol revenues can be utilized according to community governance voting (e.g. returned to stakers, used to grow POL, used to fund growth).",
    },
    {
      question: "How big is the market opportunity for a product like $CDT?",
      answer:
        "Its market is two-sided. The stablecoin market is the largest capital market in crypto outside of the winning layer 1 monies (BTC & ETH). Probably ~10% of the total crypto market, which if it grows could be 100s of trillions in size, thus 10T+ to stablecoins. My prediction is that decentralized stablecoins will hit an inflection point of adoption and overtake centralized fiat-backed stables, therefore being the top players in the stablecoin market. On the other hand, we have the market for credit and margin whose demand will bootstrap $CDT supply during the bull market. Exact market size I'm unsure of, but also many billions of dollars and could grow to be much higher.",
    },
    {
      question:
        "What are the initial niche or wedge markets where we hope to see $CDT traction start to grow?",
      answer:
        "DeFi users who'd prefer to use decentralized stable coins within their dApps versus $USDC. Osmosis LP collateralization - there are LPers who won't want to bond for incentives or expose themselves to CL vaults, making $CDT a great option boosted yield option. Experimental DeFi users who want to discover the best collateral bundle to collateralize with.",
    },
    {
      question:
        "Can $CDT be successful in a world increasingly dominated by fiat-backed stable coins?",
      answer:
        "Yes, as a decentralized stable, its value prop will be made apparent anytime there are fiat-based insolvencies or censorship activities. Since both of those occurrences are inevitable, its only a matter of time before fiat-backed stables aren't seen as the best option. In the meantime, its dual use as credit will enable its own flow of capital uncorrelated to fiat-backed demand.",
    },
    {
      question:
        "How many decentralized stable coins are likely to be successful 10 years from now? Why?",
      answer:
        "Depends on what successful means. There will be many used by DeFi powerhouses as a way to increase revenue, but the main stables will be 3-9. There is only so much of a design space for stablecoins and I expect 1-3 to be useful in each. This leaves 1-3 decentralized stables since 2-6 will have centralized and/or censorable edge cases.",
    },
    {
      question:
        "How is the bundled model of creating collateral for a decentralized stable coin superior to other models?",
      answer:
        "It allows liquidations to be spread across collateral types instead of each liquidation only converting a single asset type. This means the market of each collateral asset will be pressured less from $CDT liquidations in a bearish environment. It also enables users to collateralize their whole portfolio & therefore get the benefits of assumingly diversified volatility profiles. Lastly, it enables users to recapitalize their position with any available collateral types rather than just the initial deposit.",
    },
    {
      question: "How is $CDT differentiated from MakerDAO $DAI & Agoric $IST?",
      answer:
        "The primary difference is the lack of a PSM, which allows for 1:1 swaps with fiat-backed tokens. This is great to keep the peg fixed (a hard peg) by having an instantaneous arb cycle. The problem with this is that it pegs the stable to the PSM's accepted assets instead of to the desired USD denomination. When USDC depegs, so does DAI & IST. The liquidation pools are another major differentiation by making liquidated collateral available to the entire market instead of just the user who calls the liquidation. This allows a wider distribution of assets, in turn decreasing the effect of $CDT liquidations on the market. This and liquidation diversity from bundles make $CDT a friend to market stability during a bearish cycle.",
    },
    {
      question: "How is the project differentiated from $USK?",
      answer:
        "Aside from bundles, a major difference is the usage of fiat-backed collateral. This allows $CDT to scale faster and keep a tighter peg. Membrane's singular focus on stablecoins also allows it to build a community with specialized knowledge, ripe for stewarding the protocol's future.",
    },
    {
      question:
        "We understand this is a new regulatory area, but, can you anticipate how regulators might react to a decentralized stable coin project with a product architecture such as $CDT?",
      answer:
        "There is potential that a floating peg requires less/softer pressure because it is liquidating all assets and it isn't merely a $USDC wrapper. If $DAI risks are at best the same as $USDC, many regulators may ask why DAI risk is necessary, compared to $CDT, which is actively derisking its fiat-backed collateral types.",
    },
  ],
  "DeFi Builders": [
    {
      question: "What is the project roadmap for the next 6 months?",
      answer:
        "Frontend improvements on the way to contract upgrades. Adding new collateral types. Integrations with other protocols.",
    },
    {
      question:
        "Conceivably, could the $MBRN community approve gov proposals to fund community contributor roles such as development, marketing, and BD?",
      answer:
        "Yes, but we expect them to start slowly by delegating staking rewards to contributors instead of playing lump sum guessing games.",
    },
    {
      question:
        "Hypothetically, could the $MBRN community create a Juno style charter and on-chain project organization model to drive the project?",
      answer:
        "Yes but it may not be necessary. We see most of the organization hassle stemming from non-protocol contributions and general education/content. Delegations should become common enough to attract new developers.",
    },
    {
      question:
        "Who are the natural partners who would be best-suited to become early users of $CDT?",
      answer:
        "Digital asset markets to create LPs using $CDT. DeFi Apps that need to have a primary stable coin within the dApp.",
    },
    {
      question:
        "Could the $MBRN community approve gov proposals to pay incentives to partners for integrating $CDT?",
      answer:
        "Yes, but will need more tech to do so without multi-sigs outside of Osmosis. While we think this is a worthwhile gesture in time, Osmosis DEX has enough users to build a foundation on and that is the immediate focus before spreading elsewhere. If DeFi builders want to present a proposal to $MBRN community that integrates $CDT into their dApp, whether or not $MBRN incentives will be awarded really depends on long-term alignment and the plan to prevent dumps into the market.",
    },
    {
      question:
        "If the Membrane project is successful, where will it be in 12 to 24 months?",
      answer:
        "$CDT will be a de-facto medium of exchange and stable store of value in the IBC-connected Cosmos, while the value faucets in the protocol (delegations, LPs, redemptions) will have attracted a network of aligned participants. The POL generated from liquidations will continue to build a long term bed of liquidity for $CDT. Majority of content creation will come from the community as a way to narrate ongoing history & attract new members.",
    },
    {
      question:
        "How does $CDT's regenerative approach to recovering peg work & how is this differentiated from other decentralized stable coin designs?",
      answer:
        "For a user, leverage is a high-risk, high-reward endeavor that leaks risk to the wider market. In a bullish environment, the more levered the overall market, the harder it'll crash on an inevitable downturn. As a cog in the leverage machine, it's Membrane's responsibility to reduce the overall effect its deleveraging has on the ecosystem overall. Deleveraging is destruction that must be reintegrated into the environment to act as nutrients in the next phase of the cycle. The usual method is having a single liquidator's preference determine the outcome for the liquidated collateral, typically selling via DEX. This not only centralizes the discount from said collateral but also lubricates the mountains for a liquidation cascade, which can snowball and liquidate everything in its path. Membrane's liquidation dispersion method is 2-fold. Initially because positions can hold multiple collateral types, each liquidation is more likely to liquidate multiple assets instead of having to recapitalize 100% of the debt from a single market. Next, these assets go through liquidation pools so that each is distributed to every bidder in a pool, which if empty will go to a secondary pool that is FIFO to encourage competitive refills. Distributing to more people means there will be more collateral that doesn't get sold right away (instead it is staked, LP'd, held) which will (1) Give the market temporary strength, and (2) Allow long term holders to obtain assets at discounted prices. Overall, this makes $CDT liquidations a redistribution method from high-risk to lower risk which in turn strengthens the foundation of each collateral's market distribution.",
    },
  ],
};
