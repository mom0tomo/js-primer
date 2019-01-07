// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
importScripts(
    "https://unpkg.com/service-worker-updatefound-refresh-dialog@1.1.0/dist/service-worker-updatefound-refresh-dialog.umd.js"
);

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "a72f487bc91223f5be70446ca1ed6d00"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "ac0b62cb4935621b82a3ac8c58af2a40"
  },
  {
    "url": "basic/class/index.html",
    "revision": "6ffde2517402b289c4db138ba7b8850c"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "b5e7a32059f2c89390dbc59da107c243"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "b607da485d58890c6897de90fd88415a"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "477d11cee01a1d318add4573d6f9df29"
  },
  {
    "url": "basic/date/index.html",
    "revision": "d7855cc7ab9a1685795940316243b515"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "9d994dba7601ef72deec26702bd8a4b9"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "949d521a48e60aae7e95855dc8f54480"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "6174a3c06f8370bd103b2c27ee7fe17f"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "4406c17ded18d4339327bc13808c9b1e"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "e0eebf93a79b0405288701c8cc3fc7ab"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "24437f6ef57706bd0ddc0a4d11ab8961"
  },
  {
    "url": "basic/index.html",
    "revision": "3d6f1fd383a382b43d38543998373d1e"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "b9eaa55ad80199fe2df0d1f2e2160d8e"
  },
  {
    "url": "basic/json/index.html",
    "revision": "e9108cb2da4f75ad0354486b7c240127"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "48b10ce16446db30e1c182369e3e5367"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "a39750e8eb4ddac8b040b90e6838bf63"
  },
  {
    "url": "basic/math/index.html",
    "revision": "7e0718b8d5a3386ead83d4eb2aac2706"
  },
  {
    "url": "basic/object/index.html",
    "revision": "985ffb2dbb3b6f612ce074485b6ac9b1"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "92a40a801140ed42de4b62eeaa693dfa"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "1ec92b6aeb12572625b2b93075490f63"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "677e8695895fc6ec861302a6a66e2bfc"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "0ebdfbe078f57f649b71cba21a107c95"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "b2b4c93521f94c3d3b26082f5a132e5c"
  },
  {
    "url": "basic/string/index.html",
    "revision": "18827ec049e166bcaa7086aecc3d873b"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "e5c16ef54ad81ad4651cb525ec2b0f6e"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "6253868f2440865f3666a5eb5704c5f8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "a6dec84857f27171c034a05c23911055"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "5c8aecaf89b35f6ba581e0b3d24a7653"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "5ce21f37d111a115e8c5b17d9e21b4f2"
  },
  {
    "url": "intro/goal/index.html",
    "revision": "542f8646f0ebbb1b132441cbc02c64df"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "79e879a273ed4702417b86c916915817"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "e7692b55664612c4a3e4a37201e4deb3"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "edc251755c1a276f970751098d95a557"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "b934e3a64177225a5432836cd3c473f0"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "2c43398fb84aa8b548e674f8b42108cb"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "ba6df62ebf933d52ab562d79eb567954"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "bd4e0316a022913af041bd298bbe9a34"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "186ea027257d063f4299a912e9c5955c"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "f3d9e468db8df819fbbc2e0b3fd09f07"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "f3d9e468db8df819fbbc2e0b3fd09f07"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "f2d83aae7b47f8fdf5568656f1bbe5b3"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "e7bb620a3979681628cc07864a5156b4"
  },
  {
    "url": "use-case/index.html",
    "revision": "74827e4aafa524cf18e898f1629f9eea"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "239aa5a02a63be806420e1e5869da3c5"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "c3341a91b9f5225943537e63792db34e"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "b482dce45f076f75341aee35b90061cb"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "e72ae2ff697dca888457b4dcdc6a19ae"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "aa8fe1a0909c3baf6165c456a19a7a19"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "2581b6c2059459cfd321fd1db0ade28f"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "f9983cdabe27222d3ffc4586fe25430b"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "98b8e1ceac14ee8d5bd405fe8fc1b2bc"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "7cab67261ee93a6b1d2b1d17ae9a0d1d"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "dce071498a7e6a5cfb838d40dfe6e1f0"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "1f555f75848699fec74e97564ed9a5fd"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "0bc3c58b424be3a4d0d13e902547c1bb"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "71a1fb4c554ad3e00e29b80d046e6d36"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "0bc3c58b424be3a4d0d13e902547c1bb"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "01d173e0422baddd75b00de0b4b35462"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "93fb8e4e14d63f84cf05c81a2741ab4d"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "38c26e564be72f3a76ffd831bac943b5"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "93fb8e4e14d63f84cf05c81a2741ab4d"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "ba6a0b0adc538d98ce70957419538249"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "f69db15b51ecbbd57a3654e258bf06a8"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "ba6a0b0adc538d98ce70957419538249"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "93fb8e4e14d63f84cf05c81a2741ab4d"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "b3391712ffa3c5f3863ed8a5ac227452"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "175578a328f9f98028efc838bf69bb37"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "98afe0b0e87fce562e33f5ceb1d898f8"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "93fb8e4e14d63f84cf05c81a2741ab4d"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "93fb8e4e14d63f84cf05c81a2741ab4d"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "80ed3a67a72f786f60699c814e4de417"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "4e0c48364414ee7fd10481aae13d2028"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "93fb8e4e14d63f84cf05c81a2741ab4d"
  }
]);