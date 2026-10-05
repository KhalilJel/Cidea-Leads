import React,{useEffect,useState}from"react";
import{createRoot}from"react-dom/client";
import"./styles.css";

const articles=[
{slug:"hva-er-leadgenerering",title:"Hva er leadgenerering?",description:"Lær hva leadgenerering er, hvordan prosessen fungerer og hvorfor kvalitet er viktigere enn store kontaktlister.",intro:"Leadgenerering handler om å finne potensielle kunder som faktisk passer virksomheten.",body:"God leadgenerering handler ikke om størst mulig kontaktliste. Målet er å finne relevante bedrifter, kvalifisere dem og gjøre dem klare for et godt salgsarbeid."},
{slug:"hva-er-en-kvalifisert-lead",title:"Hva er en kvalifisert lead?",description:"Se hva som kjennetegner en kvalifisert B2B lead og hvilke kriterier som gjør et prospekt relevant for salget.",intro:"En kvalifisert lead er et prospekt som oppfyller kriteriene som gjør det relevant for salget.",body:"Relevans kan handle om bransje, størrelse, geografi, behov og beslutningstaker. Jo tydeligere kriteriene er, desto mer nyttig blir leadlisten."},
{slug:"hva-er-b2b-leadgenerering",title:"Hva er B2B leadgenerering?",description:"Hva B2B leadgenerering er, hvorfor kvalifisering er viktig og når det kan gi verdi.",intro:"B2B leadgenerering handler om å finne og kvalifisere bedrifter som kan være relevante kunder.",body:"En god prosess kombinerer målgruppe, research og kvalifisering. Resultatet skal være et bedre utgangspunkt for salg, ikke bare flere navn i en database."}
];

const faq=[
["Hva er forskjellen på leads og kvalifiserte leads?","En lead er et mulig prospekt. En kvalifisert lead er vurdert opp mot kriterier som gjør bedriften relevant for målgruppen din."],
["Hvilke bedrifter kan dere finne?","Målgruppen kan defineres etter blant annet bransje, geografi, størrelse, rolle og andre kriterier som er relevante for salget."],
["Kan dere finne leads i Norge?","Ja. Vi kan avgrense researchen til bestemte områder og målgrupper i Norge."],
["Kan dere finne en helt spesifikk målgruppe?","Ja. Vi starter med hvem du ønsker å nå og bygger kriteriene rundt det."],
["Må jeg kjøpe en stor liste?","Nei. Omfanget bør bestemmes av salgsbehovet, ikke av størrelsen på en database."],
["Kan jeg bare få en vurdering først?","Ja. Du kan starte med en uforpliktende vurdering uten kostnad."]
];

const services={
"b2b-leads":{title:"B2B leads som passer bedriften din",desc:"Finn relevante bedrifter basert på målgruppe, marked og kriteriene som betyr noe for salget."},
"lead-generation":{title:"B2B leadgenerering",desc:"En målrettet prosess for å finne nye B2B-muligheter basert på målgruppen din."},
"qualified-leads":{title:"Kvalifiserte leads",desc:"Prospekter vurdert etter kriteriene som gjør dem relevante for salgsarbeidet."},
"custom-lead-generation":{title:"Tilpasset leadgenerering",desc:"En skreddersydd prosess basert på målgruppe, marked og salgsbehov."},
"how-it-works":{title:"Fra målgruppe til salgsmulighet",desc:"Se hvordan vi finner, vurderer og organiserer relevante B2B-prospekter."}
};

const mail="mailto:jelassi@smartsvar.no?subject=Uforpliktende%20vurdering%20Cidea%20Leads";

function useMeta(path){
 useEffect(()=>{
  let title="B2B leadgenerering som finner de riktige kundene | Cidea Leads";
  let desc="Cidea Leads hjelper bedrifter med å finne og kvalifisere relevante B2B-leads. Få en uforpliktende vurdering av salgsmulighetene dine.";
  if(path==="/blog")title="Blogg om leadgenerering | Cidea Leads";
  const key=path.split("/").filter(Boolean)[0];
  if(services[key]){title=services[key].title+" | Cidea Leads";desc=services[key].desc}
  const slug=path.split("/")[2];
  const article=articles.find(a=>a.slug===slug);
  if(article){title=article.title+" | Cidea Leads";desc=article.description}
  document.title=title;
  document.querySelector('meta[name="description"]')?.setAttribute("content",desc);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href","https://cidealeads.com"+path);
 },[path]);
}

function Header({lang,setLang}){
 return <header><a className="logo" href="/">cidea<span>leads</span></a><nav><a href="/b2b-leads">B2B leads</a><a href="/how-it-works">Hvordan det fungerer</a><a href="/blog">Blogg</a></nav><div className="actions"><button className="lang" onClick={()=>setLang(lang==="no"?"en":"no")}>{lang==="no"?"EN":"NO"}</button><a className="navCta" href={mail}>{lang==="no"?"Få en vurdering →":"Get an assessment →"}</a></div></header>
}

function Pipeline(){
 return <div className="pipeline" aria-label="Lead pipeline"><div className="pipeTop"><span>CIDEA LEADS</span><span className="live"><i/>LIVE PIPELINE</span></div><div className="pipeRow"><div className="pipeNode"><small>DISCOVER</small><strong>Relevant companies</strong><em>Market fit</em></div><div className="pipeArrow">→</div><div className="pipeNode active"><small>QUALIFY</small><strong>Right prospects</strong><em>Fit · relevance · timing</em></div><div className="pipeArrow">→</div><div className="pipeNode"><small>OPPORTUNITY</small><strong>Next action</strong><em>Reason to connect</em></div></div><div className="pipeFooter"><span>Target fit</span><span>Decision maker</span><span>Relevant signal</span></div></div>
}

function Home({lang}){
 const en=lang==="en";
 return <><section className="hero"><div className="heroCopy"><p className="eyebrow">B2B LEAD GENERATION</p><h1>{en?"We find the customers you can actually sell to.":"Vi finner kundene du faktisk kan selge til."}</h1><p className="lead">{en?"A data-driven lead engine that finds, evaluates and organizes relevant companies so sales can focus on the right opportunities.":"En datadrevet lead-maskin som finner, vurderer og organiserer relevante bedrifter slik at salgsarbeidet kan fokusere på de riktige mulighetene."}</p><div className="buttons"><a className="button primary" href={mail}>{en?"Get an assessment":"Få en uforpliktende vurdering"} <span>↗</span></a><a className="textButton" href="#system">{en?"See how it works ↓":"Se hvordan det fungerer ↓"}</a></div><p className="noPressure">Ingen kostnad. Ingen forpliktelser.</p></div><Pipeline/></section>

<section className="section problem"><div className="sectionIntro"><p className="eyebrow">THE PROBLEM</p><h2>Det er lett å finne bedrifter. Det vanskelige er å finne de riktige.</h2><p>En lang liste med selskaper er ikke nødvendigvis en god salgsbase. Verdien ligger i å finne bedrifter som faktisk passer målgruppen din, forstå hvorfor de er relevante og gjøre neste steg enklere.</p></div><div className="cardGrid three"><article><span>FOR BREDT</span><h3>Store lister gir mye støy.</h3><p>Flere navn betyr ikke nødvendigvis flere gode samtaler.</p></article><article><span>FOR LITE DATA</span><h3>Et navn forklarer ikke relevansen.</h3><p>Du trenger kontekst for å vite hvorfor en bedrift er interessant.</p></article><article><span>FOR MYE MANUELT</span><h3>Research tar tid.</h3><p>Salget bør bruke mer tid på gode samtaler enn på sortering.</p></article></div></section>

<section className="section darkSection" id="system"><div className="sectionIntro"><p className="eyebrow lime">THE SYSTEM</p><h2>Fra marked til salgsmulighet.</h2><p>Vi bygger prosessen rundt det som faktisk betyr noe: relevans, kvalitet og neste steg.</p></div><div className="flow">{[["Find","Finn bedrifter som matcher målgruppen."],["Qualify","Vurder kriteriene som betyr noe for salget."],["Personalize","Finn konkrete grunner til at bedriften er relevant."],["Connect","Gjør det enkelt å starte en relevant samtale."],["Measure","Følg med på hva som fungerer og forbedre prosessen."]].map(([t,d])=><article key={t}><div className="flowMarker"/><small>{t}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>

<section className="section comparison"><div className="sectionIntro"><p className="eyebrow">QUALITY OVER QUANTITY</p><h2>En god lead er mer enn kontaktinformasjon.</h2></div><div className="compare"><div><span>KONTAKTLISTE</span><ul><li>Firmanavn</li><li>E-post</li><li>Telefon</li></ul></div><div className="compareGood"><span>SALGSMULIGHET</span><ul><li>Passer målgruppen</li><li>Relevant behov eller signal</li><li>Riktig kontaktperson</li><li>Hvorfor akkurat denne bedriften</li><li>Anbefalt neste steg</li></ul></div></div><p className="bigStatement">Målet er ikke å gi salgsteamet mer data. Målet er å gi dem bedre grunner til å ta kontakt.</p></section>

<section className="section industries"><div className="sectionIntro"><p className="eyebrow">TARGET MARKETS</p><h2>Hvem kan vi finne?</h2></div><div className="industryGrid">{["Regnskap","Eiendom","Håndverk","B2B-tjenester","SaaS","Konsulent","Industri","Andre målgrupper"].map(x=><a href={mail} key={x}><strong>{x}</strong><span>Definer målgruppe →</span></a>)}</div><p className="underCta">Har du en spesifikk målgruppe? <a href={mail}>Fortell oss hva du ser etter →</a></p></section>

<section className="section qualify"><div className="sectionIntro"><p className="eyebrow lime">QUALIFICATION</p><h2>Vi starter med målgruppen. Ikke med databasen.</h2></div><div className="matrix">{[["TARGET FIT","Passer bedriften faktisk med det du selger?"],["RELEVANCE","Finnes det en konkret grunn til å ta kontakt?"],["TIMING","Finnes det signaler som gjør tidspunktet interessant?"],["ACTIONABILITY","Vet vi hva neste steg bør være?"]].map(([t,d])=><article key={t}><span>{t}</span><p>{d}</p></article>)}</div></section>

<section className="section proof"><div className="sectionIntro"><p className="eyebrow">MEASUREMENT</p><h2>Slik måler vi om leadgenereringen fungerer.</h2><p>Vi følger hele kjeden fra målgruppe til faktisk salgssamtale. Når vi har reelle resultater, viser vi dem åpent.</p></div><div className="metricStrip">{["Relevante selskaper","Kvalifiserte muligheter","Kontaktgrad","Positiv respons","Møter","Pipeline"].map(x=><div key={x}><span>TRACK</span><strong>{x}</strong></div>)}</div></section>

<section className="section example"><div className="sectionIntro"><p className="eyebrow">TRANSPARENT OUTPUT</p><h2>Du skal vite hvorfor vi mener en lead er interessant.</h2></div><div className="opportunity"><div className="oppTop"><span>EKSEMPEL PÅ LEVERANSE</span><b>OPPORTUNITY</b></div><div className="oppGrid"><div><small>BEDRIFT</small><strong>Eksempel AS</strong></div><div><small>PASSER MÅLGRUPPEN</small><strong className="limeText">JA</strong></div><div><small>HVORFOR</small><p>Relevant størrelse<br/>Relevant marked<br/>Konkret signal</p></div><div><small>KONTAKTPERSON</small><strong>Relevant rolle</strong></div><div><small>ANBEFALT NESTE STEG</small><p>Ta kontakt med en kort og konkret begrunnelse.</p></div></div></div></section>

<section className="section faq"><div className="sectionIntro"><p className="eyebrow">FAQ</p><h2>Vanlige spørsmål.</h2></div>{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>

<section className="finalCta" id="contact"><div><p className="eyebrow">START WITH YOUR MARKET</p><h2>La oss se hva vi kan finne.</h2><p>Fortell oss hvem du ønsker å nå. Vi gjør en uforpliktende vurdering og peker på hvilke salgsmuligheter vi mener er mest interessante.</p><a className="button dark" href={mail}>Få en uforpliktende vurdering →</a><small>Ingen kostnad. Ingen forpliktelser.</small></div></section></>
}

function Service({data}){return <section className="page"><p className="eyebrow">CIDEA LEADS</p><h1>{data.title}</h1><p className="pageLead">{data.desc}</p><div className="serviceCards"><article><span>FIND</span><h2>Finn</h2><p>Definer markedet og finn bedrifter som matcher målgruppen.</p></article><article><span>QUALIFY</span><h2>Kvalifiser</h2><p>Filtrer etter kriteriene som faktisk betyr noe for salget.</p></article><article><span>CONNECT</span><h2>Koble</h2><p>Gjør relevante prospekter klare for neste salgssteg.</p></article></div><div className="serviceBottom"><div><p className="eyebrow">PASSER FOR</p><h2>Bedrifter som vil bruke salgsressursene på riktige prospekter.</h2></div><div><p className="eyebrow">HVA DU FÅR</p><p>En tydelig målgruppe, relevante bedrifter, kvalifiserte prospekter og et strukturert grunnlag for videre salg.</p></div></div><a className="button primary" href={mail}>Få en uforpliktende vurdering →</a></section>}

function Blog({article}){return <section className="page">{article?<><p className="eyebrow">BLOGG</p><h1>{article.title}</h1><p className="pageLead">{article.intro}</p><div className="articleBody"><p>{article.body}</p></div><div className="articleLinks"><a href="/b2b-leads">B2B leads →</a><a href="/how-it-works">Hvordan det fungerer →</a></div></>:<><p className="eyebrow">BLOGG</p><h1>Innsikt om leadgenerering.</h1><p className="pageLead">Praktiske svar på spørsmål om leads, kvalifisering og B2B-salg.</p><div className="articleList">{articles.map(a=><a key={a.slug} href={"/blog/"+a.slug}><span>ARTIKKEL</span><h2>{a.title}</h2><p>{a.intro}</p><strong>Les artikkelen →</strong></a>)}</div></>}</section>}

function App(){const[lang,setLang]=useState("no");const path=location.pathname.replace(/\/$/,"")||"/";useMeta(path);const key=path.split("/").filter(Boolean)[0];const article=articles.find(a=>a.slug===path.split("/")[2]);let content=path==="/" ? <Home lang={lang}/> : path==="/blog"||article ? <Blog article={article}/> : services[key] ? <Service data={services[key]}/> : <Home lang={lang}/>;return <div className="site"><Header lang={lang} setLang={setLang}/><main>{content}</main><footer><a className="logo" href="/">cidea<span>leads</span></a><span>Datadrevet leadgenerering · Oslo / Norge</span><a href={mail}>Kontakt →</a></footer></div>}
createRoot(document.getElementById("root")).render(<App/>);