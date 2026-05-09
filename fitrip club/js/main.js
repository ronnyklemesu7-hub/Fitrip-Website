const facilities = [
      { icon: 'dumbbell', title: 'Freeweight Floor', desc: 'Full freeweight & machine floor for all serious lifters.' },
      { icon: 'shield', title: 'Boxing Studio', desc: 'Heavy bags, ring space and pro-level coaching.' },
      { icon: 'bike', title: 'Spinning Studio', desc: 'High-energy indoor cycling sessions daily.' },
      { icon: 'users', title: 'Group Fitness', desc: 'Aerobics, HIIT and dance classes that move.' },
      { icon: 'flame', title: 'CrossFit Box', desc: 'Dedicated CrossFit zone with full Olympic kit.' },
      { icon: 'trophy', title: 'Strongman Zone', desc: 'Atlas stones, tires, yokes — built for power.' },
      { icon: 'shower-head', title: 'Showers & Lockers', desc: 'Premium showers and clean changing rooms.' },
      { icon: 'parking-circle', title: 'Parking Available', desc: 'Spacious, secure on-site parking.' },
      { icon: 'user-check', title: 'Personal Trainers', desc: 'Certified trainers on-site to guide your journey.' },
    ];

    const reviews = [
      { name: "Elizabeth Aba Baffoe", initials: "EB", text: "For someone who never thought they'd be in the gym — Fitrip made it easy. The equipment, the employees, the people who frequent there. Fitrip really is a fitness community." },
      { name: "Amrath Sait", initials: "AS", text: "THE BEST PLACE TO EXPERIENCE THE FITNESS JOURNEY AND SEE REAL TRANSFORMATION WITH INSPIRING INSTRUCTORS, FUN WORKOUTS AND INSANELY MOTIVATED CROWD!" },
      { name: "Suha Choi", initials: "SC", text: "BEST GYM IN GHANA! Very friendly staff and clean, nice equipment." },
      { name: "Rami Sayed", initials: "RS", text: "Outstanding gym — friendly staff and very motivating ambiance." },
      { name: "Fayuan Allen Qiu", initials: "FQ", text: "Very good gym. I lost 5kg in 3 months!" },
      { name: "Jordan", initials: "JD", text: "Freeweight equipment: 5/5. CrossFit. Machines. Highly varied. Seriously solid gym." },
      { name: "Kofi Mensah", initials: "KM", text: "The crossfit box is legendary here. Best layout and coaches genuinely push you to reach your real potential." },
      { name: "Sarah Osei", initials: "SO", text: "From the spinning classes to yoga, everything is premium. The community keeps me coming back every single morning!" },
      { name: "David Tetteh", initials: "DT", text: "Excellent facilities with great parking. Staff are welcoming, music is a vibe, and I highly recommend it for any serious lifter." },
      { name: "Ama Agyeman", initials: "AA", text: "The group fitness instructors are top tier! You never feel judged, just motivated. Absolutely changed my life." }
    ];

    const classes = [
      { name: 'Boxing', sub: 'Power · Discipline', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80' },
      { name: 'Spinning', sub: 'Cardio · Endurance', img: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80' },
      { name: 'CrossFit', sub: 'Strength · Speed', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
      { name: 'Aerobics', sub: 'Energy · Movement', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80' },
      { name: 'Yoga', sub: 'Balance · Mindfulness', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80' },
      { name: 'Strongman', sub: 'Raw · Power', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80' },
    ];

    const facGrid = document.getElementById('fac-grid');
    facilities.forEach((f, i) => {
      const el = document.createElement('a');

      // Explicit filename map for all facility pages
      const pageMap = {
        'Freeweight Floor': 'freeweight-gallery.html',
        'Boxing Studio': 'boxing-gallery.html',
        'Spinning Studio': 'spinning-studio.html',
        'Group Fitness': 'group-fitness.html',
        'CrossFit Box': 'crossfit-box.html',
        'Strongman Zone': 'strongman.html',
        'Showers & Lockers': 'showers-lockers.html',
        'Parking Available': 'parking-available.html',
        'Personal Trainers': 'personal-trainers.html',
      };
      const pageLink = pageMap[f.title] || '#';

      el.href = pageLink;
      el.target = '_blank';
      el.style.display = 'block';
      el.style.textDecoration = 'none';
      el.style.color = 'inherit';

      el.className = 'fac-card reveal';
      el.style.transitionDelay = (i * 0.06) + 's';
      el.innerHTML = `
      <div class="fac-icon"><i data-lucide="${f.icon}"></i></div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>`;
      facGrid.appendChild(el);
    });

    const revTrack = document.getElementById('rev-track');

    reviews.forEach(r => {
      const el = document.createElement('div');
      el.className = 'rev-card';
      el.innerHTML = `
      <div class="rev-stars">★★★★★</div>
      <div class="rev-text">"${r.text}"</div>
      <div class="rev-author">
        <div class="rev-avatar">${r.initials}</div>
        <div>
          <div class="rev-name">${r.name}</div>
          <div class="rev-meta">Verified Member</div>
        </div>
      </div>`;
      revTrack.appendChild(el);
    });

    const clsGrid = document.getElementById('cls-grid');
    classes.forEach((c, i) => {
      const isProgram = c.name === 'Boxing' || c.name === 'Spinning' || c.name === 'Aerobics' || c.name === 'Yoga' || c.name === 'Strongman';
      const el = document.createElement(isProgram ? 'a' : 'div');
      if (isProgram) {
        const pageMap = {
          'Boxing': 'boxing-program.html',
          'Spinning': 'spinning-program.html',
          'Aerobics': 'aerobics.html',
          'Yoga': 'yoga.html',
          'Strongman': 'strongman.html'
        };
        el.href = pageMap[c.name];
        el.target = '_blank';
        el.style.textDecoration = 'none';
        el.style.display = 'block';
      }
      el.className = 'cls-tile reveal';
      el.style.transitionDelay = (i * 0.07) + 's';
      el.innerHTML = `
      <div class="bg" style="background-image:url('${c.img}')"></div>
      <div class="overlay">
        <div class="name">${c.name}</div>
        <div class="sub">${c.sub}</div>
      </div>
      <div class="arrow"><i data-lucide="arrow-right"></i></div>`;
      clsGrid.appendChild(el);
    });

    let carouselState = { idx: 0, autoTimer: null, visible: 3 };

    function getVisibleCount() {
      const w = window.innerWidth;
      if (w < 901) return 1;
      if (w < 1101) return 2;
      return 3;
    }

    function setupCarousel() {
      const wrap = document.querySelector('.rev-track-wrap');
      const track = document.getElementById('rev-track');
      const controls = document.getElementById('rev-controls');

      // Make sure controls are visible
      controls.style.display = 'flex';

      const visible = getVisibleCount();
      carouselState.visible = visible;
      const total = reviews.length;
      const pages = Math.max(1, total - visible + 1);
      if (carouselState.idx >= pages) carouselState.idx = 0;

      controls.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement('button');
        dot.className = 'rev-dot' + (i === carouselState.idx ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
        dot.addEventListener('click', () => {
          carouselState.idx = i;
          update();
          restartAuto();
        });
        controls.appendChild(dot);
      }

      function update() {
        if (!track.children[0]) return;
        const cardWidth = track.children[0].getBoundingClientRect().width + 24;
        track.style.transform = `translateX(-${carouselState.idx * cardWidth}px)`;
        controls.querySelectorAll('.rev-dot').forEach((d, i) => d.classList.toggle('active', i === carouselState.idx));
      }

      function restartAuto() {
        if (carouselState.autoTimer) clearInterval(carouselState.autoTimer);
        carouselState.autoTimer = setInterval(() => {
          carouselState.idx = (carouselState.idx + 1) % pages;
          update();
        }, 7000);
      }

      update();
      restartAuto();

      wrap.onmouseenter = () => { if (carouselState.autoTimer) { clearInterval(carouselState.autoTimer); carouselState.autoTimer = null; } };
      wrap.onmouseleave = () => { restartAuto(); };

      return { update };
    }
    let carousel = setupCarousel();
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { carousel = setupCarousel(); }, 200);
    });

    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const dur = 2000;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / dur);
            const ease = 1 - Math.pow(1 - p, 4);
            el.textContent = Math.floor(ease * target) + (p === 1 ? suffix : '');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          }
          requestAnimationFrame(tick);
          counterObs.unobserve(el);
        }
      });
    }, { threshold: .5 });
    document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    /* ============== MEMBERSHIP MODAL LOGIC ============== */
    const backdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');
    const form = document.getElementById('membership-form');
    const submitBtn = document.getElementById('submit-btn');
    const modalSuccess = document.getElementById('modal-success');
    const successClose = document.getElementById('success-close');
    const modalBody = form;
    const modalFooter = document.querySelector('.modal-footer');
    const modalHeader = document.querySelector('.modal-header');

    function openModal() {
      backdrop.classList.add('open');
      document.body.classList.add('modal-open');
    }
    function closeModal() {
      backdrop.classList.remove('open');
      document.body.classList.remove('modal-open');
      setTimeout(() => {
        modalSuccess.classList.remove('show');
        modalBody.style.display = '';
        modalFooter.style.display = '';
        modalHeader.style.display = '';
        form.reset();
        document.querySelectorAll('.form-field.error').forEach(el => el.classList.remove('error'));
        document.getElementById('goalsErr').style.display = 'none';
        document.getElementById('planErr').style.display = 'none';
        document.getElementById('waiverErr').style.display = 'none';
        document.getElementById('medicalConditional').classList.remove('show');
      }, 400);
    }

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', e => { e.preventDefault(); openModal(); });
    });
    modalClose.addEventListener('click', closeModal);
    successClose.addEventListener('click', closeModal);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal(); });

    /* Conditional medical */
    document.getElementById('hasMedical').addEventListener('change', e => {
      document.getElementById('medicalConditional').classList.toggle('show', e.target.checked);
    });

    /* Validation helpers */
    function setError(field, on) {
      const wrap = field.closest('.form-field');
      if (wrap) wrap.classList.toggle('error', on);
    }

    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => setError(el, false));
      el.addEventListener('change', () => setError(el, false));
    });

    function validateForm() {
      let valid = true;

      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(f => {
        if (f.type === 'checkbox') {
          if (!f.checked) {
            if (f.name === 'waiverAgree') {
              document.getElementById('waiverErr').style.display = 'block';
              valid = false;
            }
          }
        } else {
          const v = f.value.trim();
          if (!v) {
            setError(f, true); valid = false;
          } else if (f.type === 'email') {
            const emailRe = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
            if (!emailRe.test(v)) { setError(f, true); valid = false; }
          } else if (f.type === 'tel') {
            const phoneRe = new RegExp('^[+\\d\\s\\-()]{7,}$');
            if (!phoneRe.test(v)) { setError(f, true); valid = false; }
          }
        }
      });

      const goalsChecked = form.querySelectorAll('input[name="goals"]:checked').length;
      const goalsErr = document.getElementById('goalsErr');
      if (goalsChecked === 0) { goalsErr.style.display = 'block'; valid = false; }
      else { goalsErr.style.display = 'none'; }

      const planChecked = form.querySelector('input[name="plan"]:checked');
      const planErr = document.getElementById('planErr');
      if (!planChecked) { planErr.style.display = 'block'; valid = false; }
      else { planErr.style.display = 'none'; }

      const waiverEl = form.querySelector('input[name="waiverAgree"]');
      if (waiverEl.checked) document.getElementById('waiverErr').style.display = 'none';

      return valid;
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm()) {
        const firstErr = form.querySelector('.form-field.error, #goalsErr[style*="block"], #planErr[style*="block"], #waiverErr[style*="block"]');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';

      // Collect form data
      const fd = new FormData(form);
      const goals = [...form.querySelectorAll('input[name="goals"]:checked')].map(el => el.value);
      const entry = {
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        fullName: fd.get('fullName') || '',
        dob: fd.get('dob') || '',
        phone: fd.get('phone') || '',
        email: fd.get('email') || '',
        address: fd.get('address') || '',
        emergencyName: fd.get('emergencyName') || '',
        emergencyPhone: fd.get('emergencyPhone') || '',
        hasMedical: form.querySelector('#hasMedical').checked,
        medicalDetails: fd.get('medicalDetails') || '',
        goals: goals,
        plan: fd.get('plan') || '',
        startDate: fd.get('startDate') || '',
        amount: fd.get('amount') || '',
        paymentMethod: fd.get('paymentMethod') || '',
        signature: fd.get('signature') || '',
        signDate: fd.get('signDate') || ''
      };
      const existing = JSON.parse(localStorage.getItem('fitrip_members') || '[]');
      existing.push(entry);
      localStorage.setItem('fitrip_members', JSON.stringify(existing));

      setTimeout(() => {
        modalBody.style.display = 'none';
        modalFooter.style.display = 'none';
        modalHeader.style.display = 'none';
        modalSuccess.classList.add('show');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Application';
        lucide.createIcons();
      }, 1200);
    });

    lucide.createIcons();

    /* ============ ADMIN PANEL LOGIC ============ */
    const adminPanel = document.getElementById('admin-panel');
    const adminBtn = document.getElementById('admin-btn');
    const adminClose = document.getElementById('admin-close');
    const adminSearch = document.getElementById('admin-search');
    const adminPlanFilter = document.getElementById('admin-plan-filter');
    const adminSort = document.getElementById('admin-sort');
    const adminTableWrap = document.getElementById('admin-table-wrap');
    const adminStatsBar = document.getElementById('admin-stats-bar');
    const adminCount = document.getElementById('admin-count');

    function getMembers() {
      return JSON.parse(localStorage.getItem('fitrip_members') || '[]');
    }

    function planLabel(p) {
      if (p === 'monthly') return 'Monthly';
      if (p === '3-months') return '3 Months';
      if (p === 'yearly') return 'Yearly';
      return p || '—';
    }

    function planBadgeClass(p) {
      if (p === 'monthly') return 'monthly';
      if (p === '3-months') return 'three';
      if (p === 'yearly') return 'yearly';
      return '';
    }

    function payLabel(p) {
      const map = { 'mobile-money': 'Mobile Money', 'card': 'Card', 'cash': 'Cash', 'bank-transfer': 'Bank Transfer' };
      return map[p] || p || '—';
    }

    function fmtDate(str) {
      if (!str) return '—';
      const d = new Date(str);
      if (isNaN(d)) return str;
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function renderStats(members) {
      const total = members.length;
      const monthly = members.filter(m => m.plan === 'monthly').length;
      const three = members.filter(m => m.plan === '3-months').length;
      const yearly = members.filter(m => m.plan === 'yearly').length;
      const revenue = members.reduce((s, m) => s + (parseFloat(m.amount) || 0), 0);
      adminStatsBar.innerHTML = `
        <div class="admin-stat-pill"><div class="asp-label">Total Members</div><div class="asp-val">${total}</div></div>
        <div class="admin-stat-pill"><div class="asp-label">Monthly</div><div class="asp-val red">${monthly}</div></div>
        <div class="admin-stat-pill"><div class="asp-label">3-Month</div><div class="asp-val">${three}</div></div>
        <div class="admin-stat-pill"><div class="asp-label">Yearly</div><div class="asp-val" style="color:#3cd678">${yearly}</div></div>
        <div class="admin-stat-pill"><div class="asp-label">Total Revenue (GHS)</div><div class="asp-val">${revenue.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div></div>
      `;
    }

    function renderTable() {
      let members = getMembers();
      const q = adminSearch.value.trim().toLowerCase();
      const planF = adminPlanFilter.value;
      const sortF = adminSort.value;

      renderStats(members);

      if (q) members = members.filter(m =>
        (m.fullName || '').toLowerCase().includes(q) ||
        (m.email || '').toLowerCase().includes(q) ||
        (m.phone || '').toLowerCase().includes(q)
      );
      if (planF) members = members.filter(m => m.plan === planF);
      if (sortF === 'oldest') members = [...members].sort((a, b) => a.id - b.id);
      else members = [...members].sort((a, b) => b.id - a.id);

      adminCount.textContent = members.length + ' record' + (members.length !== 1 ? 's' : '');

      if (members.length === 0) {
        adminTableWrap.innerHTML = `
          <div class="admin-empty">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <h3>No Members Found</h3>
            <p id="admin-empty-sub">No registration records match your current filters.</p>
          </div>`;
        const allM = getMembers();
        if (allM.length === 0) {
          document.getElementById('admin-empty-sub').textContent = 'No membership applications have been submitted yet.';
        }
        return;
      }

      let rows = members.map(m => {
        const goalChips = (m.goals || []).map(g => `<span class="goal-chip">${g.replace('-', ' ')}</span>`).join('');
        return `<tr data-id="${m.id}">
          <td><div class="member-name">${m.fullName || '—'}</div><div style="font-size:11px;color:#666;margin-top:2px">${m.email || ''}</div></td>
          <td>${m.phone || '—'}</td>
          <td>${fmtDate(m.dob)}</td>
          <td><span class="plan-badge ${planBadgeClass(m.plan)}">${planLabel(m.plan)}</span></td>
          <td>${fmtDate(m.startDate)}</td>
          <td style="color:var(--gold)">GHS ${parseFloat(m.amount || 0).toLocaleString('en-GH', { minimumFractionDigits: 2 })}</td>
          <td>${payLabel(m.paymentMethod)}</td>
          <td>${goalChips || '—'}</td>
          <td>${m.hasMedical ? '<span style="color:#f87171;font-size:11px;font-weight:700">Yes</span>' : '<span style="color:#555;font-size:11px">No</span>'}</td>
          <td style="font-size:11px;color:#555">${fmtDate(m.submittedAt)}</td>
          <td><button class="del-btn" title="Delete record" onclick="deleteMember(${m.id})">✕</button></td>
        </tr>`;
      }).join('');

      adminTableWrap.innerHTML = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Name / Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Plan</th>
              <th>Start Date</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Goals</th>
              <th>Medical</th>
              <th>Registered</th>
              <th></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>`;
    }

    window.deleteMember = function (id) {
      if (!confirm('Delete this member record? This cannot be undone.')) return;
      let members = getMembers().filter(m => m.id !== id);
      localStorage.setItem('fitrip_members', JSON.stringify(members));
      renderTable();
    };

    function openAdminPanel() {
      adminPanel.classList.add('open');
      document.body.classList.add('modal-open');
      renderTable();
      lucide.createIcons();
    }

    function closeAdminPanel() {
      adminPanel.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    /* ---- Admin Login Gate ---- */
    // ⚠️ Change these credentials as needed
    const ADMIN_EMAIL = 'admin@fitrip.gh';
    const ADMIN_PASSWORD = 'Fitrip@2026';

    const loginBackdrop = document.getElementById('admin-login-backdrop');
    const loginEmailEl = document.getElementById('admin-email-input');
    const loginPassEl = document.getElementById('admin-pass-input');
    const loginErrEl = document.getElementById('admin-login-err');
    const loginSubmitBtn = document.getElementById('admin-login-submit');
    const loginCancelBtn = document.getElementById('admin-login-cancel');

    function openLoginModal() {
      loginEmailEl.value = '';
      loginPassEl.value = '';
      loginErrEl.style.display = 'none';
      loginEmailEl.classList.remove('input-error');
      loginPassEl.classList.remove('input-error');
      loginBackdrop.classList.add('open');
      setTimeout(() => loginEmailEl.focus(), 350);
    }

    function closeLoginModal() {
      loginBackdrop.classList.remove('open');
    }

    function attemptLogin() {
      const email = loginEmailEl.value.trim();
      const pass = loginPassEl.value;
      if (email === ADMIN_EMAIL && pass === ADMIN_PASSWORD) {
        closeLoginModal();
        openAdminPanel();
      } else {
        loginErrEl.style.display = 'block';
        loginEmailEl.classList.add('input-error');
        loginPassEl.classList.add('input-error');
        loginPassEl.value = '';
        loginPassEl.focus();
      }
    }

    adminBtn.addEventListener('click', openLoginModal);
    loginSubmitBtn.addEventListener('click', attemptLogin);
    loginCancelBtn.addEventListener('click', closeLoginModal);
    loginBackdrop.addEventListener('click', e => { if (e.target === loginBackdrop) closeLoginModal(); });
    [loginEmailEl, loginPassEl].forEach(el => {
      el.addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });
      el.addEventListener('input', () => {
        el.classList.remove('input-error');
        loginErrEl.style.display = 'none';
      });
    });

    adminClose.addEventListener('click', closeAdminPanel);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (adminPanel.classList.contains('open')) closeAdminPanel();
        else if (loginBackdrop.classList.contains('open')) closeLoginModal();
      }
    });
    adminSearch.addEventListener('input', renderTable);
    adminPlanFilter.addEventListener('change', renderTable);
    adminSort.addEventListener('change', renderTable);
/* ============ LOGO HOVER REVEAL ============ */
const logoLink = document.querySelector('.nav .logo');
const brandText = document.querySelector('.brand-text');
let revealTimeout, hideTimeout;

if (logoLink && brandText) {
  logoLink.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    revealTimeout = setTimeout(() => {
      brandText.classList.add('visible');
    }, 400);
  });

  logoLink.addEventListener('mouseleave', () => {
    clearTimeout(revealTimeout);
    hideTimeout = setTimeout(() => {
      brandText.classList.remove('visible');
    }, 1500);
  });
}

lucide.createIcons();
