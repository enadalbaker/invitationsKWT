import {db,FS,$} from './common.js';
const e=new URLSearchParams(location.search).get('e');const ref=FS.doc(db,'events',e||'x');
const snap=await FS.getDoc(ref).catch(()=>null);
if(!snap||!snap.exists()){document.body.innerHTML='<p style="padding:30px;font-family:Tajawal">الرابط غير صحيح.</p>';throw 0}
$('h').textContent='ماسح: '+(snap.data().title||'');
let G=new Map(),S={};
const fmt=t=>new Date(t).toLocaleTimeString('ar-KW',{hour:'2-digit',minute:'2-digit'});
const show=(c,t,s)=>{const r=$('res');r.className='res '+c;r.innerHTML='<b></b><div></div>';r.firstChild.textContent=t;r.lastChild.textContent=s||''};
const stat=()=>{$('ct').textContent='دخل '+Object.keys(S).length+' من '+G.size;const b=$('rc');b.innerHTML='';
 Object.entries(S).sort((a,b)=>b[1].at-a[1].at).slice(0,8).forEach(([k,v])=>{const d=document.createElement('div');d.className='rc';const a=document.createElement('span'),t=document.createElement('span');a.textContent=v.n;t.textContent=fmt(v.at);d.append(a,t);b.append(d)})};
FS.onSnapshot(FS.collection(ref,'guests'),s=>{G=new Map(s.docs.map(d=>[d.data().c,d.data()]));stat()});
FS.onSnapshot(FS.collection(ref,'scans'),s=>{S={};s.docs.forEach(d=>S[d.id]=d.data());stat()});
async function check(raw){const p=String(raw).split('|'),code=(p[0]==='INV'?p[1]:raw).trim().toUpperCase(),g=G.get(code);
 if(!g){show('bad','دعوة غير صالحة',code);return}
 const sr=FS.doc(ref,'scans',code);
 try{await FS.setDoc(sr,{n:g.n,at:Date.now()});show('ok','أهلاً '+g.n,'تم تسجيل الدخول')}
 catch(err){if(err.code==='permission-denied'){const s=await FS.getDoc(sr);show('dup','تم مسح هذه الدعوة مسبقاً',g.n+(s.exists()?' — '+fmt(s.data().at):''))}else show('bad','تعذر التسجيل','تحقق من الاتصال')}}
$('mb').onclick=()=>{const v=$('man').value.trim();if(v){check(v);$('man').value=''}};
const vid=$('vid'),cv=document.createElement('canvas');let cool=0;
function tick(){if(vid.readyState===4&&Date.now()>cool){cv.width=480;cv.height=Math.round(480*vid.videoHeight/vid.videoWidth)||360;const x=cv.getContext('2d');x.drawImage(vid,0,0,cv.width,cv.height);
  const r=jsQR(x.getImageData(0,0,cv.width,cv.height).data,cv.width,cv.height);if(r&&r.data){cool=Date.now()+2500;check(r.data)}}requestAnimationFrame(tick)}
navigator.mediaDevices?.getUserMedia({video:{facingMode:'environment'}}).then(s=>{vid.srcObject=s;vid.play();tick()}).catch(()=>$('cm').textContent='تعذر تشغيل الكاميرا، استخدم الإدخال اليدوي.');
