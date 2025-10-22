// --- NOVO: DICIONÁRIO DE TRADUÇÃO DA FASE 1 ---
// Baseado no PDF "Tradução Jogo (1).pdf"
const gameTranslations = {
<<<<<<< HEAD
    'pt': {
        // Chaves Estáticas (do HTML)
        fase1_titulo: "SafeQuest - Como Montar Cestas",
        orientation_titulo: "Vire o seu dispositivo",
        orientation_texto: "Para uma melhor experiência, este jogo deve ser jogado com a tela na horizontal.",
        safequest_titulo: "SafeQuest",
        fase1_subtitulo: "Fase 1: Como Montar Cestas de Suprimentos",
        fase1_descricao: "Monte as cestas de acordo com o pedido da Arara Azul! Arraste os alimentos da esteira para os espaços e verifique se acertou.",
        btn_comecar: "Começar!",
        btn_continuar: "Continuar",
        end_titulo_padrao: "Tempo Esgotado!",
        end_titulo_vitoria: "Mestre da Nutrição!",
        end_score_texto_1: "Você fez",
        end_score_texto_2: "pedidos corretos!",
        btn_jogar_novo: "Jogar de Novo",
        livro_pag_ant: "◀ Página Anterior",
        livro_pag_prox: "Próxima Página ▶",
        pagina_indicador: "Página",
        de_indicador: "de",
        detalhe_descricao: "Descrição",
        detalhe_curiosidade: "💡 Curiosidade Divertida",
        detalhe_info: "📊 Informações Nutricionais",
        header_pedidos: "Pedidos:",
        header_etapa: "Etapa",
        livro_titulo_hover: "Guia de Alimentos",
        pedido_atual: "Pedido Atual:",
        btn_verificar: "Verificar",
        almanaque_titulo_carb: "Carboidratos",
        almanaque_titulo_prot: "Proteínas",
        almanaque_titulo_vit: "Vitaminas e Minerais",
        almanaque_titulo_pega: "Pegadinhas (Não saudáveis)",

        // Diálogos Dinâmicos (do PDF)
        tutorial_title: "Tutorial (Montagem de cestas de suprimentos)",
        tutorial: "Olá! Bem-vindo à Estação de Nutrição. Aqui, sua missão é montar cestas de alimentos equilibradas, seguindo os pedidos que aparecem na tela. Cada pedido precisa de três alimentos, e você pode arrastar os itens da esteira até as cestas para completá-lo. Quando tudo estiver certo, o botão de verificação ficará aceso e você poderá conferir o resultado. A cada acerto, o tempo aumenta, e novos pedidos surgem. Está pronto para começar a preparar refeições saudáveis?",
        stage1_title: "Etapa 1 - Carboidratos",
        stage1: "Vamos começar pelos carboidratos. Eles são os alimentos que dão energia para o corpo e ajudam a manter o ritmo do dia. Pães, massas, arroz e batatas são alguns exemplos. Observe a esteira e monte as cestas com alimentos desse grupo. É só arrastar cada item até o espaço certo e verificar o pedido.",
        stage2_title: "Etapa 2 - Proteínas",
        stage2: "Agora é hora de adicionar as proteínas. Elas são importantes para os músculos, o crescimento e a recuperação do corpo. Carnes, ovos, feijão e leite fazem parte desse grupo. Continue montando as cestas, combinando carboidratos e proteínas para formar refeições mais completas.",
        stage3_title: "Etapa 3 - Vitaminas e Minerais",
        stage3: "Estamos progredindo bem! Agora vamos incluir alimentos ricos em vitaminas e minerais. Eles fortalecem o corpo, aumentam a imunidade e deixam tudo funcionando do jeito certo. Frutas, verduras e legumes fazem parte dessa categoria. Complete as cestas escolhendo um alimento de cada grupo: carboidrato, proteína e vitaminas/minerais.",
        stage4_title: "Etapa 4 - Alimentos 'Pegadinhas'",
        stage4: "Agora chegou o verdadeiro desafio! Alguns alimentos parecem saudáveis, mas não são. São as chamadas 'pegadinhas'. Eles têm muito açúcar, gordura ou ingredientes artificiais. Fique atento e evite colocá-los nas cestas. Escolha sempre as opções mais naturais e nutritivas.",
        praise: [
            "Excelente escolha! O pedido ficou perfeito e cheio de alimentos saudáveis.",
            "Tudo certo! Essa cesta está equilibrada e nutritiva, do jeito que precisa ser.",
            "Ótimo trabalho! Essa combinação é ideal para manter uma boa alimentação.",
            "Perfeito! Você montou a cesta corretamente e mostrou que está aprendendo bem sobre nutrição."
        ],
        hints: [
            "Alguns alimentos não combinam com o pedido atual. Observe o painel e veja o que está sendo solicitado antes de confirmar novamente.",
            "Ops! Um dos alimentos escolhidos não faz parte do grupo certo. Use o almanaque para revisar as categorias e tente de novo.",
            "Essa cesta ainda pode melhorar. Verifique se todos os alimentos estão de acordo com o grupo pedido.",
            "Quase tudo certo! Só revise os itens que não pertencem ao grupo solicitado e faça os ajustes."
        ],
        variety: [
            "Essa comida é boa, mas existem muitas outras opções saudáveis! Experimente variar um pouco para deixar a refeição mais equilibrada.",
            "Lembre-se de que a alimentação saudável também depende da diversidade. Tente usar alimentos diferentes para completar os próximos pedidos.",
            "Evitar repetições é importante! Varie os ingredientes e descubra novos alimentos nutritivos."
        ],
        performance: [
            "Você começou bem e já entendeu os primeiros passos para montar cestas equilibradas. Algumas escolhas ainda precisam de atenção, mas cada tentativa é uma nova oportunidade de aprender mais sobre alimentação saudável. Continue praticando, e logo conseguirá montar cestas completas e nutritivas.",
            "Excelente progresso! Você mostrou que já sabe equilibrar bem os grupos alimentares e está aprendendo a identificar as opções corretas. Continue treinando sua atenção e logo alcançarás resultados ainda melhores. Seu conhecimento está crescendo, assim como sua consciência sobre o que é comer bem.",
            "Incrível! Todas as cestas foram montadas com atenção e equilíbrio. Seu desempenho mostra que você entende como formar refeições saudáveis e variadas. Com esse conhecimento, você está pronto para ensinar outros a cuidar da alimentação também. Parabéns por conquistar o título de Mestre da Nutrição!"
        ],
        defeat: [
            "Você não conseguiu montar todos os pedidos a tempo, mas isso faz parte do aprendizado. Separar os grupos alimentares corretamente exige prática. Tente novamente e verá como ficará mais fácil reconhecer os alimentos certos.",
            "O tempo acabou antes que todos os pedidos fossem montados. Não desanime! Observe com calma o que cada pedido solicita e use o almanaque se precisar de ajuda. A próxima tentativa será melhor.",
            "Dessa vez o tempo não foi suficiente, mas seu esforço já fez diferença. Continue praticando para montar as cestas mais rápido e com mais precisão. A prática leva ao equilíbrio!"
        ],
        other: [
            "O tempo está passando, mas ainda dá para montar mais cestas! Continue atento aos pedidos.",
            "Se ficar em dúvida, abra o almanaque e relembre os grupos alimentares. Ele está sempre disponível.",
            "Cada cesta correta ajuda a manter a saúde da tripulação da Estação de Nutrição. Continue com esse ritmo!",
            "Montar pedidos saudáveis é um ótimo treino para o dia a dia. Você está se saindo muito bem.",
            "Arraste os alimentos da esteira até as cestas para montar o pedido.",
            "Mova os alimentos e forme cestas equilibradas.",
            "Ao terminar, selecione o botão de verificação para conferir o pedido.",
            "Se errar, selecione o item incorreto para removê-lo e tentar novamente.",
            "O tempo está acabando! Seja rápido e complete o maior número de cestas possível."
        ]
    },
    'en': {
        // Chaves Estáticas (do HTML)
        fase1_titulo: "SafeQuest - How to Assemble Baskets",
        orientation_titulo: "Turn your device",
        orientation_texto: "For a better experience, this game should be played with the screen horizontally.",
        safequest_titulo: "SafeQuest",
        fase1_subtitulo: "Level 1: How to Assemble Supply Baskets",
        fase1_descricao: "Assemble the baskets according to the Blue Macaw's order! Drag the food from the conveyor belt to the spaces and check if you got it right.",
        btn_comecar: "Start!",
        btn_continuar: "Continue",
        end_titulo_padrao: "Time's Up!",
        end_titulo_vitoria: "Master of Nutrition!",
        end_score_texto_1: "You made",
        end_score_texto_2: "correct orders!",
        btn_jogar_novo: "Play Again",
        livro_pag_ant: "◀ Previous Page",
        livro_pag_prox: "Next Page ▶",
        pagina_indicador: "Page",
        de_indicador: "of",
        detalhe_descricao: "Description",
        detalhe_curiosidade: "💡 Fun Fact",
        detalhe_info: "📊 Nutritional Information",
        header_pedidos: "Orders:",
        header_etapa: "Stage",
        livro_titulo_hover: "Food Guide",
        pedido_atual: "Current Order:",
        btn_verificar: "Check",
        almanaque_titulo_carb: "Carbohydrates",
        almanaque_titulo_prot: "Proteins",
        almanaque_titulo_vit: "Vitamins and Minerals",
        almanaque_titulo_pega: "Trick Foods (Unhealthy)",

        // Diálogos Dinâmicos (do PDF)
        tutorial_title: "Tutorial (Assembling supply baskets)",
        tutorial: "Hello! Welcome to the Nutrition Station. Here, your mission is to assemble balanced food baskets, following the orders that appear on the screen. Each order requires three foods, and you can drag the items from the conveyor belt to the baskets to complete it. When everything is correct, the check button will light up and you can check the result. With each correct answer, the time increases and new orders appear. Are you ready to start preparing healthy meals?",
        stage1_title: "Step 1 - Carbohydrates",
        stage1: "Let's start with carbohydrates. These are foods that provide energy for the body and help you keep up with your daily routine. Bread, pasta, rice and potatoes are some examples. Look at the conveyor belt and fill the baskets with foods from this group. Just drag each item to the right space and check your order.",
        stage2_title: "Step 2 - Proteins",
        stage2: "Now it's time to add protein. Protein is important for muscles, growth, and recovery. Meat, eggs, beans, and milk are part of this group. Continue assembling the baskets, combining carbohydrates and protein to create more complete meals.",
        stage3_title: "Step 3 - Vitamins and Minerals",
        stage3: "We're making good progress! Now let's include foods rich in vitamins and minerals. They strengthen the body, boost immunity, and keep everything working properly. Fruits and vegetables are part of this category. Complete the baskets by choosing one food from each group: carbohydrates, protein, and vitamins/minerals.",
        stage4_title: "Step 4 - Trick foods",
        stage4: "Now comes the real challenge! Some foods appear healthy, but they are not. These are called 'tricky' foods. They contain a lot of sugar, fat, or artificial ingredients. Be aware and avoid putting them in your shopping cart. Always choose the most natural and nutritious options.",
        praise: [
            "Excellent choice! The order is perfect and full of healthy foods.",
            "All right! This basket is balanced and nutritious, just the way it should be.",
            "Great job! This combination is ideal for maintaining a good diet.",
            "Perfect! You put the basket together correctly and showed that you are learning well about nutrition."
        ],
        hints: [
            "Some foods do not match the current order. Check the panel and see what is being requested before confirming again.",
            "Oops! One of the foods chosen is not part of the right group. Use the almanac to review the categories and try again.",
            "This basket can still be improved. Check that all foods are in accordance with the requested group.",
            "Almost everything is right! Just review the items that do not belong to the requested group and make adjustments."
        ],
        variety: [
            "This food is good, but there are many other healthy options! Try varying it a little to make the meal more balanced.",
            "Remember that healthy eating also depends on diversity. Try to use different foods to complete your next orders.",
            "Avoiding repetition is important! Vary the ingredients and discover new nutritious foods."
        ],
        performance: [
            "You've started well and already understand the first steps to putting together balanced baskets. Some choices still need attention, but each attempt is a new opportunity to learn more about healthy eating. Keep practicing, and soon you'll be able to put together complete and nutritious baskets.",
            "Excellent progress! You have shown that you already know how to balance food groups well and are learning to identify the right options. Keep training your attention and you will soon achieve even better results. Your knowledge is growing, as is your awareness of what it means to eat well.",
            "Amazing! All the baskets were assembled with care and balance. Your performance shows that you understand how to put together healthy meals and varied. With this knowledge, you are ready to teach others how to take care of their nutrition as well. Congratulations on earning the title of Master of Nutrition!"
        ],
        defeat: [
            "You weren't able to assemble all the orders on time, but that's part of the learning process. Sorting food groups correctly takes practice. Try again and you'll see how much easier it becomes to recognize the right foods.",
            "Time ran out before all the orders were assembled. Don't be discouraged! Calmly observe what each order requires and use the almanac if you need help. The next attempt will be better.",
            "This time there wasn't enough time, but your effort has already made a difference. Keep practicing to assemble the baskets faster and more accurately. Practice makes perfect!"
        ],
        other: [
            "Time is running out, but there's still time to put together more baskets! Keep an eye on the orders.",
            "If in doubt, open the almanac and review the food groups. It's always available.",
            "Each correct basket helps keep the Nutrition Station crew healthy. Keep up the good work!",
            "Putting together healthy orders is great practice for everyday life. You're doing very well.",
            "Drag the food from the conveyor belt to the baskets to assemble the order.",
            "Move the food and form balanced baskets.",
            "When finished, select the check button to check the order.",
            "If you make a mistake, select the incorrect item to remove it and try again.",
            "Time is running out! Be quick and complete as many baskets as possible."
        ]
    },
    'es': {
        // Chaves Estáticas (do HTML)
        fase1_titulo: "SafeQuest - Cómo Armar Canastas",
        orientation_titulo: "Gira tu dispositivo",
        orientation_texto: "Para una mejor experiencia, este juego debe jugarse con la pantalla en horizontal.",
        safequest_titulo: "SafeQuest",
        fase1_subtitulo: "Nivel 1: Cómo Armar Canastas de Suministros",
        fase1_descricao: "¡Arma las canastas según el pedido del Guacamayo Azul! Arrastra los alimentos de la cinta a los espacios y comprueba si acertaste.",
        btn_comecar: "¡Empezar!",
        btn_continuar: "Continuar",
        end_titulo_padrao: "¡Tiempo Agotado!",
        end_titulo_vitoria: "¡Maestro de la Nutrición!",
        end_score_texto_1: "¡Hiciste",
        end_score_texto_2: "pedidos correctos!",
        btn_jogar_novo: "Jugar de Nuevo",
        livro_pag_ant: "◀ Página Anterior",
        livro_pag_prox: "Página Siguiente ▶",
        pagina_indicador: "Página",
        de_indicador: "de",
        detalhe_descricao: "Descripción",
        detalhe_curiosidade: "💡 Dato Curioso",
        detalhe_info: "📊 Información Nutricional",
        header_pedidos: "Pedidos:",
        header_etapa: "Etapa",
        livro_titulo_hover: "Guía de Alimentos",
        pedido_atual: "Pedido Actual:",
        btn_verificar: "Verificar",
        almanaque_titulo_carb: "Carbohidratos",
        almanaque_titulo_prot: "Proteínas",
        almanaque_titulo_vit: "Vitaminas y Minerales",
        almanaque_titulo_pega: "Alimentos Trampa (No saludables)",

        // Diálogos Dinâmicos (do PDF)
        tutorial_title: "Tutorial (Montaje de canastas de alimentos)",
        tutorial: "¡Hola! Bienvenido a la Estación de Nutrición. Aquí, tu misión es armar canastas de alimentos equilibrados, siguiendo los pedidos que aparecen em la pantalla. Cada pedido necesita tres alimentos, y puedes arrastrar los artículos de la cinta transportadora a las canastas para completarlo. Cuando todo esté correcto, el botón de verificación se iluminará y podrás comprobar el resultado. Com cada acierta, el tiempo aumenta y aparecen nuevos pedidos. ¿Estás listo para empezar a preparar comidas saludables?",
        stage1_title: "Paso 1 - Carbohidratos",
        stage1: "Empecemos por los carbohidratos. Son los alimentos que dan energía al cuerpo y ayudan a mantener el ritmo del día. El pan, la pasta, el arroz y las patatas son algunos ejemplos. Observe la cinta transportadora y llene las cestas com alimentos de este grupo. Solo tienes que arrastrar cada artículo al espacio correcto y comprobar el pedido.",
        stage2_title: "Paso 2 - Proteínas",
        stage2: "Ahora es el momento de añadir las proteínas. Son importantes para los músculos, el crecimiento y la recuperación del corpo. Las carnes, los huevos, las legumbres y la leche forman parte de este grupo. Continúa preparando las cestas, combinando carbohidratos y proteínas para crear comidas más completas.",
        stage3_title: "Paso 3 - Vitaminas y Minerales",
        stage3: "¡Estamos progresando bien! Ahora vamos a incluir alimentos ricos em vitaminas y minerales. Estos fortalecen el cuerpo, aumentan la inmunidad y hacen que todo funcione correctamente. Las frutas y verduras forman parte de esta categoría. Completa las cestas eligiendo un alimento de cada grupo: carbohidratos, proteínas y vitaminas/minerales.",
        stage4_title: "Paso 4 - Alimentos Trampa",
        stage4: "¡Ahora llega el verdadero reto! Algunos alimentos parecen saludables, pero no lo son. Son los llamados engañosos. Tienen mucho azúcar, grasa oningredientes artificiales. Mantente alerta y evita ponerlos em la cesta. Elige siempre las opciones más naturales y nutritivas.",
        praise: [
            "¡Excelente elección! El pedido es perfecto y está lleno de alimentos saludables.",
            "¡Todo bien! Esta cesta es equilibrada y nutritiva, tal y como debe ser.",
            "¡Buen trabajo! Esta combinación es ideal para mantener una buena alimentación.",
            "¡Perfecto! Has preparado la cesta correctamente y has demostrado que estás aprendiendo bien sobre nutrición."
        ],
        hints: [
            "Algunos alimentos no coinciden con el pedido actual. Observe el panel y compruebe lo que se está solicitando antes de volver a confirmar.",
            "¡Vaya! Uno de los alimentos elegidos no pertenece al grupo correcto. Utilice el almanaque para revisar las categorías e inténtelo de nuevo.",
            "Esta cesta aún puede mejorar. Comprueba que todos los alimentos estén de acuerdo com el grupo solicitado.",
            "¡Casi todo correcto! Solo revisa los artículos que no pertenecen al grupo solicitado y haz los ajustes necesarios."
        ],
        variety: [
            "Esta comida está buena, pero hay muchas otras opciones saludables. Intenta variar um poco para que la comida sea más equilibrada.",
            "Recuerda que uma alimentación saludable también depende de la diversidad. Intenta usar alimentos diferentes para completar los próximos pedidos.",
            "¡Es importante evitar las repeticiones! Varía los ingredientes y descubre nuevos alimentos nutritivos."
        ],
        performance: [
            "Has empezado bien y ya has comprendido los primeros pasos para preparar cestas equilibradas. Algunas elecciones aún requieren atención, pero cada intento es uma nueva oportunidad para aprender más sobre la alimentación saludable. Sigue practicando y pronto podrás preparar cestas completas y nutritivas.",
            "¡Excelente progreso! Has demostrado que ya sabes equilibrar bien los grupos alimenticios y estás aprendiendo a identificar las opciones correctas. Sigue entrenando tu atención y pronto alcanzarás resultados aún mejores. Tu conocimiento está creciendo, al igual que tu conciencia sobre lo que es comer bien.",
            "¡Increíble! Todas las cestas se han preparado com cuidado y equilibrio. Su trabajo demuestra que entiende cómo crear comidas saludables y variadas. Con estos conocimientos, estás listo para enseñar a otros a cuidar también su alimentación. ¡Enhorabuena por conseguir el título de Maestro en Nutrición!"
        ],
        defeat: [
            "No has conseguido preparar todos los pedidos a tiempo, pero eso forma parte del aprendizaje. Separar correctamente los grupos de alimentos requiere práctica. Vuelve a intentarlo y verás cómo cada vez te resultará más fácil reconocer los alimentos correctos.",
            "El tiempo se acabó antes de que se completaran todos los pedidos. ¡No te desanimes! Observa con calma lo que pide cada pedido y utiliza el almanaque si necesitas ayuda. La próxima vez lo harás mejor.",
            "Esta vez no ha habido tiempo suficiente, pero tu esfuerzo ya ha marcado la diferencia. Sigue practicando para montar las cestas más rápido y con mayor precisión. ¡La práctica leva al equilibrio!."
        ],
        other: [
            "El tiempo pasa, pero aún da tiempo a preparar más cestas. Sigue atento a los pedidos.",
            "Si tienes dudas, abre el almanaque y recuerda los grupos de alimentos. Siempre está disponible",
            "Cada cesta correcta ayuda a mantener la salud de la tripulación de la Estación de Nutrición. ¡Sigue así!.",
            "Preparar pedidos saludables es un excelente entrenamiento para el día a día. Lo estás haciendo muy bien.",
            "Arrastra los alimentos de la cinta transportadora a las cestas para preparar el pedido.",
            "Mueve los alimentos y forma cestas equilibradas.",
            "Cuando termines, selecciona el botón de verificación para revisar el pedido.",
            "Si te equivocas, selecciona el artículo incorrecto para eliminarlo e inténtalo de nuevo.",
            "¡El tiempo se acaba! Sea rápido y complete el mayor número de cestas posible."
        ]
    }
};

// --- NOVO: FUNÇÕES DE TRADUÇÃO E CONFIGURAÇÃO ---

/**
 * Pega o idioma E o modo de cor salvos no localStorage pelo menu.
 */
function getSettings() {
    const defaultSettings = { language: 'pt', colorMode: 'default' };
    try {
        const settingsString = localStorage.getItem('safequest-settings');
        if (settingsString) {
            const savedSettings = JSON.parse(settingsString);
            
            // Valida o idioma
            const lang = gameTranslations[savedSettings.language] 
                         ? savedSettings.language 
                         : defaultSettings.language;
            
            // Valida o modo de cor
            const validModes = ['default', 'high-contrast', 'colorblind-safe'];
            const mode = validModes.includes(savedSettings.colorMode) 
                       ? savedSettings.colorMode 
                       : defaultSettings.colorMode;
            
            return { language: lang, colorMode: mode };
        }
    } catch (e) {
        console.error("Erro ao carregar configurações:", e);
    }
    // Retorna o padrão se nada for encontrado
    return defaultSettings;
}

/**
* Aplica as traduções aos elementos estáticos da página.
*/
function translatePage(lang) {
    const translations = gameTranslations[lang];
    if (!translations) {
        console.warn(`Tradução para '${lang}' não encontrada.`);
        return;
    }

    // Traduz todos os elementos com 'data-key'
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    // Traduz o <title> da página
    const titleElement = document.querySelector('title[data-key="fase1_titulo"]');
    if (titleElement && translations.fase1_titulo) {
        document.title = translations.fase1_titulo;
    }

    // Traduz atributos 'title' (usando 'data-title-key')
    document.querySelectorAll('[data-title-key]').forEach(element => {
        const key = element.dataset.titleKey;
        if (translations[key]) {
            element.setAttribute('title', translations[key]);
        }
    });

    // Casos especiais (elementos com spans dentro)
    const scoreText = document.querySelector('[data-key="header_pedidos"]');
    if (scoreText) scoreText.textContent = translations.header_pedidos;

    const stageText = document.querySelector('[data-key="header_etapa"]');
    if (stageText) stageText.textContent = translations.header_etapa;

    const endScore1 = document.querySelector('[data-key="end_score_texto_1"]');
    if (endScore1) endScore1.textContent = translations.end_score_texto_1;
    
    const endScore2 = document.querySelector('[data-key="end_score_texto_2"]');
    if (endScore2) endScore2.textContent = translations.end_score_texto_2;
=======
    'pt': {
        // Chaves Estáticas (do HTML)
        fase1_titulo: "SafeQuest - Como Montar Cestas",
        orientation_titulo: "Vire o seu dispositivo",
        orientation_texto: "Para uma melhor experiência, este jogo deve ser jogado com a tela na horizontal.",
        safequest_titulo: "SafeQuest",
        fase1_subtitulo: "Fase 1: Como Montar Cestas de Suprimentos",
        fase1_descricao: "Monte as cestas de acordo com o pedido da Arara Azul! Arraste os alimentos da esteira para os espaços e verifique se acertou.",
        btn_comecar: "Começar!",
        btn_continuar: "Continuar",
        end_titulo_padrao: "Tempo Esgotado!",
        end_titulo_vitoria: "Mestre da Nutrição!",
        end_score_texto_1: "Você fez",
        end_score_texto_2: "pedidos corretos!",
        btn_jogar_novo: "Jogar de Novo",
        livro_pag_ant: "◀ Página Anterior",
        livro_pag_prox: "Próxima Página ▶",
        pagina_indicador: "Página",
        de_indicador: "de",
        detalhe_descricao: "Descrição",
        detalhe_curiosidade: "💡 Curiosidade Divertida",
        detalhe_info: "📊 Informações Nutricionais",
        header_pedidos: "Pedidos:",
        header_etapa: "Etapa",
        livro_titulo_hover: "Guia de Alimentos",
        pedido_atual: "Pedido Atual:",
        btn_verificar: "Verificar",
        almanaque_titulo_carb: "Carboidratos",
        almanaque_titulo_prot: "Proteínas",
        almanaque_titulo_vit: "Vitaminas e Minerais",
        almanaque_titulo_pega: "Pegadinhas (Não saudáveis)",

        // Diálogos Dinâmicos (do PDF)
        tutorial_title: "Tutorial (Montagem de cestas de suprimentos)",
        tutorial: "Olá! Bem-vindo à Estação de Nutrição. Aqui, sua missão é montar cestas de alimentos equilibradas, seguindo os pedidos que aparecem na tela. Cada pedido precisa de três alimentos, e você pode arrastar os itens da esteira até as cestas para completá-lo. Quando tudo estiver certo, o botão de verificação ficará aceso e você poderá conferir o resultado. A cada acerto, o tempo aumenta, e novos pedidos surgem. Está pronto para começar a preparar refeições saudáveis?",
        stage1_title: "Etapa 1 - Carboidratos",
        stage1: "Vamos começar pelos carboidratos. Eles são os alimentos que dão energia para o corpo e ajudam a manter o ritmo do dia. Pães, massas, arroz e batatas são alguns exemplos. Observe a esteira e monte as cestas com alimentos desse grupo. É só arrastar cada item até o espaço certo e verificar o pedido.",
        stage2_title: "Etapa 2 - Proteínas",
        stage2: "Agora é hora de adicionar as proteínas. Elas são importantes para os músculos, o crescimento e a recuperação do corpo. Carnes, ovos, feijão e leite fazem parte desse grupo. Continue montando as cestas, combinando carboidratos e proteínas para formar refeições mais completas.",
        stage3_title: "Etapa 3 - Vitaminas e Minerais",
        stage3: "Estamos progredindo bem! Agora vamos incluir alimentos ricos em vitaminas e minerais. Eles fortalecem o corpo, aumentam a imunidade e deixam tudo funcionando do jeito certo. Frutas, verduras e legumes fazem parte dessa categoria. Complete as cestas escolhendo um alimento de cada grupo: carboidrato, proteína e vitaminas/minerais.",
        stage4_title: "Etapa 4 - Alimentos 'Pegadinhas'",
        stage4: "Agora chegou o verdadeiro desafio! Alguns alimentos parecem saudáveis, mas não são. São as chamadas 'pegadinhas'. Eles têm muito açúcar, gordura ou ingredientes artificiais. Fique atento e evite colocá-los nas cestas. Escolha sempre as opções mais naturais e nutritivas.",
        praise: [
            "Excelente escolha! O pedido ficou perfeito e cheio de alimentos saudáveis.",
            "Tudo certo! Essa cesta está equilibrada e nutritiva, do jeito que precisa ser.",
            "Ótimo trabalho! Essa combinação é ideal para manter uma boa alimentação.",
            "Perfeito! Você montou a cesta corretamente e mostrou que está aprendendo bem sobre nutrição."
        ],
        hints: [
            "Alguns alimentos não combinam com o pedido atual. Observe o painel e veja o que está sendo solicitado antes de confirmar novamente.",
            "Ops! Um dos alimentos escolhidos não faz parte do grupo certo. Use o almanaque para revisar as categorias e tente de novo.",
            "Essa cesta ainda pode melhorar. Verifique se todos os alimentos estão de acordo com o grupo pedido.",
            "Quase tudo certo! Só revise os itens que não pertencem ao grupo solicitado e faça os ajustes."
        ],
        variety: [
            "Essa comida é boa, mas existem muitas outras opções saudáveis! Experimente variar um pouco para deixar a refeição mais equilibrada.",
            "Lembre-se de que a alimentação saudável também depende da diversidade. Tente usar alimentos diferentes para completar os próximos pedidos.",
            "Evitar repetições é importante! Varie os ingredientes e descubra novos alimentos nutritivos."
        ],
        performance: [
            "Você começou bem e já entendeu os primeiros passos para montar cestas equilibradas. Algumas escolhas ainda precisam de atenção, mas cada tentativa é uma nova oportunidade de aprender mais sobre alimentação saudável. Continue praticando, e logo conseguirá montar cestas completas e nutritivas.",
            "Excelente progresso! Você mostrou que já sabe equilibrar bem os grupos alimentares e está aprendendo a identificar as opções corretas. Continue treinando sua atenção e logo alcançarás resultados ainda melhores. Seu conhecimento está crescendo, assim como sua consciência sobre o que é comer bem.",
            "Incrível! Todas as cestas foram montadas com atenção e equilíbrio. Seu desempenho mostra que você entende como formar refeições saudáveis e variadas. Com esse conhecimento, você está pronto para ensinar outros a cuidar da alimentação também. Parabéns por conquistar o título de Mestre da Nutrição!"
        ],
        defeat: [
            "Você não conseguiu montar todos os pedidos a tempo, mas isso faz parte do aprendizado. Separar os grupos alimentares corretamente exige prática. Tente novamente e verá como ficará mais fácil reconhecer os alimentos certos.",
            "O tempo acabou antes que todos os pedidos fossem montados. Não desanime! Observe com calma o que cada pedido solicita e use o almanaque se precisar de ajuda. A próxima tentativa será melhor.",
            "Dessa vez o tempo não foi suficiente, mas seu esforço já fez diferença. Continue praticando para montar as cestas mais rápido e com mais precisão. A prática leva ao equilíbrio!"
        ],
        other: [
            "O tempo está passando, mas ainda dá para montar mais cestas! Continue atento aos pedidos.",
            "Se ficar em dúvida, abra o almanaque e relembre os grupos alimentares. Ele está sempre disponível.",
            "Cada cesta correta ajuda a manter a saúde da tripulação da Estação de Nutrição. Continue com esse ritmo!",
            "Montar pedidos saudáveis é um ótimo treino para o dia a dia. Você está se saindo muito bem.",
            "Arraste os alimentos da esteira até as cestas para montar o pedido.",
            "Mova os alimentos e forme cestas equilibradas.",
            "Ao terminar, selecione o botão de verificação para conferir o pedido.",
            "Se errar, selecione o item incorreto para removê-lo e tentar novamente.",
            "O tempo está acabando! Seja rápido e complete o maior número de cestas possível."
        ]
    },
    'en': {
        // Chaves Estáticas (do HTML)
        fase1_titulo: "SafeQuest - How to Assemble Baskets",
        orientation_titulo: "Turn your device",
        orientation_texto: "For a better experience, this game should be played with the screen horizontally.",
        safequest_titulo: "SafeQuest",
        fase1_subtitulo: "Level 1: How to Assemble Supply Baskets",
        fase1_descricao: "Assemble the baskets according to the Blue Macaw's order! Drag the food from the conveyor belt to the spaces and check if you got it right.",
        btn_comecar: "Start!",
        btn_continuar: "Continue",
        end_titulo_padrao: "Time's Up!",
        end_titulo_vitoria: "Master of Nutrition!",
        end_score_texto_1: "You made",
        end_score_texto_2: "correct orders!",
        btn_jogar_novo: "Play Again",
        livro_pag_ant: "◀ Previous Page",
        livro_pag_prox: "Next Page ▶",
        pagina_indicador: "Page",
        de_indicador: "of",
        detalhe_descricao: "Description",
        detalhe_curiosidade: "💡 Fun Fact",
        detalhe_info: "📊 Nutritional Information",
        header_pedidos: "Orders:",
        header_etapa: "Stage",
        livro_titulo_hover: "Food Guide",
        pedido_atual: "Current Order:",
        btn_verificar: "Check",
        almanaque_titulo_carb: "Carbohydrates",
        almanaque_titulo_prot: "Proteins",
        almanaque_titulo_vit: "Vitamins and Minerals",
        almanaque_titulo_pega: "Trick Foods (Unhealthy)",

        // Diálogos Dinâmicos (do PDF)
        tutorial_title: "Tutorial (Assembling supply baskets)",
        tutorial: "Hello! Welcome to the Nutrition Station. Here, your mission is to assemble balanced food baskets, following the orders that appear on the screen. Each order requires three foods, and you can drag the items from the conveyor belt to the baskets to complete it. When everything is correct, the check button will light up and you can check the result. With each correct answer, the time increases and new orders appear. Are you ready to start preparing healthy meals?",
        stage1_title: "Step 1 - Carbohydrates",
        stage1: "Let's start with carbohydrates. These are foods that provide energy for the body and help you keep up with your daily routine. Bread, pasta, rice and potatoes are some examples. Look at the conveyor belt and fill the baskets with foods from this group. Just drag each item to the right space and check your order.",
        stage2_title: "Step 2 - Proteins",
        stage2: "Now it's time to add protein. Protein is important for muscles, growth, and recovery. Meat, eggs, beans, and milk are part of this group. Continue assembling the baskets, combining carbohydrates and protein to create more complete meals.",
        stage3_title: "Step 3 - Vitamins and Minerals",
        stage3: "We're making good progress! Now let's include foods rich in vitamins and minerals. They strengthen the body, boost immunity, and keep everything working properly. Fruits and vegetables are part of this category. Complete the baskets by choosing one food from each group: carbohydrates, protein, and vitamins/minerals.",
        stage4_title: "Step 4 - Trick foods",
        stage4: "Now comes the real challenge! Some foods appear healthy, but they are not. These are called 'tricky' foods. They contain a lot of sugar, fat, or artificial ingredients. Be aware and avoid putting them in your shopping cart. Always choose the most natural and nutritious options.",
        praise: [
            "Excellent choice! The order is perfect and full of healthy foods.",
            "All right! This basket is balanced and nutritious, just the way it should be.",
            "Great job! This combination is ideal for maintaining a good diet.",
            "Perfect! You put the basket together correctly and showed that you are learning well about nutrition."
        ],
        hints: [
            "Some foods do not match the current order. Check the panel and see what is being requested before confirming again.",
            "Oops! One of the foods chosen is not part of the right group. Use the almanac to review the categories and try again.",
            "This basket can still be improved. Check that all foods are in accordance with the requested group.",
            "Almost everything is right! Just review the items that do not belong to the requested group and make adjustments."
        ],
        variety: [
            "This food is good, but there are many other healthy options! Try varying it a little to make the meal more balanced.",
            "Remember that healthy eating also depends on diversity. Try to use different foods to complete your next orders.",
            "Avoiding repetition is important! Vary the ingredients and discover new nutritious foods."
        ],
        performance: [
            "You've started well and already understand the first steps to putting together balanced baskets. Some choices still need attention, but each attempt is a new opportunity to learn more about healthy eating. Keep practicing, and soon you'll be able to put together complete and nutritious baskets.",
            "Excellent progress! You have shown that you already know how to balance food groups well and are learning to identify the right options. Keep training your attention and you will soon achieve even better results. Your knowledge is growing, as is your awareness of what it means to eat well.",
            "Amazing! All the baskets were assembled with care and balance. Your performance shows that you understand how to put together healthy meals and varied. With this knowledge, you are ready to teach others how to take care of their nutrition as well. Congratulations on earning the title of Master of Nutrition!"
        ],
        defeat: [
            "You weren't able to assemble all the orders on time, but that's part of the learning process. Sorting food groups correctly takes practice. Try again and you'll see how much easier it becomes to recognize the right foods.",
            "Time ran out before all the orders were assembled. Don't be discouraged! Calmly observe what each order requires and use the almanac if you need help. The next attempt will be better.",
            "This time there wasn't enough time, but your effort has already made a difference. Keep practicing to assemble the baskets faster and more accurately. Practice makes perfect!"
        ],
        other: [
            "Time is running out, but there's still time to put together more baskets! Keep an eye on the orders.",
            "If in doubt, open the almanac and review the food groups. It's always available.",
            "Each correct basket helps keep the Nutrition Station crew healthy. Keep up the good work!",
            "Putting together healthy orders is great practice for everyday life. You're doing very well.",
            "Drag the food from the conveyor belt to the baskets to assemble the order.",
            "Move the food and form balanced baskets.",
            "When finished, select the check button to check the order.",
            "If you make a mistake, select the incorrect item to remove it and try again.",
            "Time is running out! Be quick and complete as many baskets as possible."
        ]
    },
    'es': {
        // Chaves Estáticas (do HTML)
        fase1_titulo: "SafeQuest - Cómo Armar Canastas",
        orientation_titulo: "Gira tu dispositivo",
        orientation_texto: "Para una mejor experiencia, este juego debe jugarse con la pantalla en horizontal.",
        safequest_titulo: "SafeQuest",
        fase1_subtitulo: "Nivel 1: Cómo Armar Canastas de Suministros",
        fase1_descricao: "¡Arma las canastas según el pedido del Guacamayo Azul! Arrastra los alimentos de la cinta a los espacios y comprueba si acertaste.",
        btn_comecar: "¡Empezar!",
        btn_continuar: "Continuar",
        end_titulo_padrao: "¡Tiempo Agotado!",
        end_titulo_vitoria: "¡Maestro de la Nutrición!",
        end_score_texto_1: "¡Hiciste",
        end_score_texto_2: "pedidos correctos!",
        btn_jogar_novo: "Jugar de Nuevo",
        livro_pag_ant: "◀ Página Anterior",
        livro_pag_prox: "Página Siguiente ▶",
        pagina_indicador: "Página",
        de_indicador: "de",
        detalhe_descricao: "Descripción",
        detalhe_curiosidade: "💡 Dato Curioso",
        detalhe_info: "📊 Información Nutricional",
        header_pedidos: "Pedidos:",
        header_etapa: "Etapa",
        livro_titulo_hover: "Guía de Alimentos",
        pedido_atual: "Pedido Actual:",
        btn_verificar: "Verificar",
        almanaque_titulo_carb: "Carbohidratos",
        almanaque_titulo_prot: "Proteínas",
        almanaque_titulo_vit: "Vitaminas y Minerales",
        almanaque_titulo_pega: "Alimentos Trampa (No saludables)",

        // Diálogos Dinâmicos (do PDF)
        tutorial_title: "Tutorial (Montaje de canastas de alimentos)",
        tutorial: "¡Hola! Bienvenido a la Estación de Nutrición. Aquí, tu misión es armar canastas de alimentos equilibrados, siguiendo los pedidos que aparecen em la pantalla. Cada pedido necesita tres alimentos, y puedes arrastrar los artículos de la cinta transportadora a las canastas para completarlo. Cuando todo esté correcto, el botón de verificación se iluminará y podrás comprobar el resultado. Com cada acierta, el tiempo aumenta y aparecen nuevos pedidos. ¿Estás listo para empezar a preparar comidas saludables?",
        stage1_title: "Paso 1 - Carbohidratos",
        stage1: "Empecemos por los carbohidratos. Son los alimentos que dan energía al cuerpo y ayudan a mantener el ritmo del día. El pan, la pasta, el arroz y las patatas son algunos ejemplos. Observe la cinta transportadora y llene las cestas com alimentos de este grupo. Solo tienes que arrastrar cada artículo al espacio correcto y comprobar el pedido.",
        stage2_title: "Paso 2 - Proteínas",
        stage2: "Ahora es el momento de añadir las proteínas. Son importantes para los músculos, el crecimiento y la recuperación del corpo. Las carnes, los huevos, las legumbres y la leche forman parte de este grupo. Continúa preparando las cestas, combinando carbohidratos y proteínas para crear comidas más completas.",
        stage3_title: "Paso 3 - Vitaminas y Minerales",
        stage3: "¡Estamos progresando bien! Ahora vamos a incluir alimentos ricos em vitaminas y minerales. Estos fortalecen el cuerpo, aumentan la inmunidad y hacen que todo funcione correctamente. Las frutas y verduras forman parte de esta categoría. Completa las cestas eligiendo un alimento de cada grupo: carbohidratos, proteínas y vitaminas/minerales.",
        stage4_title: "Paso 4 - Alimentos Trampa",
        stage4: "¡Ahora llega el verdadero reto! Algunos alimentos parecen saludables, pero no lo son. Son los llamados engañosos. Tienen mucho azúcar, grasa oningredientes artificiales. Mantente alerta y evita ponerlos em la cesta. Elige siempre las opciones más naturales y nutritivas.",
        praise: [
            "¡Excelente elección! El pedido es perfecto y está lleno de alimentos saludables.",
            "¡Todo bien! Esta cesta es equilibrada y nutritiva, tal y como debe ser.",
            "¡Buen trabajo! Esta combinación es ideal para mantener una buena alimentación.",
            "¡Perfecto! Has preparado la cesta correctamente y has demostrado que estás aprendiendo bien sobre nutrición."
        ],
        hints: [
            "Algunos alimentos no coinciden con el pedido actual. Observe el panel y compruebe lo que se está solicitando antes de volver a confirmar.",
            "¡Vaya! Uno de los alimentos elegidos no pertenece al grupo correcto. Utilice el almanaque para revisar las categorías e inténtelo de nuevo.",
            "Esta cesta aún puede mejorar. Comprueba que todos los alimentos estén de acuerdo com el grupo solicitado.",
            "¡Casi todo correcto! Solo revisa los artículos que no pertenecen al grupo solicitado y haz los ajustes necesarios."
        ],
        variety: [
            "Esta comida está buena, pero hay muchas otras opciones saludables. Intenta variar um poco para que la comida sea más equilibrada.",
            "Recuerda que uma alimentación saludable también depende de la diversidad. Intenta usar alimentos diferentes para completar los próximos pedidos.",
            "¡Es importante evitar las repeticiones! Varía los ingredientes y descubre nuevos alimentos nutritivos."
        ],
        performance: [
            "Has empezado bien y ya has comprendido los primeros pasos para preparar cestas equilibradas. Algunas elecciones aún requieren atención, pero cada intento es uma nueva oportunidad para aprender más sobre la alimentación saludable. Sigue practicando y pronto podrás preparar cestas completas y nutritivas.",
            "¡Excelente progreso! Has demostrado que ya sabes equilibrar bien los grupos alimenticios y estás aprendiendo a identificar las opciones correctas. Sigue entrenando tu atención y pronto alcanzarás resultados aún mejores. Tu conocimiento está creciendo, al igual que tu conciencia sobre lo que es comer bien.",
            "¡Increíble! Todas las cestas se han preparado com cuidado y equilibrio. Su trabajo demuestra que entiende cómo crear comidas saludables y variadas. Con estos conocimientos, estás listo para enseñar a otros a cuidar también su alimentación. ¡Enhorabuena por conseguir el título de Maestro en Nutrición!"
        ],
        defeat: [
            "No has conseguido preparar todos los pedidos a tiempo, pero eso forma parte del aprendizaje. Separar correctamente los grupos de alimentos requiere práctica. Vuelve a intentarlo y verás cómo cada vez te resultará más fácil reconocer los alimentos correctos.",
            "El tiempo se acabó antes de que se completaran todos los pedidos. ¡No te desanimes! Observa con calma lo que pide cada pedido y utiliza el almanaque si necesitas ayuda. La próxima vez lo harás mejor.",
            "Esta vez no ha habido tiempo suficiente, pero tu esfuerzo ya ha marcado la diferencia. Sigue practicando para montar las cestas más rápido y con mayor precisión. ¡La práctica leva al equilibrio!."
        ],
        other: [
            "El tiempo pasa, pero aún da tiempo a preparar más cestas. Sigue atento a los pedidos.",
            "Si tienes dudas, abre el almanaque y recuerda los grupos de alimentos. Siempre está disponible",
            "Cada cesta correcta ayuda a mantener la salud de la tripulación de la Estación de Nutrición. ¡Sigue así!.",
            "Preparar pedidos saludables es un excelente entrenamiento para el día a día. Lo estás haciendo muy bien.",
            "Arrastra los alimentos de la cinta transportadora a las cestas para preparar el pedido.",
            "Mueve los alimentos y forma cestas equilibradas.",
            "Cuando termines, selecciona el botón de verificación para revisar el pedido.",
            "Si te equivocas, selecciona el artículo incorrecto para eliminarlo e inténtalo de nuevo.",
            "¡El tiempo se acaba! Sea rápido y complete el mayor número de cestas posible."
        ]
    }
};

// --- NOVO: FUNÇÕES DE TRADUÇÃO ---
/**
 * Pega o idioma salvo no localStorage pelo menu.
 * O menu salva em 'safequest-settings' como um JSON.
 */
function getLanguage() {
    try {
        const settingsString = localStorage.getItem('safequest-settings');
        if (settingsString) {
            const settings = JSON.parse(settingsString);
            // Verifica se a língua salva (ex: 'en') existe no nosso dicionário
            if (gameTranslations[settings.language]) {
                return settings.language;
            }
        }
    } catch (e) {
        console.error("Erro ao carregar configurações de idioma:", e);
    }
    // Retorna 'pt' como padrão se nada for encontrado
    return 'pt';
}

/**
 * Aplica as traduções aos elementos estáticos da página.
 */
function translatePage(lang) {
    const translations = gameTranslations[lang];
    if (!translations) {
        console.warn(`Tradução para '${lang}' não encontrada.`);
        return;
    }

    // Traduz todos os elementos com 'data-key'
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    // Traduz o <title> da página
    const titleElement = document.querySelector('title[data-key="fase1_titulo"]');
    if (titleElement && translations.fase1_titulo) {
        document.title = translations.fase1_titulo;
    }

    // Traduz atributos 'title' (usando 'data-title-key')
    document.querySelectorAll('[data-title-key]').forEach(element => {
        const key = element.dataset.titleKey;
        if (translations[key]) {
            element.setAttribute('title', translations[key]);
        }
    });

    // Casos especiais (elementos com spans dentro)
    const scoreText = document.querySelector('[data-key="header_pedidos"]');
    if (scoreText) scoreText.textContent = translations.header_pedidos;

    const stageText = document.querySelector('[data-key="header_etapa"]');
    if (stageText) stageText.textContent = translations.header_etapa;

    const endScore1 = document.querySelector('[data-key="end_score_texto_1"]');
    if (endScore1) endScore1.textContent = translations.end_score_texto_1;
    
    const endScore2 = document.querySelector('[data-key="end_score_texto_2"]');
    if (endScore2) endScore2.textContent = translations.end_score_texto_2;
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
}

// --- FIM DAS FUNÇÕES DE TRADUÇÃO ---


window.onload = () => {

<<<<<<< HEAD
    // --- NOVO: CARREGA IDIOMA E MODO DE COR ---
    const settings = getSettings(); // 1. Usamos a nova função
    const currentLang = settings.language;
    const currentColorMode = settings.colorMode; // 2. Pegamos o modo de cor
    
    const translations = gameTranslations[currentLang];
    translatePage(currentLang);
    // --- FIM DA APLICAÇÃO DE IDIOMA ---


    // --- NOVO: Define o sufixo do nome do arquivo ---
    // (Com base nos seus arquivos e botões do menu)
    let assetSuffix;
    if (currentColorMode === 'high-contrast') {
        // Seu botão "Alto Contraste" vai usar os arquivos "-tea.png"
        // (Assumindo que '-tea' é o seu modo de alto contraste)
        assetSuffix = '-tea'; 
    } else if (currentColorMode === 'colorblind-safe') {
        // Seu botão "Daltonismo" vai usar os arquivos "-daltonismo.png"
        assetSuffix = '-daltonismo';
    } else {
        // 'default' (Padrão)
        assetSuffix = '-padrao';
    }
    // --- FIM DA LÓGICA DO SUFIXO ---


    // --- BLOQUEIO DE ZOOM ---
    window.addEventListener('wheel', function(event) {
        if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // --- SELEÇÃO DOS ELEMENTOS DA UI ---
    const gameContainer = document.getElementById('game-container');
    const startScreen = document.getElementById('start-screen');
    const stageTransitionScreen = document.getElementById('stage-transition-screen');
    const endScreen = document.getElementById('end-screen');
    const startButton = document.getElementById('start-button');
    const nextStageButton = document.getElementById('next-stage-button');
    const restartButton = document.getElementById('restart-button');
    const backToMenuButton = document.getElementById('back-to-menu-button'); // <-- NOVO
    const scoreEl = document.getElementById('score');
    const stageDisplayEl = document.getElementById('stage-display');
    const timerEl = document.getElementById('timer');
    const esteiraContainer = document.getElementById('esteira-container'); // Referência ao contêiner da esteira
    const orderSlots = document.querySelectorAll('.ticket-item');
    const plateSlots = document.querySelectorAll('#cestas-container .cesta');
    const verifyButton = document.getElementById('verify-button');
    const macawMessage = document.getElementById('macaw-message');
    const macawText = document.getElementById('macaw-text');
    const gameHeader = document.querySelector('header');
    const gameMain = document.querySelector('main');
    const macawSprite = document.getElementById('macaw-sprite');
    const endMacawSprite = document.getElementById('end-macaw-sprite');
    const stageMacawSprite = document.getElementById('stage-macaw-sprite');
    const bookButton = document.getElementById('book-button');
    const bookModal = document.getElementById('book-modal');
    const bookModalClose = document.getElementById('book-modal-close');
    const bookPagesContainer = document.getElementById('book-pages-container');
    const pageSections = document.querySelectorAll('.page .section');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const foodDetailModal = document.getElementById('food-detail-modal');
    const foodDetailClose = document.getElementById('food-detail-close');
    const foodDetailName = document.getElementById('food-detail-name');
    const foodDetailImg = document.getElementById('food-detail-img');
    const foodDetailDesc = document.getElementById('food-detail-desc');
    const foodDetailFunFact = document.getElementById('food-detail-funfact');
    const foodDetailNutri = document.getElementById('food-detail-nutri');

    // --- MUDANÇA: Sprites da Arara usam o sufixo ---
    const MACAW_SPRITES = {
        falando: `assets/arara-falando${assetSuffix}.png`,
        feliz: `assets/arara-feliz${assetSuffix}.png`,
        triste: `assets/arara-triste${assetSuffix}.png`,
        curiosa: `assets/arara-curiosa${assetSuffix}.png`
    };
    
    // --- Diálogos dinâmicos (usam 'translations' que é carregado acima) ---
    const introDialogues = [
        { title: translations.tutorial_title, text: translations.tutorial },
        { title: translations.stage1_title, text: translations.stage1 }
    ];

    const getRandomDialogue = (type) => {
        const options = translations[type]; 
        if (!options) return "Diálogo não encontrado.";
        return options[Math.floor(Math.random() * options.length)];
    };

    const INITIAL_TIME = 90;
    const TIME_BONUS = 10;
    const FOOD_SPAWN_INTERVAL = 2000;
    const FOOD_SPEED = 120; // Pixels por segundo (ajustado na função moveFood)

    // --- LÓGICA DO CAMINHO DA ESTEIRA ---
    const PATH_STATE = {
        MOVE_DOWN: 1,
        MOVE_RIGHT: 2,
        MOVE_UP: 3,
        MOVE_LEFT: 4,
        MOVE_UP_EXIT: 5
    };
    const PATH_PERCENTAGES = {
        SPAWN_X: 6,
        SPAWN_Y: 19,
        EXIT_X: 3,
        EXIT_Y: 20,
        TURN_1_Y: 63,
        TURN_2_X: 92,
        TURN_3_Y: 50,
        TURN_4_X: 18
    };
    // --- FIM DA LÓGICA DO CAMINHO ---


    // --- MUDANÇA PRINCIPAL: Objeto de alimentos multi-idioma usa o sufixo ---
    const ALL_FOODS_DATA = {
        // --- PORTUGUÊS ---
        'pt': {
            carboidrato: [
                { name: 'Arroz', img: `assets/arroz${assetSuffix}.png`, description: 'O arroz integral é um grão que mantém a casca e o farelo. Ele fornece energia, ajuda na digestão por ter mais fibras.', funFact: 'Quando o arroz está cozinhando ele faz um barulhinho (como estalinhos), como se estivesse avisando que já está quase pronto.', nutritionalInfo: 'O arroz integral é uma boa fonte de fibra, contém vitaminas do complexo B e minerais como magnésio, fósforo e ferro. A fibra contribui para a saciedade, as vitaminas e os minerais são essenciais para diversas funções do corpo.' },
                { name: 'Macarrão', img: `assets/macarrao${assetSuffix}.png`, description: 'O macarrão integral fornece vitaminas, minerais e fibras para o nosso corpo, ajudando na digestão, controlando os níveis de açúcar no sangue e fornecendo energia.', funFact: 'Alguns arqueólogos encontraram vestígios de macarrão com quase 4 mil anos de idade, na China.', nutritionalInfo: 'O macarrão integral é uma fonte rica de fibras, vitaminas e minerais, cada 100g de macarrão integral possui 124 calorias, auxilia na saciedade e no funcionamento do intestino.' },
                { name: 'Banana', img: `assets/banana${assetSuffix}.png`, description: 'A banana contribui para a saúde do coração, melhora o funcionamento intestinal, aumenta a energia, fortifica os músculos e auxilia no humor.', funFact: 'As bananeiras não são árvores, “são ervas gigantes”, onde podem crescer mais de 7 metros de altura.', nutritionalInfo: 'A banana é uma fonte de minerais como potássio e magnésio, vitamina B6 e C, e hidratos de carbono. Possui 26g de carboidrato, 98 calorias, 2g de fibras e 1,3g de proteínas.' },
            ],
            proteina: [
                { name: 'Carne', img: `assets/carne${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Frango', img: `assets/frango${assetSuffix}.png`, description: 'O frango ajuda a construir músculos e dá energia para o corpo.', funFact: 'Os atletas gostam de incluir bastante frango em seus pratos, pois ele ajuda a construir músculos e a dar bastante energia, principalmente o frango grelhado e cozido.', nutritionalInfo: 'O frango geralmente é uma fonte rica em proteínas de alta qualidade e pobre em gorduras, com vitaminas do complexo B e minerais como selênio e fósforo, sem hidratos de carbono e fibras.' },
                { name: 'Ovo', img: `assets/ovo${assetSuffix}.png`, description: 'O ovo da galinha ajuda o corpo a crescer e se manter saudável, além disso, contém vitaminas e minerais importantes para os ossos, músculos e cérebro.', funFact: 'Se você girar um ovo cru e outro cozido, o cozido gira de forma firme, mas o cru balança e tropeça por dentro.', nutritionalInfo: 'O ovo é uma fonte de nutrientes completo, com baixo custo e versatilidade culinária, é importante consumi-lo com cuidado para evitar contaminação. Ele possui vitaminas A, D, E, B2, B12, folato e minerais essenciais como fósforo, ferro e selênio.' },
                { name: 'Salmão', img: `assets/salmao${assetSuffix}.png`, description: 'O salmão grelhado ajuda na saúde dos ossos e no bem-estar mental por conta das vitaminas e minerais, no crescimento muscular devido as proteínas presentes.', funFact: 'A cor laranja do salmão não é natural, é apenas um resultado da alimentação do peixe ao comer algas e crustáceos.', nutritionalInfo: 'O salmão grelhado sem sal ou óleo, pode conter 243 calorias e 26g de proteínas é uma fonte rica em vitaminas como a D e B12, e do mineral selênio.' },
                { name: 'Peixe', img: `assets/peixe${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' }
            ],
            vitamina: [
                { name: 'Cenoura', img: `assets/cenoura${assetSuffix}.png`, description: 'A cenoura ajuda a manter a visão saudável, ajudam o intestino a funcionar bem e dá energia para o corpo.', funFact: 'Se você colocar cenouras cortadas em uma água com gás, elas vão subir e descer como se estivessem fazendo uma coreografia.', nutritionalInfo: 'A cenoura é um vegetal rico em vitamina A, que contribui para a saúde da visão e tem ação intoxicante. Ela contém vitaminas e minerais como potássio, e as fibras ajudam no funcionamento do intestino.' },
                { name: 'Feijão', img: `assets/feijao${assetSuffix}.png`, description: 'O feijão é uma leguminosa rica em proteína e fibra, que ajuda a manter os músculos fortes e o intestino funcionando bem.', funFact: 'A planta mais alta do feijão alcançou mais de 14 metros de altura, o que é mais de três girafas empilhadas.', nutritionalInfo: 'O feijão é um alimento rico em nutrientes, fornecendo proteínas vegetais, carboidratos completos, fibras e vitaminas de complexo B e minerais como ferro, fósforo e potássio. A forma de preparo do feijão influencia o valor nutricional exato.' },
                { name: 'Tomate', img: `assets/tomate${assetSuffix}.png`, description: 'O tomate auxilia na saúde do coração e intestinal, fortalecendo os ossos, protegendo a pele e sendo aliado a imunidade.', funFact: 'A palavra tomate vem de "tomati", que significa "coisa roliça com umbigo", nome dado pelos astecas.', nutritionalInfo: 'O tomate é rico em água, fibras, vitamina C e A e minerais como o potássio, magnésio, ferro e fósforo. Um tomate de 100g possui entre 18-23 calorias e aproximadamente 93-95% de água.' },
                { name: 'Abacaxi', img: `assets/abacaxi${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Brócolis', img: `assets/brocolis${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Couve', img: `assets/couve${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Laranja', img: `assets/laranja${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Maçã', img: `assets/maca${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Pimenta', img: `assets/pimenta${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Repolho', img: `assets/repolho${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' }
            ],
            pegadinha: [
                { name: 'Presunto', img: `assets/presunto${assetSuffix}.png`, description: 'O peito de peru processado tem proteínas, mas possui muito sal e conservantes, que podem fazer mal se comer em excesso.', funFact: 'No passado, os fabricantes queriam uma carne fatiada rápida e prática, que parecesse mais "gorda e suculenta", ou seja, o peito de peru processado é um tipo de truque mágico.', nutritionalInfo: 'O peito de peru processado é rico em proteínas e tem baixa quantidade de gordura, mas é alto em sódio e contém aditivos conservantes, estabilizantes e amido. O valor nutritivo depende da marca.' },
                { name: 'Suco de Caixinha', img: `assets/suco-de-caixinha${assetSuffix}.png`, description: 'O suco de caixinha dá energia rápida, mas tem muito açúcar e nem sempre muita fruta, ou seja, pode fazer mal aos dentes e ao corpo.', funFact: 'Apesar de parecer "só" fruta, a maioria dos sucos de caixinha contém água e açúcar adicionados, então nem sempre é 100% fruta.', nutritionalInfo: 'Os sucos de caixinha variam nutricionalmente, mas são ricos em calorias e açúcares, com poucas fibras, podem conter aditivos como conservantes e aromatizantes. Sucos 100% integrais sem açúcar é a melhor opção.' },
                { name: 'Iogurte', img: `assets/yogurt${assetSuffix}.png`, description: 'O iogurte com sabor ajuda os ossos e músculos, mas contém bastante açúcar, podendo prejudicar os dentes e aumentar os riscos de doenças.', funFact: 'Muitos dos corantes vermelhos usados em produtos como iogurte de morango podem ser feitos a partir de um inseto chamado cochonilha.', nutritionalInfo: 'Variam bastante dependendo da marca e do tipo, mas contém calorias, proteínas, gorduras, açúcares e cálcio.' },
                { name: 'Cupcake', img: `assets/cupcake${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Pizza', img: `assets/pizza${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Hamburguer', img: `assets/hamburguer${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Coca-Cola', img: `assets/cocacola${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Bolo', img: `assets/bolo${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' }
            ]
        },
        // --- ENGLISH (Tradução) ---
        'en': {
            carboidrato: [
                { name: 'Rice', img: `assets/arroz${assetSuffix}.png`, description: 'Brown rice is a grain that retains its husk and bran. It provides energy and aids digestion due to having more fiber.', funFact: 'When rice is cooking, it makes a little crackling noise, as if it\'s letting you know it\'s almost ready.', nutritionalInfo: 'Brown rice is a good source of fiber, contains B-complex vitamins, and minerals like magnesium, phosphorus, and iron. The fiber contributes to satiety, and the vitamins and minerals are essential for various body functions.' },
                { name: 'Pasta', img: `assets/macarrao${assetSuffix}.png`, description: 'Whole wheat pasta provides vitamins, minerals, and fiber for our body, helping with digestion, controlling blood sugar levels, and providing energy.', funFact: 'Some archaeologists found traces of pasta nearly 4,000 years old in China.', nutritionalInfo: 'Whole wheat pasta is a rich source of fiber, vitamins, and minerals. Every 100g of whole wheat pasta has 124 calories, aids in satiety, and helps intestinal function.' },
                { name: 'Banana', img: `assets/banana${assetSuffix}.png`, description: 'Bananas contribute to heart health, improve intestinal function, increase energy, strengthen muscles, and help with mood.', funFact: 'Banana plants are not trees, they are "giant herbs," which can grow over 7 meters tall.', nutritionalInfo: 'The banana is a source of minerals like potassium and magnesium, vitamins B6 and C, and carbohydrates. It has 26g of carbohydrates, 98 calories, 2g of fiber, and 1.3g of protein.' },
            ],
            proteina: [
                { name: 'Meat', img: `assets/carne${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Chicken', img: `assets/frango${assetSuffix}.png`, description: 'Chicken helps build muscles and gives the body energy.', funFact: 'Athletes like to include a lot of chicken in their meals because it helps build muscle and provides plenty of energy, especially grilled and cooked chicken.', nutritionalInfo: 'Chicken is generally a source rich in high-quality proteins and low in fat, with B-complex vitamins and minerals like selenium and phosphorus, without carbohydrates and fiber.' },
                { name: 'Egg', img: `assets/ovo${assetSuffix}.png`, description: 'The chicken egg helps the body grow and stay healthy, and it also contains important vitamins and minerals for bones, muscles, and the brain.', funFact: 'If you spin a raw egg and a cooked egg, the cooked one spins steadily, but the raw one wobbles and stumbles inside.', nutritionalInfo: 'The egg is a complete nutrient source, with low cost and culinary versatility. It is important to consume it carefully to avoid contamination. It has vitamins A, D, E, B2, B12, folate, and essential minerals like phosphorus, iron, and selenium.' },
                { name: 'Salmon', img: `assets/salmao${assetSuffix}.png`, description: 'Grilled salmon supports bone health and mental well-being due to its vitamins and minerals, and muscle growth due to its proteins.', funFact: 'The orange color of salmon is not natural; it is just a result of the fish\'s diet of eating algae and crustaceans.', nutritionalInfo: 'Grilled salmon without salt or oil can contain 243 calories and 26g of protein. It is a rich source of vitamins like D and B12, and the mineral selenium.' },
                { name: 'Fish', img: `assets/peixe${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' }
            ],
            vitamina: [
                { name: 'Carrot', img: `assets/cenoura${assetSuffix}.png`, description: 'Carrots help maintain healthy vision, help the intestines work well, and give the body energy.', funFact: 'If you put cut carrots in sparkling water, they will rise and fall as if they are doing a choreography.', nutritionalInfo: 'The carrot is a vegetable rich in vitamin A, which contributes to vision health and has a detoxifying action. It contains vitamins and minerals like potassium, and the fibers help with intestinal function.' },
                { name: 'Beans', img: `assets/feijao${assetSuffix}.png`, description: 'Beans are a legume rich in protein and fiber, which helps keep muscles strong and the intestines working well.', funFact: 'The tallest bean plant reached over 14 meters in height, which is more than three giraffes stacked on top of each other.', nutritionalInfo: 'Beans are a nutrient-rich food, providing plant-based proteins, complex carbohydrates, fiber, and B-complex vitamins, as well as minerals like iron, phosphorus, and potassium. The preparation method influences the exact nutritional value.' },
                { name: 'Tomato', img: `assets/tomate${assetSuffix}.png`, description: 'Tomatoes support heart and intestinal health, strengthening bones, protecting the skin, and boosting immunity.', funFact: 'The word tomato comes from "tomati," which means "plump thing with a navel," a name given by the Aztecs.', nutritionalInfo: 'The tomato is rich in water, fiber, vitamins C and A, and minerals like potassium, magnesium, iron, and phosphorus. A 100g tomato has between 18-23 calories and is approximately 93-95% water.' },
                { name: 'Pineapple', img: `assets/abacaxi${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Broccoli', img: `assets/brocolis${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Kale', img: `assets/couve${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Orange', img: `assets/laranja${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Apple', img: `assets/maca${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Pepper', img: `assets/pimenta${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Cabbage', img: `assets/repolho${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' }
            ],
            pegadinha: [
                { name: 'Ham', img: `assets/presunto${assetSuffix}.png`, description: 'Processed turkey breast has protein, but it has a lot of salt and preservatives, which can be harmful if eaten in excess.', funFact: 'In the past, manufacturers wanted a quick and practical sliced meat that seemed "fatter and juicier," meaning processed turkey breast is a kind of magic trick.', nutritionalInfo: 'Processed turkey breast is rich in protein and low in fat, but high in sodium and contains additives like preservatives, stabilizers, and starch. The nutritional value depends on the brand.' },
                { name: 'Juice Box', img: `assets/suco-de-caixinha${assetSuffix}.png`, description: 'Juice boxes provide quick energy, but they have a lot of sugar and not always a lot of fruit, meaning they can be bad for your teeth and body.', funFact: 'Although it may seem like "just" fruit, most juice boxes contain added water and sugar, so it\'s not always 100% fruit.', nutritionalInfo: 'Juice boxes vary nutritionally, but are high in calories and sugars, with little fiber. They may contain additives like preservatives and flavorings. 100% whole juices without sugar are the best option.' },
                { name: 'Yogurt', img: `assets/yogurt${assetSuffix}.png`, description: 'Flavored yogurt helps bones and muscles, but contains a lot of sugar, which can harm teeth and increase the risk of diseases.', funFact: 'Many of the red dyes used in products like strawberry yogurt can be made from an insect called cochineal.', nutritionalInfo: 'They vary greatly depending on the brand and type, but contain calories, protein, fat, sugar, and calcium.' },
                { name: 'Cupcake', img: `assets/cupcake${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Pizza', img: `assets/pizza${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Hamburger', img: `assets/hamburguer${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Coca-Cola', img: `assets/cocacola${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },
                { name: 'Cake', img: `assets/bolo${assetSuffix}.png`, description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' }
            ]
        },
        // --- ESPAÑOL (Tradução) ---
        'es': {
            carboidrato: [
                { name: 'Arroz', img: `assets/arroz${assetSuffix}.png`, description: 'El arroz integral es um grão que conserva su cáscara y salvado. Proporciona energía y ayuda en la digestión por tener más fibra.', funFact: 'Cuando el arroz se está cocinando, hace un pequeño ruido de crujido, como si avisara que ya está casi listo.', nutritionalInfo: 'El arroz integral es una buena fuente de fibra, contiene vitaminas del complejo B y minerales como magnesio, fósforo y hierro. La fibra contribuye a la saciedad, y las vitaminas y minerales son esenciales para diversas funciones del cuerpo.' },
                { name: 'Pasta', img: `assets/macarrao${assetSuffix}.png`, description: 'La pasta integral proporciona vitaminas, minerales y fibra a nuestro cuerpo, ayudando en la digestión, controlando los niveles de azúcar en sangre y proporcionando energía.', funFact: 'Algunos arqueólogos encontraron restos de pasta de casi 4.000 años de antigüedad en China.', nutritionalInfo: 'La pasta integral es una fuente rica en fibra, vitaminas y minerales. Cada 100g de pasta integral tiene 124 calorías, ayuda a la saciedad y al funcionamiento del intestino.' },
                { name: 'Banana', img: `assets/banana${assetSuffix}.png`, description: 'La banana contribuye a la salud del corazón, mejora el funcionamiento intestinal, aumenta la energía, fortalece los músculos y ayuda con el estado de ánimo.', funFact: 'Las plantas de banana no son árboles, son "hierbas gigantes", que pueden crecer más de 7 metros de altura.', nutritionalInfo: 'La banana es una fuente de minerales como potasio y magnesio, vitaminas B6 y C, e hidratos de carbono. Posee 26g de carbohidratos, 98 calorías, 2g de fibra y 1.3g de proteína.' },
            ],
            proteina: [
                { name: 'Carne', img: `assets/carne${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },
                { name: 'Pollo', img: `assets/frango${assetSuffix}.png`, description: 'El pollo ayuda a construir músculos y da energía al cuerpo.', funFact: 'A los atletas les gusta incluir mucho pollo en sus platos, ya que ayuda a construir músculo y a dar mucha energía, especialmente el pollo a la parrilla y cocido.', nutritionalInfo: 'El pollo generalmente es una fuente rica en proteínas de alta calidad y baja en grasas, con vitaminas del complejo B y minerales como selenio y fósforo, sin carbohidratos ni fibra.' },
                { name: 'Huevo', img: `assets/ovo${assetSuffix}.png`, description: 'El huevo de gallina ayuda al cuerpo a crecer y mantenerse saludable, además, contiene vitaminas y minerales importantes para los huesos, músculos y cerebro.', funFact: 'Si giras un huevo crudo y uno cocido, el cocido gira firmemente, pero el crudo se tambalea y tropieza por dentro.', nutritionalInfo: 'El huevo es una fuente completa de nutrientes, de bajo costo y versatilidad culinaria. Es importante consumirlo con cuidado para evitar la contaminación. Posee vitaminas A, D, E, B2, B12, folato y minerales esenciales como fósforo, hierro y selenio.' },
                { name: 'Salmón', img: `assets/salmao${assetSuffix}.png`, description: 'El salmón a la parrilla ayuda a la salud ósea y al bienestar mental gracias a sus vitaminas y minerales, y al crecimiento muscular debido a las proteínas presentes.', funFact: 'El color naranja del salmón no es natural; es solo el resultado de la alimentación del pez al comer algas y crustáceos.', nutritionalInfo: 'El salmón a la parrilla sin sal ni aceite puede contener 243 calorías y 26g de proteína. Es una fuente rica en vitaminas como la D y B12, y el mineral selenio.' },
                { name: 'Pescado', img: `assets/peixe${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' }
            ],
            vitamina: [
                { name: 'Zanahoria', img: `assets/cenoura${assetSuffix}.png`, description: 'La zanahoria ayuda a mantener una visión saludable, ayuda a que los intestinos funcionen bien y da energía al cuerpo.', funFact: 'Si pones zanahorias cortadas en agua con gas, subirán y bajarán como si estuvieran haciendo una coreografía.', nutritionalInfo: 'La zanahoria es un vegetal rico en vitamina A, que contribui para a saúde da visão e tem ação desintoxicante. Contiene vitaminas y minerales como el potasio, y las fibras ayudan al funcionamiento del intestino.' },
                { name: 'Frijoles', img: `assets/feijao${assetSuffix}.png`, description: 'Los frijoles son una legumbre rica en proteína y fibra, que ayuda a mantener los músculos fuertes y el intestino funcionando bien.', funFact: 'La planta de frijol más alta alcanzó más de 14 metros de altura, lo que es más que tres jirafas apiladas.', nutritionalInfo: 'Los frijoles son un alimento rico en nutrientes, que proporciona proteínas vegetales, carbohidratos complejos, fibra y vitaminas del complejo B, y minerales como hierro, fósforo y potasio. La forma de preparar los frijoles influye en el valor nutricional exacto.' },
                { name: 'Tomate', img: `assets/tomate${assetSuffix}.png`, description: 'El tomate ayuda a la salud del corazón e intestinal, fortaleciendo los huesos, protegiendo la piel y siendo un aliado de la inmunidad.', funFact: 'La palabra tomate proviene de "tomati", que significa "cosa redonda con ombligo", nombre dado por los aztecas.', nutritionalInfo: 'El tomate es rico en agua, fibra, vitaminas C y A, y minerales como potasio, magnesio, hierro y fósforo. Un tomate de 100g tiene entre 18-23 calorías y aproximadamente 93-95% de agua.' },
                { name: 'Piña', img: `assets/abacaxi${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Brócoli', img: `assets/brocolis${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Col Rizada', img: `assets/couve${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Naranja', img: `assets/laranja${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Manzana', img: `assets/maca${assetSuffix}.png`, description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },
                { name: 'Pimiento', img: `assets/pimenta${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Repollo', img: `assets/repolho${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' }
            ],
            pegadinha: [
                { name: 'Jamón', img: `assets/presunto${assetSuffix}.png`, description: 'La pechuga de pavo procesada tiene proteínas, pero tiene mucha sal y conservantes, que pueden ser perjudiciales si se comen en exceso.', funFact: 'En el pasado, los fabricantes querían una carne en lonchas rápida y práctica, que pareciera más "grasa y jugosa", es decir, la pechuga de pavo procesada es una especie de truco de magia.', nutritionalInfo: 'La pechuga de pavo procesada es rica en proteínas y baja en grasas, pero alta en sodio y contiene aditivos como conservantes, estabilizadores y almidón. El valor nutricional depende de la marca.' },
                { name: 'Jugo en Caja', img: `assets/suco-de-caixinha${assetSuffix}.png`, description: 'El jugo en caja da energía rápida, pero tiene mucho azúcar y no siempre mucha fruta, es decir, puede ser malo para los dientes y el cuerpo.', funFact: 'Aunque parezca "solo" fruta, la mayoría de los jugos en caja contienen agua y azúcar añadidos, por lo que no siempre es 100% fruta.', nutritionalInfo: 'Los jugos en caja varían nutricionalmente, pero son altos en calorías y azúcares, con poca fibra. Pueden contener aditivos como conservantes y saborizantes. Los jugos 100% integrales sin azúcar son la mejor opción.' },
                { name: 'Yogur', img: `assets/yogurt${assetSuffix}.png`, description: 'El yogur de sabores ayuda a los huesos y músculos, pero contiene bastante azúcar, lo que puede dañar los dientes y aumentar el riesgo de enfermedades.', funFact: 'Muchos de los colorantes rojos usados en productos como el yogur de fresa pueden estar hechos de un insecto llamado cochinilla.', nutritionalInfo: 'Varían mucho según la marca y el tipo, pero contienen calorías, proteínas, grasas, azúcares y calcio.' },
                { name: 'Cupcake', img: `assets/cupcake${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Pizza', img: `assets/pizza${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Hamburguesa', img: `assets/hamburguer${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Coca-Cola', img: `assets/cocacola${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' },
                { name: 'Pastel', img: `assets/bolo${assetSuffix}.png`, description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponível.' }
            ]
        }
    };


    // --- MUDANÇA PRINCIPAL: Seleciona o objeto de alimentos com base no idioma carregado ---
    // O resto do script usará esta variável 'FOODS'
    const FOODS = ALL_FOODS_DATA[currentLang] || ALL_FOODS_DATA['pt'];
    // --- FIM DA MUDANÇA ---


    // --- NOVO: Nomes dos grupos de alimentos traduzidos ---
    const FOOD_GROUP_NAMES = { 
        carboidrato: translations.almanaque_titulo_carb, 
        proteina: translations.almanaque_titulo_prot, 
        vitamina: translations.almanaque_titulo_vit, 
        pegadinha: translations.almanaque_titulo_pega
    };
    
    // --- NOVO: Títulos das etapas traduzidos ---
    const STAGES = [
        { stage: 1, goal: 3, orderSize: 3, foodTypes: ['carboidrato'], possibleOrderTypes: ['carboidrato'], title: translations.stage1_title },
        { stage: 2, goal: 5, orderSize: 3, foodTypes: ['carboidrato', 'proteina'], possibleOrderTypes: ['carboidrato', 'proteina'], title: translations.stage2_title },
        { stage: 3, goal: 7, orderSize: 3, foodTypes: ['carboidrato', 'proteina', 'vitamina'], possibleOrderTypes: ['carboidrato', 'proteina', 'vitamina'], title: translations.stage3_title },
        { stage: 4, goal: 10, orderSize: 3, foodTypes: ['carboidrato', 'proteina', 'vitamina', 'pegadinha'], possibleOrderTypes: ['carboidrato', 'proteina', 'vitamina'], title: translations.stage4_title }
    ];

    let timer, score, currentStageIndex, stageOrders, timerInterval, foodSpawnInterval, gameLoopInterval, macawTimeout, otherDialogueTimeout;
    let isPaused = false;
    let currentOrder = [];
    let plateContents = [null, null, null];
    let sounds = {};
    let audioInitialized = false;
    let lastUsedFoods = [];
    let isShowingIntro = false;
    let introStep = 0;

    let allBookFoods = [];
    let pages = [];
    let currentPage = 1;
    const ITEMS_PER_SECTION = 3;
    const SECTIONS_PER_PAGE = 6;
    const ITEMS_PER_PAGE = ITEMS_PER_SECTION * SECTIONS_PER_PAGE;

    let pausedBeforeModal = false;
    let modalPauseCount = 0;

    // --- NOVO: Variáveis para Drag & Drop por Toque ---
    let draggedItem = null;      // Armazena o item sendo arrastado pelo toque
    let currentDropTarget = null; // Armazena a cesta (slot) que está sob o dedo
    let touchOffsetX = 0;        // Offset X do toque dentro do item
    let touchOffsetY = 0;        // Offset Y do toque dentro do item
    let esteiraRect = null;      // Cache da posição da esteira para performance
    // --- FIM: Variáveis de Toque ---

    function pushModalPause() {
        if (modalPauseCount === 0) {
            pausedBeforeModal = isPaused;
            isPaused = true;
        }
        modalPauseCount++;
    }

    function popModalPause() {
        if (modalPauseCount > 0) modalPauseCount--;
        if (modalPauseCount === 0) {
            isPaused = pausedBeforeModal;
            pausedBeforeModal = false;
        } else {
            isPaused = true;
        }
    }

    // --- SEÇÃO DE ÁUDIO ---
    function initAudio() {
        if (audioInitialized) return;
        const soundFiles = {
            'acerto': 'assets/acerto.mp3',
            'alerta-cronometro': 'assets/alerta-do-cronometro.mp3',
            'avaliacao-final': 'assets/avaliacao-final.mp3',
            'bonus-tempo': 'assets/bonus-de-tempo.mp3',
            'clique-ui': 'assets/clique-ui.mp3',
            'erro': 'assets/erro.mp3',
            'musica-fundo': 'assets/musica-dinamica-fundo.mp3',
            'pegar-soltar': 'assets/pegar-soltar-item.mp3'
        };
        for (const key in soundFiles) {
            sounds[key] = new Audio(soundFiles[key]);
        }
        sounds['musica-fundo'].loop = true;
        audioInitialized = true;
    }

    function playSound(name) {
        if (!audioInitialized || !sounds[name]) return;
        
        // --- NOVO: Verifica áudio nas configurações ---
        const settingsString = localStorage.getItem('safequest-settings');
        let canPlay = true;
        if (settingsString) {
            try {
                const settings = JSON.parse(settingsString);
                if (name === 'musica-fundo' && !settings.music) canPlay = false;
                if (name !== 'musica-fundo' && !settings.sfx) canPlay = false;
            } catch (e) { /* ignora erro */ }
        }
        if (!canPlay) return;
        // --- FIM DA VERIFICAÇÃO ---

        const sound = sounds[name];
        if (name !== 'musica-fundo') {
            sound.currentTime = 0;
        }
        sound.play().catch(error => console.error(`Erro ao tocar o som '${name}':`, error));
    }

    function stopSound(name) {
        if (!audioInitialized || !sounds[name]) return;
        const sound = sounds[name];
        sound.pause();
        sound.currentTime = 0;
    }

    function fadeIn(name, targetVolume = 0.3, duration = 1500) {
        if (!audioInitialized || !sounds[name]) return;

        // --- NOVO: Verifica áudio nas configurações ---
        const settingsString = localStorage.getItem('safequest-settings');
        if (settingsString) {
            try {
                const settings = JSON.parse(settingsString);
                if (name === 'musica-fundo' && !settings.music) return; // Não toca
            } catch (e) { /* ignora erro */ }
        }
        // --- FIM DA VERIFICAÇÃO ---

        const sound = sounds[name];
        const intervalTime = 50;
        const fadeSteps = duration / intervalTime;
        const volumeIncrement = targetVolume / fadeSteps;
        sound.volume = 0;
        sound.play().catch(error => console.error(`Erro ao iniciar o som para fade-in:`, error));
        const fadeInterval = setInterval(() => {
            if (sound.volume < targetVolume) {
                sound.volume = Math.min(targetVolume, sound.volume + volumeIncrement);
            } else {
                clearInterval(fadeInterval);
            }
        }, intervalTime);
    }

    function fadeOut(name, duration = 1000) {
        if (!audioInitialized || !sounds[name]) return;
        const sound = sounds[name];
        const intervalTime = 50;
        const fadeSteps = duration / intervalTime;
        const startVolume = sound.volume;
        const volumeDecrement = startVolume / fadeSteps;
        const fadeInterval = setInterval(() => {
            if (sound.volume > 0) {
                sound.volume = Math.max(0, sound.volume - volumeDecrement);
            } else {
                clearInterval(fadeInterval);
                sound.pause();
                sound.currentTime = 0;
                sound.volume = startVolume;
            }
        }, intervalTime);
    }
    // --- FIM DA SEÇÃO DE ÁUDIO ---

    function init() {
        startButton.addEventListener('click', () => {
            initAudio();
            startIntroduction();
        });
        restartButton.addEventListener('click', () => {
        playSound('clique-ui');
        stopSound('avaliacao-final');
        stopSound('alerta-cronometro');
        stopSound('musica-fundo');
        startGame();
        });
        
        // --- CÓDIGO QUE FALTA ---
        // Adicione este bloco:
        backToMenuButton.addEventListener('click', () => {
        playSound('clique-ui'); // Opcional: tocar som de clique
        
        // Redireciona o usuário para a página do menu
        // Altere 'index.html' se o nome do seu menu for outro
        window.location.href = 'menu_index.html'; 
        });

        backToMenuButton.addEventListener('click', () => {
            playSound('clique-ui');
            window.location.href = "../menu/menu_index.html";
        });
        nextStageButton.addEventListener('click', () => {
            playSound('clique-ui');
            handleNextButtonClick();
        });
        verifyButton.addEventListener('click', () => {
            playSound('clique-ui');
            verifyOrder();
        });
        plateSlots.forEach(slot => {
            slot.addEventListener('dragover', handleDragOver);
            slot.addEventListener('dragleave', handleDragLeave);
            slot.addEventListener('drop', handleDrop);
            slot.addEventListener('click', handlePotClick);
        });

        // --- NOVO: Listeners de Toque Globais ---
        // Adiciona os listeners ao gameContainer para capturar o movimento em qualquer lugar
        gameContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
        gameContainer.addEventListener('touchend', handleTouchEnd);
        gameContainer.addEventListener('touchcancel', handleTouchEnd); // Cancela o toque se algo interromper
        // --- FIM: Listeners de Toque ---

        const portraitMediaQuery = window.matchMedia("(orientation: portrait)");
        function handleOrientationChange(e) {
            const orientationWarning = document.getElementById('orientation-warning');
            if (e.matches) {
                // Se está em modo retrato, pausa o jogo e MOSTRA o aviso
                orientationWarning.classList.remove('hidden');
                orientationWarning.classList.add('flex');
                isPaused = true;
            } else {
                // Se está em modo paisagem, ESCONDE o aviso e despausa (se não houver outra pausa)
                orientationWarning.classList.add('hidden');
                orientationWarning.classList.remove('flex');

                const isAnyModalOpen = bookModal.classList.contains('flex') ||
                                        stageTransitionScreen.classList.contains('flex') ||
                                        endScreen.classList.contains('flex') ||
                                        startScreen.classList.contains('flex');
                if (!isShowingIntro && !isAnyModalOpen && modalPauseCount === 0) {
                    isPaused = false;
                }
            }
        }
        portraitMediaQuery.addEventListener('change', handleOrientationChange);
        handleOrientationChange(portraitMediaQuery); // Checa a orientação inicial
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(gameContainer);
        prepareBookContent();
        calculatePages();
        bookButton.addEventListener('click', () => {
            playSound('clique-ui');
            openBook();
        });
        bookModalClose.addEventListener('click', () => {
            playSound('clique-ui');
            closeBook();
        });
        foodDetailClose.addEventListener('click', () => {
            playSound('clique-ui');
            closeFoodDetails();
        });
        prevPageBtn.addEventListener('click', () => {
            playSound('clique-ui');
            changePage(-1);
        });
        nextPageBtn.addEventListener('click', () => {
            playSound('clique-ui');
            changePage(1);
        });
    }

    // --- FUNÇÕES DO LIVRO E MODAIS ---
    function prepareBookContent() {
    allBookFoods = [];
    const categoryOrder = ['carboidrato', 'proteina', 'vitamina', 'pegadinha'];
    categoryOrder.forEach(categoryKey => {
        // A variável 'FOODS' já está no idioma correto
        if (FOODS[categoryKey]) {
            FOODS[categoryKey].forEach(food => {
                allBookFoods.push({ ...food, category: categoryKey });
            });
        }
    });
}

    function calculatePages() {
        pages = [];
        for (let i = 0; i < allBookFoods.length; i += ITEMS_PER_PAGE) {
            pages.push(allBookFoods.slice(i, i + ITEMS_PER_PAGE));
        }
    }

    function renderPage(pageNumber) {
    currentPage = pageNumber;
    const pageData = pages[currentPage - 1] || [];
    pageSections.forEach(section => section.innerHTML = '');

    for (let s = 0; s < pageSections.length; s++) {
        const sectionEl = pageSections[s];
        const chunkStart = s * ITEMS_PER_SECTION;
        const chunk = pageData.slice(chunkStart, chunkStart + ITEMS_PER_SECTION);

        if (chunk.length === 0) continue;

        const inner = document.createElement('div');
        inner.className = 'section-inner';

        const categoryKey = chunk[0].category;
        const titleEl = document.createElement('div');
        titleEl.className = 'category-title';
        // --- NOVO: Usa o nome traduzido do grupo ---
        titleEl.textContent = FOOD_GROUP_NAMES[categoryKey] || '';
        inner.appendChild(titleEl);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'food-items-container';

        chunk.forEach(food => {
            const itemEl = document.createElement('div');
            itemEl.className = 'book-food-item';
            itemEl.onclick = () => {
                playSound('clique-ui');
                showFoodDetails(food);
            };
            const img = document.createElement('img');
            img.src = food.img;
            img.alt = food.name;
            const name = document.createElement('p');
            name.textContent = food.name;
            itemEl.appendChild(img);
            itemEl.appendChild(name);
            itemsContainer.appendChild(itemEl);
        });

        inner.appendChild(itemsContainer);
        sectionEl.appendChild(inner);
    }

    updateNavigation();
}

    function updateNavigation() {
        // --- NOVO: Texto do indicador de página traduzido ---
        pageIndicator.textContent = `${translations.pagina_indicador} ${currentPage} ${translations.de_indicador} ${pages.length}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === pages.length;
    }

    function changePage(direction) {
        const newPage = currentPage + direction;
        if (newPage > 0 && newPage <= pages.length) {
            bookPagesContainer.classList.add('fade-out');
            setTimeout(() => {
                renderPage(newPage);
                bookPagesContainer.classList.remove('fade-out');
            }, 300);
        }
    }

    function openBook() {
    pushModalPause();
    renderPage(1);
    bookModal.classList.remove('hidden');
    bookModal.classList.add('flex');
}

    function closeBook() {
    bookModal.classList.add('hidden');
    bookModal.classList.remove('flex');
    popModalPause();
}

    function showFoodDetails(food) {
        foodDetailName.textContent = food.name;
        foodDetailImg.src = food.img;
        foodDetailImg.alt = food.name;
        foodDetailDesc.textContent = food.description;
        foodDetailFunFact.textContent = food.funFact;
        foodDetailNutri.textContent = food.nutritionalInfo;
        foodDetailModal.classList.remove('hidden');
        foodDetailModal.classList.add('flex');
        pushModalPause();
    }

    function closeFoodDetails() {
        foodDetailModal.classList.add('hidden');
        foodDetailModal.classList.remove('flex');
        popModalPause();
    }
    // --- FIM FUNÇÕES DO LIVRO E MODAIS ---

    // --- FUNÇÕES DE INTRODUÇÃO E TRANSIÇÃO ---
    function startIntroduction() {
        playSound('clique-ui');
        startScreen.classList.add('hidden');
        isShowingIntro = true;
        introStep = 0;
        showNextIntroDialogue();
    }

    function showNextIntroDialogue() {
        if (introStep < introDialogues.length) {
            const dialogue = introDialogues[introStep];
            stageMacawSprite.src = MACAW_SPRITES.falando;
            document.getElementById('stage-title').textContent = dialogue.title;
            document.getElementById('stage-explanation').textContent = dialogue.text;
            stageTransitionScreen.classList.remove('hidden');
            stageTransitionScreen.classList.add('flex');
            isPaused = true;
            introStep++;
        } else {
            isShowingIntro = false;
            stageTransitionScreen.classList.add('hidden');
            stageTransitionScreen.classList.remove('flex'); // Garante que saiu do flex
            isPaused = false;
            startGame();
        }
    }

    function handleNextButtonClick() {
        if (isShowingIntro) {
            showNextIntroDialogue();
        } else {
            resumeGame();
        }
    }
    // --- FIM FUNÇÕES DE INTRODUÇÃO E TRANSIÇÃO ---

    // --- AJUSTE DE REDIMENSIONAMENTO ---
    function handleResize() {
        if (isPaused || !gameLoopInterval || !esteiraContainer) return;
        const foodsOnBelt = esteiraContainer.querySelectorAll('.food-item');
        const container = esteiraContainer;
        const verticalCenterPx = container.clientWidth * (PATH_PERCENTAGES.SPAWN_X / 100);
        const wiggle = 20;
        foodsOnBelt.forEach(food => {
            const path = parseInt(food.dataset.path);
            if (path === PATH_STATE.MOVE_DOWN) {
                food.style.left = `${verticalCenterPx - (wiggle / 2) + (Math.random() * wiggle)}px`;
            }
        });
    }
    // --- FIM AJUSTE DE REDIMENSIONAMENTO ---

    // --- FUNÇÕES PRINCIPAIS DO JOGO ---
    function startGame() {
        endScreen.classList.add('hidden');
        endScreen.classList.remove('flex');
        startScreen.classList.add('hidden');
        startScreen.classList.remove('flex');
        gameHeader.classList.remove('hidden');
        gameMain.classList.remove('hidden');
        timer = INITIAL_TIME;
        score = 0;
        currentStageIndex = 0;
        isPaused = false;
        lastUsedFoods = [];
        updateScore(0);
        updateTimerDisplay();
        esteiraContainer.innerHTML = '';
        setupStage();
        startGameplayLoops();
        scheduleRandomDialogue();
        fadeIn('musica-fundo', 0.3, 1500);
    }

    function startGameplayLoops() {
        if (timerInterval) clearInterval(timerInterval);
        if (foodSpawnInterval) clearInterval(foodSpawnInterval);
        if (gameLoopInterval) clearInterval(gameLoopInterval);
        startTimer();
        startSpawningFood();
        startGameLoop();
    }

    function setupStage() {
        stageOrders = 0;
        stageDisplayEl.textContent = STAGES[currentStageIndex].stage;
        generateOrder();
    }

    function generateOrder() {
        const stage = STAGES[currentStageIndex];
        currentOrder = [];
        clearPlate();
        for (let i = 0; i < stage.orderSize; i++) {
            const type = stage.possibleOrderTypes[Math.floor(Math.random() * stage.possibleOrderTypes.length)];
            currentOrder.push(type);
            // --- NOVO: Usa o nome traduzido do grupo ---
            orderSlots[i].textContent = FOOD_GROUP_NAMES[type];
        }
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (isPaused) return;
            timer--;
            updateTimerDisplay();
            if (timer <= 15 && timer > 0) {
                timerEl.classList.add('timer-warning');
                if (timer % 2 === 0) {
                    playSound('alerta-cronometro');
                }
            } else {
                timerEl.classList.remove('timer-warning');
                stopSound('alerta-cronometro');
            }
            if (timer <= 0) {
                timer = 0;
                updateTimerDisplay();
                endGame(false);
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
        const seconds = (timer % 60).toString().padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    }

    function startSpawningFood() {
        if (foodSpawnInterval) clearInterval(foodSpawnInterval);
        if (!isPaused) spawnFood();
        foodSpawnInterval = setInterval(() => {
            if (isPaused) return;
            spawnFood();
        }, FOOD_SPAWN_INTERVAL);
    }

    function spawnFood() {
        const stage = STAGES[currentStageIndex];
        const randomType = stage.foodTypes[Math.floor(Math.random() * stage.foodTypes.length)];
        
        // A variável 'FOODS' já está no idioma correto
        if (!FOODS[randomType] || FOODS[randomType].length === 0) return; // Checagem de segurança

        const foodData = FOODS[randomType][Math.floor(Math.random() * FOODS[randomType].length)];
        const container = esteiraContainer;
        if (!container) return;

        const foodEl = document.createElement('div');
        foodEl.id = `food-${Date.now()}-${Math.random()}`;
        foodEl.className = 'food-item';
        foodEl.style.backgroundImage = `url('${foodData.img}')`; // foodData.img já tem o sufixo correto
        foodEl.draggable = true;
        foodEl.dataset.type = randomType;
        foodEl.dataset.img = foodData.img;
        foodEl.dataset.name = foodData.name;

        // --- Eventos de MOUSE (PC) ---
        foodEl.addEventListener('dragstart', (e) => {
            if (isPaused) {
                e.preventDefault();
                return;
            }
            playSound('pegar-soltar');
            e.dataTransfer.setData('text/plain', foodEl.id);
            foodEl.dataset.dragging = 'true';
            setTimeout(() => foodEl.classList.add('opacity-50'), 0);
        });
        foodEl.addEventListener('dragend', () => {
             foodEl.classList.remove('opacity-50');
             delete foodEl.dataset.dragging;
        });

        // --- NOVO: Evento de TOQUE (Mobile) ---
        // { passive: false } é crucial para permitir o e.preventDefault()
        foodEl.addEventListener('touchstart', handleTouchStart, { passive: false });
        // --- FIM: Evento de Toque ---

        foodEl.style.top = `${container.clientHeight * (PATH_PERCENTAGES.SPAWN_Y / 100)}px`;
        const wiggle = 20;
        const verticalCenterPx = container.clientWidth * (PATH_PERCENTAGES.SPAWN_X / 100);
        foodEl.style.left = `${verticalCenterPx - (wiggle / 2) + (Math.random() * wiggle)}px`;
        foodEl.dataset.path = PATH_STATE.MOVE_DOWN;

        foodEl.classList.add('food-spawn');
        foodEl.addEventListener('animationend', () => foodEl.classList.remove('food-spawn'), { once: true });

        container.appendChild(foodEl);
    }

    function startGameLoop() {
        if (gameLoopInterval) clearInterval(gameLoopInterval);
        gameLoopInterval = setInterval(() => {
            if (isPaused) return;
            moveFood();
        }, 1000 / 60);
    }

    function moveFood() {
        const foodsOnBelt = esteiraContainer.querySelectorAll('.food-item:not([data-dragging="true"])');
        const speed = (FOOD_SPEED / 60);
        const container = esteiraContainer;
        if (!container) return;

        const turn1Y_px = container.clientHeight * (PATH_PERCENTAGES.TURN_1_Y / 100);
        const turn2X_px = container.clientWidth * (PATH_PERCENTAGES.TURN_2_X / 100);
        const turn3Y_px = container.clientHeight * (PATH_PERCENTAGES.TURN_3_Y / 100);
        const turn4X_px = container.clientWidth * (PATH_PERCENTAGES.TURN_4_X / 100);
        const exitY_px = container.clientHeight * (PATH_PERCENTAGES.EXIT_Y / 100);

        foodsOnBelt.forEach(food => {
            if (food.classList.contains('food-exit')) return;
            let currentTop = parseFloat(food.style.top);
            let currentLeft = parseFloat(food.style.left);
            const path = parseInt(food.dataset.path);

            switch (path) {
                case PATH_STATE.MOVE_DOWN:
                    if (currentTop < turn1Y_px) { food.style.top = `${currentTop + speed}px`; }
                    else { food.style.top = `${turn1Y_px}px`; food.dataset.path = PATH_STATE.MOVE_RIGHT; }
                    break;
                case PATH_STATE.MOVE_RIGHT:
                    if (currentLeft < turn2X_px) { food.style.left = `${currentLeft + speed}px`; }
                    else { food.style.left = `${turn2X_px}px`; food.dataset.path = PATH_STATE.MOVE_UP; }
                    break;
                case PATH_STATE.MOVE_UP:
                    if (currentTop > turn3Y_px) { food.style.top = `${currentTop - speed}px`; }
                    else { food.style.top = `${turn3Y_px}px`; food.dataset.path = PATH_STATE.MOVE_LEFT; }
                    break;
                case PATH_STATE.MOVE_LEFT:
                    if (currentLeft > turn4X_px) { food.style.left = `${currentLeft - speed}px`; }
                    else { food.style.left = `${turn4X_px}px`; food.dataset.path = PATH_STATE.MOVE_UP_EXIT; }
                    break;
                case PATH_STATE.MOVE_UP_EXIT:
                    if (currentTop > exitY_px) { food.style.top = `${currentTop - speed}px`; }
                    else {
                        food.classList.add('food-exit');
                        food.addEventListener('animationend', () => food.remove(), { once: true });
                    }
                    break;
            }
        });
    }
    // --- FIM FUNÇÕES PRINCIPAIS DO JOGO ---

    // --- FUNÇÕES DE INTERAÇÃO (DRAG & DROP, VERIFICAÇÃO) ---

    // --- NOVO: Handlers de Toque ---

    function handleTouchStart(e) {
        // Ignora se não for um único toque ou se o jogo estiver pausado
        if (e.touches.length !== 1 || isPaused) return;

        e.preventDefault(); // Previne scroll e "clique fantasma"
        
        draggedItem = e.currentTarget; // O .food-item
        esteiraRect = esteiraContainer.getBoundingClientRect(); // Pega a posição da esteira
        const touch = e.touches[0];

        // Calcula o offset do toque *dentro* do item
        const itemRect = draggedItem.getBoundingClientRect();
        touchOffsetX = touch.clientX - itemRect.left;
        touchOffsetY = touch.clientY - itemRect.top;

        // Marca como "arrastando" para pausar o movimento da esteira
        draggedItem.dataset.dragging = 'true';
        playSound('pegar-soltar');
        
        // Estilos de "pegar"
        draggedItem.style.zIndex = 1000; // Põe sobre tudo
        draggedItem.classList.add('opacity-50');
        draggedItem.style.transform = 'scale(1.1)'; // Aumenta um pouco
        
        // Move o item para a posição inicial do dedo (já aplicando o offset)
        // Converte coordenada do viewport (touch.clientX) para coordenada da esteira (style.left)
        let x = touch.clientX - esteiraRect.left - touchOffsetX;
        let y = touch.clientY - esteiraRect.top - touchOffsetY;
        
        draggedItem.style.left = `${x}px`;
        draggedItem.style.top = `${y}px`;
    }

    function handleTouchMove(e) {
        if (!draggedItem || isPaused) return;

        e.preventDefault(); // Previne scroll
        
        const touch = e.touches[0];
        
        // Move o item
        // Usa o esteiraRect cacheado para melhor performance
        let x = touch.clientX - esteiraRect.left - touchOffsetX;
        let y = touch.clientY - esteiraRect.top - touchOffsetY;
        
        draggedItem.style.left = `${x}px`;
        draggedItem.style.top = `${y}px`;

        // Simula dragover/dragleave checando a posição
        let foundTarget = null;
        // Itera sobre as cestas para ver se o toque está em cima de alguma
        for (const slot of plateSlots) {
            const slotRect = slot.getBoundingClientRect();
            if (
                touch.clientX >= slotRect.left &&
                touch.clientX <= slotRect.right &&
                touch.clientY >= slotRect.top &&
                touch.clientY <= slotRect.bottom
            ) {
                foundTarget = slot;
                break; // Encontrou um
            }
        }

        // Atualiza o highlight (classe 'drag-over')
        if (foundTarget !== currentDropTarget) {
            if (currentDropTarget) {
                currentDropTarget.classList.remove('drag-over');
            }
            if (foundTarget) {
                foundTarget.classList.add('drag-over');
           }
            currentDropTarget = foundTarget; // Atualiza o alvo atual
        }
    }

    function handleTouchEnd(e) {
        if (!draggedItem) return;
        
        let dropped = false;
        // 'currentDropTarget' foi definido no último 'touchmove'
        if (currentDropTarget) {
            // Tenta colocar no slot
            dropped = placeItemInSlot(draggedItem, currentDropTarget);
            currentDropTarget.classList.remove('drag-over'); // Limpa o highlight
        }

        // Se não foi solto com sucesso (ou não tinha dropTarget)
        if (!dropped) {
            // Item "volta" para a esteira (apenas removemos os estilos de drag)
            delete draggedItem.dataset.dragging;
        }
        
        // Limpa estilos de drag/touch
        draggedItem.classList.remove('opacity-50');
        draggedItem.style.zIndex = 15; // Z-index normal
        draggedItem.style.transform = 'scale(1)'; // Tamanho normal
        
        // Reseta variáveis globais de toque
        draggedItem = null;
        currentDropTarget = null;
        esteiraRect = null;
    }

    // --- FIM: Handlers de Toque ---

    function handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    function handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }

    // --- NOVO: Função reutilizável para colocar item ---
    /**
    * Tenta colocar um foodEl (de mouse ou toque) em um slotEl (cesta).
    * Retorna true se foi sucesso, false se o slot estava ocupado.
    */
    function placeItemInSlot(foodEl, slotEl) {
        const slotIndex = parseInt(slotEl.dataset.slotIndex);
        
        // Permite soltar apenas se o slot estiver vazio
        if (plateContents[slotIndex] === null) {
            plateContents[slotIndex] = { 
                type: foodEl.dataset.type, 
                img: foodEl.dataset.img, 
                name: foodEl.dataset.name 
            };
            
            const imgInPlate = document.createElement('img');
            imgInPlate.src = foodEl.dataset.img;
            slotEl.innerHTML = ''; // Limpa antes de adicionar
            slotEl.appendChild(imgInPlate);
            
            foodEl.remove(); // Remove o item da esteira
            
            playSound('pegar-soltar');
            checkPlateFullness();
            return true; // Sucesso
        } else {
            return false; // Falha (slot ocupado)
        }
    }
    // --- FIM: Função reutilizável ---

    // --- ATUALIZADO: handleDrop agora usa a nova função ---
    function handleDrop(e) {
        e.preventDefault();
        const slotEl = e.currentTarget;
        slotEl.classList.remove('drag-over');
        
        const foodId = e.dataTransfer.getData('text/plain');
        const foodEl = document.getElementById(foodId);
        if (!foodEl) return;

        const success = placeItemInSlot(foodEl, slotEl);
        
        // Se não teve sucesso (slot ocupado), o dragend listener
        // já vai lidar com a remoção do 'dataset.dragging'
        if (!success) {
            delete foodEl.dataset.dragging;
        }
    }

    function handlePotClick(e) {
        const slotEl = e.currentTarget;
        const slotIndex = parseInt(slotEl.dataset.slotIndex);
        if (plateContents[slotIndex] !== null) {
            plateContents[slotIndex] = null;
            slotEl.innerHTML = '';
            playSound('pegar-soltar');
            checkPlateFullness();
        }
    }

    function checkPlateFullness() {
        const isFull = plateContents.every(item => item !== null);
        verifyButton.disabled = !isFull;
        if (isFull) {
            verifyButton.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            verifyButton.classList.add('opacity-50', 'cursor-not-allowed');
        }
    }

    function verifyOrder() {
    if (!plateContents.every(item => item !== null)) return;
    
    // --- LÓGICA CORRIGIDA: A ORDEM IMPORTA ---
    const insertedTypes = plateContents.map(p => p.type); // Ordem em que foram inseridos (slot 0, 1, 2)
    const requiredTypes = currentOrder;                   // Ordem que foi pedida (slot 0, 1, 2)

    // DEBUG: Verifique no console para entender o que está sendo comparado.
    console.log("Pedido (requiredTypes):", requiredTypes);
    console.log("Inserido (insertedTypes):", insertedTypes);
    
    // Compara se os tamanhos são iguais E se cada elemento na posição 'i' é igual ao elemento na mesma posição do pedido.
    let isCorrect = insertedTypes.length === requiredTypes.length && 
                    insertedTypes.every((type, index) => type === requiredTypes[index]);
    
    console.log("Resultado da verificação (isCorrect):", isCorrect);
    // --- FIM DA LÓGICA CORRIGIDA ---

    verifyButton.disabled = true;
        verifyButton.classList.add('opacity-50', 'cursor-not-allowed');

        if (isCorrect) {
            handleCorrectOrder();
        } else {
            handleWrongOrder();
            // Re-habilita o botão após um delay se estiver errado,
            // permitindo que o usuário veja o feedback antes de tentar de novo.
            setTimeout(() => {
                if (!isPaused) checkPlateFullness();
            }, 600);
        }
    }

    function handleCorrectOrder() {
        playSound('acerto');
        playSound('bonus-tempo');
        plateSlots.forEach(slot => {
            slot.classList.add('correct-plate');
            setTimeout(() => { slot.innerHTML = ''; }, 500);
        });
        setTimeout(() => plateSlots.forEach(slot => slot.classList.remove('correct-plate')), 700);

        updateScore(score + 1);
        stageOrders++;
        timer += TIME_BONUS;
        updateTimerDisplay();
        showMacawMessage(getRandomDialogue('praise'), 4000, 'feliz');

        plateContents.forEach(food => lastUsedFoods.push(food.name));
        if (lastUsedFoods.length > 9) lastUsedFoods.shift();
        const lastFoodName = plateContents[plateContents.length-1].name;
      if (lastUsedFoods.filter(foodName => foodName === lastFoodName).length >= 3) {
            setTimeout(() => showMacawMessage(getRandomDialogue('variety'), 4000, 'curiosa'), 3500);
            lastUsedFoods = [];
        }

        const stage = STAGES[currentStageIndex];
        const delayNextAction = 1000;
        if (stageOrders >= stage.goal) {
            if (currentStageIndex < STAGES.length - 1) {
                setTimeout(advanceStage, delayNextAction);
            } else {
                setTimeout(() => endGame(true), delayNextAction);
            }
        } else {
            setTimeout(generateOrder, delayNextAction);
        }
    }

    function handleWrongOrder() {
        playSound('erro');
        plateSlots.forEach(slot => slot.classList.add('wrong-plate'));
        setTimeout(() => plateSlots.forEach(slot => slot.classList.remove('wrong-plate')), 500);
        showMacawMessage(getRandomDialogue('hints'), 5000, 'triste');
    }

    function clearPlate() {
        plateContents = [null, null, null];
        plateSlots.forEach(slot => { slot.innerHTML = ''; });
        orderSlots.forEach(slot => slot.textContent = '');
        checkPlateFullness();
    }

    function updateScore(newScore) {
        score = newScore;
        scoreEl.textContent = score;
    }
    // --- FIM FUNÇÕES DE INTERAÇÃO ---

    // --- FUNÇÕES DA ARARA E FIM DE JOGO ---
    function showMacawMessage(text, duration = 4000, expression = 'falando') {
        if (macawTimeout) clearTimeout(macawTimeout);
        macawSprite.src = MACAW_SPRITES[expression];
        macawText.textContent = text;
        macawMessage.classList.remove('opacity-0');
        macawTimeout = setTimeout(() => {
            macawMessage.classList.add('opacity-0');
        }, duration);
    }

    function scheduleRandomDialogue() {
        if (otherDialogueTimeout) clearTimeout(otherDialogueTimeout);
        otherDialogueTimeout = setTimeout(() => {
            if (!isPaused && !isShowingIntro && macawMessage.classList.contains('opacity-0')) {
                showMacawMessage(getRandomDialogue('other'), 4000, 'falando');
            }
            scheduleRandomDialogue();
        }, 20000 + Math.random() * 15000); 
}


    function advanceStage() {
        isPaused = true;
        currentStageIndex++;
        if (currentStageIndex >= STAGES.length) {
            endGame(true);
            return;
        }
        const stage = STAGES[currentStageIndex];
        // --- NOVO: Pega o diálogo da etapa do objeto de tradução ---
        const stageDialogueKey = `stage${currentStageIndex + 1}`;
        const stageDialogue = translations[stageDialogueKey] || "Próxima etapa!";
        // --- FIM DA MUDANÇA ---

        stageMacawSprite.src = MACAW_SPRITES.falando;
        document.getElementById('stage-title').textContent = stage.title;
        document.getElementById('stage-explanation').textContent = stageDialogue;

        stageTransitionScreen.classList.remove('hidden');
        stageTransitionScreen.classList.add('flex');
    }

    function resumeGame() {
        stageTransitionScreen.classList.add('hidden');
        stageTransitionScreen.classList.remove('flex');
        isPaused = false;
        setupStage();
    }

    function stopGameIntervals() {
        clearInterval(timerInterval);
        clearInterval(foodSpawnInterval);
        clearInterval(gameLoopInterval);
        clearTimeout(macawTimeout);
        clearTimeout(otherDialogueTimeout);
        timerInterval = null;
        foodSpawnInterval = null;
        gameLoopInterval = null;
        macawTimeout = null;
        otherDialogueTimeout = null;
        fadeOut('musica-fundo', 1000);
        stopSound('alerta-cronometro');
    }

    function endGame(isWinner) {
        isPaused = true;
        stopGameIntervals();
        playSound('avaliacao-final');
        gameHeader.classList.add('hidden');
        gameMain.classList.add('hidden');
        document.getElementById('final-score').textContent = score;
        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = '';
        let stars = 0, message = "", title = "";
        const totalGoal = STAGES[STAGES.length-1].goal;

        if (isWinner) {
            // --- NOVO: Textos de vitória traduzidos ---
            title = translations.end_titulo_vitoria;
            stars = 3;
            message = translations.performance[2];
            endMacawSprite.src = MACAW_SPRITES.feliz;
        } else {
            // --- NOVO: Textos de derrota traduzidos ---
            title = translations.end_titulo_padrao;
            if (score >= totalGoal) { // Venceu, mas o tempo acabou? (Caso de Borda)
                stars = 2;
                message = translations.performance[1];
                endMacawSprite.src = MACAW_SPRITES.feliz;
            } else if (score >= totalGoal * 0.5) {
                stars = 1;
                message = translations.performance[0];
                endMacawSprite.src = MACAW_SPRITES.curiosa;
            } else {
                stars = 0;
                message = getRandomDialogue('defeat');
                endMacawSprite.src = MACAW_SPRITES.triste;
            }
        }
        for(let i = 0; i < 3; i++) {
            const starSpan = document.createElement('span');
            starSpan.textContent = i < stars ? '⭐' : '☆';
            starsContainer.appendChild(starSpan);
        }
        document.getElementById('end-title').textContent = title;
        document.getElementById('end-message').textContent = message;
        endScreen.classList.remove('hidden');
        endScreen.classList.add('flex');
    }
    // --- FIM FUNÇÕES DA ARARA E FIM DE JOGO ---

    // --- INICIALIZAÇÃO ---
    init();
=======
    // --- NOVO: CARREGA E APLICA O IDIOMA ---
    const currentLang = getLanguage();
    const translations = gameTranslations[currentLang];
    translatePage(currentLang);
    // --- FIM DA APLICAÇÃO DE IDIOMA ---


    // --- BLOQUEIO DE ZOOM ---
    window.addEventListener('wheel', function(event) {
        if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // --- SELEÇÃO DOS ELEMENTOS DA UI ---
    const gameContainer = document.getElementById('game-container');
    const startScreen = document.getElementById('start-screen');
    const stageTransitionScreen = document.getElementById('stage-transition-screen');
    const endScreen = document.getElementById('end-screen');
    const startButton = document.getElementById('start-button');
    const nextStageButton = document.getElementById('next-stage-button');
    const restartButton = document.getElementById('restart-button');
    const scoreEl = document.getElementById('score');
    const stageDisplayEl = document.getElementById('stage-display');
    const timerEl = document.getElementById('timer');
    const esteiraContainer = document.getElementById('esteira-container'); // Referência ao contêiner da esteira
    const orderSlots = document.querySelectorAll('.ticket-item');
    const plateSlots = document.querySelectorAll('#cestas-container .cesta');
    const verifyButton = document.getElementById('verify-button');
    const macawMessage = document.getElementById('macaw-message');
    const macawText = document.getElementById('macaw-text');
    const gameHeader = document.querySelector('header');
    const gameMain = document.querySelector('main');
    const macawSprite = document.getElementById('macaw-sprite');
    const endMacawSprite = document.getElementById('end-macaw-sprite');
    const stageMacawSprite = document.getElementById('stage-macaw-sprite');
    const bookButton = document.getElementById('book-button');
    const bookModal = document.getElementById('book-modal');
    const bookModalClose = document.getElementById('book-modal-close');
    const bookPagesContainer = document.getElementById('book-pages-container');
    const pageSections = document.querySelectorAll('.page .section');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const foodDetailModal = document.getElementById('food-detail-modal');
    const foodDetailClose = document.getElementById('food-detail-close');
    const foodDetailName = document.getElementById('food-detail-name');
    const foodDetailImg = document.getElementById('food-detail-img');
    const foodDetailDesc = document.getElementById('food-detail-desc');
    const foodDetailFunFact = document.getElementById('food-detail-funfact');
    const foodDetailNutri = document.getElementById('food-detail-nutri');

    const MACAW_SPRITES = {
        falando: 'assets/arara-falando-padrao.png',
        feliz: 'assetsa/rara-feliz-padrao.png',
        triste: 'assets/arara-triste-padrao.png',
        curiosa: 'assets/arara-curiosa-padrao.png'
    };
    
    // --- NOVO: Define os diálogos dinâmicos com base no idioma ---
    const introDialogues = [
        { title: translations.tutorial_title, text: translations.tutorial },
        { title: translations.stage1_title, text: translations.stage1 }
    ];

    // --- NOVO: Função getRandomDialogue ---
    const getRandomDialogue = (type) => {
        const options = translations[type]; // 'type' será 'praise', 'hints', etc.
        if (!options) return "Diálogo não encontrado.";
        return options[Math.floor(Math.random() * options.length)];
    };
    // --- FIM DAS MUDANÇAS DE DIÁLOGO ---

    const INITIAL_TIME = 90;
    const TIME_BONUS = 10;
    const FOOD_SPAWN_INTERVAL = 2000;
    const FOOD_SPEED = 120; // Pixels por segundo (ajustado na função moveFood)

    // --- LÓGICA DO CAMINHO DA ESTEIRA (REVISADA COM 4 CURVAS) ---

    // Define os estados do caminho (5 estados de movimento)
    const PATH_STATE = {
        MOVE_DOWN: 1,      // Spawn -> Curva 1 (Inferior Esquerda)
        MOVE_RIGHT: 2,     // Curva 1 -> Curva 2 (Inferior Direita)
        MOVE_UP: 3,        // Curva 2 -> Curva 3 (Superior Direita)
        MOVE_LEFT: 4,      // Curva 3 -> Curva 4 (Superior Esquerda)
        MOVE_UP_EXIT: 5    // Curva 4 -> Saída
    };

    // Objeto de "Marcação de Coordenadas" (em % DENTRO do #esteira-container)
    // **AJUSTE ESTES VALORES** para corresponder ao desenho da sua 'esteira1.png'
    const PATH_PERCENTAGES = {
        // Ponto de Surgimento (Spawn) - Canto Superior Esquerdo da esteira visível
        SPAWN_X: 6,        // % da esquerda do #esteira-container
        SPAWN_Y: 19,       // % do topo do #esteira-container (um pouco abaixo do topo real)

        // Ponto de Saída (Despawn) - Acima do ponto de spawn
        EXIT_X: 3,         // % da esquerda (deve ser igual a SPAWN_X e TURN_4_X)
        EXIT_Y: 20,        // % do topo (sair pelo topo do contêiner)

        // Pontos das Curvas (relativos ao #esteira-container)
        TURN_1_Y: 63,      // Y% da Curva 1 (Inferior Esquerda)
        TURN_2_X: 92,      // X% da Curva 2 (Inferior Direita)
        TURN_3_Y: 50,      // Y% da Curva 3 (Superior Direita - alinhado com SPAWN_Y)
        TURN_4_X: 18       // X% da Curva 4 (Superior Esquerda - alinhado com SPAWN_X)
    };

    // --- FIM DA LÓGICA DO CAMINHO ---

    // --- MUDANÇA PRINCIPAL: Objeto de alimentos multi-idioma ---
    const ALL_FOODS_DATA = {
        // --- PORTUGUÊS (Original) ---
        'pt': {
            carboidrato: [{ name: 'Arroz', img: 'assets/arroz-padrao.png', description: 'O arroz integral é um grão que mantém a casca e o farelo. Ele fornece energia, ajuda na digestão por ter mais fibras.', funFact: 'Quando o arroz está cozinhando ele faz um barulhinho (como estalinhos), como se estivesse avisando que já está quase pronto.', nutritionalInfo: 'O arroz integral é uma boa fonte de fibra, contém vitaminas do complexo B e minerais como magnésio, fósforo e ferro. A fibra contribui para a saciedade, as vitaminas e os minerais são essenciais para diversas funções do corpo.' },{ name: 'Macarrão', img: 'assets/macarrao-padrao.png', description: 'O macarrão integral fornece vitaminas, minerais e fibras para o nosso corpo, ajudando na digestão, controlando os níveis de açúcar no sangue e fornecendo energia.', funFact: 'Alguns arqueólogos encontraram vestígios de macarrão com quase 4 mil anos de idade, na China.', nutritionalInfo: 'O macarrão integral é uma fonte rica de fibras, vitaminas e minerais, cada 100g de macarrão integral possui 124 calorias, auxilia na saciedade e no funcionamento do intestino.' },{ name: 'Banana', img: 'assets/banana-padrao-tea.png', description: 'A banana contribui para a saúde do coração, melhora o funcionamento intestinal, aumenta a energia, fortifica os músculos e auxilia no humor.', funFact: 'As bananeiras não são árvores, “são ervas gigantes”, onde podem crescer mais de 7 metros de altura.', nutritionalInfo: 'A banana é uma fonte de minerais como potássio e magnésio, vitamina B6 e C, e hidratos de carbono. Possui 26g de carboidrato, 98 calorias, 2g de fibras e 1,3g de proteínas.' },],
            proteina: [{ name: 'Carne', img: 'assets/carne-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Frango', img: 'assets/frango-padrao.png', description: 'O frango ajuda a construir músculos e dá energia para o corpo.', funFact: 'Os atletas gostam de incluir bastante frango em seus pratos, pois ele ajuda a construir músculos e a dar bastante energia, principalmente o frango grelhado e cozido.', nutritionalInfo: 'O frango geralmente é uma fonte rica em proteínas de alta qualidade e pobre em gorduras, com vitaminas do complexo B e minerais como selênio e fósforo, sem hidratos de carbono e fibras.' },{ name: 'Ovo', img: 'assets/ovo-padrao-tea.png', description: 'O ovo da galinha ajuda o corpo a crescer e se manter saudável, além disso, contém vitaminas e minerais importantes para os ossos, músculos e cérebro.', funFact: 'Se você girar um ovo cru e outro cozido, o cozido gira de forma firme, mas o cru balança e tropeça por dentro.', nutritionalInfo: 'O ovo é uma fonte de nutrientes completo, com baixo custo e versatilidade culinária, é importante consumi-lo com cuidado para evitar contaminação. Ele possui vitaminas A, D, E, B2, B12, folato e minerais essenciais como fósforo, ferro e selênio.' },{ name: 'Salmão', img: 'assets/salmao-padrao.png', description: 'O salmão grelhado ajuda na saúde dos ossos e no bem-estar mental por conta das vitaminas e minerais, no crescimento muscular devido as proteínas presentes.', funFact: 'A cor laranja do salmão não é natural, é apenas um resultado da alimentação do peixe ao comer algas e crustáceos.', nutritionalInfo: 'O salmão grelhado sem sal ou óleo, pode conter 243 calorias e 26g de proteínas é uma fonte rica em vitaminas como a D e B12, e do mineral selênio.' },{ name: 'Peixe', img: 'assets/peixe-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' }],
            vitamina: [{ name: 'Cenoura', img: 'assets/cenoura-padrao.png', description: 'A cenoura ajuda a manter a visão saudável, ajudam o intestino a funcionar bem e dá energia para o corpo.', funFact: 'Se você colocar cenouras cortadas em uma água com gás, elas vão subir e descer como se estivessem fazendo uma coreografia.', nutritionalInfo: 'A cenoura é um vegetal rico em vitamina A, que contribui para a saúde da visão e tem ação intoxicante. Ela contém vitaminas e minerais como potássio, e as fibras ajudam no funcionamento do intestino.' },{ name: 'Feijão', img: 'assets/feijao-padrao.png', description: 'O feijão é uma leguminosa rica em proteína e fibra, que ajuda a manter os músculos fortes e o intestino funcionando bem.', funFact: 'A planta mais alta do feijão alcançou mais de 14 metros de altura, o que é mais de três girafas empilhadas.', nutritionalInfo: 'O feijão é um alimento rico em nutrientes, fornecendo proteínas vegetais, carboidratos completos, fibras e vitaminas de complexo B e minerais como ferro, fósforo e potássio. A forma de preparo do feijão influencia o valor nutricional exato.' },{ name: 'Tomate', img: 'assets/tomate-padrao.png', description: 'O tomate auxilia na saúde do coração e intestinal, fortalecendo os ossos, protegendo a pele e sendo aliado a imunidade.', funFact: 'A palavra tomate vem de "tomati", que significa "coisa roliça com umbigo", nome dado pelos astecas.', nutritionalInfo: 'O tomate é rico em água, fibras, vitamina C e A e minerais como o potássio, magnésio, ferro e fósforo. Um tomate de 100g possui entre 18-23 calorias e aproximadamente 93-95% de água.' },{ name: 'Abacaxi', img: 'assets/abacaxi-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Brócolis', img: 'assets/brocolis-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Couve', img: 'assets/couve-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Laranja', img: 'assets/laranja-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Maçã', img: 'assets/maca-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Pimenta', img: 'assets/pimenta-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Repolho', img: 'assets/repolho-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' }],
            pegadinha: [{ name: 'Presunto', img: 'assets/presunto-padrao.png', description: 'O peito de peru processado tem proteínas, mas possui muito sal e conservantes, que podem fazer mal se comer em excesso.', funFact: 'No passado, os fabricantes queriam uma carne fatiada rápida e prática, que parecesse mais "gorda e suculenta", ou seja, o peito de peru processado é um tipo de truque mágico.', nutritionalInfo: 'O peito de peru processado é rico em proteínas e tem baixa quantidade de gordura, mas é alto em sódio e contém aditivos conservantes, estabilizantes e amido. O valor nutritivo depende da marca.' },{ name: 'Suco de Caixinha', img: 'assets/suco-de-caixinha-padrao.png', description: 'O suco de caixinha dá energia rápida, mas tem muito açúcar e nem sempre muita fruta, ou seja, pode fazer mal aos dentes e ao corpo.', funFact: 'Apesar de parecer "só" fruta, a maioria dos sucos de caixinha contém água e açúcar adicionados, então nem sempre é 100% fruta.', nutritionalInfo: 'Os sucos de caixinha variam nutricionalmente, mas são ricos em calorias e açúcares, com poucas fibras, podem conter aditivos como conservantes e aromatizantes. Sucos 100% integrais sem açúcar é a melhor opção.' },{ name: 'Iogurte', img: 'assets/yogurt-padrao.png', description: 'O iogurte com sabor ajuda os ossos e músculos, mas contém bastante açúcar, podendo prejudicar os dentes e aumentar os riscos de doenças.', funFact: 'Muitos dos corantes vermelhos usados em produtos como iogurte de morango podem ser feitos a partir de um inseto chamado cochonilha.', nutritionalInfo: 'Variam bastante dependendo da marca e do tipo, mas contém calorias, proteínas, gorduras, açúcares e cálcio.' },{ name: 'Cupcake', img: 'assets/cupcake-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Pizza', img: 'assets/pizza-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Hamburguer', img: 'assets/hamburgue-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Coca-Cola', img: 'assets/cocacola-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Bolo', img: 'assets/bolo-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' }]
        },
        // --- ENGLISH (Tradução) ---
        'en': {
            carboidrato: [{ name: 'Rice', img: 'assets/arroz-padrao.png', description: 'Brown rice is a grain that retains its husk and bran. It provides energy and aids digestion due to having more fiber.', funFact: 'When rice is cooking, it makes a little crackling noise, as if it\'s letting you know it\'s almost ready.', nutritionalInfo: 'Brown rice is a good source of fiber, contains B-complex vitamins, and minerals like magnesium, phosphorus, and iron. The fiber contributes to satiety, and the vitamins and minerals are essential for various body functions.' },{ name: 'Pasta', img: 'assets/macarrao-padrao.png', description: 'Whole wheat pasta provides vitamins, minerals, and fiber for our body, helping with digestion, controlling blood sugar levels, and providing energy.', funFact: 'Some archaeologists found traces of pasta nearly 4,000 years old in China.', nutritionalInfo: 'Whole wheat pasta is a rich source of fiber, vitamins, and minerals. Every 100g of whole wheat pasta has 124 calories, aids in satiety, and helps intestinal function.' },{ name: 'Banana', img: 'assets/banana-padrao-tea.png', description: 'Bananas contribute to heart health, improve intestinal function, increase energy, strengthen muscles, and help with mood.', funFact: 'Banana plants are not trees, they are "giant herbs," which can grow over 7 meters tall.', nutritionalInfo: 'The banana is a source of minerals like potassium and magnesium, vitamins B6 and C, and carbohydrates. It has 26g of carbohydrates, 98 calories, 2g of fiber, and 1.3g of protein.' },],
            proteina: [{ name: 'Meat', img: 'assets/carne-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Chicken', img: 'assets/frango-padrao.png', description: 'Chicken helps build muscles and gives the body energy.', funFact: 'Athletes like to include a lot of chicken in their meals because it helps build muscle and provides plenty of energy, especially grilled and cooked chicken.', nutritionalInfo: 'Chicken is generally a source rich in high-quality proteins and low in fat, with B-complex vitamins and minerals like selenium and phosphorus, without carbohydrates and fiber.' },{ name: 'Egg', img: 'assets/ovo-padrao-tea.png', description: 'The chicken egg helps the body grow and stay healthy, and it also contains important vitamins and minerals for bones, muscles, and the brain.', funFact: 'If you spin a raw egg and a cooked egg, the cooked one spins steadily, but the raw one wobbles and stumbles inside.', nutritionalInfo: 'The egg is a complete nutrient source, with low cost and culinary versatility. It is important to consume it carefully to avoid contamination. It has vitamins A, D, E, B2, B12, folate, and essential minerals like phosphorus, iron, and selenium.' },{ name: 'Salmon', img: 'assets/salmao-padrao.png', description: 'Grilled salmon supports bone health and mental well-being due to its vitamins and minerals, and muscle growth due to its proteins.', funFact: 'The orange color of salmon is not natural; it is just a result of the fish\'s diet of eating algae and crustaceans.', nutritionalInfo: 'Grilled salmon without salt or oil can contain 243 calories and 26g of protein. It is a rich source of vitamins like D and B12, and the mineral selenium.' },{ name: 'Fish', img: 'assets/peixe-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' }],
            vitamina: [{ name: 'Carrot', img: 'assets/cenoura-padrao.png', description: 'Carrots help maintain healthy vision, help the intestines work well, and give the body energy.', funFact: 'If you put cut carrots in sparkling water, they will rise and fall as if they are doing a choreography.', nutritionalInfo: 'The carrot is a vegetable rich in vitamin A, which contributes to vision health and has a detoxifying action. It contains vitamins and minerals like potassium, and the fibers help with intestinal function.' },{ name: 'Beans', img: 'assets/feijao-padrao.png', description: 'Beans are a legume rich in protein and fiber, which helps keep muscles strong and the intestines working well.', funFact: 'The tallest bean plant reached over 14 meters in height, which is more than three giraffes stacked on top of each other.', nutritionalInfo: 'Beans are a nutrient-rich food, providing plant-based proteins, complex carbohydrates, fiber, and B-complex vitamins, as well as minerals like iron, phosphorus, and potassium. The preparation method influences the exact nutritional value.' },{ name: 'Tomato', img: 'assets/tomate-padrao.png', description: 'Tomatoes support heart and intestinal health, strengthening bones, protecting the skin, and boosting immunity.', funFact: 'The word tomato comes from "tomati," which means "plump thing with a navel," a name given by the Aztecs.', nutritionalInfo: 'The tomato is rich in water, fiber, vitamins C and A, and minerals like potassium, magnesium, iron, and phosphorus. A 100g tomato has between 18-23 calories and is approximately 93-95% water.' },{ name: 'Pineapple', img: 'assets/abacaxi-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Broccoli', img: 'assets/brocolis-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Kale', img: 'assets/couve-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Orange', img: 'assets/laranja-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Apple', img: 'assets/maca-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Pepper', img: 'assets/pimenta-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Cabbage', img: 'assets/repolho-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' }],
            pegadinha: [{ name: 'Ham', img: 'assets/presunto-padrao.png', description: 'Processed turkey breast has protein, but it has a lot of salt and preservatives, which can be harmful if eaten in excess.', funFact: 'In the past, manufacturers wanted a quick and practical sliced meat that seemed "fatter and juicier," meaning processed turkey breast is a kind of magic trick.', nutritionalInfo: 'Processed turkey breast is rich in protein and low in fat, but high in sodium and contains additives like preservatives, stabilizers, and starch. The nutritional value depends on the brand.' },{ name: 'Juice Box', img: 'assets/suco-de-caixinha-padrao.png', description: 'Juice boxes provide quick energy, but they have a lot of sugar and not always a lot of fruit, meaning they can be bad for your teeth and body.', funFact: 'Although it may seem like "just" fruit, most juice boxes contain added water and sugar, so it\'s not always 100% fruit.', nutritionalInfo: 'Juice boxes vary nutritionally, but are high in calories and sugars, with little fiber. They may contain additives like preservatives and flavorings. 100% whole juices without sugar are the best option.' },{ name: 'Yogurt', img: 'assets/yogurt-padrao.png', description: 'Flavored yogurt helps bones and muscles, but contains a lot of sugar, which can harm teeth and increase the risk of diseases.', funFact: 'Many of the red dyes used in products like strawberry yogurt can be made from an insect called cochineal.', nutritionalInfo: 'They vary greatly depending on the brand and type, but contain calories, protein, fat, sugar, and calcium.' },{ name: 'Cupcake', img: 'assets/cupcake-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Pizza', img: 'assets/pizza-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Hamburger', img: 'assets/hamburgue-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Coca-Cola', img: 'assets/cocacola-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' },{ name: 'Cake', img: 'assets/bolo-padrao.png', description: 'Information not available.', funFact: 'Information not available.', nutritionalInfo: 'Information not available.' }]
        },
        // --- ESPAÑOL (Tradução) ---
        'es': {
            carboidrato: [{ name: 'Arroz', img: 'assets/arroz-padrao.png', description: 'El arroz integral es un grano que conserva su cáscara y salvado. Proporciona energía y ayuda en la digestión por tener más fibra.', funFact: 'Cuando el arroz se está cocinando, hace un pequeño ruido de crujido, como si avisara que ya está casi listo.', nutritionalInfo: 'El arroz integral es una buena fuente de fibra, contiene vitaminas del complejo B y minerales como magnesio, fósforo y hierro. La fibra contribuye a la saciedad, y las vitaminas y minerales son esenciales para diversas funciones del cuerpo.' },{ name: 'Pasta', img: 'assets/macarrao-padrao.png', description: 'La pasta integral proporciona vitaminas, minerales y fibra a nuestro cuerpo, ayudando en la digestión, controlando los niveles de azúcar en sangre y proporcionando energía.', funFact: 'Algunos arqueólogos encontraron restos de pasta de casi 4.000 años de antigüedad en China.', nutritionalInfo: 'La pasta integral es una fuente rica en fibra, vitaminas y minerales. Cada 100g de pasta integral tiene 124 calorías, ayuda a la saciedad y al funcionamiento del intestino.' },{ name: 'Banana', img: 'assets/banana-padrao-tea.png', description: 'La banana contribuye a la salud del corazón, mejora el funcionamiento intestinal, aumenta la energía, fortalece los músculos y ayuda con el estado de ánimo.', funFact: 'Las plantas de banana no son árboles, son "hierbas gigantes", que pueden crecer más de 7 metros de altura.', nutritionalInfo: 'La banana es una fuente de minerales como potasio y magnesio, vitaminas B6 y C, e hidratos de carbono. Posee 26g de carbohidratos, 98 calorías, 2g de fibra y 1.3g de proteína.' },],
            proteina: [{ name: 'Carne', img: 'assets/carne-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Pollo', img: 'assets/frango-padrao.png', description: 'El pollo ayuda a construir músculos y da energía al cuerpo.', funFact: 'A los atletas les gusta incluir mucho pollo en sus platos, ya que ayuda a construir músculo y a dar mucha energía, especialmente el pollo a la parrilla y cocido.', nutritionalInfo: 'El pollo generalmente es una fuente rica en proteínas de alta calidad y baja en grasas, con vitaminas del complejo B y minerales como selenio y fósforo, sin carbohidratos ni fibra.' },{ name: 'Huevo', img: 'assets/ovo-padrao-tea.png', description: 'El huevo de gallina ayuda al cuerpo a crecer y mantenerse saludable, además, contiene vitaminas y minerales importantes para los huesos, músculos y cerebro.', funFact: 'Si giras un huevo crudo y uno cocido, el cocido gira firmemente, pero el crudo se tambalea y tropieza por dentro.', nutritionalInfo: 'El huevo es una fuente completa de nutrientes, de bajo costo y versatilidad culinaria. Es importante consumirlo con cuidado para evitar la contaminación. Posee vitaminas A, D, E, B2, B12, folato y minerales esenciales como fósforo, hierro y selenio.' },{ name: 'Salmón', img: 'assets/salmao-padrao.png', description: 'El salmón a la parrilla ayuda a la salud ósea y al bienestar mental gracias a sus vitaminas y minerales, y al crecimiento muscular debido a las proteínas presentes.', funFact: 'El color naranja del salmón no es natural; es solo el resultado de la alimentación del pez al comer algas y crustáceos.', nutritionalInfo: 'El salmón a la parrilla sin sal ni aceite puede contener 243 calorías y 26g de proteína. Es una fuente rica en vitaminas como la D y B12, y el mineral selenio.' },{ name: 'Pescado', img: 'assets/peixe-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' }],
            vitamina: [{ name: 'Zanahoria', img: 'assets/cenoura-padrao.png', description: 'La zanahoria ayuda a mantener una visión saludable, ayuda a que los intestinos funcionen bien y da energía al cuerpo.', funFact: 'Si pones zanahorias cortadas en agua con gas, subirán y bajarán como si estuvieran haciendo una coreografía.', nutritionalInfo: 'La zanahoria es un vegetal rico en vitamina A, que contribuye a la salud de la visión y tiene una acción desintoxicante. Contiene vitaminas y minerales como el potasio, y las fibras ayudan al funcionamiento del intestino.' },{ name: 'Frijoles', img: 'assets/feijao-padrao.png', description: 'Los frijoles son una legumbre rica en proteína y fibra, que ayuda a mantener los músculos fuertes y el intestino funcionando bien.', funFact: 'La planta de frijol más alta alcanzó más de 14 metros de altura, lo que es más que tres jirafas apiladas.', nutritionalInfo: 'Los frijoles son un alimento rico en nutrientes, que proporciona proteínas vegetales, carbohidratos complejos, fibra y vitaminas del complejo B, y minerales como hierro, fósforo y potasio. La forma de preparar los frijoles influye en el valor nutricional exacto.' },{ name: 'Tomate', img: 'assets/tomate-padrao.png', description: 'El tomate ayuda a la salud del corazón e intestinal, fortaleciendo los huesos, protegiendo la piel y siendo un aliado de la inmunidad.', funFact: 'La palabra tomate proviene de "tomati", que significa "cosa redonda con ombligo", nombre dado por los aztecas.', nutritionalInfo: 'El tomate es rico en agua, fibra, vitaminas C y A, y minerales como potasio, magnesio, hierro y fósforo. Un tomate de 100g tiene entre 18-23 calorías y aproximadamente 93-95% de agua.' },{ name: 'Piña', img: 'assets/abacaxi-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Brócoli', img: 'assets/brocolis-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Col Rizada', img: 'assets/couve-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Naranja', img: 'assets/laranja-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Manzana', img: 'assets/maca-padrao.png', description: 'Informação não disponível.', funFact: 'Informação não disponível.', nutritionalInfo: 'Informação não disponível.' },{ name: 'Pimiento', img: 'assets/pimenta-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Repollo', img: 'assets/repolho-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' }],
            pegadinha: [{ name: 'Jamón', img: 'assets/presunto-padrao.png', description: 'La pechuga de pavo procesada tiene proteínas, pero tiene mucha sal y conservantes, que pueden ser perjudiciales si se comen en exceso.', funFact: 'En el pasado, los fabricantes querían una carne en lonchas rápida y práctica, que pareciera más "grasa y jugosa", es decir, la pechuga de pavo procesada es una especie de truco de magia.', nutritionalInfo: 'La pechuga de pavo procesada es rica en proteínas y baja en grasas, pero alta en sodio y contiene aditivos como conservantes, estabilizadores y almidón. El valor nutricional depende de la marca.' },{ name: 'Jugo en Caja', img: 'assets/suco-de-caixinha-padrao.png', description: 'El jugo en caja da energía rápida, pero tiene mucho azúcar y no siempre mucha fruta, es decir, puede ser malo para los dientes y el cuerpo.', funFact: 'Aunque parezca "solo" fruta, la mayoría de los jugos en caja contienen agua y azúcar añadidos, por lo que no siempre es 100% fruta.', nutritionalInfo: 'Los jugos en caja varían nutricionalmente, pero son altos en calorías y azúcares, con poca fibra. Pueden contener aditivos como conservantes y saborizantes. Los jugos 100% integrales sin azúcar son la mejor opción.' },{ name: 'Yogur', img: 'assets/yogurt-padrao.png', description: 'El yogur de sabores ayuda a los huesos y músculos, pero contiene bastante azúcar, lo que puede dañar los dientes y aumentar el riesgo de enfermedades.', funFact: 'Muchos de los colorantes rojos usados en productos como el yogur de fresa pueden estar hechos de un insecto llamado cochinilla.', nutritionalInfo: 'Varían mucho según la marca y el tipo, pero contienen calorías, proteínas, grasas, azúcares y calcio.' },{ name: 'Cupcake', img: 'assets/cupcake-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Pizza', img: 'assets/pizza-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Hamburguesa', img: 'assets/hamburgue-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Coca-Cola', img: 'assets/cocacola-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' },{ name: 'Pastel', img: 'assets/bolo-padrao.png', description: 'Información no disponible.', funFact: 'Información no disponible.', nutritionalInfo: 'Información no disponible.' }]
        }
    };

    // --- MUDANÇA PRINCIPAL: Seleciona o objeto de alimentos com base no idioma carregado ---
    // O resto do script usará esta variável 'FOODS'
    const FOODS = ALL_FOODS_DATA[currentLang] || ALL_FOODS_DATA['pt'];
    // --- FIM DA MUDANÇA ---


    // --- NOVO: Nomes dos grupos de alimentos traduzidos ---
    const FOOD_GROUP_NAMES = { 
        carboidrato: translations.almanaque_titulo_carb, 
        proteina: translations.almanaque_titulo_prot, 
        vitamina: translations.almanaque_titulo_vit, 
        pegadinha: translations.almanaque_titulo_pega
    };
    
    // --- NOVO: Títulos das etapas traduzidos ---
    const STAGES = [
        { stage: 1, goal: 3, orderSize: 3, foodTypes: ['carboidrato'], possibleOrderTypes: ['carboidrato'], title: translations.stage1_title },
        { stage: 2, goal: 5, orderSize: 3, foodTypes: ['carboidrato', 'proteina'], possibleOrderTypes: ['carboidrato', 'proteina'], title: translations.stage2_title },
        { stage: 3, goal: 7, orderSize: 3, foodTypes: ['carboidrato', 'proteina', 'vitamina'], possibleOrderTypes: ['carboidrato', 'proteina', 'vitamina'], title: translations.stage3_title },
        { stage: 4, goal: 10, orderSize: 3, foodTypes: ['carboidrato', 'proteina', 'vitamina', 'pegadinha'], possibleOrderTypes: ['carboidrato', 'proteina', 'vitamina'], title: translations.stage4_title }
    ];

    let timer, score, currentStageIndex, stageOrders, timerInterval, foodSpawnInterval, gameLoopInterval, macawTimeout, otherDialogueTimeout;
    let isPaused = false;
    let currentOrder = [];
    let plateContents = [null, null, null];
    let sounds = {};
    let audioInitialized = false;
    let lastUsedFoods = [];
    let isShowingIntro = false;
    let introStep = 0;

    let allBookFoods = [];
    let pages = [];
    let currentPage = 1;
    const ITEMS_PER_SECTION = 3;
    const SECTIONS_PER_PAGE = 6;
    const ITEMS_PER_PAGE = ITEMS_PER_SECTION * SECTIONS_PER_PAGE;

    let pausedBeforeModal = false;
    let modalPauseCount = 0;

    // --- NOVO: Variáveis para Drag & Drop por Toque ---
    let draggedItem = null;      // Armazena o item sendo arrastado pelo toque
    let currentDropTarget = null; // Armazena a cesta (slot) que está sob o dedo
    let touchOffsetX = 0;        // Offset X do toque dentro do item
    let touchOffsetY = 0;        // Offset Y do toque dentro do item
    let esteiraRect = null;      // Cache da posição da esteira para performance
    // --- FIM: Variáveis de Toque ---

    function pushModalPause() {
        if (modalPauseCount === 0) {
            pausedBeforeModal = isPaused;
            isPaused = true;
        }
        modalPauseCount++;
    }

    function popModalPause() {
        if (modalPauseCount > 0) modalPauseCount--;
        if (modalPauseCount === 0) {
            isPaused = pausedBeforeModal;
            pausedBeforeModal = false;
        } else {
            isPaused = true;
        }
    }

    // --- SEÇÃO DE ÁUDIO ---
    function initAudio() {
        if (audioInitialized) return;
        const soundFiles = {
            'acerto': 'assets/acerto.mp3',
            'alerta-cronometro': 'assets/alerta-do-cronometro.mp3',
            'avaliacao-final': 'assets/avaliacao-final.mp3',
            'bonus-tempo': 'assets/bonus-de-tempo.mp3',
            'clique-ui': 'assets/clique-ui.mp3',
            'erro': 'assets/erro.mp3',
            'musica-fundo': 'assets/musica-dinamica-fundo.mp3',
            'pegar-soltar': 'assets/pegar-soltar-item.mp3'
        };
        for (const key in soundFiles) {
            sounds[key] = new Audio(soundFiles[key]);
        }
        sounds['musica-fundo'].loop = true;
        audioInitialized = true;
    }

    function playSound(name) {
        if (!audioInitialized || !sounds[name]) return;
        
        // --- NOVO: Verifica áudio nas configurações ---
        const settingsString = localStorage.getItem('safequest-settings');
        let canPlay = true;
        if (settingsString) {
            try {
                const settings = JSON.parse(settingsString);
                if (name === 'musica-fundo' && !settings.music) canPlay = false;
                if (name !== 'musica-fundo' && !settings.sfx) canPlay = false;
            } catch (e) { /* ignora erro */ }
        }
        if (!canPlay) return;
        // --- FIM DA VERIFICAÇÃO ---

        const sound = sounds[name];
        if (name !== 'musica-fundo') {
            sound.currentTime = 0;
        }
        sound.play().catch(error => console.error(`Erro ao tocar o som '${name}':`, error));
    }

    function stopSound(name) {
        if (!audioInitialized || !sounds[name]) return;
        const sound = sounds[name];
        sound.pause();
        sound.currentTime = 0;
    }

    function fadeIn(name, targetVolume = 0.3, duration = 1500) {
        if (!audioInitialized || !sounds[name]) return;

        // --- NOVO: Verifica áudio nas configurações ---
        const settingsString = localStorage.getItem('safequest-settings');
        if (settingsString) {
            try {
                const settings = JSON.parse(settingsString);
                if (name === 'musica-fundo' && !settings.music) return; // Não toca
            } catch (e) { /* ignora erro */ }
        }
        // --- FIM DA VERIFICAÇÃO ---

        const sound = sounds[name];
        const intervalTime = 50;
        const fadeSteps = duration / intervalTime;
        const volumeIncrement = targetVolume / fadeSteps;
        sound.volume = 0;
        sound.play().catch(error => console.error(`Erro ao iniciar o som para fade-in:`, error));
        const fadeInterval = setInterval(() => {
            if (sound.volume < targetVolume) {
                sound.volume = Math.min(targetVolume, sound.volume + volumeIncrement);
            } else {
                clearInterval(fadeInterval);
            }
        }, intervalTime);
    }

    function fadeOut(name, duration = 1000) {
        if (!audioInitialized || !sounds[name]) return;
        const sound = sounds[name];
        const intervalTime = 50;
        const fadeSteps = duration / intervalTime;
        const startVolume = sound.volume;
        const volumeDecrement = startVolume / fadeSteps;
        const fadeInterval = setInterval(() => {
            if (sound.volume > 0) {
                sound.volume = Math.max(0, sound.volume - volumeDecrement);
            } else {
                clearInterval(fadeInterval);
                sound.pause();
                sound.currentTime = 0;
                sound.volume = startVolume;
            }
        }, intervalTime);
    }
    // --- FIM DA SEÇÃO DE ÁUDIO ---

    function init() {
        startButton.addEventListener('click', () => {
            initAudio();
            startIntroduction();
        });
        restartButton.addEventListener('click', () => {
        playSound('clique-ui');
        stopSound('avaliacao-final');
        stopSound('alerta-cronometro');
        stopSound('musica-fundo');
        startGame();
        });
        nextStageButton.addEventListener('click', () => {
            playSound('clique-ui');
            handleNextButtonClick();
        });
        verifyButton.addEventListener('click', () => {
            playSound('clique-ui');
            verifyOrder();
        });
        plateSlots.forEach(slot => {
            slot.addEventListener('dragover', handleDragOver);
            slot.addEventListener('dragleave', handleDragLeave);
            slot.addEventListener('drop', handleDrop);
            slot.addEventListener('click', handlePotClick);
        });

        // --- NOVO: Listeners de Toque Globais ---
        // Adiciona os listeners ao gameContainer para capturar o movimento em qualquer lugar
        gameContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
        gameContainer.addEventListener('touchend', handleTouchEnd);
        gameContainer.addEventListener('touchcancel', handleTouchEnd); // Cancela o toque se algo interromper
        // --- FIM: Listeners de Toque ---

        const portraitMediaQuery = window.matchMedia("(orientation: portrait)");
        function handleOrientationChange(e) {
            const orientationWarning = document.getElementById('orientation-warning');
            if (e.matches) {
                // Se está em modo retrato, pausa o jogo e MOSTRA o aviso
                orientationWarning.classList.remove('hidden');
                orientationWarning.classList.add('flex');
                isPaused = true;
            } else {
                // Se está em modo paisagem, ESCONDE o aviso e despausa (se não houver outra pausa)
                orientationWarning.classList.add('hidden');
                orientationWarning.classList.remove('flex');

                const isAnyModalOpen = bookModal.classList.contains('flex') ||
                                        stageTransitionScreen.classList.contains('flex') ||
                                        endScreen.classList.contains('flex') ||
                                        startScreen.classList.contains('flex');
                if (!isShowingIntro && !isAnyModalOpen && modalPauseCount === 0) {
                    isPaused = false;
                }
            }
        }
        portraitMediaQuery.addEventListener('change', handleOrientationChange);
        handleOrientationChange(portraitMediaQuery); // Checa a orientação inicial
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(gameContainer);
        prepareBookContent();
        calculatePages();
        bookButton.addEventListener('click', () => {
            playSound('clique-ui');
            openBook();
        });
        bookModalClose.addEventListener('click', () => {
            playSound('clique-ui');
            closeBook();
        });
        foodDetailClose.addEventListener('click', () => {
            playSound('clique-ui');
            closeFoodDetails();
        });
        prevPageBtn.addEventListener('click', () => {
            playSound('clique-ui');
            changePage(-1);
        });
        nextPageBtn.addEventListener('click', () => {
            playSound('clique-ui');
            changePage(1);
        });
    }

    // --- FUNÇÕES DO LIVRO E MODAIS ---
    function prepareBookContent() {
    allBookFoods = [];
    const categoryOrder = ['carboidrato', 'proteina', 'vitamina', 'pegadinha'];
    categoryOrder.forEach(categoryKey => {
        // A variável 'FOODS' já está no idioma correto
        if (FOODS[categoryKey]) {
            FOODS[categoryKey].forEach(food => {
                allBookFoods.push({ ...food, category: categoryKey });
            });
        }
    });
}

    function calculatePages() {
        pages = [];
        for (let i = 0; i < allBookFoods.length; i += ITEMS_PER_PAGE) {
            pages.push(allBookFoods.slice(i, i + ITEMS_PER_PAGE));
        }
    }

    function renderPage(pageNumber) {
    currentPage = pageNumber;
    const pageData = pages[currentPage - 1] || [];
    pageSections.forEach(section => section.innerHTML = '');

    for (let s = 0; s < pageSections.length; s++) {
        const sectionEl = pageSections[s];
        const chunkStart = s * ITEMS_PER_SECTION;
        const chunk = pageData.slice(chunkStart, chunkStart + ITEMS_PER_SECTION);

        if (chunk.length === 0) continue;

        const inner = document.createElement('div');
        inner.className = 'section-inner';

        const categoryKey = chunk[0].category;
        const titleEl = document.createElement('div');
        titleEl.className = 'category-title';
        // --- NOVO: Usa o nome traduzido do grupo ---
        titleEl.textContent = FOOD_GROUP_NAMES[categoryKey] || '';
        inner.appendChild(titleEl);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'food-items-container';

        chunk.forEach(food => {
            const itemEl = document.createElement('div');
            itemEl.className = 'book-food-item';
            itemEl.onclick = () => {
                playSound('clique-ui');
                showFoodDetails(food);
            };
            const img = document.createElement('img');
            img.src = food.img;
            img.alt = food.name;
            const name = document.createElement('p');
            name.textContent = food.name;
            itemEl.appendChild(img);
            itemEl.appendChild(name);
            itemsContainer.appendChild(itemEl);
        });

        inner.appendChild(itemsContainer);
        sectionEl.appendChild(inner);
    }

    updateNavigation();
}

    function updateNavigation() {
        // --- NOVO: Texto do indicador de página traduzido ---
        pageIndicator.textContent = `${translations.pagina_indicador} ${currentPage} ${translations.de_indicador} ${pages.length}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === pages.length;
    }

    function changePage(direction) {
        const newPage = currentPage + direction;
        if (newPage > 0 && newPage <= pages.length) {
            bookPagesContainer.classList.add('fade-out');
            setTimeout(() => {
                renderPage(newPage);
                bookPagesContainer.classList.remove('fade-out');
            }, 300);
        }
    }

    function openBook() {
    pushModalPause();
    renderPage(1);
    bookModal.classList.remove('hidden');
    bookModal.classList.add('flex');
}

    function closeBook() {
    bookModal.classList.add('hidden');
    bookModal.classList.remove('flex');
    popModalPause();
}

    function showFoodDetails(food) {
        foodDetailName.textContent = food.name;
        foodDetailImg.src = food.img;
        foodDetailImg.alt = food.name;
        foodDetailDesc.textContent = food.description;
        foodDetailFunFact.textContent = food.funFact;
        foodDetailNutri.textContent = food.nutritionalInfo;
        foodDetailModal.classList.remove('hidden');
        foodDetailModal.classList.add('flex');
        pushModalPause();
    }

    function closeFoodDetails() {
        foodDetailModal.classList.add('hidden');
        foodDetailModal.classList.remove('flex');
        popModalPause();
    }
    // --- FIM FUNÇÕES DO LIVRO E MODAIS ---

    // --- FUNÇÕES DE INTRODUÇÃO E TRANSIÇÃO ---
    function startIntroduction() {
        playSound('clique-ui');
        startScreen.classList.add('hidden');
        isShowingIntro = true;
        introStep = 0;
        showNextIntroDialogue();
    }

    function showNextIntroDialogue() {
        if (introStep < introDialogues.length) {
            const dialogue = introDialogues[introStep];
            stageMacawSprite.src = MACAW_SPRITES.falando;
            document.getElementById('stage-title').textContent = dialogue.title;
            document.getElementById('stage-explanation').textContent = dialogue.text;
            stageTransitionScreen.classList.remove('hidden');
            stageTransitionScreen.classList.add('flex');
            isPaused = true;
            introStep++;
        } else {
            isShowingIntro = false;
            stageTransitionScreen.classList.add('hidden');
            stageTransitionScreen.classList.remove('flex'); // Garante que saiu do flex
            isPaused = false;
            startGame();
        }
    }

    function handleNextButtonClick() {
        if (isShowingIntro) {
            showNextIntroDialogue();
        } else {
            resumeGame();
        }
    }
    // --- FIM FUNÇÕES DE INTRODUÇÃO E TRANSIÇÃO ---

    // --- AJUSTE DE REDIMENSIONAMENTO ---
    function handleResize() {
        if (isPaused || !gameLoopInterval || !esteiraContainer) return;
        const foodsOnBelt = esteiraContainer.querySelectorAll('.food-item');
        const container = esteiraContainer;
        const verticalCenterPx = container.clientWidth * (PATH_PERCENTAGES.SPAWN_X / 100);
        const wiggle = 20;
        foodsOnBelt.forEach(food => {
            const path = parseInt(food.dataset.path);
            if (path === PATH_STATE.MOVE_DOWN) {
                food.style.left = `${verticalCenterPx - (wiggle / 2) + (Math.random() * wiggle)}px`;
            }
        });
    }
    // --- FIM AJUSTE DE REDIMENSIONAMENTO ---

    // --- FUNÇÕES PRINCIPAIS DO JOGO ---
    function startGame() {
        endScreen.classList.add('hidden');
        endScreen.classList.remove('flex');
        startScreen.classList.add('hidden');
        startScreen.classList.remove('flex');
        gameHeader.classList.remove('hidden');
        gameMain.classList.remove('hidden');
        timer = INITIAL_TIME;
        score = 0;
        currentStageIndex = 0;
        isPaused = false;
        lastUsedFoods = [];
        updateScore(0);
        updateTimerDisplay();
        esteiraContainer.innerHTML = '';
        setupStage();
        startGameplayLoops();
        scheduleRandomDialogue();
        fadeIn('musica-fundo', 0.3, 1500);
    }

    function startGameplayLoops() {
        if (timerInterval) clearInterval(timerInterval);
        if (foodSpawnInterval) clearInterval(foodSpawnInterval);
        if (gameLoopInterval) clearInterval(gameLoopInterval);
        startTimer();
        startSpawningFood();
        startGameLoop();
    }

    function setupStage() {
        stageOrders = 0;
        stageDisplayEl.textContent = STAGES[currentStageIndex].stage;
        generateOrder();
    }

    function generateOrder() {
        const stage = STAGES[currentStageIndex];
        currentOrder = [];
        clearPlate();
        for (let i = 0; i < stage.orderSize; i++) {
            const type = stage.possibleOrderTypes[Math.floor(Math.random() * stage.possibleOrderTypes.length)];
            currentOrder.push(type);
            // --- NOVO: Usa o nome traduzido do grupo ---
            orderSlots[i].textContent = FOOD_GROUP_NAMES[type];
        }
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (isPaused) return;
            timer--;
            updateTimerDisplay();
            if (timer <= 15 && timer > 0) {
                timerEl.classList.add('timer-warning');
                if (timer % 2 === 0) {
                    playSound('alerta-cronometro');
                }
            } else {
                timerEl.classList.remove('timer-warning');
            }
            if (timer <= 0) {
                timer = 0;
                updateTimerDisplay();
                endGame(false);
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
        const seconds = (timer % 60).toString().padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    }

    function startSpawningFood() {
        if (foodSpawnInterval) clearInterval(foodSpawnInterval);
        if (!isPaused) spawnFood();
        foodSpawnInterval = setInterval(() => {
            if (isPaused) return;
            spawnFood();
        }, FOOD_SPAWN_INTERVAL);
    }

    function spawnFood() {
        const stage = STAGES[currentStageIndex];
        const randomType = stage.foodTypes[Math.floor(Math.random() * stage.foodTypes.length)];
        
        // A variável 'FOODS' já está no idioma correto
        if (!FOODS[randomType] || FOODS[randomType].length === 0) return; // Checagem de segurança

        const foodData = FOODS[randomType][Math.floor(Math.random() * FOODS[randomType].length)];
        const container = esteiraContainer;
        if (!container) return;

        const foodEl = document.createElement('div');
        foodEl.id = `food-${Date.now()}-${Math.random()}`;
        foodEl.className = 'food-item';
        foodEl.style.backgroundImage = `url('${foodData.img}')`;
        foodEl.draggable = true;
        foodEl.dataset.type = randomType;
        foodEl.dataset.img = foodData.img;
        foodEl.dataset.name = foodData.name;

        // --- Eventos de MOUSE (PC) ---
        foodEl.addEventListener('dragstart', (e) => {
            if (isPaused) {
                e.preventDefault();
                return;
            }
            playSound('pegar-soltar');
            e.dataTransfer.setData('text/plain', foodEl.id);
            foodEl.dataset.dragging = 'true';
            setTimeout(() => foodEl.classList.add('opacity-50'), 0);
        });
        foodEl.addEventListener('dragend', () => {
             foodEl.classList.remove('opacity-50');
             delete foodEl.dataset.dragging;
        });

        // --- NOVO: Evento de TOQUE (Mobile) ---
        // { passive: false } é crucial para permitir o e.preventDefault()
        foodEl.addEventListener('touchstart', handleTouchStart, { passive: false });
        // --- FIM: Evento de Toque ---

        foodEl.style.top = `${container.clientHeight * (PATH_PERCENTAGES.SPAWN_Y / 100)}px`;
        const wiggle = 20;
        const verticalCenterPx = container.clientWidth * (PATH_PERCENTAGES.SPAWN_X / 100);
        foodEl.style.left = `${verticalCenterPx - (wiggle / 2) + (Math.random() * wiggle)}px`;
        foodEl.dataset.path = PATH_STATE.MOVE_DOWN;

        foodEl.classList.add('food-spawn');
        foodEl.addEventListener('animationend', () => foodEl.classList.remove('food-spawn'), { once: true });

        container.appendChild(foodEl);
    }

    function startGameLoop() {
        if (gameLoopInterval) clearInterval(gameLoopInterval);
        gameLoopInterval = setInterval(() => {
            if (isPaused) return;
            moveFood();
        }, 1000 / 60);
    }

    function moveFood() {
        const foodsOnBelt = esteiraContainer.querySelectorAll('.food-item:not([data-dragging="true"])');
        const speed = (FOOD_SPEED / 60);
        const container = esteiraContainer;
        if (!container) return;

        const turn1Y_px = container.clientHeight * (PATH_PERCENTAGES.TURN_1_Y / 100);
        const turn2X_px = container.clientWidth * (PATH_PERCENTAGES.TURN_2_X / 100);
        const turn3Y_px = container.clientHeight * (PATH_PERCENTAGES.TURN_3_Y / 100);
        const turn4X_px = container.clientWidth * (PATH_PERCENTAGES.TURN_4_X / 100);
        const exitY_px = container.clientHeight * (PATH_PERCENTAGES.EXIT_Y / 100);

        foodsOnBelt.forEach(food => {
            if (food.classList.contains('food-exit')) return;
            let currentTop = parseFloat(food.style.top);
            let currentLeft = parseFloat(food.style.left);
            const path = parseInt(food.dataset.path);

            switch (path) {
                case PATH_STATE.MOVE_DOWN:
                    if (currentTop < turn1Y_px) { food.style.top = `${currentTop + speed}px`; }
                    else { food.style.top = `${turn1Y_px}px`; food.dataset.path = PATH_STATE.MOVE_RIGHT; }
                    break;
                case PATH_STATE.MOVE_RIGHT:
                    if (currentLeft < turn2X_px) { food.style.left = `${currentLeft + speed}px`; }
                    else { food.style.left = `${turn2X_px}px`; food.dataset.path = PATH_STATE.MOVE_UP; }
                    break;
                case PATH_STATE.MOVE_UP:
                    if (currentTop > turn3Y_px) { food.style.top = `${currentTop - speed}px`; }
                    else { food.style.top = `${turn3Y_px}px`; food.dataset.path = PATH_STATE.MOVE_LEFT; }
                    break;
                case PATH_STATE.MOVE_LEFT:
                    if (currentLeft > turn4X_px) { food.style.left = `${currentLeft - speed}px`; }
                    else { food.style.left = `${turn4X_px}px`; food.dataset.path = PATH_STATE.MOVE_UP_EXIT; }
                    break;
                case PATH_STATE.MOVE_UP_EXIT:
                    if (currentTop > exitY_px) { food.style.top = `${currentTop - speed}px`; }
                    else {
                        food.classList.add('food-exit');
                        food.addEventListener('animationend', () => food.remove(), { once: true });
                    }
                    break;
            }
        });
    }
    // --- FIM FUNÇÕES PRINCIPAIS DO JOGO ---

    // --- FUNÇÕES DE INTERAÇÃO (DRAG & DROP, VERIFICAÇÃO) ---

    // --- NOVO: Handlers de Toque ---

    function handleTouchStart(e) {
        // Ignora se não for um único toque ou se o jogo estiver pausado
        if (e.touches.length !== 1 || isPaused) return;

        e.preventDefault(); // Previne scroll e "clique fantasma"
        
        draggedItem = e.currentTarget; // O .food-item
        esteiraRect = esteiraContainer.getBoundingClientRect(); // Pega a posição da esteira
        const touch = e.touches[0];

        // Calcula o offset do toque *dentro* do item
        const itemRect = draggedItem.getBoundingClientRect();
        touchOffsetX = touch.clientX - itemRect.left;
        touchOffsetY = touch.clientY - itemRect.top;

        // Marca como "arrastando" para pausar o movimento da esteira
        draggedItem.dataset.dragging = 'true';
        playSound('pegar-soltar');
        
        // Estilos de "pegar"
        draggedItem.style.zIndex = 1000; // Põe sobre tudo
        draggedItem.classList.add('opacity-50');
        draggedItem.style.transform = 'scale(1.1)'; // Aumenta um pouco
        
        // Move o item para a posição inicial do dedo (já aplicando o offset)
        // Converte coordenada do viewport (touch.clientX) para coordenada da esteira (style.left)
        let x = touch.clientX - esteiraRect.left - touchOffsetX;
        let y = touch.clientY - esteiraRect.top - touchOffsetY;
        
        draggedItem.style.left = `${x}px`;
        draggedItem.style.top = `${y}px`;
    }

    function handleTouchMove(e) {
        if (!draggedItem || isPaused) return;

        e.preventDefault(); // Previne scroll
        
        const touch = e.touches[0];
        
        // Move o item
        // Usa o esteiraRect cacheado para melhor performance
        let x = touch.clientX - esteiraRect.left - touchOffsetX;
        let y = touch.clientY - esteiraRect.top - touchOffsetY;
        
        draggedItem.style.left = `${x}px`;
        draggedItem.style.top = `${y}px`;

        // Simula dragover/dragleave checando a posição
        let foundTarget = null;
        // Itera sobre as cestas para ver se o toque está em cima de alguma
        for (const slot of plateSlots) {
            const slotRect = slot.getBoundingClientRect();
            if (
                touch.clientX >= slotRect.left &&
                touch.clientX <= slotRect.right &&
                touch.clientY >= slotRect.top &&
                touch.clientY <= slotRect.bottom
            ) {
                foundTarget = slot;
                break; // Encontrou um
            }
        }

        // Atualiza o highlight (classe 'drag-over')
        if (foundTarget !== currentDropTarget) {
            if (currentDropTarget) {
                currentDropTarget.classList.remove('drag-over');
            }
            if (foundTarget) {
                foundTarget.classList.add('drag-over');
            }
            currentDropTarget = foundTarget; // Atualiza o alvo atual
        }
    }

    function handleTouchEnd(e) {
        if (!draggedItem) return;
        
        let dropped = false;
        // 'currentDropTarget' foi definido no último 'touchmove'
        if (currentDropTarget) {
            // Tenta colocar no slot
            dropped = placeItemInSlot(draggedItem, currentDropTarget);
            currentDropTarget.classList.remove('drag-over'); // Limpa o highlight
        }

        // Se não foi solto com sucesso (ou não tinha dropTarget)
        if (!dropped) {
            // Item "volta" para a esteira (apenas removemos os estilos de drag)
            delete draggedItem.dataset.dragging;
        }
        
        // Limpa estilos de drag/touch
        draggedItem.classList.remove('opacity-50');
        draggedItem.style.zIndex = 15; // Z-index normal
        draggedItem.style.transform = 'scale(1)'; // Tamanho normal
        
        // Reseta variáveis globais de toque
        draggedItem = null;
        currentDropTarget = null;
        esteiraRect = null;
    }

    // --- FIM: Handlers de Toque ---

    function handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    function handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }

    // --- NOVO: Função reutilizável para colocar item ---
    /**
    * Tenta colocar um foodEl (de mouse ou toque) em um slotEl (cesta).
    * Retorna true se foi sucesso, false se o slot estava ocupado.
    */
    function placeItemInSlot(foodEl, slotEl) {
        const slotIndex = parseInt(slotEl.dataset.slotIndex);
        
        // Permite soltar apenas se o slot estiver vazio
        if (plateContents[slotIndex] === null) {
            plateContents[slotIndex] = { 
                type: foodEl.dataset.type, 
                img: foodEl.dataset.img, 
                name: foodEl.dataset.name 
            };
            
            const imgInPlate = document.createElement('img');
            imgInPlate.src = foodEl.dataset.img;
            slotEl.innerHTML = ''; // Limpa antes de adicionar
            slotEl.appendChild(imgInPlate);
            
            foodEl.remove(); // Remove o item da esteira
            
            playSound('pegar-soltar');
            checkPlateFullness();
            return true; // Sucesso
        } else {
            return false; // Falha (slot ocupado)
        }
    }
    // --- FIM: Função reutilizável ---

    // --- ATUALIZADO: handleDrop agora usa a nova função ---
    function handleDrop(e) {
        e.preventDefault();
        const slotEl = e.currentTarget;
        slotEl.classList.remove('drag-over');
        
        const foodId = e.dataTransfer.getData('text/plain');
        const foodEl = document.getElementById(foodId);
        if (!foodEl) return;

        const success = placeItemInSlot(foodEl, slotEl);
        
        // Se não teve sucesso (slot ocupado), o dragend listener
        // já vai lidar com a remoção do 'dataset.dragging'
        if (!success) {
            delete foodEl.dataset.dragging;
        }
    }

    function handlePotClick(e) {
        const slotEl = e.currentTarget;
        const slotIndex = parseInt(slotEl.dataset.slotIndex);
        if (plateContents[slotIndex] !== null) {
            plateContents[slotIndex] = null;
            slotEl.innerHTML = '';
            playSound('pegar-soltar');
            checkPlateFullness();
        }
    }

    function checkPlateFullness() {
        const isFull = plateContents.every(item => item !== null);
        verifyButton.disabled = !isFull;
        if (isFull) {
            verifyButton.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            verifyButton.classList.add('opacity-50', 'cursor-not-allowed');
        }
    }

    function verifyOrder() {
        if (!plateContents.every(item => item !== null)) return;
        const currentPlateTypes = plateContents.map(p => p.type).sort();
        const currentOrderTypes = [...currentOrder].sort();
        let isCorrect = JSON.stringify(currentPlateTypes) === JSON.stringify(currentOrderTypes);

        verifyButton.disabled = true;
        verifyButton.classList.add('opacity-50', 'cursor-not-allowed');

        if (isCorrect) {
            handleCorrectOrder();
        } else {
            handleWrongOrder();
            // Re-habilita o botão após um delay se estiver errado,
            // permitindo que o usuário veja o feedback antes de tentar de novo.
            setTimeout(() => {
                if (!isPaused) checkPlateFullness();
            }, 600);
        }
    }

    function handleCorrectOrder() {
        playSound('acerto');
        playSound('bonus-tempo');
        plateSlots.forEach(slot => {
            slot.classList.add('correct-plate');
            setTimeout(() => { slot.innerHTML = ''; }, 500);
        });
        setTimeout(() => plateSlots.forEach(slot => slot.classList.remove('correct-plate')), 700);

        updateScore(score + 1);
        stageOrders++;
        timer += TIME_BONUS;
        updateTimerDisplay();
        showMacawMessage(getRandomDialogue('praise'), 4000, 'feliz');

        plateContents.forEach(food => lastUsedFoods.push(food.name));
        if (lastUsedFoods.length > 9) lastUsedFoods.shift();
        const lastFoodName = plateContents[plateContents.length-1].name;
        if (lastUsedFoods.filter(foodName => foodName === lastFoodName).length >= 3) {
            setTimeout(() => showMacawMessage(getRandomDialogue('variety'), 4000, 'curiosa'), 3500);
            lastUsedFoods = [];
        }

        const stage = STAGES[currentStageIndex];
        const delayNextAction = 1000;
        if (stageOrders >= stage.goal) {
            if (currentStageIndex < STAGES.length - 1) {
                setTimeout(advanceStage, delayNextAction);
            } else {
                setTimeout(() => endGame(true), delayNextAction);
            }
        } else {
            setTimeout(generateOrder, delayNextAction);
        }
    }

    function handleWrongOrder() {
        playSound('erro');
        plateSlots.forEach(slot => slot.classList.add('wrong-plate'));
        setTimeout(() => plateSlots.forEach(slot => slot.classList.remove('wrong-plate')), 500);
        showMacawMessage(getRandomDialogue('hints'), 5000, 'triste');
    }

    function clearPlate() {
        plateContents = [null, null, null];
        plateSlots.forEach(slot => { slot.innerHTML = ''; });
        orderSlots.forEach(slot => slot.textContent = '');
        checkPlateFullness();
    }

    function updateScore(newScore) {
        score = newScore;
        scoreEl.textContent = score;
    }
    // --- FIM FUNÇÕES DE INTERAÇÃO ---

    // --- FUNÇÕES DA ARARA E FIM DE JOGO ---
    function showMacawMessage(text, duration = 4000, expression = 'falando') {
        if (macawTimeout) clearTimeout(macawTimeout);
        macawSprite.src = MACAW_SPRITES[expression];
        macawText.textContent = text;
        macawMessage.classList.remove('opacity-0');
        macawTimeout = setTimeout(() => {
            macawMessage.classList.add('opacity-0');
        }, duration);
    }

    function scheduleRandomDialogue() {
        if (otherDialogueTimeout) clearTimeout(otherDialogueTimeout);
        otherDialogueTimeout = setTimeout(() => {
            if (!isPaused && !isShowingIntro && macawMessage.classList.contains('opacity-0')) {
                showMacawMessage(getRandomDialogue('other'), 4000, 'falando');
            }
            scheduleRandomDialogue();
        }, 20000 + Math.random() * 15000);
    }

    function advanceStage() {
        isPaused = true;
        currentStageIndex++;
        if (currentStageIndex >= STAGES.length) {
            endGame(true);
            return;
        }
        const stage = STAGES[currentStageIndex];
        // --- NOVO: Pega o diálogo da etapa do objeto de tradução ---
        const stageDialogueKey = `stage${currentStageIndex + 1}`;
        const stageDialogue = translations[stageDialogueKey] || "Próxima etapa!";
        // --- FIM DA MUDANÇA ---

        stageMacawSprite.src = MACAW_SPRITES.falando;
        document.getElementById('stage-title').textContent = stage.title;
        document.getElementById('stage-explanation').textContent = stageDialogue;

        stageTransitionScreen.classList.remove('hidden');
        stageTransitionScreen.classList.add('flex');
    }

    function resumeGame() {
        stageTransitionScreen.classList.add('hidden');
        stageTransitionScreen.classList.remove('flex');
        isPaused = false;
        setupStage();
    }

    function stopGameIntervals() {
        clearInterval(timerInterval);
        clearInterval(foodSpawnInterval);
        clearInterval(gameLoopInterval);
        clearTimeout(macawTimeout);
        clearTimeout(otherDialogueTimeout);
        timerInterval = null;
        foodSpawnInterval = null;
        gameLoopInterval = null;
        macawTimeout = null;
        otherDialogueTimeout = null;
        fadeOut('musica-fundo', 1000);
        stopSound('alerta-cronometro');
    }

    function endGame(isWinner) {
        isPaused = true;
        stopGameIntervals();
        playSound('avaliacao-final');
        gameHeader.classList.add('hidden');
        gameMain.classList.add('hidden');
        document.getElementById('final-score').textContent = score;
        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = '';
        let stars = 0, message = "", title = "";
        const totalGoal = STAGES[STAGES.length-1].goal;

        if (isWinner) {
            // --- NOVO: Textos de vitória traduzidos ---
            title = translations.end_titulo_vitoria;
            stars = 3;
            message = translations.performance[2];
            endMacawSprite.src = MACAW_SPRITES.feliz;
        } else {
            // --- NOVO: Textos de derrota traduzidos ---
            title = translations.end_titulo_padrao;
            if (score >= totalGoal) { // Venceu, mas o tempo acabou? (Caso de Borda)
                stars = 2;
                message = translations.performance[1];
                endMacawSprite.src = MACAW_SPRITES.feliz;
            } else if (score >= totalGoal * 0.5) {
                stars = 1;
                message = translations.performance[0];
                endMacawSprite.src = MACAW_SPRITES.curiosa;
            } else {
                stars = 0;
                message = getRandomDialogue('defeat');
                endMacawSprite.src = MACAW_SPRITES.triste;
            }
        }
        for(let i = 0; i < 3; i++) {
            const starSpan = document.createElement('span');
            starSpan.textContent = i < stars ? '⭐' : '☆';
            starsContainer.appendChild(starSpan);
        }
        document.getElementById('end-title').textContent = title;
        document.getElementById('end-message').textContent = message;
        endScreen.classList.remove('hidden');
        endScreen.classList.add('flex');
    }
    // --- FIM FUNÇÕES DA ARARA E FIM DE JOGO ---

    // --- INICIALIZAÇÃO ---
    init();
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
};