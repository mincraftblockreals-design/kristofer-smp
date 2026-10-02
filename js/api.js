/* طبقة الـ API: كل الاتصالات بالخارج تمر من هنا */
const API = {
  async json(url) { const r = await fetch(url, { cache: "no-store" }); if (!r.ok) throw new Error(r.status); return r.json(); },
  /* حالة السيرفر الحقيقية. ترجع null إذا فشل الاتصال */
  async status() { try { return await this.json(CONFIG.api.status + encodeURIComponent(CONFIG.server.ip)); } catch { return null; } },
  /* اللاعبون: من API الخاص بك إن وُجد، وإلا اللاعبون المتصلون حاليًا من حالة السيرفر */
  async players() {
    if (CONFIG.api.players) { try { return { full: true, list: await this.json(CONFIG.api.players) }; } catch { return { full: false, list: [] }; } }
    const s = await this.status();
    return { full: false, list: (s?.players?.list || []).map(p => ({ name: p.name, uuid: p.uuid })) };
  },
  async metrics() { if (!CONFIG.api.metrics) return null; try { return await this.json(CONFIG.api.metrics); } catch { return null; } }
};
