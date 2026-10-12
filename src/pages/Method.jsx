import React from "react";
import { methodPage, servicePage } from "../content.js";
import { AppWindow, Board } from "../components/Product.jsx";
import { CtaBand, Label, ServiceList } from "../components/Blocks.jsx";

export function Method({ lang }) {
  const m = methodPage[lang];
  const p = servicePage[lang];
  return (
    <>
      <section className="pageHero" aria-labelledby="page-title">
        <div className="wrap">
          <Label>{m.badge}</Label>
          <h1 className="display" id="page-title">
            {m.title}
          </h1>
          <p className="lead">{m.lead}</p>
        </div>
      </section>

      <section className="section flushTop" aria-label={m.badge}>
        <div className="wrap">
          <ol className="phases">
            {m.phases.map(([no, title, text, outputs]) => (
              <li key={no}>
                <span className="mono phaseNo">{no}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
                <ul className="outputs">
                  {outputs.map((o) => (
                    <li key={o}>
                      <span className="check" aria-hidden="true">
                        ✓
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band" aria-label="Pipeline">
        <div className="wrap">
          <AppWindow lang={lang} active={2}>
            <Board lang={lang} />
          </AppWindow>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="wrap">
          <h2 className="h2 sectionHead" id="principles-title">
            {m.principlesTitle}
          </h2>
          <ul className="principles">
            {m.principles.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <h2 className="h2 sectionHead" id="services-title">
            {p.related}
          </h2>
          <ServiceList lang={lang} />
        </div>
      </section>

      <CtaBand lang={lang} title={p.nextTitle} body={p.nextBody} />
    </>
  );
}
