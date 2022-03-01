var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (y % 2) {
      document.write(" + ");
    } else {
      document.write(" - ");
    }
  }
  document.write("<br >");
}
