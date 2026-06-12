import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suresh Chelani | Build with suresh!',
  description: 'Portfolio website of Suresh Chelani',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="vanta-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const htmlElement = document.documentElement;
                let vantaEffect = null;

                const initializeVanta = () => {
                  const target = document.querySelector('#vanta-bg');
                  if (!target) {
                    return;
                  }
                  if (!window.VANTA || !window.VANTA.CLOUDS || vantaEffect) {
                    return;
                  }
                  vantaEffect = window.VANTA.CLOUDS({
                    el: target,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    skyColor: 0x39819d,
                    cloudColor: 0x286e,
                    cloudShadowColor: 0xa2139,
                  });
                };

                const initializeVantaLight = () => {
                  const target = document.querySelector('#vanta-bg');
                  if (!target) {
                    return;
                  }
                  if (!window.VANTA || !window.VANTA.CLOUDS || vantaEffect) {
                    return;
                  }
                  vantaEffect = window.VANTA.CLOUDS({
                    el: target,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                  });
                };

                const destroyVanta = () => {
                  if (!vantaEffect) {
                    return;
                  }
                  vantaEffect.destroy();
                  vantaEffect = null;
                };

                const updateByTheme = () => {
                  destroyVanta();
                  if (htmlElement.classList.contains('dark')) {
                    initializeVanta();
                  } else {
                    initializeVantaLight();
                  }
                };

                const observer = new MutationObserver(updateByTheme);
                observer.observe(htmlElement, {
                  attributes: true,
                  attributeFilter: ['class'],
                });

                const waitForVanta = setInterval(() => {
                  if (window.VANTA && window.VANTA.CLOUDS) {
                    clearInterval(waitForVanta);
                    updateByTheme();
                  }
                }, 100);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}