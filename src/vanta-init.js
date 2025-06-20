document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.querySelector("html");
  let vantaEffect = null;

  const initializeVanta = () => {
    if (!vantaEffect && window.VANTA) {
      vantaEffect = window.VANTA.CLOUDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        skyColor: 0x39819d,
        cloudColor: 0x286e,
        cloudShadowColor: 0xa2139,
      });
    }
  };

  const initializeVantaL = () => {
    if (!vantaEffect && window.VANTA) {
      vantaEffect = window.VANTA.CLOUDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
      });
    }
  };

  const destroyVanta = () => {
    if (vantaEffect) {
      vantaEffect.destroy();
      vantaEffect = null;
    }
  };

  if (htmlElement) {
    const observer = new MutationObserver(() => {
      if (htmlElement.classList.contains("dark")) {
        destroyVanta();
        initializeVanta();
      } else {
        destroyVanta();
        initializeVantaL();
      }
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    if (htmlElement.classList.contains("dark")) {
      initializeVanta();
    } else {
      initializeVantaL();
    }
  }
}); 