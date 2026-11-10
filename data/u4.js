AULA.unit({
  n: 4, title: 'Antes de que sea tarde', ko: '너무 늦기 전에 — 사회 인식 캠페인',
  goal: '미래 예측하기, 환경 문제의 원인과 결과 분석·발표하기, 글의 응집성 높이기 — 사회 인식 캠페인 만들기',
  can: ['접속법 현재완료', '시간 구문: mientras, hasta (que), en cuanto, antes de (que), después de (que)', '텍스트 응집: dicho, el citado, tal', '명사화'],
  tags: ['perfecto de subjuntivo', 'construcciones temporales', 'cohesión textual', 'nominalización', 'medioambiente', 'campaña'],
  vocab: [
    { g: '환경 · Medioambiente', w: [['el calentamiento global', '지구 온난화'], ['las emisiones de CO₂', '이산화탄소 배출'], ['los combustibles fósiles', '화석 연료'], ['la subida del nivel del mar', '해수면 상승'], ['los microplásticos', '미세 플라스틱'], ['la biodiversidad', '생물 다양성'], ['el ecosistema', '생태계'], ['la desertificación', '사막화'], ['la sobreexplotación', '남획·과잉 개발'], ['los residuos tóxicos', '유독 폐기물'], ['la economía circular', '순환 경제'], ['la transición energética', '에너지 전환']] },
    { g: '원인·결과 · Causas y consecuencias', w: [['provocar', '야기하다'], ['causar', '일으키다'], ['agravar', '악화시키다'], ['frenar', '막다·늦추다'], ['paliar', '완화하다'], ['la causa principal', '주원인'], ['como consecuencia', '그 결과'], ['debido a', '~때문에'], ['a causa de', '~ 때문에'], ['lo que conlleva', '그로 인해 수반되는 것']] },
    { g: '응집 장치 · Cohesión', w: [['dicho/-a/-os/-as', '앞서 말한'], ['el citado / la citada', '앞서 언급한'], ['tal / tales', '그러한'], ['este fenómeno', '이 현상'], ['dicha medida', '그 조치'], ['el mismo / la misma', '같은 것'], ['el primero… el segundo', '전자… 후자']] }
  ],
  gram: [
    { h: '접속법 현재완료 (haya + 과거분사)', p: '미래의 어느 시점까지 완료될 일, 또는 완료된 일에 대한 평가·감정.', ex: [['Cuando hayamos reducido las emisiones, la temperatura se estabilizará.', '배출을 줄이고 나면 기온이 안정될 것이다.'], ['Es increíble que no se haya hecho nada todavía.', '아직 아무것도 안 했다는 게 믿기지 않는다.']] },
    { h: '시간 구문', t: [['구문', '+ 원형', '+ 접속법 (미래)'], ['antes de / antes de que', 'antes de salir', 'antes de que sea tarde'], ['después de / después de que', 'después de comer', 'después de que llegue'], ['hasta / hasta que', 'hasta mañana', 'hasta que cambien las leyes'], ['en cuanto', '—', 'en cuanto lo sepa'], ['mientras', '—', 'mientras sigamos así']], tip: '**antes de que**는 항상 접속법! (과거면 접속법 과거: antes de que fuera tarde)' },
    { h: '명사화 (nominalización)', p: '동사를 명사로 바꿔 글을 더 격식 있고 간결하게.', t: [['동사', '명사'], ['contaminar', 'la contaminación'], ['reducir', 'la reducción'], ['subir', 'la subida'], ['talar', 'la tala'], ['consumir', 'el consumo']], ex: [['Han talado muchos árboles. → La tala de árboles…', '']] },
    { h: '텍스트 응집: dicho, el citado, tal', ex: [['El gobierno aprobó una ley contra el plástico. Dicha ley entrará en vigor en 2027.', '정부가 플라스틱 규제법을 통과시켰다. 그 법은 2027년에 시행된다.']] }
  ],
  ex: [
    { k: 'fill', t: '접속법 현재완료', it: ['Cuando [hayas terminado], apaga las luces. (terminar, tú)', 'Me alegro de que [hayáis venido]. (venir, vosotros)', 'No creo que el problema se [haya solucionado]. (solucionar)', 'En cuanto [hayamos recogido] las firmas, las enviaremos. (recoger, nosotros)'] },
    { k: 'fill', t: '원형? 접속법?', it: ['Hay que actuar antes de que {ser|*sea} demasiado tarde.', 'Antes de {*tirar|tire} el plástico, sepáralo.', 'Seguiremos protestando hasta que {*cambien|cambian} la ley.', 'En cuanto {*llegue|llega} el verano, habrá incendios.', 'Después de {*leer|lea} el informe, me preocupé mucho.'] },
    { k: 'fill', t: '명사화', it: ['reducir → la [reducción]', 'contaminar → la [contaminación]', 'consumir → el [consumo]', 'talar → la [tala]', 'desaparecer → la [desaparición]', 'calentar → el [calentamiento]'] },
    { k: 'fill', t: '응집 표현', it: ['El informe advierte del deshielo. [Dicho] informe fue publicado ayer.', 'Se detectaron microplásticos en la sal. [Tal] descubrimiento sorprendió a los científicos.', 'Hablamos con la bióloga Ana Ríos. La [citada] experta recomienda reducir el consumo de carne.'] },
    { k: 'match', t: '원인과 결과', it: [['la quema de combustibles fósiles', 'aumento de las emisiones de CO₂'], ['el deshielo de los polos', 'subida del nivel del mar'], ['la tala de bosques', 'pérdida de biodiversidad'], ['el uso masivo de plástico', 'microplásticos en los océanos'], ['la sequía prolongada', 'desertificación']] },
    { k: 'tf', t: '읽기 — 캠페인 텍스트', text: '**#AntesDeQueSeaTarde**\nCada minuto llega al mar el equivalente a un camión de basura plástica. Dicha basura se rompe en pequeñas partículas, los llamados microplásticos, que acaban en el pescado que comemos. La reducción del plástico de un solo uso es urgente: hasta que no cambiemos nuestros hábitos, el problema seguirá creciendo. Te proponemos un reto: durante un mes, no compres nada envasado en plástico. Cuando lo hayas conseguido, compártelo con la etiqueta de la campaña.',
      it: [['Cada minuto llega al mar mucho plástico.', true], ['Los microplásticos no llegan a nuestra comida.', false], ['La campaña propone un reto de una semana.', false], ['Hay que compartir el resultado con una etiqueta.', true]] },
    { k: 'dlg', t: '듣기 — 캠페인 회의', listen: 1,
      lines: [['Elena', 'Para la campaña, propongo el tema del desperdicio de comida.'], ['Omar', 'Me parece bien, pero antes de que decidamos, miremos los datos.'], ['Elena', 'Según la FAO, se tira un tercio de los alimentos producidos.'], ['Omar', '¡Es increíble que no se haya hecho más! Vale, acepto.'], ['Elena', 'En cuanto tengamos el eslogan, empezamos con los carteles.']],
      it: [['캠페인 주제는?', '플라스틱|*음식물 낭비|에너지'], ['버려지는 음식의 비율은?', '1/2|*1/3|1/4'], ['포스터는 언제 시작?', '내일|*슬로건이 정해지는 대로|다음 주']] },
    { k: 'order', t: '문장 만들기', it: ['Hay que actuar antes de que sea tarde.', 'Dicha medida entrará en vigor en enero.', 'La reducción del consumo es urgente.', 'En cuanto lo hayas leído, compártelo.'] },
    { k: 'dict', t: '받아쓰기', it: ['La tala de árboles provoca la pérdida de biodiversidad.', 'Seguiremos hasta que cambien las leyes.', 'Es increíble que no se haya hecho nada.'] },
    { k: 'write', t: '사회 인식 캠페인', d: '관심 있는 문제(환경·사회)를 골라 캠페인 텍스트를 써 보세요: 문제·원인·결과(명사화, 응집 표현) + 시간 구문 + 행동 제안 + 해시태그.', model: '#NiUnaGotaMás. En Corea, el consumo de agua embotellada se ha duplicado en diez años. Dicho aumento provoca toneladas de residuos plásticos. Además, la producción de botellas conlleva enormes emisiones de CO₂. Hasta que no cambiemos nuestros hábitos, el problema seguirá creciendo. Te proponemos que, antes de comprar agua, busques una fuente. Cuando hayas usado tu botella reutilizable durante un mes, ¡súbelo con #NiUnaGotaMás!' }
  ]
});
