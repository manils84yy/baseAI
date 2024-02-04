import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GlobalProvider } from "@/contexts/GlobalContext";
import { PrivyProvider } from "@privy-io/react-auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        loginMethods: ["google", "email"],
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: "http://localhost:3000/vercel.svg",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
          noPromptOnSignature: false,
        },
        walletConnectCloudProjectId: "957c795c4c86e7c46609c0cd4064fa00",
      }}
    >
      <ChakraProvider>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ChakraProvider>
    </PrivyProvider>
  );
}
function configureChains(
  arg0: any[],
  arg1: any[]
): { chains: any; publicClient: any } {
  throw new Error("Function not implemented.");
}
