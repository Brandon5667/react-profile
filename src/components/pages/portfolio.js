import React from "react";

export default function Portfolio() {
    return (
        <div className="margin">
            <div className="web-app-cards row">
                <div className="app-card">
                    <div className="web-app">
                        <div className="card-image">
                            <figure className="image is-6by3">
                                <a href='https://brandon5667.github.io/peak-fitness/'>
                                    <img src={require('../images/peakfitnessscreenshot.png')} alt="Placeholderimage">
                                    </img></a>
                            </figure>
                            <div />
                            <div className="card-content">
                                <div className="media">

                                    <div className="media-content">
                                        <p className="title is-4">Peak Fitness</p>
                                        <p className="subtitle is-6">Find a bike Trail</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Peak Fitness is a web app designed to help you find a bike trail
                                    and check the local weather with one click.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="web-app">
                        <div className="card-image">
                            <figure className="image is-6by3">
                                <a href="https://cash4cache.herokuapp.com/">
                                    <img src={require('../images/cash4cachescreenshot.png')} alt="cash4cache screenshot">
                                    </img></a>
                            </figure>
                            <div />
                            <div className="card-content">
                                <div className="media">

                                    <div className="media-content">
                                        <p className="title is-4">Cash4Cache</p>
                                        <p className="subtitle is-6">Site to trade PC Hardware</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Find people to trade your unused pc gear with.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="web-app">
                        <div className="card-image">
                            <figure className="image is-6by3">
                                <a href='https://brandon5667-note-taker.herokuapp.com/'>
                                    <img src={require('../images/notetakerscreenshot.png')} alt="Placeholderimage">
                                    </img></a>
                            </figure>
                            <div />
                            <div className="card-content">
                                <div className="media">

                                    <div className="media-content">
                                        <p className="title is-4">Note Taker</p>
                                        <p className="subtitle is-6">Note it don't forget it</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Note Taker is a App designed to help you remember the importent stuff
                                    by noting it save your notes and delete them when your done.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="web-app">
                        <div className="card-image">
                            <figure className="image is-6by3">
                                <a href='https://brandon5667.github.io/weather-dashboard/'>
                                    <img src={require('../images/weatherappscreenshot.png')} alt="Weather App">
                                    </img></a>
                            </figure>
                            <div />
                            <div className="card-content">
                                <div className="media">

                                    <div className="media-content">
                                        <p className="title is-4">Weather Dashboard</p>
                                        <p className="subtitle is-6">Find the weather</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Weather Dashboard allows you to find the weather anywhere in the US
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="web-app">
                        <div className="card-image">
                            <figure className="image is-6by3">
                                <a href='https://brandon5667.github.io/weather-dashboard/'>
                                    <img src={require('../images/textediterscreenshot.png')} alt="Weather App">
                                    </img></a>
                            </figure>
                            <div />
                            <div className="card-content">
                                <div className="media">

                                    <div className="media-content">
                                        <p className="title is-4">Text Editter</p>
                                        <p className="subtitle is-6">Write some text</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Edit your Text
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="web-app">
                        <div className="card-image">
                            <figure className="image is-6by3">
                                <a href='https://brandon5667.github.io/weather-dashboard/'>
                                    <img src={require('../images/weatherappscreenshot.png')} alt="Weather App">
                                    </img></a>
                            </figure>
                            <div />
                            <div className="card-content">
                                <div className="media">

                                    <div className="media-content">
                                        <p className="title is-4">Weather Dashboard</p>
                                        <p className="subtitle is-6">Find the weather</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Weather Dashboard allows you to find the weather anywhere in the US
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}