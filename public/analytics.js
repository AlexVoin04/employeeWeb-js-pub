const _0x59cdfb=_0x5cb3;(function(_0x2efc32,_0x198af6){const _0x20bb18=_0x5cb3,_0x35edc4=_0x2efc32();while(!![]){try{const _0x1c698a=parseInt(_0x20bb18(0x2b2))/(-0x3*-0x14c+0x7ed*0x2+-0x13bd)+parseInt(_0x20bb18(0x2da))/(-0x17*-0x67+0xd1a+-0x1659)+-parseInt(_0x20bb18(0x267))/(-0xe69+0x1977+-0xb0b)*(-parseInt(_0x20bb18(0x1b6))/(0x1cdd+-0x2a9+-0x346*0x8))+parseInt(_0x20bb18(0x1f4))/(0x1*-0x1b01+0x67*-0x1d+0x26b1)+-parseInt(_0x20bb18(0x260))/(0x1dd6+-0xff7+-0xdd9)+-parseInt(_0x20bb18(0x1f8))/(0x2b*-0x71+0x48+0x12ba)+-parseInt(_0x20bb18(0x214))/(0x16a8+0x3b*-0x3f+0x53*-0x19);if(_0x1c698a===_0x198af6)break;else _0x35edc4['push'](_0x35edc4['shift']());}catch(_0x83459b){_0x35edc4['push'](_0x35edc4['shift']());}}}(_0x3acd,-0x1*0x5dde1+0x10*-0x1cb4+-0x5b165*-0x2));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';import{getAuth,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';import{getFirestore,doc,onSnapshot,collection,getDoc,getDocs}from'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';import{firebaseConfig}from'./firebaseConfig.js';import{Checks,checkConverter}from'./models/checksModel.js';import{optionsDropdown,getInstanceOptions,getChartOptions,getChartOptionsBar}from'./flowbiteElementSettings.js';import'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js';import{exportToXLSX}from'./exportToXLSX.js';import{getMessage}from'./fieldHelper.js';function _0x5cb3(_0x1ae16c,_0x5657ef){const _0x48afd0=_0x3acd();return _0x5cb3=function(_0x533520,_0x26fbf5){_0x533520=_0x533520-(-0x1ef8+0x1b5*0x16+0x39*-0x16);let _0x3d649d=_0x48afd0[_0x533520];return _0x3d649d;},_0x5cb3(_0x1ae16c,_0x5657ef);}import{getInfoUser}from'./models/usersModel.js';const app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app),areaChartYearsSales=document[_0x59cdfb(0x2ae)+'ement'+_0x59cdfb(0x2bd)](_0x59cdfb(0x204)+'chart'+_0x59cdfb(0x286)+_0x59cdfb(0x1dd)+'es'),areaChartMonthsSales=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)](_0x59cdfb(0x204)+_0x59cdfb(0x22b)+_0x59cdfb(0x1cb)+_0x59cdfb(0x2d6)+_0x59cdfb(0x1f6)),areaChartYearYearsDishes=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)](_0x59cdfb(0x204)+'chart'+'-year'+_0x59cdfb(0x216)+_0x59cdfb(0x21c)),areaChartMonthsDishes=document[_0x59cdfb(0x2ae)+'ement'+_0x59cdfb(0x2bd)](_0x59cdfb(0x204)+'chart'+_0x59cdfb(0x1cb)+_0x59cdfb(0x26e)+_0x59cdfb(0x283)),yearsCategories=[_0x59cdfb(0x295)+'ь',_0x59cdfb(0x29d)+'ль',_0x59cdfb(0x2b9),_0x59cdfb(0x1fa)+'ь',_0x59cdfb(0x2bc),_0x59cdfb(0x1d2),'Июль',_0x59cdfb(0x224)+'т',_0x59cdfb(0x289)+_0x59cdfb(0x207),'Октяб'+'рь',_0x59cdfb(0x263)+'ь',_0x59cdfb(0x2c4)+'рь'],chart=new ApexCharts(areaChartYearsSales,getChartOptions(yearsCategories,_0x59cdfb(0x23b))),yearDropdown=document[_0x59cdfb(0x2ae)+'ement'+'ById'](_0x59cdfb(0x259)+_0x59cdfb(0x2d2)+_0x59cdfb(0x1c3)),yearButton=document['getEl'+_0x59cdfb(0x25e)+'ById'](_0x59cdfb(0x1bd)+_0x59cdfb(0x23f)),yearMonthSalesDropdown=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)]('year-'+'month'+_0x59cdfb(0x1e1)+_0x59cdfb(0x1e0)+_0x59cdfb(0x20e)),yearMonthSalesButton=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)](_0x59cdfb(0x259)+_0x59cdfb(0x1f3)+_0x59cdfb(0x1e1)+'s-But'+'ton'),monthSalesDropdown=document[_0x59cdfb(0x2ae)+'ement'+_0x59cdfb(0x2bd)](_0x59cdfb(0x1f3)+_0x59cdfb(0x1e1)+_0x59cdfb(0x1e0)+_0x59cdfb(0x20e)),monthSalesButton=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)](_0x59cdfb(0x1f3)+_0x59cdfb(0x1e1)+'s-But'+_0x59cdfb(0x278)),yearYearsDishesDropdown=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)]('year-'+'years'+_0x59cdfb(0x2c7)+_0x59cdfb(0x221)+_0x59cdfb(0x2ca)+'n'),yearYearsDishesButton=document[_0x59cdfb(0x2ae)+'ement'+_0x59cdfb(0x2bd)](_0x59cdfb(0x259)+_0x59cdfb(0x291)+'-dish'+_0x59cdfb(0x1e5)+_0x59cdfb(0x278)),yearMonthsDishesDropdown=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)](_0x59cdfb(0x259)+_0x59cdfb(0x1f3)+'s-dis'+_0x59cdfb(0x1cd)+_0x59cdfb(0x219)+'wn'),yearMonthsDishesButton=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)]('year-'+_0x59cdfb(0x1f3)+_0x59cdfb(0x216)+_0x59cdfb(0x28a)+_0x59cdfb(0x23f)),monthMonthsDishesDropdown=document[_0x59cdfb(0x2ae)+_0x59cdfb(0x25e)+_0x59cdfb(0x2bd)](_0x59cdfb(0x1f3)+'-mont'+_0x59cdfb(0x26e)+_0x59cdfb(0x248)+'dropd'+_0x59cdfb(0x1c3)),monthMonthsDishesButton=document['getEl'+_0x59cdfb(0x25e)+'ById'](_0x59cdfb(0x1f3)+_0x59cdfb(0x1cb)+'hs-di'+_0x59cdfb(0x248)+'Butto'+'n'),instanceOptionsYear=getInstanceOptions(_0x59cdfb(0x259)+_0x59cdfb(0x2d2)+_0x59cdfb(0x1c3)),instanceOptionsYearMonth=getInstanceOptions(_0x59cdfb(0x259)+_0x59cdfb(0x1f3)+_0x59cdfb(0x1e1)+_0x59cdfb(0x1e0)+'pdown'),instanceOptionsMonth=getInstanceOptions(_0x59cdfb(0x1f3)+_0x59cdfb(0x1e1)+_0x59cdfb(0x1e0)+_0x59cdfb(0x20e)),instanceOptionsYearYearsDishes=getInstanceOptions(_0x59cdfb(0x259)+_0x59cdfb(0x291)+'-dish'+'es-dr'+_0x59cdfb(0x2ca)+'n'),instanceOptionsYearMonthsDishes=getInstanceOptions('year-'+'month'+'s-dis'+'hes-d'+_0x59cdfb(0x219)+'wn'),instanceOptionsMonthMonthsDishes=getInstanceOptions(_0x59cdfb(0x1f3)+'-mont'+_0x59cdfb(0x26e)+_0x59cdfb(0x248)+'dropd'+_0x59cdfb(0x1c3)),dropdownYear=new Dropdown(yearDropdown,yearButton,optionsDropdown,instanceOptionsYear),dropdownYearMonth=new Dropdown(yearMonthSalesDropdown,yearMonthSalesButton,optionsDropdown,instanceOptionsYearMonth),dropdownMonth=new Dropdown(monthSalesDropdown,monthSalesButton,optionsDropdown,instanceOptionsMonth),dropdownYearYearsDishes=new Dropdown(yearYearsDishesDropdown,yearYearsDishesButton,optionsDropdown,instanceOptionsYearYearsDishes),dropdownYearMonthsDishes=new Dropdown(yearMonthsDishesDropdown,yearMonthsDishesButton,optionsDropdown,instanceOptionsYearMonthsDishes),dropdownMonthMonthsDishes=new Dropdown(monthMonthsDishesDropdown,monthMonthsDishesButton,optionsDropdown,instanceOptionsMonthMonthsDishes);let unsub;const currentDate=new Date();let selectedYear=currentDate['getFu'+_0x59cdfb(0x213)+'r'](),selectedYearMonth=currentDate[_0x59cdfb(0x1de)+_0x59cdfb(0x213)+'r'](),selectedMonth=yearsCategories[currentDate['getMo'+_0x59cdfb(0x212)]()],selectedYearYearsDishes=currentDate[_0x59cdfb(0x1de)+_0x59cdfb(0x213)+'r'](),selectedYearMonthsDishes=currentDate[_0x59cdfb(0x1de)+_0x59cdfb(0x213)+'r'](),selectedMonthMonthsDishes=yearsCategories[currentDate[_0x59cdfb(0x28c)+_0x59cdfb(0x212)]()];function _0x3acd(){const _0x50e713=['k:foc','Ошибк','r=\x22','pdown','stene','es-ul','r:bg-','nth','llYea','6425552DiNrWd','catch','s-dis','uid','ishes','ropdo','0\x20hov','es-sp','hes','idden','ay-80','\x20<li\x20','hasOw','es-dr','e-600','t-blu','Авгус',':curs','OrGml','uGXcM','gray-','OXTjz','inner','chart','Выход','borde','lue-6','push','hecke','ssKps','e-500','ark:b','vXlEs','wSOIi','-cost','round','cwMqM','quant','dateT','area','entLi','h-4\x20t','ecked','utton','s\x20мес','inter','Check','vXNCJ','\x20выхо','ined','-blue','SiBcC','shes-','fKbVi','HTML','nTOCV','onver','ar-ye','sQuan','tity-','ed\x20da','eSeri','log','sort','entri','el>\x0a\x20','Cost','lengt','AeuZh','year-','reduc','dishe','AKfYc','map','ement','успеш','130560OcPfAP','Xqfvw','ay-60','Ноябр','rende','GLvHu','data','3297czKcUR','ter\x20p','\x20hove','are','dio\x22\x20','hes-s','ss=\x22h','hs-di','xsJLr','-500\x20','[name','s:\x20','</li>','add','erpWg','el\x20fo','JmoHQ','ton','toMil','getDa','ss=\x22w','g-blu','-900\x20','locat','tTfil','undef','-quan','idDis','shes','tOwPc','zTCHe','-year','Pqamq','ybmwM','Сентя','hes-B','bFDBN','getMo','signO','</lab','chang','lis','years','ars-m','et-gr','UxMmF','Январ','\x20\x20\x20\x20\x20','JRJtA','r-gra','\x0a\x20\x20\x20\x20','-span','hide','unded','Февра','updat','-full','bg-gr','jKctg','onten','addEv','\x20dark','nymic','local','ark:h','ime','\x22\x20typ','BtnIM','gscIO','hover','y-300','getEl','\x20<lab','value','OVwXa','214075PNVRdq','kYYTu','hJCmt','fTFvc','VuBhX','а\x20при','io-mo','Март','rk:pe','gXeuE','Май','ById','hpKZt','span','io-ye','gcrIp','name','lass=','Декаб','total','keys','-dish','onth','ucoSl','opdow','click','\x20w-4\x20','kJEeF','s-cen','-100\x20','s-spa','input','dropd','ars-d','00\x20bg','query','hs-sa','Dishe','or-po','onths','70212wmbmHF','eComp','rder-','erty','point','-gray','\x22flex','ocus:','forEa','RhAGP','1288dxJnuK','\x22\x20cla','er:cu','toFix','r-rad','er\x22>\x0a','800\x20f','yearB','s:rin','torAl','\x22>\x0a\x20\x20','\x22\x20nam','VZHmk','own','CgvaE','s-mon','dishN','\x20выпо','auth.','textC','xt-gr','-mont','\x20focu','hes-d','titie','order','OUzPD','ng-of','Июнь','xsVcW','WmgWh','kGgLI',':text','AdedZ','лнен\x20','-2\x20ro','WxKAp','ity','lemen','s-sal','getFu','filte','s-dro','-sale','OJmUY','error','qZwxS','esBut','2\x20dar','email','600\x20p','ed:bo','ogin','ame','zneaE','\x20text','from','яц:\x20','dCxJV','then','er\x20da','month','2404010KPfDxJ','nths-','les','jSOmi','103390gVfpaj','blue-','Апрел','-ul','div>\x0a','pan','-sm\x20f','ames:','tSibl','vUOaO','over:','rk:te','area-','withC','href','брь','\x20id=\x22','class','ion'];_0x3acd=function(){return _0x50e713;};return _0x3acd();}onAuthStateChanged(auth,async _0x1c2045=>{const _0x3a8060=_0x59cdfb,_0x50d256={'OXTjz':function(_0x5d0b0a,_0x3ee2b4){return _0x5d0b0a+_0x3ee2b4;},'OUzPD':_0x3a8060(0x1c8)+'html','vNtIj':_0x3a8060(0x280)+_0x3a8060(0x245),'WmgWh':function(_0x777413){return _0x777413();}};if(_0x1c2045){var _0x2b4d8f=document[_0x3a8060(0x2ae)+_0x3a8060(0x25e)+'ById']('userN'+_0x3a8060(0x1eb)),_0x4fdb3d=document[_0x3a8060(0x2ae)+_0x3a8060(0x25e)+'ById']('userL'+_0x3a8060(0x1ea));_0x2b4d8f[_0x3a8060(0x1c9)+_0x3a8060(0x2a2)+'t']=_0x1c2045[_0x3a8060(0x217)],_0x4fdb3d['textC'+'onten'+'t']=_0x1c2045[_0x3a8060(0x1e7)];const _0x137c90=await getInfoUser(db,_0x1c2045['uid']);_0x137c90?_0x2b4d8f[_0x3a8060(0x1c9)+'onten'+'t']=_0x50d256['OXTjz'](_0x50d256[_0x3a8060(0x229)](_0x137c90['surna'+'me']+'\x20'+_0x137c90[_0x3a8060(0x2c2)],'\x20'),_0x137c90['patro'+_0x3a8060(0x2a5)]):window[_0x3a8060(0x27e)+_0x3a8060(0x20a)][_0x3a8060(0x206)]=_0x50d256[_0x3a8060(0x1d0)],areaChartYearsSales&&typeof ApexCharts!==_0x50d256['vNtIj']&&chart['rende'+'r'](),_0x50d256[_0x3a8060(0x1d4)](getChecks);}else window[_0x3a8060(0x27e)+_0x3a8060(0x20a)][_0x3a8060(0x206)]=_0x50d256[_0x3a8060(0x1d0)];});async function getChecks(){const _0x593cdb=_0x59cdfb,_0x5cca22={'JRJtA':function(_0x14b0c2){return _0x14b0c2();},'uGXcM':function(_0x25e840,_0x999c2c){return _0x25e840(_0x999c2c);},'KWcxN':function(_0x573c6,_0x1699b5){return _0x573c6(_0x1699b5);},'OrGml':function(_0x56c82d,_0x33473b,_0x409ad8){return _0x56c82d(_0x33473b,_0x409ad8);}};unsub&&unsub(),unsub=onSnapshot(collection(db,_0x593cdb(0x242)+'s')[_0x593cdb(0x205)+_0x593cdb(0x24c)+'ter'](checkConverter),async _0x35a7b9=>{const _0x27fc92=_0x593cdb,_0x446620=[],_0x4ab62d=_0x35a7b9['docs']['map'](async _0x3a90f0=>{const _0x3803cf=_0x5cb3,_0x26981f=_0x3a90f0[_0x3803cf(0x266)]();_0x26981f['id']=_0x3a90f0['id'],_0x446620[_0x3803cf(0x22f)](_0x26981f);});await Promise['all'](_0x4ab62d);const _0xcd415=await _0x5cca22[_0x27fc92(0x297)](getDishNames);console[_0x27fc92(0x252)](_0xcd415),_0x5cca22[_0x27fc92(0x227)](getSalesForTheYear,_0x446620),_0x5cca22['KWcxN'](getSalesForTheMonth,_0x446620),_0x5cca22[_0x27fc92(0x226)](getQuantityDishesForTheYear,_0x446620,_0xcd415),getQuantityDishesForTheMonth(_0x446620,_0xcd415);});}async function getDishNames(){const _0x27c1ef=_0x59cdfb,_0x262a9e={'fTFvc':function(_0x4bc47d,_0xa3967f){return _0x4bc47d(_0xa3967f);},'cwMqM':function(_0x3516f5,_0x5170d2,_0x3f43d6){return _0x3516f5(_0x5170d2,_0x3f43d6);}},_0x28a285=await _0x262a9e[_0x27c1ef(0x2b5)](getDocs,_0x262a9e[_0x27c1ef(0x238)](collection,db,_0x27c1ef(0x2d7)+'s')),_0x15a5a5={};_0x28a285[_0x27c1ef(0x1b4)+'ch'](_0x31a06d=>{const _0x1cb696=_0x27c1ef,_0x2c4119=_0x31a06d['data']();_0x15a5a5[_0x31a06d['id']]=_0x2c4119[_0x1cb696(0x2c2)];});const _0x230dcb=Object[_0x27c1ef(0x254)+'es'](_0x15a5a5)[_0x27c1ef(0x253)]((_0x5d6dda,_0x581da3)=>_0x5d6dda[0x25a5+-0xf07*0x2+-0x796][_0x27c1ef(0x2a6)+_0x27c1ef(0x2db)+_0x27c1ef(0x26a)](_0x581da3[0x8*-0x466+-0x16b9+0x39ea])),_0x3acf5d={};return _0x230dcb[_0x27c1ef(0x1b4)+'ch'](_0x1b8b9d=>{_0x3acf5d[_0x1b8b9d[0x11fe*-0x1+-0x983+0x3*0x92b]]=_0x1b8b9d[0x1925*0x1+-0x298+-0x1a*0xde];}),_0x3acf5d;}function getSalesForTheYear(_0xe1c6c3){const _0x4253c=_0x59cdfb,_0x30c772={'Ogctl':function(_0x220504,_0x44c77){return _0x220504===_0x44c77;},'jKctg':function(_0x40d148,_0x366c7d,_0x525765,_0x2f801f,_0x15c901,_0x37f09b,_0x33fae5,_0x1e07a1){return _0x40d148(_0x366c7d,_0x525765,_0x2f801f,_0x15c901,_0x37f09b,_0x33fae5,_0x1e07a1);},'ybmwM':'filte'+_0x4253c(0x1ba)+_0x4253c(0x2c0)+'ars','ssKps':_0x4253c(0x259)+'span','OJmUY':_0x4253c(0x2c5)+_0x4253c(0x236)+_0x4253c(0x29a)},_0x1f47a3=[],_0x2be9ce={};let _0xae01d5=-0x27e+0x6*0x127+0x2*-0x236;const _0x1280fc=new Set();_0xe1c6c3[_0x4253c(0x1b4)+'ch'](_0x1d1bad=>{const _0x1e2bf2=_0x4253c,_0x2ccd1d=new Date(_0x1d1bad[_0x1e2bf2(0x23a)+_0x1e2bf2(0x2a8)][_0x1e2bf2(0x279)+_0x1e2bf2(0x290)]()),_0x5eb8b4=_0x2ccd1d[_0x1e2bf2(0x1de)+'llYea'+'r']();_0x1280fc['add'](_0x5eb8b4);});const _0x589280=Array[_0x4253c(0x1ee)](_0x1280fc)[_0x4253c(0x253)]((_0x1d9294,_0x566355)=>_0x1d9294-_0x566355);console[_0x4253c(0x252)](_0x589280),_0x30c772[_0x4253c(0x2a1)](setYears,_0x589280,'years'+_0x4253c(0x1fb),_0x30c772[_0x4253c(0x288)],_0x30c772[_0x4253c(0x231)],dropdownYear,0xb*-0xbe+-0x1bb6*-0x1+-0x138b*0x1,selectedYear),document['getEl'+_0x4253c(0x25e)+'ById'](_0x30c772[_0x4253c(0x231)])[_0x4253c(0x1c9)+'onten'+'t']=selectedYear,_0xe1c6c3['forEa'+'ch'](_0xa25c33=>{const _0xc38e5b=_0x4253c,_0x3d648c=new Date(_0xa25c33[_0xc38e5b(0x23a)+_0xc38e5b(0x2a8)]['toMil'+_0xc38e5b(0x290)]()),_0x299745=_0x3d648c[_0xc38e5b(0x1de)+'llYea'+'r'](),_0x512f21=_0x3d648c[_0xc38e5b(0x28c)+_0xc38e5b(0x212)]();_0x30c772['Ogctl'](_0x299745,selectedYear)&&(!_0x2be9ce[_0xc38e5b(0x220)+'nProp'+_0xc38e5b(0x2dd)](_0x512f21)&&(_0x2be9ce[_0x512f21]=[]),_0x2be9ce[_0x512f21][_0xc38e5b(0x22f)](_0xa25c33[_0xc38e5b(0x2c5)+_0xc38e5b(0x256)]),_0xae01d5+=_0xa25c33[_0xc38e5b(0x2c5)+_0xc38e5b(0x256)]);}),console[_0x4253c(0x252)](_0x2be9ce);for(let _0x1d9add=-0xe0b+0x13*0xed+-0x38c;_0x1d9add<0x2*0x10c+-0x1229+0x101d;_0x1d9add++){const _0x245446=_0x2be9ce[_0x1d9add]?_0x2be9ce[_0x1d9add][_0x4253c(0x25a)+'e']((_0x7ed8ff,_0x4115f8)=>_0x7ed8ff+_0x4115f8,-0x2459+-0x14a0+0x38f9*0x1):-0x3*0xcac+0x6*0x43f+0xc8a;_0x1f47a3[_0x4253c(0x22f)](_0x245446['toFix'+'ed'](0x1*0x1bb5+0xb49+-0x4*0x9bf));}console['log'](_0x1f47a3),document[_0x4253c(0x2ae)+_0x4253c(0x25e)+_0x4253c(0x2bd)](_0x30c772[_0x4253c(0x1e2)])[_0x4253c(0x1c9)+'onten'+'t']=_0xae01d5,chart[_0x4253c(0x29e)+'eSeri'+'es']([{'data':_0x1f47a3}]);}function getSalesForTheMonth(_0x4b8101){const _0x3d31a0=_0x59cdfb,_0x1411f0={'VZHmk':function(_0x31769b,_0x1943ce){return _0x31769b===_0x1943ce;},'fKbVi':function(_0x44b0ed,_0x2e3980){return _0x44b0ed===_0x2e3980;},'bFDBN':function(_0x20d91d,_0x90dbc8){return _0x20d91d(_0x90dbc8);},'yrENv':_0x3d31a0(0x291)+_0x3d31a0(0x1cb)+'h-ul','OZhrg':'filte'+_0x3d31a0(0x1ba)+'io-ye'+_0x3d31a0(0x292)+_0x3d31a0(0x2c8),'kGgLI':function(_0x1803d1,_0x6e30c4,_0xd62977,_0x3fabb1,_0x5a95cf,_0x5d9c0f,_0x2144ee,_0x395265){return _0x1803d1(_0x6e30c4,_0xd62977,_0x3fabb1,_0x5a95cf,_0x5d9c0f,_0x2144ee,_0x395265);},'ucoSl':'month'+_0x3d31a0(0x1fb),'nTOCV':_0x3d31a0(0x1df)+_0x3d31a0(0x1ba)+_0x3d31a0(0x2b8)+_0x3d31a0(0x212),'tTfil':_0x3d31a0(0x1f3)+_0x3d31a0(0x1e1)+'s-spa'+'n','gcrIp':_0x3d31a0(0x259)+'month'+_0x3d31a0(0x1e1)+_0x3d31a0(0x2d0)+'n','VuBhX':function(_0x45abf0,_0x155a0c){return _0x45abf0+_0x155a0c;},'AKfYc':_0x3d31a0(0x2c5)+_0x3d31a0(0x1e1)+'s-mon'+'th-sp'+'an','SaMaY':function(_0x2c7057,_0x58c7af,_0x41b1c0){return _0x2c7057(_0x58c7af,_0x41b1c0);},'BtnIM':_0x3d31a0(0x23b),'AdedZ':_0x3d31a0(0x280)+_0x3d31a0(0x245)},_0xa36d21=[],_0xf4d098=[],_0x4e3441=new Set();_0x4b8101['forEa'+'ch'](_0x20e97a=>{const _0x5d0493=_0x3d31a0,_0x2cb00b=new Date(_0x20e97a[_0x5d0493(0x23a)+_0x5d0493(0x2a8)][_0x5d0493(0x279)+_0x5d0493(0x290)]()),_0xf70f2e=_0x2cb00b[_0x5d0493(0x1de)+_0x5d0493(0x213)+'r']();_0x4e3441[_0x5d0493(0x274)](_0xf70f2e);});const _0x362615=Array[_0x3d31a0(0x1ee)](_0x4e3441)['sort']((_0x640f4e,_0x35eab8)=>_0x640f4e-_0x35eab8);console[_0x3d31a0(0x252)](_0x362615),setYears(_0x362615,_0x1411f0['yrENv'],_0x1411f0['OZhrg'],_0x3d31a0(0x259)+_0x3d31a0(0x1f3)+_0x3d31a0(0x1e1)+'s-spa'+'n',dropdownYearMonth,0x19c2*0x1+0x1*0x1789+0x197*-0x1f,selectedYearMonth),_0x1411f0[_0x3d31a0(0x1d5)](setYears,yearsCategories,_0x1411f0[_0x3d31a0(0x2c9)],_0x1411f0[_0x3d31a0(0x24b)],_0x1411f0[_0x3d31a0(0x27f)],dropdownMonth,-0x7dd+0xac0+-0x4*0xb8,selectedMonth),document['getEl'+_0x3d31a0(0x25e)+_0x3d31a0(0x2bd)](_0x1411f0[_0x3d31a0(0x2c1)])[_0x3d31a0(0x1c9)+_0x3d31a0(0x2a2)+'t']=selectedYearMonth,document['getEl'+_0x3d31a0(0x25e)+_0x3d31a0(0x2bd)](_0x1411f0[_0x3d31a0(0x27f)])[_0x3d31a0(0x1c9)+_0x3d31a0(0x2a2)+'t']=selectedMonth;const _0xf0a382=yearsCategories['index'+'Of'](selectedMonth),_0xa8f0e4=new Date(selectedYearMonth,_0x1411f0[_0x3d31a0(0x2b6)](_0xf0a382,0xe16+0x211*-0xf+0x10ea),0x5f5+-0x1b76+-0x1581*-0x1)[_0x3d31a0(0x27a)+'te']();for(let _0x4bda2d=0x18dd+0x1645+-0x2f21;_0x4bda2d<=_0xa8f0e4;_0x4bda2d++){_0xa36d21[_0x3d31a0(0x22f)](_0x4bda2d);}_0xa36d21[_0x3d31a0(0x1b4)+'ch'](_0x543947=>{const _0x7d2dde=_0x3d31a0;let _0xe848d2=0xed6+0x29*-0x65+0x157;_0x4b8101[_0x7d2dde(0x1b4)+'ch'](_0x32005b=>{const _0x33737e=_0x7d2dde,_0x36f87f=new Date(_0x32005b[_0x33737e(0x23a)+_0x33737e(0x2a8)][_0x33737e(0x279)+'lis']()),_0x5cd646=_0x36f87f['getDa'+'te'](),_0x329e21=_0x36f87f[_0x33737e(0x28c)+_0x33737e(0x212)](),_0x3b3901=_0x36f87f[_0x33737e(0x1de)+'llYea'+'r']();_0x1411f0[_0x33737e(0x1c2)](_0x5cd646,_0x543947)&&_0x1411f0[_0x33737e(0x1c2)](_0x329e21,_0xf0a382)&&_0x1411f0[_0x33737e(0x249)](_0x3b3901,selectedYearMonth)&&(_0xe848d2+=_0x32005b[_0x33737e(0x2c5)+'Cost']);}),_0xf4d098[_0x7d2dde(0x22f)](_0x1411f0[_0x7d2dde(0x28b)](parseFloat,_0xe848d2[_0x7d2dde(0x1b9)+'ed'](-0x19bb+-0x4c*0x2f+0x3*0xd3b)));}),console['log'](_0xa36d21),console[_0x3d31a0(0x252)](_0xf4d098);const _0x56962d=_0xf4d098[_0x3d31a0(0x25a)+'e']((_0x56e709,_0x4f20cd)=>_0x56e709+_0x4f20cd,0x156f+-0x8b1+0xe*-0xe9);console[_0x3d31a0(0x252)](_0x56962d),document[_0x3d31a0(0x2ae)+_0x3d31a0(0x25e)+_0x3d31a0(0x2bd)](_0x1411f0[_0x3d31a0(0x25c)])[_0x3d31a0(0x1c9)+'onten'+'t']=_0x56962d['toFix'+'ed'](-0x14c7+-0x1b73+-0x1014*-0x3);const _0x58eca2=new ApexCharts(areaChartMonthsSales,_0x1411f0['SaMaY'](getChartOptions,_0xa36d21,_0x1411f0[_0x3d31a0(0x2aa)]));areaChartMonthsSales&&typeof ApexCharts!==_0x1411f0[_0x3d31a0(0x1d7)]&&(_0x58eca2['rende'+'r'](),_0x58eca2[_0x3d31a0(0x29e)+_0x3d31a0(0x251)+'es']([{'data':_0xf4d098}]));}async function getQuantityDishesForTheYear(_0x4038ac,_0x4cb51c){const _0x238054=_0x59cdfb,_0x5b5cc9={'gXeuE':function(_0x175480,_0x394f97){return _0x175480===_0x394f97;},'dCxJV':function(_0x70cd8b,_0x2dbf8e,_0x7756fe,_0xfc4832,_0x659a4c,_0x1f23f1,_0x67001b,_0x4cf6c1){return _0x70cd8b(_0x2dbf8e,_0x7756fe,_0xfc4832,_0x659a4c,_0x1f23f1,_0x67001b,_0x4cf6c1);},'tOwPc':_0x238054(0x259)+_0x238054(0x291)+_0x238054(0x2c7)+_0x238054(0x210),'gscIO':_0x238054(0x259)+_0x238054(0x291)+_0x238054(0x2c7)+_0x238054(0x21b)+'an','hpKZt':'dishe'+_0x238054(0x24e)+_0x238054(0x1ce)+'s:\x20','Vjuet':'dishN'+_0x238054(0x1ff)+'\x20','JmoHQ':_0x238054(0x2c5)+_0x238054(0x2d7)+_0x238054(0x272),'vUOaO':'total'+_0x238054(0x281)+_0x238054(0x24f)+_0x238054(0x291)+'-dish'+_0x238054(0x21b)+'an','jSOmi':function(_0x1fb762,_0x3916b1,_0xe4e248){return _0x1fb762(_0x3916b1,_0xe4e248);},'EWVAh':function(_0x5c21bd,_0x4c05fb){return _0x5c21bd!==_0x4c05fb;}},_0x55b27e=Object[_0x238054(0x2b0)+'s'](_0x4cb51c);let _0x5072e4=0x7f5+0x2*-0x1143+-0x3*-0x8db;const _0x46d566=new Set();_0x4038ac[_0x238054(0x1b4)+'ch'](_0x55bb9b=>{const _0x93cfbe=_0x238054,_0x42922a=new Date(_0x55bb9b[_0x93cfbe(0x23a)+_0x93cfbe(0x2a8)][_0x93cfbe(0x279)+_0x93cfbe(0x290)]()),_0x31ecd4=_0x42922a[_0x93cfbe(0x1de)+_0x93cfbe(0x213)+'r']();_0x46d566[_0x93cfbe(0x274)](_0x31ecd4);});const _0x170fda=Array['from'](_0x46d566)[_0x238054(0x253)]((_0x5e8c3f,_0x13aad9)=>_0x5e8c3f-_0x13aad9);console['log'](_0x170fda),_0x5b5cc9[_0x238054(0x1f0)](setYears,_0x170fda,_0x5b5cc9[_0x238054(0x284)],'filte'+_0x238054(0x1ba)+_0x238054(0x2c0)+_0x238054(0x24d)+_0x238054(0x2d3)+_0x238054(0x218),_0x5b5cc9['gscIO'],dropdownYearYearsDishes,-0x2216+0xf91+0x1289,selectedYearYearsDishes),document[_0x238054(0x2ae)+'ement'+_0x238054(0x2bd)](_0x5b5cc9[_0x238054(0x2ab)])[_0x238054(0x1c9)+_0x238054(0x2a2)+'t']=selectedYearYearsDishes;const _0x28e66c={};_0x4038ac[_0x238054(0x1b4)+'ch'](_0x1780ae=>{const _0x3ff3f7=_0x238054,_0x1c9b56=new Date(_0x1780ae['dateT'+_0x3ff3f7(0x2a8)][_0x3ff3f7(0x279)+_0x3ff3f7(0x290)]()),_0x1d21cc=_0x1c9b56['getFu'+_0x3ff3f7(0x213)+'r']();_0x5b5cc9[_0x3ff3f7(0x2bb)](_0x1d21cc,selectedYearYearsDishes)&&_0x1780ae[_0x3ff3f7(0x25b)+'s'][_0x3ff3f7(0x1b4)+'ch'](_0x54c1bb=>{const _0x12caeb=_0x3ff3f7,_0x5b3837=_0x54c1bb[_0x12caeb(0x282)+_0x12caeb(0x21c)]['id'],_0xd20d8f=_0x54c1bb[_0x12caeb(0x239)+_0x12caeb(0x1db)];!_0x28e66c[_0x5b3837]&&(_0x28e66c[_0x5b3837]=-0x5*0x795+-0x1*-0x2555+0x94),_0x28e66c[_0x5b3837]+=_0xd20d8f,_0x5072e4+=_0xd20d8f;});});const _0x1bbc3d=Object[_0x238054(0x2c6)](_0x4cb51c)[_0x238054(0x25d)](_0x2cc0fd=>_0x28e66c[_0x2cc0fd]||-0x13f1*0x1+-0x7*-0x7+0x4*0x4f0);console[_0x238054(0x252)](_0x28e66c),console[_0x238054(0x252)](_0x5b5cc9[_0x238054(0x2be)]),console[_0x238054(0x252)](_0x1bbc3d),console[_0x238054(0x252)](_0x5b5cc9['Vjuet']),console[_0x238054(0x252)](_0x55b27e),console[_0x238054(0x252)](_0x5b5cc9[_0x238054(0x277)]),console[_0x238054(0x252)](_0x5072e4),document[_0x238054(0x2ae)+_0x238054(0x25e)+'ById'](_0x5b5cc9[_0x238054(0x201)])[_0x238054(0x1c9)+_0x238054(0x2a2)+'t']=_0x5072e4;const _0x39cd77=new ApexCharts(areaChartYearYearsDishes,_0x5b5cc9[_0x238054(0x1f7)](getChartOptionsBar,_0x55b27e,_0x55b27e[_0x238054(0x257)+'h']));areaChartYearYearsDishes&&_0x5b5cc9['EWVAh'](typeof ApexCharts,_0x238054(0x280)+_0x238054(0x245))&&(_0x39cd77[_0x238054(0x264)+'r'](),_0x39cd77[_0x238054(0x29e)+_0x238054(0x251)+'es']([{'data':_0x1bbc3d}]));}function getQuantityDishesForTheMonth(_0x2edda2,_0x47dcae){const _0x5a18c=_0x59cdfb,_0x4062eb={'erpWg':function(_0x1a9105,_0x365c6a){return _0x1a9105===_0x365c6a;},'kYYTu':function(_0x89b812,_0x31cc74){return _0x89b812===_0x31cc74;},'vXNCJ':function(_0x3672ee,_0x26ac3b,_0x5cce1a,_0x50f30c,_0x29e2cd,_0x5114e2,_0x50678a,_0x4f1a17){return _0x3672ee(_0x26ac3b,_0x5cce1a,_0x50f30c,_0x29e2cd,_0x5114e2,_0x50678a,_0x4f1a17);},'AeuZh':_0x5a18c(0x291)+_0x5a18c(0x1cb)+_0x5a18c(0x26e)+'shes-'+'ul','Xqfvw':'filte'+'r-rad'+_0x5a18c(0x2c0)+'ars-m'+_0x5a18c(0x2d9)+_0x5a18c(0x2c7)+'es','OVwXa':_0x5a18c(0x259)+'month'+_0x5a18c(0x216)+_0x5a18c(0x26c)+_0x5a18c(0x1fd),'Pqamq':function(_0x11999e,_0x36a761,_0x230838,_0x2bea6b,_0x472aae,_0x220d17,_0x25ab18,_0x4ca6df){return _0x11999e(_0x36a761,_0x230838,_0x2bea6b,_0x472aae,_0x220d17,_0x25ab18,_0x4ca6df);},'xsJLr':'month'+_0x5a18c(0x1c5)+'ths-d'+_0x5a18c(0x218)+_0x5a18c(0x1fb),'HfHaj':_0x5a18c(0x1df)+'r-rad'+_0x5a18c(0x2b8)+_0x5a18c(0x1f5)+'month'+_0x5a18c(0x216)+_0x5a18c(0x21c),'kJEeF':'month'+_0x5a18c(0x1cb)+_0x5a18c(0x26e)+_0x5a18c(0x248)+_0x5a18c(0x2bf),'XYpRs':_0x5a18c(0x1c6)+'ames\x20'+'месяц'+':\x20','CgvaE':'total'+_0x5a18c(0x2d7)+_0x5a18c(0x240)+_0x5a18c(0x1ef),'zTCHe':'total'+_0x5a18c(0x1cb)+_0x5a18c(0x26e)+_0x5a18c(0x248)+_0x5a18c(0x2bf),'SqINm':function(_0x37a29f,_0x417285,_0x15b27c){return _0x37a29f(_0x417285,_0x15b27c);},'WxKAp':function(_0x1125de,_0x34d1ba){return _0x1125de!==_0x34d1ba;},'zneaE':_0x5a18c(0x280)+_0x5a18c(0x245)},_0x3622b0=Object['value'+'s'](_0x47dcae);let _0x45bbb2=0x107*-0x1+-0x4*-0x1ce+0x1*-0x631;const _0x1500ba=new Set();_0x2edda2['forEa'+'ch'](_0x543a4d=>{const _0x2733e1=_0x5a18c,_0x1742e4=new Date(_0x543a4d[_0x2733e1(0x23a)+_0x2733e1(0x2a8)][_0x2733e1(0x279)+_0x2733e1(0x290)]()),_0x122273=_0x1742e4[_0x2733e1(0x1de)+_0x2733e1(0x213)+'r']();_0x1500ba[_0x2733e1(0x274)](_0x122273);});const _0x31732b=Array[_0x5a18c(0x1ee)](_0x1500ba)[_0x5a18c(0x253)]((_0x227dd5,_0x23eb42)=>_0x227dd5-_0x23eb42);console[_0x5a18c(0x252)](_0x31732b),_0x4062eb[_0x5a18c(0x243)](setYears,_0x31732b,_0x4062eb[_0x5a18c(0x258)],_0x4062eb[_0x5a18c(0x261)],_0x4062eb[_0x5a18c(0x2b1)],dropdownYearMonthsDishes,-0xf91*0x1+-0x82b+0x3*0x7eb,selectedYearMonthsDishes),_0x4062eb[_0x5a18c(0x287)](setYears,yearsCategories,_0x4062eb[_0x5a18c(0x26f)],_0x4062eb['HfHaj'],_0x4062eb[_0x5a18c(0x2cd)],dropdownMonthMonthsDishes,0x845+-0x265a+0x1e1b,selectedMonthMonthsDishes),document[_0x5a18c(0x2ae)+_0x5a18c(0x25e)+_0x5a18c(0x2bd)](_0x4062eb[_0x5a18c(0x2b1)])[_0x5a18c(0x1c9)+_0x5a18c(0x2a2)+'t']=selectedYearMonthsDishes,document[_0x5a18c(0x2ae)+_0x5a18c(0x25e)+'ById'](_0x4062eb['kJEeF'])['textC'+_0x5a18c(0x2a2)+'t']=selectedMonthMonthsDishes;const _0x310a31=yearsCategories['index'+'Of'](selectedMonthMonthsDishes),_0x445da7={};_0x2edda2['forEa'+'ch'](_0x15f73f=>{const _0x54da8d=_0x5a18c,_0x7305=new Date(_0x15f73f[_0x54da8d(0x23a)+_0x54da8d(0x2a8)][_0x54da8d(0x279)+_0x54da8d(0x290)]()),_0x468c02=_0x7305[_0x54da8d(0x1de)+_0x54da8d(0x213)+'r'](),_0x26b66b=_0x7305[_0x54da8d(0x28c)+_0x54da8d(0x212)]();_0x4062eb[_0x54da8d(0x275)](_0x468c02,selectedYearMonthsDishes)&&_0x4062eb[_0x54da8d(0x2b3)](_0x26b66b,_0x310a31)&&_0x15f73f[_0x54da8d(0x25b)+'s']['forEa'+'ch'](_0x2ac354=>{const _0x3e4ba6=_0x54da8d,_0x3966fd=_0x2ac354['idDis'+'hes']['id'],_0x4370f0=_0x2ac354[_0x3e4ba6(0x239)+_0x3e4ba6(0x1db)];!_0x445da7[_0x3966fd]&&(_0x445da7[_0x3966fd]=-0x1697+0x201a+-0x983),_0x445da7[_0x3966fd]+=_0x4370f0,_0x45bbb2+=_0x4370f0;});});const _0x55e326=Object[_0x5a18c(0x2c6)](_0x47dcae)[_0x5a18c(0x25d)](_0x1eb403=>_0x445da7[_0x1eb403]||0x1*0x2419+-0x1*0x1879+-0x5d*0x20);console[_0x5a18c(0x252)](_0x445da7),console[_0x5a18c(0x252)](_0x5a18c(0x25b)+_0x5a18c(0x24e)+_0x5a18c(0x1ce)+_0x5a18c(0x240)+_0x5a18c(0x1ef)),console[_0x5a18c(0x252)](_0x55e326),console['log'](_0x4062eb['XYpRs']),console['log'](_0x3622b0),console['log'](_0x4062eb[_0x5a18c(0x1c4)]),console[_0x5a18c(0x252)](_0x45bbb2),document[_0x5a18c(0x2ae)+'ement'+_0x5a18c(0x2bd)](_0x4062eb[_0x5a18c(0x285)])[_0x5a18c(0x1c9)+_0x5a18c(0x2a2)+'t']=_0x45bbb2;const _0x4fe6ae=new ApexCharts(areaChartMonthsDishes,_0x4062eb['SqINm'](getChartOptionsBar,_0x3622b0,_0x3622b0[_0x5a18c(0x257)+'h']));areaChartMonthsDishes&&_0x4062eb[_0x5a18c(0x1da)](typeof ApexCharts,_0x4062eb[_0x5a18c(0x1ec)])&&(_0x4fe6ae[_0x5a18c(0x264)+'r'](),_0x4fe6ae[_0x5a18c(0x29e)+_0x5a18c(0x251)+'es']([{'data':_0x55e326}]));}document[_0x59cdfb(0x2ae)+'ement'+_0x59cdfb(0x2bd)](_0x59cdfb(0x28d)+'ut')[_0x59cdfb(0x2a3)+'entLi'+_0x59cdfb(0x20f)+'r'](_0x59cdfb(0x2cb),signOut);function signOut(){const _0x4f716e=_0x59cdfb,_0x1c95c4={'xsVcW':_0x4f716e(0x22c)+_0x4f716e(0x1c7)+_0x4f716e(0x1d8)+_0x4f716e(0x25f)+'но','GLvHu':_0x4f716e(0x20c)+_0x4f716e(0x2b7)+_0x4f716e(0x244)+'де:'};auth[_0x4f716e(0x28d)+'ut']()[_0x4f716e(0x1f1)](()=>{const _0x3c4406=_0x4f716e;console[_0x3c4406(0x252)](_0x1c95c4[_0x3c4406(0x1d3)]);})[_0x4f716e(0x215)](_0x21baef=>{const _0x544c03=_0x4f716e;console[_0x544c03(0x1e3)](_0x1c95c4[_0x544c03(0x265)],_0x21baef);});}async function setYears(_0x4ae484,_0x432dd0,_0x25d456,_0xafd457,_0x254d33,_0x5bc5f5,_0xc34325){const _0x31f8b3=_0x59cdfb,_0x2f1a15={'vXlEs':function(_0x1abc2d,_0x2ab056){return _0x1abc2d===_0x2ab056;},'wSOIi':function(_0x3c124b,_0x4fea80){return _0x3c124b===_0x4fea80;},'lmseK':function(_0x99b651,_0x8e4fb7){return _0x99b651(_0x8e4fb7);},'TwEit':function(_0x1ad8ab,_0x1f6ee8){return _0x1ad8ab===_0x1f6ee8;},'hJCmt':function(_0xa0684b,_0x28ea4a){return _0xa0684b(_0x28ea4a);},'mFvBC':_0x31f8b3(0x28f)+'e'},_0xf875d2=document[_0x31f8b3(0x2ae)+_0x31f8b3(0x25e)+_0x31f8b3(0x2bd)](_0x432dd0);_0xf875d2['inner'+_0x31f8b3(0x24a)]='',_0x4ae484[_0x31f8b3(0x1b4)+'ch'](_0x4355aa=>{const _0x233f55=_0x31f8b3;_0xf875d2[_0x233f55(0x22a)+_0x233f55(0x24a)]+=_0x233f55(0x299)+_0x233f55(0x296)+_0x233f55(0x21f)+_0x233f55(0x209)+'=\x22hov'+_0x233f55(0x1b8)+'rsor-'+'point'+_0x233f55(0x1bb)+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20<'+'div\x20c'+_0x233f55(0x2c3)+_0x233f55(0x1b2)+'\x20item'+_0x233f55(0x2ce)+_0x233f55(0x268)+_0x233f55(0x1d9)+_0x233f55(0x29c)+_0x233f55(0x269)+_0x233f55(0x211)+'gray-'+'100\x20d'+_0x233f55(0x2a7)+_0x233f55(0x202)+_0x233f55(0x2a0)+_0x233f55(0x262)+'0\x22>\x0a\x20'+_0x233f55(0x296)+_0x233f55(0x296)+_0x233f55(0x296)+'\x20\x20<in'+'put\x20'+(_0x2f1a15[_0x233f55(0x234)](_0xc34325,_0x4355aa)?'check'+'ed':'')+_0x233f55(0x208)+_0x25d456+'-'+_0x4355aa+(_0x233f55(0x2a9)+'e=\x22ra'+_0x233f55(0x26b)+_0x233f55(0x2b0)+'=\x22')+_0x4355aa+(_0x233f55(0x1c1)+'e=\x22')+_0x25d456+(_0x233f55(0x1b7)+_0x233f55(0x26d)+_0x233f55(0x21d)+'\x20peer'+_0x233f55(0x2cc)+_0x233f55(0x23d)+'ext-b'+_0x233f55(0x22e)+_0x233f55(0x2d4)+_0x233f55(0x1b1)+_0x233f55(0x2cf)+_0x233f55(0x22d)+_0x233f55(0x298)+_0x233f55(0x2ad)+_0x233f55(0x1cc)+_0x233f55(0x1be)+_0x233f55(0x27c)+_0x233f55(0x232)+'\x20dark'+':focu'+_0x233f55(0x1be)+_0x233f55(0x27c)+_0x233f55(0x222)+_0x233f55(0x2a4)+':ring'+'-offs'+_0x233f55(0x293)+_0x233f55(0x21e)+'0\x20dar'+_0x233f55(0x20b)+'us:ri'+_0x233f55(0x1d1)+'fset-'+_0x233f55(0x228)+_0x233f55(0x1bc)+_0x233f55(0x1b3)+'ring-'+_0x233f55(0x1e6)+'k:bg-'+_0x233f55(0x228)+'700\x20d'+_0x233f55(0x233)+_0x233f55(0x1cf)+_0x233f55(0x1b1)+'-600\x20'+_0x233f55(0x2ac)+_0x233f55(0x225)+_0x233f55(0x2d8)+_0x233f55(0x241)+_0x233f55(0x1c0)+_0x233f55(0x296)+_0x233f55(0x296)+_0x233f55(0x296)+_0x233f55(0x2af)+_0x233f55(0x276)+_0x233f55(0x20d))+_0x25d456+'-'+_0x4355aa+(_0x233f55(0x1b7)+_0x233f55(0x27b)+_0x233f55(0x29f)+'\x20ms-2'+_0x233f55(0x1ed)+_0x233f55(0x1fe)+'ont-m'+'edium'+'\x20text'+_0x233f55(0x1b1)+_0x233f55(0x27d)+_0x233f55(0x237)+_0x233f55(0x250)+_0x233f55(0x203)+_0x233f55(0x1ca)+'ay-30'+_0x233f55(0x21a)+_0x233f55(0x1b8)+'rsor-'+_0x233f55(0x1b0)+_0x233f55(0x1f2)+_0x233f55(0x2ba)+'er-ch'+_0x233f55(0x23e)+_0x233f55(0x1d6)+_0x233f55(0x246)+_0x233f55(0x270)+'peer-'+'check'+_0x233f55(0x1e9)+_0x233f55(0x2dc)+_0x233f55(0x1f9)+_0x233f55(0x1e8)+'eer-c'+_0x233f55(0x230)+'d:tex'+_0x233f55(0x223)+_0x233f55(0x222)+'\x22>')+_0x4355aa+(_0x233f55(0x28e)+_0x233f55(0x255)+_0x233f55(0x296)+_0x233f55(0x296)+'\x20\x20\x20</'+_0x233f55(0x1fc)+_0x233f55(0x296)+_0x233f55(0x296)+_0x233f55(0x273)+_0x233f55(0x299)+'\x20\x20');}),_0xf875d2[_0x31f8b3(0x2d5)+'Selec'+_0x31f8b3(0x1bf)+'l'](_0x31f8b3(0x2d1)+_0x31f8b3(0x271)+'=\x22'+_0x25d456+'\x22]')[_0x31f8b3(0x1b4)+'ch'](_0x5aac3d=>{const _0x5062ae=_0x31f8b3,_0x2fa9b4={'RhAGP':function(_0xd9219,_0x5ae64a){const _0x27b6e0=_0x5cb3;return _0x2f1a15[_0x27b6e0(0x235)](_0xd9219,_0x5ae64a);},'WBxhW':function(_0x1b03e2,_0x2594ab){return _0x2f1a15['lmseK'](_0x1b03e2,_0x2594ab);},'UxMmF':function(_0x19ac1d,_0x29fb98){return _0x2f1a15['TwEit'](_0x19ac1d,_0x29fb98);},'RzbJs':function(_0x4d8f30,_0x46b1d2){const _0x34117c=_0x5cb3;return _0x2f1a15[_0x34117c(0x235)](_0x4d8f30,_0x46b1d2);},'SiBcC':function(_0x2aae15,_0x21d366){const _0x16eb2b=_0x5cb3;return _0x2f1a15[_0x16eb2b(0x2b4)](_0x2aae15,_0x21d366);},'qZwxS':function(_0xbe88c3){return _0xbe88c3();}};_0x5aac3d[_0x5062ae(0x2a3)+_0x5062ae(0x23c)+_0x5062ae(0x20f)+'r'](_0x2f1a15['mFvBC'],function(){const _0x53cd6a=_0x5062ae,_0x5e603c=this[_0x53cd6a(0x2b0)],_0x58d2de=this['nextE'+_0x53cd6a(0x1dc)+_0x53cd6a(0x200)+'ing']['textC'+'onten'+'t'];document[_0x53cd6a(0x2ae)+_0x53cd6a(0x25e)+_0x53cd6a(0x2bd)](_0xafd457)[_0x53cd6a(0x1c9)+_0x53cd6a(0x2a2)+'t']=_0x58d2de;if(_0x5bc5f5===0xf6d+0x207d*0x1+-0x2fe9)selectedYear=parseInt(_0x58d2de);else{if(_0x2fa9b4[_0x53cd6a(0x1b5)](_0x5bc5f5,-0x84d+0x1ac0+-0x1271*0x1))selectedYearMonth=_0x2fa9b4['WBxhW'](parseInt,_0x58d2de);else{if(_0x5bc5f5===0x1290+0x1103+-0x2390)selectedMonth=_0x58d2de;else{if(_0x2fa9b4[_0x53cd6a(0x294)](_0x5bc5f5,-0x1c*-0xd6+-0x14ad+-0x2b7*0x1))selectedYearYearsDishes=parseInt(_0x58d2de);else{if(_0x2fa9b4['RzbJs'](_0x5bc5f5,0x1*0x166f+0x1028+-0x2*0x1349))selectedYearMonthsDishes=_0x2fa9b4[_0x53cd6a(0x247)](parseInt,_0x58d2de);else _0x2fa9b4[_0x53cd6a(0x294)](_0x5bc5f5,0x1fbe+0x3*0xa5e+-0x3ed2)&&(selectedMonthMonthsDishes=_0x58d2de);}}}}_0x254d33[_0x53cd6a(0x29b)](),_0x2fa9b4[_0x53cd6a(0x1e4)](getChecks);});});}