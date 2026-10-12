import React from "react";
import { home, ui } from "../content.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { AppWindow, Board, PipelineTable, RecordPanel } from "../components/Product.jsx";
import { ArticleRows, CtaBand, Plans, SectionHead, ServiceList } from "../components/Blocks.jsx";

export function Home({ lang }) {
  const h = home[lang];
  const t = ui[lang];
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="heroTop">
            <h1 className="display" id="hero-title">
              {h.title}
            </h1>
            <div className="heroSide">
              <p className="lead">{h.lead}</p>
              <div className="actions">
                <a className="button primary" href={localize(lang, "/contact")}>
                  {t.cta} <Arrow />
                </a>
                <a className="textLink" href={localize(lang, "/how-it-works")}>
                  {h.secondary} <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="heroShot">
          <div className="wrap wide">
            <AppWindow lang={lang}>
              <PipelineTable lang={lang} />
            </AppWindow>
          </div>
        </div>
      </section>

      <section className="criteriaStrip" aria-label="ICP">
        <div className="wrap">
          <ul>
            {h.criteria.map((c) => (
              <li key={c} className="mono">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-title">
        <div className="wrap split">
          <SectionHead label={h.problemLabel} title={h.problemTitle} body={h.problemBody} id="problem-title" />
          <div className="compare">
            <div className="compareCol">
              <p className="compareHead mono">{h.compare.listLabel}</p>
              <ul>
                {h.compare.list.map((x) => (
                  <li key={x}>
                    <span className="x" aria-hidden="true">
                      –
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compareCol good">
              <p className="compareHead mono">{h.compare.qualLabel}</p>
              <ul>
                {h.compare.qual.map((x) => (
                  <li key={x}>
                    <span className="check" aria-hidden="true">
                      ✓
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="system-title">
        <div className="wrap">
          <SectionHead label={h.systemLabel} title={h.systemTitle} body={h.systemBody} id="system-title" />
          <AppWindow lang={lang} active={2}>
            <Board lang={lang} />
          </AppWindow>
        </div>
      </section>

      <section className="section" aria-labelledby="record-title">
        <div className="wrap split reverse">
          <SectionHead label={h.recordLabel} title={h.recordTitle} body={h.recordBody} id="record-title" />
          <RecordPanel lang={lang} />
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <SectionHead label={h.servicesLabel} title={h.servicesTitle} id="services-title" />
          <ServiceList lang={lang} />
        </div>
      </section>

      <section className="section band" aria-labelledby="measure-title">
        <div className="wrap split">
          <SectionHead label={h.measureLabel} title={h.measureTitle} body={h.measureBody} id="measure-title" />
          <ul className="metrics">
            {h.metrics.map((m) => (
              <li key={m}>
                <span className="metricName">{m}</span>
                <span className="metricValue mono" aria-hidden="true">
                  —
                </span>
              </li>
            ))}
            <li className="metricNote">{h.metricEmpty}</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="markets-title">
        <div className="wrap">
          <SectionHead label={h.marketsLabel} title={h.marketsTitle} id="markets-title" />
          <ul className="markets">
            {h.markets.map((m) => (
              <li key={m}>
                <a href={localize(lang, "/contact")}>
                  <span>{m}</span>
                  <span className="mono">
                    {h.marketCta} <Arrow />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="pricing-title">
        <div className="wrap">
          <SectionHead label={h.pricingLabel} title={h.pricingTitle} id="pricing-title" />
          <Plans lang={lang} />
        </div>
      </section>

      <section className="section" aria-labelledby="insights-title">
        <div className="wrap">
          <div className="headRow">
            <SectionHead label={h.insightsLabel} title={h.insightsTitle} id="insights-title" />
            <a className="textLink" href={localize(lang, "/blog")}>
              {t.allArticles} <Arrow />
            </a>
          </div>
          <ArticleRows lang={lang} />
        </div>
      </section>

      <CtaBand lang={lang} title={h.finalTitle} body={h.finalBody} />
    </>
  );
}
