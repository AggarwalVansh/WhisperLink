function _0xf0c5() {
  const _0x4cdfac = [
    "yellow",
    "745PaDazL",
    "1220MnRlXv",
    "emit",
    "port",
    "socket.io",
    "2133315yRrkPo",
    "exituser",
    "join",
    "lime",
    "\x20left\x20the\x20conversation",
    "connection",
    "update",
    "path",
    "broadcast",
    "104XCbiCu",
    "express",
    "1074761tdHypw",
    "gradient-string",
    "listen",
    "567063ZyuNOX",
    "1897936DdsPFm",
    "15156cDINqp",
    "/public",
    "\x0a███████████████████████████████████████████████████████████████████\x0a█▄─█▀▀▀█─▄█─█─█▄─▄█─▄▄▄▄█▄─▄▄─█▄─▄▄─█▄─▄▄▀█▄─▄███▄─▄█▄─▀█▄─▄█▄─█─▄█\x0a██─█─█─█─██─▄─██─██▄▄▄▄─██─▄▄▄██─▄█▀██─▄─▄██─██▀██─███─█▄▀─███─▄▀██\x0a▀▀▄▄▄▀▄▄▄▀▀▄▀▄▀▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▄▄▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▀▄▄▀\x0aWhisperLink\x20is\x20connected\x20successfully\x20And\x20Working\x20on\x20http://localhost:",
    "27528etayAU",
    "2017850LqUMPF",
    "log",
    "createServer",
    "chat",
  ];
  _0xf0c5 = function () {
    return _0x4cdfac;
  };
  return _0xf0c5();
}
const _0x79b04d = _0x1a03;
(function (_0x489262, _0x421c14) {
  const _0x4527eb = _0x1a03,
    _0xe4f10f = _0x489262();
  while (!![]) {
    try {
      const _0x9b1f9e =
        parseInt(_0x4527eb(0x1d5)) / 0x1 +
        parseInt(_0x4527eb(0x1de)) / 0x2 +
        -parseInt(_0x4527eb(0x1e8)) / 0x3 +
        -parseInt(_0x4527eb(0x1d9)) / 0x4 +
        (parseInt(_0x4527eb(0x1e3)) / 0x5) *
          (parseInt(_0x4527eb(0x1dd)) / 0x6) +
        (parseInt(_0x4527eb(0x1d8)) / 0x7) *
          (-parseInt(_0x4527eb(0x1d3)) / 0x8) +
        (parseInt(_0x4527eb(0x1da)) / 0x9) * (parseInt(_0x4527eb(0x1e4)) / 0xa);
      if (_0x9b1f9e === _0x421c14) break;
      else _0xe4f10f["push"](_0xe4f10f["shift"]());
    } catch (_0x43299f) {
      _0xe4f10f["push"](_0xe4f10f["shift"]());
    }
  }
})(_0xf0c5, 0xb3358);
const settings = require("./public/core/settings.js"),
  express = require(_0x79b04d(0x1d4)),
  path = require(_0x79b04d(0x1d1)),
  port = settings[_0x79b04d(0x1e6)],
  gradient = require(_0x79b04d(0x1d6)),
  app = express(),
  server = require("http")[_0x79b04d(0x1e0)](app),
  io = require(_0x79b04d(0x1e7))(server);
function _0x1a03(_0x3bb808, _0xcde135) {
  const _0xf0c51d = _0xf0c5();
  return (
    (_0x1a03 = function (_0x1a036f, _0x1f3b25) {
      _0x1a036f = _0x1a036f - 0x1d0;
      let _0xe239f1 = _0xf0c51d[_0x1a036f];
      return _0xe239f1;
    }),
    _0x1a03(_0x3bb808, _0xcde135)
  );
}
app["use"](
  express["static"](path[_0x79b04d(0x1ea)](__dirname + _0x79b04d(0x1db)))
),
  io["on"](_0x79b04d(0x1ed), function (_0x2185d3) {
    const _0x54919b = _0x79b04d;
    _0x2185d3["on"]("newuser", function (_0x5b26f3) {
      const _0xf25e7b = _0x1a03;
      _0x2185d3[_0xf25e7b(0x1d2)][_0xf25e7b(0x1e5)](
        _0xf25e7b(0x1d0),
        _0x5b26f3 + "\x20joined\x20the\x20conversation"
      );
    }),
      _0x2185d3["on"](_0x54919b(0x1e9), function (_0x5d24d9) {
        const _0x26ed79 = _0x54919b;
        _0x2185d3[_0x26ed79(0x1d2)][_0x26ed79(0x1e5)](
          "update",
          _0x5d24d9 + _0x26ed79(0x1ec)
        );
      }),
      _0x2185d3["on"]("chat", function (_0x1d488a) {
        const _0xf668e7 = _0x54919b;
        _0x2185d3[_0xf668e7(0x1d2)][_0xf668e7(0x1e5)](
          _0xf668e7(0x1e1),
          _0x1d488a
        );
      });
  }),
  server[_0x79b04d(0x1d7)](port),
  console[_0x79b04d(0x1df)](
    gradient(_0x79b04d(0x1eb), _0x79b04d(0x1e2))(_0x79b04d(0x1dc) + port)
  );
