import './sass/main.scss'
import logo from './files/header-banki.svg'
import location from './files/header-geo.svg'
import exit from './files/header-door.svg'
import dzen from './files/dzen.svg'
import twit from './files/twitter.svg'
import vk from './files/vk.svg'
import telegram from './files/tg.svg'
import clMstr from './files/mates.svg'
import wallet from './files/wallet-dynamic-gradient.png'
import './files/Alfa-logo.svg'
import './files/car.png'
import './files/Logo_all-diposit.svg'



const img_loc= document.getElementById('img_loc');
const img_exit= document.getElementById('img_exit');
const img_dzen= document.getElementById('img_dzen');
const img_twit= document.getElementById('img_twit');
const img_vk= document.getElementById('img_vk');
const img_tel= document.getElementById('img_tel');
const img_clMstr= document.getElementById('img_clMstr');
const img_wallet= document.getElementById('img_wallet');



img_loc.src=location;
img_exit.src=exit;
img_dzen.src=dzen;
img_twit.src=twit;
img_vk.src=vk;
img_tel.src=telegram;
img_clMstr.src=clMstr;
img_wallet.src=wallet;


const file1 = require('./js/script.js');