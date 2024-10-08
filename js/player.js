// This variable is used to record the current track's name for twitter share.
var song_name = '';
$.i18n.setDictionary(general_dict);

var RETRY_DELAY_MSECS = 2000; //Delay before trying to reconnect to stream after an error.
var MAX_MOBILE_SCREEN_WIDTH = 760;

// We are creating a custom player object that acts as a wrapper
// around the player object we get from Muses. We are doing this
// for a couple reasons:
//
// 1. It will be easier to swap out Muses for a different player engine
//    in the future - if we ever decide to do that.
// 2. We had to add in some custom behaviour depending on the player
//    customizations and whether or not the player is in Flash or HTML5
//    mode.
var MusesPlayer = function() {
  this.mobileDetect = this.mobileDetect();
  this.playerMode = settings.playerMode;
  this.flashDetect = false;
  //this.flashDetect = FlashDetect.versionAtLeast(10, 1) ? true : false;
  this.settings = {
    volume: 100,
    jsevents: true,
    autoplay: false,
    buffering: 0,
    title: 'test',
    bgcolor: '#FFFFFF',
    skin: 'ffmp3-mcclean',
    reconnectTime: 2000, //Doesn't seem to do anything
    width: 180,
    height: 60
  };

  if (this.playerMode == 'manual') {
    this.settings.url = settings.streamURL;
    this.settings.codec = settings.codec;
  } else if (this.playerMode == 'file') {
    this.settings.url = settings.streamURL;
    this.settings.codec = settings.codec;
  } else if (this.playerMode == 'auto') {
    this.availableMobileStreamQueue = settings.availableMobileStreams;
    this.availableDesktopStreamQueue = settings.availableDesktopStreams;
    var stream = this.getNextAvailableStream();
    this.settings.url = stream['url'];
    this.settings.codec = stream['codec'];
  }

  // Create the Muses player object
  if (this.flashDetect) {
    MRP.flashInsert(this.settings);
  } else {
    MRP.jsInsert(this.settings);
  }

  // Configure player title
  var player_title = settings.player_title;
  if (player_title === null) {
    document.querySelector('.station-name').style.display = 'none';
    // Removing this code because it puts share buttons outside the player.
    // $('.airtime-player').css('height', '150px');
  } else {
    setTextAndTitle(document.querySelector('.station-name'), player_title);
  }

  attachStreamMetadataToPlayer();

  // detects events in HTML5 mode
  if (!this.flashDetect) {
    MRP.html.audio.addEventListener(
      'error',
      function failed(e) {
        var streamUrl = '';
        if (musesPlayer.playerMode == 'auto') {
          var nextAvailableStream = musesPlayer.getNextAvailableStream();
          streamUrl = nextAvailableStream['url'];
        } else {
          streamUrl = musesPlayer.settings.url;
        }

        var titleElement = document.querySelector('.now-playing .track-title');
        switch (e.target.error.code) {
          case e.target.error.MEDIA_ERR_NETWORK:
            // If there is a network error keep retrying to connect
            // to a stream.
            musesPlayer.deferredPlay(streamUrl, RETRY_DELAY_MSECS);
            break;
          case e.target.error.MEDIA_ERR_DECODE:
            // If there was a corruption error or a problem with the browser
            // display an error and stop playback.
            togglePlayStopButton();
            clearTimeout(metadataTimer);
            setTextAndTitle(titleElement, 'Error - Try again later');
            break;
          case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            // If in auto mode and the current stream format is not supported
            // or the max number of listeners has been reached
            // retry connection with the next available stream.
            if (musesPlayer.playerMode == 'auto') {
              musesPlayer.deferredPlay(
                nextAvailableStream['url'],
                RETRY_DELAY_MSECS
              );
            } else {
              // If in manual mode and the current stream format is not supported
              // or the max number of listeners has been reached
              // display an error and stop play back.
              togglePlayStopButton();
              clearTimeout(metadataTimer);
              setTextAndTitle(titleElement, 'Error - Try again later');
            }
            break;
          default:
            togglePlayStopButton();
            clearTimeout(metadataTimer);
            setTextAndTitle(titleElement, 'Error - Try again later');
            break;
        }
      },
      true
    );
  }
};

MusesPlayer.prototype.mobileDetect = function() {
  return screen.width <= MAX_MOBILE_SCREEN_WIDTH;
};

// This function is called if an error occurs while a client is
// attempting to connect to a stream (An error would occur if
// the streams listener count has been maxed out or if the stream is down).
// It checks if the client is a mobile device or not and returns the next
// best available stream.
MusesPlayer.prototype.getNextAvailableStream = function() {
  if (this.mobileDetect && this.availableMobileStreamQueue.length > 0) {
    return this.getNextAvailableMobileStream();
  }

  if (!this.mobileDetect && this.availableDesktopStreamQueue.length > 0) {
    return this.getNextAvailableDesktopStream();
  }

  // If we get to this point there are no available streams for the
  // type of device the client has connected with so just return
  // the next available stream - first we'll try the desktop streams
  var desktopStream = this.getNextAvailableDesktopStream();
  if (desktopStream) {
    return desktopStream;
  } else {
    return this.getNextAvailableMobileStream();
  }
};

// Gets and returns the next available mobile stream from the queue,
// but adds it back to the end of the queue to be recycled.
MusesPlayer.prototype.getNextAvailableMobileStream = function() {
  var stream = this.availableMobileStreamQueue.shift();
  //add to end of queue
  this.availableMobileStreamQueue.push(stream);
  return stream;
};

// Gets and returns the next available desktop stream from the queue,
// but adds it back to the end of the queue to be recycled.
MusesPlayer.prototype.getNextAvailableDesktopStream = function() {
  var stream = this.availableDesktopStreamQueue.shift();
  //add to end of queue
  this.availableDesktopStreamQueue.push(stream);
  return stream;
};

MusesPlayer.prototype.play = function() {
  this.flashDetect ? MRP.play() : musesHTMLPlayClick();
  togglePlayStopButton();
};

MusesPlayer.prototype.stop = function() {
  this.flashDetect ? MRP.stop() : musesHTMLStopClick();
  togglePlayStopButton();
};

MusesPlayer.prototype.setURL = function(url) {
  this.flashDetect ? MRP.setUrl(url) : musesHTMLSetURL(url);

  // update musesPlayer object
  musesPlayer.settings.url = url;
};

/** Retry playback after a few seconds (used to throttle attempts to reconnect/play). */
MusesPlayer.prototype.deferredPlay = function(streamUrl, delayMSec) {
  if (!this.flashDetect) {
    setTimeout(function() {
      var audio = MRP.html.audio;
      audio.src = streamUrl;
      audio.load();
      audio.play();
    }, delayMSec);
  } else {
    setTimeout(function() {
      musesPlayer.setURL(streamUrl);
      musesPlayer.play();
    }, delayMSec);
  }
};

// detects errors in FLASH mode
function musesCallback(event, value) {
  switch (event) {
    case 'ioError':
      // problem connecting to stream
      var streamUrl = '';
      if (musesPlayer.playerMode == 'auto') {
        streamUrl = musesPlayer.getNextAvailableStream()['url'];
      } else {
        streamUrl = musesPlayer.settings.url;
      }

      //Retry playback but only after sleeping for a bit, to avoid spinning.
      musesPlayer.deferredPlay(streamUrl, RETRY_DELAY_MSECS);
      break;
    case 'securityError':
      // max listeners reached
      if (musesPlayer.playerMode == 'auto') {
        var stream = musesPlayer.getNextAvailableStream();
        musesPlayer.deferredPlay(stream['url'], RETRY_DELAY_MSECS);
      } else if (musesPlayer.playerMode == 'file') {
      } else {
        // If in manual mode and there is a problem connecting to
        // the stream display an error and stop play back.
        MRP.stop();
        if ( elementHasClass(document.getElementById('play_button'), 'hide-button')
          || elementHasClass(document.getElementById('play_pause_wrap_container'), 'pause')
        ) {
          togglePlayStopButton();
        }
        clearTimeout(metadataTimer);
        setTextAndTitle(document.querySelector('.now-playing .track-title'), 'Error - Try again later');
      }
      break;
  }
}

// Triggers the play function on the Muses player object in HTML5 mode
function musesHTMLPlayClick() {
  MRP.html.audio.src = musesPlayer.settings.url;
  MRP.html.audio.play();
}

// Triggers the stop function on the Muses player object in HTML5 mode
// NOTE: The HTML5 audio element doesn't have stop functionality. It
// can only be paused.
function musesHTMLStopClick() {
  MRP.html.audio.pause();
  //delete MRP.html;
}

function musesHTMLSetURL(url) {
  MRP.html.audio.src = url;

  //MRP.html.audio.play();
  //musesPlayer.play();
}

function musesHTMLSetCodec(codec) {
  MRP.html.audio.codec = codec;
}

function togglePlayStopButton() {
    toggleClassnameForElementWithId('play_pause_wrap_container', 'pause');
    toggleClassnameForElementWithId('play_button', 'hide-button');
    toggleClassnameForElementWithId('stop_button', 'hide-button');
}

function elementHasClass(element, className) {
  if (!element) {
    return false;
  }
  if ( (element.classList && element.classList.contains(className))
    || (!(element.classList) && element.className.split(' ').indexOf(className) >= 0)
  ) {
      return true;
  }
  return false;
}

function toggleClassnameForElementWithId(id, classNameToToggle) {
  var element = document.getElementById(id);
  if (!element) {
    return;
  }
  if (element.classList) {
    element.classList.toggle(classNameToToggle);
  } else {
    var classes = element.className.split(' ');
    var i = classes.indexOf(classNameToToggle);

    if (i >= 0) {
      classes.splice(i, 1);
    }
    else {
      classes.push(classNameToToggle);
    }
    element.className = classes.join(' ');
  }
}

function playOrPause() {
  if (elementHasClass(document.getElementById('play_pause_wrap_container'), 'pause')) {
    musesPlayer.stop();
  } else {
    musesPlayer.play();
  }
}

function setTextAndTitle(element, value) {
  element.innerHTML = value;
  element.title = element.innerText;
}

function updateCoverArtSrc(metadata) {
  var albumArtSrc = '/images/cover-art.png';

  if (metadata && metadata.file_artwork_id) {
    albumArtSrc = '/api/album-artwork?id=' + metadata.id;
  }
  var coverArtElement = document.getElementById('cover_art');
  if (coverArtElement && coverArtElement.src !== albumArtSrc) {
    coverArtElement.src = albumArtSrc;
  }
}

// variables for updating the player's metadata
var time_to_next_track_starts = 0;
var metadataTimer = null;

// Fetches the streams metadata from the Airtime live-info API
// and attaches it to the player UI.
//
// The metadata is fetched when the current track is about to end.
function attachStreamMetadataToPlayer() {
  $.ajax({
    url: settings.metadata_api_url,
    data: { type: 'interval', limit: '5' },
    dataType: 'jsonp',
    success: function(data) {
      var titleElement = document.querySelector('.now-playing .track-title');
      var artistElement = document.querySelector('.now-playing .artist');
      var str_off_air = $.i18n._('Off Air');
      var str_offline = $.i18n._('Offline');
      if (data.current === null) {
        //Refresh in 20 seconds
        setTextAndTitle(titleElement, str_off_air);
        setTextAndTitle(artistElement, str_offline);
        updateCoverArtSrc();
        time_to_next_track_starts = 20000;
      } else {
        var artist = '';
        var track = '';
        //var nowPlayingHtml = '';

        if (data.current.type == 'livestream') {
          var stream_metadata = '';
          if (data.current.name != '') {
            stream_metadata = data.current.name;
          }

          //nowPlayingHtml += 'Live DJ';
          //nowPlayingHtml += '<span>' + stream_metadata + '</span>';

          setTextAndTitle(titleElement, 'Live DJ');
          setTextAndTitle(artistElement, stream_metadata);
          updateCoverArtSrc();
        } else if (data.current.type == 'track') {
          artist = data.current.metadata.artist_name;
          track = data.current.metadata.track_title;
          updateCoverArtSrc(data.current.metadata);

          //nowPlayingHtml = '';
          if (artist) {
            //nowPlayingHtml += artist;
          setTextAndTitle(artistElement, artist);
          }
          if (track) {
            //nowPlayingHtml += '<span>' + track + '</span>';
            setTextAndTitle(titleElement, track);
            song_name = track;
          }
        } else if (data.current.type == 'webstream') {
          var webstreamName = '';
          var webstreamMetadata = '';
          if (data.current.metadata === null) {
            webstreamName = data.current.name;
          } else {
            webstreamName = data.current.metadata.name;
            webstreamMetadata = data.current.metadata.live_metadata;
          }
          //nowPlayingHtml += webstreamName;
          //nowPlayingHtml += '<span>' + webstreamMetadata + '</span>';
          setTextAndTitle(titleElement, webstreamName);
          setTextAndTitle(artistElement, webstreamMetadata);
          updateCoverArtSrc();
        } else {
          //nowPlayingHtml += '<span>' + data.current.name + '</span>';

          setTextAndTitle(titleElement, '');
          setTextAndTitle(artistElement, data.current.name);
          updateCoverArtSrc();
        }

        //titleElement.html(nowPlayingHtml);

        var current_time = new Date();

        var current_track_end_time = new Date(data.current.ends);

        if (
          current_track_end_time == 'Invalid Date' ||
          isNaN(current_track_end_time)
        ) {
          // If the conversion didn't work (since the String is not in ISO format)
          // then change it to be ISO-compliant. This is somewhat hacky and may break
          // if the date string format in live-info changes!
          current_track_end_time = new Date(
            data.current.ends.replace(' ', 'T')
          );
        }
        //convert current_time to UTC to match the timezone of time_to_next_track_starts
        current_time = new Date(
          current_time.getTime() + current_time.getTimezoneOffset() * 60 * 1000
        );
        time_to_next_track_starts = current_track_end_time - current_time;

        //Auto-update the metadata every few seconds for live streams since we can't predict when it'll change.
        if (data.current.type == 'livestream') {
          time_to_next_track_starts = 10000;
        }
        // Add 3 seconds to the timeout so Airtime has time to update the metadata before we fetch it
        metadataTimer = setTimeout(
          attachStreamMetadataToPlayer,
          time_to_next_track_starts + 3000
        );
      }
      var nextTrackElement = document.querySelector('ul.schedule-list li') || document.querySelector('.next-track-title');
      if (data.next === null) {
        setTextAndTitle(nextTrackElement, $.i18n._('Nothing scheduled'));
      } else {
        setTextAndTitle(nextTrackElement, data.next.name);
      }
    }
  });

  //Preventative code if the local and remote clocks are out of sync.
  if (isNaN(time_to_next_track_starts) || time_to_next_track_starts < 0) {
    time_to_next_track_starts = 0;
  }
}

function PopupCenter(url, title, w, h) {
  // Fixes dual-screen position Most browsers Firefox
  var dualScreenLeft =
    window.screenLeft != undefined ? window.screenLeft : screen.left;

  var dualScreenTop =
    window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;

  var height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;
  var newWindow = window.open(
    url,
    title,
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
  );

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}

document.getElementById('widget_twitter').addEventListener('click', function () {
  var stationURL = settings.stationURL;
  var stationName = settings.stationName;
  var hashtags = 'AirtimePro';
  var text = (song_name === '')
    ? `Station ${stationName} is now playing "${song_name}"! Check it out!`
    : `Check out this radio station! "${stationName}"`;
  var url =
    `https://twitter.com/share?url=${stationURL}&related=twitterapi%2Ctwitter&hashtags=${hashtags}&text=${encodeURIComponent(text)}`;
  PopupCenter(url, 'share', 500, 325);
});

function getDimensionsForSkin(skin) {
  const key = skin != '2' ? '1' : '2';
  return {
    1: { width: 280, height: 216 },
    2: { width: 350, height: 396 },
  }[key];
}

document.getElementById('widget_embed').addEventListener('click', () => {
  const dims = getDimensionsForSkin(new URL(location.href).searchParams.get('skin'));
  document.querySelector('.src-code').innerText = `<iframe frameborder="0" width="${dims.width}" height="${dims.height}" src="${location.href}"></iframe>`;
  document.getElementById('indication').innerText = 'Click code to copy.';
  document.querySelector('.modal').style.display = 'block';
});

document.getElementById('widget_facebook').addEventListener('click', () => PopupCenter(settings.facebookURL, 'share', 500, 325));

// Embed button modal box close button.
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// Embed button click code to copy to clipboard.
document.querySelector('.src-code').addEventListener('click', function() {
  var textArea = document.createElement('textarea');
  textArea.style.background = 'transparent';
  textArea.value = this.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  var indicationElement = document.getElementById('indication');
  indicationElement.innerText = 'Code already copied to clipboard.';
  setTimeout(function() {
    indicationElement.innerText = 'Click code to copy.';
  }, 1000);
});

document.querySelector('.sharing-button').addEventListener('mouseover', function() {
  this.classList.add('hover');
});

document.querySelector('.sharing-button').addEventListener('mouseout', function() {
  this.classList.remove('hover');
});
