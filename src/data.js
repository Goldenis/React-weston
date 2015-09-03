function range(from, to) {
  var result = [from];
  while (from++ !== to) result.push(from);
  return result;
}

function wrap(text) {
  return text.replace(/(.*)\n/g, '<p>$1</p>');
}

var ipsum = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus dictum ex scelerisque molestie. Nullam nisi erat, tempus eu venenatis vel, scelerisque sed augue. Aliquam erat volutpat. Aenean nec sagittis metus. In scelerisque malesuada sem, id porta est aliquet interdum. Ut volutpat leo sed magna pharetra, ut bibendum purus vestibulum. Quisque sodales risus sed imperdiet pulvinar. Mauris cursus ornare accumsan. Duis semper sollicitudin iaculis. Etiam felis augue, fermentum iaculis arcu ac, hendrerit vestibulum orci. Donec facilisis ultricies sem vitae blandit. Quisque tempus ex ut pulvinar facilisis.</p><p>Praesent vitae lobortis eros. Donec vel sem at tortor rutrum faucibus. Nullam elementum varius neque sit amet fermentum. Curabitur et nibh orci. Proin faucibus interdum dolor, id maximus metus facilisis et. Mauris eu mauris et mi dignissim fermentum quis a eros. Phasellus ac erat eget ligula semper cursus id ullamcorper massa. In malesuada quis leo efficitur pretium. Pellentesque tincidunt nisl quis condimentum feugiat.</p>';

function preview(html) {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus dictum ex scelerisque molestie. Nullam nisi erat, tempus eu venenatis vel, scelerisque sed augue.';
  //return html.replace(/<p><\/p>/g, ' ').replace(/<\/?p>/g, '').slice(0, 140).replace(/\s*$/, '') + '...';
}

module.exports = {
  boutique: range(1, 3).map(i => ({
    id: i,
    slug: i + '',
    title: 'Art',
    content: ipsum,
    preview: 'Exploring the idea that there is something similar between uncovering insight in a contemplative. And unclear with you.',
    img: 'http://westonjamespalmer.com/wp-content/uploads/2014/08/Supreme_Weston-James-Palmer-610x405.jpg'
  })),

  //stories: range(1, 12).map(i => ({
  //  id: i,
  //  slug: i + '',
  //  title: 'Lorem Ipsum',
  //  content: ipsum,
  //  preview: preview(ipsum),
  //  img: 'http://placehold.it/1280x850',
  //  author: 'Weston James Palmer'
  //})),

  stories: [
    {
      id: 0,
      title: 'Universe Speak to Me Behind the Scenes',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/Weston-James_Whats-in-My-Head_112.jpg',
      author: 'Weston James Palmer',
      slug: 'universe-speak-to-me-behind-the-scenes'
    },
    {
      id: 1,
      title: 'Zen and The Art of The Zen',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/slide-1.jpg',
      author: 'Weston James Palmer',
      slug: 'zen_and_the_art_of_the_zen'
    },
    {
      id: 2,
      title: 'Universe Speak to Me Behind the Scenes',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/Weston-James_Whats-in-My-Head_112.jpg',
      author: 'Weston James Palmer',
      slug: 'universe-speak-to-me-behind-the-scenes_2'
    },
    {
      id: 3,
      title: 'Zen and The Art of The Zen',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/slide-1.jpg',
      author: 'Weston James Palmer',
      slug: 'zen_and_the_art_of_the_zen_2'
    },
    {
      id: 4,
      title: 'Universe Speak to Me Behind the Scenes',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/Weston-James_Whats-in-My-Head_112.jpg',
      author: 'Weston James Palmer',
      slug: 'universe-speak-to-me-behind-the-scenes_3'
    },
    {
      id: 5,
      title: 'Zen and The Art of The Zen',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/slide-1.jpg',
      author: 'Weston James Palmer',
      slug: 'zen_and_the_art_of_the_zen_3'
    },
    {
      id: 6,
      title: 'Universe Speak to Me Behind the Scenes',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/Weston-James_Whats-in-My-Head_112.jpg',
      author: 'Weston James Palmer',
      slug: 'universe-speak-to-me-behind-the-scenes_4'
    },
    {
      id: 7,
      title: 'Zen and The Art of The Zen',
      preview: 'It all started with the Idea from the Sharon Van Etten song “Magic Chords”…..Go watch “Universe Speak to Me” in the gallery and read an explanation where the idea came from.',
      content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.

I told him the story of my young life so far. About my decision to move to America with my Father. About my plan to become an artist when I grew up. And about Amanda, a girl I had recently kissed. He listened attentively to everything. And then it was his turn.

He told me that his work required him to travel, a lot. That he wasn’t a rich man, but he was happy. And then he told me that he collected air.
“Did you just say you collect air?” I asked with the curiosity of a 12-year-old.

“Yes, that’s right,” he responded. “Air.”

He said his wife had to stay home and take care of the family while he set out on his vocational journeys. Early in their marriage, as he stepped out the door, suitcase in hand, heading to France for a business trip, his wife gave him a kiss goodbye, said, “I love you,” and then joked, “Bring me back some of Paris.”

So, he did just that.

He told me that while walking around a Parisian market one afternoon he saw an old empty glass vial that was about 3-inches-tall. He immediately purchased it, took the cork out of the top, and then held it in the air for a few seconds while the market-stall women looked at him inquisitively. He then stuffed the cork back in the top, said thank you, and walked away. Later, back in his hotel room, he taped a piece of paper to the bottle that read: Paris.

When he got home, he gave his wife the glass vial and said, “Here you go dear, I brought you back some of Paris. This is some Parisian air.”
Thus began a trend. Wherever he would go for work, he would bring back some local air for his wife. Before long, he had given her dozens of these little vials filled with San Francisco, New York City, Taiwan, London, Valdez and Cape Town. Each one made her happier than the last, he told me.
I remember looking out of the window and thinking to myself, “Hmmm, I should do that. I should collect air too.” As that particular thought swirled around in my head, the man tapped me on the shoulder and said, “Don’t collect air, collect something that makes sense for you.”

Over the years I tried doing just that. I attempted to collect matchbooks, buttons, stamps and coins. I even tried collecting yellow rubber ducks — at one point, amassing hundreds of them. But nothing really stuck; it always felt like I was collecting for the sake of collecting. Eventually, I gave up.

Then, earlier last year, I was coming back from a work-related trip in Germany and I sat down on the plane next to a man in his mid 40s who told me an all too familiar story: He traveled for work while his wife stayed home with the kids, he wasn’t rich, but he was happy. And then he told me that he collected sand.

“Sand?” I asked. “Did you just say you collect sand?”

“Yes, that’s right,” he responded. “Sand.” He went on to tell me his seven-year-old son was obsessed with the beach and had asked his father to bring back sand from beaches around the world while he was on his work-related trips. So far, the man told me with a proud smile, he had collected eight or nine vials of sand for his son. He said they were all proudly displayed in the child’s bedroom window.

The man looked at me and asked, “Do you collect anything?”

At first I didn’t know how to respond, I hadn’t thought about it in some time. And then I instinctively told him that I actually collect stories —about people, or events, or places, or companies, or moments in time. That I collect these stories and keep them as words and photos. That sometimes I keep the stories for myself, but mostly I share them with others: in articles in The New York Times. In my books. Online.

I turned and looked out of the plane window while we floated through the clouds at 35,000 feet and thought about what I had just said. Then I looked back at the man and replied, “I guess you could say I collect air.”`),
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/slide-1.jpg',
      author: 'Weston James Palmer',
      slug: 'zen_and_the_art_of_the_zen_4'
    }
  ],

  gallery: range(1, 4).map(i => ({
    id: i,
    slug: i + '',
    title: 'Universe Speak To Me',
    preview: [
      'Director: Weston James Palmer',
      'DP: Dylan Knight',
      'Editor: Marat Shaya',
      'Talent: Christina Masterson'
    ].join('\n'),
    date: '3/27/2014',
    img: 'http://westonjamespalmer.com/wp-content/uploads/2014/09/Universe-Speak-To-Me_Weston-James-Palmer_Rachel-Nguyen.jpg',
    content: wrap(`As a kid, I spent a lot of time traveling alone on airplanes.

I was born in England and moved to the United States when I was 12 years old after my parents split up. Like a pingpong ball being lobbed across the ocean in slow motion, I bounced back-and-forth internationally several times a year between my family. Two weeks here, two months there, and then back again.

During one flight, an older man — probably in his early 60s — sat down next to me. He looked at me, nodded, and took a deep familiar breath as we settled in for the 8 hours we would share together at 35,000 feet. His skin was creased and worn, and his white wavy hair looked like it was sculpted from clay. As he looked over at me, he smiled and the wrinkles around his lips settled into a shape that seemed comfortable and familiar to him. I knew immediately he was kind and we began talking.`)
  })),

  phhhoto: range(1, 14).map(i => ({id: i, img: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10852685_539756786160481_1693885865_s.jpg'})),
  instagram: range(1, 21).map(i => ({id: i, img: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10838653_828351770544676_229762590_s.jpg'})),

  //slides: range(1, 3).map(i => ({
  //  id: i,
  //  img: 'http://placehold.it/1920x1080',
  //  title: 'Zen and The Art of Insight Generation ' + i,
  //  category: 'Stories',
  //  text: 'Exploring the idea that there is something similar between uncovering insight in a contemplative practice.',
  //  bottomText: 'by Weston James Palmer'
  //}))
  slides: [
    {
      id: 0,
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/slide-1.jpg',
      category: 'Stories',
      categoryColor: '#b3b3b1',
      title: 'We Like To Pretend',
      titleColor: '#fff',
      text: 'With Christina Masterson',
      textColor: '#767675',
      bottomText: 'by Weston James Palmer',
      bottomTextColor: '#fff'
    },
    {
      id: 1,
      img: 'http://westonjamespalmer.com/wp-content/uploads/2014/06/Weston-James_Whats-in-My-Head_112.jpg',
      category: 'Stories',
      categoryColor: '#b3b3b1',
      title: 'Do Not Read My First Story',
      titleColor: '#fff',
      text: 'This Is Weston James Palmer',
      textColor: '#f5f5f5',
      bottomText: 'by Weston James Palmer',
      bottomTextColor: '#fff'
    }
  ]
};