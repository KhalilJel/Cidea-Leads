import React from "react";
import { services, ui, plans } from "../content.js";
import { listArticles } from "../articles.js";
import { localize } from "../routes.js";
import { Arrow } from "./Layout.jsx";

export function Label({ children }) {
  return (
    <p className="label">
      <i aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHead({ label, title, body, id }) {
  return (
    <div className="sectionHead">
      {label && <Label>{label}</Label>}
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {body && <p className="sectionBody">{body}</p>}
    </div>
  );
}

export function ServiceList({ lang, exclude, headingLevel = 3 }) {
  const t = ui[lang];
  const Tag = "h" + headingLevel;
  return (
    <ul className="serviceList">
      {services
        .filter((s) => s.key !== exclude)
        .map((s) => {
          const c = s[lang];
          return (
            <li key={s.key}>
              <a href={localize(lang, "/" + s.key)}>
                <span className="badge mono">{c.badge}</span>
                <Tag>{c.name}</Tag>
                <p>{c.summary}</p>
                <span className="serviceFoot">
                  <span className="price">{c.price}</span>
                  <span className="more">
                    {t.readMore} <Arrow />
                  </span>
                </span>
              </a>
            </li>
          );
        })}
    </ul>
  );
}

export function Plans({ lang }) {
  const t = ui[lang];
  return (
    <ul className="plans">
      {plans[lang].map((p) => (
        <li key={p.name} className={p.featured ? "featured" : undefined}>
          <h3>{p.name}</h3>
          <p className="planPrice">
            {p.price} {p.unit && <span>{p.unit}</span>}
          </p>
          <p className="planText">{p.text}</p>
          <a className={p.featured ? "button primary" : "button ghost"} href={localize(lang, p.href)}>
            {t.readMore} <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ArticleRows({ lang, exclude, limit, headingLevel = 3 }) {
  const t = ui[lang];
  const Tag = "h" + headingLevel;
  return (
    <ul className="articleRows">
      {listArticles(lang)
        .filter((a) => a.slug !== exclude)
        .slice(0, limit)
        .map((a) => (
          <li key={a.slug}>
            <a href={localize(lang, "/blog/" + a.slug)}>
              <Tag>{a.title}</Tag>
              <p>{a.intro}</p>
              <span className="mono meta">
                {a.minutes} {t.minRead} <Arrow />
              </span>
            </a>
          </li>
        ))}
    </ul>
  );
}

export function CtaBand({ lang, title, body }) {
  const t = ui[lang];
  return (
    <section className="ctaBand" aria-labelledby="cta-title">
      <div className="wrap ctaInner">
        <div>
          <h2 className="h2" id="cta-title">
            {title}
          </h2>
          <p className="sectionBody">{body}</p>
        </div>
        <div className="ctaActions">
          <a className="button primary" href={localize(lang, "/contact")}>
            {t.cta} <Arrow />
          </a>
          <p className="fineprint">{t.noCost}</p>
        </div>
      </div>
    </section>
  );
}
