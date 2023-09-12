/*
@ Project: SCCEFC Worship Lyrics Slide Generator
@ Author: Zechariah
@ Creation Date: June 3rd 2023

@Brief: 
Automatic lyrics generator for the South Calgary Chinese Evangelical Free Church Shine Youth Group. Currently only for personal use.
*/


/*
Link to the presentation
Must be a Google Slides with one slide present with all configured fonts, and layouts already prepped
*/

const PRESENTATION_URL = "https://docs.google.com/presentation/d/1WbDwm1-TkXlS6rdM_P4CQFuwrC7Vzk5GcL1c5r8XO30/edit#slide=id.SLIDES_API596554833_30";

/*
Enable specific of the presentation
First song enabled, title enabled, etc
*/

const FIRST_SONG_ENABLED                       = true;
const SECOND_SONG_ENABLED                      = true;
const THIRD_SONG_ENABLED                       = true;
const TITLE_ENABLED                            = true;
const END_SCREEN_ENABLED                       = true;

/*
Font and title text config
For lyrics, titles, and intro slides
*/

const TITLE_SLIDE_FONT_SIZE                    = 40;
const LYRIC_SLIDE_FONT_SIZE                    = 31;
const INTRO_SLIDE_FONT_SIZE                    = 45;
const DATE_FONT_SIZE                           = 16;

const DATE_OFFSET                              = 36;

const PRESENTATION_NAME                        = "Shine Youth Group";
const PRESENTATION_DATE                        = "06/02/23";


/*
FIRST SONG TEMPLATE
WILL AUTOMATICALLY BE FILLED IN WITH FIRST DESIRED SONG
*/

let FIRST_SONG_NAME = "Song 1";
let FIRST_SONG_LYRICS = {};
let FIRST_SONG_ORDER = ["V1"];

/*
SECOND SONG TEMPLATE
WILL AUTOMATICALLY BE FILLED IN WITH SECOND DESIRED SONG
*/

let SECOND_SONG_NAME = "Song 2";
let SECOND_SONG_LYRICS = {};
let SECOND_SONG_ORDER = ["V2"];

/*
THIRD SONG TEMPLATE
WILL AUTOMATICALLY BE FILLED IN WITH THIRD DESIRED SONG
*/

let THIRD_SONG_NAME = "Song 3";
let THIRD_SONG_LYRICS = {};
let THIRD_SONG_ORDER = ["V3"];


// Song Data START
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Song Title: Man of Sorrows
Date Added: June 1st 2023
From: Zechariah Wang
*/

let MAN_OF_SORROWS_NAME = "Man of Sorrows";
let MAN_OF_SORROWS_LYRICS = {
  V1: "Man of sorrows, Lamb of God \n By His own betrayed \n The sin of man and wrath of God \n Has been on Jesus laid",
  V2: "Silent as He stood accused \n Beaten, mocked, and scorned \n Bowing to the Father's will \n He took a crown of thorns",
  C: 'Oh, that rugged cross, my salvation \n Where Your love poured out over me \n Now my soul cries out, "Hallelujah" \n "Praise and honour unto Thee"',
  V3: "Sent of heaven God's own Son \n To purchase and redeem \n And reconcile the very ones \n Who nailed Him to that tree",
  B : "Now my debt is paid \n It is paid in full \n By the precious blood \n That my Jesus spilled \n Now the curse of sin \n Has no hold on me \n Whom the Son sets free \n Oh, is free indeed"
};
let MAN_OF_SORROWS_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];

/*
Song Title: Build My Life
Date Added: June 1st 2023
From: Zechariah Wang
*/

let BUILD_MY_LIFE_NAME = "Build My Life";
let BUILD_MY_LIFE_LYRICS = {
  V1: "Worthy of every song we could ever sing \n Worthy of all the praise we could ever bring \n Worthy of every breath we could ever breathe \n We live for You, oh, we live for You",
  V2: "Jesus, the Name above every other name \n Jesus, the only One who could ever save \n Worthy of every breath we could ever breathe \n We live for You, we live for You",
  C: "Holy, there is no one like You \n There is none beside You \n Open up my eyes in wonder \n And show me who You are \n And fill me with Your heart \n And lead me in Your love to those around me",
  B : "And I will build my life upon Your love \n It is a firm foundation \n And I will put my trust in You alone \n And I will not be shaken"
};
let BUILD_MY_LIFE_ORDER = ["V1", "V2", "C", "V2", "C", "B", "C", "B"];

/*
Song Title: O Praise the Name
Date Added: July 25th 2023
From: Zechariah Wang
*/

let O_PRAISE_THE_NAME_NAME = "O Praise the Name";
let O_PRAISE_THE_NAME_LYRICS = {
  V1: "I cast my mind to Calvary \n Where Jesus bled and died for me \n I see His wounds, His hands, His feet \n My Saviour on that cursed tree",
  V2: "His body bound and drenched in tears \n They laid Him down in Joseph's tomb \n The entrance sealed by heavy stone \n Messiah still and all alone",
  C: "O praise the Name of the Lord our God \n O praise His Name forevermore \n For endless days we will sing Your praise \n Oh Lord, oh Lord our God",
  V3 : "Then on the third at break of dawn \n The Son of heaven rose again \n O trampled death where is your sting? \n The angels roar for Christ the King",
  V4: "O praise the Name of the Lord our God \n O praise His Name forevermore \n For endless days we will sing Your praise \n Oh Lord, oh Lord our God"
};
let O_PRAISE_THE_NAME_ORDER = ["V1", "V2", "C", "V3", "C", "V4", "C"];

/*
Song Title: O Praise the Name
Date Added: July 25th 2023
From: Zechariah Wang
*/

let HOUSE_OF_THE_LORD_NAME = "House of the Lord";
let HOUSE_OF_THE_LORD_LYRICS = {
  V1: "We worship the God who was \n We worship the God who is \n We worship the God who evermore will be \n He opened the prison doors \n He parted the raging sea \n My God, He holds the victory",
  C1A: "There's joy in the house of the Lord \n There's joy in the house of the Lord today \n And we won't be quiet \n We shout out Your praise",
  C1B: "There's joy in the house of the Lord \n Our God is surely in this place \n And we won't be quiet \n We shout out Your praise",
  V2: "We sing to the God who heals \n We sing to the God who saves \n We sing to the God who always makes a way \n Cause He hung up on that cross \n Then He rose up from that grave \n My God's still rolling stones away",
  B : "We were the beggars \n Now we're royalty \n We were the prisoners \n Now we're running free \n We are forgiven, accepted \n Redeemed by His grace \n Let the house of the Lord sing praise",
  V4: "O praise the Name of the Lord our God \n O praise His Name forevermore \n For endless days we will sing Your praise \n Oh Lord, oh Lord our God"
};
let HOUSE_OF_THE_LORD_ORDER = ["V1", "C1A", "C1B", "V2", "C1A", "C1B", "B", "C1A", "C1B"];

/*
Song Title: Rest on Us
Date Added: July 25th 2023
From: Zechariah Wang
*/

let REST_ON_US_NAME = "Rest on Us";
let REST_ON_US_LYRICS = {
  V1: "As the Spirit was moving over the waters \n Spirit, come move over us \n Come rest on us \n Come rest on us",
  C: "Come down \n Spirit, when You move You make my heart pound \n When You fill the room \n You're here and I know You are moving \n I'm here and I know You will fill me",
  V2: "Fire and wind, come and do it again \n Open up the gates, let Heaven on in (come) \n Come rest on us (won't you come) \n Come rest on us (I feel the fire)",
  B : "Holy Spirit, come rest on us \n You're all we want \n You're all we want",
};
let REST_ON_US_ORDER = ["V1", "C", "V1", "V2", "C", "B", "C", "V1"];

/*
Song Title: King of Kings
Date Added: July 25th 2023
From: Zechariah Wang
*/

let KING_OF_KINGS_NAME = "King of Kings";
let KING_OF_KINGS_LYRICS = {
  V1: "In the darkness we were waiting \n Without hope without light \n Till from heaven You came running \n There was mercy in Your eyes \n To fulfil the law and prophets",
  V1A: "To a virgin came the Word \n From a throne of endless glory \n To a cradle in the dirt",
  C: "Praise the Father \n Praise the Son \n Praise the Spirit three in one \n God of glory Majesty \n Praise forever to the King of Kings",
  V2: "To reveal the kingdom coming \n And to reconcile the lost \n To redeem the whole creation \n You did not despise the cross",
  V2A: "For even in Your suffering \n You saw to the other side \n Knowing this was our salvation \n Jesus for our sake You died",
  V3 : "And the morning that You rose \n All of heaven held its breath \n Till that stone was moved for good \n For the Lamb had conquered death",
  V3A: "And the dead rose from their tombs \n And the angels stood in awe \n For the souls of all who’d come \n To the Father are restored",
  V4: "And the Church of Christ was born \n Then the Spirit lit the flame \n Now this gospel truth of old \n Shall not kneel shall not faint",
  V4A: "By His blood and in His Name \n In His freedom I am free \n For the love of Jesus Christ \n Who has resurrected me"
};
let KING_OF_KINGS_ORDER = ["V1", "V1A", "C", "V2", "V2A", "C", "V3", "V3A", "V4", "V4A", "C"];

/*
Song Title: Great Are You Lord
Date Added: July 25th 2023
From: Zechariah Wang
*/

let GREAT_ARE_YOU_LORD_NAME = "Great Are You Lord";
let GREAT_ARE_YOU_LORD_LYRICS = {
  V1: "You give life, You are love \n You bring light to the darkness \n You give hope, \n You restore every heart that is broken \n And great are You, Lord",
  C: "It's Your breath in our lungs \n So we pour out our praise, we pour out our praise \n It's Your breath in our lungs \n So we pour out our praise to You only",
  B : "All the earth will shout Your praise \n Our hearts will cry, these bones will sing \n Great are You, Lord",
};
let GREAT_ARE_YOU_LORD_ORDER = ["V1", "C", "V1", "C", "B", "C"];

/*
Song Title: Oceans (Where Feet May Fail)
Date Added: July 25th 2023
From: Zechariah Wang
*/

let OCEANS_NAME = "Oceans (Where Feet May Fail)";
let OCEANS_LYRICS = {
  V1: "You call me out upon the waters \n The great unknown where feet may fail \n And there I find You in the mystery \n In oceans deep my faith will stand",
  C: "And I will call upon Your Name \n And keep my eyes above the waves \n When oceans rise \n My soul will rest in Your embrace \n For I am Yours and You are mine",
  V2: "Your grace abounds in deepest waters \n Your sovereign hand will be my guide \n Where feet may fail and fear surrounds me \n You've never failed and You won't start now",
  B : "Spirit lead me where my trust is without borders \n Let me walk upon the waters \n Wherever You would call me \n Take me deeper than my feet could ever wander \n And my faith will be made stronger \n In the presence of my Saviour",
  C2: "I will call upon Your Name \n Keep my eyes above the waves \n My soul will rest in Your embrace \n I am Yours and You are mine"
};
let OCEANS_ORDER = ["V1", "C", "V2", "C", "B", "C2"];

/*
Song Title: Yes I will
Date Added: July 25th 2023
From: Zechariah Wang
*/

let YES_I_WILL_NAME = "Yes I Will";
let YES_I_WILL_LYRICS = {
  V1: "I count on one thing \n The same God who never fails \n Will not fail me now \n You won't fail me now \n In the waiting \n The same God who's never late \n Is working all things out \n You're working all things out",
  C: "Yes I will lift You high in the lowest valley \n Yes I will bless Your name \n Oh, yes, I will sing for joy when my heart is heavy \nAll my days \nOh, yes, I will",
  B : "And I choose to praise \n To glorify, glorify \n The name of all names \n That nothing can stand against",
  FC : "For all my days \n Yes I will"
};
let YES_I_WILL_ORDER = ["V1", "C", "V1", "C", "B", "C", "FC"];

/*
Song Title: A Thousand Hallelujahs
Date Added: July 25th 2023
From: Zechariah Wang
*/

let A_THOUSAND_HALLELUJAHS_NAME = "A Thousand Hallelujahs";
let A_THOUSAND_HALLELUJAHS_LYRICS = {
  V1: "Who else would rocks cry out to worship? \n Whose glory taught the stars to shine? \n Perhaps creation longs to have the words to sing \n But this joy is mine",
  C: "With a thousand hallelujahs \n We magnify Your name \n You alone deserve the glory \n The honor and the praise \n Lord Jesus \n This song is forever Yours \n A thousand hallelujahs \n And a thousand more",
  B1A : "Praise to the Lord \n To the lamb \n To the King of Heaven \n Praise for He rose \n Now He reigns \n We will sing forever",
  V2 : "Who else would die for our redemption? \n Whose resurrection means I'll rise? \n There isn't time enough to sing of all You've done \n But I have eternity to try"
};
let A_THOUSAND_HALLELUJAHS_ORDER = ["V1", "C", "V2", "C", "B", "C"];

/*
Song Title: Brokenness Aside
Date Added: July 25th 2023
From: Zechariah Wang
*/

let BROKENNESS_ASIDE_NAME = "Brokenness Aside";
let BROKENNESS_ASIDE_LYRICS = {
  V1: "Will your grace run out \n If I let you down \n 'Cause all I know \n Is how to run",
  C1A: "'Cause I am a sinner \n If it's not one thing it's another \n Caught up in words \n Tangled in lies \n But You are a Savior \n And You take brokenness aside \n And make it beautiful \n Beautiful",
  V2 : "Will You call me child \n When I tell you lies \n 'Cause all I know \n Is how to cry",
  C1B: "You make it beautiful \n You make it beautiful \n You make it beautiful \n You make it beautiful"
};
let BROKENNESS_ASIDE_ORDER = ["V1", "C1A", "V2", "C1A", "C1B", "C", "C1B"];

/*
Song Title: Great Things
Date Added: July 25th 2023
From: Zechariah Wang
*/

let GREAT_THINGS_NAME = "Great Things";
let GREAT_THINGS_LYRICS = {
  V1: "Come let us worship our King \n Come let us bow at His feet \n He has done great things \n See what our Savior has done \n See how His love overcomes \n He has done great things",
  C1: "Oh, hero of Heaven \n You conquered the grave \n You free every captive and break every chain \n Oh God, You have done great things \n We dance in Your freedom, awake and alive \n Oh Jesus, our Savior, Your name lifted high \n Oh God, You have done great things",
  V2 : "You've been faithful through every storm \n You'll be faithful forevermore \n You have done great things \n And I know You will do it again \n For Your promise is \"Yes and amen\" \n You will do great things \n God, You do great things",
  B: "Hallelujah God, above it all \n Hallelujah God, unshakable \n Hallelujah, You have done great things"
};
let GREAT_THINGS_ORDER = ["V1", "C1", "V2", "C", "B", "C"];

/*
Song Title: Same God
Date Added: July 25th 2023
From: Zechariah Wang
*/

let SAME_GOD_NAME = "Same God";
let SAME_GOD_LYRICS = {
  V1: "I'm calling on the God of Jacob \n Whose love endures through generations \n I know that You will keep Your covenant \n I'm calling on the God of Moses \n The one who opened up the ocean \n I need You now to do the same thing for me",
  C1: "O God, my God, I need You \n O God, my God, I need You now \n How I need You now \n O Rock, O Rock of ages \n I'm standing on Your faithfulness",
  V2 : "I'm calling on the God of Mary \n Whose favor rests upon the lowly \n I know with You all things are possible \n I'm calling on the God of David \n Who made a shepherd boy courageous \n I may not face Goliath \n But I've got my own giants",
  B1: "You heard Your children then \n You hear Your children now \n You are the same God \n You are the same God \n You answered prayers back then \n And You will answer now \n You are the same God \n You are the same God",
  B2: "You were providing then \n You are providing now \n You are the same God  \n You are the same God \n You moved in power then \n God, move in power now \n You are the same God \n You are the same God",
  B3: "You were a healer then \n You are a healer now \n You are the same God \n You are the same God \n You were a savior then \n You are a savior now \n You are the same God \n You are the same God"
};
let SAME_GOD_ORDER = ["V1", "C1", "V2", "C1", "B1", "B2", "B3", "C1"];

/*
Song Title: Our God
Date Added: July 27th 2023
From: Zechariah Wang
*/

let OUR_GOD_NAME = "Our God";
let OUR_GOD_LYRICS = {
  V1 : "Water You turned into wine \n Opened the eyes of the blind \n There's no one like you \n None like you ",
  C1 : "Our God is greater, our God is stronger \n God You are higher than any other \n Our God is Healer, awesome in power \n Our God, Our God",
  V2 : "Into the darkness You shine \n Out of the ashes we rise \n There's No one like you \n None like you",
  B : "And if Our God is for us, then who could ever stop us? \m And if our God is with us, then what can stand against? \n And if Our God is for us, then who could ever stop us? \n And if our God is with us, then what can stand against? ",
};
let OUR_GOD_ORDER = ["V1", "V2", "C", "V2", "B", "C"];

/*
Song Title: From the Inside Out
Date Added: July 27th 2023
From: Zechariah Wang
*/

let FROM_THE_INSIDE_OUT_NAME = "From the Inside Out";
let FROM_THE_INSIDE_OUT_LYRICS = {
  V1 : "A thousand times I've failed \n Still Your mercy remains \n And should I stumble again \n I'm caught in Your grace \n Everlasting \n Your light will shine when all else fades \n Never ending \n Your glory goes beyond all fame",
  C1 : "In my heart and my soul \n I give you control \n Consume me from the inside out, Lord \n Let justice and praise \n Become my embrace \n To love you from the inside out",
  V2 : "Your will above all else \n My purpose remains \n The art of losing myself \n In bringing You praise \n Everlasting \n Your light will shine when all else fades \n Never ending \n Your glory goes beyond all fame",
  C2 : "Everlasting \n Your light will shine when all else fades \n Never ending \n Your glory goes beyond all fame \n And the cry of my heart is to bring You praise \n From the inside out \n Lord, my soul cries out"
};
let FROM_THE_INSIDE_OUT_ORDER = ["V1", "C1", "V2", "C1", "C2", "C1", "C2"];

/*
Song Title: Lead Me to the Cross
Date Added: July 27th 2023
From: Zechariah Wang
*/

let LEAD_ME_TO_THE_CROSS_NAME = "Lead Me to the Cross";
let LEAD_ME_TO_THE_CROSS_LYRICS = {
  V1 : "Savior I come \n Quiet my soul, remember \n Redemption's hill \n Where Your blood was spilled \n For my ransom",
  C : "Lead me to the cross \n Where Your love poured out \n Bring me to my knees \n Lord I lay me down \n Rid me of myself \n I belong to You \n Oh, lead me, lead me to the cross",
  V2 : "You were as I \n Tempted and trialed \n Human \n The word became flesh \n Bore my sin and death \n Now you're risen",
  Pre : "Everything I once held dear \n I count it all as lost",
  B : "To Your heart \n To Your heart \n Lead me to Your heart \n Lead me to Your heart"
};
let LEAD_ME_TO_THE_CROSS_ORDER = ["V1", "C1", "V2", "C1", "C2", "C1", "C2"];

/*
Song Title: Broken Vessels WORK IN PROGRESS
Date Added: July 27th 2023
From: Zechariah Wang
*/

let BROKEN_VESSELS_NAME = "Broken Vessels";
let BROKEN_VESSELS_LYRICS = {
  V1 : "All these pieces \n Broken and scattered \n In mercy gathered \n Mended and whole \n Empty-handed \n But not forsaken \n I've been set free \n I've been set free",
  Pre1A : "Amazing grace \n How sweet the sound \n That saved a wretch like me, ooh \n I once was lost \n But now I am found \n Was blind but now I see",
  C : "Oh, I can see You now \n Oh, I can see the love in Your eyes \n Laying Yourself down \n Raising up the broken to life",
  V2 : "You take our failure \n You take our weakness \n You set Your treasure \n In jars of clay \n So take this heart Lord \n I'll be Your vessel \n The world to see \n Your life in me, oh",

};
let BROKEN_VESSELS_ORDER = ["V1", "Pre1A", "C", "V2", "Pre1A", "C"];

/*
Song Title: Arrival
Date Added: July 27th 2023
From: Zechariah Wang
*/

let ARRIVAL_NAME = "Arrival";
let ARRIVAL_LYRICS = {
  V1 : "Who is God that He would take our frame \n The Artisan inside the paint \n Oh breathe the very air His breath sustains \n The Architect inside the plan",
  C : "Oh, come now hail His arrival \n The God of creation \n Royalty robed in the flesh He created \n Jesus the Maker has made Himself known \n All hail the infinite infant God",
  V2 : "The One who had no start and knows no end \n Became confined in time and tense \n The Everlasting God \n The Great I Am \n In the mercy of a mother's hands",
  B1 : "The One who holds the stars \n In the creases of His hands \n Is the One who holds my heart \n Like a mother once held Him \n The One who knows what lies \n Where space has run its course \n Embraced a baby's mind \n And now I can know my God",
  V3 : "The monarch of the stars \n The King above all kings \n The Ruler of my heart \n And the Savior for my sins \n The One who sees what lies \n In each and every soul \n Embraced our finite eyes \n And now we can see our God",
  V3A: "The holy Word of God defined by name \n The Author climbed inside the page",
  B2 : "God embraced our frame \n When He graced the world He made \n All hail the divine in a manger \n Love embraced our fate \n When the playwright took the stage \n All hail the arrival of our Maker"
};
let ARRIVAL_ORDER = ["V1", "C", "V2", "C", "B1", "V3", "V3A", "C", "B2"];

/*
Song Title: What a Beautiful Name
Date Added: July 27th 2023
From: Zechariah Wang
*/

let WHAT_A_BEAUTIFUL_NAME_NAME = "What a Beautiful Name";
let WHAT_A_BEAUTIFUL_NAME_LYRICS = {
  V1 : "You were the Word at the beginning \n One with God the Lord Most High \n Your hidden glory in creation \n Now revealed in You our Christ",
  C1 : "What a beautiful Name it is \n What a beautiful Name it is \n The Name of Jesus Christ my King \n What a beautiful \n Name it is \n Nothing compares to this \n What a beautiful Name it is \n The Name of Jesus",
  V2 : "You didn’t want heaven without us \n So Jesus You brought heaven down \n My sin was great Your love was greater \n What could separate us now",
  C2 : "What a wonderful Name it is \n What a wonderful Name it is \n The Name of Jesus Christ my King \n What a wonderful Name it is \n Nothing compares to this \n What a wonderful Name it is \n The Name of Jesus",
  B1 : "Death could not hold You \n The veil tore before You \n You silence the boast of sin and grave \n The heavens are roaring \n The praise of Your glory \n For You are raised to life again",
  B2 : "You have no rival \n You have no equal \n Now and forever God You reign \n Yours is the kingdom \n Yours is the glory \n Yours is the Name above all names",
  C3 : "What a powerful Name it is \n What a powerful Name it is \n The Name of Jesus Christ my King \n What a powerful Name it is \n Nothing can stand against \n What a powerful Name it is \n The Name of Jesus"
};
let WHAT_A_BEAUTIFUL_NAME_ORDER = ["V1", "C1", "V2", "C2", "B1", "B2", "C3"];

/*
Song Title: Away In A Manger
Date Added: July 27th 2023
From: Zechariah Wang
*/

let AWAY_IN_A_MANGER_NAME = "Away In A Manger";
let AWAY_IN_A_MANGER_LYRICS = {
  V1 : "Away in a manger \n No crib for a bed \n The little Lord Jesus \n Laid down His sweet head \n The stars in the bright sky \n Looked down where He lay \n The little Lord Jesus \n Asleep on the hay",
  V2 : "The cattle are lowing \n The Baby awakes \n But little Lord Jesus \n No crying He makes \n I love You, Lord Jesus \n Look down from the sky \n And stay by my side \n Until morning is nigh",
  V3 : "Be near me, Lord Jesus \n I ask You to stay \n Close by me forever \n And love me I pray \n Bless all the dear children \n In Your tender care \n And fit us for heaven \n To live with You there"
};
let AWAY_IN_A_MANGER_ORDER = ["V1", "V2", "V3", "V1"];

/*
Song Title: Came To My Rescue
Date Added: July 27th 2023
From: Zechariah Wang
*/

let CAME_TO_MY_RESCUE_NAME = "Came To My Rescue";
let CAME_TO_MY_RESCUE_LYRICS = {
  V1 : "Falling on my knees in worship \n Giving all I am to seek Your face \n Lord, all I am is Yours \n My whole life I place in Your hands \n God of Mercy humbled I bow down \n In Your presence at Your throne",
  C : "I called, You answered \n And You came to my rescue \n And I wanna be where You are",
  V2 : "My whole life I place in Your hands \n God of Mercy, humbled I bow down \n In Your presence at Your throne",
  B : "In my life be lifted high \n In our world be lifted high \n In our love be lifted high",
};
let CAME_TO_MY_RESCUE_ORDER = ["V1", "C", "V2", "C", "B", "C"];

/*
Song Title: Canvas and Clay
Date Added: July 27th 2023
From: Zechariah Wang
*/

let CANVAS_AND_CLAY_NAME = "Canvas and Clay";
let CANVAS_AND_CLAY_LYRICS = {
  V1 : "In my mother's womb \n You formed me with Your hands \n Known and loved by You \n Before I took a breath \n When I doubt it, Lord, remind me \n I'm wonderfully made \n You're an artist and a potter \n I'm the canvas and the clay",
  C : "You make all things work together \n For my future and for my good \n You make all things work together \n For Your glory and for Your name",
  V2 : "There's a healing light \n Just beyond the clouds \n Though I've walked through fire \n I see clearly now \n I know nothing has been wasted \n No failure or mistake \n You're an artist and a potter \n I'm the canvas and the clay",
  B : "And when I doubt it, Lord, remind me \n I'm wonderfully made \n You're an artist and a potter \n I'm the canvas and the clay \n And I know nothing has been wasted \n No failure or mistake \n You're an artist and a potter \n I'm the canvas and the clay",
};
let CANVAS_AND_CLAY_ORDER = ["V1", "C", "V2", "C", "B", "C"];

/*
Song Title: Tremble
Date Added: July 27th 2023
From: Zechariah Wang
*/

let TREMBLE_NAME = "Tremble";
let TREMBLE_LYRICS = {
  V1 : "Peace, bring it all to peace \n The storm surrounding me, let it break at your name ",
  C : "Jesus, Jesus, You make the darkness tremble \n Jesus, Jesus, You silence fear \n Jesus, Jesus, You make the darkness tremble \n Jesus, Jesus",
  V2 : "Still, call the sea to still \n The rage in me to still \n Every wave, at your name",
  V3 : "Breathe, call these bones to live \n Call these lungs to sing \n Once again, oh, I will praise",
  B : "Your name is a light \n That the shadows can't deny \n Your name cannot be overcome \n Your name is alive \n Forever lifted high \n Your name cannot be overcome",
};
let TREMBLE_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];

/*
Song Title: Firm Foundation (He Won"t)
Date Added: July 27th 2023
From: Zechariah Wang
*/

let FIRM_FOUNDATION_NAME = "Firm Foundation (He Won't)";
let FIRM_FOUNDATION_LYRICS = {
  V1 : "Christ is my firm foundation \n The rock on which I stand \n When everything around me is shaken \n I've never been more glad \n That I put my faith in Jesus \n 'Cause He's never let me down \n He's faithful through generations \n So why would He fail now?",
  C : "He won't, He won't",
  V2 : "I've still got joy in chaos \n I've got peace that makes no sense \n I won't be going under \n I'm not held by my own strength \n 'Cause I've built my life on Jesus \n He's never let me down \n He's faithful through every season \n So why would He fail now?",
  C2 : "He won't \n He won't \n He won't fail \n He won't fail",
  B : "Rain came, wind blew \n But my house was built on You \n I'm safe with You \n I'm gonna make it through",
  VAMP : "I'm gonna make it through \n 'Cause I'm standing strong on you \n I'm gonna make it through \n 'Cause my house is built on You"
};
let FIRM_FOUNDATION_ORDER = ["V1", "C", "V2", "C2", "V1", "C2", "B", "VAMP", "V1", "C2"];

/*
Song Title: Raise to Life
Date Added: July 27th 2023
From: Zechariah Wang
*/

let RAISED_TO_LIFE_NAME = "Raised to Life";
let RAISED_TO_LIFE_LYRICS = {
  V1 : "Precious compassion that pours \n From the wounds that have won our salvation \n Sin was strong but the Savior is stronger \n Come let us worship Him",
  C : "Raised to life with Christ the Savior \n In His name a new creation \n Now our song will rise \n Adoring Christ the Lord",
  V2 : "Great was the debt that we owed \n And how high was the price of our healing \n Paid in full by the One who is worthy \n Come let us worship Him",
  V3 : "Death overcome by the Word \n That was spoken before it was finished \n Jesus saves is our song everlasting \n Come let us worship Him",
  B : "Sin was strong \n But Jesus is stronger \n Our shame was great \n But Jesus You're greater",
};
let RAISED_TO_LIFE_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];

/*
Song Title: Way Maker
Date Added: July 27th 2023
From: Zechariah Wang
*/

let WAY_MAKER_NAME = "Way Maker";
let WAY_MAKER_LYRICS = {
  V1 : "You are here, moving in our midst \n I worship You \n I worship You \n You are here, working in this place \n I worship You \n I worship You",
  C : "Way maker, miracle worker, promise keeper \n Light in the darkness \n My God, that is who You are \n Way maker, miracle worker, promise keeper \n Light in the darkness \n My God, that is who You are",
  V2 : "You are here, touching every heart \n I worship You \n I worship You \n You are here, healing every heart \n Healing every heart \n Oh, I worship You \n Jesus, I worship You",
  V3 : "You are here, turning lives around \n I worship You \n I worship You \n You are here, mending every heart \n I worship You \n I worship You",
  B : "Even when I don't see it, You're working \n Even when I don't feel it, You're working \n You never stop, You never stop working \n You never stop, You never stop working",
  TAG : "That is who You are \n That is who You are \n That is who You are \n That is who You are"
};
let WAY_MAKER_ORDER = ["V1", "C", "V2", "V3", "C", "TAG", "B", "C", "TAG"];

/*
Song Title: Here For You
Date Added: September 10th 2023
From: Zechariah Wang
*/

let HERE_FOR_YOU_NAME = "Here For You";
let HERE_FOR_YOU_LYRICS = {
  V1 : "Let our praise be Your welcome \n Let our songs be a sign \n We are here for You, we are here for You \n Let Your breath come from heaven \n Fill our hearts with Your life \n We are here for You, we are here for You",
  C : "To You our hearts are open \n Nothing here is hidden \n You are our one desire \n You alone are holy \n Only You are worthy \n God, let Your fire fall down",
  V2 : "Let our shout be Your anthem \n Your renown fill the skies \n We are here for You, we are here for You \n Let Your Word move in power \n Let what's dead come to life \n We are here for You, we are here for You",
  B1 : "We welcome You with praise \n We welcome You with praise \n Almighty God of love \n Be welcomed in this place",
  B2 : "Let every heart adore \n Let every soul awake \n Almighty God of love \n Be welcomed in this place"
};
let HERE_FOR_YOU_ORDER = ["V1", "C", "V2", "C", "B1", "B2", "B1"];

/*
Song Title: Promises
Date Added: September 10th 2023
From: Zechariah Wang
*/

let PROMISES_NAME = "Promises";
let PROMISES_LYRICS = {
  V1 : "God of Abraham \n You're the God of covenant \n And of faithful promises \n Time and time again \n You have proven \n You'll do just what You said",
  PC : "Though the storms may come and the winds may blow \n I'll remain steadfast \n And let my heart learn, when You speak a word \n It will come to pass",
  C : "Great is Your faithfulness to me \n Great is Your faithfulness to me \n From the rising sun to the setting same \n I will praise Your name \n Great is Your faithfulness to me",
  V2 : "God from age to age \n Though the earth may pass away \n Your word remains the same, yeah \n Your history can prove \n There's nothing You can't do \n You're faithful and true",
  B : "I put my faith in Jesus \n My anchor to the ground \n My hope and firm foundation \n He'll never let me down, no",
  Vamp : "From the rising sun to the setting same \n I will praise Your name \n Great is Your faithfulness to me",
};
let PROMISES_ORDER = ["V1", "PC", "C", "V2", "PC", "C", "B", "C", "Vamp"];

/*
Song Title: Gratitude
Date Added: September 10th 2023
From: Zechariah Wang
*/

let GRATITUDE_NAME = "Gratitude";
let GRATITUDE_LYRICS = {
  V1 : "All my words fall short \n I got nothing new \n How could I express \n All my gratitude?",
  V2 : "I could sing these songs \n As I often do \n But every song must end \n And You never do",
  C : "So I throw up my hands \n And praise You again and again \n 'Cause all that I have is a hallelujah \n Hallelujah \n And I know it's not much \n But I've nothing else fit for a King \n Except for a heart singing hallelujah \n Hallelujah",
  V3 : "I've got one response \n I've got just one move \n With my arm stretched wide \n I will worship You",
  B : "So come on, my soul \n Oh, don't you get shy on me \n Lift up your song \n 'Cause you've got a lion inside of those lungs \n Get up and praise the Lord",
};
let GRATITUDE_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];

/*
Song Title: This Is How I Thank The Lord
Date Added: September 10th 2023
From: Zechariah Wang
*/

let THIS_IS_HOW_I_THANK_THE_LORD_NAME = "This Is How I Thank The Lord";
let THIS_IS_HOW_I_THANK_THE_LORD_LYRICS = {
  V1 : "I don't have enough words \n I'll never live enough lifetimes \n To fully know Your worth \n To know all that You deserve",
  V2 : "All of my deceptions \n All of my duplicity \n Now there is no record \n You assume the best of me",
  C12 : "This is why I thank the Lord for saving me \n When I was weak, so I will sing \n This is why I thank the Lord for everything \n And this is why I thank the Lord",
  V3 : "All of my affection \n Everything I have to give \n The sum of my attention \n Is measured in the praise I lift",
  C3 : "Yeah, this is how I thank the Lord for loving me \n And keeping me, so I will sing \n This is how I thank the Lord for everything \n This is how I thank the Lord",
  B : "I will sing, I will sing \n I will lift my praises to You \n I will sing, I will sing \n 'Cause this is how I praise the Lord",
  Ending : "This is how I thank the Lord \n This is how I thank the Lord \n This is how I thank the Lord \n This is how I thank the Lord \n This is how I thank the Lord \n This is how I thank the Lord",
};
let THIS_IS_HOW_I_THANK_THE_LORD_ORDER = ["V1", "V2", "C12", "C3", "B", "C12", "Ending"];

/*
Song Title: Mighty to Save
Date Added: September 10th 2023
From: Zechariah Wang
*/

let MIGHTY_TO_SAVE_NAME = "Mighty To Save";
let MIGHTY_TO_SAVE_LYRICS = {
  V1 : "Everyone needs compassion \n A love that's never failing \n Let mercy fall on me \n Everyone needs forgiveness \n The kindness of a Savior \n The hope of nations",
  C : "Savior, He can move the mountains \n My God is mighty to save \n He is mighty to save \n Forever author of salvation \n He rose and conquered the grave \n Jesus conquered the grave",
  V2 : "So take me as You find me \n With all my fears and failures \n Fill my life again \n I give my life to follow \n Everything I believe in \n And now I surrender",
  B : "Shine Your light and let the whole world see \n We're singing for the glory of the risen King, Jesus \n Shine Your light and let the whole world see \n We're singing for the glory of the risen King"
};
let MIGHTY_TO_SAVE_ORDER = ["V1", "C", "V2", "C", "B", "C", "B", "C"];

/*
Song Title: 10K Reasons
Date Added: December 10th 2023
From: Zechariah Wang
*/

let TEN_K_REASONS_NAME = "10,000 Reasons";
let TEN_K_REASONS_LYRICS = {
  V1 : "The sun comes up, it’s a new day dawning \n It’s time to sing Your song again \n Whatever may pass and whatever lies before me, \n Let me be singing when the evening comes",
  C : "Bless the Lord, O my soul, \n O my soul, worship His holy Name \n Sing like never before, O my soul \n I’ll worship Your holy Name",
  V2 : "You’re rich in love and You’re slow to anger, \n Your Name is great and Your heart is kind \n For all Your goodness I will keep on singing, \n Ten thousand reasons for my heart to find",
  V3 : "And on that day when my strength is failing, \n The end draws near and my time has come \n Still my soul sings Your praise unending, \n Ten thousand years and then forevermore",
};
let TEN_K_REASONS_ORDER = ["V1", "C", "V2", "C", "V3", "C"];

/*
Song Title: My Lighthouse
Date Added: December 10th 2023
From: Zechariah Wang
*/

let MY_LIGHTHOUSE_NAME = "My Lighthouse";
let MY_LIGHTHOUSE_LYRICS = {
  V1 : "In my wrestling and in my doubts \n In my failures You won’t walk out \n Your great love will lead me through \n You are the peace in my troubled sea whoa oh \n You are the peace in my troubled sea",
  C : "My Lighthouse my Lighthouse \n Shining in the darkness \n I will follow You oh \n My Lighthouse my Lighthouse \n I will trust the promise \n You will carry me safe to shore \n Safe to shore safe to shore safe to shore",
  V2 : "In the silence You won’t let go \n In the questions Your truth will hold \n Your great love will lead me through \n You are the peace in my troubled sea whoa oh \n You are the peace in my troubled sea",
  V3 : "I won’t fear what tomorrow brings \n With each morning I’ll rise and sing \n My God’s love will lead me through \n You are the peace in my troubled sea whoa oh \n You are the peace in my troubled sea",
  B : "Fire before us \n You’re the brightest \n You will lead us \n Through the storms"
};
let MY_LIGHTHOUSE_ORDER = ["V1", "V2", "C", "V3", "C", "B", "C"];


// Song Data END
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  shape.getText().setText(PRESENTATION_NAME);
}

function add_date() {
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL);
  let slide = presentation.getSlides()[0];
  let date = slide.getShapes()[0];
  let title = date.duplicate();

  date.getText().setText(PRESENTATION_DATE);
  let currentTop = date.getTop();
  let newTop = currentTop + DATE_OFFSET; 
  date.setTop(newTop);
  let textRange = date.getText();
  let textStyle = textRange.getTextStyle();
  textStyle.setFontSize(DATE_FONT_SIZE); 
  textStyle.setFontFamily("Nunito")
}

function create_end_slide() {
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL); 
  let slides = presentation.getSlides();
  let counter = 0
  for (let i = 0; i < slides.length; i++) { counter = i; }
  let final_slide = presentation.getSlides()[counter].duplicate();
  let shape = final_slide.getShapes()[0];
  shape.getText().setText(" ");
}

/*
Setting songs to desired song values
If you have disabled any songs, their corresponding dictionary values will not be validated when the creatSlidesPresentation() is called
*/

FIRST_SONG_NAME = ARRIVAL_NAME;
FIRST_SONG_LYRICS = ARRIVAL_LYRICS;
FIRST_SONG_ORDER = ARRIVAL_ORDER;

SECOND_SONG_NAME = TEN_K_REASONS_NAME;
SECOND_SONG_LYRICS = TEN_K_REASONS_LYRICS;
SECOND_SONG_ORDER = TEN_K_REASONS_ORDER;

THIRD_SONG_NAME = MY_LIGHTHOUSE_NAME;
THIRD_SONG_LYRICS = MY_LIGHTHOUSE_LYRICS;
THIRD_SONG_ORDER = MY_LIGHTHOUSE_ORDER;

/*
Driver function, Generates lyrics
*/

function createSlidesPresentation() {
  let presentation = SlidesApp.openByUrl(PRESENTATION_URL);
  if (THIRD_SONG_ENABLED == true) { create_third_song(); }
  if (SECOND_SONG_ENABLED == true) { create_second_song(); }
  if (FIRST_SONG_ENABLED == true) { create_first_song(); }
  if (TITLE_ENABLED == true) { make_presentation_title_slide(); add_date(); }
  if (END_SCREEN_ENABLED == true) { create_end_slide(); }
  

  presentation.saveAndClose();
  Logger.log('Lyrics Slide Asset Generated with URL: ' + presentation.getUrl());
}
