if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$a = {
    data() {
      return {
        activeclass: "page"
      };
    },
    onLoad() {
    },
    methods: {
      enter() {
        this.activeclass = "page puff-out-center";
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/scene2_1/scene2_1"
          });
          this.activeclass = "page";
        }, 2e3);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass($data.activeclass)
      },
      [
        vue.createElementVNode("view", { class: "guid" }, "冒险者协会"),
        vue.createElementVNode("view", { class: "yyz" }, "营业中"),
        vue.createElementVNode("view", {
          class: "enter",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.enter && $options.enter(...args)),
          "hover-class": "hoverButton",
          "hover-stay-time": "100",
          "hover-start-time": "0"
        }, "进入 ")
      ],
      2
      /* CLASS */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$7], ["__file", "D:/前端/毕业季/--2023/pages/index/index.vue"]]);
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "scene6",
    setup(__props) {
      const tmpGoSeven = () => {
        uni.navigateTo({
          url: "/pages/scene7/scene7"
        });
      };
      vue.onMounted(() => {
        document.querySelector(".root");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "root" }, [
          vue.createElementVNode("view", { class: "top-part" }, [
            vue.createElementVNode("view", { class: "top-left" }, [
              vue.createElementVNode("view", { class: "forge-furnace" }),
              vue.createElementVNode("view", { class: "text-content" }, [
                vue.createElementVNode("text", null, "文案")
              ])
            ]),
            vue.createElementVNode("view", { class: "top-right" }, [
              vue.createElementVNode("view", { class: "virtual-box" }),
              vue.createElementVNode("view", { class: "boss-box" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bottom-part" }, [
            vue.createElementVNode("view", { class: "bottom-left" }, [
              vue.createElementVNode("view", { class: "weapon-box" }, [
                vue.createCommentVNode(" 武器栏 "),
                vue.createElementVNode("view", { class: "enchanted-slot" }, [
                  vue.createCommentVNode(" 附魔槽 ")
                ]),
                vue.createElementVNode("view", { class: "enchanted-slot" }, [
                  vue.createCommentVNode(" 附魔槽 ")
                ]),
                vue.createElementVNode("view", { class: "enchanted-slot" }, [
                  vue.createCommentVNode(" 附魔槽 ")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "bottom-right" }, [
              vue.createElementVNode("view", { class: "bottom-forge" }, [
                vue.createElementVNode("view", {
                  class: "choose-option",
                  onClick: tmpGoSeven
                })
              ])
            ])
          ])
        ]);
      };
    }
  });
  const PagesScene6Scene6 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-46e353ee"], ["__file", "D:/前端/毕业季/--2023/pages/scene6/scene6.vue"]]);
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "scene7",
    setup(__props) {
      const tmpGoEight = () => {
        uni.navigateTo({
          url: "/pages/scene8/scene8"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "root" }, [
          vue.createElementVNode("view", { class: "recv-people" }),
          vue.createElementVNode("view", { class: "risk-proof" }),
          vue.createElementVNode("view", {
            class: "recv-btn",
            onClick: tmpGoEight
          }, [
            vue.createElementVNode("text", null, "收下")
          ])
        ]);
      };
    }
  });
  const PagesScene7Scene7 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-90a1b07d"], ["__file", "D:/前端/毕业季/--2023/pages/scene7/scene7.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "root" }, [
      vue.createElementVNode("view", { class: "info-bar" }, [
        vue.createElementVNode("view", { class: "basic-info" }, [
          vue.createElementVNode("view", { class: "info-text" }, [
            vue.createElementVNode("text")
          ]),
          vue.createElementVNode("view", { class: "head-box" })
        ]),
        vue.createElementVNode("view", { class: "skill-info-one" }),
        vue.createElementVNode("view", { class: "skill-info-two" }),
        vue.createElementVNode("view", { class: "talent-info" }),
        vue.createElementVNode("view", { class: "enchant-info" })
      ]),
      vue.createElementVNode("view", { class: "bottom-bar" }, [
        vue.createElementVNode("view", { class: "save-png" }, [
          vue.createElementVNode("text", null, "保存至本地")
        ]),
        vue.createElementVNode("view", { class: "ready-btn" })
      ])
    ]);
  }
  const PagesScene8Scene8 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-0fa03097"], ["__file", "D:/前端/毕业季/--2023/pages/scene8/scene8.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        showNext: 0,
        name: "",
        attribute: "",
        career: "",
        school: ""
      };
    },
    methods: {
      goToMirror() {
        uni.navigateTo({
          url: "/pages/scene2_2/scene2_2"
        });
        this.showNext = 1;
      },
      gotoImage_3() {
        uni.navigateTo({
          url: "/pages/SceneThree/SceneThree"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page animate__animated animate__fadeIn" }, [
      vue.createElementVNode("view", { class: "text" }, "文案"),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { id: "name" }, [
          vue.createElementVNode("view", { class: "title" }, "姓名:"),
          vue.createTextVNode(),
          vue.createElementVNode("textarea", { class: "textInput" })
        ]),
        vue.createElementVNode("view", { id: "attribute" }, [
          vue.createElementVNode("view", { class: "title" }, "属性:"),
          vue.createTextVNode(),
          vue.createElementVNode("textarea", { class: "textInput" })
        ]),
        vue.createElementVNode("view", { id: "career" }, [
          vue.createElementVNode("view", { class: "title" }, "职业:"),
          vue.createTextVNode(),
          vue.createElementVNode("textarea", { class: "textInput" })
        ]),
        vue.createElementVNode("view", { id: "school" }, [
          vue.createElementVNode("view", { class: "title" }, "学院:"),
          vue.createTextVNode(),
          vue.createElementVNode("textarea", { class: "textInput" })
        ]),
        vue.createElementVNode("view", {
          class: "image",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goToMirror && $options.goToMirror(...args)),
          "hover-class": "hoverButton",
          "hover-stay-time": "100",
          "hover-start-time": "0"
        }),
        $data.showNext ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "next",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.gotoImage_3 && $options.gotoImage_3(...args)),
          "hover-class": "hoverButton",
          "hover-stay-time": "100",
          "hover-start-time": "0"
        }, "下一页")) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", { class: "tail" }, "独白")
    ]);
  }
  const PagesScene2_1Scene2_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/前端/毕业季/--2023/pages/scene2_1/scene2_1.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$5 = {
    data() {
      return {
        activeImage: "../../static/image/test.png",
        cloth: [],
        hair: [],
        cloth_1: [{
          src: "../../static/cloth/c1.png"
        }, {
          src: "../../static/cloth/c2.png"
        }, {
          src: "../../static/cloth/c3.png"
        }, {
          src: "../../static/cloth/c4.png"
        }],
        cloth_2: [{
          src: "../../static/cloth/c5.png"
        }, {
          src: "../../static/cloth/c6.png"
        }, {
          src: "../../static/cloth/c7.png"
        }, {
          src: "../../static/cloth/c8.png"
        }],
        hair_1: [{
          src: "../../static/face/h1.png"
        }, {
          src: "../../static/face/h2.png"
        }, {
          src: "../../static/face/h3.png"
        }, {
          src: "../../static/face/h4.png"
        }],
        hair_2: [{
          src: "../../static/face/h5.png"
        }, {
          src: "../../static/face/h6.png"
        }, {
          src: "../../static/face/h7.png"
        }, {
          src: "../../static/face/h8.png"
        }]
      };
    },
    methods: {
      gotoImage_1() {
        uni.navigateBack();
      },
      boy() {
        this.activeImage = "../../static/image/test.png";
        this.cloth = this.cloth_1;
        this.hair = this.hair_1;
      },
      girl() {
        this.activeImage = "../../static/image/test2.png";
        this.cloth = this.cloth_2;
        this.hair = this.hair_2;
      },
      selectCloth(e) {
        formatAppLog("log", "at pages/scene2_2/scene2_2.vue:98", e);
      },
      selectHair(e) {
        formatAppLog("log", "at pages/scene2_2/scene2_2.vue:101", e);
      }
    },
    mounted() {
      this.cloth = this.cloth_1;
      this.hair = this.hair_1;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page animate__animated animate__fadeIn" }, [
      vue.createElementVNode("view", { class: "upperSpace" }, [
        vue.createElementVNode("view", { class: "selections" }, [
          vue.createElementVNode("text", { class: "title" }, "性别："),
          vue.createElementVNode("view", { class: "gender" }, [
            vue.createElementVNode("view", {
              id: "boy",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.boy && $options.boy(...args)),
              "hover-class": "hoverButton",
              "hover-stay-time": "100",
              "hover-start-time": "0"
            }),
            vue.createElementVNode("view", {
              id: "girl",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.girl && $options.girl(...args)),
              "hover-class": "hoverButton",
              "hover-stay-time": "100",
              "hover-start-time": "0"
            })
          ]),
          vue.createElementVNode("text", { class: "title" }, "服装："),
          vue.createElementVNode("view", { class: "cloth" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.cloth, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  onClick: ($event) => $options.selectCloth(index),
                  key: index,
                  "hover-class": "hoverButton",
                  "hover-stay-time": "100",
                  "hover-start-time": "0"
                }, [
                  vue.createElementVNode("image", {
                    src: item.src
                  }, null, 8, ["src"])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("text", { class: "title" }, "发型："),
          vue.createElementVNode("view", { class: "hair" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.hair, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  onClick: ($event) => $options.selectHair(index),
                  src: item.src,
                  key: index,
                  "hover-class": "hoverButton",
                  "hover-stay-time": "100",
                  "hover-start-time": "0"
                }, [
                  vue.createElementVNode("image", {
                    src: item.src
                  }, null, 8, ["src"])
                ], 8, ["onClick", "src"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "image" }, [
          vue.createElementVNode("image", {
            class: "person",
            src: $data.activeImage
          }, null, 8, ["src"])
        ])
      ]),
      vue.createElementVNode("view", { class: "lowerSpace" }, [
        vue.createElementVNode("view", {
          class: "enter",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.gotoImage_1 && $options.gotoImage_1(...args)),
          "hover-class": "hoverButton",
          "hover-stay-time": "100",
          "hover-start-time": "0"
        }, "这就是我")
      ])
    ]);
  }
  const PagesScene2_2Scene2_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/前端/毕业季/--2023/pages/scene2_2/scene2_2.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        curStatus: 1,
        control1: [
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0]
        ],
        control2: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0]
        ],
        numbers: [0, 1, 2, 3],
        curStatus: 0,
        text: ["1", "2", "3", "4"],
        detail: "",
        ani: ["", "", ""],
        anim: ["", "", "", ""]
        //canBeSelect: [1,1,1,1],
      };
    },
    computed: {
      getPic0() {
        return {
          defaultColor: this.control1[0][0],
          no_one: this.control1[0][1],
          no_two: this.control1[0][2],
          no_three: this.control1[0][3],
          no_four: this.control1[0][4]
        };
      },
      getPic1() {
        return {
          defaultColor: this.control1[1][0],
          no_one: this.control1[1][1],
          no_two: this.control1[1][2],
          no_three: this.control1[1][3],
          no_four: this.control1[1][4]
        };
      },
      getPic2() {
        return {
          defaultColor: this.control1[2][0],
          no_one: this.control1[2][1],
          no_two: this.control1[2][2],
          no_three: this.control1[2][3],
          no_four: this.control1[2][4]
        };
      },
      getPic3() {
        return {
          defaultColor: this.control1[3][0],
          no_one: this.control1[3][1],
          no_two: this.control1[3][2],
          no_three: this.control1[3][3],
          no_four: this.control1[3][4]
        };
      },
      getP0() {
        return {
          num_1: this.control2[0][0],
          num_2: this.control2[0][1],
          num_3: this.control2[0][2],
          num_4: this.control2[0][3]
        };
      },
      getP1() {
        return {
          num_1: this.control2[1][0],
          num_2: this.control2[1][1],
          num_3: this.control2[1][2],
          num_4: this.control2[1][3]
        };
      },
      getP2() {
        return {
          num_1: this.control2[2][0],
          num_2: this.control2[2][1],
          num_3: this.control2[2][2],
          num_4: this.control2[2][3]
        };
      }
    },
    methods: {
      NextPage() {
        uni.navigateTo({
          url: "/pages/SceneThree_2/SceneThree_2"
        });
      },
      //换一组
      changeSet() {
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
          const randomIndex = Math.floor(Math.random() * this.numbers.length);
          const randomNumber = this.numbers[randomIndex];
          if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
          }
        }
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 4; j++) {
            this.control2[i][j] = 0;
          }
          this.control2[i][randomNumbers[i]] = 1;
        }
      },
      //判断是哪一个图片
      judge(arr) {
        let ans = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i])
            ans = i;
        }
        return ans;
      },
      //选择图片
      select(idx) {
        if (this.curStatus < 4) {
          let ID = this.judge(this.control2[idx]);
          ID++;
          this.control1[this.curStatus][0] = 0;
          this.control1[this.curStatus][ID] = 1;
          this.curStatus++;
          this.ani[idx] = "animate__animated animate__pulse";
          setTimeout(() => {
            this.ani[idx] = "";
          }, 1e3);
        }
      },
      //取消选择
      del(idx) {
        if (this.curStatus > 0 && idx == this.curStatus - 1) {
          let ID = this.judge(this.control1[idx]);
          this.control1[idx][ID] = 0;
          this.control1[idx][0] = 1;
          this.curStatus--;
          this.anim[idx] = "animate__animated animate__headShake";
          setTimeout(() => {
            this.anim[idx] = "";
          }, 1e3);
        }
      },
      //显示文案
      showText(idx) {
        let ID = this.judge(this.control2[idx]);
        this.detail = this.text[ID];
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "wrapper animate__animated animate__fadeIn" }, [
      vue.createCommentVNode("第一部分"),
      vue.createElementVNode("div", { class: "one item" }, [
        vue.createElementVNode(
          "div",
          { class: "text_box" },
          vue.toDisplayString($data.detail),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode("第二部分"),
      vue.createElementVNode("div", { class: "two item" }, [
        vue.createCommentVNode("技能框"),
        vue.createElementVNode("div", { class: "skill_box" }, [
          vue.createElementVNode("div", { class: "skill_wrapper" }, [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic0, $data.anim[0]]),
                onClick: _cache[0] || (_cache[0] = ($event) => $options.del(0))
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic1, $data.anim[1]]),
                onClick: _cache[1] || (_cache[1] = ($event) => $options.del(1))
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic2, $data.anim[2]]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.del(2))
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic3, $data.anim[3]]),
                onClick: _cache[3] || (_cache[3] = ($event) => $options.del(3))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ])
      ]),
      vue.createCommentVNode("第三部分"),
      vue.createElementVNode("div", { class: "three item" }, [
        vue.createElementVNode("div", { class: "buttom_wrapper" }, [
          vue.createElementVNode("button", {
            class: "page_btn",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.NextPage()),
            "hover-class": "hoverButton",
            "hover-stay-time": "100",
            "hover-start-time": "0"
          }, "下一页"),
          vue.createElementVNode("div", { class: "select_box" }, [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["select_item", $options.getP0, $data.ani[0]]),
                onClick: _cache[5] || (_cache[5] = ($event) => $options.select(0)),
                onLongpress: _cache[6] || (_cache[6] = ($event) => $options.showText(0))
              },
              null,
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["select_item", $options.getP1, $data.ani[1]]),
                onClick: _cache[7] || (_cache[7] = ($event) => $options.select(1)),
                onLongpress: _cache[8] || (_cache[8] = ($event) => $options.showText(1))
              },
              null,
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["select_item", $options.getP2, $data.ani[2]]),
                onClick: _cache[9] || (_cache[9] = ($event) => $options.select(2)),
                onLongpress: _cache[10] || (_cache[10] = ($event) => $options.showText(2))
              },
              null,
              34
              /* CLASS, HYDRATE_EVENTS */
            )
          ]),
          vue.createElementVNode("button", {
            class: "change_btn",
            "hover-class": "hoverButton",
            "hover-stay-time": "100",
            "hover-start-time": "0",
            onClick: _cache[11] || (_cache[11] = ($event) => $options.changeSet())
          }, "换一组")
        ])
      ])
    ]);
  }
  const PagesSceneThreeSceneThree = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/前端/毕业季/--2023/pages/SceneThree/SceneThree.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        curStatus: 1,
        control1: [
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0]
        ],
        control2: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0]
        ],
        numbers: [0, 1, 2, 3],
        curStatus: 0,
        text: ["1", "2", "3", "4"],
        detail: "",
        ani: ["", "", ""],
        anim: ["", "", "", ""]
        //canBeSelect: [1,1,1,1],
      };
    },
    computed: {
      getPic0() {
        return {
          defaultColor: this.control1[0][0],
          no_one: this.control1[0][1],
          no_two: this.control1[0][2],
          no_three: this.control1[0][3],
          no_four: this.control1[0][4]
        };
      },
      getPic1() {
        return {
          defaultColor: this.control1[1][0],
          no_one: this.control1[1][1],
          no_two: this.control1[1][2],
          no_three: this.control1[1][3],
          no_four: this.control1[1][4]
        };
      },
      getPic2() {
        return {
          defaultColor: this.control1[2][0],
          no_one: this.control1[2][1],
          no_two: this.control1[2][2],
          no_three: this.control1[2][3],
          no_four: this.control1[2][4]
        };
      },
      getPic3() {
        return {
          defaultColor: this.control1[3][0],
          no_one: this.control1[3][1],
          no_two: this.control1[3][2],
          no_three: this.control1[3][3],
          no_four: this.control1[3][4]
        };
      },
      getP0() {
        return {
          num_1: this.control2[0][0],
          num_2: this.control2[0][1],
          num_3: this.control2[0][2],
          num_4: this.control2[0][3]
        };
      },
      getP1() {
        return {
          num_1: this.control2[1][0],
          num_2: this.control2[1][1],
          num_3: this.control2[1][2],
          num_4: this.control2[1][3]
        };
      },
      getP2() {
        return {
          num_1: this.control2[2][0],
          num_2: this.control2[2][1],
          num_3: this.control2[2][2],
          num_4: this.control2[2][3]
        };
      }
    },
    methods: {
      NextPage() {
        uni.navigateTo({
          url: "/pages/SceneFive/SceneFive"
        });
      },
      //换一组
      changeSet() {
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
          const randomIndex = Math.floor(Math.random() * this.numbers.length);
          const randomNumber = this.numbers[randomIndex];
          if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
          }
        }
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 4; j++) {
            this.control2[i][j] = 0;
          }
          this.control2[i][randomNumbers[i]] = 1;
        }
      },
      //判断是哪一个图片
      judge(arr) {
        let ans = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i])
            ans = i;
        }
        return ans;
      },
      //选择图片
      select(idx) {
        if (this.curStatus < 4) {
          let ID = this.judge(this.control2[idx]);
          ID++;
          this.control1[this.curStatus][0] = 0;
          this.control1[this.curStatus][ID] = 1;
          this.curStatus++;
          this.ani[idx] = "animate__animated animate__pulse";
          setTimeout(() => {
            this.ani[idx] = "";
          }, 1e3);
        }
      },
      //取消选择
      del(idx) {
        if (this.curStatus > 0 && idx == this.curStatus - 1) {
          let ID = this.judge(this.control1[idx]);
          this.control1[idx][ID] = 0;
          this.control1[idx][0] = 1;
          this.curStatus--;
          this.anim[idx] = "animate__animated animate__headShake";
          setTimeout(() => {
            this.anim[idx] = "";
          }, 1e3);
        }
      },
      //显示文案
      showText(idx) {
        let ID = this.judge(this.control2[idx]);
        this.detail = this.text[ID];
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "wrapper animate__animated animate__fadeIn" }, [
      vue.createCommentVNode("第一部分"),
      vue.createElementVNode("div", { class: "one item" }, [
        vue.createElementVNode(
          "div",
          { class: "text_box" },
          vue.toDisplayString($data.detail),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode("第二部分"),
      vue.createElementVNode("div", { class: "two item" }, [
        vue.createCommentVNode("技能框"),
        vue.createElementVNode("div", { class: "skill_box" }, [
          vue.createElementVNode("div", { class: "skill_wrapper" }, [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic0, $data.anim[0]]),
                onClick: _cache[0] || (_cache[0] = ($event) => $options.del(0))
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic1, $data.anim[1]]),
                onClick: _cache[1] || (_cache[1] = ($event) => $options.del(1))
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic2, $data.anim[2]]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.del(2))
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["skill_item", $options.getPic3, $data.anim[3]]),
                onClick: _cache[3] || (_cache[3] = ($event) => $options.del(3))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ])
      ]),
      vue.createCommentVNode("第三部分"),
      vue.createElementVNode("div", { class: "three item" }, [
        vue.createElementVNode("div", { class: "buttom_wrapper" }, [
          vue.createElementVNode("button", {
            class: "page_btn",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.NextPage()),
            "hover-class": "hoverButton",
            "hover-stay-time": "100",
            "hover-start-time": "0"
          }, "下一页"),
          vue.createElementVNode("div", { class: "select_box" }, [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["select_item", $options.getP0, $data.ani[0]]),
                onClick: _cache[5] || (_cache[5] = ($event) => $options.select(0)),
                onLongpress: _cache[6] || (_cache[6] = ($event) => $options.showText(0))
              },
              null,
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["select_item", $options.getP1, $data.ani[1]]),
                onClick: _cache[7] || (_cache[7] = ($event) => $options.select(1)),
                onLongpress: _cache[8] || (_cache[8] = ($event) => $options.showText(1))
              },
              null,
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["select_item", $options.getP2, $data.ani[2]]),
                onClick: _cache[9] || (_cache[9] = ($event) => $options.select(2)),
                onLongpress: _cache[10] || (_cache[10] = ($event) => $options.showText(2))
              },
              null,
              34
              /* CLASS, HYDRATE_EVENTS */
            )
          ]),
          vue.createElementVNode("button", {
            class: "change_btn",
            "hover-class": "hoverButton",
            "hover-stay-time": "100",
            "hover-start-time": "0",
            onClick: _cache[11] || (_cache[11] = ($event) => $options.changeSet())
          }, "换一组")
        ])
      ])
    ]);
  }
  const PagesSceneThree_2SceneThree_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/前端/毕业季/--2023/pages/SceneThree_2/SceneThree_2.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {
      next() {
        uni.navigateTo({
          url: "/pages/scene6/scene6"
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "wrapper animate__animated animate__fadeIn",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.next())
    }, [
      vue.createCommentVNode(" 第一部分 "),
      vue.createElementVNode("div", { class: "one item" }, [
        vue.createElementVNode("div", { class: "person_box" }),
        vue.createElementVNode("button", { class: "change_btn" }, "换一组")
      ]),
      vue.createCommentVNode(" 第二部分 "),
      vue.createElementVNode("div", { class: "two item" }, [
        vue.createElementVNode("div", { class: "buttom_wrapper" }, [
          vue.createElementVNode("div", { class: "character_box no_one" }),
          vue.createElementVNode("div", { class: "character_box no_two" }),
          vue.createElementVNode("div", { class: "character_box no_three" }),
          vue.createElementVNode("div", { class: "character_box no_four" })
        ])
      ])
    ]);
  }
  const PagesSceneFiveSceneFive = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/前端/毕业季/--2023/pages/SceneFive/SceneFive.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "wrapper" }, [
      vue.createCommentVNode("第一部分"),
      vue.createElementVNode("div", { class: "one item" }, [
        vue.createElementVNode("div", { class: "person_box" })
      ]),
      vue.createCommentVNode("第二部分"),
      vue.createElementVNode("div", { class: "two item" }, [
        vue.createElementVNode("button", {
          class: "btn_box",
          "hover-class": "hoverButton",
          "hover-stay-time": "100",
          "hover-start-time": "0",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.changeSet())
        }, "咦！怎么回事")
      ])
    ]);
  }
  const PagesSceneNineSceneNine = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/前端/毕业季/--2023/pages/SceneNine/SceneNine.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/scene6/scene6", PagesScene6Scene6);
  __definePage("pages/scene7/scene7", PagesScene7Scene7);
  __definePage("pages/scene8/scene8", PagesScene8Scene8);
  __definePage("pages/scene2_1/scene2_1", PagesScene2_1Scene2_1);
  __definePage("pages/scene2_2/scene2_2", PagesScene2_2Scene2_2);
  __definePage("pages/SceneThree/SceneThree", PagesSceneThreeSceneThree);
  __definePage("pages/SceneThree_2/SceneThree_2", PagesSceneThree_2SceneThree_2);
  __definePage("pages/SceneFive/SceneFive", PagesSceneFiveSceneFive);
  __definePage("pages/SceneNine/SceneNine", PagesSceneNineSceneNine);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/前端/毕业季/--2023/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
