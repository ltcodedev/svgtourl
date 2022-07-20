import React, { useState, useEffect } from "react";

const SVGToUrl = () => {
    const [applicationName] = useState("SVGToUrl");
    const [contrastBackground] = useState(["white", "silver", "black"]);
    const [resultDemo, setResultDemo] = useState("");
    const [initTextarea, setInitTextarea] = useState("");
    const [resultTextarea, setResultTextarea] = useState("");
    const [quotes, setQuotes] = useState({ level1: "", level2: "" });
    const [externalQuotesValue, setExternalQuotesValue] = useState("double");
    const [resultCssTextarea, setResultCssTextarea] = useState("");

    const switchBackground = () => {};

    const getResults = () => {
        if (!initTextarea) {
            return;
        }

        let namespaced = addNameSpace(initTextarea);
        let escaped = encodeSVG(namespaced);
        setResultTextarea(escaped);
        let resultCss = `background-image: url(${quotes.level1}data:image/svg+xml,${escaped}${quotes.level1});`;
        setResultCssTextarea(resultCss);
        setResultDemo(resultCss);
    };

    const addNameSpace = (data) => {
        if (data.indexOf("http://www.w3.org/2000/svg") < 0) {
            data = data.replace(
                /<svg/g,
                `<svg xmlns=${quotes.level2}http://www.w3.org/2000/svg${quotes.level2}`
            );
        }

        return data;
    };

    const encodeSVG = (data) => {
        const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
        if (externalQuotesValue === "double") {
            data = data.replace(/"/g, "'");
        } else {
            data = data.replace(/'/g, '"');
        }

        data = data.replace(/>\s{1,}</g, "><");
        data = data.replace(/\s{2,}/g, " ");

        return data.replace(symbols, encodeURIComponent);
    };

    // Get quotes for levels
    //----------------------------------------

    const getQuotes = () => {
        const double = `"`;
        const single = `'`;

        return {
            level1: externalQuotesValue === "double" ? double : single,
            level2: externalQuotesValue === "double" ? single : double,
        };
    };

    // Set example
    const showExample = () => {
        setInitTextarea(
            `<svg><circle r="50" cx="50" cy="50" fill="tomato"/><circle r="41" cx="47" cy="50" fill="orange"/><circle r="33" cx="48" cy="53" fill="gold"/><circle r="25" cx="49" cy="51" fill="yellowgreen"/><circle r="17" cx="52" cy="50" fill="lightseagreen"/><circle r="9" cx="55" cy="48" fill="teal"/></svg>`
        );
        getResults();
    };

    const changeValueCode = () => {
        setResultTextarea(encodeSVG(initTextarea));
    };

    const keyupChengeCode = () => {
        getResults();
    };

    var expanders = document.querySelectorAll(".expander");
    var expandedClass = "expanded";

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

    // Common
    //----------------------------------------

//     let myView = new EditorView({
//       doc: "hello",
//       extensions: [keymap.of(defaultKeymap), html()],
//       parent: document.querySelector(".container--init"),
//       lineNumbers: true,
//       gutter: true,
//       lineWrapping: true,
//     })
//   }

    useEffect(() => {
        setQuotes(() => getQuotes());
    }, []);

    return (
        <>
            <div className="wrapper">
                <header className="header">
                    <h1>{applicationName}</h1>
                </header>

                <main>
                    <div className="panel">
                        <div className="options">
                            External quotes:
                            <label className="options__label">
                                <input
                                    type="radio"
                                    value="single"
                                    name="quotes"
                                    className="options__input visuallyhidden"
                                    v-model="externalQuotesValue"
                                />
                                <span className="options__text">single</span>
                            </label>
                            <span className="options__middle-word">/</span>
                            <label className="options__label">
                                <input
                                    type="radio"
                                    value="double"
                                    name="quotes"
                                    className="options__input visuallyhidden"
                                    checked
                                    v-model="externalQuotesValue"
                                />
                                <span className="options__text">double</span>
                            </label>
                        </div>

                        <dl className="about">
                            <dt className="expander">About tool</dt>
                            <dd className="expanded hidden">
                                <p>
                                    We can use SVG in CSS via data URI, but
                                    without encoding it works only in Webkit
                                    based browsers. If encode SVG using
                                    <code>encodeURIComponent()</code> it will
                                    work everywhere.
                                </p>

                                <p>
                                    SVG must have attribute{" "}
                                    <strong>xmlns</strong> like this:
                                    <code>
                                        xmlns='http://www.w3.org/2000/svg'
                                    </code>
                                    . If it doesn't exist, it will be added
                                    automagically.
                                </p>

                                <p>
                                    Encoded SVG can be used in{" "}
                                    <code>background</code> (
                                    <a href="http://codepen.io/collection/DyJRrY/">
                                        demos
                                    </a>
                                    ) and <code>border-image</code> (
                                    <a href="http://codepen.io/yoksel/full/GjgYgj/">
                                        demo
                                    </a>
                                    ).
                                </p>
                            </dd>
                        </dl>
                    </div>

                    <div className="containers">
                        <div className="container container--left container container--init">
                            <h4>Insert your SVG:</h4>
                            <button className="button-example">Example</button>
                            <textarea
                                name="init"
                                id="init"
                                spellcheck="false"
                                v-model="initTextarea"
                            ></textarea>
                        </div>

                        <div className="container container--right container container--result">
                            <h4>Take encoded:</h4>
                            <textarea
                                name="result"
                                id="result"
                                spellcheck="false"
                                v-model="resultTextarea"
                            ></textarea>
                        </div>
                    </div>

                    <div className="containers">
                        <div className="container container--left container container--result-css">
                            <h4>Ready for CSS:</h4>
                            <textarea
                                name="result-css"
                                id="result-css"
                                spellcheck="false"
                                v-model="resultCssTextarea"
                            ></textarea>
                        </div>

                        <div className="container container--right container container--demo">
                            <h4>Preview:</h4>

                            <div className="contrast-buttons">
                                Background:
                                {contrastBackground.map((button, index) => {
                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            className="['contrast-button', `contrast-button--${button}`]"
                                            data-color="button"
                                            title="button"
                                            //onClick={switchBackground()}
                                        >
                                            <span className="visuallyhidden">
                                                {button}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div
                                className="demo-wrapper"
                                //style={{ backgroundColor: backgroundColor }}
                            >
                                <div
                                    id="demo"
                                    className="demo"
                                    //style={resultDemo}
                                ></div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="footer">
                    <a
                        href="https://github.com/webcolmeia/svgtourl"
                        target="_blank"
                    >
                        Project on GitHub
                    </a>
                    <a href="https://webcolmeia.com.br" target="_blank">
                        Web Colmeia
                    </a>
                </footer>
            </div>
        </>
    );
};

export default SVGToUrl;
