/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useRef, useState, RefObject } from 'react';
import { SpringStartFn, useSpring, animated, useChain, SpringHandle, UnknownProps, useTrail } from 'react-spring';
import styles from './nav.module.css';

import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';

import { navItemsArray, navSocialArray } from '../../assets/data/navData';

interface NavProps {
  setCursor: SpringStartFn<{
    xy: number[];
  }>;
  setSize: SpringStartFn<{
    height: string;
    width: string;
    marginTop: string;
    marginLeft: string;
  }>;
}

const Nav: FC<NavProps> = ({ setCursor, setSize }) => {
  const burgerRef = useRef(null);
  const labelRef = useRef(document.createElement('label'));

  const [isOpen, changeIsOpen] = useState(false);

  const openPropsRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const openProps = useSpring({
    right: isOpen ? `0%` : '-100%',
    ref: openPropsRef,
  });

  const BurgerPropsTopRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const BurgerpropsTop = useSpring({
    backgroundColor: isOpen ? 'white' : 'black',
    transform: isOpen ? `translateY(0.15rem) rotate(-45deg)` : `translateY(0rem) rotate(0deg)`,
    ref: BurgerPropsTopRef,
  });
  const BurgerPropsBottomRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const BurgerpropsBottom = useSpring({
    backgroundColor: isOpen ? 'white' : 'black',
    transform: isOpen ? `translateY(-0.15rem) rotate(45deg)` : `translateY(0rem) rotate(0deg)`,
    ref: BurgerPropsBottomRef,
  });

  const navTrailRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const [navTrail, setTrail] = useTrail(navItemsArray.length, () => ({
    x: [-20],
    ref: navTrailRef,
  }));

  const socialTrailRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const [socialTrail, setSocialTrail] = useTrail(navSocialArray.length + 4, () => ({
    x: [-20],
    ref: socialTrailRef,
  }));

  const changeCursor = (currentRef: React.MutableRefObject<HTMLLabelElement>) => {
    const width = currentRef.current.clientWidth;
    const height = currentRef.current.clientHeight;
    const app = document.getElementById('app') as HTMLElement;
    app.onmousemove = () => {};
    setCursor({
      xy: [
        currentRef.current.getBoundingClientRect().x + width / 2,
        currentRef.current.getBoundingClientRect().y + height / 2,
      ],
    });
    // @ts-ignore
    const bodyCSS = parseFloat(getComputedStyle(document.querySelector('body')!)['font-size']);
    setSize({
      height: `${width / bodyCSS}rem`,
      width: `${height / bodyCSS}rem`,
      marginTop: `${-height / 2 / bodyCSS}rem`,
      marginLeft: `${-width / 2 / bodyCSS}rem`,
    });
  };

  const revertCursor = () => {
    const app = document.getElementById('app') as HTMLElement;

    setSize({ height: '0.5rem', width: '0.5rem', marginTop: '-0.25rem', marginLeft: '-0.25rem' });
    app.onmousemove = ({ clientX: x, clientY: y }) => setCursor({ xy: [x, y] });
  };

  const toggleNav = () => {
    // @ts-ignore
    setTrail({ x: [isOpen ? -20 : 0] });
    // @ts-ignore
    setSocialTrail({ x: [isOpen ? -20 : 0] });
    changeIsOpen(!isOpen);
  };

  useChain(
    isOpen
      ? [openPropsRef, BurgerPropsBottomRef, BurgerPropsTopRef, navTrailRef, socialTrailRef]
      : [socialTrailRef, navTrailRef, BurgerPropsTopRef, BurgerPropsBottomRef, openPropsRef],
    isOpen ? [0, 0, 0, 0.5, 0.5] : [0, 0, 0.5, 0.5, 0.5]
  );

  return (
    <nav className={styles.nav_left}>
      <input
        type="checkbox"
        value="false"
        className={styles.burger}
        id="burger-but"
        ref={burgerRef}
        onChange={toggleNav}
      />
      <label
        htmlFor="burger-but"
        ref={labelRef}
        className={styles.burger_hr_container}
        onMouseEnter={() => changeCursor(labelRef)}
        onMouseLeave={revertCursor}
      >
        <animated.hr
          className={styles.burger_hr_top}
          // @ts-ignore
          style={BurgerpropsTop}
        />
        <animated.hr
          className={styles.burger_hr_bottom}
          // @ts-ignore
          style={BurgerpropsBottom}
        />
      </label>
      <animated.div className={styles.nav_page} style={openProps}>
        <Logo className={styles.logo} />
        <div className={styles.nav_upper}>
          <div className={styles.nav_page_left}>
            <div className={styles.social_container}>
              <ul className={styles.social_ul}>
                <animated.h2
                  style={{
                    left:
                      // @ts-ignore
                      socialTrail[0].x.interpolate((x: number) => `${x}rem`),
                  }}
                  className={styles.social_h2}
                >
                  Social
                </animated.h2>
                {
                  // @ts-ignore
                  navSocialArray.map((nav, index) => {
                    return (
                      <animated.li
                        className={styles.social_ul_li}
                        style={{
                          left:
                            // @ts-ignore
                            socialTrail[index + 1].x.interpolate((x: number) => `${x}rem`),
                        }}
                      >
                        {nav.name}
                      </animated.li>
                    );
                  })
                }
              </ul>
              <animated.hr
                style={{
                  opacity:
                    // @ts-ignore
                    socialTrail[navSocialArray.length].x.interpolate((x: number) => `${x + 0.4}`),
                  left:
                    // @ts-ignore
                    socialTrail[navSocialArray.length].x.interpolate((x: number) => `${x}rem`),
                }}
                className={styles.social_hr}
              />
              <animated.h3
                style={{
                  left:
                    // @ts-ignore
                    socialTrail[navSocialArray.length + 1].x.interpolate((x: number) => `${x}rem`),
                }}
                className={styles.social_h3}
              >
                Get in touch
              </animated.h3>
            </div>
          </div>
          <ul className={styles.nav_right_ul}>
            {
              // @ts-ignore
              navTrail.map((props, index) => {
                return (
                  <animated.li
                    className={styles.nav_ul_li}
                    style={{ right: props.x.interpolate((x: number) => `${x}rem`) }}
                  >
                    {navItemsArray[index].name}
                  </animated.li>
                );
              })
            }
          </ul>
        </div>
      </animated.div>
    </nav>
  );
};
export default Nav;
