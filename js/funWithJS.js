
document.getElementById('wrapper01').innerHTML = "<hr><h2>Lucky 3</h2><input id='lucky3' type='string'><br><br><button onclick='lucky3()'>Generate</button>";
document.getElementById('wrapper02').innerHTML = "<hr><h2>Lucky 4</h2><input id='lucky4' type='string'><br><br><button onclick='lucky4()'>Generate</button>";
document.getElementById('wrapper03').innerHTML = "<hr><h2>Lucky Power Number</h2><input id='powerNumber' type='string'><br><br><button onclick='powerNumber()'>Generate</button>";
function lucky3() {
  var a, b, c, d;
  a = Math.floor(Math.random()*10);
  b = Math.floor(Math.random()*10);
  c = Math.floor(Math.random()*10);

  document.getElementById('lucky3').value = a.toString() + b.toString() + c.toString();

}

function lucky4() {
  var d, e, f, g;
  d = Math.floor(Math.random()*10);
  e = Math.floor(Math.random()*10);
  f = Math.floor(Math.random()*10);
  g = Math.floor(Math.random()*10);


  document.getElementById('lucky4').value = d.toString() + e.toString() + f.toString() + g.toString();

}

function powerNumber() {
  var h,i,j,k,l,m;
  h = (Math.floor(Math.random() * 69) + 1);
  i = (Math.floor(Math.random() * 69) + 1);
  j = (Math.floor(Math.random() * 69) + 1);
  k = (Math.floor(Math.random() * 69) + 1);
  l = (Math.floor(Math.random() * 69) + 1);
  m = (Math.floor(Math.random() * 69) + 1);

  document.getElementById('powerNumber').value = h.toString() + "-" + i.toString() + "-" + j.toString() + "-" + k.toString() + "-" + l.toString() + "-" + m.toString();

}
