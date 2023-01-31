let r = Math.floor(Math.random() * (10 - 1 + 1) + 1);

let input = prompt("Bir son oyladim [1, 10]. Topib koringchi nechchi: ");

//  alert(`Men ${r} sonini o'ylagan edim, Siz ${input} sonini kiritdingiz.`);

if (input < r) {
  alert(
    `Mening sonim ${r} , Sizning ${input} kirittingiz soningiz menikidan kichikroq .`
  );
} else if (input > r) {
  alert(
    `Mening sonim ${r} , Sizning ${input} kirittingiz soningiz menikidan kattaroq .`
  );
}
