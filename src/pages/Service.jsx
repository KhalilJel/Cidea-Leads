import React from "react";
import { services, servicePage, ui } from "../content.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { Visual } from "../components/Product.jsx";
import { CtaBand, Label, ServiceList } from "../components/Blocks.jsx";

export function Service({ lang, serviceKey }) {
  const service = services.find((x) => x.key === serviceKey);
  const s = service[lang];
  const p = servicePage[lang];
  const t = ui[lang];
  const wideVisual = service.visual === "pipeline" || service.visual === "board";
  return (
    <>
      <section className="pageHero" aria-labelledby="page-title">
        <div className={"wrap" + (wideVisual ? "" : " heroSplit")}>
          <div>
            <Label>{s.badge}</Label>
            <h1 className="display" id="page-title">
              {s.title}
            </h1>
            <p className="lead">{s.lead}</p>
            <div className="actions">
              <a className="button primary" href={localize(lang, "/contact")}>
                {t.cta} <Arrow />
              </a>
              <span className="priceChip">
                <span className="mono">{p.price}</span> {s.price}
              </span>
            </div>
          </div>
          {!wideVisual && <Visual kind={service.visual} lang={lang} />}
        </div>
        {wideVisual && (
          <div className="heroShot">
            <div className="wrap wide">
              <Visual kind={service.visual} lang={lang} />
            </div>
          </div>
        )}
      </section>

      <section className="section" aria-labelledby="deliverables-title">
        <div className="wrap split">
          <div className="sectionHead">
            <h2 className="h2" id="deliverables-title">
              {p.deliverables}
            </h2>
            <p className="sectionBody">{s.priceNote}</p>
          </div>
          <dl className="specList">
            {s.deliverables.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section band" aria-labelledby="process-title">
        <div className="wrap">
          <h2 className="h2 sectionHead" id="process-title">
            {p.process}
          </h2>
          <ol className="stepRow">
            {s.steps.map(([title, text], i) => (
              <li key={title}>
                <span className="mono phaseNo">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="fit-title">
        <div className="wrap split">
          <h2 className="h2" id="fit-title">
            {p.fit}
          </h2>
          <ul className="fitList">
            {s.fit.map((f) => (
              <li key={f}>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap split">
          <h2 className="h2" id="faq-title">
            {p.faq}
          </h2>
          <div className="faq">
            {s.faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <span>{q}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="wrap">
          <h2 className="h2 sectionHead" id="related-title">
            {p.related}
          </h2>
          <ServiceList lang={lang} exclude={serviceKey} />
        </div>
      </section>

      <CtaBand lang={lang} title={p.nextTitle} body={p.nextBody} />
    </>
  );
}
