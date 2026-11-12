import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import * as FS from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import * as AU from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {firebaseConfig} from './firebase-config.js';
const app=initializeApp(firebaseConfig);
export const db=FS.getFirestore(app),auth=AU.getAuth(app);
export {FS,AU};
export const $=id=>document.getElementById(id);
export const TPL={
 w:[['w1','ورد ناعم'],['w2','لؤلؤ وذهب'],['w3','ليلكي نجوم'],['w4','مريمية'],['w5','روز بورجندي'],['w6','سماوي فقاعات']],
 c:[['f1','كحلي رسمي'],['f2','أبيض وأزرق'],['f3','أخضر رسمي'],['f4','أسود وذهبي']]};
export const DEF={
 w:{kick:'دعوة زواج',mono:'م ❖ ن',title:'أفراح آل فلان',names:'محمد & نورة',msg:'يتشرف آل فلان بدعوتكم لحضور حفل زفاف نجلهم، وتشريفكم لنا يكمل فرحتنا.',date:'الخميس 15 يناير 2027',time:'8:00 مساءً',place:'قاعة الماس - الكويت',map:''},
 c:{kick:'دعوة حضور',mono:'2027',title:'مؤتمر التقنية والابتكار',names:'برعاية شركة فلان',msg:'يسعدنا دعوتكم لحضور المؤتمر السنوي والاطلاع على أحدث التوجهات.',date:'الأحد 7 مارس 2027',time:'9:00 صباحاً',place:'فندق الشرق - قاعة المؤتمرات',map:''}};
const HTML='<div class="fx"><i></i><i></i><i></i><i></i><i></i></div><div class="in"><div class="kick"></div><div class="mono"></div><h2 class="ttl"></h2><div class="nms"></div><p class="msg"></p><div class="inf"><b class="dt"></b><br><span class="tp"></span></div><div class="gst">الضيف الكريم: <b class="gn"></b></div><div class="qrs"><div class="qb"><div class="qr q1"></div><span>دخول الضيف</span></div><div class="qb q2w"><div class="qr q2"></div><span>موقع الحفل</span></div></div><div class="cd"></div></div>';
export function mount(c,t){c.className='card '+t;c.innerHTML=HTML}
export function fill(c,ev,gn,code){
 const q=s=>c.querySelector(s),T=(s,v)=>q(s).textContent=v||'';
 T('.kick',ev.kick);T('.mono',ev.mono);T('.ttl',ev.title);T('.nms',ev.names);T('.msg',ev.msg);T('.dt',ev.date);
 T('.tp',[ev.time,ev.place].filter(Boolean).join('  •  '));T('.gn',gn);T('.cd','INV '+code);
 const cs=getComputedStyle(c),qd=cs.getPropertyValue('--qd').trim()||'#000',ql=cs.getPropertyValue('--qb').trim()||'#fff';
 const mk=(s,t)=>{const e=q(s);e.innerHTML='';new QRCode(e,{text:t,width:156,height:156,colorDark:qd,colorLight:ql,correctLevel:QRCode.CorrectLevel.M})};
 mk('.q1','INV|'+code);
 q('.q2w').style.display=ev.map?'':'none';if(ev.map)mk('.q2',ev.map);
}
export function fit(stage,card){const s=Math.min(1,stage.clientWidth/360);card.style.transform='scale('+s+')';stage.style.height=Math.round(620*s)+'px'}
export const cap=c=>html2canvas(c,{scale:2,backgroundColor:null,onclone:d=>{d.getElementById('card').style.transform='none';const s=d.createElement('style');s.textContent='*{animation:none!important}';d.head.appendChild(s)}});
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
