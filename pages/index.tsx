"use client"; // This is a client component

import React from "react";


export default function Home(){
  const [FAQ, setFAQ] = React.useState("Users");

  const reserveClick = () => {
    window.scrollTo(0, 1000);
  }
  const visionClick = () => {
    window.scrollTo(0, 2000);
  }
  const dappClick = () => {
    window.scrollTo(0, 2830);
  }
  const protoClick = () => {
    window.scrollTo(0, 3300);
  }
  const oppoClick = () => {
    window.scrollTo(0, 4050);
  }
  const faqClick = () => {
    window.scrollTo(0, 5100);
  }

  return (
    <div className="option">
      
      <header className="header">
        <div className="content-wrapper">
          <div className="content-2">
            <img className="logo-block" alt="Logo block" src="/img/logo-block.svg" />
            <div className="links-actions">
              <div className="links">
                <a className="button-instance" onClick={reserveClick}> DeFi Reserve </a>
                <a className="button-instance" onClick={visionClick}> The Vision </a>
                <a className="button-instance" onClick={dappClick}> dApp Walk-thru </a>                
                <a className="button-instance" onClick={protoClick}> Protocol Advantages </a>
                <a className="button-instance" onClick={oppoClick}> Opportunity </a>
                <a className="button-instance" onClick={faqClick}> FAQs </a>
              </div>
              <div className="actions">
                <img className="button-2" alt="Button" src="/img/button.svg" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="overlap-7">
      <div className="overlap-9" style={{top: "-399px", left: "167px"}}>
            <div className="hero">
              <div className="overlap-group-4">
                <img className="istock-2" alt="Istock" src="/img/istock-1463401580-2-2.png" />
                <div className="rectangle-7" />
              </div>
            </div>
            <div className="text-2">
              <div className="heading-overline-4">
                <div className="overline-4">INTRODUCING</div>
                <div className="heading-8">The Membrane.</div>
              </div>
              <div className="frame-9">
                <div className="ellipse-wrapper">
                  <div className="ellipse-11" />
                </div>
                <p className="supporting-text-6">
                  It&#39;s foundational protocol, a stablecoin called $CDT, is designed to serve the needs of the
                  Interchain community.
                </p>
              </div>
              <div className="frame-10">
                <div className="ellipse-11" />
                <div className="supporting-text-7">Dynamically homeostatic. Resilient. Decentralized.</div>
              </div>
              <div className="frame-9">
                <div className="ellipse-wrapper">
                  <div className="ellipse-11" />
                </div>
                <p className="supporting-text-6">Symbiotic with connected digital economies.</p>
              </div>
            </div>
              <div className="overlap-9">
                  <div className="overlap-group-5">
                    <div className="ellipse-12" />
                    <img className="ellipse-13" alt="Ellipse" src="/img/ellipse-18.svg" />
                    <img className="ellipse-14" alt="Ellipse" src="/img/ellipse-19.svg" />
                  </div>
                <div className="main-sphere">
                  <div className="overlap-10">
                    <div className="ellipse-15" />
                    <img className="frame-11" alt="Frame" src="/img/Main Sphere (1).png" />
                  </div>
                </div>
                <div className="ellipse-16" />
                <div className="ellipse-17" />
                <div className="ellipse-18" />
                <div className="ellipse-19" />
                <div className="ellipse-20" />
                <div className="ellipse-21" />
                <div className="ellipse-22" />
                <div className="ellipse-23" />
                <div className="ellipse-24" />
                <div className="ellipse-25" />
                <div className="ellipse-26" />
              </div>
          </div>
      </div>
        <div className="CDT">
          <div className="overlap-8">
            <div className="ellipse-8">
              <div className="ellipse-9" />
              <div className="ellipse-10" />
            </div>
            <div className="container-wrapper">
              <div className="container-2">
                <div className="heading-overline-3">
                  <img className="CDT-icon" alt="Cdt icon" src="/img/CDT-icon-1.svg" />
                  <div className="overline-3">DEFI RESERVE</div>
                  <div className="section-heading">CDT: Collateralized Debt Token.</div>
                  <p className="supporting-text">Optimized for DeFi and DEX users within the Interchain.</p>
                </div>
                <div className="content">
                  <div className="feature-2">
                    <div className="text">
                      <div className="supporting-text-3">ONE</div>
                      <div className="heading-6">Asset-backed stablecoin.</div>
                    </div>
                  </div>
                  <div className="frame-8">
                    <div className="row">
                      <div className="feature">
                        <div className="text">
                          <div className="supporting-text-3">TWO</div>
                          <p className="heading-7">
                            Flexible minting framework that uses ‘bundles' of collateral assets.
                          </p>
                        </div>
                      </div>
                      <div className="feature">
                        <div className="text">
                          <div className="supporting-text-3">THREE</div>
                          <p className="heading-7">Antifragile, self-healing, and decentralized design.</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="feature-3">
                        <div className="text">
                          <div className="supporting-text-3">FOUR</div>
                          <p className="heading-7">
                            The protocol's liquidation engine ensures stability &amp; collateral preservation.
                          </p>
                        </div>
                      </div>
                      <div className="feature">
                        <div className="text">
                          <div className="supporting-text-3">FIVE</div>
                          <p className="heading-7">$MBRN for voting within the decentralized community.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-overline-3">
                  <p className="supporting-text-4">
                    <span className="text-wrapper-5">DEX's where you can Trade $MBRN and $CDT:{"  "}</span>
                    <span className="text-wrapper-6">Osmosis</span>
                  </p>
                  <p className="supporting-text-5">
                    <span className="text-wrapper-5">Project GitHub:{"  "}</span>
                    <a href="https://github.com/MembraneFinance" rel="noopener noreferrer" target="_blank">
                      <span className="text-wrapper-7">
                        https://github.com/MembraneFinance
                        <br />
                      </span>
                    </a>
                    <span className="text-wrapper-5">Project X Account:{"  "}</span>
                    <a href="https://twitter.com/insaneinthembrn" rel="noopener noreferrer" target="_blank">
                      <span className="text-wrapper-7">https://twitter.com/insaneinthembrn</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div className="the-vision">
          <div className="overlap-6">
            <img className="montytree" alt="Montytree" src="/img/enhanced-monty-tree.jpg" />
            <img className="img" alt="The vision" src="/img/the-vision.png" />
          </div>
        </div>
        <div className="features">
          <div className="overlap-5">
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <div className="container">
              <div className="heading-overline-2">
                <p className="overline-2">
                  <span className="span">d</span>
                  <span className="text-wrapper-4">App Walkthrough</span>
                </p>
                <div className="section-heading">Navigate the Future.</div>
                <p className="supporting-text">A Guide to Membrane's Core Features</p>
              </div>
              <div className="content">
                <div className="frame-8">
                  <div className="row">
                    <div className="feature">
                      <div className="text">
                        <div className="supporting-text-2"></div>
                        <div className="heading-5">Bundle Collateral</div>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="text">
                        <div className="supporting-text-2"></div>
                        <div className="heading-5">
                          Mint
                          <br />
                          $CDT
                        </div>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="text">
                        <div className="supporting-text-2"></div>
                        <div className="heading-5">Stake $MBRN</div>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="text">
                        <div className="supporting-text-2"></div>
                        <div className="heading-5">Vote in Governance</div>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="text">
                        <div className="supporting-text-2"></div>
                        <div className="heading-5">Bid for Liquidations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="advantages">
            <div className="overlap-4">
              <div className="bar-graph">
                <div className="group">
                  <div className="heading-2">Decentralization x Stability Stablecoins</div>
                  <div className="frame-7">
                    <div className="heading-3">$CDT</div>
                    <div className="heading-3">$LUSD</div>
                    <div className="heading-3">$HAI</div>
                    <div className="heading-3">$RAI</div>
                  </div>
                  <div className="overlap-group-3">
                    <div className="heading-4">Potential for Growth</div>
                    <img className="lines" alt="Lines" src="/img/lines.png" />
                    <div className="bars">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                      <div className="rectangle-6" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="advantages" alt="Advantages" src="/img/advantages-1.png" />
            </div>
          </div>
        </div>
        <div className="opportunity">
          <img className="" alt="Opportunity" src="/img/advantages.png" />
        </div>
        <div className="overlap">
          <div className="FA-qs">
            <div className="overlap-group">
              <img className="istock" alt="Istock" src="/img/istock-1463401580-2.png" />
              <div className="rectangle" />
              <div className="defi-users-wrapper">
                <div className="defi-users">
                  <div className="heading-overline">
                    <div className="frame">
                      <div className="overline">FAQS</div>
                      <div className="heading">Questions? Look here.</div>
                    </div>
                    <div className="tertiary-nav-wrapper">
                      <div className="tertiary-nav">
                        <div className="tertiary-nav-2">
                          <div className={FAQ === "Users" ? "program-balance" : "text-wrapper"} onClick={()=>setFAQ("Users")}>DeFi Users</div>
                          <div className={FAQ === "MBRN" ? "program-balance" : "text-wrapper"} onClick={()=>setFAQ("MBRN")}>$MBRN Holders</div>
                          <div className={FAQ === "Builders" ? "program-balance" : "text-wrapper"} onClick={()=>setFAQ("Builders")}>DeFi Builders</div>
                        </div>
                        <div className="nav-line">
                          <div className="overlap-group-2">
                            <img className="line" alt="Line" src="/img/line-124.svg" />
                            <div className="rectangle-2" style={FAQ === "MBRN" ? {left: "137px", width: "154px"} : FAQ === "Builders" ? {left: "322px", width: "129px"} : {left: "0", width: "106px"}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>{FAQ === "Users" ? <><div className="question">
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                          Currently the frontend supports the collateral types $OSMO, $ATOM, and $USDC—can a user add
                          additional collateral types  How?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                        Only $MBRN governance can add new collateral types.
                        <br />
                        <br />
                        In the future we anticipate Membrane will become an important sink for $BTC, $ETH, and $TIA
                        collateral once they are whitelisted by community gov.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Is there a limit to the number of collateral types I can add to the bundle?</p>
                      </div>
                      <p className="text-wrapper-2">
                        No, as long as they are accepted within the protocol, they can be used in the bundle.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">How are vault parameters calculated when using a multi-asset bundle?</p>
                      </div>
                      <p className="text-wrapper-2">
                        Parameters are taken from collateral assets individually and then used proportionally to
                        calculate a vault's parameters. Ex: If you have 2 assets at 50%, one with a 50% max LTV &amp;
                        one with a 60% max LTV, your vault's max LTV will be 55%.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">How do supply/debt caps affect my position?</p>
                      </div>
                      <p className="text-wrapper-2">
                        Caps are used to calculate interest rates, if the cap is broken the rates will increase
                        multiplicatively. Withdrawals aren't blocked by supply cap increases &amp; deposits won't in a
                        future protocol upgrade.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                          If collateral value drops, how do liquidations of collateral within the bundle work to ensure
                          regeneration of peg?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                        Collateral within bundles is liquidated at its proportion of the bundle, eg, 10% USDC 90% $OSMO
                        bundle will use 90% $OSMO &amp; 10% $USDC liquidations to recapitalize.
                        <br />
                        <br />
                        If the value of just one collateral type cascades, the unaffected collateral type plays an
                        increasing role in each subsequent liquidation.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Do the liquidation pools have lockup periods?</p>
                      </div>
                      <p className="text-wrapper-2">
                        The single asset pools don't, the omni-asset pool has a 1 day unstaking period.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Do I need to activate my bids?</p>
                      </div>
                      <div className="text-wrapper-2">No</div>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                          What is the flow of liquidated assets since there are 2 different pool types?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                        The single asset pools get first dibs on all assets, the omni-asset pool gets the leftovers.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Are both pools first in first out (FIFO)?</p>
                      </div>
                      <p className="text-wrapper-2">
                        Only the omni-asset pool is FIFO, so being first is valuable. The single asset pools are
                        pro-rata so the liquidated assets are distributed based on your share of the pool.
                      </p>
                    </div>
                    <div className="point-2">
                      <div className="frame-2">
                        <p className="p">Does every collateral asset have a single asset pool?</p>
                      </div>
                      <div className="text-wrapper-2">Yes</div>
                    </div>
                  </div></> : FAQ === "MBRN" ? 
                  <><div className="question">
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                        What is the inspiration for creating the project?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                      We were a part of Terra's community and believe crypto doesn't exist as alternate rails without uncensorable money and good UX. Crypto will onboard the world with or without decentralized stables but without makes it solely an extension of nation-state systems. Decentralized money is the foundation the space was built upon and there is a dormant fervor waiting to explore this new portal.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">What is the team's plan to improve the front-end?</p>
                      </div>
                      <p className="text-wrapper-2">
                      Make it intuitive with reduced assumptions & make it more stylish with input from various community members. We can also use site recordings and click heatmaps to see where users are getting stuck & what they're trying to use to iterate over time.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Does the Membrane Protocol accrue revenues? What is it used for?</p>
                      </div>
                      <p className="text-wrapper-2">
                        Yes, both via loan interest rates on $CDT borrowings during growth cycles and also collateral liquidation fees during down cycles.
                        Protocol revenues can be utilized according to community gov voting (e.g. returned to stakers, used to grow POL, used to fund growth).
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">How big is the market opportunity for a product like $CDT?</p>
                      </div>
                      <p className="text-wrapper-2">
                      Its market is two-sided. The stablecoin market is the largest capital market in crypto outside of the winning layer 1 monies (BTC & ETH). Probably ~10% of the total crypto market, which if it grows could be 100s of trillions in size, thus 10T+ to stablecoins. My prediction is that decentralized stablecoins will hit an inflection point of adoption and overtake centralized fiat-backed stables, therefore being the top players in the stablecoin market.
                      On the other hand we have the market for credit and margin whose demand will bootstrap $CDT supply during the bull market. Exact market size I'm unsure of, but also many billions of dollars and could grow to be much higher.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                        What are the initial niche or wedge markets where we hope to see $CDT traction start to grow?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                        DeFi users who'd prefer to use decentralized stable coins within their dApps versus $USDC.
                        <br />
                        Osmosis LP collateralization - there are LPers who won't want to bond for incentives or expose themselves to CL vaults, making $CDT a great option boosted yield option.
                        <br />
                        Experimental DeFi users who want to discover the best collatearl bundle to leverage with.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Can $CDT be successful in a world increasingly dominated by fiat backed stable coins?</p>
                      </div>
                      <p className="text-wrapper-2">
                        Yes, as a decentralized stable its value prop will be made apparent anytime there are fiat-based insolvencies or censorship activities. Since both of those occurrences are inevitable, its only a matter of time before fiat-backed stables aren't seen as the best option. In the meantime, its dual use as credit will enable its own flow of capital uncorrelated to fiat-backed demand.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">How many decentralized stable coins are likely to be successful 10 years from now? Why?</p>
                      </div>
                      <div className="text-wrapper-2">Depends on what successful means. There will be many used by DeFi powerhouses as a way to increase revenue but the main stables will be 3-9. There is only so much of a design space for stablecoins and I expect 1-3 to be useful in each. This leaves 1-3 decentralized stables since 2-6 will have centralized and/or censorable edge cases.</div>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                        How is the bundled model of creating collateral for a decentralized stable coin superior to other models?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                      It allows liquidations to be spread across collateral types instead of each liquidation only converting a single asset type. This means the market of each collateral asset will be pressured less from $CDT liquidations in a down cycle.
                      <br />
                      It allows users to collateralize their whole portfolio & therefore getting the benefits of assumingly diversified volatility profiles. As well as allowing users to recapitalize their position with any available collateral types rather than just the initial deposit.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">How is $CDT differentiated from MakerDAO $DAI & Agoric $IST?</p>
                      </div>
                      <p className="text-wrapper-2">
                      The primary difference is the lack of a PSM, which allows for 1:1 swaps with fiat-backed tokens. This is great to keep the peg fixed (a hard peg) by having an instantaneous arb cycle. The problem with this is that it pegs the stable to the PSM's accepted assets instead of to the desired USD denomination. When USDC depegs, so does DAI & IST.
                      <br />
                      The liquidation pools are another major differentiation by making liquidated collateral available to the entire market instead of just the user who calls the liquidation. This allows a wider distribution of assets, in turn decreasing the effect of $CDT liquidations on the market. This and liquidation diversity from bundles make $CDT a partner of market stability during a down cycle.
                      </p>
                    </div>
                    <div className="point-2">
                      <div className="frame-2">
                        <p className="p">How is the project differentiated from $USK?</p>
                      </div>
                      <div className="text-wrapper-2">Aside from bundles, a major difference is the usage of fiat-backed collateral. This allows $CDT to scale faster and keep a tighter peg. Membrane's focus on stablecoins also allows it to build a community with specialized knowledge, ripe for stewarding the protocol's future.</div>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">We understand this is a new regulatory area, but, can you anticipate how regulators might react to a decentralized stable coin project with a product architecture such as $CDT?</p>
                      </div>
                      <p className="text-wrapper-2">
                      There is potential that a floating peg requires less/softer pressure because it is liquidating all assets and it isn't merely a $USDC wrapper. If $DAI risks are at best the same as $USDC, many regulators may ask why DDAI risk is necessary, compared to $CDT, which is actively derisking its fiat-backed collateral types.
                      </p>
                    </div>
                  </div></> 
                  : 
                  <><div className="question">
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                        What is the project roadmap for the next 6 months?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                        Frontend improvements on the way to contract upgrades.
                        <br />
                        Adding new collateral types.
                        <br />
                        Integrations with other protocols.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Conceivably, could the $MBRN community approve gov proposals to fund community contributor roles such as development, marketing, and BD?</p>
                      </div>
                      <p className="text-wrapper-2">
                      Yes, but we expect them to start slowly by delegating staking rewards to contributors instead of playing lump sum guessing games.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Hypothetically, could the $MBRN community create a Juno style charter and on-chain project organization model to drive the project?</p>
                      </div>
                      <p className="text-wrapper-2">
                      Yes but it may not be necessary. We see most of the organization hassle stemming from non-protocol contributions and general education/content.
                      <br/>
                      Delegations should become common enough to attract new developers.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">Who are the natural partners who would be best-suited to become early users of $CDT?</p>
                      </div>
                      <p className="text-wrapper-2">
                        Digital asset markets to create LPs using $CDT.
                        <br />
                        DeFi Apps that need to have a primary stable coin within the dApp.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">
                        Could the $MBRN community approve gov proposals to pay incentives to partners for integrating $CDT?
                        </p>
                      </div>
                      <p className="text-wrapper-2">
                        Yes, but will need more tech to do so without multi-sigs outside of Osmosis.
                        While we think this is a worthwhile gesture in time, Osmosis DEX has enough users, and that is the immediate focus before spending money elsewhere.
                        <br />
                        If DeFi builders want to present a proposal to $MBRN community that integrates $CDT into their dApp, whether or not $MBRN incentives will be awarded really depends on long-term alignment and the plan to prevent dumps into the market.
                        If the value of just one collateral type cascades, the unaffected collateral type plays an
                        increasing role in each subsequent liquidation.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">If the Membrane project is successful, where will it be in 12 to 24 months?</p>
                      </div>
                      <p className="text-wrapper-2">
                      $CDT will be a de-facto medium of exchange and stable store of value in the IBC-connected Cosmos, while the value faucets in the protocol (delegations, LPs, redemptions) will have attracted a network of aligned participants. The POL generated from liquidations will continue to build a long term bed of liquidity for $CDT. Majority of content creation will come from the community as a way to narrate ongoing history & attract new members.
                      </p>
                    </div>
                    <div className="point">
                      <div className="frame-2">
                        <p className="p">How does $CDT's regenerative approach to recovering peg work & how is this differentiated from other decentralized stable coin designs?</p>
                      </div>
                      <div className="text-wrapper-2">
                        For a user, leverage is a high-risk, high-reward endeavor that leaks its risk to the wider market. In a bullish environment, the more levered the overall market, the harder it'll crash on an inevitable downturn. As a cog in the leverage machine, it's Membrane's responsibility to reduce the overall effect its deleveraging has on the ecosystem overall. Deleveraging is destruction that must be reintegrated into the environment to act as nutrients in the next phase of the cycle.
                        <br />
                        <br />
                        The usual method is having a single liquidator's preference determine the outcome for the liquidated collateral, normally selling via DEX. This not only centralizes the discount from said collateral but also lubricates the mountains for a liquidation cascade, which can snowball and liquidate everything in its path.
                        <br />
                        <br />
                        Membrane's liquidation dispersion method is 2-fold. Initially because positions can hold multiple collateral types, each liquidation is more likely to liquidate multiple assets instead of having to recapitalize 100% of the debt from a single market. Next, these assets go through liquidation pools so that each is distributed to every bidder in a pool, which if empty will go to a secondary pool that is FIFO to encourage competitive refills. Distributing to more people means there will be more collateral that doesn't get sold right away (instead it is staked, LP'd, held) which will (1) Give the market temporary strength, and (2) Allow long term holders to obtain assets at discounted prices.
                        <br />
                        <br />
                        Overall, this makes $CDT liquidations a redistribution method from high-risk to lower risk which in turn strengthens the foundation of each collateral's market distribution.
                      </div>
                    </div>
                  </div></>}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="overlap-2">
              <div className="ellipse" />
              <div className="footer-2">
                <div className="block">
                  <div className="frame-3">
                    <img className="logo-block" alt="Logo block" src="/img/logo-block-1.svg" />
                    <p className="text-wrapper-3">© 2024 Membrane. All rights reserved.</p>
                  </div>
                </div>
                <div className="frame-4">
                  <div className="links">
                    <a className="button-instance" onClick={reserveClick}> DeFi Reserve </a>
                    <a className="button-instance" onClick={visionClick}> The Vision </a>
                    <a className="button-instance" onClick={dappClick}> dApp Walk-thru </a>                
                    <a className="button-instance" onClick={protoClick}> Protocol Advantages </a>
                    <a className="button-instance" onClick={oppoClick}> Opportunity </a>
                    <a className="button-instance" onClick={faqClick}> FAQs </a>
                  </div>
                  <div className="frame-6">
                    {/* <SocialIcon className="media-social-icon" />
                    <CompanyXStyleWhiteBackgroundCircular className="media-social-icon" />
                    <IconComponentNode className="media-social-icon" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};
