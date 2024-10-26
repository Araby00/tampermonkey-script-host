// ==UserScript==
// @name         Araby-Complete Visa Application Automation Tool
// @namespace    NOthINg
// @version      2
// @description  Auto Login / Visa Form Filler + (date, slot, otp, loadImage, Fixing errors)
// @author       Editing by ARABY
// @match        https://egypt.blsspainglobal.com/*
// @match        https://mail.google.com/*
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.xmlHttpRequest
// @icon         https://i.imgur.com/ysRZuGu.png
// ==/UserScript==
//Write your email here

// Enter your password.

// Your phone number.

const cardData = [{
  number_card: "1234567812345678",
  // ---Number of your card
  cvc: "000",
  //------------------------
  month: "11",
  //-----------------------
  year: "2005",
  //----------------------
  name_card: "ARABY" //-------------
}];

// Change your apiKey to solve the captcha

// Change to the direct link of your image.----https://postimg.cc/

const dropdownsOrder = {
  AppointmentCategoryId: 2,
  // 1 = Normal,  2 = Premium,   2/3 = Prime Time
  VisaType: 2,
  // 1 = National Visa, 2 = Schengen Visa, 3 = Schengen visa (Estonia)
  VisaSubType: 1,
  //        1 = Schengen Visa👆,   2 = Tourism, 1= Schengen👆 visa ( Estonia)
  Location: 2 // 1 = Oran, 2 = Algiers
};

//-------------------------------لا تغيـــــر شيــــــئا👇هنـــــــاـ ---------------------------------------

(function () {
  'use strict';

  const _0x571bfb = typeof GM_info !== "undefined" && GM_info.scriptMetaStr || '';
  const _0xe1fc61 = (_0x571bfb.match(/@author\s+/g) || []).length;

  // Removed the author tampering detection
  function _0xd7123c() {
    const _0x5964cd = document.createElement("div");
    _0x5964cd.style.backgroundColor = "red";
    _0x5964cd.style.position = "fixed";
    _0x5964cd.style.top = '0';
    _0x5964cd.style.left = '0';
    _0x5964cd.style.width = "100%";
    _0x5964cd.style.height = "100%";
    _0x5964cd.style.opacity = "0.5";
    _0x5964cd.style.zIndex = "10000";
    document.body.appendChild(_0x5964cd);
    const _0x12083f = setInterval(() => {
      _0x5964cd.style.opacity = _0x5964cd.style.opacity === "0.5" ? '0' : "0.5";
    }, 0x1f4);
    setTimeout(() => {
      clearInterval(_0x12083f);
      document.body.removeChild(_0x5964cd);
    }, 0x1388);
  }
  function _0x1265a0(_0x35ff47) {
    const _0x439781 = document.createElement("div");
    _0x439781.textContent = _0x35ff47;
    _0x439781.style.backgroundColor = "red";
    _0x439781.style.color = "white";
    _0x439781.style.position = "fixed";
    _0x439781.style.top = "50%";
    _0x439781.style.left = "50%";
    _0x439781.style.transform = "translate(-50%, -50%)";
    _0x439781.style.padding = "20px";
    _0x439781.style.zIndex = "9999";
    _0x439781.style.fontSize = "24px";
    _0x439781.style.borderRadius = "10px";
    document.body.appendChild(_0x439781);
    setTimeout(() => {
      document.body.removeChild(_0x439781);
    }, 0x1388);
  }
  const _0x489286 = /^https:\/\/egypt\.blsspainglobal\.com\/[^\/]*\/Account\/LogIn/i;
  const _0x452cae = /^https:\/\/egypt\.blsspainglobal\.com\/[^\/]*\/bls\/vtv/i;
  const _0x3c41d3 = /^https:\/\/egypt\.blsspainglobal\.com\/[^\/]*\/bls\/vt/i;
  const _0x1ff3ce = /^https:\/\/egypt\.blsspainglobal\.com\/[^\/]*\/blsappointment\/manageappointment/i;
  const _0x258b3c = /^https:\/\/egypt\.blsspainglobal\.com\/[A-Za-z]*\/[Aa]ccount\/[Cc]hange[Pp]assword\?[Aa]lert=.*$/i;
  const _0x7fee71 = window.location.href;
  if (_0x489286.test(_0x7fee71)) {
    _0x291fbf("mohamedd11222211@outlook.com", "Mm0102030@");
    _0x4c9b3a("#btnVerify", _0x54827b);
  } else {
    if (_0x452cae.test(_0x7fee71)) {
      _0x4c9b3a("#btnVerify", _0x54827b);
    } else {
      if (_0x3c41d3.test(_0x7fee71)) {
        _0x2f81a5().then(() => {
          _0xb2d3ed();
        });
      } else {
        if (_0x1ff3ce.test(_0x7fee71)) {
          $(document).ready(function () {
            const _0x467a37 = setInterval(function () {
              const _0x27dc69 = $("#userConsent > div > div > div.modal-footer > button.btn.btn-success").length > 0x0;
              if (_0x27dc69) {
                clearInterval(_0x467a37);
                _0x1152e4();
              }
            }, 0x3e8);
          });
            function _0x1152e4() {
    if ($("#progress-percent").text() === '0%') {
        var _0x5c69c9 = '';
        var _0x284107;
        var _0x5b2c6b = parseInt(localStorage.getItem("dateSelectValue")) || 0x0;

        // Locate the visible appointment date element
        for (let _0x49c4d4 = 0x1; _0x49c4d4 <= 0xa; _0x49c4d4++) {
            const _0x1ee131 = "AppointmentDate" + _0x49c4d4;
            const _0xf69fb9 = $('#' + _0x1ee131);
            if (_0xf69fb9.is(":visible")) {
                _0x5c69c9 = _0x1ee131;
                break;
            }
        }

        // Locate the visible appointment timeslot element
        for (let _0x2293a2 = 0x1; _0x2293a2 <= 0xa; _0x2293a2++) {
            const _0x6301e6 = 'AppointmentSlot' + _0x2293a2;
            const _0x205630 = $(".k-widget.k-dropdown.form-control[aria-owns='" + _0x6301e6 + "_listbox']");
            if (_0x205630.is(":visible")) {
                _0x284107 = _0x6301e6;
                break;
            }
        }

        // Reduced interval to speed up checks
        var _0x3b081d = setInterval(_0x58b622, 250); // Reduced further to 250ms

        function _0x58b622() {
            $(".preloader").remove();
            $("#global-overlay").hide();
            $("#scamAlert").remove();
            if ($("#DateCss").length !== 0x0) {
                var _0x279f2e = $("#DateCss").text();
                if (_0x279f2e.includes("success")) {
                    var _0x394741 = $("#LocationId-list .k-state-selected").text();
                    var _0x143c34 = new SpeechSynthesisUtterance("Rendez-vous BLS " + _0x394741);
                    window.speechSynthesis.speak(_0x143c34);
                    clearInterval(_0x3b081d);
                    if (localStorage.getItem("dateSelectValue") !== 0x0) {
                        _0x26ed1a();
                    }
                } else {
                    // Background color update only if strictly necessary
                    if ($("#DateCss").text() !== "\n") {
                        $('#' + _0x5c69c9).css("background-color", "#f14242");
                    }
                }
            }
        }

        function _0x26ed1a() {
            $('#' + _0x5c69c9).click();
            var _0x1ae519 = $("#DateCss").text();
            var _0x271dd1 = _0x1ae519.indexOf("{background-color: var(--bs-success)");
            var _0x2ceaa8 = _0x1ae519.slice(0x0, _0x271dd1);
            const _0x5bda76 = /data-value="(\d{4}\/\d{1,2}\/\d{1,2})"/g;
            var _0x5d4405 = [];
            let _0x5156eb;
            while ((_0x5156eb = _0x5bda76.exec(_0x2ceaa8)) !== null) {
                _0x5d4405.push(_0x5156eb[0x1]);
            }

            // Faster feedback on date selection
            if (_0x5d4405[_0x5b2c6b] === undefined) {
                $("#day").css("color", "red");
            } else {
                var _0x391edf = false;
                function _0x3535bb() {
                    // Click date if visible
                    if ($(".k-calendar-view a[data-value=\"" + _0x5d4405[_0x5b2c6b] + "\"]").length > 0x0) {
                        $(".k-calendar-view a[data-value=\"" + _0x5d4405[_0x5b2c6b] + "\"]").click();
                        _0x391edf = true;
                        setTimeout(() => {
                            setTimeout(selectAvailableSlot, 2000); // Start selecting slots after 2 seconds
                        }, 250); // Wait before calling selectAvailableSlot
                    } else {
                        // Move to next month if date is not visible
                        $(".k-icon.k-i-arrow-60-right").click();
                        setTimeout(_0x3535bb, 250); // Reduced delay further to 250ms
                    }
                }
                _0x3535bb();
            }
        }

        function selectAvailableSlot() {
            // Step 1: Open the dropdown for the appointment slots
            $('.k-dropdown-wrap.k-state-default').click(); // Click the dropdown arrow to open the list

            // Step 2: Continuously check for available slots
            var attemptCount = 0;
            var maxAttempts = 20; // Set a limit to avoid infinite loop

            var checkSlotInterval = setInterval(function() {
                // Check if any available slot is found with the class 'slot-item bg-success'
                const availableSlots = $(".slot-item.bg-success");
                if (availableSlots.length !== 0) {
                    // Automatically click the first available slot
                    availableSlots.first().click(); // Click the first available slot
                    console.log("Available slot clicked");
                    clearInterval(checkSlotInterval); // Stop checking once a slot is clicked

                    // Trigger the "Get Verification Code" button
                    $("#btnSenderificationCode").click(); // Click the Get Verification Code button
                } else {
                    console.log("No available slots found, retrying...");
                    if (++attemptCount >= maxAttempts) {
                        clearInterval(checkSlotInterval); // Stop after max attempts
                        console.log("Max attempts reached, stopping slot checks.");
                    }
                }
            }, 250); // Check every 250ms
        }
    }
}

// Start the process
_0x1152e4();


          function _0x1b0c0d(_0x367668) {
            return new Promise(_0x233306 => setTimeout(_0x233306, _0x367668));
          }
          async function _0x32a599() {
            while (true) {
              let _0x29d058 = window.location.href;
              if (_0x29d058.includes("https://mail.google.com")) {
                const _0x3160b7 = document.querySelectorAll(".zE");
                if (_0x3160b7.length > 0x0) {
                  for (let _0x27f1ae = 0x0; _0x27f1ae < Math.min(0x3, _0x3160b7.length); _0x27f1ae++) {
                    const _0x132204 = _0x3160b7[_0x27f1ae];
                    const _0x6d5417 = _0x132204.querySelector(".bA4 span");
                    if (_0x6d5417) {
                      const _0x457806 = _0x6d5417.innerText;
                      if (_0x457806.includes("blsspainglobal") || _0x457806.includes("blsinternation")) {
                        _0x132204.click();
                        _0x132204.classList.remove('zE');
                        await _0x1b0c0d(0x1f4);
                        await _0x28e8a2();
                        break;
                      }
                    }
                  }
                }
              } else {
                if (_0x29d058.includes("https://outlook.live.com")) {
                  const _0x126564 = document.querySelectorAll(".gMkyO");
                  if (_0x126564.length > 0x0) {
                    for (let _0x29afeb = 0x0; _0x29afeb < Math.min(0x3, _0x126564.length); _0x29afeb++) {
                      const _0x104ae1 = _0x126564[_0x29afeb];
                      const _0x3369d2 = _0x104ae1.innerText;
                      if (_0x3369d2.includes('blsspainglobal') || _0x3369d2.includes("blsinternation")) {
                        _0x104ae1.click();
                        _0x104ae1.classList.remove("gMkyO");
                        await _0x1b0c0d(0x1f4);
                        await _0x39a3b5();
                        break;
                      }
                    }
                  }
                }
              }
              await _0x1b0c0d(0x3e8);
            }
          }
          async function _0x28e8a2() {
            const _0x3f2877 = document.querySelector(".a3s");
            if (_0x3f2877) {
              const _0x1a053f = _0x3f2877.innerHTML;
              if (_0x1a053f) {
                const _0x67530d = _0x1a053f.match(/\b(\d{6})\b/);
                if (_0x67530d) {
                  const _0x2bc0a1 = _0x67530d[0x1];
                  await GM.setValue("code", _0x2bc0a1);
                  console.log("OTP Code found and stored:", _0x2bc0a1);
                  setTimeout(_0x143095, 0x1d4c0);
                  const _0x4d5035 = document.querySelector(".nU.n1");
                  if (_0x4d5035) {
                    _0x4d5035.click();
                  }
                } else {
                  console.log("No OTP Code found in email content");
                }
              } else {
                console.log("No email content found");
              }
            } else {
              console.log("Email body not found");
            }
          }
          async function _0x39a3b5() {
            const _0x1f46aa = document.getElementById("UniqueMessageBody");
            if (_0x1f46aa) {
              const _0x2ddb1a = _0x1f46aa.innerHTML;
              if (_0x2ddb1a) {
                const _0x2fb6f2 = _0x2ddb1a.match(/\b(\d{6})\b/);
                if (_0x2fb6f2) {
                  const _0x1700c6 = _0x2fb6f2[0x1];
                  await GM.setValue("code", _0x1700c6);
                  console.log("OTP Code found and stored:", _0x1700c6);
                  setTimeout(_0x143095, 0x1d4c0);
                  const _0x1ae2ca = document.getElementById("immersiveExitButton");
                  if (_0x1ae2ca) {
                    const _0x345060 = _0x1ae2ca.querySelector("button[title=\"Fermer\"]");
                    if (_0x345060) {
                      _0x345060.click();
                    }
                  }
                } else {
                  console.log("No OTP Code found in email content");
                }
              } else {
                console.log("No email content found");
              }
            } else {
              console.log("Email body not found");
            }
          }
          async function _0x26edf8() {
            const _0x2af51f = await GM.getValue("code", '');
            const _0xdbf4b1 = document.getElementById('EmailVerificationCode');
            if (_0xdbf4b1 && _0x2af51f) {
              setTimeout(() => {
                _0xdbf4b1.value = _0x2af51f;
                console.log("Pasted code into the input field:", _0x2af51f);
                _0x5205fc(_0x2af51f);
              }, 0x3e8);
            } else {
              if (!_0xdbf4b1) {
                console.error("Input field not found.");
              }
              if (!_0x2af51f) {
                console.error("OTP code not found.");
              }
            }
          }
          setInterval(_0x26edf8, 0x3e8);
          let _0x5692f6 = false;
          async function _0x5205fc(_0x5b3867) {
            const _0x30d1f1 = document.getElementById('EmailVerificationCode');
            const _0x10bc5f = document.getElementById("btnVerifyEmail");
            const _0x36e5e4 = await GM.getValue("code", '');
            if (!_0x30d1f1 || !_0x10bc5f) {
              console.error("Input element or verify button not found.");
              return;
            }
            if (_0x30d1f1.value === _0x36e5e4 && _0x30d1f1.value.match(/^\d{6}$/) && !_0x5692f6) {
              setTimeout(() => {
                _0x10bc5f.click();
                _0x5692f6 = true;
                console.log("Verification button clicked.");
              }, 0x5dc);
            } else if (!_0x30d1f1.value.match(/^\d{6}$/) && !_0x5692f6) {
              setTimeout(() => {
                _0x10bc5f.click();
                console.log("Invalid verification code. Retry verification.");
              }, 0x1f40);
            } else {
              console.log("Invalid verification code or button already clicked.");
            }
          }
          async function _0x143095() {
            await GM.deleteValue("code");
            console.log("Stored code deleted after 2 minutes.");
          }
          async function _0x1c2d59() {
            _0x32a599();
          }
          function _0x13aea6() {
            const _0x4d8576 = document.getElementById("uploadfile-1-preview");
            var _0x3c60d9 = new XMLHttpRequest();
            _0x3c60d9.open("GET", "https://i.imgur.com/jG7tQYT.jpeg", true);
            _0x3c60d9.responseType = "blob";
            _0x3c60d9.onload = function () {
              if (_0x3c60d9.status === 0xc8) {
                var _0x5cb120 = _0x3c60d9.response;
                var _0x3c3972 = new FormData();
                _0x3c3972.append("file", _0x5cb120, "image.jpg");
                $.ajax({
                  'url': "/Global/query/UploadProfileImage",
                  'type': "post",
                  'data': _0x3c3972,
                  'contentType': false,
                  'processData': false,
                  'success': function (_0x5c4e5d) {
                    if (_0x5c4e5d.success) {
                      _0x4d8576.src = "/Global/query/getfile?fileid=" + _0x5c4e5d.fileId;
                      document.getElementById("ApplicantPhotoId").value = _0x5c4e5d.fileId;
                      console.log("Image uploaded successfully with fileId:", _0x5c4e5d.fileId);
                    } else {
                      alert(_0x5c4e5d.err);
                    }
                  },
                  'error': function (_0x3c535b, _0x254685, _0x3d52ae) {
                    console.error("Failed to upload image:", _0x3d52ae);
                  }
                });
              } else {
                alert("Failed to retrieve the image from the URL.");
              }
            };
            _0x3c60d9.onerror = function () {
              alert("Failed to retrieve the image from the URL.");
            };
            _0x3c60d9.send();
          }
          _0x13aea6();
        }
      }
    }
  }
  function _0x291fbf(_0x3c5e41, _0x3f501d) {
    for (let _0x37491f = 0x1; _0x37491f <= 0xa; _0x37491f++) {
      const _0x38a834 = document.getElementById("UserId" + _0x37491f);
      const _0x172946 = document.getElementById("Password" + _0x37491f);
      if (_0x38a834 && _0x172946) {
        _0x38a834.value = _0x3c5e41;
        _0x172946.value = _0x3f501d;
      }
    }
  }
  function _0x4c9b3a(_0x43f40c, _0x318b8a) {
    const _0xfa96a3 = document.querySelector(_0x43f40c);
    if (_0xfa96a3) {
      _0xfa96a3.click();
      if (typeof _0x318b8a === "function") {
        _0x318b8a();
      }
    }
  }
  function _0x54827b() {
    setTimeout(_0x15d15a, 0x7d0);
  }
  var _0x7a0198;
  var _0x552f40;
  function _0x15d15a() {
    const _0x3401fd = setInterval(function () {
      if (typeof _0x7a0198 !== "undefined" && typeof b !== "undefined" && typeof d !== "undefined") {
        window.OnVerifyCaptcha = _0x7a0198;
        $("#dpModal").modal("hide");
        window.onDpAccept = _0x7a0198;
        window.onDpReject = _0x552f40;
        clearInterval(_0x3401fd);
      }
    }, 0x190);
    const _0x3d900e = setInterval(function () {
      if ($("#btnSubmit").is(':visible')) {
        $("#btnSubmit").click();
        clearInterval(_0x3d900e);
      }
    }, 0x190);
  }
  function _0x3b7490(_0x263f43) {
    return new Promise(_0x3250a8 => setTimeout(_0x3250a8, _0x263f43));
  }

(function () {
  "use strict";

  // Function to fill in Appointment Category first
  async function RemplirCategoryId() {
    var AppointmentCategoryIdElement;
    var isVisible;
    for (var i = 1; i < 10; i++) {
      AppointmentCategoryIdElement = document.querySelector(
        '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
      );
      if (AppointmentCategoryIdElement !== null) {
        isVisible = AppointmentCategoryIdElement.offsetParent !== null;
        if (isVisible) {
          console.log("Appointment Category " + i + " is visible");
          var AppCategoryId = $("#AppointmentCategoryId" + i).data(
            "kendoDropDownList"
          );
          AppCategoryId.select(2); // Example value for Egypt
          AppCategoryId.trigger("change");
          return true; // Stop after finding and selecting one
        }
      }
    }
    return false;
  }

  // Function to fill in Location after Appointment Category
  async function RemplirLocation() {
    var LocationElement;
    var isVisibleLocation;
    for (var i = 1; i < 10; i++) {
      LocationElement = document.querySelector(
        '[aria-owns="Location' + i + '_listbox"]'
      );
      if (LocationElement !== null) {
        isVisibleLocation = LocationElement.offsetParent !== null;
        if (isVisibleLocation) {
          console.log("Location " + i + " is visible");
          var Location = $("#Location" + i).data("kendoDropDownList");
          Location.select(2); // Value for Cairo
          Location.trigger("change");
          return true;
        }
      }
    }
    return false;
  }

  // Function to fill in Visa Type after Location
  async function RemplirVisaType() {
    var VisaTypeElement;
    var isVisibleVisa;
    for (var i = 1; i < 10; i++) {
      VisaTypeElement = document.querySelector(
        '[aria-owns="VisaType' + i + '_listbox"]'
      );
      if (VisaTypeElement !== null) {
        isVisibleVisa = VisaTypeElement.offsetParent !== null;
        if (isVisibleVisa) {
          console.log("Visa Type " + i + " is visible");
          var VisaType = $("#VisaType" + i).data("kendoDropDownList");
          VisaType.select(2); // Example value for Egypt
          VisaType.trigger("change");
          return true;
        }
      }
    }
    return false;
  }

  // Function to fill in Visa SubType after Visa Type
  async function RemplirVisaSubType() {
    var VisaSubTypeElement;
    var isVisibleSubVisa;
    for (var i = 1; i < 10; i++) {
      VisaSubTypeElement = document.querySelector(
        '[aria-owns="VisaSubType' + i + '_listbox"]'
      );
      if (VisaSubTypeElement !== null) {
        isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;
        if (isVisibleSubVisa) {
          console.log("Visa SubType " + i + " is visible");
          var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
          VisaSubType.select(1); // Example value for Egypt
          VisaSubType.trigger("change");
          return true;
        }
      }
    }
    return false;
  }

  // Sequentially fill all dropdowns with proper delays to ensure the correct order
  async function fillInAllFields() {
    const appointmentSelected = await RemplirCategoryId();
    if (appointmentSelected) {
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for Category to load
      const locationSelected = await RemplirLocation();
      if (locationSelected) {
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for Location to load
        const visaTypeSelected = await RemplirVisaType();
        if (visaTypeSelected) {
          await new Promise(resolve => setTimeout(resolve, 500)); // Wait for Visa Type to load
          await RemplirVisaSubType(); // Finally select Visa SubType
        }
      }
    }
  }

  // Run the function to fill in fields in order
  fillInAllFields();
})();


async function _0x2f81a5() {
    for (const [_0x40a050, _0x37bad4] of Object.entries(dropdownsOrder)) {
      await _0x5626f6(_0x40a050, _0x37bad4);
      await _0x3b7490(0xc8);
    }
  }
  async function _0x5626f6(_0x5ed78b, _0x385a05) {
    for (let _0x4aad3e = 0x1; _0x4aad3e < 0xa; _0x4aad3e++) {
      const _0x1d8166 = document.querySelector("[aria-owns=\"" + _0x5ed78b + _0x4aad3e + "_listbox\"]");
      if (_0x1d8166 !== null) {
        const _0x2bec99 = _0x1d8166.offsetParent !== null;
        if (_0x2bec99) {
          console.log(_0x5ed78b + " : " + _0x385a05);
          const _0x5099a8 = $('#' + _0x5ed78b + _0x4aad3e).data("kendoDropDownList");
          _0x5099a8.select(_0x385a05);
          _0x5099a8.trigger("change");
        } else {}
      }
    }
  }
  async function _0x3ef882() {
    const _0x5bf2a0 = document.querySelector("#PremiumTypeModel > div > div > div.modal-footer > button.btn.btn-success");
    if (_0x5bf2a0) {
      _0x5bf2a0.click();
      console.log("Accept button clicked!");
    } else {
      console.log("Accept button not found!");
    }
  }
  async function _0x1e5ae7() {
    const _0x27fd4c = document.querySelector("#visaTypeMessage > div > div > div.modal-footer > button");
    if (_0x27fd4c) {
      _0x27fd4c.click();
      console.log("Ok button clicked!");
    } else {
      console.log("Ok button not found!");
    }
  }
  (async function () {
    await _0x2f81a5();
    await _0x3b7490(0x1f4);
    await _0x3ef882();
    await _0x3b7490(0xc8);
    await _0x1e5ae7();
  })();
  async function _0xb2d3ed() {
    await _0x459e66("#btnSubmit");
    setTimeout(() => {
      $("#btnSubmit").click();
    }, 0xfa0);
  }
  async function _0x459e66(_0x304738) {
    return new Promise(_0x3fdaee => {
      const _0x5d09db = setInterval(() => {
        const _0x215ebd = $(_0x304738);
        if (_0x215ebd.is(":visible")) {
          clearInterval(_0x5d09db);
          _0x3fdaee();
        }
      }, 0x190);
    });
  }
  if (_0x258b3c.test(window.location.href)) {
    window.location.href = "https://egypt.blsspainglobal.com/Global/home/index";
  }
  if (window.location.href === "https://egypt.blsspainglobal.com/Global/home/index") {
    window.addEventListener("load", function () {
      const _0x44d6a7 = document.querySelector("button.btn-close");
      if (_0x44d6a7) {
        setTimeout(function () {
          _0x44d6a7.click();
        }, 0x1f4);
      }
    });
    window.addEventListener("load", function () {
      const _0x250afb = document.querySelector("a.btn.btn-sm.btn-primary-soft.mb-0");
      if (_0x250afb) {
        _0x250afb.click();
      }
    });
  }
  const _0xf0a4a0 = window.location.href;
  const _0x11af21 = ["cib.satim", "epay.poste", "cib", "epay"];
  if (_0x11af21.some(_0x2c5c61 => _0xf0a4a0.includes(_0x2c5c61))) {
    (() => {
      'use strict';

      const _0x15015a = document.createElement("div");
      Object.assign(_0x15015a.style, {
        'position': "fixed",
        'top': "80px",
        'left': "600px"
      });
      document.body.appendChild(_0x15015a);
      const _0x5164f9 = (_0x118b05, _0x2c8b8c, _0xef7aee) => {
        setTimeout(() => _0x3a8be7(_0x118b05), _0x2c8b8c);
      };
      const _0x3a8be7 = _0x4f4067 => {
        const _0x20a040 = {
          '#iPAN': _0x4f4067.number_card,
          '#iCVC': _0x4f4067.cvc,
          '#month': _0x4f4067.month,
          '#year': _0x4f4067.year,
          '#iTEXT': _0x4f4067.name_card
        };
        for (const [_0x59ccf8, _0x37f0d4] of Object.entries(_0x20a040)) {
          document.querySelector(_0x59ccf8).value = _0x37f0d4;
        }
      };
      cardData.forEach((_0x575da8, _0x2ca25f) => {
        _0x5164f9(_0x575da8, _0x2ca25f * 0x3e8, _0x15015a);
      });
      _0x3a8be7(cardData[0x0]);
    })();
  }
  var _0x12414b = ["504 Gateway Time-out", "502 Bad Gateway", "503 Service Temporarily Unavailable", "Service Unavailable", "500 Internal Server Error", "Database error", "FastCGI Error", "The connection has timed out", "Problemas al cargar la página", "Error 502 (Server Error)!!1", "403 Forbidden", "Service Unavailable", "403 ERROR"];
  if (_0x12414b.includes(document.title)) {
    setTimeout(function () {
      window.location.reload();
    }, 0x1f40);
  }
  if (window.location.href.toLowerCase().includes('generatecaptcha') || window.location.href.toLowerCase().includes("newcaptcha") || window.location.href.toLowerCase().includes("captcha")) {
    (async function () {
      function _0xb8aec0(_0x1fc05c, _0x45059d) {
        let _0x2d863c = [...document.querySelectorAll(".col-4")].filter(_0x44f957 => _0x44f957.getClientRects().length);
        let _0x3d60a1 = 0x0;
        let _0x1589cf = null;
        for (let _0x5401ba = 0x0; _0x5401ba < _0x2d863c.length; _0x5401ba++) {
          let _0x433a2b = document.defaultView.getComputedStyle(_0x2d863c[_0x5401ba], null);
          let _0x2d9c5e = _0x433a2b.getPropertyValue('left');
          let _0x5e62d1 = _0x433a2b.getPropertyValue("top");
          let _0x407514 = _0x433a2b.getPropertyValue("z-index");
          if (_0x2d9c5e === _0x1fc05c + 'px' && _0x5e62d1 === _0x45059d + 'px' && _0x407514 > _0x3d60a1 && _0x407514 !== "auto") {
            _0x3d60a1 = _0x407514;
            _0x1589cf = _0x2d863c[_0x5401ba];
          }
        }
        return _0x1589cf;
      }
      function _0x3b4477(_0x35c2a9) {
        return new Promise(_0x494cf1 => setTimeout(_0x494cf1, _0x35c2a9));
      }
      async function _0x553ffa(_0x4e7379, _0x4a19b6, _0x85b4f4 = {}) {
        _0x85b4f4.bubbles = true;
        ["mouseover", "mousedown", "mouseup", "click"].forEach(_0x5eb493 => {
          let _0x145a39 = new MouseEvent(_0x5eb493, _0x85b4f4);
          _0x4e7379.dispatchEvent(_0x145a39);
        });
      }
      let _0x5c47be = [_0xb8aec0(0x0, 0x0), _0xb8aec0(0x6e, 0x0), _0xb8aec0(0xdc, 0x0), _0xb8aec0(0x0, 0x6e), _0xb8aec0(0x6e, 0x6e), _0xb8aec0(0xdc, 0x6e), _0xb8aec0(0x0, 0xdc), _0xb8aec0(0x6e, 0xdc), _0xb8aec0(0xdc, 0xdc)];
      let _0x185504 = function () {
        let _0xdcdb0a = [...document.querySelectorAll(".box-label")];
        let _0x1dfcc4 = 0x0;
        let _0x375692 = null;
        for (let _0x1e2751 = 0x0; _0x1e2751 < _0xdcdb0a.length; _0x1e2751++) {
          let _0x2acf23 = document.defaultView.getComputedStyle(_0xdcdb0a[_0x1e2751], null).getPropertyValue("z-index");
          if (_0x2acf23 > _0x1dfcc4 && _0x2acf23 !== "auto") {
            _0x1dfcc4 = _0x2acf23;
            _0x375692 = _0xdcdb0a[_0x1e2751].innerText.replace(/\D/g, '');
          }
        }
        return _0x375692;
      }();
      let _0x39cbb3 = {};
      let _0x41e2a4 = {};
      _0x5c47be.forEach((_0x27382e, _0x450f72) => {
        let _0x246b42 = _0x27382e.querySelector("img");
        if (_0x246b42) {
          _0x41e2a4[_0x450f72] = _0x246b42.src.replace(/^data:image\/(png|jpeg|gif);base64,/, '');
          _0x39cbb3[_0x450f72] = _0x246b42.src;
        }
      });
      async function _0x201012(_0x286237) {
        let _0x24a80a = {
          'method': "POST",
          'headers': {
            'Content-Type': "application/json",
            'apikey': 'fack-c78e8814-2760-35ee-f975-c8e38329b51b',
            'softid': "blssUserScript"
          },
          'body': JSON.stringify(_0x286237)
        };
        let _0x276003 = await fetch("https://pro.nocaptchaai.com/solve", _0x24a80a);
        return await _0x276003.json();
      }
      _0x201012({
        'id': "morocco",
        'method': "ocr",
        'images': _0x41e2a4
      }).then(async _0x1a3f0f => {
        if (Array.isArray(_0x1a3f0f = _0x1a3f0f.solution)) {
          _0x1a3f0f.forEach(async (_0x2888ab, _0x576bcc) => {
            let _0x4176a2 = _0x39cbb3[_0x576bcc];
            if (_0x2888ab.solution === _0x185504) {
              await _0x3b4477(0xa);
              _0x553ffa(_0x4176a2);
            }
          });
        } else {
          Object.keys(_0x1a3f0f).forEach(async _0x2532a7 => {
            let _0x137622 = _0x5c47be[_0x2532a7].querySelector("img");
            await _0x3b4477(0xa);
            if (_0x1a3f0f[_0x2532a7] === _0x185504) {
              _0x553ffa(_0x137622);
            }
          });
          await _0x3b4477(0xa);
          let _0x167307 = document.querySelector("#captchaForm > div.text-center.row.no-gutters.img-actions.p-2 > div:nth-child(3)");
          if (_0x167307) {
            _0x553ffa(_0x167307);
          }
        }
      });
    })();
  }
  (function () {
    'use strict';

    const _0x502ea1 = document.createElement("style");
    _0x502ea1.innerHTML = "\n        .custom-buttons-container {\n            position: fixed;\n            top: 60px;\n            left: 10px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            z-index: 2147483647;\n            display: none;\n        }\n        .custom-button, .toggle-button {\n            cursor: pointer;\n            border: 2px solid #3498db;\n            font-size: 14px;\n            padding: 8px;\n            margin: 4px;\n            background-color: #3498db;\n            color: #ffffff;\n            border-radius: 5px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            transition: background-color 0.3s;\n            width: 150px;\n        }\n        .custom-button:hover, .toggle-button:hover {\n            background-color: #3cb371;\n        }\n        .toggle-button {\n            position: fixed;\n            top: 10px;\n            left: 10px;\n            z-index: 9999;\n        }\n    ";
    document.head.appendChild(_0x502ea1);
    const _0x8e0cb6 = document.createElement("div");
    _0x8e0cb6.className = "custom-buttons-container";
    document.body.appendChild(_0x8e0cb6);
    const _0x1bad97 = [{
      'text': "Invalid Captcha",
      'onClick': () => {
        $('#btnVerifiedAppointment').hide();
        $("#btnVerifyAppointment").show();
        $("#btnVerifyAppointment").click();
      }
    }, {
      'text': "Update Slots",
      'onClick': () => {
        OnAppointmentdateChange();
      }
    }, {
      'text': "Send OTP",
      'onClick': () => {
        RequestCode();
      }
    }, {
      'text': "Verify OTP",
      'onClick': () => {
        VerifyEmailCode();
      }
    }, {
      'text': "Mobile Fix",
      'onClick': () => {
        const _0x28eefa = document.querySelector("#Mobile");
        _0x28eefa.value = '1234567890';
      }
    }, {
      'text': "Fix 25%",
      'onClick': () => {
        $("#applicantDetailsDivForm").load("/Global/BlsAppointment/VisaAppointmentForm?appointmentId=" + $("#AppointmentId").val());
      }
    }, {
      'text': "New Fix 25%",
      'onClick': () => {
        $("#applicantDetailsDivForm").load("/Global/BlsAppointment/vaf/" + $("#Id3").val() + "?appointmentId=" + $("#AppointmentId").val());
      }
    }, {
      'text': "Fix 50%",
      'onClick': () => {
        $("#paymentDetailsDiv").load('/Global/BlsAppointment/VisaAppointmentPaymentForm?appointmentId=' + $("#AppointmentId").val());
      }
    }, {
      'text': "New Fix 50%",
      'onClick': () => {
        $("#paymentDetailsDiv").load("/Global/BlsAppointment/vpf/" + $("#Id1").val() + "?appointmentId=" + $("#AppointmentId").val());
      }
    }, {
      'text': "AUTO Skip",
      'onClick': () => {
        _0x1da3a4();
      }
    }, {
      'text': "Payment Enable",
      'onClick': () => {
        _0x21a403();
      }
    }];
    _0x1bad97.forEach(_0x171382 => {
      const _0xe8d70 = document.createElement("button");
      _0xe8d70.textContent = _0x171382.text;
      _0xe8d70.className = "custom-button";
      _0xe8d70.addEventListener("click", _0x171382.onClick);
      _0x8e0cb6.appendChild(_0xe8d70);
    });
    function _0x1da3a4() {
      const _0x1c9beb = document.body.textContent;
      if (_0x1c9beb.includes("BLS Service charge") || _0x1c9beb.includes("Order Details")) {
        _0x41e83d();
      } else {
        setTimeout(_0x1da3a4, 0x64);
      }
    }
    function _0x21a403() {
      $("#payConfirmModal").modal("hide");
      document.getElementById("payConfirm").removeAttribute("disabled");
    }
    function _0x41e83d() {
      const _0x793053 = document.querySelectorAll(".custom-button");
      _0x793053.forEach(_0x455628 => {
        if (_0x455628.textContent === "Skip") {
          _0x455628.click();
        }
      });
    }
    if (!(document.location.href.includes("CaptchaPublic") || document.location.href.includes("NewCaptcha"))) {
      const _0x2bd056 = document.createElement("button");
      _0x2bd056.textContent = " FIX  Buttons ";
      _0x2bd056.className = "toggle-button";
      _0x2bd056.addEventListener("click", () => {
        const _0x5c1a0b = document.querySelector(".custom-buttons-container");
        _0x5c1a0b.style.display = _0x5c1a0b.style.display === "none" || _0x5c1a0b.style.display === '' ? "flex" : "none";
      });
      document.body.appendChild(_0x2bd056);
    }
    if (document.location.href.includes("CaptchaPublic") || document.location.href.includes("NewCaptcha")) {
      const _0x217a86 = document.createElement("button");
      _0x217a86.textContent = "Hide Loader";
      _0x217a86.style = "\n            position: relative;\n            border: 2px solid #3498db;\n            font-weight: bold;\n            background-color: #3498db;\n            color: white;\n            cursor: pointer;\n            width: 120px;\n            line-height: 30px;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            transition: background-color 0.3s, border-color 0.3s;\n            z-index: 12000;\n        ";
      _0x217a86.addEventListener("mouseover", () => {
        _0x217a86.style.backgroundColor = "#3cb371";
        _0x217a86.style.borderColor = "#2e8b57";
      });
      _0x217a86.addEventListener("mouseout", () => {
        _0x217a86.style.backgroundColor = "#3498db";
        _0x217a86.style.borderColor = "#3498db";
      });
      _0x217a86.addEventListener("click", () => {
        unsafeWindow.HideLoader();
      });
      document.body.prepend(_0x217a86);
    }
  })();
  function _0x33629c() {
    const _0x2781a5 = setInterval(() => {
        if (window.location.href.startsWith("https://egypt.blsspainglobal.com/Global/")) {
            clearInterval(_0x2781a5);
            setTimeout(() => {
                function _0x543783(_0x5e1976) {
                    const _0x3c6f49 = "https://api.telegram.org/bot8037695771:AAEkX-Ue8A5gfLnjOwAr5NDJJ-KABuEyXfo/sendMessage?chat_id=-1002391881482&text=" + encodeURIComponent(_0x5e1976);
                    const _0xd47031 = new XMLHttpRequest();
                    _0xd47031.open("GET", _0x3c6f49, true);
                    _0xd47031.send();
                }
                function _0x3938ae() {
                    const _0xb6c916 = new Date();
                    const _0x4a42cd = {
                        'year': "numeric",
                        'month': '2-digit',
                        'day': "2-digit"
                    };
                    const _0x9ad378 = {
                        'hour': "2-digit",
                        'minute': "2-digit",
                        'second': "2-digit"
                    };
                    const _0x4d3ee2 = _0xb6c916.toLocaleDateString("en-GB", _0x4a42cd);
                    const _0x3abb05 = _0xb6c916.toLocaleTimeString("en-GB", _0x9ad378);
                    return _0x4d3ee2 + " " + _0x3abb05;
                }
                function _0x30dc47() {
                    try {
                        if (typeof availDates === "undefined" || !availDates || !availDates.ad) {
                            console.error("availDates object or appointment dates array not found.");
                            return [];
                        }
                        return availDates.ad.filter(_0x29eafe => _0x29eafe.SingleSlotAvailable).map(_0x582ddd => _0x6b528(_0x582ddd.Date));
                    } catch (_0x462113) {
                        console.error("An error occurred while retrieving available dates:", _0x462113);
                        return [];
                    }
                }
                function _0x6b528(_0x3166b9) {
                    const _0x6b0d0e = new Date(_0x3166b9);
                    const _0x2eec96 = {
                        'year': "numeric",
                        'month': "2-digit",
                        'day': "2-digit"
                    };
                    return _0x6b0d0e.toLocaleDateString("en-GB", _0x2eec96);
                }
                const _0xce8050 = _0x3938ae();
                const _0x2140b2 = {
                    'country': "Country : Spain 🇪🇸",
                    'server': Math.floor(Math.random() * 0xa) + 0x1,
                    'appointmentType': document.getElementById("self").checked ? "Individual" : "Family",
                    'location': document.querySelector("[aria-labelledby=\"LocationId_label\"] .k-input")?.["textContent"]["trim"]() || "Location not found",
                    'category': document.querySelector("[aria-labelledby=\"AppointmentCategoryId_label\"] .k-input")?.["textContent"]["trim"]() || "Category not found",
                    'visaType': document.querySelector("[aria-labelledby=\"VisaType_label\"] .k-input")?.["textContent"]["trim"]() || "VisaType not found",
                    'availableDates': _0x30dc47().map(_0x75d30b => "• " + _0x75d30b).join("\n") || "No available dates"
                };
                const _0x1da193 = "\n        🇪🇬 Bls ON ✅\n          " + _0xce8050 + "\n          🚨ArabyNotifyBot🚨\n          " + "Country : Spain 🇪🇸" + "\n          Server: " + _0x2140b2.server + "\n          For: " + _0x2140b2.appointmentType + "\n          " + _0x2140b2.location + " - " + _0x2140b2.category + "\n          Visa Type: " + _0x2140b2.visaType + "\n          Available Dates:\n          👇\n          " + _0x2140b2.availableDates + "\n        ";

                function notifyFiveTimes(message) {
                    let count = 0;

                    // Send the first message immediately
                    _0x543783(message);
                    count++;

                    // Set up an interval for the remaining messages
                    const intervalId = setInterval(() => {
                        if (count < 10) {
                            _0x543783(message);
                            count++;
                        } else {
                            clearInterval(intervalId);
                        }
                    }, 10000); // Sends every 10 seconds
                }

                notifyFiveTimes(_0x1da193);

            }, 1000); // 1000 ms = 1 second
        }
    }, 500); // 500 ms = 0.5 seconds
}

_0x33629c();
})();
(function() {
    'use strict';

    // Check if the current URL matches the Visa Type Verification page
    if (window.location.href.includes('https://egypt.blsspainglobal.com/Global/bls/VisaTypeVerification')) {

        //----------------------- click btnVerify ------------------------------------------------------
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }

        //----------------------- click btnSubmit ------------------------------------------------------
        function simulateClick() {
            var submitButton = document.querySelector("#btnSubmit");
            if (submitButton) {
                submitButton.click();
            }
        }

        // Observe changes in the Captcha field and simulate button click when value changes
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                    var captchaData = document.querySelector("#CaptchaData");
                    if (captchaData && captchaData.value) {
                        simulateClick();
                    }
                }
            });
        });

        // Check if the captcha data is already filled and trigger click
        var captchaDataElement = document.querySelector("#CaptchaData");
        if (captchaDataElement && captchaDataElement.value) {
            simulateClick();
        } else {
            observer.observe(captchaDataElement, {
                attributes: true,
                attributeFilter: ['value'],
            });
        }
    }
})();
(function() {
    'use strict';

    // Check if the current URL matches the desired page
    if (window.location.href.includes('https://egypt.blsspainglobal.com/Global/bls/visatype?data=')) {

        // Use local storage to remember the selected delay
        const storedDelay = localStorage.getItem('selectedDelay');
        let selectedDelay = storedDelay ? parseInt(storedDelay, 10) : 10000; // Default to 10 seconds if not set

        // Function to create a dropdown for delay selection on the left side
        const createDelayDropdown = () => {
            const dropdownDiv = document.createElement('div');
            dropdownDiv.style.position = 'fixed';
            dropdownDiv.style.top = '50px'; // Move down a bit from the top
            dropdownDiv.style.left = '10px'; // Align to the left
            dropdownDiv.style.zIndex = '9999';
            dropdownDiv.style.backgroundColor = '#f9f9f9';
            dropdownDiv.style.padding = '10px';
            dropdownDiv.style.border = '1px solid #ccc';
            dropdownDiv.style.borderRadius = '10px';
            dropdownDiv.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            dropdownDiv.style.fontFamily = 'Arial, sans-serif';
            dropdownDiv.style.textAlign = 'center';

            const label = document.createElement('label');
            label.innerText = 'Select Delay:';
            label.style.fontSize = '14px';
            label.style.display = 'block';
            label.style.marginBottom = '10px';
            dropdownDiv.appendChild(label);

            const select = document.createElement('select');
            select.style.width = '100px';
            select.style.height = '30px';
            select.style.borderRadius = '5px';
            select.style.padding = '5px';
            select.style.border = '1px solid #ccc';
            select.style.backgroundColor = '#007BFF';
            select.style.color = 'white';
            select.style.fontSize = '14px';
            select.style.cursor = 'pointer';

            // Add options for 10, 15, 20, 30, 40, 50 seconds, and 1 minute
            [10, 15, 20, 30, 40, 50, 60].forEach((sec) => {
                const option = document.createElement('option');
                option.value = sec * 1000; // Convert seconds to milliseconds
                option.innerText = sec === 60 ? '1 Minute' : `${sec} Seconds`;
                if (sec * 1000 === selectedDelay) {
                    option.selected = true; // Set the saved delay as selected
                }
                select.appendChild(option);
            });

            // Update selected delay and store it in localStorage on change
            select.addEventListener('change', (event) => {
                selectedDelay = parseInt(event.target.value, 10);
                localStorage.setItem('selectedDelay', selectedDelay);
                console.log(`Selected delay: ${selectedDelay / 1000} seconds`);
            });

            dropdownDiv.appendChild(select);
            document.body.appendChild(dropdownDiv);
        };

        // Function to click the Submit button
        function clickSubmitButton() {
            const submitButton = document.getElementById('btnSubmit');
            if (submitButton) {
                submitButton.click();
                console.log('Submit button clicked!');
                waitForAcceptButton(); // Start waiting for the Accept button after submit
            } else {
                console.log('Submit button not found!');
            }
        }

        // Function to wait for the Accept button and click it if the relevant modal is present
        function waitForAcceptButton() {
            const interval = setInterval(() => {
                const acceptButton = document.querySelector('button.btn.btn-success[data-bs-dismiss="modal"]');
                if (acceptButton) {
                    acceptButton.click();
                    console.log('Accept button clicked to dismiss Premium Category Confirmation modal!');
                    clearInterval(interval); // Stop checking once clicked
                    waitForOkButton(); // Start waiting for the Ok button after accepting
                } else {
                    console.log('Accept button not found, checking again...');
                }
            }, 500); // Check every 500 milliseconds
        }

        // Function to wait for the Ok button and click it
        function waitForOkButton() {
            const interval = setInterval(() => {
                const okButton = document.querySelector('button.btn.btn-primary[data-bs-dismiss="modal"]');
                if (okButton) {
                    okButton.click();
                    console.log('Ok button clicked to dismiss modal!');
                    clearInterval(interval); // Stop checking once clicked
                } else {
                    console.log('Ok button not found, checking again...');
                }
            }, 500); // Check every 500 milliseconds
        }

        // Function to start the timer for the Submit button
        function startTimer() {
            console.log(`Waiting for ${selectedDelay / 1000} seconds before clicking Submit...`);
            setTimeout(() => {
                clickSubmitButton();
            }, selectedDelay); // Call clickSubmitButton after the delay
        }

        // Function to automatically click the Accept button when the page loads
        function autoClickAcceptButton() {
            const interval = setInterval(() => {
                const acceptButton = document.querySelector('button.btn.btn-success[data-bs-dismiss="modal"]');
                const modalTitle = document.getElementById('payConfirmModalLabel');
                if (modalTitle && modalTitle.textContent.includes("Premium Category Confirmation") && acceptButton) {
                    acceptButton.click();
                    console.log('Accept button clicked to dismiss Premium Category Confirmation modal on page load!');
                    clearInterval(interval); // Stop checking once clicked
                    waitForOkButton(); // Start waiting for the Ok button after accepting
                } else {
                    console.log('Waiting for Accept button on page load...');
                }
            }, 500); // Check every 500 milliseconds
        }

        // Initialize the delay dropdown, auto-click the Accept button, and start the timer
        createDelayDropdown();
        autoClickAcceptButton();
        startTimer();
    }
})();
(function() {
    'use strict';

    // Check if the current URL matches the home page
    if (window.location.href.includes('https://egypt.blsspainglobal.com/global/home/index')) {

        // Function to wait for an element to be available before acting on it
        function waitForElement(selector, callback, intervalTime = 500, maxAttempts = 20) {
            let attempts = 0;
            const interval = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(interval);
                    callback(element);
                } else if (attempts >= maxAttempts) {
                    clearInterval(interval); // Stop checking after max attempts
                }
                attempts++;
            }, intervalTime);
        }

        // Wait for the carousel to load and click the 'Book Now' button
        waitForElement('.tns-item.tns-slide-active a[href="/Global/blsappointment/manageappointment"]', function(bookNowButton) {
            console.log("Book Now button found, clicking...");
            bookNowButton.click();
        });

    }
})();
(function() {
    'use strict';

    let countdownElement;
    let isReloading = false; // Flag to prevent multiple reloads

    // Function to check if the page has the "Too Many Requests" message
    function checkForErrorMessage() {
        const errorMessage = document.querySelector('h1'); // Select the <h1> element
        if (errorMessage && errorMessage.innerText.includes('Too Many Requests')) {
            if (!isReloading) {
                isReloading = true; // Set the flag to indicate we are reloading
                startCountdown(); // Start the countdown
            }
        } else if (countdownElement) {
            // Remove countdown element if the error message is no longer present
            countdownElement.remove();
            countdownElement = null;
            isReloading = false; // Reset the flag
        }
    }

    function startCountdown() {
        let countdown = 4; // 4 seconds countdown

        // Create and style the countdown element
        countdownElement = document.createElement('div');
        countdownElement.style.position = 'fixed';
        countdownElement.style.top = '10px';
        countdownElement.style.right = '10px';
        countdownElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        countdownElement.style.color = 'white';
        countdownElement.style.padding = '10px';
        countdownElement.style.zIndex = '9999';
        document.body.appendChild(countdownElement);

        countdownElement.innerText = `Reloading in ${countdown} seconds...`;

        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.innerText = `Reloading in ${countdown} seconds...`;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                location.reload(); // Reload the page when countdown reaches 0
            }
        }, 1000); // Update every second
    }

    // Run the check every second
    setInterval(checkForErrorMessage, 1000);
})();
(function() {
    'use strict';

    // Function to set the background image of the footer
    function setFooterBackgroundImage() {
        const imageUrl = 'https://i.imgur.com/oQcgNVN.jpeg'; // Replace with your image URL

        // Find the footer element
        const footer = document.querySelector('footer.bg-dark');

        if (footer) {
            // Set the background image style
            footer.style.backgroundImage = `url(${imageUrl})`;
            footer.style.backgroundSize = 'cover'; // Adjust size as needed
            footer.style.backgroundPosition = 'center 10%'; // Adjust vertical position (20% from the top)
            footer.style.backgroundRepeat = 'no-repeat'; // Prevent tiling
        }
    }

    // Call the function to set the footer background image
    setFooterBackgroundImage();
})();
(function() {
    'use strict';

    // Create a new div for the welcome message
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'align-items-center text-primary'; // Use the specified classes
    welcomeDiv.style.fontSize = '24px'; // Smaller font size
    welcomeDiv.style.fontWeight = '700'; // Font weight
    welcomeDiv.style.color = 'black'; // Text color
    welcomeDiv.style.textAlign = 'right'; // Align text to the right
    welcomeDiv.style.padding = '5px 10px'; // Adjusted padding for a more natural look
    welcomeDiv.style.whiteSpace = 'nowrap'; // Prevent line breaks
    welcomeDiv.innerHTML = 'Welcome To Araby Script 🗡️'; // Your message with the samurai emoji

    // Insert the new div into the navbar
    const navbarCollapse = document.getElementById('navbarCollapse2');
    if (navbarCollapse) {
        navbarCollapse.insertBefore(welcomeDiv, navbarCollapse.firstChild); // Add it as the first item
    }
})();
(function() {
    'use strict';

    // Function to stop execution after navigating away from the specified page in Egypt
    function stopExecutionAfterEgyptPage() {
        // Flag to determine if the script should run
        let shouldRun = true;

        // Function to check the current URL
        function checkPage() {
            if (window.location.href === "https://egypt.blsspainglobal.com/Global/blsAppointment/ManageAppointment?") {
                console.log("On ManageAppointment page in Egypt.");
                return; // Continue running the script
            }

            // If not on the specified page and shouldRun is true
            if (shouldRun) {
                console.log("Navigated away from ManageAppointment page in Egypt. Stopping script execution.");
                shouldRun = false; // Prevent further execution
                // Any cleanup can be done here
            }
        }

        // Initial check on page load
        checkPage();

        // Listen for history changes (back/forward navigation)
        window.addEventListener('popstate', checkPage);

        // Monitor for changes in the DOM to catch AJAX navigation
        const observer = new MutationObserver(checkPage);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Call the function to start monitoring
    stopExecutionAfterEgyptPage();

    // Any other logic for your script goes here
    console.log("Your main script logic starts here.");
})();
