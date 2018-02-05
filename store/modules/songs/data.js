import uuid from "uuid4";

const hiphop = [
  {
    url: "https://soundcloud.com/g59/shrimppoboy",
    genre: "hip-hop"
  },
  {
    url: "https://soundcloud.com/rarefilth/antwon-x-lil-ugly-mane",
    genre: "hip-hop"
  },
  {
    url: "https://soundcloud.com/denzelcurryph/this-life-ft-ronny-j",
    genre: "hip-hop"
  },
  {
    url:
      "https://soundcloud.com/mikael-miksu-kuula/lil-ugly-mane-throw-dem-gunz",
    genre: "hip-hop"
  },
  {
    url:
      "https://soundcloud.com/msft6969/hiroi-sekai-worldwide-kohh-j-tash-andy-milonakis-dir-by-illiegel",
    genre: "hip-hop"
  },
  {
    url: "https://soundcloud.com/travisscott-2/wonderful-ftthe-weeknd",
    genre: "hip-hop"
  },
  {
    url: "https://soundcloud.com/interscope/kendrick-lamar-bitch-dont-kill",
    genre: "hip-hop"
  },
  {
    url:
      "https://soundcloud.com/teamsesh/bones-cholesterol-prod-by-vegard-veslelia?in=teamsesh/sets/bones-hermitofeastgrandriver",
    genre: "hip-hop"
  },
  {
    url:
      "https://soundcloud.com/ramirez_187/the-mystical-warlock-prod?in=ramirez_187/sets/the-grey-gorilla",
    genre: "hip-hop"
  },
  {
    url:
      "https://soundcloud.com/g59/runninthruthe7thwithmywoadies?in=g59/sets/southsidesuicide",
    genre: "hip-hop"
  }
];

const chill = [
  {
    url:
      "https://soundcloud.com/moodsprod/how-i-feel-feat-sam-wills-pre-order-ep-now",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/nesta-band/jamiroquai-space-cowboy-live",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/moscatello-music/bee-gees-night-fever-fnm",
    genre: "chill"
  },
  {
    url:
      "https://soundcloud.com/ramirez_187/40z-and-shorties-prodby-mikey-the-magician",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/scottrek116/al-green-lets-stay-together",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/richardchriss/save-room-richard-chriss",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/foolsgoldrecs/grown-up-explicit",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/scottrek33/everybody-hurts-drive-live-rem",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/thesouljukebox/lets-get-it-on-marvin-gaye",
    genre: "chill"
  },
  {
    url: "https://soundcloud.com/diego-olvera-perez/bob-marley-three-little",
    genre: "chill"
  }
];

const rock = [
  {
    url:
      "https://soundcloud.com/maxattics/the-rolling-stones-paint-it-black-cover",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/andybertazzz/welcome-to-the-jungle-perfect",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/rich-rd-hanyu/acdc-back-in-black",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/hilton-tedeschi/dire-straits-sultans-of-swing",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/innocentthieves/aerosmith-walk-this-way",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/foofighters/arlandria",
    genre: "rock"
  },
  {
    url:
      "https://soundcloud.com/citticringle/shine-on-you-crazy-diamond-parts-i-ix",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/ciudad-de-la-m-sica/black-sabath-iron-man",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/boot-led-zeppelin/stairway-to-heaven",
    genre: "rock"
  },
  {
    url: "https://soundcloud.com/officialmetallica/metallica-master-of-puppets",
    genre: "rock"
  }
];

const drumAndBass = [
  {
    url: "https://soundcloud.com/hermitude/vibration",
    genre: "drum&bass"
  },
  {
    url:
      "https://soundcloud.com/hermitude/the-buzz-feat-big-krit-mataya-young-tapz",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/disclosuremusic/bang-that",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/noisia/noisia-the-upbeats-dustup",
    genre: "drum&bass"
  },
  {
    url:
      "https://soundcloud.com/disclosuremusic/frontin-pharrell-ft-jay-z-disclosure-re-work",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/andr-s-madera-rodriguez/but-i-do-pooldore",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/theupbeats/punks?in=theupbeats/sets/punks-ep",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/elevaterecordsuk/macky-gee-tour",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/shogunaudio/my-nu-leng-friction-jigsaw",
    genre: "drum&bass"
  },
  {
    url: "https://soundcloud.com/gilda-notdead/far-from-home",
    genre: "drum&bass"
  }
];

export const generateData = () => {
  const data = [...drumAndBass, ...rock, ...chill, ...hiphop];
  data.map(item => (item.id = uuid()));
  return data;
};
