const FIRST_SONG_ENABLED = true
const SECOND_SONG_ENABLED = true
const THIRD_SONG_ENABLED = true
const TITLE_ENABLED = true

const TITLE_SLIDE_FONT_SIZE = 40;
const LYRIC_SLIDE_FONT_SIZE = 31

const PRESENTATION_NAME = "Shine Session 1";
const PRESENTATION_DATE = "2023.05.69";

const FIRST_SONG_NAME = "Song 1";
const FIRST_SONG_LYRICS = {
  V1:"We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  V2:"There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  Chorus:"Yes I will"};

const FIRST_SONG_ORDER = [
  "V1",
  "V2", 
  "Chorus"
];

const SECOND_SONG_NAME = "Song 2";
const SECOND_SONG_LYRICS = {
  V1:"2 We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  V2:"2 There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  Chorus:"2 Yes I will 2"};

const SECOND_SONG_ORDER = [
  "V2",
  "V2", 
  "V2"
];

const THIRD_SONG_NAME = "Song 3";
const THIRD_SONG_LYRICS = {
  V1:"3 We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  V2:"3 There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  V3:"3 Yes I will"};

const THIRD_SONG_ORDER = [
  "V1",
  "V3", 
  "V3"
];

function create_first_song(){
  if (FIRST_SONG_ENABLED == false) { return; }
  let presentation = SlidesApp.openByUrl("https://docs.google.com/presentation/d/1-OjooJN5UE4txYChXwcvhmUe8FsVPdSuHvCRJU2bO_E/edit#slide=id.SLIDES_API1395765569_0")
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
  shape.getText().setText(FIRST_SONG_NAME.toUpperCase());
}

function create_second_song(){
  if (SECOND_SONG_ENABLED == false) { return; }
  let presentation = SlidesApp.openByUrl("https://docs.google.com/presentation/d/1-OjooJN5UE4txYChXwcvhmUe8FsVPdSuHvCRJU2bO_E/edit#slide=id.SLIDES_API1395765569_0")
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
  shape.getText().setText(SECOND_SONG_NAME.toUpperCase());
  second_song_title_slide.duplicate(); 
}

function create_third_song(){
  if (THIRD_SONG_ENABLED == false) { return; }
  let presentation = SlidesApp.openByUrl("https://docs.google.com/presentation/d/1-OjooJN5UE4txYChXwcvhmUe8FsVPdSuHvCRJU2bO_E/edit#slide=id.SLIDES_API1395765569_0")
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
  shape.getText().setText(THIRD_SONG_NAME.toUpperCase());
  third_song_title_slide.duplicate();

}

function make_presentation_title_slide(){
  if (TITLE_ENABLED == false) { return; }
  let presentation = SlidesApp.openByUrl("https://docs.google.com/presentation/d/1-OjooJN5UE4txYChXwcvhmUe8FsVPdSuHvCRJU2bO_E/edit#slide=id.SLIDES_API1395765569_0")
  let presentation_title = presentation.getSlides()[0];
  presentation_title.duplicate();
  let shape = presentation_title.getShapes()[0];
  let textRange = shape.getText();
  let textStyle = textRange.getTextStyle();
  textStyle.setFontSize(TITLE_SLIDE_FONT_SIZE); 
  shape.getText().setText(PRESENTATION_NAME.toUpperCase());
}

function createSlidesPresentation() {
  let presentation = SlidesApp.openByUrl("https://docs.google.com/presentation/d/1-OjooJN5UE4txYChXwcvhmUe8FsVPdSuHvCRJU2bO_E/edit#slide=id.SLIDES_API1395765569_0")
  create_third_song()
  create_second_song();
  create_first_song();
  make_presentation_title_slide();
  presentation.saveAndClose();
  Logger.log('Presentation created with URL: ' + presentation.getUrl());
}

