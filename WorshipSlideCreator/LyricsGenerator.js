const PRESENTATION_URL = "https://docs.google.com/presentation/d/1a7Q1xrSkLbDrA1P_ph25FOU68mE4idYakdWfYjWSi6g/edit#slide=id.SLIDES_API300132197_5";

const FIRST_SONG_ENABLED = true;
const SECOND_SONG_ENABLED = true;
const THIRD_SONG_ENABLED = false;
const TITLE_ENABLED = true;

const TITLE_SLIDE_FONT_SIZE = 40;
const LYRIC_SLIDE_FONT_SIZE = 31;
const INTRO_SLIDE_FONT_SIZE = 45;

const PRESENTATION_NAME = "Shine Youth Group";
const PRESENTATION_DATE = "2023.05.69";


/*
FIRST SONG TEMPLATE
WILL AUTOMATICALLY BE FILLED IN WITH FIRST DESIRED SONG
*/

let FIRST_SONG_NAME = "Song 1";
let FIRST_SONG_LYRICS = {
  V1:"We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  V2:"There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  Chorus:"Yes I will"};
let FIRST_SONG_ORDER = ["V1", "V2", "Chorus"];

/*
SECOND SONG TEMPLATE
WILL AUTOMATICALLY BE FILLED IN WITH SECOND DESIRED SONG
*/

let SECOND_SONG_NAME = "Song 2";
let SECOND_SONG_LYRICS = {
  V1:"2 We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  V2:"2 There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  Chorus:"2 Yes I will 2"};
let SECOND_SONG_ORDER = ["V2", "V2", "V2"];

/*
THIRD SONG TEMPLATE
WILL AUTOMATICALLY BE FILLED IN WITH THIRD DESIRED SONG
*/

let THIRD_SONG_NAME = "Song 3";
let THIRD_SONG_LYRICS = {
  V1:"3 We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  V2:"3 There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  V3:"3 Yes I will"};
let THIRD_SONG_ORDER = ["V1", "V3","V3"];


// Song Database START
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Song Title: Man of Sorrows
Date Added: June 1st 2023
*/

let MAN_OF_SORROWS_NAME = "Man of Sorrows";
let MAN_OF_SORROWS_LYRICS = {
  V1: "Man of sorrows, Lamb of God \n By His own betrayed \n The sin of man and wrath of God \n Has been on Jesus laid",
  V2: "Silent as He stood accused \n Beaten, mocked, and scorned \n Bowing to the Father's will \n He took a crown of thorns",
  C: "Oh, that rugged cross, my salvation \n Where Your love poured out over me \n Now my soul cries out, 'Hallelujah' \n 'Praise and honour unto Thee'",
  V3: "Sent of heaven God's own Son \n To purchase and redeem \n And reconcile the very ones \n Who nailed Him to that tree",
  B : "Now my debt is paid \n It is paid in full \n By the precious blood \n That my Jesus spilled \n Now the curse of sin \n Has no hold on me \n Whom the Son sets free \n Oh, is free indeed"
};
let MAN_OF_SORROWS_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];

let BUILD_MY_LIFE_NAME = "Build My Life";
let BUILD_MY_LIFE_LYRICS = {
  V1: "Worthy of every song we could ever sing \n Worthy of all the praise we could ever bring \n Worthy of every breath we could ever breathe \n We live for You, oh, we live for You",
  V2: "Jesus, the Name above every other name \n Jesus, the only One who could ever save \n Worthy of every breath we could ever breathe \n We live for You, we live for You",
  C: "Holy, there is no one like You \n There is none beside You \n Open up my eyes in wonder \n And show me who You are \n And fill me with Your heart \n And lead me in Your love to those around me",
  B : "And I will build my life upon Your love \n It is a firm foundation \n And I will put my trust in You alone \n And I will not be shaken"
};
let BUILD_MY_LIFE_ORDER = ["V1", "V2", "C", "V2", "C", "B", "C", "B"];

// Song Database END
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function create_first_song(){
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL)
  for (let i = 0; i < FIRST_SONG_ORDER.length; i++) {
    let slide = presentation.getSlides()[i];
    let shape = slide.getShapes()[0];
    let textRange = shape.getText();
    let textStyle = textRange.getTextStyle();
    textStyle.setFontSize(LYRIC_SLIDE_FONT_SIZE); 
    let current_key = FIRST_SONG_ORDER[i];
    const hasKey = current_key in FIRST_SONG_LYRICS;
    if(hasKey) {
      let current_value = FIRST_SONG_LYRICS[current_key];
      shape.getText().setText(current_value);
      shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    }
    else{
      Logger.log("Warning: No lyric type found in lyric dictionary for type... " + current_key)
    }

    if (i == FIRST_SONG_ORDER.length - 1){ break; }
    else{ slide.duplicate(); }
  }

  let first_song_title_slide = presentation.getSlides()[0];
  first_song_title_slide.duplicate();
  let shape = first_song_title_slide.getShapes()[0];
  let textRange = shape.getText();
  let textStyle = textRange.getTextStyle();
  textStyle.setFontSize(TITLE_SLIDE_FONT_SIZE); 
  shape.getText().setText(FIRST_SONG_NAME);
}

function create_second_song(){
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL)
  for (let i = 0; i < SECOND_SONG_ORDER.length; i++) {
    let slide = presentation.getSlides()[i];
    let shape = slide.getShapes()[0];
    let textRange = shape.getText();
    let textStyle = textRange.getTextStyle();
    textStyle.setFontSize(LYRIC_SLIDE_FONT_SIZE); 
    let current_key = SECOND_SONG_ORDER[i];
    const hasKey = current_key in SECOND_SONG_LYRICS;
    if(hasKey) {
      let current_value = SECOND_SONG_LYRICS[current_key];
      shape.getText().setText(current_value);
      shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    }
    else{
      Logger.log("Warning: No lyric type found in lyric dictionary for type... " + current_key)
    }
    if (i == SECOND_SONG_ORDER.length - 1){ break; }
    else{ slide.duplicate(); }
  }

  let second_song_title_slide = presentation.getSlides()[0];
  second_song_title_slide.duplicate();
  let shape = second_song_title_slide.getShapes()[0];
  let textRange = shape.getText();
  let textStyle = textRange.getTextStyle();
  textStyle.setFontSize(TITLE_SLIDE_FONT_SIZE); 
  shape.getText().setText(SECOND_SONG_NAME);
  second_song_title_slide.duplicate(); 
}

function create_third_song(){
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL)
  for (let i = 0; i < THIRD_SONG_ORDER.length; i++) {
    let slide = presentation.getSlides()[i];
    let shape = slide.getShapes()[0];
    let textRange = shape.getText();
    let textStyle = textRange.getTextStyle();
    textStyle.setFontSize(LYRIC_SLIDE_FONT_SIZE); 
    let current_key = THIRD_SONG_ORDER[i];
    const hasKey = current_key in THIRD_SONG_LYRICS;
    if(hasKey) {
      let current_value = THIRD_SONG_LYRICS[current_key];
      shape.getText().setText(current_value);
      shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    }
    else{
      Logger.log("Warning: No lyric type found in lyric dictionary for type... " + current_key)
    }

    if (i == THIRD_SONG_ORDER.length - 1){ break; }
    else{ slide.duplicate(); }
  }

  let third_song_title_slide = presentation.getSlides()[0];
  third_song_title_slide.duplicate();
  let shape = third_song_title_slide.getShapes()[0];
  let textRange = shape.getText();
  let textStyle = textRange.getTextStyle();
  textStyle.setFontSize(TITLE_SLIDE_FONT_SIZE); 
  shape.getText().setText(THIRD_SONG_NAME);
  third_song_title_slide.duplicate();

}

function make_presentation_title_slide(){
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL)
  let presentation_title = presentation.getSlides()[0];
  presentation_title.duplicate();
  let shape = presentation_title.getShapes()[0];
  let textRange = shape.getText();
  let textStyle = textRange.getTextStyle();
  textStyle.setFontSize(TITLE_SLIDE_FONT_SIZE); 
  shape.getText().setText(PRESENTATION_NAME.toUpperCase());

  let date = presentation_title.insertTextBox(PRESENTATION_DATE);
  date.setWidth(100);
  date.setHeight(50);
  date.setTop(100);
  date.getText().setText(PRESENTATION_DATE);
  let text_range = date.getText();
  let text_style = textRange.getTextStyle();
  text_style.setForegroundColor("#FFFFFF")
  textStyle.setFontSize(INTRO_SLIDE_FONT_SIZE);
  date.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
}

function make_final_screen() {
  var presentation = SlidesApp.getActivePresentation();
  var slide = presentation.getSlides()[0];
  var shape = slide.getShapes()[0];
  var textRange = shape.getText();
  textRange.deleteText();

  let date = shape.duplicate();
}


// SETTING FIRST SONG VALUE TO DESIRED DICT VAL
FIRST_SONG_NAME = MAN_OF_SORROWS_NAME;
FIRST_SONG_LYRICS = MAN_OF_SORROWS_LYRICS;
FIRST_SONG_ORDER = MAN_OF_SORROWS_ORDER;

SECOND_SONG_NAME = BUILD_MY_LIFE_NAME;
SECOND_SONG_LYRICS = BUILD_MY_LIFE_LYRICS;
SECOND_SONG_ORDER = BUILD_MY_LIFE_ORDER;

THIRD_SONG_NAME = SECOND_SONG_NAME;
THIRD_SONG_LYRICS = SECOND_SONG_LYRICS;
THIRD_SONG_ORDER = SECOND_SONG_ORDER;

function createSlidesPresentation() {
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL);
  if (THIRD_SONG_ENABLED == true) { create_third_song(); }
  if (SECOND_SONG_ENABLED == true) { create_second_song(); }
  if (FIRST_SONG_ENABLED == true) { create_first_song(); }
  if (TITLE_ENABLED == true) { make_presentation_title_slide(); }

  presentation.saveAndClose();
  Logger.log('Presentation edited with URL: ' + presentation.getUrl());
}

