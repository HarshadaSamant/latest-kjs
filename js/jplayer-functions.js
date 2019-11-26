jQuery(document).ready(function($) {

    //***************************
    // jPlayerPlayer Function
    //***************************
    var myPlayer = new jPlayerPlaylist({
      jPlayer: "#jquery_jplayer_2",
      cssSelectorAncestor: "#jp_container_2"
    }, [
          //php writePlaylist('Y',' (!!duration!!)'); 
          //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
          {
              title: "Catch & Release (Deepend Remix) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Of All Things (feat. Too $hort) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Order More (feat. Starrah) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          },
      ],
       {
         
          playlistOptions: { loopOnPrevious: true, },
          loop: true,
          swfPath: "images/jplayer.swf",
          supplied: "mp3, oga",
          wmode: "window",
          useStateClassSkin: true,
          autoBlur: false,
          preload: 'auto',
          preload: 'metadata',
          smoothPlayBar: true,
          audioFullScreen: true,
          keyEnabled: true,
      });

    var myPlayer = new jPlayerPlaylist({
      jPlayer: "#jquery_jplayer_3",
      cssSelectorAncestor: "#jp_container_3"
    }, [
          //php writePlaylist('Y',' (!!duration!!)'); 
          //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
          {
              title: "Catch & Release (Deepend Remix) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Of All Things (feat. Too $hort) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Order More (feat. Starrah) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          },
      ],
       {
         
          playlistOptions: { loopOnPrevious: true, },
          loop: true,
          swfPath: "images/jplayer.swf",
          supplied: "mp3, oga",
          wmode: "window",
          useStateClassSkin: true,
          autoBlur: false,
          preload: 'auto',
          preload: 'metadata',
          smoothPlayBar: true,
          audioFullScreen: true,
          keyEnabled: true,
      });

    var myPlayer = new jPlayerPlaylist({
      jPlayer: "#jquery_jplayer_4",
      cssSelectorAncestor: "#jp_container_4"
    }, [
          //php writePlaylist('Y',' (!!duration!!)'); 
          //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
          {
              title: "Catch & Release (Deepend Remix) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Of All Things (feat. Too $hort) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Order More (feat. Starrah) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          },
      ],
       {
         
          playlistOptions: { loopOnPrevious: true, },
          loop: true,
          swfPath: "images/jplayer.swf",
          supplied: "mp3, oga",
          wmode: "window",
          useStateClassSkin: true,
          autoBlur: false,
          preload: 'auto',
          preload: 'metadata',
          smoothPlayBar: true,
          audioFullScreen: true,
          keyEnabled: true,
      });

    var myPlayer = new jPlayerPlaylist({
      jPlayer: "#jquery_jplayer_5",
      cssSelectorAncestor: "#jp_container_5"
    }, [
          //php writePlaylist('Y',' (!!duration!!)'); 
          //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
          {
              title: "Catch & Release (Deepend Remix) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Of All Things (feat. Too $hort) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Order More (feat. Starrah) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          }, {
              title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
              mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
          },
      ],
       {
         
          playlistOptions: { loopOnPrevious: true, },
          loop: true,
          swfPath: "images/jplayer.swf",
          supplied: "mp3, oga",
          wmode: "window",
          useStateClassSkin: true,
          autoBlur: false,
          preload: 'auto',
          preload: 'metadata',
          smoothPlayBar: true,
          audioFullScreen: true,
          keyEnabled: true,
      });

});