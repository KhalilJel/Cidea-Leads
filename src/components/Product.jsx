import React from "react";
import { sample, ui } from "../content.js";

// Product-style UI used as imagery (the Linear approach: the product is the
// visual). Everything here is fictional example data and is labelled as such.

const statusClass = { q: "isQualified", r: "isReview", n: "isNew", d: "isDone" };

export function Status({ code, children }) {
  return (
    <span className={"status " + statusClass[code]}>
      <i aria-hidden="true" />
      {children}
    </span>
  );
}

function ExampleTag({ lang }) {
  return <span className="exampleTag mono">{ui[lang].example}</span>;
}

export function AppWindow({ lang, active = 1, children, title }) {
  const s = sample[lang];
  return (
    <div className="appWindow">
      <aside className="appSide" aria-hidden="true">
        <div className="appBrand">
          <span className="appDot" /> {s.app}
        </div>
        {s.nav.map((item, i) => (
          <span key={item} className={"appNav" + (i === active ? " active" : "")}>
            {item}
          </span>
        ))}
      </aside>
      <div className="appMain">
        <div className="appBar">
          <span className="appCrumb">
            {s.nav[active]} <b>/</b> {title || s.market}
          </span>
          <ExampleTag lang={lang} />
        </div>
        {children}
      </div>
    </div>
  );
}

export function PipelineTable({ lang }) {
  const s = sample[lang];
  return (
    <div className="tableScroll" tabIndex={0} role="region" aria-label={`${ui[lang].example}: ${s.market}`}>
      <table className="pipeline">
        <caption className="srOnly">
          {ui[lang].example}: {s.market}
        </caption>
        <thead>
          <tr>
            {s.columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {s.rows.map(([id, company, industry, region, fit, status, code]) => (
            <tr key={id}>
              <td className="mono id">{id}</td>
              <th scope="row">{company}</th>
              <td>{industry}</td>
              <td>{region}</td>
              <td>
                <span className="fit">
                  <span className="fitBar">
                    <span style={{ width: fit + "%" }} />
                  </span>
                  <span className="mono">{fit}</span>
                </span>
              </td>
              <td>
                <Status code={code}>{status}</Status>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Board({ lang }) {
  const s = sample[lang];
  return (
    <div className="board" role="list" aria-label={ui[lang].example}>
      {s.board.map(([name, code, cards]) => (
        <div className="boardCol" key={name} role="listitem">
          <div className="boardHead">
            <Status code={code}>{name}</Status>
            <span className="mono count">{cards.length}</span>
          </div>
          <ul>
            {cards.map(([id, note]) => (
              <li key={id} className="boardCard">
                <span className="mono id">{id}</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function RecordPanel({ lang }) {
  const r = sample[lang].record;
  return (
    <div className="record">
      <div className="recordHead">
        <span className="mono id">{r.id}</span>
        <Status code="q">{r.status}</Status>
        <ExampleTag lang={lang} />
      </div>
      <p className="recordTitle">{r.company}</p>
      <dl className="props">
        {r.fields.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function CriteriaPanel({ lang }) {
  const c = sample[lang].criteria;
  return (
    <div className="record criteria">
      <div className="recordHead">
        <span className="mono id">ICP</span>
        <ExampleTag lang={lang} />
      </div>
      <ul className="filters">
        {c.map(([k, v]) => (
          <li key={k}>
            <span className="filterKey">{k}</span>
            <span className="filterOp mono">{lang === "en" ? "is" : "er"}</span>
            <span className="filterVal">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Visual({ kind, lang }) {
  if (kind === "pipeline")
    return (
      <AppWindow lang={lang}>
        <PipelineTable lang={lang} />
      </AppWindow>
    );
  if (kind === "board")
    return (
      <AppWindow lang={lang} active={2}>
        <Board lang={lang} />
      </AppWindow>
    );
  if (kind === "record") return <RecordPanel lang={lang} />;
  return <CriteriaPanel lang={lang} />;
}
