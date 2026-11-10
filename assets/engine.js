/* Aula interactive study engine – main page + unit page + auto-graded exercises */
(function () {
  const A = window.AULA = { units: {}, cfg: {} };
  A.config = c => { A.cfg = c; if (c.color) { document.documentElement.style.setProperty('--c', c.color); document.documentElement.style.setProperty('--c2', c.color2); } };
  A.unit = u => { A.units[u.n] = u; };

  const $ = (s, r) => (r || document).querySelector(s);
  const h = (tag, attrs, ...kids) => {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
    }
    kids.flat().forEach(c => { if (c === null || c === undefined || c === false) return; e.append(c.nodeType ? c : document.createTextNode(c)); });
    return e;
  };
  A.h = h;
  const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/__(.+?)__/g, '<u>$1</u>').replace(/\n/g, '<br>');
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s).toLowerCase().replace(/[¿¡.,;:!?"“”«»()]/g, ' ').replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
  const noAcc = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ñ/g, 'n');
  const spk = (text, cls) => h('button', { class: 'spk ' + (cls || ''), title: '듣기', 'aria-label': '듣기', onclick: e => { e.stopPropagation(); TTS.say(text); } }, '🔊');

  /* ---------- storage ---------- */
  const key = (u, i) => `aula${A.cfg.book}-u${u}-e${i}`;
  const getS = (u, i) => { try { return JSON.parse(localStorage.getItem(key(u, i))); } catch (e) { return null; } };
  const setS = (u, i, v) => localStorage.setItem(key(u, i), JSON.stringify(v));
  const unitScore = u => {
    const U = A.units[u]; let s = 0, t = 0, done = 0, n = 0;
    (U.ex || []).forEach((e, i) => { if (e.k === 'write') return; n++; const r = getS(u, i); if (r) { s += r.s; t += r.t; done++; } });
    return { s, t, done, n, pct: t ? Math.round(100 * s / t) : 0 };
  };

  /* ---------- shared chrome ---------- */
  function header(sub) {
    const c = A.cfg;
    return h('header', { class: 'top' },
      h('a', { class: 'brand', href: 'index.html' }, h('span', { class: 'logo' }, 'A' + c.book), h('span', null, h('b', null, c.title), h('small', null, c.level + ' · ' + c.subtitle))),
      sub ? h('span', { class: 'crumb' }, sub) : null,
      h('button', { class: 'gear', onclick: openVoice, title: '음성 설정' }, '🎙️ 음성'));
  }
  function openVoice() {
    let dlg = $('#voiceDlg');
    if (dlg) dlg.remove();
    const sel = h('select', { id: 'vsel' });
    const fill = () => {
      sel.innerHTML = '';
      const vs = TTS.list();
      if (!vs.length) sel.append(h('option', null, '스페인어 음성을 찾는 중… (Chrome/Edge/Safari 권장)'));
      const cur = TTS.main();
      vs.forEach(v => sel.append(h('option', { value: v.name, selected: cur && v.name === cur.name ? '' : null }, `${v.name} (${v.lang})`)));
    };
    fill(); TTS.onchange = fill;
    const rate = h('input', { type: 'range', min: '0.6', max: '1.15', step: '0.01', value: TTS.rate });
    const rv = h('span', null, TTS.rate.toFixed(2) + '×');
    rate.oninput = () => rv.textContent = (+rate.value).toFixed(2) + '×';
    dlg = h('div', { id: 'voiceDlg', class: 'modal', onclick: e => { if (e.target === dlg) dlg.remove(); } },
      h('div', { class: 'card' },
        h('h3', null, '🎙️ 스페인어 음성 설정'),
        h('p', { class: 'muted' }, '가장 자연스러운 원어민 음성(Neural·Natural·Google)을 자동으로 고릅니다. Edge의 “Microsoft … Online (Natural)” 또는 Chrome의 “Google español” 음성이 가장 자연스러워요.'),
        h('label', null, '음성 ', sel),
        h('label', null, '속도 ', rate, rv),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost', onclick: () => { TTS.save({ voice: sel.value, rate: +rate.value }); TTS.say('Hola, ¿qué tal? Bienvenidos a la clase de español.'); } }, '▶ 미리 듣기'),
          h('button', { class: 'btn', onclick: () => { TTS.save({ voice: sel.value, rate: +rate.value }); dlg.remove(); } }, '저장'))));
    document.body.append(dlg);
  }
  function footer() {
    return h('footer', null, h('p', null, `${A.cfg.title} — 국제학교 스페인어 수업용 인터랙티브 학습 사이트 · 다인에듀 후안샘`),
      h('p', { class: 'muted' }, `교재 「${A.cfg.source}」의 단원 구성을 따르는 학습 보조 자료입니다. 모든 예문·대화·연습문제는 저작권 보호를 위해 새로 작성·변형했습니다.`));
  }

  /* ---------- MAIN PAGE ---------- */
  A.renderMain = function () {
    const c = A.cfg, root = $('#app');
    document.title = c.title + ' · 인터랙티브 스페인어';
    root.append(header());
    const ids = c.units.filter(n => A.units[n]);
    let tS = 0, tT = 0, doneU = 0;
    ids.forEach(n => { const s = unitScore(n); tS += s.s; tT += s.t; if (s.n && s.done === s.n) doneU++; });
    root.append(h('section', { class: 'hero' },
      h('div', null,
        h('p', { class: 'eyebrow' }, `${c.level} · Curso de español`),
        h('h1', null, c.title),
        h('p', { class: 'lead' }, c.intro),
        h('div', { class: 'stats' },
          h('div', null, h('b', null, ids.length), h('span', null, '단원')),
          h('div', null, h('b', null, ids.reduce((a, n) => a + (A.units[n].ex || []).length, 0)), h('span', null, '연습문제 세트')),
          h('div', null, h('b', null, doneU + '/' + ids.length), h('span', null, '완료 단원')),
          h('div', null, h('b', null, tT ? Math.round(100 * tS / tT) + '%' : '–'), h('span', null, '평균 점수')))),
      h('div', { class: 'howto' },
        h('h3', null, '사용 방법'),
        h('ol', null,
          h('li', null, '단원 카드를 눌러 들어가요.'),
          h('li', null, h('b', null, '어휘 · 문법'), '을 먼저 듣고 읽어요. 🔊를 누르면 원어민 발음.'),
          h('li', null, h('b', null, '연습문제'), '를 풀고 ', h('b', null, '채점'), '을 누르면 정답과 점수가 바로 나와요.'),
          h('li', null, h('b', null, '결과'), ' 탭에서 단원 전체 점수를 확인해요.')),
        h('button', { class: 'btn ghost sm', onclick: openVoice }, '🎙️ 음성 고르기'))));
    const q = h('input', { class: 'search', placeholder: '🔎 단원·문법·주제 검색 (예: subjuntivo, 과거, comida)…' });
    const grid = h('div', { class: 'grid' });
    root.append(h('section', { class: 'wrap' }, h('div', { class: 'gridhead' }, h('h2', null, '단원 목록 · Unidades'), q), grid));
    const draw = () => {
      grid.innerHTML = '';
      const f = noAcc(q.value.toLowerCase().trim());
      ids.forEach(n => {
        const U = A.units[n], s = unitScore(n);
        const hay = noAcc([U.title, U.ko, U.goal, (U.tags || []).join(' '), (U.gramTags || []).join(' ')].join(' ').toLowerCase());
        if (f && !hay.includes(f)) return;
        grid.append(h('a', { class: 'ucard', href: 'unit.html?u=' + n },
          h('div', { class: 'unum' }, String(n).padStart(2, '0')),
          h('div', { class: 'ubody' },
            h('h3', null, U.title), h('p', { class: 'ko' }, U.ko),
            h('p', { class: 'goal' }, '🎯 ' + U.goal),
            h('div', { class: 'tags' }, (U.tags || []).slice(0, 5).map(t => h('span', null, t))),
            h('div', { class: 'prog' }, h('div', { class: 'bar' }, h('i', { style: `width:${s.n ? 100 * s.done / s.n : 0}%` })),
              h('small', null, s.done ? `${s.done}/${s.n} 세트 · ${s.pct}점` : `연습문제 ${U.ex.length}세트`)))));
      });
      if (!grid.children.length) grid.append(h('p', { class: 'muted' }, '검색 결과가 없어요.'));
    };
    q.oninput = draw; draw();
    root.append(footer());
  };

  /* ---------- UNIT PAGE ---------- */
  A.renderUnit = function (n) {
    const U = A.units[n], c = A.cfg, root = $('#app');
    if (!U) { root.append(header(), h('p', { class: 'wrap' }, '단원을 찾을 수 없어요. ', h('a', { href: 'index.html' }, '메인으로'))); return; }
    document.title = `${c.title} · U${n} ${U.title}`;
    root.append(header(`Unidad ${n}`));
    const idx = c.units.indexOf(+n);
    const prev = c.units[idx - 1], next = c.units[idx + 1];
    root.append(h('section', { class: 'uhero' },
      h('div', { class: 'wrap' },
        h('p', { class: 'eyebrow' }, `Unidad ${n}`),
        h('h1', null, U.title, ' ', spk(U.title, 'big')),
        h('p', { class: 'ko' }, U.ko),
        h('p', { class: 'goal' }, '🎯 ' + U.goal),
        U.can ? h('ul', { class: 'can' }, U.can.map(x => h('li', null, x))) : null)));
    const tabs = [['vocab', '📚 어휘'], ['gram', '📐 문법'], ['ex', '✏️ 연습문제'], ['res', '🏁 결과']];
    const nav = h('nav', { class: 'tabs' });
    const main = h('main', { class: 'wrap' });
    const panes = {};
    tabs.forEach(([id, label]) => {
      nav.append(h('button', { 'data-t': id, onclick: () => show(id) }, label));
      panes[id] = h('div', { class: 'pane', id: 'p-' + id });
      main.append(panes[id]);
    });
    root.append(nav, main);
    function show(id) {
      TTS.abort && TTS.abort();
      nav.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.t === id));
      Object.keys(panes).forEach(k => panes[k].hidden = k !== id);
      if (id === 'res') drawRes();
      history.replaceState(null, '', `?u=${n}#${id}`);
      window.scrollTo({ top: $('.tabs').offsetTop - 4, behavior: 'smooth' });
    }
    drawVocab(U, panes.vocab);
    drawGram(U, panes.gram);
    drawEx(U, panes.ex, n);
    function drawRes() {
      const p = panes.res; p.innerHTML = '';
      const s = unitScore(n);
      const pct = s.t ? Math.round(100 * s.s / s.t) : 0;
      const msg = !s.done ? '아직 푼 연습문제가 없어요. 연습문제 탭에서 시작해 보세요!' : pct >= 90 ? '¡Excelente! 완벽에 가까워요 🎉' : pct >= 75 ? '¡Muy bien! 잘했어요 👏' : pct >= 50 ? '¡Bien! 틀린 문제를 다시 풀어 봐요 💪' : '¡Ánimo! 어휘·문법을 복습하고 다시 도전해요 📖';
      p.append(h('div', { class: 'result' },
        h('div', { class: 'ring', style: `--p:${pct}` }, h('b', null, pct), h('small', null, '점')),
        h('div', null, h('h2', null, msg), h('p', null, `완료 ${s.done}/${s.n} 세트 · 정답 ${s.s}/${s.t}문항`))));
      const tb = h('table', { class: 'rtable' }, h('tr', null, h('th', null, '#'), h('th', null, '연습문제'), h('th', null, '점수')));
      U.ex.forEach((e, i) => {
        if (e.k === 'write') return;
        const r = getS(n, i);
        tb.append(h('tr', { class: 'click', onclick: () => { show('ex'); setTimeout(() => $('#ex' + i).scrollIntoView({ behavior: 'smooth' }), 50); } },
          h('td', null, i + 1), h('td', null, e.t), h('td', null, r ? h('span', { class: 'pill ' + (r.s === r.t ? 'ok' : r.s / r.t >= .6 ? 'mid' : 'bad') }, `${r.s}/${r.t}`) : h('span', { class: 'muted' }, '미응시'))));
      });
      p.append(tb, h('div', { class: 'row' },
        h('button', { class: 'btn ghost', onclick: () => { if (confirm('이 단원의 점수를 모두 지울까요?')) { U.ex.forEach((e, i) => localStorage.removeItem(key(n, i))); location.reload(); } } }, '↺ 점수 초기화'),
        h('button', { class: 'btn ghost', onclick: () => window.print() }, '🖨 인쇄')));
    }
    root.append(h('div', { class: 'wrap pager' },
      prev !== undefined ? h('a', { class: 'btn ghost', href: 'unit.html?u=' + prev }, `← Unidad ${prev}`) : h('span'),
      h('a', { class: 'btn ghost', href: 'index.html' }, '🏠 메인'),
      next !== undefined ? h('a', { class: 'btn', href: 'unit.html?u=' + next }, `Unidad ${next} →`) : h('span')));
    root.append(footer());
    show((location.hash || '#vocab').slice(1) in panes ? location.hash.slice(1) : 'vocab');
  };

  function drawVocab(U, p) {
    p.append(h('div', { class: 'phead' }, h('h2', null, '어휘 · Vocabulario'),
      h('div', { class: 'row' },
        h('button', { class: 'btn ghost sm', onclick: e => flip(e.target) }, '🃏 카드 모드'),
        h('button', { class: 'btn ghost sm', onclick: () => TTS.sayLines((U.vocab || []).flatMap(g => g.w.map(w => ['x', w[0]]))) }, '▶ 전체 듣기'),
        h('button', { class: 'btn ghost sm', onclick: () => TTS.abort() }, '■'))));
    (U.vocab || []).forEach(g => {
      p.append(h('h3', { class: 'vg' }, g.g));
      p.append(h('div', { class: 'vgrid' }, g.w.map(w => h('button', { class: 'vcard', onclick: () => TTS.say(w[0]) },
        h('span', { class: 'es' }, (w[2] ? w[2] + ' ' : '') + w[0]), h('span', { class: 'kr' }, w[1])))));
    });
    function flip(btn) { p.classList.toggle('cards'); btn.textContent = p.classList.contains('cards') ? '📋 목록 모드' : '🃏 카드 모드'; }
    p.addEventListener('click', e => { const c = e.target.closest('.vcard'); if (c && p.classList.contains('cards')) c.classList.toggle('show'); });
  }

  function drawGram(U, p) {
    p.append(h('div', { class: 'phead' }, h('h2', null, '문법 · Gramática')));
    (U.gram || []).forEach(g => {
      const card = h('article', { class: 'gcard' }, h('h3', null, g.h));
      if (g.p) card.append(h('p', { html: md(g.p) }));
      if (g.t) {
        const tb = h('table', { class: 'gt' });
        g.t.forEach((r, ri) => tb.append(h('tr', null, r.map((c, ci) => {
          const cell = h(ri === 0 && g.th !== false ? 'th' : 'td', { html: md(c) });
          if (!(ri === 0 && g.th !== false) && ci > 0 && /[a-záéíóúñ]/i.test(c) && !/[가-힣]/.test(c)) cell.append(' ', spk(c.replace(/\*\*/g, '')));
          return cell;
        }))));
        card.append(h('div', { class: 'tscroll' }, tb));
      }
      if (g.ex) card.append(h('ul', { class: 'gex' }, g.ex.map(x => { const [es, ko] = Array.isArray(x) ? x : [x, '']; return h('li', null, spk(es), h('span', { html: md(es) }), ko ? h('small', null, ko) : null); })));
      if (g.tip) card.append(h('p', { class: 'tip', html: '💡 ' + md(g.tip) }));
      p.append(card);
    });
  }

  /* ---------- EXERCISES ---------- */
  function drawEx(U, p, n) {
    const list = U.ex || [];
    p.append(h('div', { class: 'phead' }, h('h2', null, `연습문제 · Ejercicios (${list.length})`),
      h('div', { class: 'jump' }, list.map((e, i) => h('a', { href: '#ex' + i, onclick: ev => { ev.preventDefault(); $('#ex' + i).scrollIntoView({ behavior: 'smooth' }); } }, i + 1)))));
    list.forEach((e, i) => {
      const box = h('section', { class: 'ex', id: 'ex' + i });
      const head = h('div', { class: 'exh' }, h('span', { class: 'exn' }, i + 1), h('div', null, h('h3', null, e.t), e.d ? h('p', { class: 'muted', html: md(e.d) }) : null));
      const score = h('span', { class: 'score' });
      const prev = getS(n, i); if (prev) { score.textContent = `${prev.s}/${prev.t}`; score.className = 'score ' + (prev.s === prev.t ? 'ok' : 'mid'); }
      head.append(score);
      box.append(head);
      const body = h('div', { class: 'exb' });
      box.append(body);
      const R = (TYPES[e.k] || TYPES.fill)(e, body);
      const fb = h('div', { class: 'fb' });
      const bar = h('div', { class: 'exbar' });
      if (R.check) {
        bar.append(h('button', { class: 'btn', onclick: () => {
          const r = R.check(); setS(n, i, r);
          score.textContent = `${r.s}/${r.t}`; score.className = 'score ' + (r.s === r.t ? 'ok' : 'mid');
          const pct = Math.round(100 * r.s / r.t);
          fb.className = 'fb show ' + (r.s === r.t ? 'ok' : pct >= 60 ? 'mid' : 'bad');
          fb.textContent = r.s === r.t ? `¡Perfecto! ${r.s}/${r.t} 만점이에요 🎉` : `${r.s}/${r.t} (${pct}점) — 빨간색 문항의 정답을 확인해 보세요.`;
        } }, '✔ 채점하기'));
        bar.append(h('button', { class: 'btn ghost', onclick: () => { body.innerHTML = ''; Object.assign(R, (TYPES[e.k] || TYPES.fill)(e, body)); fb.className = 'fb'; } }, '↺ 다시 풀기'));
      }
      if (R.extra) bar.append(R.extra);
      box.append(bar, fb);
      p.append(box);
    });
  }

  // parse "Yo [soy] de {Lima|*Seúl}" -> parts
  function parse(str) {
    return String(str).split(/(\[[^\]]+\]|\{[^}]+\})/).filter(x => x !== '').map(x => {
      if (x[0] === '[') return { k: 'in', a: x.slice(1, -1).split('|').map(s => s.trim()) };
      if (x[0] === '{') { const o = x.slice(1, -1).split('|').map(s => s.trim()); return { k: 'sel', o: o.map(s => s.replace(/^\*/, '')), a: o.findIndex(s => s[0] === '*') }; }
      return { k: 'txt', t: x };
    });
  }
  const solved = parts => parts.map(p => p.k === 'txt' ? p.t : p.k === 'in' ? p.a[0] : p.o[p.a]).join('');
  const mark = (el, ok) => { el.classList.remove('right', 'wrong'); el.classList.add(ok ? 'right' : 'wrong'); };
  const sol = (el, txt) => { const s = h('span', { class: 'sol' }, '→ ' + txt); el.after(s); return s; };
  const clearSol = r => r.querySelectorAll('.sol').forEach(s => s.remove());
  function itemOf(it) { return Array.isArray(it) ? { s: it[0], hint: it[1] } : { s: it }; }
  const plain = s => String(s).replace(/\*\*/g, '');

  const TYPES = {
    fill(e, body) { // typed blanks [a|b] and dropdowns {x|*y}
      const rows = [];
      if (e.box) body.append(h('div', { class: 'wordbox' }, e.box.map(w => h('span', null, w))));
      if (e.text) body.append(h('div', { class: 'reading', html: md(e.text) }));
      const ol = h('ol', { class: 'items' });
      e.it.forEach(raw => {
        const { s, hint } = itemOf(raw);
        const parts = parse(s); const ctrls = [];
        const li = h('li', null);
        const line = h('div', { class: 'line' });
        parts.forEach(pt => {
          if (pt.k === 'txt') line.append(h('span', { html: md(pt.t) }));
          else if (pt.k === 'in') { const w = Math.max(4, ...pt.a.map(a => a.length)) + 2; const inp = h('input', { type: 'text', class: 'blank', style: `width:${Math.min(w, 30)}ch`, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' }); ctrls.push([pt, inp]); line.append(inp); }
          else { const sel = h('select', { class: 'blank' }, h('option', { value: '' }, '—'), pt.o.map((o, k) => h('option', { value: k }, o))); ctrls.push([pt, sel]); line.append(sel); }
        });
        li.append(line);
        if (!e.noaudio) li.append(spk(plain(solved(parts))));
        if (hint) li.append(h('small', { class: 'hint' }, hint));
        ol.append(li); rows.push(ctrls);
      });
      body.append(ol);
      accentBar(body);
      return {
        check() {
          let s = 0, t = 0; clearSol(body);
          rows.forEach(ctrls => ctrls.forEach(([pt, el]) => {
            t++;
            let ok;
            if (pt.k === 'in') { const v = norm(el.value); ok = pt.a.some(a => norm(a) === v); if (!ok && pt.a.some(a => noAcc(norm(a)) === noAcc(v)) && v) { sol(el, pt.a[0] + ' (악센트/ñ 확인!)'); } else if (!ok) sol(el, pt.a.join(' / ')); }
            else { ok = +el.value === pt.a && el.value !== ''; if (!ok) sol(el, pt.o[pt.a]); }
            mark(el, ok); if (ok) s++;
          }));
          return { s, t };
        }
      };
    },
    mc(e, body) { // [question, "a|*b|c", sayText?]
      if (e.text) body.append(h('div', { class: 'reading' }, h('div', { html: md(e.text) }), spk(plain(e.text))));
      const qs = [];
      const ol = h('ol', { class: 'items mc' });
      e.it.forEach(it => {
        const [q, opts, say] = it;
        const o = opts.split('|'); const ans = o.findIndex(x => x[0] === '*');
        const name = 'q' + Math.random().toString(36).slice(2);
        const li = h('li', null, h('div', { class: 'q' }, say ? h('button', { class: 'btn sm play', onclick: () => TTS.say(say) }, '▶ 듣기') : null, h('span', { html: md(q) }), !say && e.audio !== false && /[a-záéíóúñ]{3}/i.test(q) && !/[가-힣]/.test(q) ? spk(plain(q).replace(/_+/g, '…')) : null));
        const wrap = h('div', { class: 'opts' });
        o.forEach((x, k) => wrap.append(h('label', { class: 'opt' }, h('input', { type: 'radio', name, value: k }), h('span', { html: md(x.replace(/^\*/, '')) }))));
        li.append(wrap); ol.append(li); qs.push([wrap, ans, name]);
      });
      body.append(ol);
      return {
        check() {
          let s = 0;
          qs.forEach(([wrap, ans, name]) => {
            const c = wrap.querySelector(`input[name=${name}]:checked`);
            wrap.querySelectorAll('.opt').forEach((l, k) => { l.classList.remove('right', 'wrong'); if (k === ans) l.classList.add('right'); });
            if (c && +c.value === ans) s++; else if (c) c.parentNode.classList.add('wrong');
          });
          return { s, t: qs.length };
        }
      };
    },
    tf(e, body) { // reading/listening + true/false
      const hidden = !!e.listen;
      const rd = h('div', { class: 'reading' + (hidden ? ' hide' : '') });
      if (e.lines) rd.append(dialog(e.lines));
      else rd.append(h('div', { html: md(e.text) }));
      const playBtn = h('button', { class: 'btn sm play', onclick: () => e.lines ? TTS.sayLines(e.lines) : TTS.say(plain(e.text)) }, hidden ? '▶ 듣기 (스크립트는 채점 후 공개)' : '▶ 전체 듣기');
      body.append(h('div', { class: 'row' }, playBtn, h('button', { class: 'btn sm ghost', onclick: () => TTS.abort() }, '■ 정지')), rd);
      const qs = [];
      const ol = h('ol', { class: 'items' });
      e.it.forEach(([q, v]) => {
        const seg = h('div', { class: 'seg' });
        const bs = ['V', 'F'].map((L, k) => h('button', { onclick: () => { bs.forEach(b => b.classList.remove('on')); bs[k].classList.add('on'); seg.dataset.v = k === 0 ? '1' : '0'; } }, L === 'V' ? 'Verdadero' : 'Falso'));
        seg.append(...bs);
        ol.append(h('li', { class: 'tfrow' }, h('span', { html: md(q) }), seg)); qs.push([seg, v ? '1' : '0']);
      });
      body.append(ol);
      return {
        check() {
          let s = 0; rd.classList.remove('hide');
          qs.forEach(([seg, v]) => { const ok = seg.dataset.v === v; mark(seg, ok); if (ok) s++; seg.querySelectorAll('button')[v === '1' ? 0 : 1].classList.add('ans'); });
          return { s, t: qs.length };
        }
      };
    },
    dlg(e, body) { // dialogue (optionally hidden) + mc questions
      const hidden = !!e.listen;
      const rd = h('div', { class: 'reading' + (hidden ? ' hide' : '') }, dialog(e.lines, e.ko));
      body.append(h('div', { class: 'row' },
        h('button', { class: 'btn sm play', onclick: () => TTS.sayLines(e.lines, i => rd.querySelectorAll('.dl').forEach((l, k) => l.classList.toggle('now', k === i))) }, hidden ? '▶ 대화 듣기 (스크립트는 채점 후 공개)' : '▶ 대화 듣기'),
        h('button', { class: 'btn sm ghost', onclick: () => TTS.abort() }, '■ 정지'),
        hidden ? h('button', { class: 'btn sm ghost', onclick: () => rd.classList.toggle('hide') }, '📝 스크립트') : null), rd);
      const sub = TYPES.mc({ it: e.it, audio: false }, body);
      return { check() { rd.classList.remove('hide'); return sub.check(); } };
    },
    match(e, body) {
      const rights = shuffle(e.it.map(x => x[1]));
      const rows = [];
      const tb = h('div', { class: 'match' });
      e.it.forEach(([l, r]) => {
        const sel = h('select', { class: 'blank' }, h('option', { value: '' }, '— 고르기 —'), rights.map(x => h('option', { value: x }, x)));
        tb.append(h('div', { class: 'mrow' }, h('span', { class: 'ml' }, /[가-힣]/.test(l) ? null : spk(l), h('span', { html: md(l) })), h('span', { class: 'arrow' }, '→'), sel));
        rows.push([sel, r]);
      });
      body.append(tb);
      return { check() { let s = 0; clearSol(body); rows.forEach(([sel, r]) => { const ok = sel.value === r; mark(sel, ok); if (ok) s++; else sol(sel, r); }); return { s, t: rows.length }; } };
    },
    sort(e, body) { // classify into categories
      const rows = [];
      const wrap = h('div', { class: 'sortw' });
      shuffle(e.it).forEach(([w, c]) => {
        const seg = h('div', { class: 'seg' });
        const bs = e.cats.map((cat, k) => h('button', { onclick: () => { bs.forEach(b => b.classList.remove('on')); bs[k].classList.add('on'); seg.dataset.v = k; } }, cat));
        seg.append(...bs);
        wrap.append(h('div', { class: 'srow' }, h('span', { class: 'sw' }, /[가-힣]/.test(w) ? null : spk(w), w), seg));
        rows.push([seg, c]);
      });
      body.append(wrap);
      return { check() { let s = 0; rows.forEach(([seg, c]) => { const ok = seg.dataset.v === String(c); mark(seg, ok); if (ok) s++; seg.querySelectorAll('button')[c].classList.add('ans'); }); return { s, t: rows.length }; } };
    },
    order(e, body) { // build sentence from shuffled words
      const rows = [];
      const ol = h('ol', { class: 'items' });
      e.it.forEach(raw => {
        const { s, hint } = itemOf(raw);
        const words = s.split(/\s+/);
        let mix = shuffle(words.map((w, i) => ({ w, i })));
        if (words.length > 2 && mix.every((m, k) => m.i === k)) mix = mix.reverse();
        const ans = h('div', { class: 'ans' }); const pool = h('div', { class: 'pool' });
        mix.forEach(m => {
          const chip = h('button', { class: 'chip' }, m.w);
          chip.onclick = () => { (chip.parentNode === pool ? ans : pool).append(chip); };
          pool.append(chip);
        });
        ol.append(h('li', null, hint ? h('small', { class: 'hint' }, hint) : null, ans, pool));
        rows.push([ans, s]);
      });
      body.append(ol);
      return {
        check() {
          let s = 0; clearSol(body);
          rows.forEach(([ans, target]) => {
            const got = [...ans.children].map(c => c.textContent).join(' ');
            const ok = norm(got) === norm(target) && got.split(' ').length === target.split(/\s+/).length;
            mark(ans, ok); if (ok) s++; else sol(ans, target);
            ans.after(spk(target));
          });
          return { s, t: rows.length };
        }
      };
    },
    dict(e, body) { // dictation
      const rows = [];
      const ol = h('ol', { class: 'items' });
      e.it.forEach(raw => {
        const { s } = itemOf(raw);
        const inp = h('input', { type: 'text', class: 'blank wide', placeholder: '들은 문장을 쓰세요', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
        ol.append(h('li', null, h('div', { class: 'row' }, h('button', { class: 'btn sm play', onclick: () => TTS.say(s) }, '▶'), h('button', { class: 'btn sm ghost', onclick: () => TTS.say(s, { slow: true }) }, '🐢 천천히'), inp)));
        rows.push([inp, s]);
      });
      body.append(ol);
      accentBar(body);
      return {
        check() {
          let s = 0; clearSol(body);
          rows.forEach(([inp, target]) => { const ok = norm(inp.value) === norm(target); mark(inp, ok); if (ok) s++; else sol(inp, target + (noAcc(norm(inp.value)) === noAcc(norm(target)) ? ' (악센트 확인!)' : '')); });
          return { s, t: rows.length };
        }
      };
    },
    write(e, body) { // open writing, model answer
      if (e.text) body.append(h('div', { class: 'reading', html: md(e.text) }));
      const ta = h('textarea', { rows: 6, placeholder: '여기에 스페인어로 써 보세요…' });
      const k = `aula${A.cfg.book}-w-${e.t}`; ta.value = localStorage.getItem(k) || ''; ta.oninput = () => localStorage.setItem(k, ta.value);
      const model = h('div', { class: 'model', hidden: true }, h('b', null, '모범 답안 예시'), h('p', { html: md(e.model || '') }), e.model ? spk(plain(e.model)) : null);
      const cnt = h('small', { class: 'muted' }, '');
      ta.addEventListener('input', () => cnt.textContent = (ta.value.trim().split(/\s+/).filter(Boolean).length) + ' palabras');
      if (e.tips) body.append(h('ul', { class: 'tips' }, e.tips.map(t => h('li', { html: md(t) }))));
      body.append(ta, cnt, model);
      accentBar(body);
      return { extra: h('button', { class: 'btn ghost', onclick: () => model.hidden = !model.hidden }, '👀 모범 답안 보기') };
    }
  };
  TYPES.lmc = TYPES.mc;

  function dialog(lines, ko) {
    return h('div', { class: 'dlgbox' }, lines.map((l, i) => h('div', { class: 'dl', onclick: () => TTS.say(l[1]) }, h('b', null, l[0]), h('span', null, l[1], ko && ko[i] ? h('small', null, ko[i]) : null))));
  }
  function accentBar(body) {
    let last = null;
    body.addEventListener('focusin', e => { if (e.target.matches('input[type=text],textarea')) last = e.target; });
    body.append(h('div', { class: 'accents' }, h('small', null, '특수문자:'), ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'].map(ch => h('button', { onmousedown: ev => ev.preventDefault(), onclick: () => { if (!last) return; const st = last.selectionStart ?? last.value.length; last.value = last.value.slice(0, st) + ch + last.value.slice(last.selectionEnd ?? st); last.focus(); last.setSelectionRange(st + 1, st + 1); last.dispatchEvent(new Event('input')); } }, ch))));
  }

  /* ---------- bootstrap ---------- */
  A.boot = function (page) {
    const load = (src) => new Promise((res) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = res; document.head.append(s); });
    const v = '?v=' + (A.cfg.ver || 1);
    if (page === 'main') Promise.all(A.cfg.units.map(n => load(`data/u${n}.js${v}`))).then(() => A.renderMain());
    else { const n = +(new URLSearchParams(location.search).get('u') ?? A.cfg.units[0]); load(`data/u${n}.js${v}`).then(() => A.renderUnit(n)); }
  };
})();
