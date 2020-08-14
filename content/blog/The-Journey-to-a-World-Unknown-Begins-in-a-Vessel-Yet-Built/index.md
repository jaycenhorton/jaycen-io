---
title: The Journey to a World Unknown Begins in a Vessel Yet Built
date: "2018-07-11T22:12:03.284Z"
description: "Nascent technologies are hard. But probably not in the way you’d think. If you’re thinking, “these newfangled technologies are way too difficult to build because they’re complex and therefore inherently harder to understand”, then I’m calling you out specifically"
---


If you haven’t read Part 1 yet, I recommend starting [there](https://medium.com/nori-carbon-removal/an-uncensored-look-at-smart-contracts-part-1-the-gentlest-of-introductions-b3c3b6b24eee) first.

Getting started writing software is easy — just grab a popular [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment), write a few lines of [“Hello, World”](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program), hit that [compile](https://en.wiktionary.org/wiki/compile) button and that’s that.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/Yw6u6YkTgQ4" frameborder="0" allowfullscreen></iframe></center>

Congratulations and thanks for readin — . Oh, wait, “there’s a bug”, you say? Don’t worry, that compiler you’re using probably printed out an intelligible statement and since you’re a quick learner, just go ahead and resolve it. Ok, I’ve really got to get goi — , huh? There was something weird in the byte-code your compiler spit out? OK, get familiar with a [static analysis](https://en.wikipedia.org/wiki/Static_program_analysis) tool. Done? OK, see you lat — , oh? Now you want to deploy the application to your users? No problem, there are [dozens](https://en.wikipedia.org/wiki/Comparison_of_continuous_integration_software) of tools to help you with that. Anyways, have a nice da — , what’s that? You’re building with smart contracts on top of a nascent, decentralized architecture, such as a blockchain? Oh. I totally forgot that was the topic of this series. Well. . . go ahead and forget every tip I just gave you. Oh, and also, cancel your plans for the next few months, because things are going to get juicy.

![](https://cdn-images-1.medium.com/max/2000/0*iccf-jR5TBejQaDA.jpg)

Nascent technologies are hard. But probably not in the way you’d think. If you’re thinking, “these newfangled technologies are way too difficult to build because they’re complex and therefore inherently harder to understand”, then I’m calling you out specifically. In most cases, this has nothing to do with it. In all actuality, new technologies are just iterations on top of the shoulders of the giants which came before. Therefore, in most cases, they’re only as hard as the difference between this technological iteration, and the one which came before it.

No, nascent technologies are not perplexing due to their complexities, nor are they hard because of their inherent difficulty levels — instead, they’re difficult because they’re what exists between the stages of theoretical ideation (where education is everything) and a mass adopted technology (where design and interaction are everything).

In a technology’s nascent stage, its [**tooling and ecosystem are everything](https://www.sciencedirect.com/science/article/pii/S2352664516300190#a000010)**. To put it a bit simpler, nascent technologies are like IKEA furniture, but with one important distinction — when the furniture arrives, it comes disassembled with an instruction manual on how you might assemble it, however, the twist is that they forgot to include the tools, and there’s no customer service number listed. Good luck.

![](https://cdn-images-1.medium.com/max/2000/0*qpYz41jbIz9doay2)

You might ask, “but what does this mean? I’m determined. I still want to build something using this”, to which I’d applaud. Assuming you’ve first adequately assessed whether the idea you have is appropriate for both smart contracts and a blockchain (or even a decentralized paradigm for that matter), there are at least three things more which should be on your checklist before you begin your journey.

1. Open source is everything. The first thing you need to find is a chain which was born of the minds of [open sourced](https://techcrunch.com/2017/04/07/tracking-the-explosive-growth-of-open-source-software/) technologists. If you can’t easily learn from the experience of other projects, your journey will end in a desolate and deserted abyss. Even a blockchain’s permanence can’t save you here if it’s not maintained by peers — so make sure that you choose an ecosystem with community-driven software projects. Trust me, you’re going to need this one from the very beginning.

2. Adaptability. You’re going to want to find a platform which you can create adaptable and iterative products on. If you cannot adapt, then brace your idea for deprecation, loss of adoption, [severe bugs](https://medium.com/chain-cloud-company-blog/parity-multisig-hack-again-b46771eaa838), and subsequently the loss of your wife/husband and kids (only kidding about that last one… maybe). That said, [tread lightly](https://medium.com/unchained-reports/bancor-unchained-all-your-token-are-belong-to-us-d6bb00871e86).

3. Standardization and growth are extremely important for newer technologies. Therefore the third attribute to assess, but definitely not the last, is whether a particular ecosystem is growing at a consistent rate with the rest of the world by keeping up with technology [standards](https://github.com/ethereum/EIPs), [design/interaction standards,](https://medium.com/design-for-crypto/%C3%B0app-user-experience-audit-afc11e4384c3) and of course, [security standards](https://medium.com/mycrypto/a-safer-mycrypto-79d65196e7d8).

Finished? Great. You will probably realize that there are only a few choices remaining for you to take after satisfying the above constraints. However, if you’ve followed them carefully, congratulations — you’ve just saved yourself some time by separating out the “blockchain mirages”. Now you should pick just one of those, and settle in for a very long haul.

At [Nori](https://nori.com/) the choice was overwhelmingly easy: Ethereum. I’m happy to say that this one checks every single one of these boxes. However, this is definitely not the only choice, and so you should absolutely spend as much time as you need in this phase to pick the one which you think will be most appropriate for what you need. Don’t worry, the world will wait.

## **Toolsets and Developer Ecosystems**

Now, about all this ruckus on the topic of toolsets and developer ecosystems. To be able to bring products from ideation to adoption, it’s key to have the capacity to rapidly prototype. If what you are trying to build can’t be iterated on in a live market, it will likely be forgotten and antiquated long before it can make its debut. Unlike specialized software where [formalization](https://en.wikipedia.org/wiki/Formal_methods) is paramount, iteration is important in consumer software. To that point, if you need to spend the larger portion of your time building and tuning your own tools to achieve this, then you should probably revisit your checklist.

Now, if you, like us, have chosen the Ethereum ecosystem, then prepare to be amazed by the plethora of existing tools to jump start your process. There’s [Solidity](https://github.com/ethereum/solidity) and [Vyper](https://github.com/ethereum/vyper) for writing contracts, [solc](https://github.com/ethereum/solc-js) for compilation, [IDE plugins](https://github.com/juanfranblanco/vscode-solidity) for syntactic sugar, [Embark](https://github.com/embark-framework/embark) and [Truffle](https://github.com/trufflesuite/truffle) for rapid prototyping, [EthFiddle](https://ethfiddle.com/) to quickly write snippets, [Remix](http://remix.ethereum.org) for quickly testing ideas in the browser, [Mythril](https://github.com/ConsenSys/mythril) for taint analysis, [Echidna](https://github.com/trailofbits/echidna) for bytecode analysis, [web3js](https://github.com/ethereum/web3.js/) as an API into the blockchain, [EthQL](https://github.com/ConsenSys/ethql) as a query language for the very same, and so many more. There’s even [a simple tool I wrote ](https://www.npmjs.com/package/contract-state-util)that is compatible with a number of these toolsets (more on that in a forthcoming standalone post). Not convinced? I took the GitHub API for a spin to quantify Ethereum developer activity a bit more:

![](https://cdn-images-1.medium.com/max/2000/0*gqobVjUEI3tLCgn7)

Here’s another on the growing total (stolen from [@stefanobernardi](https://twitter.com/stefanobernardi)) :

![](https://cdn-images-1.medium.com/max/2880/0*Hus3j5p7CTGXmXBb)

One further point, and this is paramount — participate and contribute to the development of all of the toolsets you depend on. Decentralized technology depends on it. Have an idea to improve on the tools you’re using? Reach out the the team behind it. Find a bug in the compiler? Submit an issue on GitHub. Know how to improve the efficiency of a common task? Submit a pull request on GitHub. Think some documentation can be improved? Update a readme. Think there’s a better way to do something? Create a new tool and ask for community participation. Remember, your creation is only as good as the tools that you can use to actualize it with.

Lastly, take a moment to remind yourself that nascent and open source technologies only achieve adoption when there is an adequate amount of collaborative developer participation. Unlike the decaying realms of proprietary software, where secrecy and intellectual “property” is everything, this is a radically different world where value comes from collaboration. But this power depends on a peer-to-peer world, including you.

## **Iteration and Versionability**

Now this is a tricky one. Smart contracts are party to the blockchain construct — and blockchain has at least two attributes that make satisfying this requirement hard: immutability and a decentralized runtime. However, you almost certainly need this, even if only as a kind of training-wheels you can use until you’ve truly tuned it to where it will sit in permanence.

That said, the necessity of permanence of logic is often a fantasy and requires a [mythical](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) level of engineering aptitude. Logic permanence, unlike state permanence, is needed in very few real applications, and is seldom a good idea in all [others](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation). Some tend to shrug this one off as [unnecessary](https://medium.com/unchained-reports/bancor-unchained-all-your-token-are-belong-to-us-d6bb00871e86). “Versionability?!”, they exclaim, “The whole point of a blockchain is to be immutable and logically deterministic”. I tend to disagree, and instead prompt extreme caution on how (and when) to leverage it.

![No, Gru, that last bit doesn’t seem quite right..](https://cdn-images-1.medium.com/max/2000/0*L-mVrDLlLu1yUazV)*No, Gru, that last bit doesn’t seem quite right..*

An important realization, if you haven’t made it already, is that a blockchain is only historically immutable, and therefore so too are its smart contracts. What went in yesterday, stays there tomorrow and until the end the lifespan of the chain. However, they are certainly not immutable in present and future contexts. This means that as long as you plan for iteration, the determinism of your application is maintained, yet its execution location is made allowed to mutate (only in the present and future, and never in the past).

In slightly simpler terms, a smart contract without versionable capacities says, “I will always only do X when I see Z”, whilst a versionable contract instead says, “I will always only do X, which is told to me by Y, when I see Z” (where the X is the known smart contract, Y is the mutateable location of some versionable logic implementation, and Z is a transaction initiation). This is a controversial approach, as it reintroduces human-based trust and places an expectation that the maintainer of “Y” appropriately communicates and maintains upgrades. It creates “mutable immutability”, if you will. **Tread lightly.**

With versionability, it is key that the minification of logic determinism suffered is replaced by increased transparency and communication. More importantly, it’s important that it is implemented either as a means of application health recovery, or for feature extensibility. Utilizing this power to alter a smart contract’s logic, or a particular state therein which a peer is thought to have ownership (i.e., a token balance), can have dire consequences This is a decentralized technology after all, and as such, both third party applications, and peers, will frequently interact and depend on the consistency of your contracts, be it of a passive or active means (more on that another time).

You might be asking, “Well then, how?”. And if so, you can take a look at [ZeppelinOS](https://zeppelinos.org/), a great tool for this task, or tread the frontier on your own. At Nori, we’ve decided to achieve this by adapting from a couple of popular [techniques](https://blog.zeppelinos.org/proxy-patterns/) and then tailoring them a bit to satisfy a number of transparency requirements. You can look at the code [here](https://github.com/nori-dot-eco/contracts). If you’re interested in more on this topic, stay tuned, because there’s something hot baking in the oven.

## Standards

“Technology standards? So boring, so bureaucratic. . . Who needs them?” You, dear reader — and they are now your lifeblood.

To be fair, technology standards in a centralized world make very little sense. Even at scale, a closed technology with routine and predictable users need not worry about formalizing or standardizing the way in which they create, build, or destroy. In fact, in that world, standards will at best serve as formal architecture; at worst, they are the butcher of innovation. But this is not the world you’ve chosen to be a part of, dear reader. No, you are the progress the world has been waiting for.

Schmoozing aside, standards are how we define the ways to interact with a technology. It is the architecture by which we, as a community, agree to be guided by. When we feel a standard is incorrect, we may propose a new one. They are what a user can use for an abstract understanding of a technology they are desiring to interact with, and they are a reference for understanding the design of the world around them.

However, standards are not rules, and they are certainly not law (and for nascent technologies this is especially true). Break them as you please; this is an important part of the process. They key difference between law and standard is its that, for standards, participation is optional.

For smart contracts, standards are what allow peers and third party applications alike to build in a way that can reliably and appropriately both interact and coexist with your application. Heard of and [ERC-20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) token? What about a [non-fungible token](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)? Well, these are a couple of the most popular smart contract standards, at least from the view of a token-based application developer. These standards define a number of function definitions that can be referred to for consumption by third-party applications. In fact, they are precisely what allow for the operation of almost every decentralized exchange and wallet today. Without this standard set of function definitions, and the subsequent number of implementations, decentralized exchanges, (and other types of smart contract-based applications) could not exist. Ever pull up an Ethereum wallet and see a list of tokens? The query-ability of that very feature is due to a shared [standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md). However, without a set of shared standards, actualization would be chaotically random.

## **Ready to begin?**

For nascent technologies it is the iterability, standards, tools, and developer communities that are the fuse for adoption. For smart contracts, this fuse was lit [long ago](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html), and most recently it has largely been the Ethereum community leading the charge. This fuse does not end in a bang. No, this fuse ignites the launch of a marvelous vessel, one which can take us to an unknown world. It may very well be that this will be a place where applications can inherently [interact with other applications](https://medium.com/coinmonks/introducing-crypto-composables-ee5701fde217), where data can be owned by its user, where [identity](https://www.uport.me/) can be sovereign and used across all applications, where permission-less participation is bountiful, where[ new markets emerge](http://nori.com), and where the world is peer to peer.

Most importantly though, it’s also the very place where we can all breed [digital cats](https://www.cryptokitties.co/).
