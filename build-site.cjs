const fs = require("node:fs");
const path = require("node:path");
const { pages, aliases, serviceGroups, contact } = require("./site-data.cjs");

const root = __dirname;
const pageByPath = new Map(pages.map((page) => [page.path, page]));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function outputFile(pagePath) {
  return pagePath ? path.join(root, pagePath, "index.html") : path.join(root, "index.html");
}

function prefixFor(pagePath) {
  const dir = path.dirname(outputFile(pagePath));
  const relative = path.relative(dir, root).replace(/\\/g, "/");
  return relative === "" ? "" : `${relative}/`;
}

function resolvePath(key) {
  if (key === "index") return "";
  return aliases[key] ?? key;
}

function linkTo(fromPath, targetKey, label, className = "") {
  if (targetKey === "kontakt") {
    return `<a${className ? ` class="${className}"` : ""} href="${prefixFor(fromPath)}kontakt/index.html">${escapeHtml(label)}</a>`;
  }

  const targetPath = resolvePath(targetKey);
  const href = `${prefixFor(fromPath)}${targetPath ? `${targetPath}/index.html` : "index.html"}`;

  return `<a${className ? ` class="${className}"` : ""} href="${href}">${escapeHtml(label)}</a>`;
}

function cssPath(fromPath) {
  return `${prefixFor(fromPath)}styles.css`;
}

function scriptPath(fromPath) {
  return `${prefixFor(fromPath)}script.js`;
}

function imagePath(fromPath, image) {
  return `${prefixFor(fromPath)}assets/${image}`;
}

function pageLink(fromPath, page) {
  return `${prefixFor(fromPath)}${page.path ? `${page.path}/index.html` : "index.html"}`;
}

function pageForKey(key) {
  if (key === "kontakt") {
    return {
      path: "kontakt",
      title: "Kontakt",
      eyebrow: "Rezervacija",
      intro: "Kontaktirajte Quantum Health za vprašanja, termin ali izbiro primerne obravnave."
    };
  }

  if (key === "index") {
    return {
      path: "",
      title: "Quantum Health",
      eyebrow: "Domov",
      intro: "Holistični center za kvantno-integrativno medicino, estetiko in oblikovanje telesa."
    };
  }

  return pageByPath.get(resolvePath(key));
}

function renderHeader(currentPath) {
  return `
    <header class="site-header" data-header>
      <a class="brand brand-with-logo" href="${prefixFor(currentPath)}index.html" aria-label="Quantum Health">
        <img class="qh-logo-img" src="${prefixFor(currentPath)}assets/Quantum-health-logo.png" alt="Quantum Health">
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
        <span></span><span></span><span></span>
      </button>

      <nav class="site-nav" id="site-nav" data-nav>
        ${linkTo(currentPath, "o-nas", "O meni")}
        ${linkTo(currentPath, "kvantno-integrativna-medicina", "Integrativna medicina")}
        ${linkTo(currentPath, "estetika-in-oblikovanje-telesa", "Estetika")}
        ${linkTo(currentPath, "laserska-epilacija", "Laserska epilacija")}
        ${linkTo(currentPath, "mnenja-strank", "Mnenja")}
        ${linkTo(currentPath, "kontakt", "Kontakt")}
      </nav>

      ${linkTo(currentPath, "kontakt", "Posvet", "header-cta")}
    </header>`;
}

function renderFooter(currentPath) {
  return `
    <footer class="site-footer" id="footer">
      <div>
        <a class="brand footer-brand brand-with-logo" href="${prefixFor(currentPath)}index.html" aria-label="Quantum Health">
          <img class="qh-logo-img qh-footer-logo-img" src="${prefixFor(currentPath)}assets/Quantum-health-logo.png" alt="Quantum Health">
        </a>

        <p>Holistični center za kvantno-integrativno medicino, estetiko in oblikovanje telesa.</p>
      </div>

      <address>
        <strong>Kontakt</strong>
        ${escapeHtml(contact.address)}<br>
        <a href="tel:${escapeHtml(contact.phoneHref)}">${escapeHtml(contact.phone)}</a><br>
        <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>
      </address>

      <div class="footer-links">
        <strong>Podstrani</strong>
        ${linkTo(currentPath, "kvantno-integrativna-medicina", "Kvantno-integrativna medicina")}
        ${linkTo(currentPath, "estetika-in-oblikovanje-telesa", "Estetika in oblikovanje telesa")}
        ${linkTo(currentPath, "laserska-epilacija", "Laserska epilacija")}
        ${linkTo(currentPath, "politika-zasebnosti", "Politika zasebnosti")}
      </div>

      <p class="disclaimer">Informacije na strani so predstavitvene narave in ne nadomeščajo osebnega posveta ali zdravniškega nasveta.</p>
    </footer>`;
}

function renderShell(pagePath, title, description, main) {
  const documentTitle = title === "Quantum Health" ? "Quantum Health" : `${title} | Quantum Health`;

  return `<!doctype html>
<html lang="sl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <title>${escapeHtml(documentTitle)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${cssPath(pagePath)}">
  </head>
  <body class="${pagePath ? "inner" : "home"}">
    ${renderHeader(pagePath)}
    ${main}
    ${renderFooter(pagePath)}
    <script src="${scriptPath(pagePath)}"></script>
  </body>
</html>
`;
}

function renderPageCards(fromPath, keys) {
  return `<div class="card-grid">
    ${keys.map((key) => {
      const item = pageForKey(key);

      return `<article class="link-card">
        <span>${escapeHtml(item.eyebrow)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.intro)}</p>
        <a href="${pageLink(fromPath, item)}" aria-label="${escapeHtml(item.title)}">Preberi več</a>
      </article>`;
    }).join("")}
  </div>`;
}

function renderServiceRows(fromPath, keys) {
  return `<div class="service-rows">
    ${keys.map((key, index) => {
      const item = pageForKey(key);
      const intro = item.intro.length > 170 ? `${item.intro.slice(0, 167)}...` : item.intro;

      return `<a class="service-row" href="${pageLink(fromPath, item)}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <em>${escapeHtml(intro)}</em>
      </a>`;
    }).join("")}
  </div>`;
}

function renderPathway(fromPath, group, image, index) {
  const featured = group.items.slice(0, 4);

  return `<article class="pathway-card">
    <div class="pathway-media">
      <img src="${imagePath(fromPath, image)}" alt="${escapeHtml(group.title)}">
    </div>

    <div class="pathway-copy">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(group.title)}</h3>
      <p>${escapeHtml(group.intro)}</p>

      <div class="pathway-links">
        ${featured.map((key) => linkTo(fromPath, key, pageForKey(key).title)).join("")}
      </div>

      ${linkTo(fromPath, group.path, "Poglej vse storitve", "button button-dark")}
    </div>
  </article>`;
}

function renderSections(page) {
  return page.sections.map((section) => `
    <section class="content-section">
      <div class="section-heading align-left">
        <p class="eyebrow">Quantum Health</p>
        <h2>${escapeHtml(section.heading)}</h2>
      </div>

      <div class="prose">
        ${(section.paragraphs ?? []).map((text) => `<p>${escapeHtml(text)}</p>`).join("")}

        ${section.bullets ? `<ul class="check-list">${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
      </div>
    </section>`).join("");
}

function renderContactBlock(pagePath) {
  return `
    <section class="consultation" id="posvet">
      <div class="consultation-copy">
        <p class="eyebrow">Prijava</p>
        <h2>Rezervacija za osebno obravnavo</h2>
        <p>Pošljite osnovne podatke in kratek opis želje. Obrazec je pripravljen za povezavo z e-poštnim ali CRM sistemom.</p>

        <div class="contact-mini">
          <a href="tel:${escapeHtml(contact.phoneHref)}">${escapeHtml(contact.phone)}</a>
          <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>
        </div>
      </div>

      <form class="contact-form" data-contact-form>
        <label>Ime in priimek<input type="text" name="name" autocomplete="name" required></label>
        <label>E-pošta<input type="email" name="email" autocomplete="email" required></label>
        <label>Telefon<input type="tel" name="phone" autocomplete="tel"></label>

        <label>Področje zanimanja
          <select name="interest">
            <option>Kvantno-integrativna medicina</option>
            <option>Estetika in oblikovanje telesa</option>
            <option>Laserska epilacija</option>
            <option>DermaClear</option>
            <option>Integrativni wellness</option>
          </select>
        </label>

        <label class="full">Sporočilo<textarea name="message" rows="5"></textarea></label>

        <button class="button button-dark full" type="submit">Oddaj povpraševanje</button>
        <p class="form-note" role="status" aria-live="polite" data-form-note></p>
      </form>
    </section>`;
}

function renderHome() {
  const main = `<main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-image" src="${imagePath("", "hero-treatment-room.png")}" alt="Mirna terapevtska soba s svetlo opremo in naravnimi materiali">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <p class="eyebrow">Holistični center v Ljubljani</p>
        <h1 id="hero-title">Quantum Health</h1>
        <p class="hero-copy">Zavest, kvantna fizika in biologija življenja v prostoru za celostno obravnavo telesa, uma, kože in vitalnosti.</p>

        <div class="hero-actions">
          ${linkTo("", "kontakt", "Rezerviraj posvet", "button button-dark")}
          ${linkTo("", "kvantno-integrativna-medicina", "Integrativna medicina", "button button-light")}
        </div>
      </div>

      <a class="hero-scroll" href="#storitve" aria-label="Premik na storitve">Scroll</a>
    </section>

    <section class="intro-strip" id="storitve" aria-label="Ključne storitve">
      ${serviceGroups.map((group, index) => `<div>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h2>${escapeHtml(group.title)}</h2>
        <p>${escapeHtml(group.intro)}</p>
        ${linkTo("", group.path, "Ogled področja", "text-link small-link")}
      </div>`).join("")}

      <div>
        <span>03</span>
        <h2>Osebni posvet</h2>
        <p>Prvi korak je pogovor, kjer se izbere najprimernejša pot obravnave glede na cilje, navade in trenutno stanje.</p>
        ${linkTo("", "kontakt", "Kontakt", "text-link small-link")}
      </div>
    </section>

    <section class="pathways">
      <div class="pathways-heading">
        <p class="eyebrow">Izberi smer</p>
        <h2>Dve glavni poti, ena celostna izkušnja.</h2>
        <p>Vsebina je razdeljena tako, da uporabnik hitro razume razliko med integrativno podporo in estetskimi storitvami, brez nepotrebnega vizualnega hrupa.</p>
      </div>

      ${renderPathway("", serviceGroups[0], "integrative-room.png", 0)}
      ${renderPathway("", serviceGroups[1], "aesthetic-device.png", 1)}
    </section>

    <section class="split-section">
      <div class="split-image">
        <img src="${imagePath("", "wellness-detail.png")}" alt="Wellness detajl s stekleničkami, kamni in svežimi brisačami">
      </div>

      <div class="split-copy">
        <p class="eyebrow">The Quantum Doctor</p>
        <h2>Dr. Milenca Omerzu Pevec, DNM, Ph.D</h2>
        <p>Quantum Health povezuje kvantno-integrativno medicino, orientalsko zdravstveno modrost, podporne wellness pristope in estetske storitve za obraz in telo.</p>

        <dl class="detail-list">
          <div><dt>Fokus</dt><dd>Celostno zdravje, vitalnost, koža, telo in življenjske navade.</dd></div>
          <div><dt>Lokacija</dt><dd>${escapeHtml(contact.address)}.</dd></div>
          <div><dt>Kontakt</dt><dd>${escapeHtml(contact.phone)} · ${escapeHtml(contact.email)}</dd></div>
        </dl>
      </div>
    </section>

    <section class="quiet-overview">
      <div>
        <p class="eyebrow">Vsebine</p>
        <h2>Vse podstrani ostanejo dostopne, samo predstavljene so bolj umirjeno.</h2>
      </div>

      <div class="quiet-links">
        ${linkTo("", "o-nas", "O meni")}
        ${linkTo("", "mnenja-strank", "Mnenja strank")}
        ${linkTo("", "laserska-epilacija", "Laserska epilacija")}
        ${linkTo("", "politika-zasebnosti", "Politika zasebnosti")}
      </div>
    </section>

    ${renderContactBlock("")}
  </main>`;

  return renderShell(
    "",
    "Quantum Health",
    "Quantum Health - holistični center za kvantno-integrativno medicino, estetiko in oblikovanje telesa v Ljubljani.",
    main
  );
}

function renderContentPage(page) {
  const pagePath = page.path;
  const childKeys = page.children ?? [];
  const related = page.related ?? [];

  const main = `<main id="top">
    <section class="page-hero">
      <img src="${imagePath(pagePath, page.image)}" alt="${escapeHtml(page.imageAlt)}">
      <div class="page-hero-overlay"></div>

      <div class="page-hero-copy">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.intro)}</p>
      </div>
    </section>

    <section class="page-intro">
      <div>
        <p class="eyebrow">Quantum Health</p>
        <h2>${escapeHtml(page.title)}</h2>
      </div>

      <p>${escapeHtml(page.intro)}</p>
    </section>

    ${page.facts ? `<section class="fact-strip">${page.facts.map((fact) => `<div>${escapeHtml(fact)}</div>`).join("")}</section>` : ""}

    ${childKeys.length ? `<section class="section">
      <div class="section-heading align-left">
        <p class="eyebrow">Podstrani</p>
        <h2>Vse povezane vsebine</h2>
      </div>

      ${renderServiceRows(pagePath, childKeys)}
    </section>` : ""}

    ${renderSections(page)}

    ${related.length ? `<section class="section related-section">
      <div class="section-heading">
        <p class="eyebrow">Sorodne vsebine</p>
        <h2>Nadaljuj z branjem</h2>
      </div>

      ${renderPageCards(pagePath, related)}
    </section>` : ""}

    ${renderContactBlock(pagePath)}
  </main>`;

  return renderShell(pagePath, page.title, page.intro, main);
}

function renderContactPage() {
  const pagePath = "kontakt";

  const main = `<main id="top">
    <section class="page-hero compact-hero">
      <img src="${imagePath(pagePath, "hero-treatment-room.png")}" alt="Svetel tretma prostor Quantum Health">
      <div class="page-hero-overlay"></div>

      <div class="page-hero-copy">
        <p class="eyebrow">Kontakt</p>
        <h1>Rezervacija posveta</h1>
        <p>Za vprašanja, termin ali izbor primerne obravnave uporabite spodnji kontaktni obrazec ali neposreden klic.</p>
      </div>
    </section>

    ${renderContactBlock(pagePath)}
  </main>`;

  return renderShell(pagePath, "Kontakt", "Kontakt in rezervacija posveta Quantum Health v Ljubljani.", main);
}

function writePage(pagePath, html) {
  const file = outputFile(pagePath);
  const dir = path.dirname(file);

  fs.mkdirSync(dir, { recursive: true });

  try {
    fs.writeFileSync(file, Buffer.from(html, "utf8"));
  } catch (error) {
    console.error("Napaka pri pisanju fajla:");
    console.error(file);
    console.error("Zapri index.html / Live Server / browser preview, potem zaženi še enkrat.");
    throw error;
  }
}

writePage("", renderHome());

for (const page of pages) {
  writePage(page.path, renderContentPage(page));
}

writePage("kontakt", renderContactPage());

console.log(`Generated ${pages.length + 2} pages.`);