---
title: Atomic Swap Marketplaces for Non-Fungible Tokens
date: "2018-08-12T22:12:03.284Z"
description: "Nearly a year ago a clowder of quirky cats began their invasion of the world of Ethereum. Banded together, these cats fervently set out on a mission to conquer the realms of blockchain and cryptocurrency. Hungry for their own moon lambos, these cats set a movement in motion by creating unique tokenized representations of themselves and then began generating revenue streams from their cat-trafficking hubs and kitten-birthing factories."
---


Nearly a year ago a clowder of quirky cats began their invasion of the world of Ethereum. Banded together, these cats fervently set out on a mission to conquer the realms of blockchain and cryptocurrency. Hungry for their own moon lambos, these cats set a movement in motion by creating unique tokenized representations of themselves and then began generating revenue streams from their cat-trafficking hubs and kitten-birthing factories.

It’s true — don’t be fooled, cats have most certainly been evolving, and it is incontestable that they are leading the ranks of innovation in blockchain.

Now, a year or so after their first appearance, it’s becoming more common for them to venture into [other innovative crypto-enterprises](https://tokeneconomy.co/designing-non-fungible-tokens-as-open-ecosystems-a0f28ae213ee); it’s only a matter of time until they are fully capable of pioneering the [atomic](https://blog.enjincoin.io/erc-1155-the-crypto-item-standard-ac9cf1c5a226) fields.

![Well, atomicity of cypto at least](https://cdn-images-1.medium.com/max/2000/0*4cvRspClZU_Z8X3g)
> Most of the ideas and research in this post come directly from these cats, and certainly not from the human writing this.

## **A Quick Primer**

[Non-fungible tokens](https://medium.com/@CryptoCarz/why-non-fungible-tokens-matter-the-rise-of-crypto-collectibles-5126871eec4e) in Ethereum have been around for awhile now. If you’re new to the topic here’s a primer:

**Fungible tokens:** every fungible token is indistinguishable from every other token of its type. An easy way to think about fungible tokens is that they are similar to dollars. When you go to a store and make a purchase, the cashier will not care which dollar bill you are using, they will only care how many you are giving them.

**Non-fungible tokens:** unlike fungible tokens, every non-fungible token is distinguishable from every other token. In that, every token has some distinguishable quality that makes it unique or different from the others. An easy way to think about non-fungibility is to think in terms of baseball cards. If you are trading baseball cards, every card is not valued or treated as the same. In a trade, you will care about the qualities of the card, and not necessarily the quantity of cards.

**Atomic Swap:** [Atomic swaps](https://www.investopedia.com/terms/a/atomic-swaps.asp) are also not a new idea for cryptocurrencies. An atomic swap allows the exchange of one currency for another without the use of a centralized intermediary. Typically this is done by leveraging a smart contract as a decentralized match-maker.

But what about atomic swaps **for**non-fungible tokens? Well, dear reader, that reality has just recently arrived.

*But first, a little bit of context…*

## Defining the Current Catscape

Now, to fully appreciate why atomic swaps are an interesting concept, it helps to first take a quick look at the current landscape of decentralized applications, smart contracts, and tokens.

If you take a microscope to [decentralized applications](https://www.coindesk.com/information/what-is-a-decentralized-application-dapp/) (or **DApps**) you’ll quickly find that they are quite similar to the applications we all know and use today. In that, DApps and apps alike are both made up of similar bits of code that exist solely to react to real world events and user interaction in ways that are entirely pre-specified.

Often, the process of incepting either type of application is indistinguishable. Let’s say you have an application which allows known cat food manufacturers to bargain for its supply. In either application framework, there exists a similar set of logic constraints that are requisite in order to fulfill the tasks demand. Simply, this particular task requires predefined rule-sets for creating and distributing invoices, and creating and distributing supply-chain information.

In a traditional application, app developers simply organize these bits of logic into a few software packages and then host those packages on centrally controlled servers. When creating these types of centralized applications, it is common to end up with admin-defined access-controls. In a lot of cases, this pattern of central control allows for significantly higher throughput and permissions granularity than its decentralized counterpart.

### So what of a decentralized application, then?

Decentralized applications would start with the same idea (to create a cat food manufacturing application) but after iterating through a similar development cycle, they deploy it into a decentralized context. However, the implications of this extend beyond the “**where”** the application is deployed — in decentralized contexts the important part becomes **how the code can be interfaced with** in this unconfined digital frontier.

Unlike centralized applications, DApps are intrinsically more accessible. In that, decentralized architectures expose environments that grant more fluent accessibility to third-party cats who also happen to be building in this new frontier (*note: DApps are often permissionless, but this is not a constraint*). That said, the more interesting aspect of DApp environments is that every application therein has a massively increased potential for composability. Figuring out how to harness this composability is often not obvious, but when done right it can unlock [things not possible in their centralized counterparts](https://medium.com/coinmonks/introducing-crypto-composables-ee5701fde217).

When this power is wielded appropriately, it can be the [cornerstone](https://medium.com/coinmonks/crypto-composables-building-blocks-and-applications-65902709298c) for other cat-repeneurs to create[ complimentary, yet independent, applications](https://blog.userfeeds.io/giving-cryptokitties-thousands-of-social-media-platforms-bd449a0a3a74) that result in mutual benefits for the entire cat ecosystem (*such as a catnip dispensing smart contract that is triggered whenever the order book sees an influx of sales*)!

![](https://cdn-images-1.medium.com/max/2000/1*BcGBOTYm0gmG5GJoD0WzLQ.png)

Permissionless flavored composability is powerful — and understanding it will be important to the rest of this story.

### Tokens and Smart Contracts

If you haven’t read my [latest](https://medium.com/nori-carbon-removal/an-uncensored-look-at-smart-contracts-part-1-the-gentlest-of-introductions-b3c3b6b24eee) [posts](https://hackernoon.com/the-journey-to-a-world-unknown-begins-in-a-vessel-yet-built-c854cb4aa12e) summarizing smart contracts, it’s a good place to get started. As a brief summary, smart contracts are a sub-technology of blockchain and decentralized applications. They operate based on financial-type inputs and execute on contract-like agreements.
> Side note- A popular use of smart contracts for cats might be a catnip dispenser which, whenever the smart contract is fed 1 cat coin, a single bag of catnip is released.

Now that we’re on the topic of tokens, let’s make sure we understand some important points.* ***Tokens, at least as they have been designed over the past few years, are often just smart contracts in and of themselves***.* Moreover, token contracts are consolidated ledgers of balances that can be updated when sent an initiating transaction.

Now, let me reiterate that last point, as this is extremely important to understand: most tokens will only ever exist within the context of their own smart contract**. Tokens are consolidated to their own context.**

This means that when you “transfer” one token from your account and to another (or to a Dapp’s smart contract), you are never actually sending it anywhere. Instead, the token stays within its own contract, only to update its internal ledger. **Again, most tokens do not ever leave their contract’s context**.

Did you catch that? No? One more time:

![](https://cdn-images-1.medium.com/max/2000/0*66ThRH2HqBQg0Iff)

This is an issue. Decentralized applications are powerful *because* of their ability to be composable and to interact with other contexts, and so when we design them in a way that does not support this, we end up with a lot of wasted potential.

Now, you might be saying “wait. . . there are tons of tokens, and tons of decentralized applications that can use these tokens!”, and technically, that’s true. Most tokens *can* still be used with other smart contracts, even though they are self-contained. However, such interactions are neither fluent nor natural.

For the common cat, an example might help. By a large margin, the most common token standard is the [ERC-20 token](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) (but the same can be said for other token types such as [ERC-223](https://github.com/ethereum/EIPs/issues/223)), and chances are, if you hear someone talking about a token, they are probably referring to this type. These tokens can be used in DApps in the following way:

1. Start by “transfering” a token to a smart contract. This effectively increments the DApps token balance, but does **not** actually send the token from the token contract to the DApps contract.

1. Interact with the DApp contract by sending another transaction to it using Ether along with the data associated with the function you want to trigger.

1. The DApp contract checks the token contract’s ledger to see if it has a valid balance to perform the action

1. If the balance is valid, it performs the action on the token. If not, it fails.

1. When the user has finished interacting with the DApp they can proceed to “withdraw” their token. Doing such decrements the dapps balance and increments the users.

I assert the following: *this is ridiculous AF***. **Step 2 means that the application will always require the cat to make two independent and manual transactions.

But all is not lost! An improved approach to token designs does already exist (and more have been proposed since).

## **The Way Forward**

Enter [ERC-777](https://eips.ethereum.org/EIPS/eip-777): the **advanced token standard. **Advanced tokens introduce some really powerful attributes for fungible tokens. Whilst these tokens still don’t have an ability to *fully* transcend the constraints of its own contract’s context, it does have a phenomenal attribute which allows for improved composability. Specifically, it can do two new things:

1. The token contract can “call” other contracts when a transaction is triggered

1. Token transactions can accept transaction data that can be used to chain additional function calls and effectively allowing the token to be used in a way that is functionally similar to Ether (the very currency used to trigger the functionality inside smart contracts).
> Note: the advanced token standard gives us two ways to effectively create an atomic market contract. Furthermore, the complexity of the advanced token could span the content of an entirely independent post. So, for both of our sakes, I’m only going to go into detail on how we use #2. Furthermore, I’ll only talk about it in the context of token allowances.

We start with a standard ERC-20 approve function. ERC-20 approvals contain the logic to assign a third-party cat or contract an allowance. This means if I approve an allowance for you in the quantity of 20 cat coins, then you will have the ability to send those 20 cat coins on my behalf.

Unfortunately, in these standard tokens, this type of approve logic merely gives us the ability to give another address an allowance, and the functionality ends there. For the specified address to take immediate action on this new allowance it needs to still be notified of such (e.g., for the token contract to transfer your allowance, it would require a second transaction). This means the operator being allocated an allowance now has to send their own Ether and in order to trigger a new function — and they have to consume the fee on the token owner’s behalf. But that’s not what we want!

**The solution? Give the token contract a “telephone” so that it can dial other contracts.**

Instead of relying on other smart contracts (or cats) to manually verify that they received an allowance (or in the best case: rely on the owner to send a second transaction), we can instead use a new function that gives the token contract the ability to “dial outwards” to the operator address. This is super useful, especially when the designated operator of the allowance is a smart contract address.

**Why?**

Because now the token can call the atomic contract, and if it “picks up”, the token can tell the smart contract to create an offer to swap the owner’s tokens for a non-fungible token.

**How?**

The idea is to nest these types of functions inside of *balance* and *allowance* oriented functions which initiate any time the designated recipient or operator is a contract address; if it is, the token contract invokes an additional function in the designated smart contract. How it is able to do this is by [leveraging a registry contract](https://github.com/ethereum/EIPs/issues/820) (more information and an implementation of this is [available in this repository](https://github.com/nori-dot-eco/contracts/tree/master/contracts/registry)). As such, when an allowance is granted (by way of invoking the approve function), the smart contract looks up the designated operator address in the registry, and if the registry responds that the address is a supported contract for the allowance, it notifies the token contract that it can perform special functionalities (such as one that creates or fills an order in an atomic market’s order book).

But that’s not all! This power can also be extended for non fungible tokens. Basically, all we need to do is modify the non-fungible token contract to allow for this same type of registry-dialing. [If you’re curious, here is our implementation of this extension](https://github.com/nori-dot-eco/contracts/tree/master/contracts/commodity). That’s it!

With such an extension, an advanced non-fungible token would gain an identical super-power as its fungible counterpart, and then atomic swaps would be made easy. Clear? No? Okay, consider the following sequence:

![Note: non-fungible tokens are typically variant in pricing due to their distinguishable qualities, and this 1:1 example is shown only for simplicity. For more realistic price matching markets, checkout out price-based selectable market or first-in-first-out market implementations [here](https://github.com/nori-dot-eco/contracts/tree/master/contracts/market)](https://cdn-images-1.medium.com/max/6600/1*qG62viZodcf_I2kt1hEw7Q.png)*Note: non-fungible tokens are typically variant in pricing due to their distinguishable qualities, and this 1:1 example is shown only for simplicity. For more realistic price matching markets, checkout out price-based selectable market or first-in-first-out market implementations [here](https://github.com/nori-dot-eco/contracts/tree/master/contracts/market)*

Now, if you can’t follow the above sequence diagram, that’s okay. Basically, The scenario is as follows:

1. Alice signals that she wants to swap one fungible token for one non-fungible token. She does this by assigning an allowance to the Atomic contract by way of calling the fungible token contract.

1. The fungible token contract picks up the phone and dials the Atomic market, asking “Yo, I heard Alice wants to give you an allowance of 1 token, what do you want to do?”

1. The Atomic contract responds, “Oh hi! Yeah, whenever someone gives me an allowance of fungible tokens, they’re actually just trying to open an order for a non-fungible token, I’ll go ahead and create one for her now!”. The Atomic contract then hangs up the phone. *Note: Alice still owns her fungible token, and the Atomic contract is only given the ability to send it on her behalf.*

1. Bob signals that he wants to swap one non-fungible token for a fungible one. He does this by assigning an allowance to the Atomic contract by way of calling up the non-fungible token contract.

1. The non-fungible token contract picks up the phone and dials the Atomic market, asking “Yo, I heard Bob wants to give you an allowance of 1 token, what do you want to do?”

1. The Atomic contract responds, “Oh hi! Yeah, whenever someone gives me an allowance of non-fungible tokens, they’re actually just trying to open an order for a fungible token, I’ll go ahead and create one for her now!”.

1. Before hanging up, the Atomic market realizes there is a matching order to swap Alice and Bob’s respective tokens. In doing so, it initiates an atomic swap. In that, it sends Alice’s fungible cat coin to Bob by dialing the fungible token contract, and it sends Bob’s non-fungible cat to Alice by dialing the non-fungible token contract.

## Awesome! Now, what exactly have we done?

With this type of logic we have effectively moved from a [2 transaction requirement](http://blockchainers.org/index.php/2018/02/08/token-erc-comparison-for-fungible-tokens/) (and asset custody forfeits, meaning an additional transaction would be required to withdraw, making the total **3** **transactions** **per participant**) to a single transaction (and no custody forfeits) meaning a total of **1 transaction per participant.**

Much better!

Only when we build applications in ways that are aggressively composable can we create truly decentralized applications — such as the kind that removes that pesky cat-in-the-middle so we never again have to lose custody of our hard earned coinage. Furthermore when we build like this we can minimize trust requirements and cut costs. *That means more catnip for all the cats!*

Using a combo of a lookup-registry and the advanced token extensions, we are able to deploy atomic market contracts that can sit and wait for calls from token contracts so that we can have truly decentralized market making.
> If you liked this post, but didn’t like the cats (how dare you), stay tuned for an additional post where I will provide a real-world use case along with a significantly more “in the weeds” technical break-down on how we, at [Nori](http://nori.com), are building an atomic marketplace for the trading of CO2 removal certificates and these types of advanced tokens. In the meantime, [feel free to look here for the implementation](https://github.com/nori-dot-eco/contracts/tree/master/contracts/market).
