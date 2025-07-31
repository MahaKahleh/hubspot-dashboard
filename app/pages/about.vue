<template>
      <head>
    <title>About</title>
  </head>
  <div class="about-page">
    <div class="header-buttons">
      <NuxtLink to="/" class="nav-link">⬅︎︎︎︎</NuxtLink>
    <div class="language-toggle">
      <span class="nav-link" @click="toggleLanguage">
        {{ language === 'en' ? 'DE' : 'EN' }}
     </span>

    </div>
    </div>


    <div v-if="language === 'en'" class="content">
      <h1>About This Project</h1>

      <section>
        <h2>💬 Introduction & Personal Statement</h2>
     <p>
    I’m a professional web developer with a strong focus on frontend development. While I’m still early in my career and may not have years of experience yet, I bring something just as valuable: deep motivation, strong technical foundations, a love for building things, and a fast learning ability. I’m passionate about growth and committed to constantly improving myself, both personally and professionally.
  </p>
  <p>
    This project is a small demonstration of that. When I started it, I had only about 10% knowledge of Vue.js — which I began exploring right before my first interview with Calvin — and zero knowledge of Nuxt.js. That said, I came into it with a solid background in JavaScript, TypeScript, React, and Next.js, which helped me adapt quickly and build up my understanding step by step.
  </p>
  <p>
    I gave this challenge my full focus and energy. Every line of code I wrote, I fully understand and can confidently explain. I spent time reading the documentation, exploring the tools, debugging, and making sure I wasn’t just writing code — I was truly understanding it.
  </p>
  <p>
    I hope this project shows you not only my current skills, but also my mindset, my motivation, and the direction I’m working hard to grow toward. I would be proud to be part of your team, to learn from you and with you, and to grow into the senior web developer I know I will become.
  </p>
      </section>

      <section>
        <h2>🚀 Progress & Time Breakdown</h2>
  <p>
    I built a working Nuxt 4 dashboard that loads and filters HubSpot survey data, then shows the results in a bar chart.
  </p>
  <h3>1. Here’s what I got done:</h3>
  <ul>
    <li>Set up a Nuxt 4 project using TypeScript</li>
    <li>Built a reusable Chart.js component to display Q1 results</li>
    <li>Developed a filter panel with three fully functional filters:
      <ul>
        <li>Industry</li>
        <li>Company size</li>
        <li>Quarter</li>
      </ul>
    </li>
    <li>Wrote a composable to load and process the data cleanly</li>
    <li>Dropped Tailwind CSS after hitting build issues and switched to regular CSS</li>
    <li>Wrote this About page to explain my approach, challenges, and what I learned</li>
  </ul>

        <h3>2. Time Breakdown</h3>
   <p>Here’s how I spent my time on the project:</p>
    <ul>
      <li>2h – Learning Nuxt 3 basics (docs + tutorials)</li>
      <li>1h – Setting up the project and reviewing the challenge instructions carefully</li>
      <li>1.5h – Building the chart component with TypeScript and hooking in the data</li>
      <li>2h – Developing the filter panel with all three filters working</li>
      <li>1h – Troubleshooting Tailwind CSS errors → switching to custom CSS</li>
      <li>1h – Writing this documentation and About page</li>
      <li>0.5h – Final review: bug fixes, cleanup, small UI tweaks</li>
    </ul>
    <p><strong>Total: ~8 hours</strong></p>
      </section>

      <section>
        <h2>📌 Prioritization Decisions</h2>
      <h3>1. Which question data did I choose, and why?</h3>
      <p>
        I started by reviewing the JSON structure and exploring the three questions in the dataset.
        I chose to focus on Q1, because the answers (like Slack, Google Workspace, etc.) were more
        concrete and easy to visualize. It felt more intuitive and user-friendly to show that kind
        of data in a bar chart.
      </p>
      <br>
      <h3>2. What did I focus on first, and why?</h3>
      <p>
        The first thing I built was the chart itself — using raw Q1 data without filters. I wanted
        to see something visual early on to stay motivated and make sure the data was being processed
        correctly. Once I had a working chart, I moved on to building the filters.
      </p>
            <br>
      <h3>3. Trade-offs I made due to time constraints</h3>
      <p>
        Since the focus was on having a working prototype, I prioritized core features (data loading,
        filtering, and chart display) over extras like animations, responsive design, or fancy styling.
        I also decided to stick to just one question (Q1) instead of making the dashboard dynamic for
        Q2 or Q3, to keep the logic simple and stable.
      </p>
      </section>

      <section>
        <h2>📈 Next Steps</h2>
  <h3>1. What would I build next if I had more time?</h3>
  <p>
    If I had more time, I’d extend the dashboard to support all three questions (Q1–Q3) in the dataset, not just Q1.
    Right now, the logic is built around one question to keep things simple and stable, but making it dynamic would
    let users explore the full range of survey data. That would also mean adapting the chart logic for different answer
    formats — maybe even switching between chart types (like bar for Q1 and pie for Q2). It would make the tool more
    complete and more useful.
  </p>
      <br>
  <h3>2. How would I improve what I already built?</h3>
  <p>
    I’d polish the UI, especially the homepage. The About page feels clean, but the index view still needs better
    typography, spacing, and layout responsiveness. I’d also refactor the filter panel to be more modular — ideally,
    each filter group could be its own subcomponent. And from a UX side, I’d add loading indicators, error messages,
    and smoother transitions when filters are applied. Right now it works, but it lacks that final layer of finesse.
  </p>
      <br>
  <h3>3. What would I refactor or optimize in the code?</h3>
  <p>
    I’d go deeper into TypeScript typing, especially inside the composables and data models. I’d also break down
    the filter logic into smaller, more focused helpers to make it easier to maintain. And finally, I’d add unit
    tests for the filters, the chart logic, and the data processing composable. I didn’t have time for that in
    this 
  </p>
      </section>

      <section>
        <h2>🧩 Challenges & Solutions</h2>
 <h3>1. What technical blockers did I encounter?</h3>
    <p>
      One of the biggest challenges was figuring out how to structure the filter logic in a clean and reusable way.
      At first, I had everything crammed inside <code>index.vue</code>, and it became a mess pretty fast. I knew I
      needed to separate the logic, but I wasn’t sure how to do that in Nuxt without breaking the whole app.
    </p>
    <p>
      I also struggled a lot with Tailwind CSS. I initially wanted to use it to speed up the styling process,
      but it caused weird build errors with Nuxt 4. I spent hours trying to debug it before deciding to just drop it
      and use plain CSS instead.
    </p>
<br>
    <h3>2. How did I solve them?</h3>
    <p>
      For the filtering issue, I created a composable called <code>useHubSpotData.ts</code> that handles all the data logic
      — fetching, filtering, and state. Then I built <code>FilterPanel.vue</code> as a reusable, dynamic component that works
      with all three filters (industry, company size, and quarter) without repeating code. That structure felt much more
      professional and easier to maintain.
    </p>
    <p>
      As for styling, I just cleaned everything up manually using vanilla CSS. I defined global class names for layout,
      spacing, and typography, and made sure the design looked clean and readable without relying on any external frameworks.
      It took more time, but honestly, I felt more in control that way.
    </p>
<br>
    <h3>3. What did I learn?</h3>
    <p>
      I learned way more from this project than I expected — especially since this was my first time working with Nuxt.
      Just setting up the project taught me a lot about Nuxt’s structure: how it handles routing, layouts, pages, and auto-imports.
      I also realized how useful composables are for separating logic. Writing <code>useHubSpotData.ts</code> was probably the
      turning point where I finally felt like the app was getting organized and scalable.
    </p>
    <p>
      I also learned how to think like a real frontend dev: keeping things DRY, using props smartly, building reusable components,
      and making sure everything communicates smoothly without duplicated state. Rebuilding the <code>FilterPanel.vue</code> with
      dynamic logic was one of the most satisfying moments in the challenge.
    </p>
    <p>
      Lastly, I learned to stay flexible. When Tailwind broke, I didn’t waste more time — I just switched to plain CSS and kept going.
      That mindset — of not getting stuck, solving problems quickly, and keeping my code clean — is something I’m really proud of.
    </p>
      </section>

      <section>
        <h2>🧠 Technical Decisions</h2>
  <h3>1. Component Architecture</h3>
  <p>I aimed for a clear separation of concerns by splitting the app into focused, reusable components:</p>
  <ul>
    <li><strong><code>index.vue</code></strong> acts as the shell. It manages layout and core state (selected question + filters).</li>
    <li><strong><code>FilterPanel.vue</code></strong> handles the entire filtering UI. It’s fully encapsulated and communicates via props and events, making it easy to reuse or extend.</li>
    <li><strong><code>ChartComponent.vue</code></strong> is responsible for rendering the chart using Chart.js. It’s designed to accept generic data (labels + values), so it could be reused for other chart types.</li>
    <li><strong><code>useHubSpotData.ts</code> (composable)</strong> centralizes all data logic — loading, filtering, and preparing chart data. This keeps UI components clean and focused on presentation.</li>
  </ul>
  <p>This architecture makes the codebase easier to test, maintain, and scale. Adding new features or pages won’t require rewriting or duplicating logic.</p>
<br>
  <h3>2. State Management</h3>
  <p>I kept the state local and simple:</p>
  <ul>
    <li>The main state (selected question, filters) lives in <code>index.vue</code>, using Vue’s reactive <code>ref</code> system.</li>
    <li>Props pass state down to components; <code>emit()</code> sends updates back up — following Vue’s recommended unidirectional data flow.</li>
    <li>The composable (<code>useHubSpotData</code>) manages all data logic, allowing multiple components to access shared functions without using a global store.</li>
  </ul>
  <p>For a project of this size, this setup was clean and efficient. If the app grows in complexity, I’d consider adding Pinia for global state.</p>
<br>
  <h3>3. Libraries Used & Alternatives Considered</h3>
  <table class="tech-table">
    <thead>
      <tr>
        <th>Purpose</th>
        <th>Library Used</th>
        <th>Alternatives</th>
        <th>Reason for Choice</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Framework</td>
        <td>Nuxt 4 (Vue 3 + Vite)</td>
        <td>Next.js, SvelteKit</td>
        <td>Nuxt’s file-based routing and auto-imports sped up development.</td>
      </tr>
      <tr>
        <td>Charting</td>
        <td>Chart.js</td>
        <td>D3.js, ApexCharts</td>
        <td>Simple, lightweight, and perfect for bar/pie charts.</td>
      </tr>
      <tr>
        <td>Styling</td>
        <td>Plain CSS</td>
        <td>Tailwind, Bootstrap</td>
        <td>Tailwind caused build issues; plain CSS gave full control.</td>
      </tr>
      <tr>
        <td>TypeScript</td>
        <td>Built-in Nuxt 4</td>
        <td>Babel + JSDoc</td>
        <td>Strong static typing improved code clarity and maintainability.</td>
      </tr>
      <tr>
        <td>State Management</td>
        <td>Vue composables</td>
        <td>Pinia, Vuex</td>
        <td>Lightweight and ideal for this project’s scale.</td>
      </tr>
    </tbody>
  </table>
      </section>
    </div>

    <div v-else class="content">
      <h1>Über Dieses Projekt</h1>

      <section>
        <h2>💬 Einleitung & Persönliches Statement</h2>
      <p>
    Ich bin Webentwicklerin mit einem klaren Fokus auf Frontend-Entwicklung. Auch wenn ich noch am Anfang meiner Karriere stehe und noch nicht viele Jahre Berufserfahrung habe, bringe ich etwas mit, das genauso wertvoll ist: eine starke Motivation, ein solides technisches Fundament, echte Begeisterung fürs Programmieren und eine sehr schnelle Auffassungsgabe. Ich bin leidenschaftlich daran interessiert, mich ständig weiterzuentwickeln – sowohl beruflich als auch persönlich.
  </p>
  <p>
    Dieses Projekt ist ein kleiner Beweis dafür. Als ich angefangen habe, kannte ich Vue.js zu vielleicht 10 % – ich habe es erst kurz vor meinem ersten Interview mit Calvin angefangen zu lernen – und ich hatte überhaupt keine Erfahrung mit Nuxt.js. Aber ich hatte bereits ein gutes Fundament in JavaScript, TypeScript, React und Next.js, was mir geholfen hat, mich schnell einzuarbeiten und Schritt für Schritt ein Verständnis aufzubauen.
  </p>
  <p>
    Ich habe mich dieser Challenge mit voller Energie gewidmet. Jeden einzelnen Codeabschnitt, den ich geschrieben habe, verstehe ich vollständig und kann ihn sicher erklären. Ich habe viel Zeit mit der Dokumentation verbracht, die Tools erforscht, Fehler gesucht und gelöst – und dabei darauf geachtet, dass ich nicht einfach nur Code schreibe, sondern wirklich verstehe, was ich tue.
  </p>
  <p>
    Ich hoffe, dass dieses Projekt nicht nur meine aktuellen Fähigkeiten zeigt, sondern auch meine Einstellung, meine Motivation und meinen Willen, weiter zu wachsen. Es wäre mir eine Ehre, Teil eures Teams zu sein, gemeinsam zu lernen und mich weiterzuentwickeln – hin zu der Senior Webentwicklerin, die ich mit Sicherheit bald sein werde.
  </p>
      </section>

      <section>
        <h2>🚀 Fortschritt & Zeitaufteilung</h2>
    <p>Ich habe ein funktionierendes Dashboard mit Nuxt 4 gebaut, das HubSpot-Umfragedaten lädt, filtert und die Ergebnisse in einem Balkendiagramm darstellt.</p>
    <h3>1. Das habe ich abgeschlossen:</h3>
    <ul>
      <li>Nuxt 4-Projekt mit TypeScript aufgesetzt</li>
      <li>Eine wiederverwendbare Chart.js-Komponente für die Q1-Daten gebaut</li>
      <li>Ein Filter-Panel mit drei vollständig funktionierenden Filtern entwickelt:
        <ul>
          <li>Branche</li>
          <li>Unternehmensgröße</li>
          <li>Quartal</li>
        </ul>
      </li>
      <li>Ein Composable geschrieben, um die Daten sauber zu laden und zu verarbeiten</li>
      <li>Von Tailwind CSS auf normales CSS umgestiegen (wegen Build-Problemen)</li>
      <li>Diese About-Seite verfasst, um meinen Prozess und meine Entscheidungen zu dokumentieren</li>
    </ul>
<br>
        <h3>2. Zeitaufteilung</h3>
            <p>So habe ich meine Zeit für das Projekt aufgeteilt:</p>
    <ul>
      <li>2 Std. – Grundlagen von Nuxt 3 gelernt (Dokumentation + Tutorials)</li>
      <li>1 Std. – Projekt-Setup und sorgfältige Durchsicht der Aufgabenstellung</li>
      <li>1.5 Std. – Erstellen der Chart-Komponente mit TypeScript und Einbindung der Daten</li>
      <li>2 Std. – Entwicklung des Filter-Panels mit allen drei funktionierenden Filtern</li>
      <li>1 Std. – Fehlerbehebung bei Tailwind CSS → Umstieg auf benutzerdefiniertes CSS</li>
      <li>1 Std. – Schreiben dieser Dokumentation und der About-Seite</li>
      <li>0.5 Std. – Letzter Feinschliff: Bugfixes, Aufräumen, kleine UI-Anpassungen</li>
    </ul>
    <p><strong>Gesamt: ca. 8 Stunden</strong></p>
      </section>

      <section>
        <h2>📌 Priorisierungsentscheidungen</h2>
    <ul>
        <h3>1. Welche Frage habe ich ausgewählt und warum?</h3>
      <p>
        Ich habe mir zuerst die Struktur der JSON-Daten angeschaut und die drei enthaltenen Fragen verglichen.
        Ich habe mich für Frage 1 (Q1) entschieden, weil die Antworten (z. B. Slack, Google Workspace usw.) konkreter
        und leichter visuell darstellbar waren. Das machte das Balkendiagramm für Nutzer verständlicher und ansprechender.
      </p>
      <br>
      <h3>2. Womit habe ich zuerst angefangen und warum?</h3>
      <p>
        Ich habe als Erstes das Diagramm mit den Rohdaten von Q1 gebaut – noch ohne Filter. Mir war wichtig, so früh
        wie möglich eine visuelle Rückmeldung zu bekommen, um sicherzugehen, dass die Daten richtig verarbeitet werden.
        Danach habe ich mich an die Entwicklung der Filter gemacht.
      </p>
      <br>
      <h3>3. Welche Kompromisse habe ich aus Zeitgründen gemacht?</h3>
      <p>
        Ich habe mich bewusst auf die Kernfunktionen konzentriert: Daten laden, filtern und anzeigen.
        Dinge wie Animationen, Responsive Design oder visuelle Feinheiten habe ich hintenangestellt.
        Außerdem habe ich mich auf Q1 beschränkt und nicht versucht, auch Q2 oder Q3 dynamisch darzustellen,
        um die Logik übersichtlich und stabil zu halten.
      </p>
    </ul>
      </section>

      <section>
        <h2>📈 Nächste Schritte</h2>
  <h3>1. Was würde ich als Nächstes bauen, wenn ich mehr Zeit hätte?</h3>
  <p>
    Ich würde das Dashboard erweitern, damit es alle drei Fragen (Q1–Q3) aus dem Datensatz unterstützt – nicht nur Q1.
    Aktuell ist die Logik bewusst auf eine Frage reduziert, um die Komplexität niedrig zu halten. Aber wenn man
    zwischen Fragen umschalten könnte, würde das Tool deutlich mehr Einblick geben. Dafür müsste ich auch die
    Diagramm-Logik anpassen — eventuell auch unterschiedliche Diagrammtypen verwenden (z. B. Balkendiagramm für Q1,
    Kreisdiagramm für Q2).
  </p>
<br>
  <h3>2. Wie würde ich das, was ich schon gebaut habe, verbessern?</h3>
  <p>
    Ich würde das UI weiter aufpolieren – vor allem die Startseite. Die About-Seite wirkt schon aufgeräumt, aber das
    Haupt-Dashboard braucht bessere Typografie, Abstände und responsives Verhalten. Auch das Filter-Panel würde ich
    modularer machen – am liebsten jede Filtergruppe als eigene Komponente. Von der UX-Seite her fehlen aktuell noch
    Ladeindikatoren, Fehlermeldungen und weiche Übergänge beim Filtern. Die Funktion ist da, aber das „Finish“ fehlt noch.
  </p>
<br>
  <h3>3. Was würde ich im Code refactoren oder optimieren?</h3>
  <p>
    Ich würde die TypeScript-Typisierung vertiefen, besonders in den Composables und Datenmodellen. Außerdem würde ich
    die Filter-Logik in kleinere, klarere Helferfunktionen auslagern. Und zuletzt würde ich Unit-Tests für die Filter,
    die Diagramm-Logik und das Composable schreiben. Dafür war diesmal keine Zeit, aber in einem echten Projekt ist mir
    testbarer, sauberer Code sehr wichtig.
  </p>
      </section>

      <section>
        <h2>🧩 Herausforderungen & Lösungen</h2>
    <h4>1. Welche technischen Probleme hatte ich?</h4>
    <p>
      Eine der größten Herausforderungen war es, die Filterlogik so zu strukturieren, dass sie sauber und wiederverwendbar ist.
      Am Anfang hatte ich alles in <code>index.vue</code>, was schnell unübersichtlich wurde. Mir war klar, dass ich die Logik
      besser trennen muss, wusste aber nicht genau, wie ich das in ein Composable auslagere, ohne dass dabei etwas kaputtgeht.
    </p>
    <p>
      Auch mit Tailwind CSS hatte ich Probleme. Ich wollte es eigentlich nutzen, um das Styling schneller umzusetzen,
      aber es hat in meiner Nuxt-4-Umgebung seltsame Build-Probleme verursacht. Ich habe lange versucht, das zu lösen,
      aber am Ende bin ich auf normales CSS umgestiegen.
    </p>
<br>
    <h3>2. Wie habe ich die Probleme gelöst?</h3>
    <p>
      Für das Filterproblem habe ich ein Composable (<code>useHubSpotData.ts</code>) geschrieben, das die komplette Datenlogik
      enthält – also Daten holen, filtern und State verwalten. Dann habe ich <code>FilterPanel.vue</code> zu einer
      wiederverwendbaren Komponente gemacht, die mit allen drei Filtern funktioniert (Branche, Unternehmensgröße, Quartal)
      — ohne duplizierten Code.
    </p>
    <p>
      Beim Styling habe ich alles mit einfachem CSS gelöst. Ich habe globale Klassen für Layout, Abstände und Schrift
      definiert und darauf geachtet, dass alles klar und gut lesbar aussieht – ganz ohne CSS-Framework. Es war zwar mehr Aufwand,
      aber ich hatte die volle Kontrolle.
    </p>
<br>
    <h3>3. Was habe ich gelernt?</h3>
    <p>
      Ich habe mehr gelernt, als ich erwartet hätte – vor allem, weil ich vorher noch nie mit Nuxt gearbeitet hatte.
      Schon beim Aufsetzen habe ich gemerkt, wie anders Nuxt mit Routen, Layouts und Seiten umgeht, verglichen mit klassischem Vue.
      Ich habe gelernt, wie mächtig Composables sind, und als ich <code>useHubSpotData.ts</code> geschrieben habe, wurde die App
      plötzlich viel strukturierter und wartbarer.
    </p>
    <p>
      Außerdem habe ich gelernt, wie wichtig Wiederverwendbarkeit ist. Anfangs habe ich Logik dupliziert und hartcodiert,
      aber sobald ich alle drei Filter eingebaut habe, war klar: saubere Props, klarer Datenfluss, keine Wiederholung.
      Deshalb habe ich <code>FilterPanel.vue</code> komplett neu gedacht – als flexible Komponente für alle Filtertypen.
    </p>
    <p>
      Und am Ende habe ich auch gelernt, mit Problemen ruhig umzugehen. Als Tailwind nicht funktioniert hat,
      bin ich einfach zum normalen CSS zurückgekehrt und habe weitergemacht. Dieses "Problem lösen und weitermachen"-Mindset
      ist für mich ein echter Fortschritt.
    </p>
      </section>

      <section>
        <h2>🧠 Technische Entscheidungen</h2>
  <h3>1. Komponenten-Architektur (German Version)</h3>
  <ul>
    <li><code>index.vue</code> ist das Grundgerüst der App und verwaltet das Layout sowie die Kernzustände (Frageauswahl + aktive Filter).</li>
    <li><code>FilterPanel.vue</code> kapselt die Filter-UI vollständig. Die Komponente arbeitet mit Props und Events und lässt sich einfach erweitern oder wiederverwenden.</li>
    <li><code>ChartComponent.vue</code> rendert das Balkendiagramm mit Chart.js. Die Komponente ist generisch und kann mit beliebigen Daten verwendet werden.</li>
    <li><code>useHubSpotData.ts</code> (Composable) enthält alle Datenoperationen: Laden, Filtern, Aufbereiten für das Diagramm. Dadurch bleibt die UI-Komponentenlogik sauber.</li>
  </ul>
<br>
  <h3>2. State Management (German Version)</h3>
  <ul>
    <li>Die Hauptzustände (gewählte Frage, Filter) werden in <code>index.vue</code> mit Vue's <code>ref()</code> verwaltet.</li>
    <li>Props leiten den Zustand an Kindkomponenten weiter, Events senden Änderungen zurück — das entspricht dem empfohlenen Datenfluss in Vue.</li>
    <li>Die Datenlogik ist im Composable (<code>useHubSpotData</code>) gekapselt, wodurch mehrere Komponenten dieselben Funktionen nutzen können, ohne einen globalen Store zu benötigen.</li>
  </ul>
<br>
  <h3>3. Eingesetzte Bibliotheken & Alternativen</h3>
  <table class="tech-table">
    <thead>
      <tr>
        <th>Zweck</th>
        <th>Genutzte Bibliothek</th>
        <th>Alternativen</th>
        <th>Entscheidungsgrund</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Framework</td>
        <td>Nuxt 4 (Vue 3 + Vite)</td>
        <td>Next.js, SvelteKit</td>
        <td>Schnelle Entwicklung durch Auto-Imports und Routing-Konventionen.</td>
      </tr>
      <tr>
        <td>Diagramm</td>
        <td>Chart.js</td>
        <td>D3.js, ApexCharts</td>
        <td>Einfach, leichtgewichtig, ideal für Balken- und Kreisdiagramme.</td>
      </tr>
      <tr>
        <td>Styling</td>
        <td>Plain CSS</td>
        <td>Tailwind, Bootstrap</td>
        <td>Tailwind verursachte Build-Probleme; Plain CSS gab volle Kontrolle.</td>
      </tr>
      <tr>
        <td>TypeScript</td>
        <td>Integriert in Nuxt 4</td>
        <td>Babel + JSDoc</td>
        <td>Statische Typisierung verbessert Codequalität und Wartbarkeit.</td>
      </tr>
      <tr>
        <td>State Management</td>
        <td>Vue Composables</td>
        <td>Pinia, Vuex</td>
        <td>Leichtgewichtig und perfekt für den Projektumfang geeignet.</td>
      </tr>
    </tbody>
  </table>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const language = ref<'en' | 'de'>('en')

function toggleLanguage() {
  language.value = language.value === 'en' ? 'de' : 'en'
}
</script>