var _s2=send;
send=async function(t,v){
t=(t||$("i").value||"").trim();
var m=t.match(/^(search|wiki|khoj)[:\s]+(.+)/i);
if(!m||busy)return _s2(t,v);
var q=m[2];$("i").value="";
$("at").innerHTML='<span class="chip">Wikipedia me dhoondh raha hoon...</span>';
try{
var r=await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch="+encodeURIComponent(q));
var j=await r.json();var h=j.query.search[0];
if(!h)throw new Error("kuch nahi mila");
var r2=await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(h.title));
var s=await r2.json();
att.push({n:"Wikipedia: "+h.title,t:s.extract||""});
}catch(e){$("at").innerHTML="";return local(t,"Search nahi ho paya ("+e.message+"). Internet check karo.")}
$("at").innerHTML="";
return _s2(q+"\n\nSirf upar di gayi Wikipedia jaankari ke aadhar par jawab do.",v)};
//end
