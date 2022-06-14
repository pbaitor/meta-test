document.title = "My Dynamic Title";

var title = document.querySelector("meta[property='og:title']");
title.content = "My Dynamic Title";

var desc = document.querySelector("meta[property='og:description']");
desc.content = "My Dynamic Description";

var descmeta = document.querySelector("meta[name='description']");
descmeta.content = "My Dynamic Description";

var image = document.querySelector("meta[property='og:image']");
image.content =
  "https://dyer4xa93d5w9.cloudfront.net/fdf85b6e-a120-4954-95d2-4edbf7e2b3c2.gif";
