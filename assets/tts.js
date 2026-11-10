/* Spanish TTS – picks the most natural native Spanish voice available in the browser */
(function () {
  const S = window.TTS = {};
  const LS = 'aula-tts';
  let voices = [], pref = {};
  try { pref = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { pref = {}; }
  S.rate = pref.rate || 0.92;
  S.region = pref.region || 'es-ES';

  function score(v) {
    const n = (v.name || '').toLowerCase(), l = (v.lang || '').replace('_', '-');
    if (!/^es/i.test(l)) return -1;
    let s = 0;
    if (/natural|neural|online|premium|enhanced|mejorad/.test(n)) s += 100;
    if (/google/.test(n)) s += 60;
    if (/microsoft/.test(n)) s += 25;
    if (/(elvira|alvaro|álvaro|ximena|abril|dalia|jorge|paloma|monica|mónica|paulina|marisol|jimena|diego|juan|francisca|lucia|lucía|sergio|conchita|enrique|helena|laura|pablo|raul|sabina)/.test(n)) s += 30;
    if (l.toLowerCase() === S.region.toLowerCase()) s += 15;
    else if (/es-(es|mx|us|419)/i.test(l)) s += 5;
    if (v.localService === false) s += 5;
    if (/compact|espeak|robot/.test(n)) s -= 80;
    return s;
  }
  function gender(v) {
    const n = v.name.toLowerCase();
    if (/(alvaro|álvaro|jorge|diego|juan|sergio|enrique|pablo|raul|raúl|gerardo|carlos|andrés|male|hombre|tomas|tomás|jose|josé|liam|gonzalo)/.test(n)) return 'm';
    return 'f';
  }
  function load() {
    if (!('speechSynthesis' in window)) return;
    voices = speechSynthesis.getVoices().filter(v => score(v) >= 0).sort((a, b) => score(b) - score(a));
    S.voices = voices;
    if (S.onchange) S.onchange();
  }
  S.list = () => voices;
  S.main = function () {
    if (pref.voice) { const v = voices.find(x => x.name === pref.voice); if (v) return v; }
    return voices[0] || null;
  };
  S.alt = function () { // a second, different (ideally other-gender) voice for dialogues
    const m = S.main(); if (!m) return null;
    const g = gender(m);
    return voices.find(v => v !== m && gender(v) !== g && v.lang.slice(0, 2) === 'es') || voices.find(v => v !== m) || m;
  };
  S.save = function (o) { Object.assign(pref, o); if (o.rate) S.rate = o.rate; if (o.region) S.region = o.region; localStorage.setItem(LS, JSON.stringify(pref)); load(); };
  S.stop = () => { if ('speechSynthesis' in window) speechSynthesis.cancel(); };
  S.say = function (text, opt) {
    opt = opt || {};
    if (!('speechSynthesis' in window)) { alert('이 브라우저는 음성 기능을 지원하지 않아요. Chrome / Edge / Safari를 사용해 주세요.'); return Promise.resolve(); }
    if (!opt.queue) speechSynthesis.cancel();
    text = String(text).replace(/[_]{2,}/g, ' ').replace(/\s*\/\s*/g, ', ').replace(/[“”«»"]/g, '');
    return new Promise(res => {
      const u = new SpeechSynthesisUtterance(text);
      const v = opt.voice || S.main();
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = S.region;
      u.rate = (opt.rate || S.rate) * (opt.slow ? 0.72 : 1);
      u.pitch = 1;
      u.onend = u.onerror = () => res();
      speechSynthesis.speak(u);
    });
  };
  S.sayLines = async function (lines, onLine) { // lines: [[speaker,text],...]
    S.stop();
    const spk = {}; let k = 0;
    const vs = [S.main(), S.alt()];
    S._abort = false;
    for (let i = 0; i < lines.length; i++) {
      if (S._abort) break;
      const who = lines[i][0];
      if (!(who in spk)) spk[who] = vs[(k++) % 2];
      onLine && onLine(i);
      await S.say(lines[i][1], { voice: spk[who], queue: true });
    }
    onLine && onLine(-1);
  };
  S.abort = () => { S._abort = true; S.stop(); };
  if ('speechSynthesis' in window) {
    load();
    speechSynthesis.onvoiceschanged = load;
    setTimeout(load, 400); setTimeout(load, 1500);
  }
})();
