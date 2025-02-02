"use client";

import { useWallet, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

export default function Wallet() {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  const { publicKey } = useWallet();

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <div className="flex flex-col items-center p-4">
        <WalletMultiButton />
        {publicKey && <p className="mt-2 text-green-500">Connected: {publicKey.toBase58()}</p>}
      </div>
    </WalletProvider>
  );
}
