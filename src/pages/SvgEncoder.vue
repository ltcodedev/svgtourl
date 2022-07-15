<template>
  <div class="wrapper">
    <header class="header">
      <h1>{{ applicationName }}</h1>
    </header>

    <main>
      <div class="panel">
        <div class="options">
          External quotes:
          <label class="options__label">
            <input
              type="radio"
              value="single"
              name="quotes"
              class="options__input visuallyhidden"
            />
            <span class="options__text">single</span>
          </label>

          <span class="options__middle-word">/</span>

          <label class="options__label">
            <input
              type="radio"
              value="double"
              name="quotes"
              class="options__input visuallyhidden"
              checked
            />
            <span class="options__text">double</span>
          </label>
        </div>

        <dl class="about">
          <dt class="expander">About tool</dt>
          <dd class="expanded hidden">
            <p>
              We can use SVG in CSS via data URI, but without encoding it works
              only in Webkit based browsers. If encode SVG using
              <code>encodeURIComponent()</code> it will work everywhere.
            </p>

            <p>
              SVG must have attribute <strong>xmlns</strong> like this:
              <code>xmlns='http://www.w3.org/2000/svg'</code>. If it doesn't
              exist, it will be added automagically.
            </p>

            <p>
              Encoded SVG can be used in <code>background</code> (<a
                href="http://codepen.io/collection/DyJRrY/"
                >demos</a
              >) and <code>border-image</code> (<a
                href="http://codepen.io/yoksel/full/GjgYgj/"
                >demo</a
              >).
            </p>
          </dd>
        </dl>
      </div>

      <div class="containers">
        <div class="container container--left container container--init">
          <h4>Insert your SVG:</h4>
          <button class="button-example" @click="showExample">Example</button>
          <textarea name="init" id="init" spellcheck="false" v-model="valueCodes" @change="changeValueCode"></textarea>
        </div>

        <div class="container container--right container container--result">
          <h4>Take encoded:</h4>
          <textarea name="result" id="result" spellcheck="false"></textarea>
        </div>
      </div>

      <div class="containers">
        <div class="container container--left container container--result-css">
          <h4>Ready for CSS:</h4>
          <textarea
            name="result-css"
            id="result-css"
            spellcheck="false"
            v-model="resultTextarea"
          ></textarea>
        </div>

        <div class="container container--right container container--demo">
          <h4>Preview:</h4>

          <div class="contrast-buttons">
            Background:
            <button
              type="button"
              class="contrast-button contrast-button--white"
              data-color="white"
              title="White"
            >
              <span class="visuallyhidden">White</span>
            </button>
            <button
              type="button"
              class="contrast-button contrast-button--silver"
              data-color="silver"
              title="Silver"
            >
              <span class="visuallyhidden">Silver</span>
            </button>
            <button
              type="button"
              class="contrast-button contrast-button--black"
              data-color="black"
              title="Black"
            >
              <span class="visuallyhidden">Black</span>
            </button>
          </div>

          <div class="demo-wrapper">
            <div id="demo" class="demo"></div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <a href="https://github.com/webcolmeia/svgtourl" target="_blank"
        >Project on GitHub</a
      >
      <a href="https://webcolmeia.com.br" target="_blank">Web Colmeia</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SvgEncoder",
  data() {
    return {
      applicationName: "URL-encoder for SVG",
      initTextarea: '',
      resultTextarea: '',
    };
  },

  methods: {
    getResults(){
      if (this.initTextarea != '') {
        return;
      }

      var namespaced = addNameSpace(initTextarea.value);
      var escaped = encodeSVG(namespaced);
      this.resultTextarea = escaped;
      var resultCss = `background-image: url(${quotes.level1}data:image/svg+xml,${escaped}${quotes.level1});`;
      this.resultCssTextarea = resultCss;
      resultDemo.setAttribute("style", resultCss);
    },

    encodeSVG(data) {
      // Use single quotes instead of double to avoid encoding.
      const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
      if (externalQuotesValue === "double") {
        data = data.replace(/"/g, "'");
      } else {
        data = data.replace(/'/g, '"');
      }

      data = data.replace(/>\s{1,}</g, "><");
      data = data.replace(/\s{2,}/g, " ");

      return data.replace(symbols, encodeURIComponent);
    },

    // Set example
    showExample() {
      this.initTextarea = `<svg>
        <circle r="50" cx="50" cy="50" fill="tomato"/>
        <circle r="41" cx="47" cy="50" fill="orange"/>
        <circle r="33" cx="48" cy="53" fill="gold"/>
        <circle r="25" cx="49" cy="51" fill="yellowgreen"/>
        <circle r="17" cx="52" cy="50" fill="lightseagreen"/>
        <circle r="9" cx="55" cy="48" fill="teal"/>
      </svg>`;
      this.getResults();
    },

    changeValueCode(){
      this.resultTextarea = this.encodeSVG(this.initTextarea);
    },

    keyupChengeCode(){
      this.getResults();
    }
  },

  mounted() {
    var doc = document;

    var initTextarea = doc.querySelector("#init");
    var resultTextarea = doc.querySelector("#result");

    var resultCssTextarea = doc.querySelector("#result-css");
    var resultDemo = doc.querySelector("#demo");
    var demoWrapper = doc.querySelector(".demo-wrapper");
    var contrastButtons = doc.querySelectorAll(".contrast-button");
    var contrastButtonCurrent = null;
    var backgroundColor = "";

    var expanders = doc.querySelectorAll(".expander");
    var expandedClass = "expanded";
    var demoContrastClass = "demo-contrast-on";

    const quotesInputs = document.querySelectorAll(".options__input");
    let externalQuotesValue = document.querySelector(
      ".options__input:checked"
    ).value;
    let quotes = getQuotes();

    //const buttonExample = document.querySelector(".button-example");

    // Textarea Actions
    //----------------------------------------

    function getResults() {
      
    }

    // Tabs Actions
    //----------------------------------------

    for (var i = 0; i < expanders.length; i++) {
      var expander = expanders[i];

      expander.onclick = function () {
        var parent = this.parentNode;
        var expanded = parent.querySelector("." + expandedClass);
        expanded.classList.toggle("hidden");
        this.classList.toggle("opened");
      };
    }

    // Switch quotes
    //----------------------------------------

    quotesInputs.forEach((input) => {
      input.addEventListener("input", function () {
        externalQuotesValue = this.value;
        quotes = getQuotes();
        getResults();
      });
    });

    // Demo Background Switch
    //----------------------------------------

    function contrastButtonsSetCurrent(button) {
      const classCurrent = "contrast-button--current";

      if (contrastButtonCurrent) {
        contrastButtonCurrent.classList.remove(classCurrent);
      }

      backgroundColor = button.dataset.color;
      contrastButtonCurrent = button;
      button.classList.add(classCurrent);
    }

    contrastButtons.forEach((button) => {
      if (!backgroundColor) {
        contrastButtonsSetCurrent(button);
      }

      button.addEventListener("click", function () {
        contrastButtonsSetCurrent(this);
        demoWrapper.style.background = backgroundColor;
      });
    });

    // Namespace
    //----------------------------------------

    function addNameSpace(data) {
      if (data.indexOf("http://www.w3.org/2000/svg") < 0) {
        data = data.replace(
          /<svg/g,
          `<svg xmlns=${quotes.level2}http://www.w3.org/2000/svg${quotes.level2}`
        );
      }

      return data;
    }

    // Encoding
    //----------------------------------------

    // Get quotes for levels
    //----------------------------------------

    function getQuotes() {
      const double = `"`;
      const single = `'`;

      return {
        level1: externalQuotesValue === "double" ? double : single,
        level2: externalQuotesValue === "double" ? single : double
      };
    }

    // Common
    //----------------------------------------

    function out(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

BODY {
  font: 16px/1.4 "Trebuchet MS", Arial, sans-serif;
  color: #000;
}

A {
  color: steelblue;
}

H1 {
  font: 2em/1.4 Georgia, serif;
  text-align: center;
}

H4 {
  margin: 0;
  margin-bottom: 0.15em;
  font: 1.3em/1.4 Georgia, serif;
}

P {
  margin: 1.2rem 0;
}

TEXTAREA {
  width: 100%;
  height: 150px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 13px;
  font-family: monospace;
}

CODE {
  padding: 0 3px;
  background: #eee;
  border-radius: 5px;
  text-shadow: 1px 1px 0 white;
  font: 14px/1.4 monospace;
  color: #333;
}

CODE I {
  font-style: italic;
  color: black;
}

DL,
DD,
DT {
  margin: 0;
}
DL {
  text-align: right;
}
DT {
  border-bottom: 1px dashed;
  display: inline-block;
  line-height: 1;
  color: steelblue;
  cursor: pointer;
}
DT:after {
  content: "";
  display: inline-block;
  border: 0 solid transparent;
  border-width: 8px 4px 0;
  border-top-color: currentColor;
  border-bottom-color: currentColor;
  margin-left: 5px;
}
.opened:after {
  border-width: 0 4px 8px;
}
DD {
  text-align: left;
}

.hidden {
  display: none;
}

.visuallyhidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.wrapper {
  width: 650px;
  margin: 1.5rem auto 4rem;
}

.header {
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}
.header:before {
  content: "";
  display: table;
  width: 100%;
  clear: both;
}

.langs {
  position: absolute;
  top: 0;
  right: 0;
  margin: auto;
  list-style-type: none;
}
.langs__item {
  display: inline-block;
}
.langs__link--current {
  color: #000;
}

.footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #ccc;
}

.panel {
  position: relative;
  z-index: 1;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
}

.options {
  position: relative;
}

.options__middle-word {
  vertical-align: middle;
  color: #aaa;
}

.options__text {
  display: inline-block;
  border-bottom: 1px dashed;
  color: steelblue;
  cursor: pointer;
}
.options__input:checked + .options__text {
  border: 0;
  color: inherit;
  cursor: default;
}

.expander {
  position: relative;
  z-index: 2;
}

.expanded {
  position: absolute;
  top: -15px;
  right: -15px;
  left: -15px;
  padding: 2rem 1.5rem 1rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
}

.button-example {
  padding: 0;
  border: 0;
  border-bottom: 1px dashed;
  line-height: 1;
  align-self: center;
  font: inherit;
  font-size: 14px;
  color: steelblue;
  cursor: pointer;
}

.containers {
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container {
  position: relative;
  width: 48%;
  margin-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.demo-wrapper {
  width: 100%;
  border: 1px dashed rgba(0, 0, 0, 0.25);
}
.demo {
  height: 150px;
  background-repeat: no-repeat;
}

.contrast-buttons {
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;
}
.contrast-button {
  display: block;
  width: 2em;
  height: 2em;
  margin-left: 5px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  outline: none;
  cursor: pointer;
}

.contrast-button--current {
  box-shadow: 0 0 0 3px steelblue;
}
.contrast-button:active {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.25);
}

.contrast-button--white {
  background: white;
}
.contrast-button--silver {
  background: silver;
}
.contrast-button--black {
  background: black;
}
</style>