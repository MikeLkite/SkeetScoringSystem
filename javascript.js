var X = 1;
var O = 1;
var roundscore = 0;
var round_oneCurrentCell = 1 ;
var round_twoCurrentCell = 1 ;
var round_threeCurrentCell = 1 ;
var round_fourCurrentCell = 1 ;
var counthit = 0
var countmiss = 0
var countmiss2 = 0
var countmiss3 = 0
var countmiss4 = 0
var counthit2 = 0
var counthit3 = 0
var counthit4 = 0
var totalshots = counthit + countmiss
var round1 = 25
var round2 = 50
var round3 = 75
var round4 = 100

// When the user clicks the button, add X in cell
$('.HitButton').click(function () {

if ((counthit4) >= 25) {
  return false;
}

if ((counthit + countmiss) === 24) {
    alert("Round 1 Over");}

if ((counthit + countmiss) >= 0 && (counthit + countmiss) <= 25) {
    $('.R1_' + round_oneCurrentCell).text('O');
    if ($(this).text() === 'X') counthit ++;
    round_oneCurrentCell++;
    $('.R1_26').text((roundscore + counthit) - (counthit2));}

if ((counthit + countmiss) >= 26) {
    $('.R2_' + round_twoCurrentCell).text('O');
    if ($(this).text() === 'O') counthit2 ++;
    round_twoCurrentCell++;
    $('.R2_26').text((roundscore + counthit2) - (counthit3))}
    if ((counthit2 + countmiss2) === 25) {
    alert("Round 2 Over");}

if ((counthit2 + countmiss2) >= 26) {
      $('.R3_' + round_threeCurrentCell).text('O');
      if ($(this).text() === 'O') counthit3 ++;
      round_threeCurrentCell++;
      $('.R3_26').text((roundscore + counthit3) - (counthit4))}
      if ((counthit3 + countmiss3) === 25) {
      alert("Round 3 Over")}

if ((counthit3 + countmiss3) >= 26) {
    $('.R4_' + round_fourCurrentCell).text('O');
    if ($(this).text() === 'O') counthit4 ++;
    round_fourCurrentCell++;
    $('.R4_26').text(roundscore + counthit4) }
    if ((counthit4 + countmiss4) === 25) {
    alert("Round 4 Over")}
    return false;

})


// When the user clicks the button, add O in cell



///if current cell = 25 move to next row (round_two)


$('.HitButton').click(function () {

if ((counthit4) >= 25) {
  return false;
}

if ((counthit + countmiss) === 24) {
    alert("Round 1 Over");}

if ((counthit + countmiss) >= 0 && (counthit + countmiss) <= 25) {
    $('.R1_' + round_oneCurrentCell).text('O');
    if ($(this).text() === 'O') counthit ++;
    round_oneCurrentCell++;
    $('.R1_26').text((roundscore + counthit) - (counthit2));}

if ((counthit + countmiss) >= 26) {
    $('.R2_' + round_twoCurrentCell).text('O');
    if ($(this).text() === 'O') counthit2 ++;
    round_twoCurrentCell++;
    $('.R2_26').text((roundscore + counthit2) - (counthit3))}
    if ((counthit2 + countmiss2) === 25) {
    alert("Round 2 Over");}

if ((counthit2 + countmiss2) >= 26) {
      $('.R3_' + round_threeCurrentCell).text('O');
      if ($(this).text() === 'O') counthit3 ++;
      round_threeCurrentCell++;
      $('.R3_26').text((roundscore + counthit3) - (counthit4))}
      if ((counthit3 + countmiss3) === 25) {
      alert("Round 3 Over")}

if ((counthit3 + countmiss3) >= 26) {
    $('.R4_' + round_fourCurrentCell).text('O');
    if ($(this).text() === 'O') counthit4 ++;
    round_fourCurrentCell++;
    $('.R4_26').text(roundscore + counthit4) }
    if ((counthit4 + countmiss4) === 25) {
    alert("Round 4 Over")}
    return false;



})
