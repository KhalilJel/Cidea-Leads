import React from "react";
import { notFound, services, ui } from "../content.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { Label } from "../components/Blocks.jsx";

export function NotFound({ lang }) {
  const n = notFound[lang];
  const t = ui[lang];
  const links = [
    [localize(lang, "/"), t.backHome],
    [localize(lang, "/how-it-works"), t.method],
    ...services.map((s) => [localize(lang, "/" + s.key), s[lang].nav]),
    [localize(lang, "/contact"), t.contact],
  ];
  return (
    <section className="pageHero notFound" aria-labelledby="page-title">
      <div className="wrap">
        <Label>{n.badge}</Label>
        <h1 className="display" id="page-title">
          {n.title}
        </h1>
        <p className="lead">{n.body}</p>
        <ul className="notFoundLinks">
          {links.map(([href, label]) => (
            <li key={href}>
              <a className="textLink" href={href}>
                {label} <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
