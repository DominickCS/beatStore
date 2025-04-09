"use client";
import React, { Component, createRef } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

// Global array to track all player instances
let playerList = [];

export default class BeatPlayer extends Component {
  constructor(props) {
    super(props);
    this.classInstance = createRef();

    this.state = {
      playing: false,
    };
  }

  componentDidMount() {
    playerList.push({
      ref: this.classInstance,
      instance: this,
      id: this.props.id,
    });
  }

  componentWillUnmount() {
    playerList = playerList.filter((player) => player.instance !== this);
  }

  handlePlayPause = () => {
    const newPlayingState = !this.state.playing;

    if (newPlayingState) {
      for (let player of playerList) {
        if (player.instance !== this && player.instance.state.playing) {
          player.instance.setState({ playing: false });
        }
      }
    }

    this.setState({ playing: newPlayingState });
  };

  render() {
    const { playing } = this.state;

    return (
      <>
        <div>
          <div
            className={
              playing
                ? "opacity-100 scale-120 p-8 duration-300 "
                : "opacity-30 hover:opacity-70 duration-300"
            }
          >
            <Image
              onClick={this.handlePlayPause}
              src={`/img/beat${this.props.id}.jpg`}
              width={300}
              height={300}
              alt="album art for the selected beat"
              className={
                playing
                  ? "shadow-2xl shadow-blue-400/35 border border-white beatImg"
                  : "beatImg"
              }
            />
            <p className="text-2xl text-center mt-4">{this.props.name}</p>
            <ReactPlayer
              ref={this.classInstance}
              playing={playing}
              height={1}
              url={`/test${this.props.id}.mp3`}
              id={this.props.id}
              onEnded={() => this.setState({ playing: false })}
              onError={() => this.setState({ playing: false })}
            />
          </div>
          <div className="buyBtnContainer">
            <button className="buyBtn">BUY THIS BEAT</button>
          </div>
        </div>
      </>
    );
  }
}
