const planetsData = [
    {
      назва: "Меркурій",
      тип: "землеподібна",
      колір: "#B7B4AE",
      температура: "від -180°C вночі до 430°C вдень",
      діаметр: "4 879 км",
      маса: "3.30 × 10²³ кг",
      відстань: "57.9 млн км від Сонця",
      гравітація: "3.7 м/с²",
      атмосфера: "Практично відсутня, сліди кисню та натрію",
      супутники: "0 супутників",
      цікавий_факт: "Один день на Меркурії триває довше, ніж один рік — планета обертається навколо своєї осі повільніше, ніж навколо Сонця."
    },
    {
      назва: "Венера",
      тип: "землеподібна",
      колір: "#E8C88A",
      температура: "близько 465°C на поверхні",
      діаметр: "12 104 км",
      маса: "4.87 × 10²⁴ кг",
      відстань: "108.2 млн км від Сонця",
      гравітація: "8.87 м/с²",
      атмосфера: "Густа, 96% вуглекислого газу, хмари сірчаної кислоти",
      супутники: "0 супутників",
      цікавий_факт: "Венера обертається у зворотному напрямку порівняно з більшістю планет, тому Сонце там сходить на заході."
    },
    {
      назва: "Земля",
      тип: "землеподібна",
      колір: "#4FD1FF",
      температура: "в середньому 15°C",
      діаметр: "12 742 км",
      маса: "5.97 × 10²⁴ кг",
      відстань: "149.6 млн км від Сонця",
      гравітація: "9.81 м/с²",
      атмосфера: "78% азоту, 21% кисню",
      супутники: "1 супутник (Місяць)",
      цікавий_факт: "Земля — єдина відома планета, на якій підтверджено існування життя, завдяки унікальному поєднанню води, атмосфери й магнітного поля."
    },
    {
      назва: "Марс",
      тип: "землеподібна",
      колір: "#D97757",
      температура: "від -140°C до 20°C",
      діаметр: "6 779 км",
      маса: "6.42 × 10²³ кг",
      відстань: "227.9 млн км від Сонця",
      гравітація: "3.72 м/с²",
      атмосфера: "Розріджена, 95% вуглекислого газу",
      супутники: "2 супутники (Фобос, Деймос)",
      цікавий_факт: "На Марсі знаходиться найвища відома гора Сонячної системи — вулкан Олімп заввишки понад 21 км."
    },
    {
      назва: "Юпітер",
      тип: "газовий гігант",
      колір: "#E0B084",
      температура: "близько -110°C у верхніх шарах хмар",
      діаметр: "139 820 км",
      маса: "1.90 × 10²⁷ кг",
      відстань: "778.5 млн км від Сонця",
      гравітація: "24.79 м/с²",
      атмосфера: "Переважно водень і гелій",
      супутники: "95 відомих супутників",
      цікавий_факт: "Велика червона пляма Юпітера — це гігантський шторм, який триває вже щонайменше 350 років."
    },
    {
      назва: "Сатурн",
      тип: "газовий гігант",
      колір: "#EAD9A0",
      температура: "близько -140°C",
      діаметр: "116 460 км",
      маса: "5.68 × 10²⁶ кг",
      відстань: "1.43 млрд км від Сонця",
      гравітація: "10.44 м/с²",
      атмосфера: "Переважно водень і гелій",
      супутники: "146 відомих супутників",
      цікавий_факт: "Сатурн настільки легкий, що якби існував достатньо великий океан, планета могла б плавати на його поверхні."
    },
    {
      назва: "Уран",
      тип: "крижаний гігант",
      колір: "#8BE8E5",
      температура: "близько -195°C",
      діаметр: "50 724 км",
      маса: "8.68 × 10²⁵ кг",
      відстань: "2.87 млрд км від Сонця",
      гравітація: "8.69 м/с²",
      атмосфера: "Водень, гелій, метан",
      супутники: "27 відомих супутників",
      цікавий_факт: "Уран обертається майже лежачи на боці, з нахилом осі приблизно 98 градусів."
    },
    {
      назва: "Нептун",
      тип: "крижаний гігант",
      колір: "#4F6FFF",
      температура: "близько -200°C",
      діаметр: "49 244 км",
      маса: "1.02 × 10²⁶ кг",
      відстань: "4.50 млрд км від Сонця",
      гравітація: "11.15 м/с²",
      атмосфера: "Водень, гелій, метан",
      супутники: "16 відомих супутників",
      цікавий_факт: "На Нептуні дмуть найшвидші вітри в Сонячній системі — до 2 100 км/год."
    }
  ];
  
  const galleryData = [
    { title: "Туманність Оріона", desc: "Один із найяскравіших об'єктів глибокого космосу, розташований у сузір'ї Оріон, де народжуються нові зорі.", size: "wide", icon: "fa-wind", gradient: "radial-gradient(circle at 30% 30%, #C084FC, #6D28D9 55%, #1E0B3A 100%)" },
    { title: "Кільця Сатурна", desc: "Крижані та кам'яні частинки утворюють складну систему кілець навколо газового гіганта.", size: "tall", icon: "fa-circle-notch", gradient: "radial-gradient(circle at 35% 35%, #EAD9A0, #B08D57 55%, #241A0D 100%)" },
    { title: "Поверхня Марса", desc: "Червоні пустелі та каньйони Червоної планети, зняті марсоходами під час дослідницьких місій.", size: "normal", icon: "fa-mountain", gradient: "radial-gradient(circle at 35% 35%, #F0876B, #B23A22 55%, #2A0D06 100%)" },
    { title: "Чумацький Шлях", desc: "Нічне небо, що показує густе зоряне скупчення нашої рідної галактики.", size: "normal", icon: "fa-star", gradient: "radial-gradient(circle at 40% 30%, #4FD1FF, #1E3A8A 55%, #050816 100%)" },
    { title: "Запуск ракети", desc: "Момент старту ракети-носія, що прямує до орбіти Землі.", size: "wide", icon: "fa-rocket", gradient: "radial-gradient(circle at 30% 25%, #FFD27A, #E0672A 55%, #1A0A02 100%)" },
    { title: "Місячний кратер", desc: "Детальний знімок поверхні Місяця з численними ударними кратерами.", size: "normal", icon: "fa-moon", gradient: "radial-gradient(circle at 35% 35%, #D8DCE6, #6B7280 55%, #101319 100%)" },
    { title: "Космонавт у відкритому космосі", desc: "Вихід у відкритий космос під час орбітальної місії.", size: "tall", icon: "fa-user-astronaut", gradient: "radial-gradient(circle at 35% 30%, #8B5CF6, #2563EB 55%, #050816 100%)" },
    { title: "Галактика Андромеди", desc: "Найближча велика галактика-сусідка Чумацького Шляху.", size: "normal", icon: "fa-atom", gradient: "radial-gradient(circle at 40% 35%, #F472B6, #7C3AED 55%, #170826 100%)" }
  ];
  
  const quizData = [
    {
      питання: "Яка планета Сонячної системи найбільша за розміром?",
      варіанти: ["Сатурн", "Юпітер", "Нептун", "Земля"],
      правильна: 1
    },
    {
      питання: "Скільки супутників має Марс?",
      варіанти: ["0", "1", "2", "4"],
      правильна: 2
    },
    {
      питання: "Хто першим здійснив пілотований орбітальний політ?",
      варіанти: ["Ніл Армстронг", "Юрій Гагарін", "Базз Олдрін", "Валентина Терешкова"],
      правильна: 1
    },
    {
      питання: "Яка планета обертається майже лежачи на боці?",
      варіанти: ["Венера", "Сатурн", "Уран", "Меркурій"],
      правильна: 2
    },
    {
      питання: "У якому році був запущений перший супутник Землі?",
      варіанти: ["1957", "1961", "1969", "1971"],
      правильна: 0
    }
  ];
  
  const factsData = [
    "Один день на Венері триває довше, ніж один рік на цій же планеті.",
    "Наднова зірка може на короткий час світити яскравіше за цілу галактику.",
    "У космосі немає звуку, оскільки для його поширення потрібне середовище, як-от повітря.",
    "Чорні діри можуть викривляти час настільки, що поблизу їх горизонту події час майже зупиняється.",
    "Сонце становить понад 99% усієї маси Сонячної системи."
  ];
  
  let currentQuizIndex = 0;
  let quizScore = 0;
  let quizLocked = false;
  
  function renderPlanetCard(planet) {
    return `
      <div class="glass-panel planet-card" data-name="${planet.назва.toLowerCase()}" data-type="${planet.тип}">
        <div class="planet-visual" style="background: radial-gradient(circle at 35% 30%, ${planet.колір}, #050816 100%); --pc: ${planet.колір}66;"></div>
        <div class="planet-name">${planet.назва}</div>
        <span class="planet-type">${planet.тип}</span>
        <div class="planet-meta">
          <div class="planet-meta-row"><span>Температура</span><b>${planet.температура}</b></div>
          <div class="planet-meta-row"><span>Діаметр</span><b>${planet.діаметр}</b></div>
          <div class="planet-meta-row"><span>Маса</span><b>${planet.маса}</b></div>
          <div class="planet-meta-row"><span>Відстань</span><b>${planet.відстань}</b></div>
          <div class="planet-meta-row"><span>Гравітація</span><b>${planet.гравітація}</b></div>
          <div class="planet-meta-row"><span>Атмосфера</span><b>${planet.атмосфера}</b></div>
          <div class="planet-meta-row"><span>Супутники</span><b>${planet.супутники}</b></div>
        </div>
        <div class="planet-expand"><i class="fa-solid fa-circle-info"></i>${planet.цікавий_факт}</div>
      </div>
    `;
  }
  
  function renderPlanets(list) {
    const grid = document.getElementById("planetGrid");
    if (!list.length) {
      grid.innerHTML = `<div class="planet-empty"><i class="fa-solid fa-satellite-dish mb-3" style="font-size:2rem;"></i><p>Нічого не знайдено. Спробуйте змінити запит або фільтр.</p></div>`;
      return;
    }
    grid.innerHTML = list.map(renderPlanetCard).join("");
  }
  
  function applyPlanetFilters() {
    const query = document.getElementById("planetSearch").value.trim().toLowerCase();
    const activeChip = document.querySelector(".filter-chip.active");
    const activeFilter = activeChip ? activeChip.dataset.filter : "усі";
    const filtered = planetsData.filter(planet => {
      const matchesQuery = planet.назва.toLowerCase().includes(query);
      const matchesType = activeFilter === "усі" || planet.тип === activeFilter;
      return matchesQuery && matchesType;
    });
    renderPlanets(filtered);
  }
  
  function initPlanetExplorer() {
    renderPlanets(planetsData);
    document.getElementById("planetSearch").addEventListener("input", applyPlanetFilters);
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        applyPlanetFilters();
      });
    });
  }
  
  function initGallery() {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = galleryData.map((item, index) => `
      <div class="gallery-item ${item.size}" data-index="${index}">
        <div class="gallery-visual" style="background: ${item.gradient};">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div class="gallery-overlay"><h4>${item.title}</h4></div>
      </div>
    `).join("");
  
    let galleryModalInstance = null;
  
    grid.querySelectorAll(".gallery-item").forEach(el => {
      el.addEventListener("click", () => {
        const item = galleryData[parseInt(el.dataset.index)];
        const visual = document.getElementById("modalVisual");
        const icon = document.getElementById("modalIcon");
        visual.style.background = item.gradient;
        icon.className = `fa-solid ${item.icon}`;
        document.getElementById("modalTitle").textContent = item.title;
        document.getElementById("modalDesc").textContent = item.desc;
        if (!galleryModalInstance) {
          galleryModalInstance = new bootstrap.Modal(document.getElementById("galleryModal"));
        }
        galleryModalInstance.show();
      });
    });
  }
  
  function renderQuizQuestion() {
    quizLocked = false;
    const q = quizData[currentQuizIndex];
    document.getElementById("quizQuestion").textContent = q.питання;
    const optionsWrap = document.getElementById("quizOptions");
    optionsWrap.innerHTML = q.варіанти.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join("");
    optionsWrap.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => handleQuizAnswer(parseInt(btn.dataset.index)));
    });
    const progressPct = ((currentQuizIndex) / quizData.length) * 100;
    document.getElementById("quizProgressFill").style.width = progressPct + "%";
    document.getElementById("quizProgressLabel").textContent = `Питання ${currentQuizIndex + 1} з ${quizData.length}`;
  }
  
  function handleQuizAnswer(selectedIndex) {
    if (quizLocked) return;
    quizLocked = true;
    const q = quizData[currentQuizIndex];
    const buttons = document.querySelectorAll(".quiz-option");
    buttons.forEach(btn => {
      const idx = parseInt(btn.dataset.index);
      btn.disabled = true;
      if (idx === q.правильна) btn.classList.add("correct");
      else if (idx === selectedIndex) btn.classList.add("incorrect");
    });
    if (selectedIndex === q.правильна) quizScore++;
  
    setTimeout(() => {
      currentQuizIndex++;
      if (currentQuizIndex < quizData.length) {
        renderQuizQuestion();
      } else {
        showQuizResult();
      }
    }, 900);
  }
  
  function showQuizResult() {
    document.getElementById("quizProgressFill").style.width = "100%";
    document.getElementById("quizProgressLabel").textContent = `Питання ${quizData.length} з ${quizData.length}`;
    document.getElementById("quizQuestionScreen").classList.add("d-none");
    document.getElementById("quizResultScreen").classList.remove("d-none");
    document.getElementById("resultScore").textContent = quizScore;
  
    let title, comment;
    if (quizScore === quizData.length) {
      title = "Ідеальна місія";
      comment = "Ви впорались бездоганно — рівень підготовки справжнього командира експедиції.";
    } else if (quizScore >= quizData.length - 2) {
      title = "Впевнений дослідник";
      comment = "Хороший результат! Ще трохи практики — і жодне питання про космос вас не здивує.";
    } else {
      title = "Курс на навчання";
      comment = "Непоганий старт. Перегляньте розділ «Дослідження Сонячної системи» і спробуйте ще раз.";
    }
    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultComment").textContent = comment;
  }
  
  function resetQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    quizLocked = false;
    document.getElementById("quizResultScreen").classList.add("d-none");
    document.getElementById("quizQuestionScreen").classList.remove("d-none");
    renderQuizQuestion();
  }
  
  function initQuiz() {
    renderQuizQuestion();
    document.getElementById("quizRestartBtn").addEventListener("click", resetQuiz);
  }
  
  function animateCounters() {
    document.querySelectorAll(".stat-number").forEach(el => {
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimals || "0");
      const suffix = el.dataset.suffix || "";
      const duration = 1600;
      const startTime = performance.now();
  
      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  
  function initStatObserver() {
    const statsSection = document.getElementById("mission");
    let triggered = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }
  
  const telemetryMessages = [
    "Синхронізація з бортовим комп'ютером виконана",
    "Отримано пакет телеметрії з орбітального модуля",
    "Перевірка систем життєзабезпечення пройдена",
    "Оновлено координати навігаційної системи",
    "Зв'язок із центром керування стабільний",
    "Термоконтроль корпусу в нормі"
  ];
  
  function initDashboard() {
    const log = document.getElementById("telemetryLog");
    let logIndex = 0;
    function pushLog() {
      const line = document.createElement("div");
      line.textContent = `[T+${String(logIndex).padStart(3, "0")}] ${telemetryMessages[logIndex % telemetryMessages.length]}`;
      log.prepend(line);
      while (log.children.length > 4) log.removeChild(log.lastChild);
      logIndex++;
    }
    pushLog();
    setInterval(pushLog, 3200);
  
    let fuel = 100;
    const fuelFill = document.getElementById("fuelFill");
    const fuelValue = document.getElementById("fuelValue");
    setInterval(() => {
      fuel = Math.max(fuel - (Math.random() * 0.6), 4);
      fuelFill.style.width = fuel + "%";
      fuelValue.textContent = fuel.toFixed(0) + "%";
    }, 2200);
  
    let distance = 128430;
    const distanceValue = document.getElementById("distanceValue");
    setInterval(() => {
      distance += Math.floor(Math.random() * 900) + 200;
      distanceValue.textContent = distance.toLocaleString("uk-UA");
    }, 1500);
  
    const crewList = document.getElementById("crewList");
    const crew = [
      { name: "Командир О. Литвин", status: "ok", label: "Норма" },
      { name: "Пілот К. Гнатюк", status: "ok", label: "Норма" },
      { name: "Інженер М. Савчук", status: "warn", label: "Спостереження" }
    ];
    crewList.innerHTML = crew.map(c => `
      <div class="crew-row">
        <span class="crew-name">${c.name}</span>
        <span class="crew-badge ${c.status}">${c.label}</span>
      </div>
    `).join("");
  
    let expedition = 0;
    const expeditionFill = document.getElementById("expeditionFill");
    const expeditionPercent = document.getElementById("expeditionPercent");
    const expeditionInterval = setInterval(() => {
      expedition = Math.min(expedition + Math.random() * 3, 68);
      expeditionFill.style.width = expedition + "%";
      expeditionPercent.textContent = expedition.toFixed(0);
      if (expedition >= 68) clearInterval(expeditionInterval);
    }, 900);
  
    let factIndex = 0;
    const factText = document.getElementById("factText");
    const factsDots = document.getElementById("factsDots");
    factsDots.innerHTML = factsData.map((_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("");
  
    function renderFact() {
      factText.textContent = factsData[factIndex];
      factsDots.querySelectorAll("span").forEach((dot, i) => dot.classList.toggle("active", i === factIndex));
    }
    renderFact();
  
    document.getElementById("factNext").addEventListener("click", () => {
      factIndex = (factIndex + 1) % factsData.length;
      renderFact();
    });
    document.getElementById("factPrev").addEventListener("click", () => {
      factIndex = (factIndex - 1 + factsData.length) % factsData.length;
      renderFact();
    });
    setInterval(() => {
      factIndex = (factIndex + 1) % factsData.length;
      renderFact();
    }, 6000);
  }
  
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 500);
    });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
  function initCursorGlow() {
    const glow = document.getElementById("cursorGlow");
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.addEventListener("mousemove", e => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
    document.addEventListener("mouseleave", () => {
      glow.style.opacity = "0";
    });
  }
  
  function initNavCollapse() {
    const links = document.querySelectorAll(".navbar-nav .nav-link, .nav-cta");
    const collapseEl = document.getElementById("navMenu");
    links.forEach(link => {
      link.addEventListener("click", () => {
        if (collapseEl.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
          bsCollapse.hide();
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initPlanetExplorer();
    initGallery();
    initQuiz();
    initStatObserver();
    initDashboard();
    initBackToTop();
    initCursorGlow();
    initNavCollapse();
  });
