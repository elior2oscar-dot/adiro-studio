export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-glow" />
      <div className="hero-browser">
        <div className="hero-browser-bar">
          <span />
          <span />
          <span />
          <div className="hero-browser-url">adirostudio.co.il</div>
        </div>
        <div className="hero-browser-screen">
          <div className="hero-mock-nav">
            <strong>ADIRO</strong>
            <div className="hero-mock-links">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="hero-mock-hero">
            <div className="hero-mock-copy">
              <em />
              <b />
              <b className="short" />
              <s />
            </div>
            <div className="hero-mock-media">
              <div className="hero-mock-brand">
                <div className="hero-mock-brand-glow" />
                <svg
                  className="hero-mock-brand-a"
                  viewBox="0 0 40 40"
                  width="72"
                  height="72"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroAGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#d7e4ff" />
                      <stop offset="100%" stopColor="#6ea8ff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 4 L34 34 H27.4 L24.1 26.2 H15.9 L12.6 34 H6 Z M17.7 21.8 H22.3 L20 16.2 Z"
                    fill="url(#heroAGrad)"
                  />
                </svg>
                <span className="hero-mock-brand-name">ADIRO</span>
              </div>
            </div>
          </div>
          <div className="hero-mock-row">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="hero-float hero-float-a">עיצוב</div>
      <div className="hero-float hero-float-b">פיתוח</div>
      <div className="hero-float hero-float-c">ביצועים</div>
    </div>
  );
}
