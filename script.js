document.addEventListener("DOMContentLoaded", () => {
  const STEMS = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
  const STEMS_HANJA = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  const BRANCHES = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
  const BRANCHES_HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

  const ARTWORK_BASE =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

  const RESULT_DATA = {
    갑: {
      theme: "theme-wood",
      pokemonName: "나무지기",
      img: `${ARTWORK_BASE}/252.png`,
      subtitle: "목표를 향해 곧게 뻗어 나가는 조별과제 조장 리더",
      keywords: ["#추진력", "#솔직담백", "#직진리더"],
      desc: "새 학기 팀플이나 프로젝트를 시작할 때 가장 먼저 앞장서는 에너지를 가졌습니다. 눈치를 보기보다 정면 돌파하는 편이며, 한번 목표를 정하면 밤을 새워서라도 끝까지 밀고 나가는 힘이 있습니다.",
      hap: { target: "기", label: "천간합 · 갑기합토", reason: "거침없는 추진력을 현실적인 일정표로 다듬어주는 팀플 짝꿍" },
      sangsaeng: { target: "임", label: "상생 · 수생목", reason: "넓은 시야와 레퍼런스로 아이디어를 채워주는 시험기간 조력자" }
    },
    을: {
      theme: "theme-wood",
      pokemonName: "나몰빼미",
      img: `${ARTWORK_BASE}/722.png`,
      subtitle: "어떤 팀에서도 제 몫을 해내는 유연한 전략가",
      keywords: ["#섬세함", "#끈기", "#적응력만렙"],
      desc: "겉으로는 부드럽고 친화력이 좋지만 내면에는 쉽게 꺾이지 않는 단단한 심지가 있습니다. 팀원들의 의견을 조율하고 현실적인 해법을 찾아내는 감각이 뛰어납니다.",
      hap: { target: "경", label: "천간합 · 을경합금", reason: "유연한 기획에 단단한 결단력과 마감력을 더해주는 환상의 짝" },
      sangsaeng: { target: "계", label: "상생 · 수생목", reason: "섬세한 직관으로 막막한 시험범위의 핵심을 짚어주는 존재" }
    },
    병: {
      theme: "theme-fire",
      pokemonName: "파이리",
      img: `${ARTWORK_BASE}/4.png`,
      subtitle: "어색한 첫 수업 분위기도 녹이는 태양 에너지 센터",
      keywords: ["#분위기메이커", "#긍정에너지", "#발표장인"],
      desc: "어색한 개강 첫 주나 동아리 모임 분위기를 단숨에 환하게 만드는 매력이 있습니다. 표현력이 풍부해 발표나 대외활동에서 자연스럽게 중심 역할을 맡습니다.",
      hap: { target: "신", label: "천간합 · 병신합수", reason: "뜨거운 열정에 꼼꼼한 디테일과 PPT 완성도를 입혀주는 짝꿍" },
      sangsaeng: { target: "갑", label: "상생 · 목생화", reason: "에너지가 방전되지 않도록 든든하게 페이스 맞춰주는 동기" }
    },
    정: {
      theme: "theme-fire",
      pokemonName: "식스테일",
      img: `${ARTWORK_BASE}/37.png`,
      subtitle: "차분함 속에 뜨거운 몰입력을 품은 디테일 장인",
      keywords: ["#집중력", "#감수성", "#반전매력"],
      desc: "평소에는 차분하고 사려 깊지만, 전공이나 관심 분야에 빠지면 도서관에서 누구보다 뜨거운 집중력을 발휘합니다. 남들이 놓치는 족보 포인트를 잘 짚어냅니다.",
      hap: { target: "임", label: "천간합 · 정임합목", reason: "깊은 통찰과 섬세한 자료 정리가 만나 A+을 만드는 팀플 짝" },
      sangsaeng: { target: "을", label: "상생 · 목생화", reason: "지치지 않게 곁에서 커피 한 잔 건네며 힘을 실어주는 친구" }
    },
    무: {
      theme: "theme-earth",
      pokemonName: "잠만보",
      img: `${ARTWORK_BASE}/143.png`,
      subtitle: "시험기간에도 흔들리지 않는 묵직한 든든한 버팀목",
      keywords: ["#신뢰감", "#포용력", "#멘탈갑"],
      desc: "주변의 촉박한 분위기에 쉽게 휘둘리지 않고 자기 페이스를 지킵니다. 스케일이 크고 믿음직스러워 마감 직전 다급한 순간에 친구들이 가장 먼저 의지하는 중심축입니다.",
      hap: { target: "계", label: "천간합 · 무계합화", reason: "묵직한 안정감에 기발한 기획 아이디어를 더해주는 최고의 짝" },
      sangsaeng: { target: "병", label: "상생 · 화생토", reason: "활기찬 텐션으로 무기력함을 깨워주는 든든한 캠퍼스 응원군" }
    },
    기: {
      theme: "theme-earth",
      pokemonName: "이브이",
      img: `${ARTWORK_BASE}/133.png`,
      subtitle: "자료 조사부터 정리까지 야무지게 해내는 올라운더",
      keywords: ["#실용주의", "#배려심", "#다재다능"],
      desc: "현실 감각이 뛰어나고 문서 정리나 실무 능력이 좋습니다. 팀원들을 세심하게 챙기면서도 자신의 분량을 야무지게 완성해 내는 균형 감각을 갖추고 있습니다.",
      hap: { target: "갑", label: "천간합 · 갑기합토", reason: "큰 그림을 열어주면 빈틈없이 결과물로 완성해 내는 호흡" },
      sangsaeng: { target: "정", label: "상생 · 화생토", reason: "따뜻한 배려와 섬세한 피드백으로 마음을 채워주는 존재" }
    },
    경: {
      theme: "theme-metal",
      pokemonName: "루카리오",
      img: `${ARTWORK_BASE}/448.png`,
      subtitle: "역할 분담이 명확하고 의리 있는 단단한 승부사",
      keywords: ["#결단력", "#의리", "#깔끔한일처리"],
      desc: "기준이 명확하고 옳고 그름이 분명한 성격입니다. 한번 마음먹으면 군더더기 없이 깔끔하게 과제를 끝내며, 맡은 파트에 대한 책임감이 매우 강합니다.",
      hap: { target: "을", label: "천간합 · 을경합금", reason: "단호한 추진력을 부드럽게 감싸주며 시너지를 내는 짝꿍" },
      sangsaeng: { target: "무", label: "상생 · 토생금", reason: "예민해질 때마다 묵직하게 멘탈을 잡아주는 든든한 버팀목" }
    },
    신: {
      theme: "theme-metal",
      pokemonName: "님피아",
      img: `${ARTWORK_BASE}/700.png`,
      subtitle: "예리한 감각으로 퀄리티를 끌어올리는 보석 세공사",
      keywords: ["#완벽주의", "#미적감각", "#날카로운직관"],
      desc: "섬세하고 정교한 감각을 지녀 PPT 디자인이나 보고서 완성도를 높이는 데 강점이 있습니다. 자기 관리가 철저해 어디서든 세련된 인상을 남깁니다.",
      hap: { target: "병", label: "천간합 · 병신합수", reason: "예리한 감각을 환하게 빛내주며 텐션을 높여주는 태양 같은 짝" },
      sangsaeng: { target: "기", label: "상생 · 토생금", reason: "실속 있게 일정을 챙겨주며 능력을 꽃피우게 돕는 조력자" }
    },
    임: {
      theme: "theme-water",
      pokemonName: "꼬부기",
      img: `${ARTWORK_BASE}/7.png`,
      subtitle: "틀에 갇히지 않고 유연하게 돌파하는 캠퍼스 탐험가",
      keywords: ["#아이디어뱅크", "#유연함", "#통찰력"],
      desc: "고정관념에 얽매이지 않고 새로운 분야를 빠르게 흡수합니다. 상황을 넓게 조망하는 시야가 있어 막막한 과제에서도 의외의 돌파구를 잘 찾아냅니다.",
      hap: { target: "정", label: "천간합 · 정임합목", reason: "넓은 시야에 섬세한 집중력을 더해 결과를 만드는 환상의 짝" },
      sangsaeng: { target: "경", label: "상생 · 금생수", reason: "명확한 방향을 잡아주어 시험 공부를 효율적으로 이끄는 존재" }
    },
    계: {
      theme: "theme-water",
      pokemonName: "팽도리",
      img: `${ARTWORK_BASE}/393.png`,
      subtitle: "조용하지만 강한 직관과 기획력을 지닌 감성파",
      keywords: ["#직관력", "#기획감각", "#섬세한센스"],
      desc: "상황과 사람의 마음을 읽는 센스가 뛰어납니다. 겉으로 드러내지 않아도 머릿속에서 치밀하게 그림을 그리며, 참신한 아이디어로 팀에 영감을 줍니다.",
      hap: { target: "무", label: "천간합 · 무계합화", reason: "섬세한 아이디어를 현실적인 결과물로 구현해 주는 든든한 짝" },
      sangsaeng: { target: "신", label: "상생 · 금생수", reason: "예리한 감각으로 기획의 완성도를 한 단계 높여주는 파트너" }
    }
  };

  /* ───────── 1. 생년월일 드롭다운 최우선 초기화 ───────── */
  const YEAR_MIN = 1930;
  const YEAR_MAX = 2050;

  const yearSel = document.getElementById("birth-year");
  const monthSel = document.getElementById("birth-month");
  const daySel = document.getElementById("birth-day");
  const leapWrap = document.getElementById("leap-wrap");
  const leapCheck = document.getElementById("is-leap");
  const dateError = document.getElementById("date-error");

  function getRadio(name, fallback) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : fallback;
  }

  function fillSelect(sel, from, to, suffix, selected) {
    if (!sel) return;
    sel.innerHTML = "";
    const step = from <= to ? 1 : -1;
    for (let v = from; step > 0 ? v <= to : v >= to; v += step) {
      const opt = document.createElement("option");
      opt.value = String(v);
      opt.textContent = `${v}${suffix}`;
      if (v === selected) opt.selected = true;
      sel.appendChild(opt);
    }
  }

  function getMaxDaysInMonth(calendar, y, m, isLeap) {
    if (calendar === "solar") {
      return new Date(Date.UTC(y, m, 0)).getUTCDate();
    }
    if (typeof KoreanLunarCalendar !== "undefined") {
      const cal = new KoreanLunarCalendar();
      if (cal.setLunarDate(y, m, 30, isLeap)) return 30;
      if (cal.setLunarDate(y, m, 29, isLeap)) return 29;
    }
    return 30;
  }

  function refreshDays() {
    if (!yearSel || !monthSel || !daySel) return;
    const y = Number(yearSel.value) || 2004;
    const m = Number(monthSel.value) || 1;
    const calendar = getRadio("calendar", "solar");
    const isLeap = calendar === "lunar" && Boolean(leapCheck && leapCheck.checked);
    const current = Number(daySel.value) || 1;
    const maxDay = getMaxDaysInMonth(calendar, y, m, isLeap);
    fillSelect(daySel, 1, maxDay, "일", Math.min(current, maxDay));
  }

  fillSelect(yearSel, YEAR_MAX, YEAR_MIN, "년", 2004);
  fillSelect(monthSel, 1, 12, "월", 1);
  fillSelect(daySel, 1, 31, "일", 1);

  const hideDateError = () => {
    if (dateError) dateError.classList.add("hidden");
  };

  yearSel?.addEventListener("change", () => {
    hideDateError();
    refreshDays();
  });
  monthSel?.addEventListener("change", () => {
    hideDateError();
    refreshDays();
  });
  daySel?.addEventListener("change", hideDateError);
  leapCheck?.addEventListener("change", () => {
    hideDateError();
    refreshDays();
  });

  document.querySelectorAll('input[name="calendar"]').forEach((r) =>
    r.addEventListener("change", () => {
      const isLunar = getRadio("calendar", "solar") === "lunar";
      leapWrap?.classList.toggle("hidden", !isLunar);
      if (!isLunar && leapCheck) leapCheck.checked = false;
      hideDateError();
      refreshDays();
    })
  );

  /* ───────── 2. 사주 명식 및 오행 계산 ───────── */
  function makePillar(stemIdx, branchIdx) {
    return {
      stemIdx,
      branchIdx,
      stem: STEMS[stemIdx],
      branch: BRANCHES[branchIdx],
      hanja: `${STEMS_HANJA[stemIdx]}${BRANCHES_HANJA[branchIdx]}`
    };
  }

  function getDayPillar(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const baseUtc = Date.UTC(2000, 0, 1);
    const targetUtc = Date.UTC(year, month - 1, day);
    const diffDays = Math.floor((targetUtc - baseUtc) / (1000 * 60 * 60 * 24));

    const index60 = (((54 + diffDays) % 60) + 60) % 60;
    return makePillar(index60 % 10, index60 % 12);
  }

  const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
  const HOUR_CENTER = {
    자: 0.5, 축: 2.5, 인: 4.5, 묘: 6.5, 진: 8.5, 사: 10.5,
    오: 12.5, 미: 14.5, 신: 16.5, 유: 18.5, 술: 20.5, 해: 22.5, unknown: 12
  };

  function sunLongitude(utcMs) {
    const jd = utcMs / 86400000 + 2440587.5 + 69 / 86400;
    const T = (jd - 2451545) / 36525;
    const rad = Math.PI / 180;
    const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) * rad;
    const C =
      (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M) +
      (0.019993 - 0.000101 * T) * Math.sin(2 * M) +
      0.000289 * Math.sin(3 * M);
    const omega = (125.04 - 1934.136 * T) * rad;
    const lon = L0 + C - 0.00569 - 0.00478 * Math.sin(omega);
    return ((lon % 360) + 360) % 360;
  }

  function monthIndexAt(utcMs) {
    return Math.floor(((sunLongitude(utcMs) - 315 + 360) % 360) / 30);
  }

  function kstToUtcMs(y, m, d, hours) {
    return Date.UTC(y, m - 1, d) + hours * 3600000 - KST_OFFSET_MS;
  }

  function getFourPillars(dateStr, birthTime) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const moment = kstToUtcMs(y, m, d, HOUR_CENTER[birthTime] ?? 12);

    const monthIdx = monthIndexAt(moment);

    const sajuYear = m <= 2 && monthIdx >= 10 ? y - 1 : y;
    const yearStemIdx = (((sajuYear - 4) % 10) + 10) % 10;
    const yearBranchIdx = (((sajuYear - 4) % 12) + 12) % 12;
    const yearP = makePillar(yearStemIdx, yearBranchIdx);

    const monthStemIdx = ((yearStemIdx % 5) * 2 + 2 + monthIdx) % 10;
    const monthBranchIdx = (monthIdx + 2) % 12;
    const monthP = makePillar(monthStemIdx, monthBranchIdx);

    const dayP = getDayPillar(dateStr);

    let hourP = null;
    if (birthTime !== "unknown") {
      const hourBranchIdx = BRANCHES.indexOf(birthTime);
      const hourStemIdx = ((dayP.stemIdx % 5) * 2 + hourBranchIdx) % 10;
      hourP = makePillar(hourStemIdx, hourBranchIdx);
    }

    const boundaryDay =
      birthTime === "unknown" &&
      monthIndexAt(kstToUtcMs(y, m, d, 0)) !== monthIndexAt(kstToUtcMs(y, m, d, 23.99));

    return { year: yearP, month: monthP, day: dayP, hour: hourP, boundaryDay };
  }

  const ELEMENTS = [
    { key: "wood", name: "목", hanja: "木", trait: "성장·기획" },
    { key: "fire", name: "화", hanja: "火", trait: "열정·표현" },
    { key: "earth", name: "토", hanja: "土", trait: "안정·신뢰" },
    { key: "metal", name: "금", hanja: "金", trait: "결단·원칙" },
    { key: "water", name: "수", hanja: "水", trait: "지혜·유연" }
  ];

  const STEM_ELEMENT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
  const BRANCH_ELEMENT = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];

  const ELEMENT_CONFETTI_COLORS = {
    0: ["#22c55e", "#4ade80", "#86efac", "#ffffff"],
    1: ["#ef4444", "#f97316", "#fca5a5", "#fde047"],
    2: ["#eab308", "#facc15", "#fef08a", "#f59e0b"],
    3: ["#ffffff", "#e2e8f0", "#fbbf24", "#cbd5e1"],
    4: ["#3b82f6", "#38bdf8", "#93c5fd", "#ffffff"]
  };

  function countElements(pillars) {
    const counts = [0, 0, 0, 0, 0];
    [pillars.year, pillars.month, pillars.day, pillars.hour].forEach((p) => {
      if (!p) return;
      counts[STEM_ELEMENT[p.stemIdx]]++;
      counts[BRANCH_ELEMENT[p.branchIdx]]++;
    });
    return counts;
  }

  function renderPillarTable(pillars) {
    const table = document.getElementById("pillar-table");
    if (!table) return;
    const cols = [
      { label: "시주", p: pillars.hour },
      { label: "일주", p: pillars.day, me: true },
      { label: "월주", p: pillars.month },
      { label: "년주", p: pillars.year }
    ];

    const cell = (idx, hanja, hangul, elementIdx) =>
      idx === null
        ? `<div class="glyph glyph-empty"><span class="glyph-hanja">?</span><span class="glyph-hangul">모름</span></div>`
        : `<div class="glyph el-${ELEMENTS[elementIdx].key}">
             <span class="glyph-hanja">${hanja}</span>
             <span class="glyph-hangul">${hangul}${ELEMENTS[elementIdx].name}</span>
           </div>`;

    table.innerHTML = cols
      .map(({ label, p, me }) => {
        const stem = p ? cell(p.stemIdx, STEMS_HANJA[p.stemIdx], p.stem, STEM_ELEMENT[p.stemIdx]) : cell(null);
        const branch = p
          ? cell(p.branchIdx, BRANCHES_HANJA[p.branchIdx], p.branch, BRANCH_ELEMENT[p.branchIdx])
          : cell(null);
        return `<div class="pillar-col${me ? " is-me" : ""}">
                  <span class="pillar-label">${label}${me ? " · 나" : ""}</span>
                  ${stem}${branch}
                </div>`;
      })
      .join("");
  }

  function renderElementChart(counts, total) {
    const chart = document.getElementById("element-chart");
    const summaryEl = document.getElementById("element-summary");
    if (!chart || !summaryEl) return;

    const max = Math.max(...counts);
    chart.innerHTML = ELEMENTS.map((el, i) => {
      const pct = Math.round((counts[i] / total) * 100);
      return `<div class="el-row">
                <span class="el-name">${el.name}<small>${el.hanja}</small></span>
                <div class="el-track"><div class="el-bar el-${el.key}" style="width:${pct}%"></div></div>
                <span class="el-count${counts[i] === max ? " is-max" : ""}">${counts[i]}개</span>
              </div>`;
    }).join("");

    const strongest = ELEMENTS.filter((_, i) => counts[i] === max);
    const missing = ELEMENTS.filter((_, i) => counts[i] === 0);
    let summary = `<strong>${strongest.map((e) => `${e.name}(${e.hanja})`).join("·")}</strong> 기운이 가장 강해요 — ${strongest
      .map((e) => e.trait)
      .join(", ")}이 나의 무기!`;
    if (missing.length) {
      summary += ` 반면 <strong>${missing.map((e) => `${e.name}(${e.hanja})`).join("·")}</strong> 기운은 비어 있어서, 이 기운을 가진 파트너가 큰 힘이 돼요.`;
    } else {
      summary += " 다섯 가지 기운이 모두 있는 균형 잡힌 사주예요.";
    }
    summaryEl.innerHTML = summary;
  }

  const YANG_STEMS = ["갑", "병", "무", "경", "임"];
  const YINYANG_TEXT = {
    same: {
      tag: "음양 일치형",
      text: "타고난 기운과 성별의 음양이 같은 방향이에요. 꾸밈없이 본래 성향이 그대로 드러나서, 학기 초 처음 만난 동기들도 '딱 보이는 그대로'라고 느끼는 타입입니다."
    },
    cross: {
      tag: "반전 매력형",
      text: "타고난 기운과 성별의 음양이 서로 엇갈려요. 첫인상과 친해진 뒤의 모습이 달라서, 같은 조나 동아리에서 오래 볼수록 의외의 매력이 터지는 타입입니다."
    }
  };

  /* ───────── 3. 오늘의 캠퍼스 운세 ───────── */
  const FORTUNE_DATA = {
    비견: {
      overall: "주관이 뚜렷해지고 내 공부 페이스를 지키기 좋은 날이에요. 주변 진도에 흔들리지 않고 내 할 일에 집중하면 성과가 따릅니다.",
      study: { level: "상승", tone: "good", text: "도서관이나 스터디카페에서 혼자 밀고 나가는 집중력이 강해집니다. 밀린 전공 복습이나 개인 과제를 끝내기에 딱 좋아요." },
      money: { level: "안정", tone: "steady", text: "큰 지출은 없지만 동기들과의 학식·카페 모임으로 소소한 지출이 생길 수 있어요. 오늘 쓸 예산 선만 미리 정해두세요." },
      love: { level: "무난", tone: "steady", text: "편안한 동기·친구 같은 대화가 잘 통합니다. 다만 의견이 갈릴 땐 고집을 살짝 내려놓으면 분위기가 훨씬 부드러워져요." },
      rest: { level: "충전", tone: "good", text: "공강 시간엔 여럿이 어울리기보다 이어폰을 끼고 혼자만의 여유를 즐기는 편이 오후 수업 집중에 훨씬 유리합니다." }
    },
    겁재: {
      overall: "승부욕과 의욕이 올라오지만 충동적인 결정은 조심해야 하는 날이에요. 페이스를 조절하면 바쁜 일정도 거뜬히 넘길 수 있습니다.",
      study: { level: "상승", tone: "good", text: "선의의 경쟁심이 좋은 자극이 됩니다. 친구와 타이머를 맞춰 놓고 분량 내기 공부를 하면 평소보다 속도가 확 붙어요." },
      money: { level: "주의", tone: "care", text: "스트레스성 배달음식이나 충동 쇼핑이 당기기 쉬운 날입니다. 장바구니 결제 버튼을 누르기 전 하루만 더 고민해 보세요." },
      love: { level: "신중", tone: "care", text: "사소한 질투심이나 자존심이 올라올 수 있어요. 틱틱거리기보다 솔직한 마음을 차분히 전하는 편이 오해를 줄여줍니다." },
      rest: { level: "관리", tone: "steady", text: "무리한 밤샘이나 빡빡한 약속은 체력 방전으로 이어질 수 있어요. 오늘은 일찍 귀가해 수면 시간을 확보하는 게 최고입니다." }
    },
    식신: {
      overall: "마음에 여유가 생기고 아이디어와 표현력이 자연스럽게 흘러나오는 기분 좋은 캠퍼스 데이입니다.",
      study: { level: "매우 좋음", tone: "high", text: "한 가지 주제에 깊게 몰입하는 힘이 발휘됩니다. 단순 암기보다 백지에 직접 개념을 정리해 보는 공부법이 특히 잘 먹혀요." },
      money: { level: "상승", tone: "good", text: "알바나 꾸준한 노력이 기분 좋은 보상으로 돌아옵니다. 나를 위한 맛있는 학식 특식이나 달달한 디저트 소비는 길해요." },
      love: { level: "매우 좋음", tone: "high", text: "다정하고 유쾌한 매력이 돋보여 동아리나 수업에서 자연스럽게 호감을 얻습니다. 가벼운 스몰토크가 좋은 인연으로 이어져요." },
      rest: { level: "최고", tone: "high", text: "공강 시간에 맛집을 탐방하거나 취미 생활을 즐기면 스트레스가 말끔히 풀립니다. 기분 전환이 곧 학업 효율로 연결돼요." }
    },
    상관: {
      overall: "감각이 예리해지고 기존의 틀을 깨는 기발한 아이디어가 떠오르는 날이에요. 팀플이나 대화에서 말투만 살짝 부드럽게 다듬어 보세요.",
      study: { level: "매우 좋음", tone: "high", text: "기획안 작성, 발표, 레포트 구성에서 뛰어난 센스를 발휘합니다. 안 풀리던 문제도 다른 관점으로 접근하면 의외로 쉽게 풀려요." },
      money: { level: "변동", tone: "steady", text: "단기 알바나 공모전·이벤트 혜택 소식이 보이지만, 기분에 따른 소비도 함께 커질 수 있으니 지출 내역을 한 번 체크하세요." },
      love: { level: "매력 상승", tone: "good", text: "센스 있는 리액션과 솔직한 표현으로 시선을 끕니다. 직설적인 농담만 조금 조심하면 호감도가 급상승하는 날이에요." },
      rest: { level: "활력", tone: "good", text: "답답한 열람실보다 새로운 카페나 캠퍼스 산책로를 걸으며 머리를 식히면 막혔던 생각이 시원하게 정리됩니다." }
    },
    편재: {
      overall: "활동 반경이 넓어지고 새로운 기회와 캠퍼스 정보가 빠르게 들어오는 역동적인 날입니다.",
      study: { level: "무난", tone: "steady", text: "주변에서 부르는 곳도 많고 연락도 잦아 집중력이 흩어질 수 있어요. 스마트폰 알림을 꺼두고 50분 단위 집중 루틴을 돌려보세요." },
      money: { level: "매우 좋음", tone: "high", text: "뜻밖의 용돈, 쿠폰 이벤트, 알바 보너스 등 기분 좋은 재물 흐름이 들어옵니다. 다만 들어온 만큼 한 번에 쓰지 않도록 관리하세요." },
      love: { level: "상승", tone: "good", text: "연합 동아리, 교양 수업, 개강·종강 모임처럼 새로운 자리에서 설레는 인연을 만날 확률이 높습니다. 먼저 반갑게 인사해 보세요." },
      rest: { level: "적극", tone: "good", text: "가만히 누워 있기보다 친구들과 가볍게 어울리거나 새로운 장소를 탐방할 때 오히려 에너지가 충전되는 날입니다." }
    },
    정재: {
      overall: "성실하게 쌓아온 노력이 학점과 현실적인 결과로 이어지는 안정적이고 든든한 날이에요.",
      study: { level: "매우 좋음", tone: "high", text: "꼼꼼함과 지구력이 빛을 발합니다. 오답 노트 정리, 출석·과제 마감 체크처럼 디테일이 중요한 전공 공부에 가장 강해요." },
      money: { level: "매우 좋음", tone: "high", text: "계획적인 소비와 알바비 저축에 최적화된 날입니다. 불필요한 정기구독을 정리하거나 필요한 전공 서적을 합리적으로 구하기 좋아요." },
      love: { level: "안정", tone: "good", text: "진중하고 믿음직한 태도가 상대에게 깊은 신뢰를 줍니다. 사소한 약속이라도 정확히 지키면 호감이 단단하게 자리 잡아요." },
      rest: { level: "평온", tone: "good", text: "밀린 방 정리나 다음 주 시간표·일정표를 깔끔하게 정돈하며 보내는 공강 시간이 마음의 안정을 가져다줍니다." }
    },
    편관: {
      overall: "과제나 일정 압박감이 느껴질 수 있지만, 정면으로 돌파해 내면 한 단계 성장하는 계기가 되는 날입니다.",
      study: { level: "상승", tone: "good", text: "마감이 임박한 과제나 퀴즈 대비에서 놀라운 추진력이 나옵니다. 우선순위 1가지를 정해 끝까지 밀어붙여 보세요." },
      money: { level: "안정", tone: "steady", text: "돈을 쓰기보다 학업과 일정을 소화하느라 바쁜 하루입니다. 컨디션 유지를 위한 영양제나 따뜻한 식사 지출은 아끼지 마세요." },
      love: { level: "설렘", tone: "good", text: "자기 일에 몰입하는 진지한 모습이나 평소와 다른 반전 스타일의 사람에게 끌릴 수 있어요. 과한 긴장만 풀면 좋은 흐름이 옵니다." },
      rest: { level: "주의", tone: "care", text: "과부하가 걸리기 쉬운 날이니 공강 시간만큼은 과제 생각을 잠시 내려놓고 눈을 감거나 스트레칭으로 긴장을 풀어주세요." }
    },
    정관: {
      overall: "교수님과 팀원들에게 신뢰를 얻기 좋은 반듯한 기운의 날이에요. 정석대로 차분하게 움직이면 모든 일이 순조롭습니다.",
      study: { level: "매우 좋음", tone: "high", text: "규칙적인 공부 루틴이 완벽하게 작동합니다. 강의 내용을 빠짐없이 필기하고 계획표대로 진도를 나가면 기대 이상의 성취감을 얻어요." },
      money: { level: "안정", tone: "good", text: "정당한 알바 급여나 장학·근로 혜택처럼 안정적인 수입 흐름이 유지됩니다. 계획에 없던 지출만 피하면 지갑이 든든해요." },
      love: { level: "매우 좋음", tone: "high", text: "예의 바르고 진정성 있는 태도가 좋은 인연을 부릅니다. 소개팅이나 진지한 대화를 나누기에 더없이 좋은 기운의 날이에요." },
      rest: { level: "균형", tone: "good", text: "낮에는 집중해서 움직이고 저녁에는 정해진 시간에 딱 쉬어주는 규칙적인 리듬이 내일 컨디션까지 최상으로 만들어 줍니다." }
    },
    편인: {
      overall: "직관력과 통찰이 깊어지는 날이에요. 겉으로 드러나는 분주함보다 내면의 생각과 전공 개념을 깊이 파고드는 데 유리합니다.",
      study: { level: "상승", tone: "good", text: "남들이 놓치는 핵심 원리를 꿰뚫어 보는 날입니다. 심화 개념 이해나 논문·자료 리서치에서 뛰어난 집중력을 발휘해요." },
      money: { level: "주의", tone: "care", text: "정보가 많을수록 판단이 흔들릴 수 있어요. 충동적인 인강·앱 결제나 큰 금액이 나가는 소비는 내일로 미루는 편이 좋습니다." },
      love: { level: "신중", tone: "steady", text: "혼자만의 시간이 필요하거나 생각이 많아질 수 있어요. 연락이 조금 늦어질 땐 미리 솔직하게 컨디션을 공유하면 편안해집니다." },
      rest: { level: "최고", tone: "high", text: "조용한 공간에서 좋아하는 음악을 듣거나 낮잠을 자며 에너지를 비축하는 공강 시간이 최고의 보약이 됩니다." }
    },
    정인: {
      overall: "주변의 도움과 따뜻한 응원이 따라주는 편안한 날이에요. 배움과 휴식을 통해 에너지를 충전하기 좋습니다.",
      study: { level: "매우 좋음", tone: "high", text: "이해력과 흡수력이 최고조에 달하는 날입니다. 교수님 설명이나 온라인 강의, 자격증·어학 공부 모두 막힘없이 머리에 잘 들어와요." },
      money: { level: "상승", tone: "good", text: "선배나 주변으로부터 기프티콘·밥약 선물을 받거나 실질적인 도움을 얻기 쉽습니다. 책이나 자기계발 투자가 길해요." },
      love: { level: "매우 좋음", tone: "high", text: "상대의 마음을 잘 헤아려 주는 배려심 덕분에 관계가 한층 따뜻해집니다. 고마웠던 동기나 호감 가는 사람에게 먼저 연락해 보세요." },
      rest: { level: "충전", tone: "good", text: "마음이 편안해지는 날이라 짧은 휴식만으로도 피로가 빠르게 풀립니다. 좋아하는 음료 한 잔과 함께 여유로운 하루를 보내세요." }
    }
  };

  function getTenGod(myStemIdx, targetStemIdx) {
    const myEl = Math.floor(myStemIdx / 2);
    const targetEl = Math.floor(targetStemIdx / 2);
    const samePol = myStemIdx % 2 === targetStemIdx % 2;
    const diff = (targetEl - myEl + 5) % 5;

    const table = [
      ["비견", "겁재"],
      ["식신", "상관"],
      ["편재", "정재"],
      ["편관", "정관"],
      ["편인", "정인"]
    ];
    return table[diff][samePol ? 0 : 1];
  }

  function renderTodayFortune(myStemIdx) {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");

    const todayPillar = getDayPillar(`${y}-${m}-${d}`);
    const tenGod = getTenGod(myStemIdx, todayPillar.stemIdx);
    const f = FORTUNE_DATA[tenGod];

    const tagEl = document.getElementById("today-pillar-tag");
    const overallEl = document.getElementById("fortune-overall");
    if (tagEl) {
      tagEl.textContent = `${now.getMonth() + 1}.${now.getDate()} ${todayPillar.stem}${todayPillar.branch}(${todayPillar.hanja})일 · ${tenGod}`;
    }
    if (overallEl) overallEl.textContent = f.overall;

    const setItem = (key, data) => {
      const badge = document.getElementById(`fortune-${key}-badge`);
      const textEl = document.getElementById(`fortune-${key}-text`);
      if (badge) {
        badge.textContent = data.level;
        badge.className = `fortune-badge badge-${data.tone}`;
      }
      if (textEl) textEl.textContent = data.text;
    };

    setItem("study", f.study);
    setItem("money", f.money);
    setItem("love", f.love);
    setItem("rest", f.rest);
  }

  /* ───────── 4. 공통 유틸 및 친구 궁합 ───────── */
  function getBaseUrl() {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    return url;
  }

  function scrollToTopInstant() {
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function setPokemonImage(el, src, alt) {
    if (!el) return;
    el.crossOrigin = "anonymous";
    el.src = src;
    el.alt = alt;
  }

  async function waitForImages(container) {
    if (!container) return;
    const imgs = Array.from(container.querySelectorAll("img")).filter((img) => img.src);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
            })
      )
    );
  }

  let invitedFriend = null;

  function parseFriendFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const fp = params.get("fp");
    if (!fp || fp.length !== 2) return null;

    const stemIdx = STEMS.indexOf(fp[0]);
    const branchIdx = BRANCHES.indexOf(fp[1]);
    if (stemIdx === -1 || branchIdx === -1) return null;

    const rawName = (params.get("fn") || "").trim().slice(0, 10);
    const name = rawName || "친구";
    const pillar = makePillar(stemIdx, branchIdx);
    const info = RESULT_DATA[fp[0]];
    return { name, pillar, info };
  }

  function initFriendInviteBanner() {
    invitedFriend = parseFriendFromUrl();
    const banner = document.getElementById("friend-invite-banner");
    if (!banner) return;
    if (!invitedFriend) {
      banner.classList.add("hidden");
      return;
    }

    setPokemonImage(
      document.getElementById("friend-invite-img"),
      invitedFriend.info.img,
      invitedFriend.info.pokemonName
    );
    const titleEl = document.getElementById("friend-invite-title");
    const descEl = document.getElementById("friend-invite-desc");
    if (titleEl) {
      titleEl.textContent = `${invitedFriend.name}님의 파트너는 ${invitedFriend.info.pokemonName} (${invitedFriend.pillar.stem}${invitedFriend.pillar.branch}일주)!`;
    }
    if (descEl) {
      descEl.textContent = `내 생년월일을 입력하면 ${invitedFriend.name}님과의 팀플·우정 궁합 점수도 바로 계산해 드려요.`;
    }
    banner.classList.remove("hidden");
  }

  initFriendInviteBanner();

  document.getElementById("clear-friend-btn")?.addEventListener("click", () => {
    invitedFriend = null;
    document.getElementById("friend-invite-banner")?.classList.add("hidden");
    if (window.location.protocol !== "file:") {
      window.history.replaceState({}, "", getBaseUrl().toString());
    }
  });

  function isBranchYukHap(b1, b2) {
    return (b1 === 0 && b2 === 1) || (b1 === 1 && b2 === 0) || (b1 >= 2 && b2 >= 2 && b1 + b2 === 13);
  }

  function calcCompatibility(myPillar, friendPillar, myName, friendName) {
    const s1 = myPillar.stemIdx;
    const s2 = friendPillar.stemIdx;
    const el1 = STEM_ELEMENT[s1];
    const el2 = STEM_ELEMENT[s2];
    const yukHap = isBranchYukHap(myPillar.branchIdx, friendPillar.branchIdx);

    let score = 84;
    let headline = "";
    let desc = "";

    if ((s1 + 5) % 10 === s2) {
      score = 98;
      headline = "천간합 · 눈빛만 봐도 역할 분담 끝나는 천생연분 콤비";
      desc = `${myName}님과 ${friendName}님은 서로의 빈틈을 자석처럼 끌어당겨 채워주는 천간합 관계예요. 한 명이 기획을 열면 다른 한 명이 디테일을 완성해 조별과제 A+ 확률이 가장 높은 조합입니다.`;
    } else if ((el2 + 1) % 5 === el1) {
      score = 94;
      headline = "상생 시너지 · 나를 성장시켜 주는 특급 캠퍼스 서포터";
      desc = `${friendName}님의 기운이 ${myName}님의 에너지를 자연스럽게 북돋워 주는 상생 관계예요. 시험기간에 지칠 때 옆에 있으면 아이디어와 의욕이 샘솟는 든든한 존재입니다.`;
    } else if ((el1 + 1) % 5 === el2) {
      score = 92;
      headline = "상생 시너지 · 내가 아낌없이 챙겨주게 되는 환상의 후배·동기 케미";
      desc = `${myName}님의 기운이 ${friendName}님의 잠재력을 활짝 열어주는 상생 관계예요. 함께 팀을 이루면 자연스럽게 호흡이 맞고 결과물의 완성도가 쑥쑥 올라갑니다.`;
    } else if (s1 === s2) {
      score = 90;
      headline = "도플갱어 콤비 · 말 안 해도 취향과 속도가 똑같은 단짝";
      desc = `타고난 일간 기운이 같아서 개그 코드부터 일 처리 방식까지 소름 돋게 잘 통하는 사이예요. 공강 시간에 함께 수다 떨거나 스터디 메이트로 뭉치면 시간 가는 줄 모릅니다.`;
    } else if (el1 === el2) {
      score = 87;
      headline = "동기 케미 · 같은 방향을 바라보며 시너지를 내는 파트너";
      desc = `같은 오행 기운을 공유하면서도 음양이 달라 서로 다른 매력을 보여주는 관계예요. 비슷한 목표를 향해 달려갈 때 서로에게 가장 좋은 자극제가 되어줍니다.`;
    } else {
      score = 83;
      headline = "상호보완 듀오 · 다른 시각으로 빈틈을 메워주는 전략 파트너";
      desc = `서로 다른 오행 기운을 가지고 있어 처음엔 스타일이 다르게 느껴질 수 있지만, 막상 함께 일하면 내가 놓친 부분을 상대가 정확히 짚어주는 알짜배기 조합입니다.`;
    }

    if (yukHap) {
      score = Math.min(100, score + 2);
      desc += " 게다가 속마음(지지 육합)까지 잘 맞아 오래 함께할수록 신뢰가 깊어지는 사이예요.";
    }

    return { score, headline, desc };
  }

  function renderFriendCompatibility(myPillar, myInfo, myName) {
    const section = document.getElementById("friend-compat-section");
    if (!section) return;
    if (!invitedFriend) {
      section.classList.add("hidden");
      return;
    }

    const displayMyName = myName === "당신" ? "나" : myName;
    const result = calcCompatibility(myPillar, invitedFriend.pillar, displayMyName, invitedFriend.name);

    const scoreEl = document.getElementById("compat-score-badge");
    if (scoreEl) scoreEl.textContent = `${result.score}점`;
    setPokemonImage(document.getElementById("compat-my-img"), myInfo.img, myInfo.pokemonName);
    const myNameEl = document.getElementById("compat-my-name");
    if (myNameEl) myNameEl.textContent = `${displayMyName} (${myInfo.pokemonName})`;

    setPokemonImage(
      document.getElementById("compat-friend-img"),
      invitedFriend.info.img,
      invitedFriend.info.pokemonName
    );
    const friendNameEl = document.getElementById("compat-friend-name");
    if (friendNameEl) friendNameEl.textContent = `${invitedFriend.name} (${invitedFriend.info.pokemonName})`;

    const headEl = document.getElementById("compat-headline");
    const descEl = document.getElementById("compat-desc");
    if (headEl) headEl.textContent = result.headline;
    if (descEl) descEl.textContent = result.desc;
    section.classList.remove("hidden");
  }

  /* ───────── 5. 몬스터볼 결과 전환 연출 & 오행 폭죽 ───────── */
  const inputSection = document.getElementById("input-section");
  const resultSection = document.getElementById("result-section");

  function ensurePokeballOverlay() {
    let overlay = document.getElementById("pokeball-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "pokeball-overlay";
      overlay.className = "pokeball-overlay hidden";
      overlay.setAttribute("aria-hidden", "true");
      overlay.innerHTML = `
        <div class="pokeball-stage">
          <div class="pokeball" id="pokeball-el">
            <div class="pokeball-top"></div>
            <div class="pokeball-band"></div>
            <div class="pokeball-button"></div>
            <div class="pokeball-bottom"></div>
          </div>
          <div class="pokeball-flash" id="pokeball-flash"></div>
          <p class="pokeball-text">사주와 찰떡인 파트너를 찾는 중...</p>
        </div>
      `;
      document.body.appendChild(overlay);
    }
    return {
      overlay,
      ball: document.getElementById("pokeball-el"),
      flash: document.getElementById("pokeball-flash")
    };
  }

  function fireElementConfetti(elementIdx) {
    if (typeof confetti !== "function") return;
    const colors = ELEMENT_CONFETTI_COLORS[elementIdx] || ELEMENT_CONFETTI_COLORS[0];

    confetti({
      particleCount: 80,
      spread: 75,
      startVelocity: 40,
      origin: { y: 0.45 },
      zIndex: 10000,
      colors
    });
  }

  let isTransitioning = false;

  async function transitionToResult(pokemonImgUrl, elementIdx) {
    if (isTransitioning) return;
    isTransitioning = true;

    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    document.getElementById("copy-msg")?.classList.add("hidden");
    const { overlay, ball, flash } = ensurePokeballOverlay();

    const preload = new Promise((res) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = res;
      img.onerror = res;
      img.src = pokemonImgUrl;
    });

    ball.classList.remove("is-shaking");
    flash.classList.remove("is-flashing");
    overlay.classList.remove("hidden");
    void ball.offsetWidth;
    ball.classList.add("is-shaking");

    const animDelay = new Promise((res) => {
      setTimeout(() => flash.classList.add("is-flashing"), 1250);
      setTimeout(res, 1650);
    });

    await Promise.all([preload, animDelay]);

    overlay.classList.add("hidden");
    inputSection?.classList.add("hidden");
    resultSection?.classList.remove("hidden");
    scrollToTopInstant();

    if (resultSection) {
      resultSection.classList.remove("result-pop-in");
      void resultSection.offsetWidth;
      resultSection.classList.add("result-pop-in");
    }

    requestAnimationFrame(() => {
      scrollToTopInstant();
      fireElementConfetti(elementIdx);
    });

    if (submitBtn) submitBtn.disabled = false;
    isTransitioning = false;
  }

  /* ───────── 6. 폼 제출 및 버튼 이벤트 ───────── */
  const form = document.getElementById("test-form");
  let latestMyPillar = null;
  let latestUserName = "친구";

  function showDateError(msg) {
    if (!dateError) return;
    dateError.textContent = msg;
    dateError.classList.remove("hidden");
  }

  function toSolarDate(calendar, y, m, d, isLeap) {
    const pad = (n) => String(n).padStart(2, "0");
    if (calendar === "solar") return `${y}-${pad(m)}-${pad(d)}`;

    if (typeof KoreanLunarCalendar === "undefined") {
      showDateError("음력 변환 기능을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.");
      return null;
    }
    const cal = new KoreanLunarCalendar();
    if (!cal.setLunarDate(y, m, d, isLeap)) {
      showDateError(
        isLeap
          ? `음력 ${y}년에는 윤${m}월이 없거나, 해당 날짜가 존재하지 않아요.`
          : `음력 ${y}년 ${m}월에는 ${d}일이 없어요. (작은 달은 29일까지)`
      );
      return null;
    }
    const s = cal.getSolarCalendar();
    return `${s.year}-${pad(s.month)}-${pad(s.day)}`;
  }

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isTransitioning) return;
    hideDateError();

    const rawInputName = (document.getElementById("user-name")?.value || "").trim();
    const userName = rawInputName || "당신";
    latestUserName = rawInputName || "친구";

    const gender = getRadio("gender", "female");
    const calendar = getRadio("calendar", "solar");
    const isLeap = calendar === "lunar" && Boolean(leapCheck && leapCheck.checked);
    const y = Number(yearSel?.value) || 2004;
    const m = Number(monthSel?.value) || 1;
    const d = Number(daySel?.value) || 1;
    const birthTime = document.getElementById("birth-time")?.value || "unknown";

    const birthDate = toSolarDate(calendar, y, m, d, isLeap);
    if (!birthDate) return;

    const pillars = getFourPillars(birthDate, birthTime);
    const pillar = pillars.day;
    const info = RESULT_DATA[pillar.stem];
    latestMyPillar = pillar;

    renderPillarTable(pillars);
    const counts = countElements(pillars);
    renderElementChart(counts, pillars.hour ? 8 : 6);
    const notes = [];
    if (!pillars.hour) notes.push("태어난 시간을 모르면 시주를 뺀 6글자로 분석해요.");
    if (pillars.boundaryDay)
      notes.push("이날은 절기가 바뀌는 날이라, 태어난 시간에 따라 월주가 달라질 수 있어요.");
    const noteEl = document.getElementById("saju-note");
    if (noteEl) {
      noteEl.textContent = notes.join(" ");
      noteEl.classList.toggle("hidden", notes.length === 0);
    }

    const timeText = birthTime === "unknown" ? "" : ` · ${birthTime}시생`;
    const pillarEl = document.getElementById("result-pillar");
    if (pillarEl) pillarEl.textContent = `${pillar.stem}${pillar.branch}(${pillar.hanja})일주${timeText}`;

    const genderText = gender === "male" ? "남성" : "여성";
    const inputText =
      calendar === "lunar"
        ? `음력${isLeap ? "(윤달)" : ""} ${y}.${m}.${d}`
        : `양력 ${y}.${m}.${d}`;
    const [sy, sm, sd] = birthDate.split("-").map(Number);
    const solarNote = calendar === "lunar" ? ` → 양력 ${sy}.${sm}.${sd}` : "";
    const birthEl = document.getElementById("result-birth");
    if (birthEl) birthEl.textContent = `${genderText} · ${inputText}${solarNote}`;

    const stemIsYang = YANG_STEMS.includes(pillar.stem);
    const genderIsYang = gender === "male";
    const yy = YINYANG_TEXT[stemIsYang === genderIsYang ? "same" : "cross"];
    const yyTagEl = document.getElementById("yinyang-tag");
    const yyTextEl = document.getElementById("yinyang-text");
    if (yyTagEl) yyTagEl.textContent = `${stemIsYang ? "양(陽)" : "음(陰)"} 일간 · ${genderText} · ${yy.tag}`;
    if (yyTextEl) yyTextEl.textContent = yy.text;

    setPokemonImage(document.getElementById("result-img"), info.img, info.pokemonName);

    const userEl = document.getElementById("result-user");
    const titleEl = document.getElementById("result-title");
    const subEl = document.getElementById("result-subtitle");
    const descEl = document.getElementById("result-desc");
    if (userEl) userEl.textContent = userName === "당신" ? "당신의 파트너 포켓몬" : `${userName}님의 파트너 포켓몬`;
    if (titleEl) titleEl.textContent = info.pokemonName;
    if (subEl) subEl.textContent = info.subtitle;
    if (descEl) descEl.textContent = info.desc;

    const keywordContainer = document.getElementById("result-keywords");
    if (keywordContainer) {
      keywordContainer.innerHTML = info.keywords
        .map((kw) => `<span class="keyword-chip">${kw}</span>`)
        .join("");
    }

    const cardEl = document.getElementById("result-card");
    if (cardEl) cardEl.className = `result-box ${info.theme}`;

    renderFriendCompatibility(pillar, info, userName);

    const hapPokemon = RESULT_DATA[info.hap.target];
    const hapBadge = document.getElementById("hap-badge");
    const hapName = document.getElementById("hap-name");
    const hapReason = document.getElementById("hap-reason");
    if (hapBadge) hapBadge.textContent = info.hap.label;
    setPokemonImage(document.getElementById("hap-img"), hapPokemon.img, hapPokemon.pokemonName);
    if (hapName) hapName.textContent = hapPokemon.pokemonName;
    if (hapReason) hapReason.textContent = info.hap.reason;

    const sangsaengPokemon = RESULT_DATA[info.sangsaeng.target];
    const ssBadge = document.getElementById("sangsaeng-badge");
    const ssName = document.getElementById("sangsaeng-name");
    const ssReason = document.getElementById("sangsaeng-reason");
    if (ssBadge) ssBadge.textContent = info.sangsaeng.label;
    setPokemonImage(document.getElementById("sangsaeng-img"), sangsaengPokemon.img, sangsaengPokemon.pokemonName);
    if (ssName) ssName.textContent = sangsaengPokemon.pokemonName;
    if (ssReason) ssReason.textContent = info.sangsaeng.reason;

    renderTodayFortune(pillar.stemIdx);

    await transitionToResult(info.img, STEM_ELEMENT[pillar.stemIdx]);
  });

  document.getElementById("retry-btn")?.addEventListener("click", () => {
    document.getElementById("copy-msg")?.classList.add("hidden");
    resultSection?.classList.add("hidden");
    inputSection?.classList.remove("hidden");
    scrollToTopInstant();
  });

  document.getElementById("copy-btn")?.addEventListener("click", async () => {
    const shareUrl = getBaseUrl();
    if (latestMyPillar) {
      shareUrl.searchParams.set("fn", latestUserName);
      shareUrl.searchParams.set("fp", `${latestMyPillar.stem}${latestMyPillar.branch}`);
    }
    const finalLink = shareUrl.toString();

    try {
      await navigator.clipboard.writeText(finalLink);
      document.getElementById("copy-msg")?.classList.remove("hidden");
    } catch {
      const temp = document.createElement("textarea");
      temp.value = finalLink;
      temp.setAttribute("readonly", "");
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      temp.select();
      temp.setSelectionRange(0, finalLink.length);
      const copied = document.execCommand("copy");
      document.body.removeChild(temp);
      if (copied) {
        document.getElementById("copy-msg")?.classList.remove("hidden");
      } else {
        alert("링크 복사에 실패했어요. 주소창에서 직접 복사해 주세요.");
      }
    }
  });

  const saveImgBtn = document.getElementById("save-img-btn");
  saveImgBtn?.addEventListener("click", async () => {
    if (typeof html2canvas === "undefined") {
      alert("이미지 저장 기능을 불러오지 못했어요. 새로고침 후 다시 시도해 주세요.");
      return;
    }

    const target = document.getElementById("result-card");
    const userName = (document.getElementById("user-name")?.value || "").trim() || "나의";
    const pokemonName = (document.getElementById("result-title")?.textContent || "").trim() || "포켓몬";
    const fileName = `${userName}_파트너포켓몬_${pokemonName}.png`;

    const originalLabel = saveImgBtn.textContent;
    saveImgBtn.disabled = true;
    saveImgBtn.textContent = "이미지 생성 중...";

    try {
      await waitForImages(target);

      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff"
      });

      await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Blob creation failed"));
            return;
          }
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
          resolve();
        }, "image/png");
      });
    } catch {
      alert("이미지 저장 중 오류가 발생했어요. 화면 캡처 기능을 이용해 주세요.");
    } finally {
      saveImgBtn.disabled = false;
      saveImgBtn.textContent = originalLabel;
    }
  });
});
