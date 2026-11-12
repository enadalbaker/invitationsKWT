import {db,auth,FS,AU,$,TPL,DEF,mount,fill} from './common.js?v=4';
const F=['kick','mono','title','names','msg','date','time','place','map','sub','dua'];
let type='w',tpl='w1',cur=null,tm;
const val=()=>{const v={type,tpl,name:$('eName').value};F.forEach(k=>v[k]=$('f_'+k).value);return v};
const url=(p,id)=>new URL(p+'?e='+id,location.href).href;
function gal(){const b=$('gal');b.innerHTML='';const v=val();
 TPL[type].forEach(([t,n])=>{const w=document.createElement('div'),m=document.createElement('div'),c=document.createElement('div'),l=document.createElement('div');
  w.className='mw';m.className='mini'+(t===tpl?' on':'');l.textContent=n;m.append(c);w.append(m,l);b.append(w);
  mount(c,t);fill(c,v,'اسم الضيف','DEMO');m.onclick=()=>{tpl=t;gal()}})}
function setType(t,reset){type=t;tpl=TPL[t][0][0];$('tW').className=t==='w'?'on':'';$('tC').className=t==='c'?'on':'';
 if(reset)F.forEach(k=>$('f_'+k).value=DEF[t][k]);gal()}
function links(){$('links').hidden=!cur;if(cur){$('lc').value=url('client.html',cur);$('ls').value=url('scan.html',cur)}}
function load(id,v){cur=id;type=v.type;tpl=v.tpl;$('eName').value=v.name||'';F.forEach(k=>$('f_'+k).value=v[k]||'');
 $('tW').className=type==='w'?'on':'';$('tC').className=type==='c'?'on':'';gal();links();scrollTo(0,0)}
async function list(){const s=await FS.getDocs(FS.query(FS.collection(db,'events'),FS.orderBy('createdAt','desc')));const b=$('evs');b.innerHTML='';
 s.docs.forEach(d=>{const v=d.data(),r=document.createElement('div');r.className='row';const t=document.createElement('span');t.textContent=(v.name||'بدون اسم')+' — '+(v.title||'');r.append(t);
  [['تعديل',()=>load(d.id,v)],['رابط العميل',()=>navigator.clipboard.writeText(url('client.html',d.id))],['رابط الماسح',()=>navigator.clipboard.writeText(url('scan.html',d.id))],
   ['حذف',async()=>{if(confirm('حذف هذه الفعالية؟')){await FS.deleteDoc(FS.doc(db,'events',d.id));if(cur===d.id){cur=null;links()}list()}}]]
  .forEach(([n,f])=>{const x=document.createElement('button');x.textContent=n;x.onclick=f;r.append(x)});b.append(r)})}
AU.onAuthStateChanged(auth,u=>{$('login').hidden=!!u;$('app').hidden=!u;if(u){setType('w',true);list()}});
$('lg').onclick=()=>AU.signInWithEmailAndPassword(auth,$('em').value,$('pw').value).catch(()=>$('lerr').textContent='بيانات الدخول غير صحيحة');
$('tW').onclick=()=>setType('w',true);$('tC').onclick=()=>setType('c',true);
$('nw').onclick=()=>{cur=null;$('eName').value='';setType('w',true);links()};
[...F.map(k=>$('f_'+k))].forEach(e=>e.addEventListener('input',()=>{clearTimeout(tm);tm=setTimeout(gal,350)}));
$('sv').onclick=async()=>{const v=val();if(cur)await FS.setDoc(FS.doc(db,'events',cur),v,{merge:true});
 else cur=(await FS.addDoc(FS.collection(db,'events'),{...v,createdAt:Date.now()})).id;links();list()};
