var n = 7;

for (x = 1; x < n; x++) {
  for (y = 1; y < x; y++) {
    if (x + y) {
      document.write(y, " ");
    } else {
      document.write(" ");
    }
  }
  document.write("<br >");
}
