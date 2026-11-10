AULA.unit({
  n: 3, title: 'Así pasó', ko: '그렇게 일어났다 — 동네 이야기 TV 프로그램',
  goal: '과거 시제 엮어 이야기하기, 과거 사건 언급하기, 부탁·경고 전달하기, 전설·이야기 들려주기',
  can: ['시간 구문: justo en ese momento, estar a punto de, entonces', '불완료과거 직설법·접속법 용법', '현재분사 용법', '형용사의 위치'],
  tags: ['tiempos del pasado', 'estar a punto de', 'imperfecto de subjuntivo', 'gerundio', 'colocación del adjetivo', 'crónicas', 'leyendas', 'historia de las ciudades'],
  vocab: [
    { g: '시간 연결 · Marcadores', w: [['justo en ese momento', '바로 그 순간'], ['estar a punto de + 원형', '막 ~하려던 참이다'], ['entonces', '그때·그러자'], ['de golpe', '한꺼번에·갑자기'], ['al rato', '잠시 후'], ['a la mañana siguiente', '다음 날 아침'], ['poco después', '조금 뒤'], ['en cuanto', '~하자마자'], ['nada más + 원형', '~하자마자']] },
    { g: '언론·연대기 · Crónicas', w: [['la crónica', '르포·연대기'], ['el suceso', '사건'], ['el/la testigo', '목격자'], ['según testigos', '목격자들에 따르면'], ['los hechos', '사실관계'], ['ocurrir / suceder', '일어나다'], ['provocar', '일으키다'], ['la multitud', '군중'], ['la hazaña', '위업']] },
    { g: '도시의 역사 · Historia', w: [['fundar', '세우다·창건하다'], ['la muralla', '성벽'], ['el asedio', '포위'], ['la plaga', '역병'], ['el incendio', '화재'], ['reconstruir', '재건하다'], ['la leyenda', '전설'], ['cuenta la leyenda que…', '전설에 따르면…'], ['érase una vez', '옛날 옛적에']] },
    { g: '축구 · Fútbol', w: [['marcar un gol', '골을 넣다'], ['el penalti', '페널티킥'], ['la prórroga', '연장전'], ['empatar', '비기다'], ['remontar', '역전하다'], ['el árbitro', '심판'], ['la afición', '팬들']] }
  ],
  gram: [
    { h: '시간 구문', ex: [['Estaba a punto de salir cuando sonó el teléfono.', '막 나가려던 참에 전화가 울렸다.'], ['Justo en ese momento, se fue la luz.', '바로 그 순간 정전이 됐다.'], ['Nada más entrar, vi a mi ex.', '들어가자마자 전 애인을 봤다.']] },
    { h: '불완료과거: 직설법 vs. 접속법', p: '과거의 부탁·경고·바람을 전달할 때 → **접속법 과거**.', ex: [['Me pidió que no le contara nada a nadie.', '아무에게도 말하지 말라고 부탁했다.'], ['Nos advirtieron que tuviéramos cuidado.', '조심하라고 우리에게 경고했다.'], ['Era una noche oscura y llovía.', '어두운 밤이었고 비가 오고 있었다. (직설법: 배경)']] },
    { h: '현재분사 용법', t: [['용법', '예'], ['방법', 'Llegó corriendo.'], ['동시 동작', 'Salió llorando de la sala.'], ['조건·원인', 'Estudiando así, aprobarás.'], ['seguir/llevar + 현재분사', 'Siguió hablando una hora.']] },
    { h: '형용사의 위치 — 의미가 달라져요!', t: [['명사 앞', '명사 뒤'], ['un gran hombre (위대한)', 'un hombre grande (몸집이 큰)'], ['un viejo amigo (오랜)', 'un amigo viejo (나이 든)'], ['un pobre chico (불쌍한)', 'un chico pobre (가난한)'], ['un nuevo coche (새로 바꾼)', 'un coche nuevo (새것인)'], ['la única persona (유일한)', 'una persona única (특별한)']] }
  ],
  ex: [
    { k: 'fill', t: '시간 구문', it: ['Estábamos a [punto] de cenar cuando llegó la policía.', '[Justo] en ese momento, el árbitro pitó el final.', '[Nada] más llegar a casa, me di cuenta de que no tenía la cartera.', 'Al [rato], apareció un hombre con un perro.'] },
    { k: 'fill', t: '과거 시제 엮기', it: ['{*Eran|Fueron} las once de la noche y la calle {*estaba|estuvo} vacía.', 'De repente {*oí|oía} un ruido extraño.', 'Cuando {*llegaron|llegaban} los bomberos, el fuego ya se {*había apagado|apagó}.', 'Mientras el alcalde {*hablaba|habló}, alguien {*gritó|gritaba} desde el público.'] },
    { k: 'fill', t: '부탁·경고 전달 → 접속법 과거', it: ['«No toques nada.» → Me dijo que no [tocara] nada.', '«Tened cuidado.» → Nos advirtió que [tuviéramos] cuidado.', '«Cierra la puerta.» → Me pidió que [cerrara] la puerta.', '«Vuelve pronto.» → Mi madre me pidió que [volviera] pronto.', '«No digáis nada.» → Nos pidió que no [dijéramos] nada.'] },
    { k: 'mc', t: '형용사 위치와 의미', audio: false, it: [['«Es un ___»: 오래 알고 지낸 친구', '*viejo amigo|amigo viejo'], ['«Es un ___»: 키가 크고 덩치 큰 남자', 'gran hombre|*hombre grande'], ['«¡___!»: 불쌍한 아이 (가엾어라)', '*Pobre niño|Niño pobre'], ['«Es una ___»: 특별하고 독특한 사람', 'única persona|*persona única']] },
    { k: 'tf', t: '듣기 — 도시 전설', listen: 1, text: 'Cuenta la leyenda que, hace siglos, una joven llamada Isabel vivía en una casa junto a la muralla de Teruel. Estaba enamorada de Diego, un chico pobre. El padre de Isabel le pidió a Diego que se fuera a hacer fortuna y le dio cinco años. Diego volvió rico justo el día en que Isabel se estaba casando con otro hombre. Él le pidió un beso, ella se lo negó, y Diego murió de tristeza. Al día siguiente, Isabel murió en su funeral.',
      it: [['La historia ocurre en Teruel.', true], ['Diego era un chico rico al principio.', false], ['El padre le dio cinco años a Diego.', true], ['Diego volvió antes de la boda.', false], ['Isabel murió en el funeral de Diego.', true]] },
    { k: 'tf', t: '읽기 — 축구 경기 기사', text: 'Faltaban tres minutos para el final y el equipo local perdía 1-2. La afición estaba a punto de abandonar el estadio cuando, de golpe, el delantero recibió un balón perfecto y marcó el empate. Nada más sacar de centro, los visitantes perdieron el balón y, justo en ese momento, el árbitro pitó penalti. El capitán lo lanzó temblando, pero marcó. Fue una remontada histórica.',
      it: [['El equipo local perdía a tres minutos del final.', true], ['La afición ya se había ido.', false], ['El equipo local remontó el partido.', true], ['El último gol fue de cabeza.', false]] },
    { k: 'order', t: '문장 만들기', it: ['Estaba a punto de dormirme cuando sonó el timbre.', 'Nos pidió que no dijéramos nada.', 'Salió corriendo de la casa.', 'Cuenta la leyenda que aquí vivía una reina.'] },
    { k: 'dict', t: '받아쓰기', it: ['Justo en ese momento se fue la luz.', 'Me advirtió que tuviera cuidado.', 'Es un viejo amigo de mi padre.'] },
    { k: 'write', t: '우리 동네 이야기 (TV 대본)', d: '동네의 전설·역사적 사건·기억에 남는 일을 TV 내레이션처럼 써 보세요. 과거 시제 엮기, 시간 구문, 전달된 경고·부탁(접속법 과거)을 넣으세요.', model: 'Cuenta la leyenda que, hace muchos años, en lo alto de la montaña de nuestro barrio vivía un viejo pescador. Una noche de tormenta estaba a punto de salir al mar cuando su hija le pidió que se quedara en casa. Él no le hizo caso. Justo en ese momento, un rayo iluminó el cielo y el pescador vio un enorme dragón en el agua. Nada más volver, les advirtió a todos que no salieran al mar en noches de tormenta. Desde entonces, nadie pesca cuando llueve.' }
  ]
});
