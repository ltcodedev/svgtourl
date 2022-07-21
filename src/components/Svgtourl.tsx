import React, { useState, useEffect, useRef } from "react";
import { i18n } from "../translate/i18next";

const SVGToUrl = () => {
    const [applicationName] = useState(i18n.t("titles.appName"));
    const [contrastBackground] = useState(["white", "silver", "black"]);
    const [resultDemo, setResultDemo] = useState("");
    const [initTextarea, setInitTextarea] = useState("");
    const [resultTextarea, setResultTextarea] = useState("");
    const [quotes, setQuotes] = useState({ level1: '"', level2: "'" });
    const [externalQuotesValue, setExternalQuotesValue] = useState("double");
    const [resultCssTextarea, setResultCssTextarea] = useState("");
    const [contrastButtonCurrent, setContrastButtonCurrent] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [urlResult, setUrlResult] = useState("");

    const demoRef = useRef(null);

    const contrastButtonsSetCurrent = (button) => {
    const classCurrent = "contrast-button--current";

    if (contrastButtonCurrent) {
        contrastButtonCurrent.classList.remove(classCurrent);
    }

    setBackgroundColor(button.dataset.color);
    button.classList.add(classCurrent);
    setContrastButtonCurrent(() => button);
    }

    const switchBackground = (event) => {
        contrastButtonsSetCurrent(event.target);
    };

    const getResults = () => {
        let namespaced = addNameSpace(initTextarea);
        let escaped = encodeSVG(namespaced);
        setResultTextarea(escaped);
        let resultCss = `background-image: url(${quotes.level1}data:image/svg+xml,${escaped}${quotes.level1});`;
        setUrlResult(`data:image/svg+xml,${escaped}`);
        setResultCssTextarea(resultCss);
        setResultDemo(resultCss);
    };

    useEffect(() => {
        getResults();
    }, [initTextarea]);

    useEffect(() => {
        getQuotes();
    }, [externalQuotesValue]);

    useEffect(() => {
        getResults();
    }, [quotes]);

    useEffect(() => {
        if(demoRef.current){
            demoRef.current.setAttribute("style", resultDemo);
        }
    }, [resultDemo]);

    // useEffect(() => {
    //     getResults();
    // }, [resultTextarea]);

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
        setQuotes(() => {
            return {
                level1: externalQuotesValue === "double" ? double : single,
                level2: externalQuotesValue === "double" ? single : double,
            }
        });
    };

    // Set example

    const showExample = () => {
        setInitTextarea(() => `<svg><circle r="50" cx="50" cy="50" fill="tomato"/><circle r="41" cx="47" cy="50" fill="orange"/><circle r="33" cx="48" cy="53" fill="gold"/><circle r="25" cx="49" cy="51" fill="yellowgreen"/><circle r="17" cx="52" cy="50" fill="lightseagreen"/><circle r="9" cx="55" cy="48" fill="teal"/></svg>`);
        getResults();
    };

    const changeValueCode = () => {
        setResultTextarea(encodeSVG(initTextarea));
    };

    const keyupChengeCode = () => {
        getResults();
    };

    // Switch quotes
    //----------------------------------------

    const switchQuotes = (value) => {
        setExternalQuotesValue(() => value); 
    }

    // Tabs Actions
    //----------------------------------------

    let expandedClass = "expanded";

    function toggleExpanders(e){
        if(e.target.localName === 'dt'){
            let parent = e.target.parentNode;
            let expanded = parent.querySelector("." + expandedClass);
            expanded.classList.toggle("hidden");
            e.target.classList.toggle("opened");
        }
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
                                    checked={externalQuotesValue === "single"}
                                    onChange={(event) => {
                                        switchQuotes(event.target.value);
                                    }}
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
                                    checked={externalQuotesValue === "double"}
                                    onChange={(event) => {
                                        switchQuotes(event.target.value);
                                    }}
                                />
                                <span className="options__text">double</span>
                            </label>
                        </div>

                        <dl className="about">
                            <dt onClick={toggleExpanders} className="expander">About tool</dt>
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
                            <button className="button-example" onClick={showExample}>Example</button>
                            <textarea
                                name="init"
                                id="init"
                                spellCheck="false"
                                value={initTextarea}
                                onChange={event => {
                                    let { value } = event.target
                                    setInitTextarea(() => value);
                                }}
                                onKeyUp={keyupChengeCode}
                            ></textarea>
                        </div>

                        <div className="container container--right container container--result">
                            <h4>Take encoded:</h4>
                            <textarea
                                name="result"
                                id="result"
                                spellCheck="false"
                                value={resultTextarea}
                                onChange={event => {
                                    let { value } = event.target
                                    setResultTextarea(() => value);
                                }}
                                disabled
                            ></textarea>
                        </div>
                    </div>

                    <div className="containers">
                        <div className="container container--left container container--result-css">
                            <h4>Ready for CSS:</h4>
                            <textarea
                                name="result-css"
                                id="result-css"
                                spellCheck="false"
                                value={resultCssTextarea}
                                disabled
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
                                            className={`contrast-button contrast-button--${button}`}
                                            data-color={button}
                                            title="button"
                                            onClick={switchBackground}
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
                                style={{ backgroundColor: backgroundColor }}
                            >
                                <div
                                    id="demo"
                                    className="demo"
                                    ref={demoRef}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="containers">
                        <div className="container container--left container container--result-url">
                            <h4>Ready for URL:</h4>
                            <textarea
                                name="result-url"
                                id="result-url"
                                spellCheck="false"
                                value={urlResult}
                                disabled
                            ></textarea>
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
