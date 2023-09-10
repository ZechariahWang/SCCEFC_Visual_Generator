
![SCCEFC-New-Logo-H-PMS-SMALL-white (1) yee](https://github.com/ZechariahWang/SCCEFC_Visual_Generator/assets/97078224/9955cec1-91b6-407f-9f42-271cea67314c)

# SCCEFC Worship Lyrics Generator 

An automatic Google slides presentation creator for lyrics. Currently utilization is only within the Shine Youth Fellowship for grades 10-12. However, further development is being considered for other departments of worship.

The current iteration of the project is only capable of making a max of three songs. This may be updated in the future, but because most worship sessions usually only have around three songs, this amount was considered to be the most optimal amount to account for computer resource efficiency. In the case that more songs are required, simply run the script once with the initial desired songs, and then add the desired songs afterwards onto the built presentation.


# Prerequisites 

If you wish to create a lyrics slide presentation, there are a couple prerequisites you must already have in order for the presentation to work.

You must have made a google slides project already. Additionally, you must have one singular slide with a text box in which you wish to paste the text in. It does not need to have any text, but a text box must be present.


![presentation_new](https://github.com/ZechariahWang/SCCEFC_Visual_Generator/assets/97078224/106fb041-1c44-43c6-a15c-f4cad7e123c9)

Once the presentation is created, copy the presentation URL and paste it into the presentation at line: 

``` 
const PRESENTATION_URL = "https://docs.google.com/presentation/d/1WbDwm1-TkXlS6rdM_P4CQFuwrC7Vzk5GcL1c5r8XO30/edit#slide=id.SLIDES_API596554833_30";
```

# Creating a Presentation

In the case less than three songs are required, you may disable song creation through the three constants:

```
const FIRST_SONG_ENABLED = true;
const SECOND_SONG_ENABLED = true;
const THIRD_SONG_ENABLED = false;
```

You may also disable or enable the presentation title screen using the constant:

```
const TITLE_ENABLED = true;
```

Or you may enable/disable a blank end screen for once all songs are finished: 

``` 
const END_SCREEN_ENABLED = true;
```

If you wish to alter font size for lyrics, titles, or dates, you may use these constants: 

```
const TITLE_SLIDE_FONT_SIZE = 40;
const LYRIC_SLIDE_FONT_SIZE = 31;
const INTRO_SLIDE_FONT_SIZE = 45;
const DATE_FONT_SIZE = 16;

const DATE_OFFSET = 36;

const PRESENTATION_NAME = "Shine Youth Group";
const PRESENTATION_DATE = "06/02/23";
```

# Adding Songs 

As of Shine 2023, the data samples of songs is currently extremely limited. Because worship planning rarely follows the exact order of the original song, I decided the best format for creating new songs would be allowing the AV user to personally customize the order and lyrics of each song. If you wish to add your own songs, there are a few steps you must follow:

### Create a Song Title Data Type

This can extremely simple, for example:
```
let MAN_OF_SORROWS_NAME = "Man of Sorrows";
```

### Create a Lyric Dictionary

In this case, it is extremely important to map each lyric value to its own designated key. It doesn't matter what you name the key, but generally it is good practice to relate it to what type of lyric it is (ex: Verse 1 = V1). Simply repeat this step with all the desired verses/chorus values. Here is an example of this:

```
let MAN_OF_SORROWS_LYRICS = {
  V1: "Man of sorrows, Lamb of God \n By His own betrayed \n The sin of man and wrath of God \n Has been on Jesus laid",
  V2: "Silent as He stood accused \n Beaten, mocked, and scorned \n Bowing to the Father's will \n He took a crown of thorns",
  C: 'Oh, that rugged cross, my salvation \n Where Your love poured out over me \n Now my soul cries out, "Hallelujah" \n "Praise and honour unto Thee"',
  V3: "Sent of heaven God's own Son \n To purchase and redeem \n And reconcile the very ones \n Who nailed Him to that tree",
  B : "Now my debt is paid \n It is paid in full \n By the precious blood \n That my Jesus spilled \n Now the curse of sin \n Has no hold on me \n Whom the Son sets free \n Oh, is free indeed"
};
```

### Create Song Order Array

Map each key from the lyric dictionary into an array in the order you wish to have the presentation created. For example:

```
let MAN_OF_SORROWS_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];
```

### Map Song to Desired Order

Depending on which order you want the song to be played, you may want to change the location of it. Simply find the part of the code where you assign the desired song order values, and change them to the desired song. For example:

```
FIRST_SONG_NAME = MAN_OF_SORROWS_NAME;
FIRST_SONG_LYRICS = MAN_OF_SORROWS_LYRICS;
FIRST_SONG_ORDER = MAN_OF_SORROWS_ORDER;
```

## Authors

- Zechariah Wang, Summer Intern (2023)


