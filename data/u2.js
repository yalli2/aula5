AULA.unit({
  n: 2, title: 'Dijo que lo haría', ko: '한다고 했잖아 — 중재(mediación) 시뮬레이션',
  goal: '목적과 의도 표현하기, 약속을 간접화법으로 언급하기, 약속 이행 요구하기 — 갈등 중재 연습',
  can: ['para + 원형 / para que + 접속법 현재·과거', '간접화법의 약속 (dijo que + 조건법)', 'hasta que / tan pronto como / cuando + 접속법', '비의도 se (se me olvidó)', 'a propósito / sin querer / adrede'],
  tags: ['finalidad', 'estilo indirecto', 'promesas', 'hasta que', 'tan pronto como', 'se involuntario', 'TIC', 'mediación'],
  vocab: [
    { g: '의도 · Intención', w: [['a propósito', '일부러'], ['adrede', '고의로'], ['sin querer', '모르고·실수로'], ['por error', '실수로'], ['queriendo', '의도적으로'], ['con mala intención', '나쁜 의도로'], ['no lo hice aposta', '일부러 그런 게 아니야']] },
    { g: '중재·갈등 · Mediación', w: [['el conflicto', '갈등'], ['la mediación', '중재'], ['el/la mediador/-a', '중재자'], ['las partes', '당사자들'], ['llegar a un acuerdo', '합의에 이르다'], ['ceder', '양보하다'], ['cumplir una promesa', '약속을 지키다'], ['incumplir', '어기다'], ['reclamar', '요구하다·항의하다'], ['comprometerse a', '~하기로 약속하다'], ['ponerse en el lugar de', '~의 입장이 되어 보다']] },
    { g: 'IT · TIC', w: [['la contraseña', '비밀번호'], ['el archivo adjunto', '첨부 파일'], ['descargar', '다운로드하다'], ['subir (a la nube)', '(클라우드에) 올리다'], ['borrar', '지우다'], ['la copia de seguridad', '백업'], ['el virus', '바이러스'], ['bloquearse', '먹통이 되다'], ['reenviar', '전달하다'], ['la actualización', '업데이트']] },
    { g: '접두사 형용사', w: [['incapaz', '할 수 없는'], ['irresponsable', '무책임한'], ['desordenado', '어지러운'], ['impuntual', '시간을 안 지키는'], ['deshonesto', '부정직한'], ['ilegal', '불법의'], ['inseguro', '불안한']] }
  ],
  gram: [
    { h: '목적: para + 원형 / para que + 접속법', p: '주어가 다르면 **para que + 접속법**. 주절이 과거면 접속법 **과거**.', ex: [['Te lo digo para que lo sepas.', '알라고 말하는 거야.'], ['Te lo dije para que lo supieras.', '알라고 말했던 거야.']] },
    { h: '약속의 간접화법', t: [['직접화법', '간접화법'], ['«Lo haré mañana.»', 'Dijo que lo **haría** al día siguiente.'], ['«Te llamo esta noche.»', 'Me dijo que me **llamaría** esa noche.'], ['«Cuando llegue, te escribo.»', 'Dijo que cuando **llegara**, me **escribiría**.']] },
    { h: 'hasta que / tan pronto como / cuando + 접속법 (미래)', ex: [['No me iré hasta que me lo devuelvas.', '그걸 돌려줄 때까지 안 갈 거야.'], ['Tan pronto como tenga el dinero, te pago.', '돈이 생기는 대로 갚을게.'], ['Dijo que me pagaría tan pronto como tuviera el dinero.', '돈이 생기는 대로 갚겠다고 했다.']] },
    { h: '비의도의 se', p: '**se + me/te/le… + 동사(3인칭)**: “(나도 모르게) ~해 버렸다” — 책임을 덜어 줘요.', ex: [['Se me olvidó la contraseña.', '비밀번호를 깜빡했어.'], ['Se le rompieron las gafas.', '그의 안경이 깨져 버렸다.'], ['Se nos ha estropeado el ordenador.', '우리 컴퓨터가 고장 나 버렸어.']] }
  ],
  ex: [
    { k: 'fill', t: 'para que + 접속법 현재/과거', it: ['Te lo explico para que lo [entiendas]. (entender)', 'Te lo expliqué para que lo [entendieras]. (entender)', 'Hablaré con él para que no [vuelva] a pasar. (volver)', 'Lo guardé en la nube para que no se [perdiera]. (perder)'] },
    { k: 'fill', t: '약속을 간접화법으로', it: ['«Te ayudaré.» → Dijo que me [ayudaría].', '«Vendré a las ocho.» → Dijo que [vendría] a las ocho.', '«Lo arreglaré mañana.» → Prometió que lo [arreglaría] al día siguiente.', '«Te devuelvo el libro cuando lo termine.» → Dijo que me lo devolvería cuando lo [terminara].', '«No volverá a pasar.» → Aseguró que no [volvería] a pasar.'] },
    { k: 'fill', t: 'hasta que / tan pronto como + 접속법', it: ['No saldrás hasta que [termines] los deberes. (terminar)', 'Te escribo tan pronto como [llegue]. (llegar)', 'Esperaré aquí hasta que [vuelvas]. (volver)', 'Dijo que llamaría tan pronto como [supiera] algo. (saber)'] },
    { k: 'fill', t: '비의도의 se', it: ['Lo siento, se [me] olvidó tu cumpleaños.', 'A Juan se le [rompió] el móvil. (romper)', 'Se nos [perdieron] las llaves. (perder)', 'Se [te] ha caído el bolígrafo.', 'Al profe se le [bloqueó] el ordenador en clase. (bloquear)'] },
    { k: 'mc', t: '일부러? 실수로?', audio: false, it: [['Borró el archivo para que nadie lo viera.', '*a propósito|sin querer'], ['Pisé a mi compañero, pero no lo vi.', 'adrede|*sin querer'], ['Rompió la ventana con el balón jugando al fútbol.', 'adrede|*sin querer'], ['Dejó la puerta abierta para que entrara el gato.', '*a propósito|sin querer']] },
    { k: 'dlg', t: '듣기 — 룸메이트 중재', listen: 1,
      lines: [['Mediadora', 'Bien, Andrés, ¿cuál es el problema?'], ['Andrés', 'Bea me prometió que pagaría su parte de internet a principios de mes, y ya estamos a día 20.'], ['Bea', 'Es verdad, pero es que se me olvidó. No lo hice a propósito.'], ['Mediadora', 'Bea, ¿podrías comprometerte a pagarlo?'], ['Bea', 'Sí. Tan pronto como cobre el viernes, se lo pago.'], ['Andrés', 'Vale, pero quiero que lo anotemos para que no vuelva a pasar.']],
      it: [['문제는?', '청소|*인터넷 요금|소음'], ['Bea는 언제 내기로 했었나요?', '*월초|월말|금요일'], ['Bea의 변명은?', '돈이 없었다|*깜빡했다|일부러 안 냈다'], ['Bea는 언제 낼 건가요?', '오늘|*금요일에 급여를 받는 대로|다음 달']] },
    { k: 'match', t: 'IT 어휘', it: [['la contraseña', '비밀번호'], ['la copia de seguridad', '백업'], ['el archivo adjunto', '첨부 파일'], ['descargar', '다운로드하다'], ['bloquearse', '먹통이 되다'], ['reenviar', '전달하다']] },
    { k: 'order', t: '문장 만들기', it: ['Me dijo que me llamaría esa noche.', 'Se me olvidó la contraseña.', 'No me iré hasta que me lo devuelvas.', 'Lo hice para que estuvieras contento.'] },
    { k: 'dict', t: '받아쓰기', it: ['Te lo digo para que lo sepas.', 'No lo hice a propósito.', 'Prometió que lo haría tan pronto como pudiera.'] },
    { k: 'write', t: '중재 대본 쓰기', d: '친구 사이의 갈등(빌린 물건을 안 돌려줌, 조별 과제 미참여 등)을 정해 중재자·두 당사자의 대화를 써 보세요: 약속 간접화법, 비의도 se, 목적, 합의.', model: 'MEDIADOR: ¿Qué ha pasado? JUN: Mina me dijo que me devolvería mi cámara el lunes, pero todavía no me la ha dado. MINA: Lo siento, se me rompió la funda sin querer y me daba vergüenza decírtelo. MEDIADOR: Mina, ¿qué propones para que Jun esté tranquilo? MINA: Tan pronto como compre una funda nueva, se la devuelvo. JUN: De acuerdo, pero avísame para que no tenga que preguntarte otra vez.' }
  ]
});
