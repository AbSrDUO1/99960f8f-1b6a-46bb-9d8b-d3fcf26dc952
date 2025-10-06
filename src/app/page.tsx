"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "futuristicAndOutOfBox",
      colorTemplate: 2,
      textAnimation: "slide",
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          className="bg-transparent"
          buttonText="Get Started"
          onButtonClick={() => { /* Your click handler */ }}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Xeven!"
          subtitle="Your gateway to the future of SaaS solutions."
          contractAddress="0x123456..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="Xeven is a cutting-edge SaaS platform designed to empower your business to harness the full potential of the cloud. We offer tailored solutions to meet your specific needs."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Xeven Tokens"
          steps={[
            { title: "Step 1", description: "Set up a crypto wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase Xeven via exchange", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Store your tokens securely", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Understanding Xeven's economy and token distribution"
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "60M", description: "Market Cap" },
            { value: "30%", description: "Team Allocation" },
            { value: "20%", description: "Marketing" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          logoText="Xeven"
          className="bg-transparent"
          columns={[
            { title: "Resources", items: [{ label: "Docs", onClick: () => {} }, { label: "Support", onClick: () => {} }] },
            { title: "Company", items: [{ label: "About", onClick: () => {} }, { label: "Careers", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Forum", onClick: () => {} }, { label: "Discord", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 Xeven. All rights reserved."
          onPrivacyClick={() => { /* Privacy policy handler */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}