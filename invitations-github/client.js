import {db,FS,$,mount,fill,fit,cap,blob,clean,save,zipAll,rand} from './common.js';
const e=new URLSearchParams(location.search).get('e');let ev,G=[],i=0;
const ref=FS.doc(db,'events',e||'x');
const snap=await FS.getDoc(ref).catch(()=>null);
if(!snap||!snap.exists()){document.body.innerHTML='<p style="padding:30px;font-family:Tajawal">الرابط غير صحيح.</p>';throw 0}
ev=snap.data();$('h').textContent=ev.title||'دعوتك';
mount($('card'),ev.tpl);
const show=()=>{if(i>=G.length)i=Math.max(0,G.length-1);const g=G[i]||{n:'اسم الضيف',c:'DEMO'};fill($('card'),ev,g.n,g.c);$('cnt').textContent=G.length?'الدعوة '+(i+1)+' من '+G.length:'أضف أسماء لتظهر هنا'};
const list=()=>{$('gc').textContent='('+G.length+')';const b=$('gl');b.innerHTML='';
 G.forEach((g,k)=>{const r=document.createElement('div');r.className='row';const s=document.createElement('span');s.textContent=g.n;s.style.cursor='pointer';s.onclick=()=>{i=k;show()};
  const x=document.createElement('button');x.textContent='حذف';x.onclick=()=>FS.deleteDoc(FS.doc(ref,'guests',g.id));const ed=document.createElement('button');ed.textContent='تعديل';ed.onclick=()=>{const v=prompt('تعديل الاسم',g.n);if(v&&v.trim()&&v.trim()!==g.n)FS.updateDoc(FS.doc(ref,'guests',g.id),{n:v.trim()})};const bx=document.createElement('span');bx.append(ed,x);r.append(s,bx);b.append(r)})};
FS.onSnapshot(FS.query(FS.collection(ref,'guests'),FS.orderBy('at')),s=>{G=s.docs.map(d=>({id:d.id,...d.data()}));list();show()});
$('add').onclick=async()=>{const names=$('ta').value.split('\n').map(s=>s.trim()).filter(Boolean);const t=Date.now();
 await Promise.all(names.map((n,k)=>FS.addDoc(FS.collection(ref,'guests'),{n,c:rand(),at:t+k})));$('ta').value=''};
$('nx').onclick=()=>{if(G.length){i=(i+1)%G.length;show()}};$('pv').onclick=()=>{if(G.length){i=(i-1+G.length)%G.length;show()}};
$('dl').onclick=async()=>{const g=G[i]||{n:'دعوة'};save(await blob(await cap($('card'))),(i+1)+' - '+clean(g.n)+'.png')};
$('dlAll').onclick=async()=>{if(!G.length){$('st').textContent='أضف أسماء أولاً';return}
 const keep=i,b=$('dlAll'),t=b.textContent;b.disabled=true;
 const z=await zipAll($('card'),ev,G,n=>b.textContent='جارٍ التصدير '+n+' / '+G.length);
 b.textContent=t;b.disabled=false;i=keep;show();save(z,'invitations.zip')};
const f=()=>fit($('stage'),$('card'));addEventListener('resize',f);f();
