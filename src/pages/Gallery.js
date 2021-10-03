import { useCallback, useEffect, useState } from "react";
import LightboxImage from "../components/common/LightboxImage";

function Gallery() {
  const [instaMedia, setInstaMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMediaHandler = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${process.env.REACT_APP_LONG_LIVED_ACCESS_TOKEN}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const dataWithoutVideos = data.data.filter(
        (d) => d.media_type !== "VIDEO"
      );
      setInstaMedia(dataWithoutVideos);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMediaHandler();
  }, [fetchMediaHandler]);

  let content = <p>Fant ingen bilder</p>;

  console.log(instaMedia.length);

  if (instaMedia.length > 0) {
    content = instaMedia.map((i) => {
      return (
        <LightboxImage
          key={i.id}
          imgSrc={i.media_url}
          imgAlt={i.caption}
          title={i.caption}
          group="gallery"
          gallery={true}
        />
      );
    });
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Laster inn...</p>;
  }

  return (
    <>
      <h2>Bilder publisert på Instagram</h2>
      <div className="gallery-flex">{content}</div>
    </>
  );
}

export default Gallery;

/**
 * 
 * 
 * {
    "data": [
        {
            "id": "17873112287469510",
            "caption": "Disarming Hornet\n\n#hollowknight #hollowknightfanart #hollowknightart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/182585796_2546671315639652_3940180805179702736_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=PA6Kbce2S00AX9EZuKZ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=3c14cbf0b1be13c2d4c24521c71d4248&oe=615E8C02",
            "media_type": "IMAGE"
        },
        {
            "id": "17887298762061506",
            "caption": "Desktop sheep! #esheep #desktopsheep",
            "media_url": "https://video.cdninstagram.com/v/t50.2886-16/175449252_457493395580394_7051780808900517571_n.mp4?_nc_cat=102&vs=17912017705704135_1988420787&_nc_vs=HBkcFQAYJEdLUWtkUXJxcFZSN0ZxQUJBTU9lYnFSSTlkeGhia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJo7k0brTuNE%2FFQIoAkMzLBc%2F%2BqfvnbItDhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU0MC5mZWVkIn0%3D&_nc_ohc=moKnV3DabP8AX_GR9FK&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=7a8450b2b04f32695b56f9430aa85fea&oe=615A10D8&_nc_vts_prog=1&vts=1&_nc_rid=7948e2d152",
            "media_type": "VIDEO"
        },
        {
            "id": "17844505790512627",
            "caption": "Samus!\n#metroidart\n#metroidfanart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/143506614_262731038612053_2367273703330282593_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=INioypgKaO4AX8TRkQc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=1dc4f176dda6e4bcbf0f1ee8ec96bf41&oe=615E3881",
            "media_type": "IMAGE"
        },
        {
            "id": "17859476954334356",
            "caption": "Discovering my mental age with a drawing (arealme.com).\n\nIt says my mental age is 27 and I'm 26 :O",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/131889398_719753562309549_7322091402677886695_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=Z25Tx-_NzHMAX-pCNAB&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=e2dc960aad82598412e2069f58e149c8&oe=615F19C6",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "17870856431107426",
            "caption": "#hollowknightfanart #hollowknightart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/128215695_393562375100647_8989147005996215443_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=kq2pQQcu5UIAX_U7Njf&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=7f81e9154fd8bca0b8e2c35f54e17586&oe=615DBCDC",
            "media_type": "IMAGE"
        },
        {
            "id": "17894781487693094",
            "caption": "#hollowknightart #hollowknightfanart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/128208278_290323592400119_8137297023240781513_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_rdZ-79KlR4AX8cZBzV&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=b9cff49f73f7ec093fd6e194e1218662&oe=615E4EAA",
            "media_type": "IMAGE"
        },
        {
            "id": "17908743148534123",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/124278474_209433650565668_6205548818957723727_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=-w2MFw7K7ZcAX-Y5M-Q&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=501714cfd696e1cfa813f93590edcea9&oe=615E6A40",
            "media_type": "IMAGE"
        },
        {
            "id": "17886171925768011",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123963206_677520186470542_2961105743805471519_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_aKU9RkPmRoAX8tqkls&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=74735de638099beb14939282dc9d7a4d&oe=615F793F",
            "media_type": "IMAGE"
        },
        {
            "id": "17895054208663195",
            "caption": ".\n#hollowknightart \n#hollowknightfanart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/124302893_1337362636595193_2719101737361076099_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=ZIk5gLS9uO8AX_zl8hj&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=6e6ab71d0f179e0b4456f5b22eef2c74&oe=615F05F6",
            "media_type": "IMAGE"
        },
        {
            "id": "17852326643333860",
            "caption": ".\n\"Garama!\"\n–Hornet\n\n#hollowknightart \n#hollowknightfanart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123702955_143865244142280_784796128510515407_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=VdBbsOg28bgAX-bn8Wi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=43ab32bdc293e21d5168cc46aa9bee28&oe=615E8124",
            "media_type": "IMAGE"
        },
        {
            "id": "17844228830479004",
            "caption": "#hollowknightart \n#hollowknightfanart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123587322_718929738732133_6981022479588269815_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=fwsG2Ma3pGAAX9WtOEl&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=f6bcac65fe0caebfb58b1e71b3176cee&oe=615E3235",
            "media_type": "IMAGE"
        },
        {
            "id": "17862698543191421",
            "caption": "This dance is kinda hard\n#hollowknightart \n#hollowknightfanart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123723513_411055263598811_3411252840743200840_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=pfXw_I6u0v0AX_C8ZvS&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=5d883681ad6c7801ea95c4a189dce03a&oe=615F68B7",
            "media_type": "IMAGE"
        },
        {
            "id": "18057889066248060",
            "caption": "Fighting for respect\n#hollowknightart \n#hollowknightfanart \n\nHoly frick I got so many hearts on my last post. I'm so happy now :D",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123475992_366564848017617_546656601261924560_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3XM-hchMDyEAX-bjuAn&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=4563297792792e24d226b5a414bdd40c&oe=615F5322",
            "media_type": "IMAGE"
        },
        {
            "id": "17891524285726573",
            "caption": "Hollow Knight fanart:\nThe Abyss\n#hollowknightfanart #hollowknightart",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123270757_385666222790037_2355994815372865471_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=GFYtD0jZjtMAX9UEAid&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=558256083fcc95acad6f923e78e4953b&oe=615E57F0",
            "media_type": "IMAGE"
        },
        {
            "id": "17901996472590743",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123262230_1074319086324882_4658285727910534057_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_vyuAEtYbP8AX9yHXma&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=6c5e123cfb08ab3998b067748e85a5af&oe=615E4715",
            "media_type": "IMAGE"
        },
        {
            "id": "17911698745519610",
            "caption": "#drawing",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123145531_667055027346637_8956817855027085415_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=u1jWlP2nD94AX-zPa-O&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=5a24031acfc58fc7dfa517222010908a&oe=615E55F5",
            "media_type": "IMAGE"
        },
        {
            "id": "17884895032777380",
            "caption": "Interviewing",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123119539_351463729409645_4072410393774151050_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=9n5Rxg7ZaxkAX_DRQwG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=d698f8ba1edd128972bd72cbfb211d2d&oe=615F6D2E",
            "media_type": "IMAGE"
        },
        {
            "id": "17891026081729804",
            "caption": "I had to make the image wider (adding the dark background) or else instagram wouldn't let me fit the whole image in the post",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123128659_149740973527538_7879929100233988951_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=nwL2BI1cIewAX-Dl9bu&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=0295df344ee2c1a33bd2f7e0964d94b8&oe=615DD860",
            "media_type": "IMAGE"
        },
        {
            "id": "17864954588140102",
            "caption": "Best author!! #alistairmaclean",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/122927801_380968960014240_802421061719483710_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=xUVjeeF4i0QAX-EVKjZ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=0213a5317cc24025f599ca8a9dcae338&oe=615E23AD",
            "media_type": "IMAGE"
        },
        {
            "id": "17859857132225521",
            "caption": "Gravely",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/122696506_680392019254620_7025223543540499457_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=YL2M7imBqFwAX_xJtOc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=c736eb8f215cc2d3538545fc7397ae30&oe=615E60BE",
            "media_type": "IMAGE"
        },
        {
            "id": "17872205054020860",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/122906954_1225001251214666_6314140283902771790_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=L5-ajA4valYAX8pRmUN&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=135f14599b1486fb717035ee6caed365&oe=615ED7BD",
            "media_type": "IMAGE"
        },
        {
            "id": "18128642647140300",
            "caption": "Sowing",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/122696506_2612775532365764_5010826225103040218_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=zRk2NEd2h7MAX_3c_cH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=ad236d8e542eba6b11f548e30182fd91&oe=615E6462",
            "media_type": "IMAGE"
        },
        {
            "id": "17865821222087009",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/122618454_114260757126565_9004865580879340208_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=8s9uNcPoFH8AX_d5bX7&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=5e79a196b6574095f2f05f894ce835c9&oe=615DD8D4",
            "media_type": "IMAGE"
        },
        {
            "id": "17891164153708802",
            "caption": "Trying out clip studio paint effects",
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/122507377_735960090599523_7945233642337305740_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=v5xKYPq7tdQAX-Oy-t7&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=78b8221423b276869f698398f3798f69&oe=615EBB91",
            "media_type": "CAROUSEL_ALBUM"
        },
        {
            "id": "17882940481805891",
            "caption": "Mmm, infinite donut!",
            "media_url": "https://video.cdninstagram.com/v/t50.2886-16/122773558_679241429388075_6471946292806400766_n.mp4?_nc_cat=109&vs=17879701054851514_1397683119&_nc_vs=HBkcFQAYJEdEWmdVUWNyaXgwNHhHa0NBUDY2SVF6ZF9OQlpia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvTMtt3I38I%2FFQIoAkMzLBdAGu6XjU%2FfOxgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU0MC5mZWVkIn0%3D&_nc_ohc=uCGLSBY1fugAX8vqVjw&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=cb00a6dbce564b9456a8862cd656b4fc&oe=615A1AE7&_nc_vts_prog=1&vts=1&_nc_rid=f02e023861",
            "media_type": "VIDEO"
        }
    ],
    "paging": {
        "cursors": {
            "before": "QVFIUmE0VE1ETUlnOC1fc3lRYzFPQXNjWVRud3JCQVFRald0N19ackJNNGhYcmd6T19OcGZAUaXNrc1Q1UVNfOGJROFRPamF6YnpJdDZADMExSdmlsLXVST01R",
            "after": "QVFIUkkxanlsSUo2T1NjakREY3JWczQ3bThkVTZAVbWFSRUdqdjBxRFc2cEZAQR3RRN2dJZADlqOGdPZA2c2SU41Rnc1R2VxZAXBtMno4VV9rSkV4QmJzUlRhM3FB"
        },
        "next": "https://graph.instagram.com/v10.0/17841421688843316/media?access_token=IGQVJXY1Q5TEV0bER5UW05SU10SmRBQnFMakltUEtOZAVA4TkxUc1pSek54Xzc5UkEzemI1cTJpeEwwcVJEMklHUmtWSVpwS0FfaXRPZAWkxa3VOWkFCV1ZAfLUhnRVhNWmZAvNGN3QTRqdnFQQUY0QXVJY2o4S0x1cHZAqc0xZA&fields=id%2Ccaption%2Cmedia_url%2Cmedia_type&limit=25&after=QVFIUkkxanlsSUo2T1NjakREY3JWczQ3bThkVTZAVbWFSRUdqdjBxRFc2cEZAQR3RRN2dJZADlqOGdPZA2c2SU41Rnc1R2VxZAXBtMno4VV9rSkV4QmJzUlRhM3FB"
    }
}
 * 
 */
