(()=>{var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval("var btnAuth = document.querySelector('.auth__btn');\nvar modal = document.querySelector('.modal');\nvar btnAuthClose = document.querySelector('.modal__close'); //inputs\n\nvar inputNick = document.querySelector('.modal__forms-nickname');\nvar inputPass = document.querySelector('.modal__forms-password');\nvar btnEnter = document.querySelector('.modal__btn'); //секция buttons\n\nvar sectionButtons = document.querySelector('.buttons'); //секция panel\n\nvar sectionPanel = document.querySelector('.panel');\nvar yourNick = document.querySelector('.your-nick');\nvar yourStatus = document.querySelector('.your-status');\nvar statusAdmin = 0;\nvar users = {\n  nick: ['Maxim', 'Arsen', 'Vika'],\n  pass: [1337, 228, 1488],\n  statusAdmin: [1, 1, 0]\n};\nbtnAuth.addEventListener('click', function () {\n  modal.classList.remove('hidden');\n});\nbtnAuthClose.addEventListener('click', function () {\n  modal.classList.add('hidden');\n});\nbtnEnter.addEventListener('click', function (event) {\n  event.preventDefault();\n  var nick = inputNick.value;\n  var pass = inputPass.value;\n\n  for (i = 0; i < users.nick.length; i++) {\n    if (nick == users.nick[i] && pass == users.pass[i]) {\n      sectionButtons.classList.add('hidden');\n      sectionPanel.classList.remove('hidden'); //Добавление данных\n\n      yourNick.innerHTML = nick;\n\n      if (users.statusAdmin[i] == 1) {\n        yourStatus.innerHTML = 'Admin';\n      } else {\n        yourStatus.innerHTML = 'User';\n        yourStatus.style.color = 'rgb(45, 167, 172)';\n      }\n    } else {\n      document.querySelector('.error').classList.remove('hidden');\n    }\n  }\n});\n\n//# sourceURL=webpack://mytemplate/./src/js/main.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/main.js"]()})();
//# sourceMappingURL=main.js.map
