import React, {Fragment, useState, useEffect} from 'react'
import { css } from 'emotion'
import { TimelineMax, Power2 } from "gsap/all";

export const Testimonial = () => {

    const timeLine = new TimelineMax({ paused: true });

    let animation;

    useEffect(() => {
        timeLine
        .from(animation, 0.4, {
        autoAlpha: 0,
        delay: 0.15,
        ease: Power2.easeIn,
        x: 25,
        })

        timeLine.play();
    }, [timeLine, animation]);

    const quotes = {
        0: {
            client: "Sebastian",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Ut sem nulla pharetra diam sit amet nisl suscipit. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate.",
            avatar: "https://i.pravatar.cc/150?img=8"
        },
        1: {
            client: "Peter",
            quote: "I had an amazing trip with Js-boatcharter",
            avatar: "https://i.pravatar.cc/150?img=13"
        },
        2: {
            client: "Frederik",
            quote: "I had an amazing trip with Js-boatcharter",
            avatar: "https://i.pravatar.cc/150?img=12"
        },
        3: {
            client: "Ole",
            quote: "I had an amazing trip with Js-boatcharter",
            avatar: "https://i.pravatar.cc/150?img=14"
        }
    }

    const [current, setCurrent] = useState(quotes[0]);

    const [active, setActive] = useState(0);

    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }

    return (
        <Fragment>
            <section id="testimonial" className="frontpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" ref={div => (animation = div)}>
                            <div className="avatar"><img src={current.avatar} alt="avatar" /></div>
                            <div className="quotes">
                                <h5>"{current.quote}"</h5>
                                <p>{current.client}</p>
                            </div>
                            
                        </div>
                        <div className={css`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                                span {
                                    height: 20px;
                                    width: 20px;
                                    margin: 0 3px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    cursor: pointer;
                                }

                                span::before {
                                    content: "";
                                    height: 6px;
                                    width: 6px;
                                    background-color: #d4d4d4;
                                    border-radius: 50%;
                                    transition: background-color 0.3s ease;
                                }

                                span:hover::before {
                                    background-color: #45454d;
                                }

                                span[data-quote="${active}"]::before {
                                    background-color: #45454d;
                                }

                            `}>
                                {Object.keys(quotes).map(index => (
                                    <span 
                                    onClick={event => handleSetClick(event)}
                                    data-quote={index}
                                    key={index}
                                    />
                                ))}
                            </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
