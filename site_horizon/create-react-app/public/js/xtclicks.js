//-- AT Ergonomics A-B-C 3.3.2 -- Copyright 2015 AT INTERNET, All Rights Reserved.
//-- (to be used with AT Tag 4.6.1 or later)
var scriptOnClickZone=2,xtautoredir=true,xtczv='3.3.2',xtdtmp=0,xtdt2=new Date(),xtel=new xtE(xtdt2.getTime()),xtn=navigator,un=undefined,nu=null,cZ='xtcz',oC='onclick',cL='xtclib',cT='xtcltype',dT='xtdztype',tR=true,fA=false,isI=(/MSIE/.test(xtn.userAgent))?tR:fA,isOP=(/Opera/.test(xtn.userAgent))?tR:fA,isS=(/Safari/.test(xtn.userAgent))?tR:fA,isM=(xtn.appVersion.indexOf('Mac',0)>=0)?tR:fA,xtobj=new Array(),xtcz=new Array(),typcz=new Array(),sizex=new Array(),sizey=new Array(),posx=new Array(),posy=new Array(),larg=0,haut=0,xt_valdz=nu,hit=fA,fO=fA,xt_valsv=nu;
var timecz=new Array(),timerefcz=new Array(),timercz=new Array(),xttime=typeof(window['xttimez'])!='undefined'?window['xttimez']:10,xtczdom;
function xtP(oEl,inTYPE){if(typeof(oEl.offsetParent)!=un){var sType='oEl.offset'+inTYPE;for(var iVal=0;oEl;oEl=oEl.offsetParent){iVal+=eval(sType)}return iVal}else{if(inTYPE=='Left')return oEl.x;if(inTYPE=='Top')return oEl.y}return-1}
function xtSx(xl){var szx=(xtnN(xl)=='AREA')?xtAs(xl).w:xl.offsetWidth;if((szx==nu)||(szx==un)||(szx=='')){if(xl.style.width!=nu)szx=xl.style.width;else szx=0}if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu)&&(xl.lastChild!=nu))szx=xl.lastChild.offsetLeft+xl.lastChild.offsetWidth-xl.firstChild.offsetLeft;if((szx==nu)||(szx==un)||(szx=='')){szx=0}return parseInt(szx,10)}
function xtSy(xl){var szy=(xtnN(xl)=='AREA')?xtAs(xl).h:xl.offsetHeight;if((szy==nu)||(szy==un)||(szy=='')){if(xl.style.height!=nu)szy=xl.style.height;else szy=0}if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu)&&(xl.lastChild!=nu))szy=xl.lastChild.offsetTop+xl.lastChild.offsetHeight-xl.firstChild.offsetTop;if((szy==nu)||(szy==un)||(szy=='')){szy=0}return parseInt(szy,10)}
function xtPx(xl){var psx=(xtnN(xl)=='AREA')?xtAp(xl).x:xtP(xl,'Left');return parseInt(psx,10)}
function xtPy(xl){var psy=(xtnN(xl)=='AREA')?xtAp(xl).y:xtP(xl,'Top');if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu))psy+=xl.firstChild.offsetTop;return parseInt(psy,10)}
function xtAs(xl){var rect=xtAb(xl),width=rect.right-rect.left,height=rect.bottom-rect.top;return{w:width,h:height}}
function xtAb(xl){if(xl['rectDefined'])return{left:xl.rLeft,top:xl.rTop,right:xl.rRight,bottom:xl.rBottom};if(!xl.shape)xl.shape='rect';var coords=xl.coords.split(','),result;if(xl.shape.toLowerCase()=='rectangle'||xl.shape.toLowerCase()=='rect'){result={left:parseInt(coords[0]),top:parseInt(coords[1]),right:parseInt(coords[2]),bottom:parseInt(coords[3])}}if(xl.shape.toLowerCase()=='circle'||xl.shape.toLowerCase()=='circ'){result={left:parseInt(coords[0])-parseInt(coords[2]),top:parseInt(coords[1])-parseInt(coords[2]),right:parseInt(coords[0])+parseInt(coords[2]),bottom:parseInt(coords[1])+parseInt(coords[2])}}if(xl.shape.toLowerCase()=='polygon'||xl.shape.toLowerCase()=='poly'){var l_ex,t_ex,r_ex,b_ex;for(var i=0;i<coords.length;i+=2){var co=parseInt(coords[i]);if(l_ex==un||co<l_ex)l_ex=co;if(r_ex==un||co>r_ex)r_ex=co}for(var i=1;i<coords.length;i+=2){var co=parseInt(coords[i]);if(t_ex==un||co<t_ex)t_ex=co;if(b_ex==un||co>b_ex)b_ex=co}result={left:l_ex,top:t_ex,right:r_ex,bottom:b_ex}}xl.rectDefined=tR;xl.rLeft=result.left;xl.rRight=result.right;xl.rTop=result.top;xl.rBottom=result.bottom;return result}
function xtAp(area,target){var map=xtpN(area);if(!map.dstElement){if(!target){target=xd}var elts=target.getElementsByTagName('*');if(elts['toArray'])elts=elts.toArray();for(var i=0;i<elts.length;i++){var xl=elts[i];if(xl.useMap){if(xl.useMap.replace('#','')==map.name)break}xl=nu}map.dstElement=xl}if(map.dstElement){var basePx=xtP(map.dstElement,'Left'),basePy=xtP(map.dstElement,'Top'),rect=xtAb(area);return{x:(basePx+rect.left),y:(basePy+rect.top)}}else{return{x:-1,y:-1}}}
function xtNodesload(){if(xw.xt8!=0){xw.xtczdom=xw.xtLogDom?xw.xtLogDom:'.xiti.com/hit.xiti';var desc=xd.getElementsByTagName('*');for(var i=0;i<desc.length;i++){if(xtL(desc[i]))xtel.xttab.push(desc[i]);if(xtLDz(desc[i]))xtobj.push(desc[i])}for(var j=0;j<xtel.xttab.length;j++){if(xtel.xttab[j].nodeName=='OBJECT'||xtel.xttab[j].nodeName=='EMBED'){if(xd.addEventListener)xtel.xttab[j].addEventListener('mousedown',xtR,fA);else if(xd.attachEvent)xtel.xttab[j].attachEvent('onmousedown',xtR)}else{if(xd.addEventListener)xtel.xttab[j].addEventListener('click',xtR,fA);else if(xd.attachEvent)xtel.xttab[j].attachEvent('onclick',xtR)}}for(var l=0;l<xtobj.length;l++){xtcz[l]=xtG(xtobj[l],cZ);if((xtG(xtobj[l],dT)!=nu)&&(xtG(xtobj[l],dT)!=un))typcz[l]=xtG(xtobj[l],dT);else typcz[l]='0';sizex[l]=xtSx(xtobj[l]);sizey[l]=xtSy(xtobj[l]);posx[l]=xtPx(xtobj[l]);posy[l]=xtPy(xtobj[l]);timecz[xtcz[l]]=0;timerefcz[xtcz[l]]=0;timercz[xtcz[l]]=nu}xtReload();if(xw.addEventListener){xw.addEventListener('scroll',xtReload,fA);xw.addEventListener('resize',xtReload,fA);xw.addEventListener('focus',xtReload,fA);xw.addEventListener('blur',xtCTimer,fA)}else if(xw.attachEvent){xw.attachEvent('onscroll',xtReload);xw.attachEvent('onresize',xtReload)}if(xd.addEventListener){xd.addEventListener('mousemove',xtRefresh,fA);xd.addEventListener('keydown',xtRefresh,fA)}else if(xd.attachEvent){xd.attachEvent('onfocusin',xtReload);xd.attachEvent('onfocusout',xtCTimer);xd.attachEvent('onmousemove',xtRefresh);xd.attachEvent('onkeydown',xtRefresh)}}}
function xtRefresh(){for(var m=0;m<xtobj.length;m++){timerefcz[xtcz[m]]=0}}
function xtReload(){larg=xtcW();haut=xtcH();xtAffDz();xtAffSv()}
function xtCTimer(){for(var m=0;m<xtobj.length;m++){if(timercz[xtcz[m]]!=nu){xw.clearInterval(timercz[xtcz[m]]);timercz[xtcz[m]]=nu;timerefcz[xtcz[m]]=0}}}
function xtTime(i){if(timercz[xtcz[i]]!=nu){timecz[xtcz[i]]+=1;timerefcz[xtcz[i]]+=1;if((timerefcz[xtcz[i]]%xttime)==0){xw.clearInterval(timercz[xtcz[i]]);timercz[xtcz[i]]=nu;timerefcz[xtcz[i]]=0;if(xd.addEventListener){xd.addEventListener('mousemove',xtAffDz,fA);xd.addEventListener('keydown',xtAffDz,fA)}else if(xd.attachEvent){xd.attachEvent('onmousemove',xtAffDz);xd.attachEvent('onkeydown',xtAffDz)}}}}
function xtAffDz(){if(xd.removeEventListener){xd.removeEventListener('mousemove',xtAffDz,fA);xd.removeEventListener('keydown',xtAffDz,fA)}else if(xd.detachEvent){xd.detachEvent('onmousemove',xtAffDz);xd.detachEvent('onkeydown',xtAffDz)}for(var m=0;m<xtobj.length;m++){var scTop=xtsT(),scLeft=xtsL();var p=0,pX=0,pY=0;if((posy[m]>=scTop)&&((posy[m]+sizey[m])<=(scTop+haut)))pY=100;else if(((posy[m]<scTop)&&((posy[m]+sizey[m])<=(scTop)))||(posy[m]>=(scTop+haut)))pY=0;else if((posy[m]<=scTop)&&((posy[m]+sizey[m])>=(scTop+haut)))pY=(haut/sizey[m])*100;else if(posy[m]<scTop)pY=((posy[m]+sizey[m]-scTop)/sizey[m])*100;else if((posy[m]+sizey[m])>(scTop+haut))pY=((scTop+haut-posy[m])/sizey[m])*100;if((posx[m]>=scLeft)&&((posx[m]+sizex[m])<=(scLeft+larg)))pX=100;else if(((posx[m]<scLeft)&&((posx[m]+sizey[m])<=(scLeft)))||(posx[m]>=(scLeft+larg)))pX=0;else if((posx[m]<=scLeft)&&((posx[m]+sizex[m])>=(scLeft+larg)))pX=(larg/sizex[m])*100;else if(posx[m]<scLeft)pX=((posx[m]+sizex[m]-scLeft)/sizex[m])*100;else if((posx[m]+sizex[m])>(scLeft+larg))pX=((scLeft+larg-posx[m])/sizex[m])*100;var Ly=(pY*sizey[m])/100,Lx=(pX*sizex[m])/100,areaA=Lx*Ly,areaT=sizex[m]*sizey[m];p=Math.round((areaA/areaT)*100);if(timercz[xtcz[m]]!=nu){xw.clearInterval(timercz[xtcz[m]]);timercz[xtcz[m]]=nu;timerefcz[xtcz[m]]=0}if(p>0){timercz[xtcz[m]]=xw.setInterval("xtTime("+m+");",1000)}xtCDz(xtcz[m],p,(p==0)?0:1,typcz[m])}}
function xtAffSv(){var lY=xtdH(),scTop=xtsT(),pY=Math.round((scTop+haut)/lY*100);pY=(pY>100)?100:pY;pY=(pY<0)?0:pY;if(scTop==0)fO=tR;if(fO)xtCSv(pY)}
function xtLDz(xl){var xlel=['DIV','TABLE','TR','TD','UL','LI','ARTICLE','FOOTER','ASIDE','HEADER','NAV','SECTION'],xeln=xtnN(xl);for(var i=0;i<xlel.length;i++){if((xeln==xlel[i])&&(xl.nodeType==1)&&(xtG(xl,cZ)!=nu)&&(xtG(xl,cZ)!=un)){var xelp=xtpN(xl);while(xelp){if((xelp.nodeType==1)&&(xtG(xelp,cZ)!=nu)&&(xtG(xelp,cZ)!=un))return fA;xelp=xtpN(xelp)}return tR}}return fA}
function xtEx2(xat){var r=new RegExp('&s2=','gi');if(r.test(xat.toString())){xat=xat.replace(r,'')}return xat}
function xtEx(xext){var valext=['.aac','.ace','.ape','.art','.avi','.bak','.bat','.bin','.bmp','.bsp','.cab','.ccd','.cda','.chm','.clp','.css','.csv','.cue','dic','dll','.doc','.dot','.exe','.fla','.flac','.gif','.gz','.hlp','.ico','.img','.iso','.jpeg','.jpg','.js','.lnk','.m2a','.m2v','.m3u','.mdb','.mdf','.mds','.mid','.midi','.mkv','.mod','.mov','.mp2','.mp3','.mp4','.mpc','.mpg','.mpeg','.msi','.nfo','.nrg','.obd','.ocx','.ogg','.old','.ogm','.pdf','.png','.pps','.ppt','.psd','.psp','.rar','.raw','.reg','.rm','.ram','.rtf','.swf','.tar','.tga','.tgz','.theme','.tif','.tiff','.tmp','.torrent','.ttf','.txt','.url','.vbs','.vob','.wab','.wav','.wdb','.wks','.wml','.wma','.wmv','.wpf','.xls','.xml','.zip','.7z'];for(var i=0;i<valext.length;i++){if(xext==valext[i])return tR}return fA}
function xtTr(xl){var xut=['BODY','HTML'];for(var i=0;i<xut.length;i++){if(xl.tagName==xut[i])return fA}return tR}
function xtEv(evt){var e_out,ie_var='srcElement',moz_var='target';evt[moz_var]?e_out=evt[moz_var]:e_out=evt[ie_var];return(e_out)}
function xtBdEv(evt){var e_out=(xw.event)?(xw.event.button==2):(evt.which==3);return(e_out)}
function xtCSv(p){var lY=xtdH(),percWin=Math.round((haut/lY)*100),nP=0,oldp=0;if(xt_valsv!=nu){oldp=parseInt(xt_valsv,10);if((p>oldp)&&(p<(oldp+percWin)))xt_valsv=p}else{xt_valsv=p}}
function xtV(xat){var r=/xt_med\(\s*.?C/i,r2=/xt_click\(\s*this\s*\,\s*.?C/i;return(r.test(xat.toString())||r2.test(xat.toString())||(xw.xtczcustomtag?xw.xtczcustomtag.isPresent(xat):false))}
function xtExT(xat){var page='',pageclz='',type='',section=-1,custom=(typeof xw.xtczcustomtag!='undefined')?xw.xtczcustomtag.getCustomTag(xat):null;if(!custom){var idx=(xat.indexOf('xt_med')>=0)?0:1,IdxSt=(idx==0)?xat.indexOf('xt_med'):xat.indexOf('xt_click'),start=xat.indexOf('(',IdxSt),stop=xat.indexOf(')',IdxSt),content=xtSub(xat,start+1,stop),tmp=start;while(content.indexOf('(')>0){tmp=stop+1;stop=xat.indexOf(')',stop+1);content=xtSub(xat,tmp+1,stop)}content=xtSub(xat,start+1,stop);xatab=content.split(/\,/);try{section=(xatab[idx+1])?String(eval(xatab[idx+1])):''}catch(e){section=(xatab[idx+1]||'')}try{page=(xatab[idx+2])?String(eval(xatab[idx+2])):''}catch(e){page=(xatab[idx+2]||'')}try{type=(xatab[idx+3])?String(eval(xatab[idx+3])):''}catch(e){type=(xatab[idx+3]||'')}}else{type=custom.typ||'';page=custom.lab||'';section=custom.sec||''}pageclz=page.replace(/(::)/g,'/');return{typ:type,pag:page,pagcl:pageclz,sec:section}}
function xtIdxOf(tab,v,n){n=(n==nu)?0:n;var m=tab.length;for(var i=n;i<m;i++)if(tab[i]==v)return i;return-1}
function xtT(xl){if(xl.innerHTML){var xtx=xl.innerHTML,r=new RegExp('<script[^>]*>','gi');if(r.test(xtx.toString()))return fA;xtx=(xtx.toString()).replace(/<\/?[^>]+>/gi,'');var regex=new RegExp('(&nbsp;)','g');xtx=(xtx.toString()).replace(regex,'');xtx=xtEn(xtx);var regex2=new RegExp('(%C2%A0)','g');xtx=(xtx.toString()).replace(regex2,'');try{xtx=xtDe(xtx)}catch(e){}xtx=(xtx.toString()).replace(/[\s]/gm,'');if((xtx.length==0)||(xtx==un)||(xtx==nu))return fA;return xtx}return fA}
function xtE(st){this.xttab=new Array();this.xst=st;this.xc=0;this.yc=0;this.sx=0;this.sy=0;this.px=0;this.py=0;this.xr=0;this.yr=0;this.bf='';this.af='';this.curr='';this.cliccz='';this.dest='';this.s=0;this.pcz='';this.s2cz='';this.t=0;this.idmod=0;this.p='';this.s2='';this.idpage=-1}
function xtH(){var d2=new Date();return(d2.getTime()-xtel.xst)}
function xtC(e){if(!e){if(xw.event){e=xw.event}else{return{x:-1,y:-1}}}var xc=-1,yc=-1;if(typeof(e.pageX)=='number'){xc=e.pageX;yc=e.pageY}else if(typeof(e.clientX)=='number'){xc=e.clientX;yc=e.clientY;var bad=(xw.xtn.userAgent.indexOf('Opera')+1)||(xw.ScriptEngine&&ScriptEngine().indexOf('InScript')+1)||(xtn.vendor=='KDE');if(!bad){if(xd.body&&(xd.body.scrollLeft||xd.body.scrollTop)){xc+=xd.body.scrollLeft;yc+=xd.body.scrollTop}else if(xd.documentElement&&(xd.documentElement.scrollLeft||xd.documentElement.scrollTop)){xc+=xd.documentElement.scrollLeft;yc+=xd.documentElement.scrollTop}}}else{return{x:-1,y:-1}}return{x:xc,y:yc}}
function xtExD(url){var u=url.replace(/((http)|(https)):\/\//g,''),p=u.indexOf('/');p=(p!=-1)?p:u.length;u=xtSub(u,0,p);return u}
function xtCt(xl,a){var xclict='',xext='',xurld='',target='',check='',xdoms=(xw.xt1!=nu&&xw.xt1!='')?xtSub(xw.xt1,8,xw.xt1.length):xd.domain,xdomd='',isAction=!1,curUrl=window.location.href,cleanUrl=curUrl.substring(0,(curUrl.indexOf('#')>0?curUrl.indexOf('#'):curUrl.length));if(xl){if((xtnN(xl)=='INPUT')&&(xl.type=='submit')){try{xurld=xtG(xl.form,'action').toString()}catch(e){}xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld);if(xl.form&&xl.form.getAttribute('data-xtredir'))check=(xl.form.getAttribute('data-xtredir'));}if((xtnN(xl)!='IMG')&&xl.href){xurld=(xl.href).toString();if(xurld.indexOf('#')>0&&xurld.substring(0,xurld.indexOf('#'))==cleanUrl)isAction=!0;if(xl.getAttribute('target'))target=(xl.getAttribute('target')).toString();if(xl.getAttribute('data-xtredir'))check=(xl.getAttribute('data-xtredir'));xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld)}else{var xlp=xtpN(xl);while(xlp&&xtnN(xlp)!='BODY'){if(xlp.href){xurld=(xlp.href).toString();if(xurld.indexOf('#')>0&&xurld.substring(0,xurld.indexOf('#'))==cleanUrl)isAction=!0;xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld);if(xlp.getAttribute('target'))target=(xlp.getAttribute('target')).toString();if(xlp.getAttribute('data-xtredir'))check=(xlp.getAttribute('data-xtredir'));break}xlp=xtpN(xlp)}}}if(xtEx(xext))xclict='T';else if((xdomd!='')&&(xdomd.indexOf(xdoms,0)<0)&&(xdomd!=xtSub(xdoms,1,xdoms.length)))xclict='S';else if(isAction){xclict='A'}else{xclict='N'}if(!a){if(xurld.length>255)xurld=xtSub(xurld,0,255);var ch=xurld;if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xurld=ch;try{if((xtDe(xurld)!=nu)&&(xtDe(xurld)!=un))xurld=xtDe(xurld)}catch(e){}}return{typ:xclict,url:xurld,tgt:target,ck:check}}
function xtL(xl){var xlel=['INPUT','SELECT','IFRAME','OBJECT','AREA','BUTTON'],xeln=xtnN(xl);if((xeln=='EMBED')&&(xtnN(xtpN(xl)))!='OBJECT'){return tR}if((xeln=='DIV')&&(xtG(xl,cL))){return tR}if((xeln=='SPAN')&&(xtG(xl,oC))){return tR}if((xeln=='SELECT')&&((xtG(xl,'onchange')==nu)||(xtG(xl,'onchange')==un)||(xtG(xl,'onchange')==''))){return fA}if((xeln=='INPUT')&&(xl.type!='submit')&&(xl.type!='image')&&(xl.type!='button')){return fA}if((xeln=='BUTTON')&&(xl.type!='submit')){return fA}if(xeln=='IMG'){var xlp=xtpN(xl);var xtTr=fA;while(xlp){if(xtnN(xlp)=='A'){xtTr=tR;if((((xtG(xlp,oC)!=nu)&&(xtG(xlp,oC)!=un)&&(xtG(xlp,oC)!=''))||((xtG(xlp,'href')!=nu)&&(xtG(xlp,'href')!=un)&&(xtG(xlp,'href')!='')))){return tR}}xlp=xtpN(xlp)}if((xtG(xl,oC)!=nu)&&(xtG(xl,oC)!=un)&&(xtG(xl,oC)!='')&&!xtTr)return tR}if((xeln=='A')&&(((xtG(xl,oC)!=nu)&&(xtG(xl,oC)!=un)&&(xtG(xl,oC)!=''))||((xtG(xl,'href')!=nu)&&(xtG(xl,'href')!=un)&&(xtG(xl,'href')!='')))){var xlp=xtpN(xl);while(xlp){if(((xtnN(xlp)=='DIV')&&(xtG(xlp,cL)))||((xtnN(xlp)=='SPAN')&&(xtG(xlp,oC))))return fA;xlp=xtpN(xlp)}var xtImg=fA,xtTxt=fA;if(xl.childNodes){var xtChild=xl.childNodes,j=0;while(j<xtChild.length&&!(xtImg&&xtTxt)){if(xtnN(xtChild[j])=='IMG'){xtImg=tR}else{xtTxt=tR}j++}}if(xtImg&&xtTxt)return tR;else if(xtImg)return fA;else return tR}for(var i=0;i<xlel.length;i++){if(xeln==xlel[i])return tR}return fA}
function xtLCz(xl){var xlel=['DIV','TABLE','TR','TD','UL','LI','ARTICLE','FOOTER','ASIDE','HEADER','NAV','SECTION'],xeln=xtnN(xl);for(var i=0;i<xlel.length;i++){if((xeln==xlel[i])&&(xl.nodeType==1)&&(xtG(xl,cZ)!=nu)&&(xtG(xl,cZ)!=un)){return tR}}return fA}
function xtNa(xl){if(xl&&!xtL(xl)){var xlp=xtpN(xl);while(xlp){if(xtL(xlp)){xl=xlp;break}xlp=xtpN(xlp)}}var obj=null,xid='',xtmedat='',xtmedp='',xtmeds='',type='',xurld='',xtTr=fA;if(xl){if((xtnN(xl)=='A')&&(xl.childNodes)){var xtChild=xl.childNodes,j=0;while((j<xtChild.length)&&!xtTr){if((xtChild[j].nodeType==1)&&!xtL(xtChild[j])&&(xtG(xtChild[j],cL))){xid=cL+xtG(xtChild[j],cL);xtTr=tR}j++}}if(!xtTr){if(xtG(xl,oC)&&xtV(xtG(xl,oC)))xid=xtG(xl,oC);else if(xl.href&&xtV(xl.href)){xid=xl.href;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else if(xtG(xl,cL))xid=cL+xtG(xl,cL);else if(xtT(xl))xid=xtT(xl);else if(xl.id)xid=xl.id;else if(xl.name)xid=xl.name;else if(xl.title)xid=xl.title;else if(xl.value)xid=xl.value;else if(xl.href){var ch=xl.href.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else if(xl.src){var ch=xl.src.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else{var xlp=xtpN(xl);while(xlp&&xtnN(xlp)!='BODY'){if(xtG(xlp,oC)&&xtV(xtG(xlp,oC))){xid=xtG(xlp,oC);break}else if(xlp.href&&xtV(xlp.href)){xid=xlp.href;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}else if(xtG(xl,cL)){xid=cL+xtG(xl,cL);break}else if(xtT(xlp)){xid=xtT(xlp);break}else if(xlp.id){xid=xlp.id;break}else if(xlp.name){xid=xlp.name;break}else if(xlp.title){xid=xlp.title;break}else if(xlp.value){xid=xlp.value;break}else if(xlp.href){var ch=xlp.href.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}else if(xlp.src){var ch=xlp.src.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}xlp=xtpN(xlp)}}}xid=(xid.toString()).replace(/[\s]/gm,'');if(xtV(xid)){obj=xtExT(xid);type=obj.typ;xtmedp=obj.pag;xtmeds=obj.sec;if(xtG(xl,cL))xid=cL+xtG(xl,cL);else xid=obj.pagcl}else{var xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtG(xlp,oC)&&xtV(xtG(xlp,oC))){xtmedat=xtG(xlp,oC);xtmedat=(xtmedat.toString()).replace(/[\s]/gm,'');obj=xtExT(xtmedat);type=obj.typ;xtmedp=obj.pag;xtmeds=obj.sec;break}else if(xlp.href&&xtV(xlp.href)){xtmedat=xlp.href;try{if((xtDe(xtmedat)!=nu)&&(xtDe(xtmedat)!=un))xtmedat=xtDe(xtmedat)}catch(e){}xtmedat=(xtmedat.toString()).replace(/[\s]/gm,'');obj=xtExT(xtmedat);type=obj.typ;xtmedp=obj.pag;xtmeds=obj.sec;break}xlp=xtpN(xlp)}}if(type==''){if(xtG(xl,cT)!=nu){type=xtG(xl,cT)}else{var xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtG(xlp,cT)!=nu){type=xtG(xlp,cT);break}xlp=xtpN(xlp)}}}if(type=='')type=xtCt(xl).typ;xurld=xtCt(xl).url;if(xtmedp==''){xtmedp=(xid.indexOf(cL,0)>=0)?xtExTc(xid):xid;if(xtmeds=='')xtmeds=xtEx2(xw.xt9)}var regex=new RegExp('(&)|[?]','g');xtmedp=(xtmedp.toString()).replace(regex,'_');if(xtmeds=='')xtmeds='0';var r=new RegExp('(::)','g');xid=(xid.toString()).replace(r,'/');var k=0,xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtLCz(xlp)&&(k<2)){xid=xtG(xlp,cZ)+'::'+xid;k+=1}xlp=xtpN(xlp)}}xid=xtSub(xid,0,255);xtmedp=xtSub(xtmedp,0,255);return{id:xid,pag:xtmedp,sec:xtmeds,typ:type,url:xurld}}
function xtExTc(xid){var r=new RegExp(cL,'gi');xid=xid.replace(r,'');return xid}
function xtR(e){xtel.t=Math.round(xtH()/1000);if(xtdtmp!=0&&(xtel.t-xtdtmp<1))return;xtdtmp=xtel.t;if(!e)e=xw.event;if(xtBdEv(e))return;var obj=null,xel=xtEv(e);if(xtTr(xel)){if(xtnN(xel)=='OPTION'){var xelp=xtpN(xel);while(xelp){xel=xelp;if(xtnN(xel)=='SELECT')break;xelp=xtpN(xelp)}}xtel.s=xw.xt8;xtel.pcz=xw.xtp;xtel.s2cz=xtEx2(xw.xt9);xtel.idmod=typeof(xw['xtidmod'])!='undefined'?xw['xtidmod']:0;obj=xtNa(xel);xtel.curr=obj.id;xtel.cliccz=obj.typ;xtel.dest=obj.url;xtel.p=obj.pag;xtel.s2=obj.sec;xtel.p=((xtel.p!='')&&(xtel.cliccz!='F'))?'&pmed='+xtEn(xtel.p):'';xtel.s2=((xtel.s2!='')&&(xtel.cliccz!='F'))?'&s2med='+xtEn(xtel.s2):'';if(xtel.cliccz=='F'){xtel.cliccz=xtCt(xl).typ}xtel.sx=xtSx(xel);xtel.sy=xtSy(xel);xtel.px=xtPx(xel);xtel.py=xtPy(xel);xtel.idpage=(xw.xtidpg!=nu)?xw.xtidpg:-1;if((xtel.px==-1)&&(xtel.py==-1))return;var tmpelt=xtEv(e);xtel.xc=((xtnN(tmpelt)=='OPTION')&&!isOP)?xtC(e).x+xtel.px:xtC(e).x;xtel.yc=xtC(e).y;if((xtel.xc==-1)&&(xtel.yc==-1))return;if(xd.compatMode=='BackCompat'&&isI){xtel.xc-=2;xtel.yc-=2}xtel.xr=(xtel.xc-xtel.px)/xtel.sx;xtel.yr=(xtel.yc-xtel.py)/xtel.sy;if((0<xtel.sx)&&(xtel.sx<=40))xtel.xr=0.5;if((40<xtel.sx)&&(xtel.sx<=250))xtel.xr=(Math.round(xtel.xr*10))/10;if(250<xtel.sx)xtel.xr=(Math.round(xtel.xr*100))/100;if((0<xtel.sy)&&(xtel.sy<=40))xtel.yr=0.5;if((40<xtel.sy)&&(xtel.sy<=250))xtel.yr=(Math.round(xtel.yr*10))/10;if(250<xtel.sy)xtel.yr=(Math.round(xtel.yr*100))/100;if(xtel.xr<0)xtel.xr=0;if(xtel.yr<0)xtel.yr=0;if(xtel.xr>1)xtel.xr=1;if(xtel.yr>1)xtel.yr=1;if((xtel.curr).indexOf(cL,0)<0){var idx=xtIdxOf(xtel.xttab,xel);var xelp=xtpN(xel);while((idx==-1)&&xelp){idx=xtIdxOf(xtel.xttab,xelp);xelp=xtpN(xelp)}xtel.bf=xtNa(xtel.xttab[idx-1]).id;xtel.af=xtNa(xtel.xttab[idx+1]).id;xtel.bf=((xtel.bf).indexOf(cL,0)>=0)?xtExTc(xtel.bf):xtel.bf;xtel.af=((xtel.af).indexOf(cL,0)>=0)?xtExTc(xtel.af):xtel.af}else{xtel.curr=xtExTc(xtel.curr);xtel.bf='';xtel.af='';xtel.dest=''}var name='';if((xtnN(xel)=='EMBED')&&isOP&&(xtpN(xel)!=nu)&&(xtpN(xel)!=un))name=xtpN(xel).name;else name=xel.name;if((name!=nu)&&(name!=un)&&((name).indexOf(cT)>=0))xtel.cliccz=name.replace(cT,'');var type=xtCt(xel).typ;var hitn=fA;if((xtel.cliccz=='N')&&(type!='N'))hitn=tR;var regex=new RegExp('(&)|[?]','g');xtel.curr=(xtel.curr.toString()).replace(regex,'_');xtel.bf=(xtel.bf.toString()).replace(regex,'_');xtel.af=(xtel.af.toString()).replace(regex,'_');xtel.dest=(xtel.dest.toString()).replace(regex,'_');var res='&xtczv='+xtczv+'&idmod='+xtel.idmod+'&current='+xtEn(xtel.curr)+'&before='+xtEn(xtel.bf)+'&after='+xtEn(xtel.af)+'&cliccz='+xtel.cliccz+'&dest='+xtEn(xtel.dest)+'&posx='+xtel.xr+'&posy='+xtel.yr+'&time='+xtel.t+xtel.p+xtel.s2;var dz='&dz=';if(xt_valdz!=nu){var reg1=new RegExp('XTL','gi'),reg2=new RegExp('[|]{2}','gi'),tabL=new Array();tabL=xt_valdz.split(reg1);for(var i=0;i<tabL.length;i++){if((tabL[i].length>0)&&(parseInt(tabL[i].split(reg2)[1],10)>0)){dz+=tabL[i].split(reg2)[0]+',';dz+=tabL[i].split(reg2)[1]+',';dz+=tabL[i].split(reg2)[2]+',';dz+=tabL[i].split(reg2)[4]+',';dz+=timecz[tabL[i].split(reg2)[0]]+'|'}}}var redir=xtCt(xel,1),redir_url=redir.url,redir_tgt=redir.tgt,redir_ok=!1,redir_chck=redir.ck;if(xtautoredir&&e.type=='click'&&redir_chck!='no'&&redir_url.indexOf('http')==0&&redir_tgt!='_blank'&&!e.defaultPrevented&&xtel.cliccz=='S'){e.preventDefault();redir_ok=1}if(((scriptOnClickZone==2)&&(xtel.cliccz!='N'))||(hitn==tR)){var hitdz='';if(xtel.cliccz=='S'){hit=tR;hitdz='&pv='+xt_valsv+dz}xtHit(xtsd+xw.xtczdom+'?s='+xtel.s+'&pcz='+xtEn(xtel.pcz)+'&s2cz='+xtEn(xtel.s2cz)+((typeof(xt40)!='undefined')?'&idclient='+xt40:''),res+hitdz,1,1,xtel.idpage);if(redir_ok){var time=typeof xw.xttredir!='undefined'?xw.xttredir:500;if(xel.form){xtSubmit(xel.form,time);}else{xtRedir(redir_url,redir_tgt,time)}}}else if((scriptOnClickZone!=2)&&(xtel.cliccz=='S')){hit=tR;xtHit(xtsd+xw.xtczdom+'?s='+xtel.s+'&pcz='+xtEn(xtel.pcz)+'&s2cz='+xtEn(xtel.s2cz)+'&idmod='+xtel.idmod+'&xtczv='+xtczv+((typeof(xt40)!='undefined')?'&idclient='+xt40:''),'&pv='+xt_valsv+dz,1,1,xtel.idpage);if(redir_ok){var time=typeof xw.xttredir!='undefined'?xw.xttredir:500;if(xel.form){xtSubmit(xel.form,time);}else{xtRedir(redir_url,redir_tgt,time)}}}else if(xtel.cliccz=='N'){hit=tR;xtCzW(encodeURIComponent('&idpcz='+xtel.idpage+res+dz+'&pv='+xt_valsv).replace(/-/g,"%at1%").replace(/_/g,"%at2%").replace(/\./g,"%at3%").replace(/!/g,"%at4%").replace(/~/g,"%at5%").replace(/\*/g,"%at6%").replace(/'/g,"%at7%").replace(/\(/g,"%at8%").replace(/\)/g,"%at9%"));}}}
function xtRedir(url,tgt,time){var a='.location.href="';switch(tgt){case'_self':setTimeout('self'+a+url+'"',time);break;case'_top':setTimeout('top'+a+url+'"',time);break;case'_parent':setTimeout('parent'+a+url+'"',time);break;case'':setTimeout('self'+a+url+'"',time);break;default:setTimeout('self'+a+url+'"',time);break}}
function xtSubmit(obj,time){setTimeout(function(){obj.submit();},time);}
function xtCDz(name,p,nbf,typcz){var nbFv=nbf,nP=0,valP=0,trv=fA,reg1=new RegExp('XTL','gi'),reg2=new RegExp('[|]{2}','gi'),valC='';if(xt_valdz!=nu){var tabL=new Array();tabL=xt_valdz.split(reg1);for(var i=0;i<tabL.length;i++){if(tabL[i].length>0){nP=parseInt(tabL[i].split(reg2)[1],10);nbFv=parseInt(tabL[i].split(reg2)[2],10);valP=parseInt(tabL[i].split(reg2)[3],10);if((valP==0)&&(parseInt(p,10)>0)&&(nP!=parseInt(p,10))){try{xt_areaDisplayed(tabL[i].split(reg2)[0])}catch(e){}}if(name==tabL[i].split(reg2)[0]){trv=tR;if(parseInt(p,10)>parseInt(tabL[i].split(reg2)[1],10)){nP=parseInt(p,10);nbFv=1;valP=parseInt(p,10);}else if((parseInt(p,10)==parseInt(tabL[i].split(reg2)[1],10))&&(parseInt(tabL[i].split(reg2)[3],10)<parseInt(p,10))){nbFv=parseInt(tabL[i].split(reg2)[2],10)+1;valP=parseInt(p,10)}else if(parseInt(p,10)<parseInt(tabL[i].split(reg2)[1],10))valP=parseInt(p,10)}valC+=tabL[i].split(reg2)[0]+'||'+nP+'||'+nbFv+'||'+valP+'||'+tabL[i].split(reg2)[4]+'XTL'}}if(!trv)valC+=name+'||'+p+'||'+nbf+'||'+p+'||'+typcz+'XTL'}else{valC=name+'||'+p+'||'+nbf+'||'+p+'||'+typcz+'XTL'}xt_valdz=valC;}
function xtCzW(v){var xtcznb=new Date();xtcznb.setTime(xtcznb.getTime()+45000);xd.cookie='xtvalCZ='+v+';expires='+xtcznb.toGMTString()+' ;path=/'+xw.xt1}
function xtdH(){var off=xd.documentElement?parseInt(xd.documentElement.offsetHeight,10):0,sc=xd.documentElement?parseInt(xd.documentElement.scrollHeight,10):0,boff=xd.body?parseInt(xd.body.offsetHeight,10):0,bsc=xd.body?parseInt(xd.body.scrollHeight,10):0;return xtMax(xtMax(off,boff),xtMax(sc,bsc))}
function xtcW(){var val=xtfR(xw.innerWidth?parseInt(xw.innerWidth,10):0,xd.documentElement?parseInt(xd.documentElement.clientWidth,10):0),val2=xd.body?parseInt(xd.body.clientWidth,10):0;return((val==0)?val2:val)}
function xtcH(){var val=xtfR(xw.innerHeight?parseInt(xw.innerHeight,10):0,xd.documentElement?parseInt(xd.documentElement.clientHeight,10):0),val2=xd.body?parseInt(xd.body.clientHeight,10):0;return((val==0)?val2:val)}
function xtsL(){var pag=xw.pageXOffset?parseInt(xw.pageXOffset,10):0,sl=xd.documentElement?parseInt(xd.documentElement.scrollLeft,10):0,bsl=xd.body?parseInt(xd.body.scrollLeft,10):0;return xtMax(xtMax(pag,sl),bsl)}
function xtsT(){var pag=xw.pageYOffset?parseInt(xw.pageYOffset,10):0,st=xd.documentElement?parseInt(xd.documentElement.scrollTop,10):0,bst=xd.body?parseInt(xd.body.scrollTop,10):0;return xtMax(xtMax(pag,st),bst)}
function xtHit(str1,str2,nt,ntg,idpcz){var xt_imgc=new Image(),lim=1500,mh='&mh='+nt+'-'+ntg+'-'+idpcz;if(str2.length>lim){var reg=new RegExp('[|]','gi'),tab=str2.split(reg),hit='',l=tab[0].length,i=0;while((l<lim)&&(i<tab.length)){hit+=tab[i]+'|';if(i<tab.length-1)l+=(tab[i+1].length)+1;i+=1}ntg=(ntg==1)?Math.ceil(str2.length/lim):ntg;mh='&mh='+nt+'-'+ntg+'-'+idpcz;if(hit!=''){xt_imgc.src=str1+'&idpcz='+idpcz+mh+hit;xt_imgc.onload=function(){xt_imgc.onload=null}}else{xt_imgc.src=str1+'&idpcz='+idpcz+mh+str2.substring(0,lim)+'&mherr=1';xt_imgc.onload=function(){xt_imgc.onload=null};return}str2='&dz=';for(var j=i;j<tab.length;j++){str2+=tab[j]+((j==(tab.length-1))?'':'|')}xtHit(str1,str2,nt+1,ntg,idpcz)}else if(str2.length>4){xt_imgc.src=(nt==1)?str1+'&idpcz='+idpcz+str2:str1+'&idpcz='+idpcz+mh+str2;xt_imgc.onload=function(){xt_imgc.onload=null}}}
function xtG(o,a){var att=null;try{att=o.getAttribute(a)}catch(e){}return(att==null)?null:(((a==cZ)&&(att.length>255))?xtSub(att,0,255):att)}
function xtfR(w,d){var n_result=w?w:0;if(d&&(!n_result||(n_result>d)))n_result=d;return n_result}
function xtEn(v){return encodeURIComponent(v)}
function xtDe(v){return decodeURIComponent(v)}
function xtnN(o){return o.nodeName}
function xtpN(o){return o.parentNode}
function xtSub(o,d,f){return o.substring(d,f)}
function xtMax(a,b){return((a>b)?a:b)}
