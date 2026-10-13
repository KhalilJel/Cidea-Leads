import React from "react";
import { blogPage, ui } from "../content.js";
import { getArticle } from "../articles.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { ArticleRows, CtaBand, Label } from "../components/Blocks.jsx";
import { Markdown } from "../markdown.jsx";

export function BlogIndex({ lang }) {
  const b = blogPage[lang];
  const t = ui[lang];
  return (
    <>
      <section className="pageHero" aria-labelledby="page-title">
        <div className="wrap">
          <Label>{t.insights}</Label>
          <h1 className="display" id="page-title">
            {b.title}
          </h1>
          <p className="lead">{b.lead}</p>
        </div>
      </section>
      <section className="section flushTop">
        <div className="wrap">
          <ArticleRows lang={lang} headingLevel={2} />
        </div>
      </section>
      <CtaBand lang={lang} title={b.ctaTitle} body={b.ctaBody} />
    </>
  );
}

export function Article({ lang, slug }) {
  const a = getArticle(lang, slug);
  const b = blogPage[lang];
  const t = ui[lang];
  return (
    <>
      <article className="articlePage" aria-labelledby="page-title">
        <div className="wrap narrow">
          <a className="textLink back" href={localize(lang, "/blog")}>
            <Arrow dir="left" /> {t.allArticles}
          </a>
          <Label>
            {t.insights} · {a.minutes} {t.minRead}
          </Label>
          <h1 className="articleTitle" id="page-title">
            {a.title}
          </h1>
          <div className="prose">
            <Markdown source={a.body} lang={lang} />
          </div>
        </div>
      </article>
      <section className="section" aria-labelledby="more-title">
        <div className="wrap narrow">
          <h2 className="h2 sectionHead" id="more-title">
            {t.insights}
          </h2>
          <ArticleRows lang={lang} exclude={slug} />
        </div>
      </section>
      <CtaBand lang={lang} title={b.ctaTitle} body={b.ctaBody} />
    </>
  );
}
