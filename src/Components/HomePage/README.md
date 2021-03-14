# Homepage

Find the documentation of the homepage code in this file.

### Statically

All the images used on this page are hosted on statically (to reduce http requests and dave memory) and are sourced from [this forked repository](https://github.com/ananyalohani/iiitdplaybook).

### Testimonies

- The testimonies(displayed as cards) on the last 5 sections of the homepage, are stored in Real Time Database on Firebase.
- The `getTestimonies()` method fetches the testimonies from Firebase and stores it temporary arrays, and then sets the respective state variables `portraits`, `exploring`, `definingPoint`, `graduating` and `nostalgia` with data.

### React Fullpage

- The entire layout of the homepage is made using `react-fullpage`.
- The documentation of `react-fullpage` can be found [here](https://github.com/alvarotrigo/react-fullpage) and the detailed description of all the options can be found [here](https://github.com/alvarotrigo/fullPage.js#options).
- For options that may not seem intuitively obvious:
  - `fitToSection={true}` ...
- The `Footer` had to be included as a section of react-fullpage because otherwise, it's impossible to scroll below the fullpage sections. `fp-auto-height` here is essential to prevent the `Footer` component from being padded with whitespace.

### Sections of the Homepage

#### Welcome

- The tilt on hover animation of the welcome text is given by the `Tilt` component from `react-parallax-tilt`.
- The code for the `particles.js` animation can be found in `src/Components/ParticleAnim`.

#### Phases Of College

**Note**: Find the code for this section in `PhasesOfCollege.js`.
Nothing fancy here, just basic css styling of the heading and images.

- The list of images to be displayed is stored as an array of json objects `itemList`, each object containing the title and the statically link to the image.
- The images in `itemList` are styled as polaroid pictures. The method `randomAngle()` generates a random angle between -15deg to 15deg for each image to be rotated by.
- The title 'Phases of College Life' is displayed as a `textCard` with the background as `webkit-linear-gradient`. Refer to `PhasesOfCollege.css`.

#### Baby Steps, Exploring, Defining Point, Graduation, Nostalgia

All of these sections follow the same format so I grouped them together.

The following JSX elements are enclosed within a flexbox div with `className='section-wrapper'`:

- An optional section animation\*.
- The section has an illustration with `className='section-image'` which are stored in `babyStepsImg`, `exploringImg`, `definingImg`, `graduationImg`, `nostalgiaImg` in the beginning(lines 20-31).
- Styling of illustration for each section may vary slightly so make sure you take a look at `Homepage.css` for that.
- The following JSX elements are enclosed within a flexbox div with `className='section-container'`:
  - Section title with `className='section-title'`
  - A small paragraph of text with `className='section-text'`
- The testimonies stored in the state variables are displayed as a carousel of cards. The component `Testimonials` in `src/Components/Testimonies` takes care of this.

\*Some sections have custom animations, for e.g. `Clouds` component in Exploring, `Stars` in Nostalgia.
