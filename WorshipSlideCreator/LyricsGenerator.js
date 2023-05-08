const lyrics = {
  V1:"We worship the God who is",
  V2:"Theres joy in the house of the lord",
  Chorus:"Yes I will"};

function createSlidesPresentation() {
  let presentation = SlidesApp.openByUrl("https://docs.google.com/presentation/d/1-OjooJN5UE4txYChXwcvhmUe8FsVPdSuHvCRJU2bO_E/edit#slide=id.SLIDES_API1395765569_0")
  for (let i = 0; i < 3; i++) {
    let slide = presentation.getSlides()[i];
    let shape = slide.getShapes()[0];

    let keys = Object.keys(lyrics);
    let current_key = keys[i];
    let current_value = lyrics[current_key];
    shape.getText().setText(current_value);

    let newSlide = slide.duplicate();
  }
  presentation.saveAndClose();
  Logger.log('Presentation created with URL: ' + presentation.getUrl());
}

