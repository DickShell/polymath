"use strict";

function $(param) {
  let p = param.match(/(#?)(.+)/);
  if(p[1]) return document.getElementById(p[2]);
  return document.getElementsByTagName(p[2]);
}