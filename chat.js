(async function () {
  try {
    var acp = "ohiogyatt";
    
    var activationDiv = document.getElementById("activationDiv");
    
    var messages = document.getElementById("messages");
    
    window.specialCommandsActivated = false;
    if (localStorage.getItem("activated")) {
      window.specialCommandsActivated = true;
      activationDiv.hidden = true;
    }

    var activateCommandPassword = document.getElementById(
      "activateCommandPassword"
    );
    var activateCommandsInput = document.getElementById(
      "activateCommandsPassword"
    );
    activateCommandPassword.onclick = function () {
      if (window.specialCommandsActivated) {
        window.alert("Already activated!");
      } else {
        if (acp == activateCommandsInput.value) {
          window.specialCommandsActivated = true;
          activationDiv.hidden = true;
          window.alert("Activation successful!");
          localStorage.setItem("activated", "true");
        } else {
          window.alert("Sorry, this is not the password.");
        }
      }
    };

    function handleErrors(e) {
      //Handle errors and display them to the user,
      //also log inside the devloper tools console
      //to try to give further information about this error.
      document.body.style.color = "red";
      document.body.style.background = "black";
      document.body.style.fontFamily = "arial";
      document.body.innerHTML =
        e +
        "<br>" +
        "<br>" +
        "You need to refresh your page to try fixing the error, an unexpected error occurred during loading.<br>" +
        "Try clearing you're browser cookies if this error continues.<br>If you're a developer check the devloper console for further details about this error message.";
      console.error(e);
    }
    var emojiserver = ""; //Leave this empty for this site as the server.
    var sections = {};
    var emojis = [
      //Place urls in quotes, and make sure to add commas at the end of the quotes to prevent random errors from happening.
      "img/guy_pointing.svg",
      "img/mrbeaast.svg",
      "img/obama.svg",
      "img/whatthe.jpg",
      "img/anotherthing.svg",
      "img/sad.svg",
      "img/thing.svg",
      "img/dance.gif",
      "img/sonk.png",
      "img/2.png",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/sonic-sonic-the-hedgehog.gif?v=1714953946021",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/ezgif-4-71ea9f9245.gif?v=1714954639819",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/sonic-dance-fast-goofy-meme.gif?v=1714954633775",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/tails-sonic%20(1).gif?v=1714954866938",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/loaf.png?v=1714955508974",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/spongebob-squarepants-leaving.gif?v=1714955760113",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/Delete that Right Now Sonic Meme?v=1714955952963",
      "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/Those games are very cool Mario loves you?v=1714956681859",
      "https://cdn.glitch.global/7c96d5e9-c306-40b6-a0ef-5f5da70ecb6b/Sad2.png?v=1715340685313",
      "https://cdn.glitch.global/7c96d5e9-c306-40b6-a0ef-5f5da70ecb6b/cat.png?v=1715342049891"
    ];
    var notifcationLogo = "favicon.png";
    function bin2String(array) {
      var result = "";
      for (var i = 0; i < array.length; i++) {
        result += String.fromCharCode(parseInt(array[i], 2));
      }
      return result;
    }
    function string2Bin(str) {
      var result = [];
      for (var i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
      }
      return result;
    }

    var cssFonts = [
      {
        label: "Arial",
        value: "arial",
      },
      {
        label: "Times New Roman",
        value: "serif",
      },
      {
        label: "Sans Serif",
        value: "sans-serif",
      },
      {
        label: "Monospace",
        value: "monospace",
      },
      {
        label: "Cursive",
        value: "cursive",
      },
      {
        label: "Fantasy",
        value: "fantasy",
      },
      {
        label: "Jersey 15 (Google Fonts)",
        value: '"Jersey 15"',
      },
      {
        label: "Jacquard 12 (Google Fonts)",
        value: '"Jacquard 12 Charted"',
      },
      {
        label: "Pixelify Sans (Google Fonts)",
        value: '"Pixelify Sans"',
      },
      {
        label: "Permanent Marker (Google Fonts)",
        value: '"Permanent Marker"',
      },
      {
        label: "Tektur (Google Fonts)",
        value: '"Tektur"',
      },
    ];
    var defaultCssProperties = {
      "--bg-color": {
        label: "Main background color",
        type: "color",
        value: "#b8b8b8",
      },
      "--header-color": {
        label: "Header color",
        type: "color",
        value: "#b8b8b8",
      },
      "--main-font": {
        label: "Default font",
        type: "font",
        value: "arial",
      },
      "--main-text-color": {
        label: "Default text color",
        type: "color",
        value: "black",
      },
      "--input-bg-color": {
        label: "Input background color",
        type: "color",
        value: "#363636",
      },
      "--input-text-color": {
        label: "Input text color",
        type: "color",
        value: "#c9c9c9",
      },
      "--input-border-color": {
        label: "Input border color",
        type: "color",
        value: "#1f1f1f",
      },
      "--input-border-width": {
        label: "Input border width",
        type: "number",
        value: 3,
        min: 0,
        max: 20,
        end: "px",
      },
      "--messages-bg-color": {
        label: "Messages box background color",
        type: "color",
        value: "#919191",
      },
      "--messages-text-color": {
        label: "Messages default text color",
        type: "color",
        value: "#fcfcfc",
      },
      "--profile-background": {
        label: "Profile picture background color",
        type: "color",
        value: "#969696",
      },
      "--profile-border-color": {
        label: "Profile picture border color",
        type: "color",
        value: "#7d7d7d",
      },
      "--separator-color": {
        label: "Seperator color",
        type: "color",
        value: "#696969",
      },
      "--textbox-bg-color": {
        label: "Textbox background color",
        type: "color",
        value: "#e0e0e0",
      },
      "--textbox-border-color": {
        label: "Textbox border color",
        type: "color",
        value: "#696969",
      },
      "--button-bg-color": {
        label: "Button background color",
        type: "color",
        value: "#e0e0e0",
      },
      "--button-text-color": {
        label: "Button text color",
        type: "color",
        value: "#696969",
      },
      "--button-hover-bg-color": {
        label: "Button background color (When cursor over button)",
        type: "color",
        value: "#f2f2f2",
      },
      "--button-disabled-color": {
        label: "Button background color (When disabled/off)",
        type: "color",
        value: "#5e5e5e",
      },
      "--loading-spinner-color": {
        label: "Loading spinner color",
        type: "color",
        value: "#878787",
      },
      "--border-radius": {
        label: "Default border radius",
        type: "number",
        value: 3,
        min: 0,
        max: 20,
        end: "px",
      },
      "--profile-border-radius": {
        label: "Profile border radius",
        type: "number",
        value: 64,
        min: 0,
        max: 100,
        end: "px"
      },
      "--popup-box-bg-color": {
        label: "Popup dialog background color",
        type: "color",
        value: "#FFFFFF",
      },
      "--popup-box-text-color": {
        label: "Popup dialog text color",
        type: "color",
        value: "#000000",
      },
      "--link-text-color": {
        label: "Link text color",
        type: "color",
        value: "#4287f5",
      },
      "--main-font-size": {
        label: "Default font size (in pixels)",
        type: "number",
        value: 15,
        min: 0,
        max: 150,
        end: "px",
      },
      "--selected-emoji-popup-dialog-bg-color": {
        label: "Emoji Added Popup (Background Color)",
        type: "color",
        value: "#15e64d",
      },
      "--selected-emoji-popup-dialog-border-color": {
        label: "Emoji Added Popup (Border Color)",
        type: "color",
        value: "#23a646",
      },
      "--selected-emoji-popup-dialog-text-color": {
        label: "Emoji Added Popup (Text Color)",
        type: "color",
        value: "#e6ffec",
      },
      "--selected-emoji-popup-dialog-border-width": {
        label: "Emoji Added Popup (Border Width)",
        type: "number",
        value: 2,
        min: 0,
        max: 150,
        end: "px",
      },
      "--server-notifcation-color": {
        label: "Server Notifcation Color",
        type: "color",
        value: "#ffd000",
      },
      "--default-font-weight": {
        label: "Main font weight",
        type: "number",
        value: 0,
        min: 0,
        max: 1000,
      },
    };

    var LZString = window.LZString;
    window.downloadFileFromURL = async function download(url, name, element) {
      var ogTextContent = element.textContent;
      element.textContent = "Downloading file...";
      var r = await fetch(url);
      var file = await r.blob();
      var a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = name;
      a.click();
      element.textContent = ogTextContent;
    };
    try {
      await (async function () {
        var warningColor = "var(--server-notifcation-color)";
        var defaultProfile = "favicon.png";
        window.profilePicture = defaultProfile;
        window.serverProfilePicture = "warningsign.svg";

        var joinButton = document.getElementById("join");
        var username = document.getElementById("username");
        var usernameElement = username;
        var savedUsername = localStorage.getItem("username");
        var profilecolor = document.getElementById("profilecolor");
        var savedProfileColor = localStorage.getItem("profileColor");
        var resetProfile = document.getElementById("resetPFP");

        //Join button
        var canJoin = false;
        var usernameMessage = "";
        function updateUsernameMessage() {
          var usererror = document.getElementById("errorMessageUsername");
          usererror.textContent = usernameMessage;
          if (usernameMessage.length > 0) {
            usererror.innerHTML += "<br>";
            joinButton.disabled = true;
          } else {
            joinButton.disabled = false;
          }
        }
        window.checkCanJoin = function () {
          if (username.value.length > 0) {
            if (username.value.indexOf(" ") > -1) {
              usernameMessage = "Username can't contain spaces.";
              canJoin = false;
            } else {
              if (username.value.indexOf("@") > -1) {
                usernameMessage = "Username can't contain the @ character.";
                canJoin = false;
              } else {
                if (
                  username.value.indexOf("*") > -1
                ) {
                  usernameMessage = "Username can't contain the * character.";
                  canJoin = false;
                } else {
                  if (username.value.length > 50) {
                    usernameMessage =
                      "Username can't be greater than 50 characters.";
                    canJoin = false;
                  } else {
                    usernameMessage = "";
                    canJoin = true;
                  }
                }
              }
            }
          } else {
            usernameMessage = "Username needs to be more than 0 characters.";
            canJoin = false;
          }
          updateUsernameMessage();
        };
        joinButton.addEventListener("click", () => {
          window.checkCanJoin();
          if (canJoin) {
            document.getElementById("usernameSetup").style.display = "none";
            document.getElementById("chat").style.display = "block";
            window.start();
          }
        });

        resetProfile.addEventListener("click", function () {
          localStorage.removeItem("profileColor");
          document.getElementById("profilePreview").src = defaultProfile;
          localStorage.setItem("currentPFP", defaultProfile);
        });

        if (savedProfileColor) {
          profilecolor.value = savedProfileColor;
        }

        profilecolor.addEventListener("input", () => {
          localStorage.setItem("profileColor", profilecolor.value);
        });
        profilecolor.oninput();

        username.oninput = function () {
          localStorage.setItem("username", username.value);
          window.checkCanJoin();
        };

        if (savedUsername) {
          username.value = savedUsername;
          window.checkCanJoin();
        }

        var enableMic = document.getElementById("enableMic");
        var scAudioToggle = document.getElementById("scAudioToggle");
        window.captureAudioEnabled = true;
        function updatescAudioToggle() {
          if (window.captureAudioEnabled) {
            scAudioToggle.textContent = "Mute";
          } else {
            scAudioToggle.textContent = "Unmute";
          }
        }
        updatescAudioToggle();
        scAudioToggle.onclick = function () {
          window.captureAudioEnabled = !window.captureAudioEnabled;
          updatescAudioToggle();
        };
        try {
          //most of this code, i reused from some other thing, however i first
          //thought that i needed to use node js libaries to make this work..., but in
          //reality i did not.
          var sampleSendingProcessingLength = 16384 / 2;
          var sampleProcessingLength = 16384 / 2;
          window.NESAudio = class NESAudio {
            constructor() {
              try {
                var thisobj = this;
                this.samples = { left: [], right: [], normalsize: 0 };
                this.savedSamples = { left: [], right: [] };
                this.pitchpatch = false;
                this.audioadd = false;
                this.audioEnabled = false;
                this.setup();
                this.setupinterval = setInterval(() => {
                  if (!(thisobj.audioCtx.state == "running")) {
                    //if not running, then keep creating it until it is.
                    thisobj.setup();
                  } else {
                  }
                }, 200);
                this.samplesL = [];
                this.samplesR = [];
                setInterval(() => {
                  thisobj.tickSampleErase();
                }, 2);
              } catch (e) {
                window.alert(e);
              }
            }
            close() {
              this.audioCtx.close();
              clearInterval(this.setupinterval);
            }
            tickSampleErase() {}
            setup() {
              this.audioCtx = new AudioContext();
              var t = this;
              this.scriptNode = this.audioCtx.createScriptProcessor(
                sampleProcessingLength,
                0,
                2
              );
              this.scriptNode.onaudioprocess = function (e) {
                t.onaudioprocess(e);
              };
              this.scriptNode.connect(this.audioCtx.destination);
            }

            onaudioprocess(e) {
              if (this.audioEnabled) {
                var left = e.outputBuffer.getChannelData(0);
                var right = e.outputBuffer.getChannelData(1);
                var size = this.samples.left.length;
                if (this.samples.left.length > 0) {
                  this.savedSamples.left = [];
                  this.savedSamples.right = [];
                  var lastsam = 0;
                  var i = 0;
                  while (i < size) {
                    var sam = this.samples.left[i];
                    if (Math.abs(sam) * 1000 > 10) {
                      lastsam = sam;
                      this.savedSamples.left.push(sam);
                    } else {
                      this.savedSamples.left.push(lastsam);
                    }
                    i += 1;
                  }
                  lastsam = 0;
                  i = 0;
                  while (i < size) {
                    var sam = this.samples.right[i];
                    if (Math.abs(sam) * 1000 > 10) {
                      lastsam = sam;
                      this.savedSamples.right.push(sam);
                    } else {
                      this.savedSamples.right.push(lastsam);
                    }
                    i += 1;
                  }
                  this.samples.left = [];
                  this.samples.right = [];
                }
                this.samples.normalsize = size;

                for (var i = 0; i < this.savedSamples.left.length; i++) {
                  //try to "fix" the sound by lowering the speed.
                  var pitchPatch = 1;
                  if (this.pitchpatch) {
                    pitchPatch = 0.9;
                  }
                  var samplec = Math.round(i * pitchPatch);
                  left[i] = this.savedSamples.left[samplec];
                  right[i] = this.savedSamples.right[samplec];
                }
                //originaly i used a limiter, to limit the thing. but after some relization, i should not, instead,
                //play the samples, then clear the samples.
              }
            }

            updateAudioFrame() {
              //window.alert(this.samplesL);
            }

            cleanAudio() {
              this.samples.left = [];
              this.samples.right = [];
              this.savedSamples.left = [];
              this.savedSamples.right = [];
              this.audioEnabled = false;
            }

            getSampleRate() {
              try {
                if (!window.AudioContext) {
                  return 44100;
                }
                let myCtx = new window.AudioContext();
                let sampleRate = myCtx.sampleRate;
                myCtx.close();
                return sampleRate;
              } catch (e) {
                window.alert(e);
              }
            }

            proccessAudio(left, right) {
              try {
                //when we get audio, add it to the samples
                var audioAdd = 8000;
                if (!this.audioadd) {
                  audioAdd = 0;
                }
                this.samples.left.push((left - 255 / 2) / 100);
                this.samples.right.push((right - 255 / 2) / 100);
                this.audioEnabled = true;
              } catch (e) {
                window.alert(e);
              }
            }
          };
        } catch (e) {
          window.alert(e);
        }

        window.audioengine2 = new window.NESAudio();
        window.usermics = {};
        window.chatMuted = false;
        if (localStorage.getItem("permMuted")) {
          window.chatMuted = true;
        }
        setInterval(() => {
          if (window.chatMuted) {
            document.getElementById("typedMessage").disabled = true;
            document.getElementById("typedMessage").value = "";
            document.getElementById("typedMessage").placeholder =
              "You have been muted";
            document.getElementById("interactiveButtons").hidden = true;
          } else {
            document.getElementById("typedMessage").disabled = false;
            document.getElementById("typedMessage").placeholder =
              "Type something here...";
            document.getElementById("interactiveButtons").hidden = false;
          }
        }, 1000 / 60);

        var ws_uri =
          "wss://random-rants-ws.glitch.me"; /*Connect to an ws server*/
        var ws_screen_uri = "wss://random-rants-sc.glitch.me";
        var ws_audio_uri = "wss://random-rants-audio.glitch.me";
        var databaseAPI = "https://random-rants-api.glitch.me/";
        var usersTyping = document.getElementById("usersTyping");

        //emojis

        window.loadEmojis = function () {
          document.getElementById("emojiContainer").innerHTML = "";
          var i = 0;
          while (i < emojis.length) {
            var img = document.createElement("img");

            if (sections[emojis[i]]) {
              var header = document.createElement("h1");
              header.innerHTML = sections[emojis[i]];
              document.getElementById("emojiContainer").appendChild(header);
            }
            img.onclick = function () {
              document.getElementById("typedMessage").value +=
                "[emoji url=" + this.src + "]";
              document.getElementById("EmojiAddNotice").hidden = false;
              window.clickSound();
            };
            img.onmouseenter = function () {
              this.style.filter = "brightness(200%)";
              this.style.cursor = "pointer";
            };
            img.onmouseout = function () {
              this.style.filter = "brightness(100%)";
              this.style.cursor = "";
            };
            try {
              img.title = header.innerHTML + ":" + emojis[i];
            } catch (e) {}
            img.src = emojiserver + emojis[i];
            img.setAttribute("style", "image-rendering:pixelated;");
            img.setAttribute("width", "64");
            img.setAttribute("height", "64");
            document.getElementById("emojiContainer").appendChild(img);
            i += 1;
          }
        };

        //the atuall chat.
        document.getElementById("connectingState").innerHTML =
          "Connecting... This... Might take a while...";
        //var ws_uri = "wss://clouddata.turbowarp.org/p4-@655289115.sb3";
        var serverID = "";
        function connectApp(onopenfunc) {
          document.getElementById("connectingState").innerHTML =
            "Connecting...";
          document.getElementById("connectingState").style.color = "black";
          document.getElementById("join").style.display = "none";
          window.websocket = new WebSocket(ws_uri);
          window.websocket.onerror = connectApp;
          window.websocket.onclose = connectApp;
          window.websocket.onopen = function () {
            document.getElementById("connectingState").innerHTML =
              "Connected to chat!";
            document.getElementById("connectingState").style.color = "green";
            document.getElementById("join").style.display = "block";
            if (onopenfunc) {
              onopenfunc();
            }
          };
        }
        connectApp();
        var screenws = null;
        function connectScreenWs(openhandler) {
          screenws = new WebSocket(ws_screen_uri);
          screenws.onopen = openhandler;
          screenws.onclose = function () {
            connectScreenWs(openhandler);
          };
          screenws.onerror = function () {
            screenws.onclose = null;
            connectScreenWs(openhandler);
          };
        }
        connectScreenWs(function () {
          if (window.handleScreenWsStuff) {
            window.handleScreenWsStuff();
          }
        });

        var audiows = null;
        function connectAudioWs(openhandler) {
          audiows = new WebSocket(ws_audio_uri);
          audiows.onopen = openhandler;
          audiows.onclose = function () {
            connectAudioWs(openhandler);
          };
          audiows.onerror = function () {
            audiows.onclose = null;
            connectAudioWs(openhandler);
          };
        }
        connectAudioWs(function () {
          if (window.handleAudioWsStuff) {
            window.handleAudioWsStuff();
          }
        });
        function randomData() {
          var ip =
            Math.round(Math.random() * 1000) +
            "." +
            Math.round(Math.random() * 1000) +
            "." +
            Math.round(Math.random() * 1000) +
            "." +
            Math.round(Math.random() * 1000);
          return ip;
        }
        var info = new URLSearchParams(window.location.search);
        window.server = document.getElementById("Server").value;

        (async () => {
          let permission = await Notification.requestPermission();
          var notify = null;
          /*Gets called when message sent*/
          window.notifyMessage = function (message, user) {
            if (user !== username.value) {
              if (notify) {
                notify.close();
              }
              console.log("notify sent.");
              notify = new Notification("Random Rants - Message Posted!", {
                icon: notifcationLogo,
                vibrate: [150, 60, 150],
                tag: "Message Posted!",
                body: user + ' said "' + message + '"',
              });
            }
          };
        })();
        window.clickSound = function () {
          window.click.pause();
          window.click.play();
        };
        window.typeSound = function () {
          var tmpsound = new window.AudioApiReplacement(window.typeLoadedData);
          tmpsound.pause();
          tmpsound.play();
        };
        window.notifyEnabled = false;
        if (localStorage.getItem("fakeIp") === null) {
          var fakeIp = randomData();
          localStorage.setItem("fakeIp", fakeIp);
          window.currentIP = fakeIp;
          console.log("fake ip made");
        } else {
          window.currentIP = localStorage.getItem("fakeIp");
        }
        if (info.get("room")) {
          document.getElementById("Server").value = info.get("room");
          window.server = info.get("room");
        }
        /*fetch("https://api.ipify.org?format=json").then((data) => {
    data.json().then((data) => {
		window.currentIP = (data.ip);
    });
}); 
*/
        var waitingForConnection = true;
        var tempWebsocket = null;
        function scanRooms() {
          tempWebsocket = new WebSocket(ws_uri);
          var roomlistpeople = {};
          function updateServerList() {
            var serverSelect = document.getElementById("Server");
            if (!waitingForConnection) {
              for (var child of serverSelect.children) {
                child.textContent = child.title;
                child.textContent += " [Online:";
              }
              for (var child of serverSelect.children) {
                var people = [];
                for (var user of Object.keys(roomlistpeople)) {
                  var person = roomlistpeople[user];

                  if (person) {
                    var value = child.value;
                    var title = child.title;
                    if (value == person.room) {
                      people.push(user);
                    }
                  }
                }
                child.textContent += people.join(",");
                child.textContent += "]";
                if (people.length < 1) {
                  child.textContent = child.title + " [Empty room]";
                }
              }
            } else {
              for (var child of serverSelect.children) {
                child.textContent = child.title + " [Waiting for server...]";
              }
            }
          }
          tempWebsocket.onopen = function () {
            waitingForConnection = false;
            updateServerList();
          };
          tempWebsocket.onclose = function () {
            waitingForConnection = true;
            scanRooms();
            updateServerList();
          };
          tempWebsocket.onmessage = function (e) {
            var data = JSON.parse(e.data.toString());
            if (data.command == "tick") {
              if (!roomlistpeople[data.username]) {
                roomlistpeople[data.username] = {
                  timeout: setTimeout(() => {
                    roomlistpeople[data.username] = undefined;
                    updateServerList();
                  }, 2000),
                  ...data,
                };
                updateServerList();
              } else {
                clearTimeout(roomlistpeople[data.username].timeout);
                roomlistpeople[data.username].timeout = setTimeout(() => {
                  roomlistpeople[data.username] = undefined;
                  updateServerList();
                }, 2000);
              }
            }
          };
          updateServerList();
        }
        scanRooms();
        function AsyncXMLHttpRequestWithPostData(url, data) {
          return new Promise((a, r) => {
            var xhr = new XMLHttpRequest();
            var loadingBar = document.getElementById("uploadFileProgress");
            loadingBar.min = 0;
            loadingBar.max = 100;
            loadingBar.value = 0;
            function handleLoader(e) {
              console.log("Progress made!");
              loadingBar.value = e.loaded;
              loadingBar.max = e.total;
            }
            xhr.onloadstart = handleLoader;
            xhr.onload = handleLoader;
            xhr.addEventListener("loadend", function () {
              loadingBar.value = 100;
              loadingBar.max = 100;
              a(this.response);
            });
            xhr.onprogress = handleLoader;
            xhr.addEventListener("error", r);
            xhr.open("POST", url);
            xhr.send(data);
          });
        }
        async function createMarcesChatAPIFileUrl(arraybuffer, contentType) {
          try {
            document.getElementById("uploadingfile").hidden = false;
            var fileData = {
              arraybuffer: arrayBufferToJSON(arraybuffer),
              contentType: contentType,
            };
            var idplaintext = await AsyncXMLHttpRequestWithPostData(
              `${databaseAPI}/uploadfile/`,
              JSON.stringify(fileData)
            );
            var id = Number(idplaintext);
            var a = `${databaseAPI}file/${id}`;

            document.getElementById("uploadingfile").hidden = true;
            return a;
          } catch (e) {
            document.getElementById("uploadingfile").hidden = true;
            console.error(e);
            window.alert(
              "There was an error uploading the file, check the console for the error message."
            );
            return "./";
          }
        }
        window.setPFP = async function (t) {
          var read = new FileReader();
          read.onload = async () => {
            var url = await createMarcesChatAPIFileUrl(
              read.result,
              t.files[0].type
            );
            window.profilePicture = url;
            document.getElementById("profilePreview").src = url;
            localStorage.setItem("currentPFP", url);
          };
          if (t.files[0]) {
            read.readAsArrayBuffer(t.files[0]);
          }
        };
        var savedPFP = localStorage.getItem("currentPFP");
        if (savedPFP) {
          window.profilePicture = savedPFP;
          document.getElementById("profilePreview").src = savedPFP;
        }
        function arrayBufferToJSON(ab) {
          return Array.from(new Uint8Array(ab));
        }
        function _base64ToArrayBuffer(base64) {
          var binary_string = window.atob(base64);
          var len = binary_string.length;
          var bytes = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
          }
          return bytes.buffer;
        }

        function convertTextToHTMLText(inputstr) {
          var input_str; //store input
          var text_input; //store input after beging trim()med
          var output_html = ""; //store output
          var counter;

          var linkfixes = inputstr.split(" ");
          var newinputstr = [];
          for (var word of linkfixes) {
            if (word.startsWith("http://") || word.startsWith("https://")) {
              newinputstr.push(`[link url=${word}]${word}[/link]`);
            } else {
              newinputstr.push(word);
            }
          }

          input_str = newinputstr.join(" "); //get input and store it in input_str
          text_input = input_str.trim(); //trim() input

          var endText = "";
          if (text_input.length > 0) {
            output_html += ""; //begin by creating paragraph
            for (counter = 0; counter < text_input.length; counter++) {
              switch (text_input[counter]) {
                case "\n":
                  if (text_input[counter + 1] === "\n") {
                    output_html += "\n";
                    counter++;
                  } else output_html += "";
                  break;

                case "[":
                  var index = 0;
                  var data = text_input.slice(counter, text_input.length);
                  var type = "";
                  var valname = "";
                  var value = "";
                  var counterOffset = 0;
                  var valid = false;
                  var addHTML = true;
                  var nextCheck = true;
                  index += 1;
                  counterOffset += 1;
                  while (index < data.length && data[index] !== " ") {
                    if (index == data.length) {
                      addHTML = false;
                      nextCheck = false;
                      break;
                    }
                    if (data[index] == "]") {
                      nextCheck = false;
                      break;
                    }
                    counterOffset += 1;
                    type += data[index];
                    index += 1;
                  }
                  if (nextCheck) {
                    counterOffset += 1;
                    index += 1;
                    while (index < data.length && data[index] !== "=") {
                      if (index == data.length) {
                        addHTML = false;
                        nextCheck = false;
                        break;
                      }
                      if (data[index] == "]") {
                        nextCheck = false;
                        break;
                      }
                      counterOffset += 1;
                      valname += data[index];
                      index += 1;
                    }
                    if (nextCheck) {
                      counterOffset += 1;
                      index += 1;
                      while (index < data.length && data[index] !== "]") {
                        if (index == data.length) {
                          addHTML = false;
                          nextCheck = false;
                          break;
                        }
                        counterOffset += 1;
                        value += data[index];
                        index += 1;
                      }
                    }
                  }

                  if (addHTML) {
                    if (type == "emoji") {
                      valid = true;
                      output_html += `<img src="${value}" ondragstart="return false;" style="image-rendering:pixelated;object-fit:contain;width:26px;height:26px;" ondragend="return false;">`;
                    }
                    if (type == "image") {
                      valid = true;
                      output_html += `<img src="${value}" style="image-rendering:pixelated;">`;
                    }
                    if (type == "audio") {
                      valid = true;
                      output_html += `<audio src="${value}" controls></audio>`;
                    }
                    if (type == "video") {
                      valid = true;
                      output_html += `<video src="${value}" controls></video>`;
                    }
                    if (type == "bold") {
                      valid = true;
                      output_html += `<b>`;
                      endText += "</b>";
                    }
                    if (type == "/bold") {
                      valid = true;
                      output_html += `</b>`;
                    }
                    if (type == "color") {
                      valid = true;
                      output_html += `<span style="color:${value};">`;
                    }
                    if (type == "/color") {
                      valid = true;
                      output_html += `</span>`;
                    }
                    if (type == "link") {
                      valid = true;
                      output_html += `<a href="${value}" style="color: var(--link-text-color);" target="_blank">`;
                    }
                    if (type == "/link") {
                      valid = true;
                      output_html += `</a>`;
                    }
                    if (type == "download") {
                      valid = true;
                      output_html += `<button onclick="window.downloadFileFromURL('${value}',this.textContent, this);">`;
                    }
                    if (type == "/download") {
                      valid = true;
                      output_html += `</button>`;
                    }
                    if (type == "button") {
                      valid = true;
                      output_html += `<button onclick="var a = document.createElement('a'); a.href='${value}'; a.target = '_blank'; a.click();">`;
                    }
                    if (type == "/button") {
                      valid = true;
                      output_html += `</button>`;
                    }
                    if (type == "buttonJavascript") {
                      valid = true;
                      output_html += `<button onclick="${value}">`;
                    }
                    if (type == "/buttonJavascript") {
                      valid = true;
                      output_html += `</button>`;
                    }
                    if (type == "vineboom") {
                      valid = true;
                      var audio = new window.AudioApiReplacement(
                        window.vineboomSound
                      );
                      audio.play();
                    }
                    if (type == "embed") {
                      valid = true;
                      output_html += `<iframe src="${value}" style="image-rendering:pixelated;border:none;resize:both;"></iframe>`;
                    }
                    if (type == "skull") {
                      valid = true;
                      output_html += "💀";
                    }
                    if (type == "br") {
                      valid = true;
                      output_html += "<br>";
                    }
                    if (type == "nerd") {
                      valid = true;
                      output_html += "🤓";
                    }

                    if (valid) {
                      counter += counterOffset;
                      //window.alert(`DEBUG: type:${type} value name:${valname} value:${value}`);
                      type = type.toLowerCase();
                    } else {
                      output_html += text_input[counter]; //Usally means invalid or something.
                    }
                  }
                  break;

                case " ":
                  if (
                    text_input[counter - 1] != " " &&
                    text_input[counter - 1] != "\t"
                  )
                    output_html += " ";
                  break;

                case "\t":
                  if (text_input[counter - 1] != "\t") output_html += " ";
                  break;

                case "&":
                  output_html += "&amp;";
                  break;

                case '"':
                  output_html += "&quot;";
                  break;

                case ">":
                  output_html += "&gt;";
                  break;

                case "<":
                  output_html += "&lt;";
                  break;
                default:
                  output_html += text_input[counter];
              }
            }
            output_html += ""; //finally close paragraph
          }
          output_html += endText;
          return output_html; // display output html
        }
        var messageIDS = {};
        var latestMessageID = 0;
        function notifyMessageStuff(data) {
          window.notify.pause();
          window.notify.play();
          try {
            if (window.notifyEnabled == true) {
              window.notifyMessage(data.message, data.username);
            }
          } catch (e) {}
        }
        function showMessageChat(data, notifyAlert) {
          var div = document.createElement("div");
          var willScroll = false;
          var mid = latestMessageID;
          latestMessageID += 1;
          if (
            window.messages.scrollTop + window.messages.offsetHeight + 2 >=
            window.messages.scrollHeight
          ) {
            willScroll = true;
          }
          var activatedText = "";
          if (data.activated) {
            //activatedText = " [bold][color color=yellow]*[/color][/bold]";
          }
          div.innerHTML +=
            "<span style='color:" +
            data.color +
            ";font-weight:bold;'>" +
            "<img src='" +
            data.profile +
            "' class='profile' width=32 height=32>" +
            convertTextToHTMLText(data.username +
            activatedText) +
            "</span>: " +
            convertTextToHTMLText(data.message);
          messageIDS[mid] = div;
          window.messages.children[0].appendChild(div);
          if (willScroll) {
            function scanDiv(d) {
              for (var c of d.children) {
                var storedscrollheight = messages.scrollHeight;
                c.addEventListener("load", () => {
                  if (
                    window.messages.scrollTop +
                      window.messages.offsetHeight +
                      2 >=
                    storedscrollheight
                  ) {
                    window.messages.scrollTo(0, window.messages.scrollHeight);
                  }
                });
                scanDiv(c);
              }
            }
            scanDiv(div);
            window.messages.scrollTo(0, window.messages.scrollHeight);
          }
          if (!notifyAlert) {
            notifyMessageStuff(data);
          }

          return mid;
        }
        function hideMessageChat(id) {
          if (messageIDS[id]) {
            messageIDS[id].remove();
            messageIDS[id] = undefined;
          }
        }

        window.downloadAndUploadSend = async function downloadAndUploadSend(
          data,
          name,
          contentType
        ) {
          event.preventDefault();
          document.getElementById("typedMessage").click();
          var message =
            "[download url=" +
            (await createMarcesChatAPIFileUrl(data, contentType)) +
            "]" +
            name +
            "[/download]";
          if (message.toString().length) {
            var username = usernameElement.value;

            var data = {
              username: username,
              profile: window.profilePicture,
              message: message,
              ip: window.currentIP,
              room: window.server,
              color: document.getElementById("profilecolor").value,
              activated: window.specialCommandsActivated,
            };

            window.websocket.send(JSON.stringify(data));
            document.getElementById("typedMessage").value = "";
          }
        };
        window.sendImg = async function sendImg(data, contentType) {
          event.preventDefault();
          document.getElementById("typedMessage").click();

          var message =
            "[image url=" +
            (await createMarcesChatAPIFileUrl(data, contentType)) +
            "]";

          if (message.toString().length) {
            var username = usernameElement.value;

            var data = {
              username: username,
              profile: window.profilePicture,
              message: message,
              ip: window.currentIP,
              room: window.server,
              color: document.getElementById("profilecolor").value,
              activated: window.specialCommandsActivated,
            };

            window.websocket.send(JSON.stringify(data));
            document.getElementById("typedMessage").value = "";
          }
        };
        window.sendDU = async function sendDU(data, contentType) {
          //so basicly use the api to write a file to the server on firebase, without sending huge loads of data to the websocket server.

          event.preventDefault();
          document.getElementById("typedMessage").click();

          var message =
            "[image url=" +
            (await createMarcesChatAPIFileUrl(data, contentType)) +
            "]";

          if (message.toString().length) {
            var username = usernameElement.value;

            var data = {
              username: username,
              profile: window.profilePicture,
              message: message,
              ip: window.currentIP,
              room: window.server,
              color: document.getElementById("profilecolor").value,
              activated: window.specialCommandsActivated,
            };

            window.websocket.send(JSON.stringify(data));
            document.getElementById("typedMessage").value = "";
          }
        };
        window.sendVideo = async function sendVideo(data, contentType) {
          event.preventDefault();
          document.getElementById("typedMessage").click();

          var message =
            "[video url=" +
            (await createMarcesChatAPIFileUrl(data, contentType)) +
            "]";

          if (message.toString().length) {
            var username = usernameElement.value;

            var data = {
              username: username,
              profile: window.profilePicture,
              message: message,
              ip: window.currentIP,
              room: window.server,
              color: document.getElementById("profilecolor").value,
              activated: window.specialCommandsActivated,
            };

            window.websocket.send(JSON.stringify(data));
            document.getElementById("typedMessage").value = "";
          }
        };
        window.sendAudio = async function sendAudio(data, contentType) {
          event.preventDefault();
          document.getElementById("typedMessage").click();

          var message =
            "[audio url=" +
            (await createMarcesChatAPIFileUrl(data, contentType)) +
            "]";

          if (message.toString().length) {
            var username = usernameElement.value;

            var data = {
              username: username,
              message: message,
              profile: window.profilePicture,
              ip: window.currentIP,
              room: window.server,
              color: document.getElementById("profilecolor").value,
              activated: window.specialCommandsActivated,
            };

            window.websocket.send(JSON.stringify(data));
            document.getElementById("typedMessage").value = "";
          }
        };
        window.uploadeIMGFile = function uploadeIMGFile(fileselect) {
          var reader = new FileReader();
          var contentType = null;
          reader.onload = function () {
            window.sendImg(reader.result, contentType);
          };
          if (fileselect.files[0]) {
            contentType = fileselect.files[0].type;
            reader.readAsArrayBuffer(fileselect.files[0]);
            fileselect.value = "";
          }
        };
        window.DUFileUpload = function DUFileUpload(fileselect) {
          var reader = new FileReader();
          var contentType = null;
          var name = null;
          reader.onload = function () {
            window.downloadAndUploadSend(reader.result, name, contentType);
          };
          if (fileselect.files[0]) {
            contentType = fileselect.files[0].type;
            name = fileselect.files[0].name;
            reader.readAsArrayBuffer(fileselect.files[0]);
            fileselect.value = "";
          }
        };
        window.uploadeAudioFile = function uploadeAudioFile(fileselect) {
          var reader = new FileReader();
          var contentType = null;
          reader.onload = function () {
            window.sendAudio(reader.result, contentType);
          };
          if (fileselect.files[0]) {
            contentType = fileselect.files[0].type;
            reader.readAsArrayBuffer(fileselect.files[0]);
            fileselect.value = "";
          }
        };
        window.uploadeVideoFile = function uploadeVideoFile(fileselect) {
          var reader = new FileReader();
          var contentType = null;
          reader.onload = function () {
            window.sendVideo(reader.result, contentType);
          };
          if (fileselect.files[0]) {
            contentType = fileselect.files[0].type;
            reader.readAsArrayBuffer(fileselect.files[0]);
            fileselect.value = "";
          }
        };
        var prevChats = [];
        document.getElementById("typedMessage").onkeydown = function (event) {
          if (event.key == "Enter") {
            event.preventDefault();
            document.getElementById("Send").click();
          }
          if (event.key == "ArrowUp") {
            event.preventDefault();
            var last = prevChats[prevChats.length - 1];
            if (last) {
              prevChats.length -= 1;
              document.getElementById("typedMessage").value = last;
            }
          }
        };

        document.getElementById("typedMessage").oninput = function (event) {
          if (window.chatMuted) {
            window.errorSnd.pause();
            window.errorSnd.play();
          } else {
            window.typeSound();
            window.websocket.send(
              JSON.stringify({
                username: username.value,
                ip: window.currentIP,
                room: server,
                command: "typing",
                activated: window.specialCommandsActivated,
              })
            );
          }
        };
        window.audioengine2.cleanAudio();
        window.window.start = function () {
          var previousChats = [];
          var username = usernameElement.value;

          var data = {
            username: "[Random Rants]",
            message: username+" has joined the chat",
            profile: window.serverProfilePicture,
            ip: window.currentIP,
            room: window.server,
            color: warningColor,
            activated: window.specialCommandsActivated,
          };

          window.websocket.send(JSON.stringify(data));
          window.addEventListener("beforeunload", function (e) {
            window.websocket.send(
              JSON.stringify({
                username: "[Random Rants]",
                message: username+" has left the chat",
                profile: window.serverProfilePicture,
                ip: window.currentIP,
                room: window.server,
                color: warningColor,
                activated: window.specialCommandsActivated,
              })
            );
          });

          document.getElementById("Send").onclick = function (event) {
            event.preventDefault();
            document.getElementById("typedMessage").focus();
            var message = document.getElementById("typedMessage").value; //.replaceAll("<","&lt;").replaceAll(">","&gt;");
            if (message.toString().length > 0) {
              if (!window.chatMuted) {
                var username = usernameElement.value;
                var lisen = window.chat.listeners.onsend;
                var i = 0;
                while (i < lisen.length) {
                  try {
                    var result = lisen[i](message);
                  } catch (e) {
                    console.error(e);
                  }
                  i += 1;
                }
                var data = {
                  username: username,
                  message: message,
                  profile: window.profilePicture,
                  ip: window.currentIP,
                  room: window.server,
                  color: document.getElementById("profilecolor").value,
                  activated: window.specialCommandsActivated,
                };
                data.message = data.message;
                prevChats.push(data.message);
                window.websocket.send(JSON.stringify(data));
              }
              document.getElementById("typedMessage").value = "";
            }
            if (window.chatMuted) {
              window.errorSnd.pause();
              window.errorSnd.play();
            }
          };
          var framestime = 0;
          function updateDiv() {
            framestime += 1;
          }
          setInterval(() => {
            if (framestime == 0) {
              document.getElementById("screenCaptureDiv").hidden = true;
              window.audioengine2.cleanAudio();
            }
            framestime = 0;
          }, 1000);
          var screenShareTI = false;
          window.peopleTypingIntervals = {};
          var peopleOnline = 0;
          setInterval(() => {
            window.websocket.send(
              JSON.stringify({
                username: usernameElement.value,
                ip: window.currentIP,
                room: window.server,
                command: "tick",
                activated: window.specialCommandsActivated,
              })
            );
          }, 1000 / 10);
          var canvas2 = document.getElementById("videoRecord");
          var ctx2 = canvas2.getContext("2d");
          var imgData2 = null;
          var tempScreenShareData = [];
          var recorderThing = document.getElementById("videoRecordReal");
          var canvas2stream = canvas2.captureStream(60);
          recorderThing.srcObject = canvas2stream;
          function handleWSMessage(event) {
            var data = JSON.parse(event.data);
            if (data.room == window.server) {
              if (data.command == "tick") {
                return;
              }
              if (data.command == "updateMicrophone") {
                if (
                  data.username !== usernameElement.value
                ) {
                  try {
                    var username = data.username;
                    if (!window.usermics[username]) {
                      window.usermics[username] = {
                        engine: new window.NESAudio(),
                        timeout: setTimeout(() => {
                          if (window.usermics[username]) {
                            window.usermics[username].engine.close();
                            window.usermics[username] = undefined;
                          }
                        }, 600),
                      };
                    } else {
                      clearTimeout(window.usermics[username].timeout);
                      window.usermics[username].timeout = setTimeout(() => {
                        if (window.usermics[username]) {
                          window.usermics[username].engine.close();
                          window.usermics[username] = undefined;
                        }
                      }, 600);
                    }

                    var engine = window.usermics[username].engine;
                    var parts = LZString.decompress(data.audio);
                    parts.split("").forEach((character) => {
                      var charcode = character.charCodeAt();
                      engine.proccessAudio(charcode, charcode);
                    });
                  } catch (e) {
                    window.alert(e);
                  }
                }
                return;
              }
              if (data.command == "stopMicrophone") {
                try {
                  var username = data.username;
                  if (window.usermics[username]) {
                    window.usermics[username].engine.close();
                    window.usermics[username] = undefined;
                  }
                } catch (e) {
                  window.alert(e);
                }
                return;
              }
              if (data.command == "stopShare") {
                if (screenShareTI) {
                  console.log("ignored stopped sharing");
                  screenShareTI = false;
                } else {
                  console.log("stopped sharing");
                  window.stopScreenShare();
                }
              } else {
                if (data.command == "ban") {
                  if (data.ip == window.currentIP) {
                    localStorage.setItem("banned", "yes");
                    window.websocket.close();
                    window.location.reload();
                  }
                  console.log(
                    "ban executed:" +
                      "ban ip:" +
                      data.ip +
                      " current ip:" +
                      data.ip
                  );
                } else {
                  if (data.command == "updateCapture") {
                    if (data.src) {
                      recorderThing.play();

                      var data = LZString.decompress(
                        LZString.decompress(data.src)
                      );
                      if (data.vwidth && data.vheight) {
                        canvas2.width = data.vwidth;
                        canvas2.height = data.vheight;
                      }
                      var image = new Image();
                      image.onload = function () {
                        ctx2.drawImage(
                          image,
                          0,
                          0,
                          canvas2.width,
                          canvas2.height
                        );
                      };
                      image.src = data;
                    } else {
                      if (
                        data.username !==
                        usernameElement.value
                      ) {
                        if (window.captureAudioEnabled) {
                          var parts = LZString.decompress(data.audio);
                          parts.split("").forEach((character) => {
                            var charcode = character.charCodeAt();
                            window.audioengine2.proccessAudio(
                              charcode,
                              charcode
                            );
                          });
                        } else {
                          window.audioengine2.proccessAudio(0, 0);
                        }
                      }
                    }
                    document.getElementById("screenCaptureDiv").hidden = false;
                    updateDiv();
                  } else {
                    if (data.command == "plugin") {
                      console.log("server plugin added");
                      var script = document.createElement("script");
                      script.src = data.data;
                      document.body.appendChild(script);
                    } else {
                      if (data.command == "typing") {
                        var thing = data.username + " is typing...";
                        clearTimeout(
                          window.peopleTypingIntervals[data.username]
                        );
                        window.peopleTypingIntervals[data.username] =
                          setTimeout(() => {
                            usersTyping.textContent =
                              usersTyping.textContent.replaceAll(thing, "");
                          }, 1500);
                        if (!(usersTyping.textContent.indexOf(thing) > -1)) {
                          usersTyping.textContent += thing;
                        }
                      } else {
                        if (true) {
                          var displayMessage = true;

                          var mid = showMessageChat(data, true);

                          if (window.onmessage) {
                            var messageProcessingInfo = window.onmessage(data);
                            if (messageProcessingInfo) {
                              displayMessage = !messageProcessingInfo.hidden;
                            }
                          }
                          if (!displayMessage) {
                            hideMessageChat(mid);
                          } else {
                            notifyMessageStuff(data);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (window.onjoin) {
            window.onjoin();
          }
          function doHandleClose() {
            window.websocket.onclose = function (event) {
              var data = {
                username: "[Random Rants]",
                message:
                  "It seems like you lost connection to the server, reconnecting...",
                profile: window.serverProfilePicture,
                ip: "server.0.0.0.0",
                room: window.server,
                color: "red",
                activated: window.specialCommandsActivated,
              };

              showMessageChat(data);
              connectApp(function () {
                window.websocket.onmessage = function (e) {
                  handleWSMessage(e);
                };
                var data = {
                  username: "[Random Rants]",
                  message: "Connected, Welcome back!",
                  profile: window.serverProfilePicture,
                  ip: "server.0.0.0.0",
                  room: window.server,
                  color: "green",
                  activated: window.specialCommandsActivated,
                };

                showMessageChat(data);

                window.websocket.send(
                  JSON.stringify({
                    username: "[Random Rants]",
                    message: username+" has rejoined the chat",
                    profile: window.serverProfilePicture,
                    ip: window.currentIP,
                    room: window.server,
                    color: warningColor,
                    activated: window.specialCommandsActivated,
                  })
                );
                
                doHandleClose();
              });
            };
          }
          doHandleClose();
          function handleMessageFunctions() {
            window.websocket.onmessage = function (e) {
              handleWSMessage(e);
            };
            screenws.onmessage = function (e) {
              handleWSMessage(e);
            };
            audiows.onmessage = function (e) {
              handleWSMessage(e);
            };
          }
          setInterval(() => {
            handleMessageFunctions();
          }, 10);
          handleMessageFunctions();
        };

        function sendFakeMessage(data) {
          showMessageChat(data);
        }
        if (localStorage.getItem("banded") == "yes") {
          document.getElementById("usernameSetup").hidden = true;
          window.alert("You have been banded!");
        }
        window.chat = {
          server: class {
            constructor() {
              this.getWebsocket = function () {
                return window.websocket;
              };
              this.leaveChat = function (options) {
                window.location.reload();
              };
              this.fakeMessage = function (options) {
                if (true) {
                  var username = usernameElement.value;
                  var pluginextra = "";
                  if (options.name) {
                    pluginextra += " - " + options.name;
                  }
                  var data = {
                    username: "[server" + pluginextra + "]",
                    message: options.message,
                    profile: window.serverProfilePicture,
                    ip: "server.0.0.0.0",
                    room: window.server,
                    color: options.color,
                    activated: window.specialCommandsActivated,
                  };

                  showMessageChat(data);
                }
              };
              this.sendMessage = function (options) {
                if (true) {
                  var username = usernameElement.value;
                  var pluginextra = "";
                  if (options.name) {
                    pluginextra += " - " + options.name;
                  }
                  var data = {
                    username: "[server" + pluginextra + "]",
                    message: options.message,
                    profile: window.serverProfilePicture,
                    ip: "server.0.0.0.0",
                    room: window.server,
                    color: options.color,
                    activated: window.specialCommandsActivated,
                  };

                  window.websocket.send(JSON.stringify(data));
                }
              };
              this.sendMessageUser = function (options) {
                var username = usernameElement.value;

                var data = {
                  username: username,
                  message: options.message,
                  profile: window.profilePicture,
                  ip: window.currentIP,
                  room: window.server,
                  color: options.color,
                  activated: window.specialCommandsActivated,
                };
                window.websocket.send(JSON.stringify(data));
              };
              this.banUser = function (options) {
                localStorage.setItem("banded", "yes");
                window.location.reload();
              };
              this.elements = {
                typedOutMessage: document.getElementById("text"),
              };
              this.clearChat = function () {
                window.messages.children[0].innerHTML = "";
              };
              this.addEventListener = function (eventName, funct) {
                try {
                  window.chat.listeners["on" + eventName].push(funct);
                } catch (e) {}
              };
            }
          },
          audio: class {
            constructor() {
              this.notifySound = function () {
                window.notify.currentTime = 0;
                window.notify.play();
              };
              this.clickSound = function () {
                window.click.currentTime = 0;
                window.click.play();
              };
              this.typeSound = function () {
                window.type.currentTime = 0;
                window.type.play();
              };
            }
          },
          listeners: { onmessage: [], onsend: [] },
        };

        ////////////////////////////////////
        var video = document.createElement("video");
        var cvs = document.createElement("canvas");
        video.volume = 0; //mute it so we dont hear it
        //cvs.width = 400;
        //cvs.height = 300;
        //devide by 1.4 to lower the image data.
        cvs.width = 640 / 2;
        cvs.height = 480 / 2;
        async function startCapture(displayMediaOptions) {
          let captureStream = null;

          try {
            captureStream = await navigator.mediaDevices.getDisplayMedia(
              displayMediaOptions
            );
          } catch (err) {
            throw Error(err);
          }
          return captureStream;
        }
        var streamTimer = null;
        var button = document.getElementById("shareScreen");
        var streamForCapture = null;
        var previousButtonText = button.innerHTML;

        var micEnabled = false;
        var micInterval = null;
        var micStream = null;
        var micContext = null;
        function updateMicText() {
          if (!micEnabled) {
            enableMic.textContent = "Enable Microphone";
          } else {
            enableMic.textContent = "Disable Microphone";
          }
        }
        function waitForMic() {
          return new Promise((accept, reject) => {
            navigator.getUserMedia(
              {
                audio: {
                  echoCancellation: false,
                  noiseSuppression: false,
                  sampleRate: 44100,
                },
              },
              accept,
              reject
            );
          });
        }
        async function updateMicCode() {
          if (micEnabled) {
            try {
              micStream = await waitForMic();
              micContext = new AudioContext();
              var source2 = micContext.createMediaStreamSource(micStream);
              var analyser2 = micContext.createAnalyser();
              var bufferLength2 = analyser2.frequencyBinCount;
              var dataArray = new Uint8Array(bufferLength2);
              source2.connect(analyser2);
              analyser2.fftSize = sampleSendingProcessingLength * 2;

              micInterval = setInterval(() => {
                analyser2.getByteTimeDomainData(dataArray);
                var auddata = [].slice.call(dataArray);
                audiows.send(
                  JSON.stringify({
                    command: "updateMicrophone",
                    audio: LZString.compress(
                      String.fromCharCode.apply(null, auddata)
                    ),
                    room: window.server,
                    username: usernameElement.value,
                    activated: window.specialCommandsActivated,
                  })
                );
              }, 1000 / 100);
            } catch (e) {
              window.alert(
                "Unable to start microphone. Do you have a microphone?"
              );
              console.error(e);
            }
          } else {
            clearInterval(micInterval);
            micStream.getTracks().forEach((track) => {
              track.stop();
            });
            micContext.close();
            audiows.send(
              JSON.stringify({
                command: "stopMicrophone",
                room: window.server,
                username: usernameElement.value,
                activated: window.specialCommandsActivated,
              })
            );
          }
        }
        updateMicText();
        enableMic.onclick = function () {
          micEnabled = !micEnabled;
          updateMicText();
          updateMicCode();
        };

        window.startCap = function () {
          video.play();
          try {
            startCapture({
              video: {
                cursor: "always",
              },
              audio: {
                echoCancellation: false,
                noiseSuppression: false,
                sampleRate: 44100,
              },
            })
              .then(function (capture) {
                streamForCapture = capture;
                screenShareTI = true;

                var audioTracks = streamForCapture.getAudioTracks();

                if (audioTracks.length > 0) {
                  window.actx = new AudioContext();
                  var source = actx.createMediaStreamSource(streamForCapture);
                  window.analyser = actx.createAnalyser();
                  var bufferLength = analyser.frequencyBinCount;
                  window.dataArray = new Uint8Array(bufferLength);
                  source.connect(analyser);

                  //analyser.connect(actx.destination);

                  analyser.fftSize = sampleSendingProcessingLength * 2;
                }

                screenws.send(
                  JSON.stringify({
                    command: "stopShare",
                    room: server,
                    username: usernameElement.value,
                    activated: window.specialCommandsActivated,
                  })
                );

                streamForCapture.getTracks().forEach((track) => {
                  track.addEventListener("ended", () => {
                    screenws.send(
                      JSON.stringify({
                        command: "stopShare",
                        room: server,
                        username: usernameElement.value,
                        activated: window.specialCommandsActivated,
                      })
                    );
                  });
                });

                var firstVideoFrame = true;
                var frameData = [];
                var filterStrength = 100;
                var frameTime = 15,
                  lastLoop = new Date(),
                  thisLoop;

                function renderloop() {
                  var thisFrameTime = (thisLoop = new Date()) - lastLoop;
                  frameTime += (thisFrameTime - frameTime) / filterStrength;
                  lastLoop = thisLoop;
                }
                setTimeout(() => {
                  video.srcObject = capture;
                  video.play();
                  var cxt = cvs.getContext("2d");
                  var fpsInterval,
                    then,
                    startTime,
                    fpsInterval2,
                    then2,
                    startTime2;
                  function startAnimating(fps, fps2) {
                    fpsInterval = 1000 / fps;
                    then = Date.now();
                    startTime = then;
                    fpsInterval2 = 1000 / fps2;
                    then2 = Date.now();
                    startTime2 = then2;
                  }
                  var sendingFPS = 10;
                  function animate() {
                    // calc elapsed time since last loop

                    now = Date.now();
                    elapsed = now - then;

                    // if enough time has elapsed, draw the next frame

                    if (elapsed > fpsInterval) {
                      // Get ready for next frame by setting then=now, but also adjust for your
                      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                      then = now - (elapsed % fpsInterval);
                      try {
                        cxt.drawImage(video, 0, 0, cvs.width, cvs.height);
                        //document.getElementById("videoRecord").src = cvs.toDataURL();
                      } catch (e) {
                        console.error(e);
                      }
                      var chunks = [];
                      var imgdata = cvs.toDataURL("image/jpeg");

                      var fps = (1000 / frameTime).toFixed(1);
                      fpsInterval = 1000 / fps;
                      sendingFPS = fps;
                      //This is supposed to "auto" adjust quality to reduce lag.
                      cvs.width =
                        (fps / sendingFPS - 4) * (video.videoWidth / 4);
                      cvs.height =
                        (fps / sendingFPS - 4) * (video.videoHeight / 4);
                      renderloop();
                      screenws.send(
                        JSON.stringify({
                          command: "updateCapture",
                          vwidth: video.videoWidth / 4,
                          vheight: video.videoHeight / 4,
                          src: LZString.compress(LZString.compress(imgdata)),
                          room: server,
                          firstVideoFrame: firstVideoFrame,
                          username: usernameElement.value,
                          activated: window.specialCommandsActivated,
                        })
                      );

                      if (firstVideoFrame) {
                        firstVideoFrame = false;
                      }
                    }

                    // calc elapsed time since last loop

                    now2 = Date.now();
                    elapsed2 = now2 - then2;

                    // if enough time has elapsed, draw the next frame

                    if (elapsed2 > fpsInterval2) {
                      // Get ready for next frame by setting then=now, but also adjust for your
                      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                      then2 = now2 - (elapsed2 % fpsInterval2);

                      if (audioTracks.length > 0) {
                        analyser.getByteTimeDomainData(dataArray);
                        var auddata = [].slice.call(dataArray);
                        audiows.send(
                          JSON.stringify({
                            command: "updateCapture",
                            audio: LZString.compress(
                              String.fromCharCode.apply(null, auddata)
                            ),
                            room: server,
                            username: usernameElement.value,
                            activated: window.specialCommandsActivated,
                          })
                        );
                      }
                    }
                  }
                  startAnimating(sendingFPS, 60);

                  streamTimer = setInterval(() => {
                    animate();
                  }, 1);
                  button.innerHTML = "Stop sharing screen";
                  button.onclick = function () {
                    window.stopScreenShare(true);
                  };
                }, 170);
              })
              .catch((e) => {
                window.alert(
                  "Failed to start screen share, does your browser support screen capture?"
                );
                console.error(e);
              });
          } catch (e) {}
        };
        window.stopScreenShare = function stopScreenShare(stuff) {
          clearInterval(streamTimer);
          button.innerHTML = previousButtonText;
          button.onclick = function () {
            window.startCap();
          };
          if (stuff) {
            try {
              var localStream = streamForCapture;
              // stop both video and audio
              localStream.getTracks().forEach((track) => {
                track.stop();
              });
              // stop only audio
              localStream.getAudioTracks()[0].stop();
              // stop only video
              localStream.getVideoTracks()[0].stop();

              window.actx.close();
            } catch (e) {}
          }
        };
        ///////////////
        document.getElementById("screenCaptureDiv").hidden = true;

        try {
          await fetch(`${databaseAPI}status`);
        } catch (e) {
          window.alert(
            "File server might be down, no profile pictures or any uploaded files will not load. Check the devloper console for errors."
          );
          console.error(e);
        }

        //Customization tab.
        var customizeStuffTab = document.getElementById("customizeStuffTab");
        var customizeChat = document.getElementById("customizeChat");
        var customizeChatExit = document.getElementById("customizeChatExit");

        customizeStuffTab.hidden = true;
        window.customizeChatOpen = function () {
          window.clickSound();
          customizeStuffTab.hidden = false;
        };
        customizeChat.addEventListener("click", () => {
          window.customizeChatOpen();
        });
        customizeChatExit.addEventListener("click", () => {
          window.clickSound();
          customizeStuffTab.hidden = true;
        });

        //Cusomization css stuff.
        var customizeStuff = document.getElementById("customizeStuff");
        var customizeChatReset = document.getElementById("customizeChatReset");

        var cssProperties = getMinimizedCSSProperites(JSON.parse(JSON.stringify(defaultCssProperties)));
        var savedprops = localStorage.getItem("customize");
        if (savedprops) {
          try {
            var propsDecompressed = LZString.decompress(savedprops);
            cssProperties = getMinimizedCSSProperites(JSON.parse(propsDecompressed));
          } catch (e) {
            console.warn(e);
          }
        }
        var cstyle = document.createElement("style");
        document.body.append(cstyle);
        function getMinimizedCSSProperites(old) {
          var fixed = {};
          for (var name of Object.keys(old)) {
            fixed[name] = { value: old[name].value };
          }
          return fixed;
        }
        function updateCSSProperties(props) {
          cssProperties = props;
          localStorage.setItem(
            "customize",
            LZString.compress(
              JSON.stringify(getMinimizedCSSProperites(cssProperties))
            )
          );
          cstyle.innerHTML += ":root {\n";
          for (var v of Object.keys(cssProperties)) {
            var item = cssProperties[v];
            cstyle.innerHTML += v;
            cstyle.innerHTML += ":";
            cstyle.innerHTML += item.value;
            if (item.end) {
              cstyle.innerHTML += item.end;
            }
            cstyle.innerHTML += ";\n";
          }
          cstyle.innerHTML += "}";
        }

        function makeResetButton(v, setValue) {
          var button = document.createElement("button");
          button.textContent = "Reset Value";
          button.className = "roundborder";
          button.onclick = function () {
            var ogValue = defaultCssProperties[v].value;
            setValue(ogValue);
            cssProperties[v].value = ogValue;
            updateCSSProperties(cssProperties);
          };
          return button;
        }

        function changeValueTo(v, newval) {
          cssProperties[v].value = newval;
          updateCSSProperties(cssProperties);
        }

        function makeCustomizableElement(v, item) {
          var div = document.createElement("div");
          var span = document.createElement("span");
          span.textContent = item.label + ":";
          div.append(span);
          if (item.type == "color") {
            var input = document.createElement("input");
            input.type = "color";
            input.value = item.value;
            input.onchange = function () {
              changeValueTo(v, input.value);
            };
            div.append(input);
            div.append(
              makeResetButton(v, function (value) {
                input.value = value;
              })
            );
          }
          if (item.type == "font") {
            var select = document.createElement("select");
            select.className = "roundborder inputText1";

            for (var font of cssFonts) {
              var option = document.createElement("option");
              option.value = font.value;
              option.textContent = font.label;
              if (font.value == item.value) {
                option.selected = true;
              }
              select.append(option);
            }

            select.onchange = function () {
              changeValueTo(v, select.value);
            };

            div.append(select);
            div.append(
              makeResetButton(v, function (value) {
                select.value = value;
              })
            );
          }
          if (item.type == "number") {
            var input = document.createElement("input");
            input.type = "number";
            input.className = "roundborder inputText1";
            input.value = item.value;
            input.min = item.min;
            input.max = item.max;

            input.onchange = function () {
              var number = Number(input.value);
              if (isNaN(number)) {
                number = item.min;
              }
              if (number > item.max) {
                number = item.max;
              }
              if (number < item.min) {
                number = item.min;
              }

              input.value = number;

              changeValueTo(v, number);
            };

            div.append(input);

            div.append(
              makeResetButton(v, function (value) {
                input.value = value;
              })
            );
          }
          return div;
        }

        function putCustomizableElements(searchquery) {
          customizeStuff.innerHTML = "";

          var safedefault = JSON.parse(JSON.stringify(defaultCssProperties));
          var keysSorted = null;
          if (searchquery) {
            keysSorted = [];
            for (var item of Object.keys(safedefault)) {
              var object = safedefault[item];
              if (
                object.label.toLowerCase().indexOf(searchquery.toLowerCase()) >
                -1
              ) {
                keysSorted.push(item);
              }
            }
          } else {
            /*keysSorted = Object.keys(safedefault).sort(function (a,b) {
            var aobject = safedefault[a];
            var bobject = safedefault[b];
            return (aobject.label[0].charCodeAt())-(bobject.label[0].charCodeAt());
          });*/
            keysSorted = Object.keys(safedefault);
          }
          for (var v of keysSorted) {
            var savedvalue = undefined;
            if (cssProperties[v]) {
              savedvalue = cssProperties[v].value;
            }
            var item = cssProperties[v];
            if (!item) {
              cssProperties[v] = safedefault[v];
              item = cssProperties[v];
            }
            cssProperties[v] = safedefault[v];
            if (typeof savedvalue !== "undefined") {
              cssProperties[v].value = savedvalue;
            }
            item = cssProperties[v];

            var div = makeCustomizableElement(v, item);
            customizeStuff.append(div);
            var br = document.createElement("br");
            customizeStuff.append(br);
          }
        }

        putCustomizableElements();

        customizeChatReset.addEventListener("click", () => {
          updateCSSProperties(
            JSON.parse(
              JSON.stringify(defaultCssProperties)
            )
          );
          putCustomizableElements();
        });

        var customizeChatSave = document.getElementById("customizeChatSave");
        var customizeChatLoad = document.getElementById("customizeChatLoad");

        var encoderList =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()~`-_=+{[}]|;",./1234567890\\?><|';
        function encodeSomewhat(string) {
          var base64 = btoa(string);

          var identifier = Math.round(Math.random() * 30) + 2;

          var array = [identifier];

          for (var chr of base64) {
            array.push(encoderList.indexOf(chr) + identifier);
          }

          return array;
        }
        function decodeSomewhat(data) {
          var array = Array.from(data);
          var base64 = "";
          var id = array[0];

          var i = 1;
          while (i < array.length) {
            var ind = array[i];
            base64 += encoderList[ind - id];
            i += 1;
          }

          return atob(base64);
        }

        customizeChatSave.addEventListener("click", () => {
          var encoded = encodeSomewhat(JSON.stringify(cssProperties));
          var data = new Int32Array(encoded);
          var blob = new Blob([data]);
          var a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = "theme.rrt";
          a.click();
        });

        customizeChatLoad.addEventListener("click", () => {
          var input = document.createElement("input");
          input.type = "file";
          input.accept = ".rrt";
          input.onchange = function () {
            if (input.files[0]) {
              var reader = new FileReader();
              reader.onload = function () {
                var bin = new Int32Array(reader.result);
                var text = decodeSomewhat(bin);
                var json = JSON.parse(text);
                updateCSSProperties(json);
                putCustomizableElements();
              };
              reader.readAsArrayBuffer(input.files[0]);
            }
          };
          input.click();
        });

        updateCSSProperties(cssProperties);
        //Load some stuff.

        var errorSound = await window.loadSoundURL(
          "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/error-warning-login-denied-132113.mp3?v=1714171185284"
        );
        window.errorSnd = new window.AudioApiReplacement(errorSound);
        window.vineboomSound = await window.loadSoundURL("./vineboom.wav");
        window.notify = new window.AudioApiReplacement(
          await window.loadSoundURL(
            "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/infographic-pop-8-197875.mp3?v=1713915310573"
          )
        );
        window.click = new window.AudioApiReplacement(
          await window.loadSoundURL(
            "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/select-sound-121244.mp3?v=1713915487223"
          )
        );
        window.typeLoadedData = await window.loadSoundURL(
          "https://cdn.glitch.global/fa5e6d1e-8b42-4a21-81e8-03fd7cd6401a/spacebar-click-keyboard-199448.mp3?v=1713915463494"
        );

        //Show the app.
        document.getElementById("loadingCircle2").hidden = true;
        document.getElementById("appMain").hidden = false;
      })();
    } catch (e) {
      handleErrors(e);
    }
  } catch (e) {
    handleErrors(e);
  }
})();
