import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.scss";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 2000);
    });
  }

  render() {
    const { name, background, paletteId, id, showLink } = this.props;
    const { copied } = this.state;
    console.log(chroma(background).luminance());
    const isDarkColor = chroma(background).luminance() <= 0.1;
    const isLightColor = chroma(background).luminance() >= 0.45;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-message ${copied && "show"}`}>
            <h1 className={`${isLightColor && "dark-text-suppl"}`}>copied!</h1>
            <p className={`${isLightColor && "dark-text"}`}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
