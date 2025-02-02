"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import DancingGecko from "@/components/DancingGecko"; 


const socialLinks = [
  { name: "X", url: "https://x.com/TokenProjectLeo", icon: "/images/x-icon.webp" },
  { name: "Telegram", url: "https://https://t.me/TokenProjectLEKO", icon: "/images/telegram-icon.webp" },
];
const faqs = [
  {
    question: "What is LEKO ($LEKO) Token?",
    answer: "LEKO is a meme coin inspired by the power of the leopard, designed for a fun and engaged crypto community."
  },
  {
    question: "How can I buy $LEKO?",
    answer: "You can purchase $LEKO through decentralized exchanges (DEX) like Raydium and Orca."
  },
  {
    question: "Is there a staking option for $LEKO?",
    answer: "Currently, staking is not available, but we are working on introducing it in the future."
  },
  {
    question: "What is the total supply of $LEKO?",
    answer: "The total supply of $LEKO is 1,000,000,000 tokens."
  }
];

const blogPosts = [
  {
    id: "1",
    title: "Introducing LEKO: The Wildest Meme Coin!",
    description: "Learn about the vision and goals behind LEKO, the latest meme coin taking over the crypto space.",
    date: "2025-02-02"
  },
  {
    id: "2",
    title: "How to Buy and Store $LEKO Safely",
    description: "A step-by-step guide on purchasing and securing your LEKO tokens in the best wallets.",
    date: "2025-02-05"
  },
  {
    id: "3",
    title: "Upcoming LEKO Roadmap & Future Plans",
    description: "We reveal our upcoming milestones, including staking, NFTs, and more!",
    date: "2025-02-10"
  }
];

const roadmap = [
  {
    phase: "Q1 2025",
    title: "Launch & Community Building",
    details: "Official token launch, website release, and initial community engagement."
  },
  {
    phase: "Q2 2025",
    title: "Exchange Listings & Partnerships",
    details: "Getting $LEKO listed on major decentralized exchanges and forming key partnerships."
  },
  {
    phase: "Q3 2025",
    title: "Staking & Rewards",
    details: "Introducing staking features to allow users to earn rewards by holding $LEKO."
  },
  {
    phase: "Q4 2025",
    title: "NFT Integration & Future Development",
    details: "Launching exclusive $LEKO NFTs and expanding the ecosystem further."
  }
];
const dexLinks = [
  { name: "Raydium", url: "https://raydium.io/swap/?inputMint=4nNT2vMXDFgsW5hu1zt5MEKmkpFnYcPR7ANecNVcUpdj&outputMint=sol/", icon: "/images/raydium-icon.jpg" },
  { name: "Dexscreener", url: "https://dexscreener.com/solana/egdj4vjtgee4ecajwlamfwpsqp24wpxe3baop4npmsrg", icon: "/images/dexscreener-icon.jpg" },
  { name: "DexTools", url: "https://www.dextools.io/app/en/token/leopardgecko?t=1738513596604", icon: "/images/dextools-icon.jpg" }
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>LEKO ($LEKO) - The Wildest Meme Coin</title>
        <meta name="description" content="LEKO is a meme coin inspired by the power of the leopard. Join the $LEKO revolution!" />
        <meta property="og:image" content="/images/banner.webp" />
        <meta property="og:title" content="LEKO ($LEKO) Token" />
        <meta property="og:description" content="Join the wildest meme coin movement!" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <ThemeToggle />
        <Image src="/images/banner.webp" alt="LEKO Banner" width={600} height={300} className="mb-4 w-full max-w-lg rounded-xl shadow-lg" />
        <Image src="/images/meme-leopard-gecko.webp" alt="Meme Leopard" width={500} height={300} className="mb-6 w-full max-w-md rounded-lg shadow-lg" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 animate-pulse text-center text-yellow-400 drop-shadow-lg">LEKO ($LEKO) Token</h1>
        <p className="text-lg sm:text-xl max-w-2xl text-center mb-8 leading-relaxed text-gray-300">
          The wildest meme coin inspired by the power of the leopard. Join the revolution and embrace the future of $LEKO!
        </p>
      </div>
{/* DEX 거래소 아이콘 링크 */}
<div className="flex justify-center gap-6 mt-8">
  {dexLinks.map((dex) => (
    <a 
      key={dex.name} 
      href={dex.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex flex-col items-center transition-transform hover:scale-110"
    >
      <Image 
        src={dex.icon} 
        alt={dex.name} 
        width={50} 
        height={50} 
        className="rounded-lg shadow-md"
      />
      <span className="text-sm text-gray-300 mt-2">{dex.name}</span>
    </a>
  ))}
</div>

      {/* Roadmap Section */}
      <div className="max-w-3xl w-full mt-16 flex flex-col items-center mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Roadmap</h2>
        {roadmap.map((item, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-6 bg-gray-700 hover:bg-gray-600 transition-all mb-4 w-full shadow-md">
            <h3 className="text-xl font-semibold text-white">{item.phase}: {item.title}</h3>
            <p className="text-gray-300 mt-2">{item.details}</p>
          </div>
        ))}
      </div>
{/* DEX 거래소 섹션 */}
<div className="max-w-3xl w-full mt-16 flex flex-col items-center mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
  <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Trade $LEKO on DEX</h2>
  <p className="text-gray-300 text-center mb-4">Buy and trade $LEKO on the best decentralized exchanges.</p>
  
  {/* 버튼 형식 */}
  <div className="flex justify-center gap-4">
    {dexLinks.map((dex) => (
      <a 
        key={dex.name} 
        href={dex.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
      >
        {dex.name}
      </a>
    ))}
  </div>

  {/* 아이콘 형식 */}
  <div className="flex justify-center gap-6 mt-6">
    {dexLinks.map((dex) => (
      <a 
        key={dex.name} 
        href={dex.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex flex-col items-center transition-transform hover:scale-110"
      >
        <Image 
          src={dex.icon} 
          alt={dex.name} 
          width={50} 
          height={50} 
          className="rounded-lg shadow-md"
        />
        <span className="text-sm text-gray-300 mt-2">{dex.name}</span>
      </a>
    ))}
  </div>
</div>

      {/* Blog Section */}
      <div className="max-w-3xl w-full mt-16 flex flex-col items-center mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Latest Blog Posts</h2>
        {blogPosts.map((post) => (
          <div key={post.id} className="border border-gray-600 rounded-lg p-6 bg-gray-700 hover:bg-gray-600 transition-all mb-4 w-full shadow-md">
            <Link href={`/blog/${post.id}`}>
              <h3 className="text-xl font-semibold text-white cursor-pointer hover:underline">{post.title}</h3>
            </Link>
            <p className="text-gray-300 mt-2">{post.description}</p>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
        ))}
      </div>
{/* FAQ Section */}
<div className="max-w-2xl w-full mt-16 flex flex-col items-center mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
    <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Frequently Asked Questions</h2>
    {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-600 rounded-lg p-6 bg-gray-700 hover:bg-gray-600 transition-all mb-4 w-full shadow-md cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <span>{openIndex === index ? "➖" : "➕"}</span>
            </div>
            {openIndex === index && <p className="text-gray-300 mt-2">{faq.answer}</p>}
        </div>
    ))}
</div>
{/* 소셜 미디어 섹션 (FAQ 아래에 위치) */}
<div className="flex flex-col items-center mt-16 mx-auto bg-gray-800 p-6 rounded-xl shadow-lg max-w-lg">
    <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">Join Our Community</h2>
    <div className="flex justify-center gap-8 mt-4">
        {socialLinks.map((social) => (
            <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center transition-transform hover:scale-110"
            >
                <Image 
                    src={social.icon} 
                    alt={social.name} 
                    width={50} 
                    height={50} 
                    className="rounded-full shadow-lg"
                />
                <span className="text-sm text-gray-300 mt-2">{social.name}</span>
            </a>
        ))}
    </div>
    {/* 춤추는 레오파드게코 추가 */}
          <DancingGecko />

</div>
    </>
  );
}
