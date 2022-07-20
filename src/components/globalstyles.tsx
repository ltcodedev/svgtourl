import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
    font-family: -apple-system,"system-ui",Segoe UI,roboto,helvetica,arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  html,
  body {
    color: ${({ theme }) => theme.colors.text};
    padding: 0;
    margin: 0;
    font-family: -apple-system,"system-ui",Segoe UI,roboto,helvetica,arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }

  a {
    color: inherit;
    text-decoration: none;
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
`

export default GlobalStyle
