const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});

export default ({
  name: 'ian booms music',
  slogan: 'Freelance Music Composer',
  email: 'theoriginalibums@gmail.com',
  defaultBanner: './images/banner.jpg',
  logo: './images/avatar.jpg',
  address: null,
  contactPrompt: 'I compose music in a variety of styles!<br><br>Message me with your project details, and I will get back to you with a music commission quote.',
  social: {
    twitter: 'https://twitter.com/ianboomsmusic',
    soundcloud: 'https://soundcloud.com/ianbooms'
  }
});

