(() => {
  'use strict';
  // Companies marked `draft: true` in companies.js are never shown.
  const companies = (window.DIRECTORY_COMPANIES || []).filter(c => !c.draft);
  const listNew = document.getElementById('list-new');
  const listOld = document.getElementById('list-old');
  const groupNew = document.getElementById('new');
  const groupOld = document.getElementById('part1');
  const search = document.getElementById('search');
  const resultCount = document.getElementById('results-count');
  const empty = document.getElementById('empty-state');
  const clear = document.getElementById('clear-filters');
  const reset = document.getElementById('reset-filters');
  const chips = [...document.querySelectorAll('.chip')];
  let selected = 'All';

  const escape = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  function safeExternalUrl(s) {
    try { const u = new URL(s); return u.protocol === 'https:' ? u.href : '#'; }
    catch { return '#'; }
  }
  const ext = (href, label, classname, analytics) => `<a class="${classname}" href="${escape(safeExternalUrl(href))}" target="_blank" rel="noopener noreferrer" data-analytics="${escape(analytics)}">${label} <span aria-hidden="true">↗</span></a>`;
  const card = (c) => `
    <article class="card" id="${escape(c.id)}">
      <div class="card-head">
        <div class="company-icon" aria-hidden="true" style="background:${escape(c.accent)};color:${escape(c.ink)}">${escape(c.initials)}</div>
        <div class="card-title"><h3>${escape(c.name)}</h3>${c.subname ? `<div class="subname">${escape(c.subname)}</div>` : ''}</div>
      </div>
      <div class="meta">
        <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 0 1 16 0Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.7"/></svg>${escape(c.location)}</span>
        <span class="meta-sector">${escape(c.sector)}</span>
      </div>
      <p class="summary">${escape(c.summary)}</p>
      <div class="role-label">CAREER AREAS TO EXPLORE</div>
      <div class="tags">${(c.roleExamples || []).map(x => `<span class="tag">${escape(x)}</span>`).join('')}</div>
      <div class="actions">
        ${ext(c.careerUrl, escape(c.careerLabel || 'Explore careers'), 'btn btn-primary', `career:${c.id}`)}
        <div class="actions-row">
          ${ext(c.linkedinUrl, 'Company LinkedIn', 'btn btn-outline', `linkedin:${c.id}`)}
          ${ext(c.recruiterUrl, 'Find recruiters', 'btn btn-outline', `recruiters:${c.id}`)}
        </div>
      </div>
      <details class="detail"><summary>Before you apply</summary><p>${escape(c.note)}</p>${c.caution ? '<p class="caution">Openings are not currently confirmed. Keep an eye on the board and company posts.</p>' : ''}<p class="warn">Recruiter search opens LinkedIn results — individual contacts are not verified.</p></details>
    </article>`;

  function render() {
    const terms = search.value.trim().toLocaleLowerCase('en-IN').split(/\s+/).filter(Boolean);
    const filtered = companies.filter(c => {
      const text = [c.name,c.subname,c.location,c.sector,c.summary,...(c.roleExamples||[]),...(c.roleFamilies||[]),...(c.skills||[])].filter(Boolean).join(' ').toLocaleLowerCase('en-IN');
      return (selected === 'All' || (c.roleFamilies||[]).includes(selected)) && terms.every(t => text.includes(t));
    });
    const isNew = c => c.part === 2;
    const fresh = filtered.filter(isNew), old = filtered.filter(c => !isNew(c));
    const filtering = terms.length > 0 || selected !== 'All';
    listNew.innerHTML = fresh.map(card).join('');
    listOld.innerHTML = old.map(card).join('');
    groupNew.hidden = fresh.length === 0;
    groupOld.hidden = old.length === 0;
    reset.hidden = !filtering;
    empty.hidden = filtered.length !== 0;
    const n = filtered.length;
    resultCount.textContent = filtering
      ? `Showing ${n} of ${companies.length} companies${selected !== 'All' ? ' for ' + selected : ''}`
      : `Showing all ${companies.length} companies`;
    const count = document.getElementById('hero-count'); if (count) count.textContent = String(companies.length);
    const newTitle = document.getElementById('new-title');
    if (newTitle) newTitle.textContent = `${companies.filter(isNew).length} more companies worth exploring.`;
  }
  chips.forEach(b => b.addEventListener('click', () => {
    selected = b.dataset.filter;
    chips.forEach(x => { const on = x === b; x.classList.toggle('active', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    render();
  }));
  search.addEventListener('input', render);
  const resetAll = () => { search.value = ''; chips[0].click(); };
  clear.addEventListener('click', () => { resetAll(); search.focus(); });
  reset.addEventListener('click', resetAll);
  render();
})();
