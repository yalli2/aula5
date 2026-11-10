AULA.unit({
  n: 6, title: 'Como no lo sabía…', ko: '몰랐으니까… — 역사가 달랐다면',
  goal: '과거 사실 평가하기, 일어나지 않은 과거의 일과 그 결과 말하기, 비난하기, 다른 사람의 말 전달하기 — “역사가 달랐다면?” 발표',
  can: ['대명사 결합 se lo', '접속법 과거완료 (hubiera + 과거분사)', '조건법 완료 (habría + 과거분사)', '과거 사실 반대 가정', '원인·결과 연결어', '비난하기'],
  tags: ['pluscuamperfecto de subjuntivo', 'condicional compuesto', 'si hubiera…', 'reproches', 'se lo', 'educación', 'biografías'],
  vocab: [
    { g: '교육 · Educación', w: [['la etapa escolar', '학창 시절'], ['el bachillerato', '고등학교 과정'], ['la selectividad (PAU)', '대학 입학 시험'], ['la carrera universitaria', '대학 전공 과정'], ['la vocación', '천직·소명'], ['el/la autodidacta', '독학한 사람'], ['repetir curso', '유급하다'], ['dejar los estudios', '학업을 그만두다'], ['sacar buenas notas', '좋은 성적을 받다'], ['la beca Erasmus', '에라스무스 장학금']] },
    { g: '인생 경로 · Recorridos vitales', w: [['tomar una decisión', '결정을 내리다'], ['arrepentirse de', '~을 후회하다'], ['dar un giro', '방향을 틀다'], ['aprovechar una oportunidad', '기회를 잡다'], ['dejar pasar', '놓치다'], ['cambiar el rumbo', '진로를 바꾸다'], ['el punto de inflexión', '전환점'], ['por casualidad', '우연히']] },
    { g: '비난 · Reproches', w: [['¡Haberlo dicho antes!', '진작 말하지!'], ['Deberías haber…', '…했어야 했어'], ['Podrías haber…', '…할 수도 있었잖아'], ['No tendrías que haber…', '…하지 말았어야 했어'], ['¿Por qué no me avisaste?', '왜 나한테 안 알려 줬어?'], ['Si me lo hubieras dicho…', '나한테 말해 줬더라면…']] }
  ],
  gram: [
    { h: '대명사 결합: le/les + lo → se lo', ex: [['— ¿Le diste el regalo a Marta? — Sí, se lo di ayer.', '응, 어제 줬어.'], ['— ¿Les contaste la verdad a tus padres? — No, no se la conté.', '아니, 말 안 했어.']] },
    { h: '접속법 과거완료 · 조건법 완료', t: [['', '접속법 과거완료', '조건법 완료'], ['yo', 'hubiera estudiado', 'habría estudiado'], ['tú', 'hubieras estudiado', 'habrías estudiado'], ['él/ella', 'hubiera estudiado', 'habría estudiado'], ['nosotros', 'hubiéramos estudiado', 'habríamos estudiado'], ['vosotros', 'hubierais estudiado', 'habríais estudiado'], ['ellos', 'hubieran estudiado', 'habrían estudiado']] },
    { h: '과거 사실 반대 가정', p: '**si + 접속법 과거완료, 조건법 완료** (그때 ~했더라면, ~했을 텐데)', ex: [['Si hubiera estudiado más, habría aprobado.', '더 공부했더라면 합격했을 텐데.'], ['Si Colón no hubiera llegado a América, la historia habría sido diferente.', '콜럼버스가 아메리카에 도착하지 않았다면 역사는 달랐을 것이다.']], tip: '구어에서는 결과절에도 접속법 과거완료를 자주 써요: …, **hubiera aprobado**.' },
    { h: '평가·비난', ex: [['Me molestó que no me hubieras avisado.', '네가 나에게 알리지 않았던 게 거슬렸어.'], ['Deberías haberme llamado.', '나한테 전화했어야지.'], ['Como no lo sabía, no fui.', '몰랐기 때문에 안 갔어.']] }
  ],
  ex: [
    { k: 'fill', t: 'se lo / se la / se los / se las', it: ['— ¿Le enviaste el correo al profesor? — Sí, [se lo] envié anoche.', '— ¿Les diste las entradas a tus primos? — Sí, [se las] di.', '— ¿Le contaste la noticia a Ana? — No, todavía no [se la] he contado.', '— ¿Le devolviste los libros a la biblioteca? — Sí, [se los] devolví.'] },
    { k: 'fill', t: '접속법 과거완료 · 조건법 완료', it: ['Si [hubiera sabido] la verdad, no habría ido. (saber, yo)', 'Si me hubieras llamado, te [habría ayudado]. (ayudar, yo)', 'Si no [hubiéramos perdido] el tren, habríamos llegado a tiempo. (perder)', 'Si Ana hubiera estudiado Medicina, [habría sido] una gran médica. (ser)', 'Si [hubieran salido] antes, no se habrían mojado. (salir, ellos)'] },
    { k: 'fill', t: '비난 표현', it: ['¡Deberías [haberme] avisado! (나에게 알렸어야지)', 'No tendrías que [haber] dicho eso.', 'Podrías [haber] llamado antes de venir.', 'Me sentó fatal que no me [hubieras] invitado.'] },
    { k: 'mc', t: '어떤 결과?', audio: false, it: [['Si no hubiera ido a aquella fiesta, …', '*no habría conocido a mi novia.|no conozco a mi novia.|no conocería mañana a mi novia.'], ['Si hubiera aprovechado la beca, …', 'estudio en Italia ahora mismo.|*habría estudiado en Italia.|estudiaré en Italia.'], ['Si me lo hubieras dicho antes, …', '*te habría ayudado.|te ayudo.|te ayudaré.']] },
    { k: 'tf', t: '읽기 — 인생의 전환점', text: 'La escritora **Elena Garrido** suspendió dos veces la selectividad. «Si hubiera aprobado a la primera, habría estudiado Derecho, como quería mi padre», cuenta. Como no pudo entrar en la universidad, se puso a trabajar en una librería, donde por casualidad conoció a una editora. Fue el punto de inflexión de su vida. Hoy ha publicado ocho novelas. ¿Se arrepiente? «De nada. Bueno, quizás de no haber viajado más de joven.»',
      it: [['Elena aprobó la selectividad a la primera.', false], ['Su padre quería que estudiara Derecho.', true], ['Conoció a una editora en la universidad.', false], ['Ha publicado ocho novelas.', true], ['Se arrepiente de no haber viajado más.', true]] },
    { k: 'dlg', t: '듣기 — 놓친 콘서트', listen: 1,
      lines: [['Irene', '¿Por qué no viniste ayer al concierto?'], ['Teo', '¿Qué concierto? Nadie me dijo nada.'], ['Irene', '¡Te lo puse en el grupo de WhatsApp!'], ['Teo', 'Es que había silenciado el grupo… Como no lo sabía, me quedé en casa.'], ['Irene', 'Pues si hubieras venido, habrías conocido al cantante. ¡Se hizo fotos con nosotros!'], ['Teo', '¡No me digas! Deberías haberme llamado.']],
      it: [['Teo가 콘서트에 못 간 이유는?', '아팠다|*몰랐다|돈이 없었다'], ['Irene은 어떻게 알렸나요?', '전화|*단체방 메시지|이메일'], ['Teo가 왔다면?', '*가수를 만났을 것이다|무대에 올랐을 것이다|표를 받았을 것이다'], ['Teo의 비난은?', '*전화했어야지|표를 샀어야지|기다렸어야지']] },
    { k: 'order', t: '문장 만들기', it: ['Si hubiera estudiado más, habría aprobado.', 'Deberías haberme llamado antes.', 'Como no lo sabía, no fui a la fiesta.', 'Se lo conté todo a mis padres.'] },
    { k: 'dict', t: '받아쓰기', it: ['Si lo hubiera sabido, habría venido.', 'No tendrías que haber dicho eso.', '¿Se lo diste ayer?'] },
    { k: 'write', t: '“역사가 달랐다면?” 발표문', d: '역사적 사건 하나(또는 내 인생의 결정 하나)를 골라, 그것이 다르게 일어났다면 어땠을지 si + 접속법 과거완료, 조건법 완료로 써 보세요.', model: 'Si Gutenberg no hubiera inventado la imprenta en el siglo XV, los libros habrían seguido siendo carísimos durante mucho más tiempo. Probablemente, muy poca gente habría aprendido a leer y las ideas científicas no se habrían difundido tan rápido. Quizás la Revolución Científica habría llegado siglos más tarde. Y, si eso hubiera pasado, hoy no tendríamos internet… ¡ni esta presentación!' }
  ]
});
