import { connect } from "react-redux";
import React, { useEffect } from "react";
import MyFullCalendar from './components/fullCalendar/fullCalendar';
import TimeOfDay from './components/timeOfDay/timeOfDay';
import LanguageSwitcher from './components/languaageSwitcher/LanguageSwitcher'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faCheckSquare, faCog, faBars, faCalendarAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./App.module.css";
import { Navbar, Button } from "react-bulma-components";
import { useState } from "react";
library.add(faBell,faCheckSquare, faAngleLeft,faBars, faCalendarAlt);

function App(props) {
  const [isOpen, setisOpen] = useState(false);
  
  const openNav = () => {
    setisOpen(!isOpen)
    if(!isOpen){
      document.getElementsByClassName(classes.Sidenav)[0].style.width = "250px";
      document.getElementsByClassName(classes.Grid)[0].style.marginRight = "250px";
    }else{
      document.getElementsByClassName(classes.Sidenav)[0].style.width = "0";
      document.getElementsByClassName(classes.Grid)[0].style.marginRight = "0";
    }
  }
  const { locale } = props;
  // useEffect(() => {
  //     //document.dir = props.locale === "he" ? "rtl" : "ltr";
  // }, [props.locale]);
  return (      
    <div className={classes.App}>
  <div className={classes.Sidenav}>

  </div>
    <div className={classes.Grid}>
      <header className={`${classes.Item} ${classes.A}`}>
        <button className={classes.SwichButton} onClick={openNav}><FontAwesomeIcon rotation={180} icon={!isOpen ? faBars : faAngleLeft}/></button>
        <div className={classes.Date}><h1>לוח שנה</h1></div>
        <div className={classes.Logo}><FontAwesomeIcon size="2x" icon={faCalendarAlt}/></div>
      </header>
      <div className={`${classes.Item} ${classes.B}`}> <MyFullCalendar/></div>
      <div className={`${classes.Item} ${classes.C}`}><TimeOfDay/></div>
      {/* <div  className={locale === "he" ? "App rtl" : "App ltr"}>
      <MyFullCalendar/>
      <TimeOfDay/>
      </div> */}
    </div>
    </div>
  );
}
const mapStateToProps = state => ({ locale: state.i18n.locale });
export default connect(mapStateToProps)(App);
