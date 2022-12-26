// backgrounds
import wildy from './background/wildy.webp';
import desert from './background/kha.webp';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';
import runescapeLogin from './background/runescapeLogin.jpg'
import logoo from './background/runescapeLogo.webp'

// cards
import Dharock from './Dharock.png'
import Bronze from './bronze.webp'
import Bandos from './bandos.webp'
import Graandor from './Graandor.webp'
import Dragon from './dragon.webp'
import Mage from './mage.webp'
import noobranger from './noobranger.webp'
import ahrim from './ahrim.webp'
import wom from './Wise_old_Man.webp'
import virtus from './virtus.webp'

// logo
import logo from './logo.svg';


//icons
import rsattack from './icons/attack.png'
import rsstrenght from './icons/strenght.png'
import rsrange from './icons/range.png'
import rsmagic from './icons/magic.png'



// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';
import Zero from './icons/zero.webp'
import Hit from './icons/hit.webp'

// players
import player01 from './Man.webp';
import player02 from './Man.webp';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';
import main from './sounds/main.mp3'
import adventure from './sounds/adventure.mp3'

export const allCards = [
 
  Dharock,
  Bronze,Bandos,
  Dragon, Graandor,
  Mage,noobranger,ahrim,wom,virtus
  
];

export {
  rsattack,rsmagic,rsstrenght,rsrange,



  Zero,
  Hit,
  adventure,
  logoo,
  main,
  wildy,
  desert,
  eoaalien,
  panight,
  heroImg,
  runescapeLogin,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
  
};

export const battlegrounds = [
  { id: 'bg-saiman', image: wildy, name: 'Wildernes' },
  { id: 'bg-astral', image: desert, name: 'Dessert' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];


export const outfits = [
  { id: '1', image: Dharock, name: 'Dharock' },
  { id: '2', image: Bronze, name: 'Bronze' },
  { id: '3', image: Bandos, name: 'Bandos' },
  { id: '4', image: Dragon, name: 'Dragon' },
  { id: '5', image: Graandor, name: 'Graandor' },
  { id: '6', image: Mage, name: 'Mage' },
  { id: '7', image: noobranger, name: 'ranger' },
  { id: '8', image: ahrim, name: 'Ahrim' },
  { id: '9', image: wom, name: 'Old Wise Man' },
  { id: '10', image: virtus, name: 'Virtus' }
];

export const gameRules = [
  'each players chooses one',
  'attack style and than fight',
  'Melee beats Range',
  'Range beats Magic',
  'Magic beats Melee',

];