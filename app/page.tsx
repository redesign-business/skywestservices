const CTA = "Discuss your property";

export default function Page() {
  return (
    <main>
      <style>{`
        :root { --ink:#162019; --cream:#f3efe5; --rust:#b55231; --sage:#879078; --line:rgba(22,32,25,.18); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:Arial,Helvetica,sans-serif; }
        a { color:inherit; }
        .shell { width:min(1180px,calc(100% - 48px)); margin:auto; }
        .nav { height:92px; display:flex; align-items:center; justify-content:space-between; gap:28px; }
        .logo { width:162px; height:auto; display:block; }
        .links { display:flex; align-items:center; gap:28px; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; }
        .links a { text-decoration:none; }
        .cta { display:inline-flex; justify-content:center; align-items:center; min-height:50px; padding:0 24px; background:var(--rust); color:white; text-decoration:none; text-transform:uppercase; letter-spacing:.1em; font-size:12px; font-weight:800; border:1px solid var(--rust); }
        .cta:hover { background:#913d25; border-color:#913d25; }
        .hero { min-height:720px; position:relative; display:grid; align-items:end; color:white; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .hero:after { content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(10,20,15,.88) 0%,rgba(10,20,15,.53) 50%,rgba(10,20,15,.14) 100%),linear-gradient(0deg,rgba(10,20,15,.58),transparent 55%); }
        .hero-inner { position:relative; z-index:1; padding:100px 0 80px; display:grid; grid-template-columns:3fr 1fr; gap:64px; align-items:end; }
        .eyebrow { margin:0 0 20px; text-transform:uppercase; letter-spacing:.18em; font-size:12px; font-weight:800; }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Georgia,'Times New Roman',serif; font-weight:400; letter-spacing:-.035em; }
        h1 { max-width:850px; margin-bottom:30px; font-size:clamp(56px,7.4vw,104px); line-height:.91; }
        .hero-copy { max-width:620px; margin:0 0 34px; font:20px/1.55 Georgia,serif; color:rgba(255,255,255,.88); }
        .hero-note { border-left:1px solid rgba(255,255,255,.55); padding-left:24px; font-size:13px; line-height:1.65; text-transform:uppercase; letter-spacing:.08em; }
        .proof-bar { background:var(--ink); color:white; }
        .proof-row { display:grid; grid-template-columns:repeat(3,1fr); }
        .proof-chip { padding:26px 30px; border-right:1px solid rgba(255,255,255,.15); display:flex; gap:15px; align-items:center; }
        .proof-chip:first-child { border-left:1px solid rgba(255,255,255,.15); }
        .proof-chip strong { font:30px Georgia,serif; color:#d58b6c; }
        .proof-chip span { font-size:12px; line-height:1.45; text-transform:uppercase; letter-spacing:.08em; }
        section { padding:120px 0; }
        .section-head { display:flex; justify-content:space-between; align-items:end; gap:30px; margin-bottom:50px; }
        .section-head h2 { max-width:720px; margin:0; font-size:clamp(42px,5vw,70px); line-height:1; }
        .section-head p { max-width:370px; margin:0; line-height:1.7; color:#526057; }
        .services { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .service { min-height:500px; position:relative; overflow:hidden; color:white; display:flex; align-items:end; }
        .service img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .5s; }
        .service:hover img { transform:scale(1.025); }
        .service:after { content:""; position:absolute; inset:0; background:linear-gradient(0deg,rgba(10,20,15,.88),rgba(10,20,15,.02) 70%); }
        .service-copy { position:relative; z-index:1; padding:32px; }
        .service small { text-transform:uppercase; letter-spacing:.15em; }
        .service h3 { margin:10px 0 9px; font:34px/1.05 Georgia,serif; }
        .service p { margin:0; line-height:1.55; color:rgba(255,255,255,.78); }
        .case { background:#d9d4c7; }
        .case-grid { display:grid; grid-template-columns:1.1fr .9fr; min-height:640px; }
        .case-media { position:relative; }
        .case-media img { width:100%; height:100%; object-fit:cover; display:block; }
        .stamp { position:absolute; right:-44px; top:42px; width:126px; height:126px; border-radius:50%; background:var(--rust); color:white; display:grid; place-content:center; text-align:center; font:700 13px/1.35 Arial,sans-serif; letter-spacing:.08em; text-transform:uppercase; transform:rotate(7deg); }
        .case-copy { padding:72px 40px 72px 86px; align-self:center; }
        .case-copy h2 { margin-bottom:26px; font-size:clamp(45px,5vw,74px); line-height:.95; }
        .case-copy .lead { font:20px/1.55 Georgia,serif; }
        .case-copy p { line-height:1.7; color:#475249; }
        .case-list { margin:34px 0 0; padding:0; list-style:none; border-top:1px solid var(--line); }
        .case-list li { padding:18px 0; border-bottom:1px solid var(--line); display:flex; justify-content:space-between; gap:20px; font-size:13px; text-transform:uppercase; letter-spacing:.08em; }
        .review-grid { display:grid; grid-template-columns:.82fr 1.18fr; gap:72px; align-items:stretch; }
        .review-grid img { width:100%; height:100%; min-height:570px; object-fit:cover; }
        .quote { padding:65px 0; display:flex; flex-direction:column; justify-content:center; }
        .stars { color:var(--rust); font-size:23px; letter-spacing:.18em; }
        blockquote { margin:30px 0; font:clamp(32px,4vw,55px)/1.14 Georgia,serif; letter-spacing:-.025em; }
        .attribution { border-top:1px solid var(--line); padding-top:22px; text-transform:uppercase; letter-spacing:.1em; font-size:12px; line-height:1.6; }
        .licenses { background:var(--ink); color:white; }
        .license-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:90px; align-items:center; }
        .license-grid img { width:100%; max-height:510px; object-fit:cover; filter:saturate(.7); }
        .license-grid h2 { font-size:clamp(46px,5vw,72px); line-height:.98; margin-bottom:25px; }
        .license-grid .intro { color:rgba(255,255,255,.7); line-height:1.7; }
        .license-table { margin:38px 0; }
        .license-item { display:grid; grid-template-columns:1fr auto; gap:20px; padding:18px 0; border-top:1px solid rgba(255,255,255,.17); font-size:13px; }
        .license-item:last-child { border-bottom:1px solid rgba(255,255,255,.17); }
        .license-item span:last-child { color:#d58b6c; font-weight:700; }
        .faq-grid { display:grid; grid-template-columns:.7fr 1.3fr; gap:80px; }
        .faq-intro img { width:100%; height:320px; object-fit:cover; margin-bottom:30px; }
        .faq-intro h2 { font-size:56px; line-height:1; }
        details { border-top:1px solid var(--line); padding:24px 0; }
        details:last-child { border-bottom:1px solid var(--line); }
        summary { cursor:pointer; list-style:none; font:24px Georgia,serif; display:flex; justify-content:space-between; gap:20px; }
        summary:after { content:"+"; color:var(--rust); }
        details[open] summary:after { content:"−"; }
        details p { margin:18px 50px 0 0; line-height:1.7; color:#526057; }
        .final { padding:0; position:relative; min-height:620px; display:grid; place-items:center; text-align:center; color:white; }
        .final img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .final:after { content:""; position:absolute; inset:0; background:rgba(16,29,21,.72); }
        .final-copy { position:relative; z-index:1; max-width:800px; padding:90px 24px; }
        .final h2 { font-size:clamp(50px,7vw,92px); line-height:.95; margin-bottom:25px; }
        .final p { max-width:600px; margin:0 auto 32px; font:19px/1.6 Georgia,serif; color:rgba(255,255,255,.8); }
        footer { background:#0d1510; color:rgba(255,255,255,.7); padding:60px 0 28px; }
        .footer-grid { display:grid; grid-template-columns:1.3fr 1fr 1fr; gap:60px; padding-bottom:50px; }
        .footer-grid img { width:180px; margin-bottom:20px; }
        .footer-grid h3 { color:white; text-transform:uppercase; letter-spacing:.12em; font:700 12px Arial,sans-serif; }
        .footer-grid p,.footer-grid a { font-size:13px; line-height:1.8; }
        .legal { border-top:1px solid rgba(255,255,255,.12); padding-top:25px; display:flex; justify-content:space-between; font-size:11px; text-transform:uppercase; letter-spacing:.08em; }
        @media(max-width:800px){
          .shell { width:min(100% - 30px,1180px); }
          .nav { height:76px; }.logo{width:130px}.links a:not(.cta){display:none}.cta{padding:0 15px;min-height:44px}
          .hero{min-height:680px}.hero-inner{grid-template-columns:1fr;padding:85px 0 55px}.hero-note{display:none}h1{font-size:55px}
          .proof-row,.services,.case-grid,.review-grid,.license-grid,.faq-grid,.footer-grid{grid-template-columns:1fr}
          .proof-chip{border-right:0;border-bottom:1px solid rgba(255,255,255,.15);padding:18px 8px}.proof-chip:first-child{border-left:0}
          section{padding:80px 0}.section-head{display:block}.section-head p{margin-top:22px}.services{gap:12px}.service{min-height:420px}
          .case-media{min-height:430px}.stamp{right:15px}.case-copy{padding:55px 25px}.review-grid{gap:25px}.review-grid img{min-height:400px}.quote{padding:20px 0}
          .license-grid{gap:45px}.faq-grid{gap:40px}.final{min-height:560px}.footer-grid{gap:30px}.legal{display:block;line-height:1.8}
        }
      `}</style>

      <nav className="shell nav" aria-label="Primary navigation">
        <a href="#top" aria-label="Sky West home"><img className="logo" src="/images/logo-small-ac8013e6a1.png" alt="Sky West Real Estate Services" /></a>
        <div className="links">
          <a href="#services">Services</a><a href="#work">Our work</a><a href="#about">About</a><a href="#faq">FAQ</a>
          <a className="cta" href="mailto:jeff@skywestservices.com">{CTA}</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <img className="hero-bg" src="/images/slide-1-1ed29f29ac.jpg" alt="Commercial development in Northern Nevada" />
        <div className="shell hero-inner">
          <div>
            <p className="eyebrow">Operating in the heart of the West</p>
            <h1>Real estate built around the whole opportunity.</h1>
            <p className="hero-copy">From site selection and brokerage to construction and management, Sky West brings commercial property decisions under one experienced roof.</p>
            <a className="cta" href="mailto:jeff@skywestservices.com">{CTA}</a>
          </div>
          <p className="hero-note">Reno-based<br />Serving Nevada &amp; California<br />Established 2004</p>
        </div>
      </header>

      <div className="proof-bar">
        <div className="shell proof-row">
          <div className="proof-chip"><strong>20+</strong><span>Years of active success<br />at The Dunes</span></div>
          <div className="proof-chip"><strong>5.0</strong><span>Every published client<br />review is five stars</span></div>
          <div className="proof-chip"><strong>4</strong><span>Broker, property management<br />and contractor licenses</span></div>
        </div>
      </div>

      <section id="services">
        <div className="shell">
          <div className="section-head">
            <div><p className="eyebrow">One accountable team</p><h2>Strategy, dirt and everything between.</h2></div>
            <p>Commercial real estate works better when the people finding the opportunity understand what it takes to build and operate it.</p>
          </div>
          <div className="services">
            <article className="service"><img src="/images/slide-2-53d2357332.jpg" alt="Commercial real estate brokerage" /><div className="service-copy"><small>01 / Advise</small><h3>Buy, sell &amp; lease</h3><p>Market knowledge and representation shaped around the business behind the property.</p></div></article>
            <article className="service"><img src="/images/slide-3-9178873607.jpg" alt="Commercial real estate investment" /><div className="service-copy"><small>02 / Create</small><h3>Develop &amp; build</h3><p>Ground-up development, tenant improvements and construction management through Biltmore Construction.</p></div></article>
            <article className="service"><img src="/images/cre-cons-blog-cover-1024x683-7d38f8c762.jpg" alt="Commercial construction planning" /><div className="service-copy"><small>03 / Perform</small><h3>Manage &amp; improve</h3><p>Property management informed by an owner’s eye for durable value and operating performance.</p></div></article>
          </div>
        </div>
      </section>

      <section className="case" id="work">
        <div className="shell case-grid">
          <div className="case-media"><img src="/images/preview-bfa0e552ea.jpg" alt="The Dunes Business Park retail center" /><div className="stamp">Ground up<br />2004–2005</div></div>
          <div className="case-copy">
            <p className="eyebrow">Proof in place / La Quinta, CA</p>
            <h2>The Dunes, two decades later.</h2>
            <p className="lead">Sky West transformed raw land near Cook and Washington into a successful inline retail center.</p>
            <p>More than twenty years after completion, The Dunes Business Park remains an active retail hub, home to recognizable businesses including Goodwill, Schlotzsky’s and Floor &amp; Decor.</p>
            <ul className="case-list"><li><span>Scope</span><b>Ground-up development</b></li><li><span>Built</span><b>2004–2005</b></li><li><span>Status</span><b>Active retail hub</b></li></ul>
          </div>
        </div>
      </section>

      <section>
        <div className="shell review-grid">
          <img src="/images/s6-570e202ee8.jpg" alt="Downtown Reno commercial property" />
          <div className="quote">
            <p className="eyebrow">Clients say it best</p><div className="stars" aria-label="Five stars">★★★★★</div>
            <blockquote>“Jeffrey helped our business find and secure a multi-year commercial lease just when we needed it most.”</blockquote>
            <p className="attribution">Michael Tassone<br />Verified five-star client review</p>
          </div>
        </div>
      </section>

      <section className="licenses" id="about">
        <div className="shell license-grid">
          <img src="/images/a3-e4de56125e.jpg" alt="Jeffrey Lowden, founder of Sky West" />
          <div>
            <p className="eyebrow">Licensed for the full picture</p><h2>Advice backed by the ability to execute.</h2>
            <p className="intro">Sky West and subsidiary Biltmore Construction hold the credentials to buy, sell, lease, manage and build across Nevada and California.</p>
            <div className="license-table">
              <div className="license-item"><span>Nevada Broker</span><span>B.0062387.CORP</span></div>
              <div className="license-item"><span>California Broker</span><span>01307836</span></div>
              <div className="license-item"><span>Nevada Property Manager</span><span>PM.0165611.BKR</span></div>
              <div className="license-item"><span>Unlimited General Contractor</span><span>#91008</span></div>
            </div>
            <a className="cta" href="mailto:jeff@skywestservices.com">{CTA}</a>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro"><img src="/images/site-1-98ebf27c60.jpg" alt="Sierra Vista Ranches overlooking Little Washoe Lake" /><p className="eyebrow">Straight answers</p><h2>Before we talk.</h2></div>
          <div>
            <details open><summary>What kinds of commercial real estate do you handle?</summary><p>Sky West works across land, retail, office, industrial, apartments and development opportunities, representing owners, investors and tenants.</p></details>
            <details><summary>Can one team handle the deal and the build?</summary><p>Yes. Sky West provides brokerage, development and property management, while subsidiary Biltmore Construction handles tenant improvements through ground-up construction.</p></details>
            <details><summary>Where does Sky West operate?</summary><p>The firm is based in Reno and licensed for brokerage in Nevada and California, with deep experience throughout Northern Nevada and the western United States.</p></details>
            <details><summary>How long has the company been operating?</summary><p>Sky West was formed in Los Angeles in 2004 and moved to Reno in 2010. Founder Jeffrey Lowden is a Reno native with international business experience and an MBA in Real Estate and Construction Management.</p></details>
          </div>
        </div>
      </section>

      <section className="final">
        <img src="/images/mindengateway-head2-4c641e3971.jpg" alt="Minden Gateway Center commercial development" />
        <div className="final-copy"><p className="eyebrow">Your next move deserves a complete view</p><h2>See the property. See the potential.</h2><p>Bring us the site, the lease, the building or the idea. We’ll help you understand what comes next.</p><a className="cta" href="mailto:jeff@skywestservices.com">{CTA}</a></div>
      </section>

      <footer>
        <div className="shell">
          <div className="footer-grid">
            <div><img src="/images/logo-b722d7923c.png" alt="Sky West Real Estate Services" /><p>Full-service commercial real estate<br />in the heart of the West.</p></div>
            <div><h3>Contact</h3><p>3500 Lakeside Court, Suite 211A<br />Reno, NV 89509<br /><a href="tel:7758276700">(775) 827-6700</a><br /><a href="mailto:jeff@skywestservices.com">jeff@skywestservices.com</a></p></div>
            <div><h3>Hours</h3><p>Monday–Friday: 9:00 AM–5:00 PM<br />Saturday &amp; Sunday: Closed</p></div>
          </div>
          <div className="legal"><span>© 2026 Sky West Real Estate Services, Inc.</span><span>Nevada • California</span></div>
        </div>
      </footer>
    </main>
  );
}
