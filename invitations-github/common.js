import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import * as FS from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import * as AU from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {firebaseConfig} from './firebase-config.js';
const app=initializeApp(firebaseConfig);
export const db=FS.getFirestore(app),auth=AU.getAuth(app);
export {FS,AU};
export const $=id=>document.getElementById(id);
const H=640;
/* ---- عناصر الزخرفة (SVG) ---- */
const Fr=(m,c,rx=6,o=.8)=>`<rect x="${m}" y="${m}" width="${360-2*m}" height="${H-2*m}" rx="${rx}" fill="none" stroke="${c}" stroke-width="1" opacity="${o}"/>`;
const F=(x,y,r,f,o=1,s='none')=>`<g transform="translate(${x} ${y})" opacity="${o}"><g class="sw" style="animation-delay:${x%7*.4}s">`+[0,60,120,180,240,300].map(a=>`<ellipse rx="${r*.34}" ry="${r*.62}" cy="${-r*.5}" transform="rotate(${a})" fill="${f}" stroke="${s}" stroke-width=".8"/>`).join('')+`<circle r="${r*.2}" fill="#fff" opacity=".75"/></g></g>`;
const L=(x,y,a,n,len,f,o=1)=>{let s=`<g transform="translate(${x} ${y}) rotate(${a})" opacity="${o}"><path d="M0 0Q${len/2} -8 ${len} 0" stroke="${f}" fill="none" stroke-width="1.2"/>`;for(let i=1;i<=n;i++){const t=i/(n+1)*len;s+=`<ellipse cx="${t}" cy="-5" rx="9" ry="3.6" transform="rotate(-35 ${t} -5)" fill="${f}"/><ellipse cx="${t}" cy="4" rx="9" ry="3.6" transform="rotate(35 ${t} 4)" fill="${f}"/>`}return s+'</g>'};
const P=(x,t,r)=>`<line x1="${x}" y1="${H}" x2="${x}" y2="${t}" stroke="#c8a07a" stroke-width="3" opacity=".85"/>`+F(x,t,r,'#f3dfcf',1,'#d9b79a');
const Rd=c=>Array.from({length:27},(_,i)=>{const x=i*14+4,h=70+(i*37)%90;return `<path class="sw" style="animation-delay:${i%5*.5}s" d="M${x} ${H}Q${x+6} ${H-h*.5} ${x+14} ${H-h}" stroke="${c}" fill="none" stroke-width="1.3" opacity=".55"/>`}).join('');
const ST=[[40,100,2],[320,150,2.4],[60,300,1.8],[300,330,2],[28,470,2.4],[330,500,2],[180,60,1.8],[250,610,2],[100,620,1.8]];
const S=c=>ST.map(([x,y,r],i)=>`<circle class="tw" cx="${x}" cy="${y}" r="${r}" fill="${c}" style="animation-delay:${i*.4}s"/>`).join('');
const Cu=()=>[8,352].map((x0,k)=>Array.from({length:8},(_,i)=>Array.from({length:7},(_,j)=>`<circle class="tw" cx="${k?x0-i*9:x0+i*9}" cy="${10+j*24+(i%2)*12}" r="1.7" fill="#fff" style="animation-delay:${(i*7+j)%9*.3}s"/>`).join('')).join('')).join('');
const Lt=c=>`<defs><pattern id="lt" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M0 0L18 18M18 0L0 18" stroke="${c}" stroke-opacity=".3"/></pattern></defs><rect width="48" height="${H}" fill="url(#lt)"/><rect x="312" width="48" height="${H}" fill="url(#lt)"/>`;
const Fan=(x,y,a,c)=>`<g transform="translate(${x} ${y}) rotate(${a})" opacity=".8">`+Array.from({length:9},(_,i)=>`<path d="M0 0L${-42+i*10.5} -78" stroke="${c}" stroke-width="1.3"/>`).join('')+'</g>';
/* ---- تصاميم الأعراس ---- */
export const WT={
 p1:{n:'برونز ولؤلؤ',v:{bg:'repeating-linear-gradient(90deg,rgba(255,255,255,.04) 0 2px,transparent 2px 6px),linear-gradient(165deg,#7a5555,#3f2a2c)',fg:'#f7ece5',ac:'#f0d4b8',qb:'#f7ece5',qd:'#3f2a2c'},d:()=>Fr(12,'#f0d4b8',6,.45)+P(30,455,26)+P(66,545,17)+P(330,440,30)+P(294,550,18)+S('#f0d4b8')},
 p2:{n:'وردي مائي',v:{bg:'linear-gradient(180deg,#fdf0ef,#f5d6d6)',fg:'#8a5555',ac:'#b87777',qb:'#fff',qd:'#8a5555'},d:()=>F(40,70,64,'#f4bcbc',.45)+F(104,34,40,'#fbd9d5',.6)+L(6,130,60,5,80,'#a9bf96',.55)+F(326,600,58,'#f4bcbc',.4)+L(354,560,-120,5,80,'#a9bf96',.55)},
 p3:{n:'ستارة لؤلؤية',v:{bg:'linear-gradient(180deg,#f6d9d9,#efc6c6)',fg:'#7a4a4a',ac:'#8a5a5a',qb:'#fff',qd:'#7a4a4a'},d:()=>Cu()+Fr(14,'#8a5a5a',4,.35)},
 p4:{n:'نقش وأغصان',v:{bg:'linear-gradient(170deg,#d8aaa7,#c58f8e)',fg:'#5f3636',ac:'#6e4040',qb:'#f6e3e0',qd:'#5f3636'},d:()=>Lt('#fff')+L(60,30,40,6,110,'#e8c9c5',.8)+F(150,50,18,'#f6dcd8',.9)+L(300,610,-140,6,110,'#e8c9c5',.8)+F(190,590,18,'#f6dcd8',.9)+L(310,40,140,5,90,'#e8c9c5',.7)+F(30,610,20,'#f6dcd8',.9)},
 p5:{n:'ضباب وقصب',v:{bg:'linear-gradient(180deg,#f6f6f3,#e4e4de)',fg:'#5b5b56',ac:'#8a8a82',qb:'#fff',qd:'#5b5b56'},d:()=>Rd('#a3a39a')+F(60,560,16,'#fff',.8,'#c4c4bb')+F(300,570,14,'#fff',.8,'#c4c4bb')+S('#9a9a90')},
 p6:{n:'ورد أبيض',v:{bg:'linear-gradient(160deg,#f7f7f6,#dedddc)',fg:'#6a6060',ac:'#8c7f7f',qb:'#fff',qd:'#6a6060'},d:()=>F(34,44,66,'#fff',.95,'#cfcaca')+F(120,18,40,'#fff',.9,'#cfcaca')+L(70,100,50,5,90,'#e2dfdf',.9)+F(330,150,56,'#fff',.95,'#cfcaca')+F(30,600,62,'#fff',.95,'#cfcaca')+F(326,610,60,'#fff',.95,'#cfcaca')+L(160,626,-10,6,120,'#e2dfdf',.9)},
 p7:{n:'بوهو ذهبي',v:{bg:'radial-gradient(circle at 30% 20%,rgba(255,255,255,.5),transparent 60%),linear-gradient(160deg,#ebe6de,#d9d2c6)',fg:'#4f4330',ac:'#b8903c',qb:'#fff',qd:'#4f4330'},d:()=>Fr(16,'#b8903c',0,.85)+'<path d="M0 70L70 0" stroke="#b8903c" opacity=".8"/>'+Fan(52,84,-20,'#d7b7ae')+F(40,50,38,'#e6c4c4',.95)+F(78,76,28,'#f2dacd',.95)+Fan(310,574,160,'#d7b7ae')+F(322,592,36,'#e6c4c4',.95)+F(286,612,26,'#f2dacd',.95)},
 p8:{n:'شامبين وذهب',v:{bg:'linear-gradient(170deg,#fbf3e6,#ecd9b9)',fg:'#6a5230',ac:'#b08a3e',qb:'#fffaf0',qd:'#6a5230'},d:()=>Fr(12,'#b08a3e',8,.7)+L(14,40,35,6,120,'#d1b36b',.9)+L(346,600,-145,6,120,'#d1b36b',.9)+S('#d9bd7c')},
 p9:{n:'مريمية',v:{bg:'linear-gradient(170deg,#eef2e8,#cfdcc6)',fg:'#3d5240',ac:'#5f8260',qb:'#fff',qd:'#3d5240'},d:()=>L(0,40,40,7,150,'#8fae88',.8)+L(360,600,-140,7,150,'#8fae88',.8)+F(60,60,24,'#fff',.95,'#cfd9c8')+F(310,590,24,'#fff',.95,'#cfd9c8')+F(300,60,18,'#fff',.9,'#cfd9c8')},
 p10:{n:'أزرق فضي',v:{bg:'linear-gradient(170deg,#eef4f8,#c9dae7)',fg:'#2f4a60',ac:'#4f7fa3',qb:'#fff',qd:'#2f4a60'},d:()=>Fr(12,'#5b8bb0',8,.5)+L(10,50,35,6,130,'#9db6c9',.9)+L(350,590,-145,6,130,'#9db6c9',.9)+S('#7da2c4')},
 p11:{n:'عنابي وذهب',v:{bg:'linear-gradient(165deg,#4d1a2c,#2b0c19)',fg:'#f9e6e8',ac:'#e3b86e',qb:'#f9e6e8',qd:'#2b0c19'},d:()=>Fr(12,'#e3b86e',10,.8)+Fr(20,'#e3b86e',6,.35)+S('#e3b86e')+L(24,610,-30,5,90,'#e3b86e',.7)+L(336,30,150,5,90,'#e3b86e',.7)},
 p12:{n:'ليلكي وقمر',v:{bg:'linear-gradient(165deg,#efe9fb,#cbbbed)',fg:'#473771',ac:'#6d4cb8',qb:'#fff',qd:'#473771'},d:()=>'<circle cx="290" cy="64" r="30" fill="#fff" opacity=".7"/><circle cx="302" cy="58" r="26" fill="#d9ccf3" opacity=".9"/>'+S('#fff')+F(36,604,40,'#b7a1e6',.8)+F(326,610,36,'#b7a1e6',.8)+L(70,626,-10,5,80,'#a692d8',.7)}
};
export const TPL={
 w:Object.entries(WT).map(([k,v])=>[k,v.n]),
 c:[['f1','كحلي رسمي'],['f2','أبيض وأزرق'],['f3','أخضر رسمي'],['f4','أسود وذهبي']]};
export const DEF={
 w:{kick:'تتشرف',mono:'غ & ه',title:'أم راشد',msg:'بدعوتكم لحضور حفل زفاف ابنتها',names:'غيداء & هاني',sub:'ابنة عبدالله — وابن فوزي',date:'يوم الاثنين 8 يونيو 2026',time:'الاستقبال 9:00 م — الزفة 11:00 م',place:'قاعة الماس - الكويت',dua:'وبحضوركم يكتمل الفرح والسرور',map:''},
 c:{kick:'دعوة حضور',mono:'2027',title:'مؤتمر التقنية والابتكار',names:'برعاية شركة فلان',msg:'يسعدنا دعوتكم لحضور المؤتمر السنوي والاطلاع على أحدث التوجهات.',sub:'',date:'الأحد 7 مارس 2027',time:'9:00 صباحاً',place:'فندق الشرق - قاعة المؤتمرات',dua:'',map:''}};
const HTML='<svg class="orn" viewBox="0 0 360 640"></svg><div class="fx"><i></i><i></i><i></i><i></i><i></i></div><div class="in"><div class="mono"></div><div class="kick"></div><h2 class="ttl"></h2><p class="msg"></p><div class="nms"></div><div class="sub"></div><div class="inf"><b class="dt"></b><br><span class="tp"></span></div><div class="dua"></div><div class="gst">الضيف الكريم: <b class="gn"></b></div><div class="qrs"><div class="qb"><div class="qr q1"></div><span>دخول الضيف</span></div><div class="qb q2w"><div class="qr q2"></div><span>موقع الحفل</span></div></div><div class="cd"></div></div>';
export function mount(c,id){
 const T=WT[id]||(/^w\d/.test(id)?WT.p1:null);
 c.innerHTML=HTML;
 if(T){c.className='card wd';c.style.cssText=Object.entries(T.v).map(([k,v])=>'--'+k+':'+v).join(';');c.querySelector('.orn').innerHTML=T.d()}
 else{c.className='card '+id;c.removeAttribute('style')}
}
export function fill(c,ev,gn,code){
 const q=s=>c.querySelector(s),T=(s,v)=>q(s).textContent=v||'';
 T('.kick',ev.kick);T('.mono',ev.mono);T('.ttl',ev.title);T('.nms',ev.names);T('.msg',ev.msg);T('.sub',ev.sub);T('.dua',ev.dua);T('.dt',ev.date);
 T('.tp',[ev.time,ev.place].filter(Boolean).join('  •  '));T('.gn',gn);T('.cd','INV '+code);
 const cs=getComputedStyle(c),qd=cs.getPropertyValue('--qd').trim()||'#000',ql=cs.getPropertyValue('--qb').trim()||'#fff';
 const mk=(s,t)=>{const e=q(s);e.innerHTML='';new QRCode(e,{text:t,width:140,height:140,colorDark:qd,colorLight:ql,correctLevel:QRCode.CorrectLevel.M})};
 mk('.q1','INV|'+code);
 q('.q2w').style.display=ev.map?'':'none';if(ev.map)mk('.q2',ev.map);
}
export function fit(stage,card){const s=Math.min(1,stage.clientWidth/360);card.style.transform='scale('+s+')';stage.style.height=Math.round(H*s)+'px'}
export const cap=c=>html2canvas(c,{scale:3,backgroundColor:null,onclone:d=>{d.getElementById('card').style.transform='none';const s=d.createElement('style');s.textContent='*{animation:none!important}';d.head.appendChild(s)}});
export const blob=cv=>new Promise(r=>cv.toBlob(r,'image/png'));
export const clean=n=>n.replace(/[^\w\u0600-\u06FF ]/g,'');
export function save(b,name){const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000)}
export async function zipAll(card,ev,list,prog){
 const z=new JSZip();
 for(let i=0;i<list.length;i++){prog(i+1);fill(card,ev,list[i].n,list[i].c);await new Promise(r=>setTimeout(r,90));
  z.file(String(i+1).padStart(3,'0')+' - '+clean(list[i].n)+'.png',await blob(await cap(card)))}
 return z.generateAsync({type:'blob'});
}
export const rand=()=>Math.random().toString(36).slice(2,8).toUpperCase();
