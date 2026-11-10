AULA.unit({
  n: 1, title: 'El cuerpo en movimiento', ko: '움직이는 몸 — 신체 활동 수업 준비',
  goal: '활동·동작·자세 묘사하기, 지시하기, 감정·기분 표현하기 — 요가·춤·연극 같은 신체 활동 수업 진행하기',
  can: ['형용사·현재분사·부사로 동작 묘사', 'mientras / mientras tanto / al + 원형', '대명동사 (재귀형)', 'poner(se) · quedar(se)의 용법'],
  tags: ['gerundio', 'adverbios', 'al + infinitivo', 'mientras', 'verbos pronominales', 'ponerse / quedarse', 'deporte', 'baile', 'teatro'],
  vocab: [
    { g: '동작 · Movimientos', w: [['estirar', '쭉 펴다'], ['doblar', '구부리다'], ['girar', '돌리다'], ['inclinarse', '몸을 숙이다'], ['agacharse', '쪼그려 앉다'], ['apoyar', '대다·짚다'], ['levantar', '들어 올리다'], ['bajar', '내리다'], ['respirar hondo', '깊게 숨쉬다'], ['soltar el aire', '숨을 내쉬다'], ['saltar', '뛰다'], ['mantener el equilibrio', '균형을 유지하다']] },
    { g: '자세 · Postura', w: [['de pie', '서서'], ['sentado/-a', '앉아서'], ['tumbado/-a boca arriba', '똑바로 누워서'], ['tumbado/-a boca abajo', '엎드려서'], ['de rodillas', '무릎 꿇고'], ['de puntillas', '발끝으로'], ['con las piernas cruzadas', '다리를 꼬고(양반다리로)'], ['con los brazos extendidos', '팔을 쭉 뻗고'], ['con la espalda recta', '등을 곧게 펴고']] },
    { g: '연극·춤·스포츠 · Ámbitos', w: [['el escenario', '무대'], ['el ensayo', '리허설'], ['el calentamiento', '준비 운동'], ['la coreografía', '안무'], ['el ritmo', '리듬'], ['la improvisación', '즉흥'], ['el gesto', '몸짓'], ['la expresión corporal', '신체 표현'], ['la flexibilidad', '유연성'], ['la resistencia', '지구력']] },
    { g: '기분 변화 · Ponerse / quedarse', w: [['ponerse nervioso/-a', '긴장하다'], ['ponerse rojo/-a', '얼굴이 빨개지다'], ['ponerse contento/-a', '기뻐하다'], ['quedarse en blanco', '머리가 하얘지다'], ['quedarse helado/-a', '얼어붙다'], ['quedarse dormido/-a', '잠들어 버리다'], ['quedarse sin aire', '숨이 차다']] }
  ],
  gram: [
    { h: '동작 묘사: 형용사 · 현재분사 · 부사', ex: [['Entra en el escenario despacio, mirando al público.', '천천히, 관객을 보며 무대에 들어간다.'], ['Camina descalza y con los ojos cerrados.', '맨발로 눈을 감고 걷는다.'], ['Levanta los brazos lentamente.', '팔을 천천히 든다.']] },
    { h: '시간 구문: mientras · mientras tanto · al + 원형', t: [['형태', '의미', '예'], ['mientras + 동사', '~하는 동안', 'Respira mientras estiras.'], ['mientras tanto', '그동안', 'Tú baila; mientras tanto, yo canto.'], ['al + 원형', '~할 때 / ~하자마자', 'Al subir los brazos, coge aire.']] },
    { h: '대명동사 (재귀형으로 의미가 바뀌는 동사)', t: [['일반', '대명동사'], ['dormir (자다)', 'dormirse (잠들다)'], ['ir (가다)', 'irse (떠나다)'], ['quedar (약속하다·남다)', 'quedarse (머무르다·~하게 되다)'], ['poner (놓다)', 'ponerse (입다·~하게 되다)'], ['mover (옮기다)', 'moverse (움직이다)']] },
    { h: 'PONERSE vs. QUEDARSE', p: '**ponerse** + 형용사: 일시적 감정·상태 변화 (Se puso nervioso) · **quedarse** + 형용사/부사: 어떤 일의 결과로 남은 상태 (Se quedó sorprendido, Se quedó sin palabras)' }
  ],
  ex: [
    { k: 'fill', t: '부사 만들기 (-mente)', it: ['lento → [lentamente]', 'suave → [suavemente]', 'tranquilo → [tranquilamente]', 'rápido → [rápidamente]', 'profundo → [profundamente]'] },
    { k: 'fill', t: '현재분사로 묘사하기', it: ['Entra en clase [sonriendo]. (sonreír)', 'Sube las escaleras [corriendo]. (correr)', 'Estira la espalda [respirando] hondo. (respirar)', 'Baila [moviendo] mucho los brazos. (mover)', 'Se despidió [diciendo] adiós con la mano. (decir)'] },
    { k: 'fill', t: 'mientras / mientras tanto / al + 원형', it: ['[Al] terminar el ejercicio, túmbate en el suelo.', 'Respira hondo [mientras] levantas los brazos.', 'Tú prepara la música; [mientras tanto], yo coloco las colchonetas.', '[Al] entrar en el escenario, me quedé en blanco.'] },
    { k: 'fill', t: 'ponerse 또는 quedarse', it: ['Cuando hablo en público, me [pongo] muy nerviosa.', 'Después de la noticia, se [quedó] sin palabras.', 'Al verla, se [puso] rojo como un tomate.', 'Anoche me [quedé] dormido viendo la tele.', 'Mi madre se [puso] contentísima con el regalo.'] },
    { k: 'mc', t: '어떤 자세?', audio: false, it: [['Estás sobre la espalda, mirando al techo.', '*tumbado boca arriba|de rodillas|de puntillas'], ['Te apoyas solo en los dedos de los pies.', 'sentado|*de puntillas|boca abajo'], ['Estás en el suelo con las rodillas tocándolo.', 'de pie|*de rodillas|boca arriba'], ['Estás en el suelo mirando hacia abajo.', '*tumbado boca abajo|de pie|sentado']] },
    { k: 'tf', t: '듣기 — 요가 수업 지시', listen: 1, text: 'Bienvenidos. Empezamos de pie, con los pies juntos y la espalda recta. Al coger aire, levantad los brazos lentamente por encima de la cabeza. Mientras soltáis el aire, inclinaos hacia delante, doblando un poco las rodillas. Quedaos así unos segundos, respirando tranquilamente. Ahora, apoyad las manos en el suelo y llevad un pie hacia atrás.',
      it: [['La clase empieza sentados.', false], ['Hay que levantar los brazos al coger aire.', true], ['Se inclinan hacia delante al soltar el aire.', true], ['Hay que doblar mucho las rodillas.', false], ['Al final apoyan las manos en el suelo.', true]] },
    { k: 'match', t: '동작 어휘', it: [['estirar', '쭉 펴다'], ['agacharse', '쪼그려 앉다'], ['girar', '돌리다'], ['inclinarse', '몸을 숙이다'], ['mantener el equilibrio', '균형을 유지하다'], ['soltar el aire', '숨을 내쉬다']] },
    { k: 'order', t: '지시문 만들기', it: ['Al subir los brazos, coge aire.', 'Gira la cabeza lentamente hacia la derecha.', 'Respira hondo mientras estiras la espalda.', 'Me quedé en blanco en el examen oral.'] },
    { k: 'dict', t: '받아쓰기', it: ['Túmbate boca arriba y cierra los ojos.', 'Al verme, se puso muy contenta.', 'Camina despacio mirando al frente.'] },
    { k: 'write', t: '5분짜리 신체 활동 수업 대본', d: '요가·스트레칭·춤·연극 워밍업 중 하나를 골라 반 친구들에게 줄 지시문(vosotros 명령형, al + 원형, mientras, 부사, 현재분사)을 써 보세요.', model: 'Calentamiento de teatro: Poneos de pie formando un círculo. Al oír la música, caminad lentamente por la sala, mirando a los ojos de vuestros compañeros. Mientras camináis, respirad hondo. Cuando la música pare, quedaos inmóviles como estatuas. Ahora, moved solo los brazos, suavemente, como si estuvierais bajo el agua. Al final, tumbaos boca arriba y relajaos.' }
  ]
});
