var _0x13f0b1=_0x305b;(function(_0x296bb0,_0x3393e3){var _0x2b8e18=_0x305b,_0x12371e=_0x296bb0();while(!![]){try{var _0xe83c18=parseInt(_0x2b8e18(0x14b))/0x1*(-parseInt(_0x2b8e18(0x15a))/0x2)+parseInt(_0x2b8e18(0x15d))/0x3+parseInt(_0x2b8e18(0x14a))/0x4+parseInt(_0x2b8e18(0x155))/0x5+parseInt(_0x2b8e18(0x166))/0x6+-parseInt(_0x2b8e18(0x157))/0x7*(parseInt(_0x2b8e18(0x14d))/0x8)+parseInt(_0x2b8e18(0x167))/0x9*(-parseInt(_0x2b8e18(0x158))/0xa);if(_0xe83c18===_0x3393e3)break;else _0x12371e['push'](_0x12371e['shift']());}catch(_0x3c8c3a){_0x12371e['push'](_0x12371e['shift']());}}}(_0x104e,0x2edcd));var money=0x1388,moneyInDOM=document[_0x13f0b1(0x164)]('#money'),card=document[_0x13f0b1(0x160)](_0x13f0b1(0x151)),c2=document['getElementById']('c2'),max=0xb,min=0x1;let exc=[];var sum=0x0;function _0x104e(){var _0x485876=['value','1784VgaKgQ','Your\x20money:\x20Rp.\x20','takecard','655881BpNNCG','status','#startgame','getElementById','sum','You\x20Already\x20Got\x20BlackJack','innerHTML','querySelector','push','1132704Teqfbj','5227713ylhIKf','#takecard','1008604heUYyz','228FWVgha','stat','246544iTBHhy','Sum:\x20','Game\x20is\x20Over\x20You\x20Can\x27t\x20take\x20new\x20card','disabled','card','floor','<img\x20src=\x22https://pics.me.me/you-thought-that-it-wasadio-meme-but-you-lost-the-39854439.png\x22>','bet','1891280ntbqWz','random','14nMgNRg','10VnbfsK'];_0x104e=function(){return _0x485876;};return _0x104e();}moneyInDOM[_0x13f0b1(0x163)]='Your\x20money:\x20Rp.\x20'+money;var bet=document[_0x13f0b1(0x160)](_0x13f0b1(0x154))['value'];document[_0x13f0b1(0x164)](_0x13f0b1(0x149))[_0x13f0b1(0x150)]=!![];function startGame(){var _0x400c09=_0x13f0b1;document['getElementById']('stat')[_0x400c09(0x163)]='',exc=[],document['querySelector'](_0x400c09(0x149))[_0x400c09(0x150)]=![],moneyInDOM['innerHTML']=_0x400c09(0x15b)+money,bet=document['getElementById'](_0x400c09(0x154))['value'];if(money<=0x0||money-bet<=0x0)alert('Your\x20money\x20=\x200\x20Please\x20Reset\x20Your\x20Money'),document[_0x400c09(0x164)](_0x400c09(0x149))[_0x400c09(0x150)]=!![],document[_0x400c09(0x164)](_0x400c09(0x15f))[_0x400c09(0x150)]=!![];else{document[_0x400c09(0x164)](_0x400c09(0x149))['disabled']=![],document[_0x400c09(0x160)]('status')[_0x400c09(0x163)]='';if(!bet)alert('Set\x20your\x20bet\x20first');else{money-=bet,moneyInDOM[_0x400c09(0x163)]=_0x400c09(0x15b)+money;var _0x544b8e=generateRandom();exc['push'](_0x544b8e),sum+=_0x544b8e;var _0x4f00af=generateRandom();exc[_0x400c09(0x165)](_0x4f00af),sum+=_0x4f00af,card['innerHTML']=_0x544b8e+'\x20'+_0x4f00af,document[_0x400c09(0x160)](_0x400c09(0x161))[_0x400c09(0x163)]=_0x400c09(0x14e)+sum;}}}function takeCard(){var _0x5d0d0d=_0x13f0b1;document[_0x5d0d0d(0x160)](_0x5d0d0d(0x161))[_0x5d0d0d(0x163)]=_0x5d0d0d(0x14e)+sum;if(sum>0x15)document['getElementById'](_0x5d0d0d(0x15e))['innerHTML']=_0x5d0d0d(0x14f),document[_0x5d0d0d(0x160)](_0x5d0d0d(0x14c))[_0x5d0d0d(0x163)]=_0x5d0d0d(0x153),document[_0x5d0d0d(0x160)](_0x5d0d0d(0x15c))[_0x5d0d0d(0x150)]=!![],sum=0x0,exc=[];else{if(sum===0x15)document[_0x5d0d0d(0x160)](_0x5d0d0d(0x15e))[_0x5d0d0d(0x163)]=_0x5d0d0d(0x162),money=money+bet*0x6,moneyInDOM[_0x5d0d0d(0x163)]='Your\x20money:\x20Rp.\x20'+money,document[_0x5d0d0d(0x164)](_0x5d0d0d(0x149))[_0x5d0d0d(0x150)]=!![],sum=0x0,exc=[];else{var _0x345a16=generateRandom();sum+=_0x345a16,exc[_0x5d0d0d(0x165)](_0x345a16),card[_0x5d0d0d(0x163)]=card[_0x5d0d0d(0x163)]+'\x20'+_0x345a16,document[_0x5d0d0d(0x160)](_0x5d0d0d(0x161))[_0x5d0d0d(0x163)]='Sum:\x20'+sum;if(sum>0x15)document[_0x5d0d0d(0x160)](_0x5d0d0d(0x15e))[_0x5d0d0d(0x163)]=_0x5d0d0d(0x14f),sum=0x0,document[_0x5d0d0d(0x164)](_0x5d0d0d(0x149))[_0x5d0d0d(0x150)]=!![],document[_0x5d0d0d(0x160)](_0x5d0d0d(0x14c))['innerHTML']=_0x5d0d0d(0x153);else sum===0x15&&(document[_0x5d0d0d(0x160)](_0x5d0d0d(0x15e))[_0x5d0d0d(0x163)]=_0x5d0d0d(0x162),money+=bet*0x6,moneyInDOM[_0x5d0d0d(0x163)]='Your\x20money:\x20Rp.\x20'+money,document[_0x5d0d0d(0x164)]('#takecard')[_0x5d0d0d(0x150)]=!![],sum=0x0,exc=[]);}}}function resetGame(){var _0x3a1cef=_0x13f0b1;money=0x1388,document[_0x3a1cef(0x160)]('money')['innerHTML']=_0x3a1cef(0x15b)+money,sum=0x0,exc=[],document['getElementById'](_0x3a1cef(0x151))[_0x3a1cef(0x163)]='',document[_0x3a1cef(0x160)]('sum')['innerHTML']=_0x3a1cef(0x14e),document['getElementById'](_0x3a1cef(0x154))[_0x3a1cef(0x159)]='';}function _0x305b(_0x5bac11,_0x28ca11){var _0x104e24=_0x104e();return _0x305b=function(_0x305ba2,_0x39fdb8){_0x305ba2=_0x305ba2-0x149;var _0x10cbfd=_0x104e24[_0x305ba2];return _0x10cbfd;},_0x305b(_0x5bac11,_0x28ca11);}function generateRandom(){var _0x542dfd=_0x13f0b1,_0x8e0343=Math[_0x542dfd(0x152)](Math[_0x542dfd(0x156)]()*(max-min+0x1))+min;return exc['includes'](_0x8e0343)?generateRandom(min,max):_0x8e0343;}