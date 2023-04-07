/*
 *  Author: Michelle Cavalcanti Maia
 *  JavaScript Examples
 *  The Complete JavaScript Course 2023: From Zero to Expert! - Udemy Course
 *  My website: https://www.michellemaia.com
 *  April 2023
 *
 */
"use strict";

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
